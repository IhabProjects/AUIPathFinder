import { School, SchoolInfo, Major } from '../types';
import { schools, majors } from '../data/schools';
import { schoolQuestions } from '../data/questions';
import { sseQuestions, sbaMinorQuestions, shssQuestions } from '../data/questions';

export function determineSchool(answers: Record<string, number>) {
  const scores = {
    SSE: 0,
    SHSS: 0,
    SBA: 0
  };

  // Calculate scores
  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const question = schoolQuestions.find(q => `question_${q.id}` === questionId);
    if (question) {
      const option = question.options[answerIndex];
      Object.entries(option.scores).forEach(([school, score]) => {
        scores[school as keyof typeof scores] += score;
      });
    }
  });

  // Calculate percentages (now out of 10 total possible points per school)
  const maxPossibleScore = 10; // 5 questions × max 2 points per question
  const percentages = {
    SSE: (scores.SSE / maxPossibleScore) * 100,
    SHSS: (scores.SHSS / maxPossibleScore) * 100,
    SBA: (scores.SBA / maxPossibleScore) * 100
  };

  // Find the highest scoring school
  let highestScore = 0;
  let selectedSchool = '';
  Object.entries(percentages).forEach(([school, score]) => {
    if (score > highestScore) {
      highestScore = score;
      selectedSchool = school;
    }
  });

  return {
    name: selectedSchool,
    score: Math.round(highestScore),
    allScores: Object.fromEntries(
      Object.entries(percentages).map(([school, score]) => [
        school,
        Math.round(score)
      ])
    )
  };
}

export function determineMajors(
  school: School,
  answers: Record<string, number>
): Major[] {
  return majors.filter(major => major.school === school);
}

type ProgramScores = Record<string, number>;

export function calculateProgramScores(type: 'major' | 'minor', answers: Record<string, number>): ProgramScores {
  const questions = type === 'major' ? sseQuestions : sbaMinorQuestions;
  const initialScores: ProgramScores = type === 'major'
    ? { CS: 0, BDA: 0, RESE: 0, TPM: 0, GE: 0, EMS: 0 }
    : { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 };

  let totalPossibleScore = questions.length * 5; // Max score per question is 5

  // Calculate scores
  Object.entries(answers).forEach(([questionId, value]) => {
    const question = questions.find(q => `question_${q.id}` === questionId);
    if (question && question.scores[value]) {
      Object.entries(question.scores[value]).forEach(([program, score]) => {
        initialScores[program] += score;
      });
    }
  });

  // Normalize scores to percentages
  const scores: ProgramScores = {};
  Object.entries(initialScores).forEach(([program, score]) => {
    scores[program] = Math.round((score / totalPossibleScore) * 100);
  });

  return scores;
}

export function getProgramScores(type: 'major' | 'minor' | 'shss', answers: Record<string, number>) {
  if (type === 'shss') {
    const scores = { IS: 0, CS: 0, TPM: 0, ESS: 0, HRD: 0 };
    const totalPossibleScore = shssQuestions.length * 5;

    Object.entries(answers).forEach(([questionId, value]) => {
      const question = shssQuestions.find(q => `question_${q.id}` === questionId);
      if (question) {
        Object.entries(question.scores).forEach(([program, scoreMap]) => {
          scores[program] += scoreMap[value];
        });
      }
    });

    // Normalize and boost scores
    return Object.entries(scores)
      .map(([program, score]) => ({
        program,
        score: Math.min(Math.round((score / totalPossibleScore) * 100) +
          (score > totalPossibleScore * 0.7 ? 10 : score > totalPossibleScore * 0.5 ? 5 : 0), 100)
      }))
      .sort((a, b) => b.score - a.score);
  }

  if (type === 'minor') {
    const scores = { CS: 0, MATH: 0, IS: 0, HRD: 0, OS: 0, COMM: 0, GS: 0, AS: 0, ENG: 0, PL: 0 };
    let totalPossibleScore = 0;

    // Calculate scores and maximum possible score
    Object.entries(answers).forEach(([questionId, value]) => {
      const question = sbaMinorQuestions.find(q => `question_${q.id}` === questionId);
      if (question) {
        Object.entries(question.scores[value]).forEach(([program, score]) => {
          scores[program] += score;
        });

        // Calculate maximum possible score for this question
        const maxScores = Object.values(question.scores[5]); // Use highest score (5) as reference
        totalPossibleScore += Math.max(...maxScores);
      }
    });

    // Convert to percentages and sort
    return Object.entries(scores)
      .map(([program, score]) => ({
        program,
        score: Math.round((score / totalPossibleScore) * 100)
      }))
      .sort((a, b) => b.score - a.score);
  }

  // For other types, use the existing calculateProgramScores
  const scores = calculateProgramScores(type, answers);
  return Object.entries(scores)
    .map(([program, score]) => ({ program, score }))
    .sort((a, b) => b.score - a.score);
}

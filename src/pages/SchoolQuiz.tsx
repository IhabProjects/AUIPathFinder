import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { schoolQuestions } from '../data/questions';
import { schools } from '../data/schools';
import { determineSchool } from '../utils/quizLogic';

export default function SchoolQuiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question = schoolQuestions[currentQuestion];

  const handleAnswer = (questionId: number, answer: number) => {
    setSelectedAnswer(answer);
    const newAnswers = {
      ...answers,
      [`question_${questionId}`]: answer
    };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuestion < schoolQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate school match
      const schoolMatch = determineSchool(answers);

      // Store result
      localStorage.setItem('schoolMatch', JSON.stringify(schoolMatch));

      // Navigate to school result page
      navigate('/school-result');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-notion p-8 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-600">
            School Finder
          </h2>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div
              className="absolute h-2 bg-primary-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / schoolQuestions.length) * 100}%` }}
            />
          </div>
          <p className="text-gray-600 mt-2">
            Question {currentQuestion + 1} of {schoolQuestions.length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-notion p-6">
        <p className="text-xl mb-8 text-gray-900">{question.question}</p>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(question.id, index)}
              className={`w-full p-4 text-left rounded-lg border transition-colors
                       ${selectedAnswer === index
                         ? 'border-primary-500 bg-primary-50 text-primary-700'
                         : 'border-surface-200 hover:bg-primary-50 hover:border-primary-200'}
                       focus:outline-none focus:ring-2 focus:ring-primary-500`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg
                       hover:bg-primary-700 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {currentQuestion === schoolQuestions.length - 1 ? 'See Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-gray-600">
        <p>{currentQuestion + 1} of {schoolQuestions.length} questions</p>
      </div>
    </div>
  );
}

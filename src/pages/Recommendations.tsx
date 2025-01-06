import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProgramScores } from '../utils/quizLogic';
import { majorDescriptions, minorDescriptions } from '../data/questions';

export default function Recommendations() {
  const navigate = useNavigate();
  const [results, setResults] = useState<{ program: string; score: number }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMinor, setIsMinor] = useState(false);

  useEffect(() => {
    const programAnswers = JSON.parse(localStorage.getItem('programAnswers') || '{}');
    const schoolMatch = JSON.parse(localStorage.getItem('schoolMatch') || '{}');

    if (!programAnswers.answers) {
      navigate('/school-quiz');
      return;
    }

    setIsMinor(programAnswers.type === 'minor');
    const scores = getProgramScores(programAnswers.type, programAnswers.answers);
    setResults(scores.filter(result => result.score > 30)); // Only show relevant matches
  }, [navigate]);

  const currentResult = results[currentIndex];
  const descriptions = isMinor ? minorDescriptions : majorDescriptions;
  const description = currentResult ? descriptions[currentResult.program] : null;

  if (!description || results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <div className="bg-white rounded-lg shadow-notion p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Strong Matches Found</h2>
          <p className="text-gray-600 mb-6">Try retaking the quiz with different answers.</p>
          <button
            onClick={() => navigate(isMinor ? '/minor-quiz' : '/major-quiz')}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-notion p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Match {currentIndex + 1} of {results.length} ({currentResult.score}% Match)
          </h2>
          <h3 className="text-2xl font-semibold text-primary-600 mb-6">
            {description.name}
          </h3>
          <div className="h-2 bg-gray-200 rounded-full mb-4">
            <div
              className="h-2 bg-primary-600 rounded-full transition-all duration-300"
              style={{ width: `${currentResult.score}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-6">{description.description}</p>

          <h4 className="font-semibold text-lg mb-3">Key Skills:</h4>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            {description.keySkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-lg mb-3">Career Opportunities:</h4>
          <ul className="list-disc list-inside text-gray-700">
            {description.careers.map(career => (
              <li key={career}>{career}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentIndex(prev => prev - 1)}
            disabled={currentIndex === 0}
            className="px-6 py-2 text-gray-600 disabled:opacity-50 hover:text-primary-600 transition-colors"
          >
            ← Previous Match
          </button>
          <button
            onClick={() => navigate(isMinor ? '/minor-quiz' : '/major-quiz')}
            className="px-6 py-2 text-primary-600 hover:text-primary-700"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => setCurrentIndex(prev => prev + 1)}
            disabled={currentIndex === results.length - 1}
            className="px-6 py-2 text-gray-600 disabled:opacity-50 hover:text-primary-600 transition-colors"
          >
            Next Match →
          </button>
        </div>
      </div>
    </div>
  );
}

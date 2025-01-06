import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProgramScores } from '../utils/quizLogic';
import { shssMajorDescriptions } from '../data/questions';

export default function SHSSResults() {
  const navigate = useNavigate();
  const [results, setResults] = useState<{ program: string; score: number }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const programAnswers = JSON.parse(localStorage.getItem('programAnswers') || '{}');
    if (!programAnswers.answers || programAnswers.type !== 'shss') {
      navigate('/shss-quiz');
      return;
    }

    const scores = getProgramScores('shss', programAnswers.answers);
    setResults(scores.filter(result => result.score > 30));
  }, [navigate]);

  const currentResult = results[currentIndex];
  const description = currentResult ? shssMajorDescriptions[currentResult.program] : null;

  if (!description || results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <div className="bg-white rounded-lg shadow-notion p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Strong SHSS Major Matches Found</h2>
          <p className="text-gray-600 mb-6">Try retaking the quiz with different answers.</p>
          <button
            onClick={() => navigate('/shss-quiz')}
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
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Your SHSS Major Matches
          </h2>
          <p className="text-gray-600 mt-2">
            Match {currentIndex + 1} of {results.length}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgb(22 163 74)"
                strokeWidth="3"
                strokeDasharray={`${currentResult.score}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{currentResult.score}%</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary-600 mb-4">
            {description.name}
          </h3>
          <p className="text-lg text-gray-700">
            {description.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Key Skills</h4>
            <ul className="space-y-2">
              {description.keySkills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Career Opportunities</h4>
            <ul className="space-y-2">
              {description.careers.map((career, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {career}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentIndex(prev => prev - 1)}
            disabled={currentIndex === 0}
            className="px-6 py-2 text-gray-600 disabled:opacity-50 hover:text-primary-600 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous Match
          </button>
          <button
            onClick={() => navigate('/shss-quiz')}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => setCurrentIndex(prev => prev + 1)}
            disabled={currentIndex === results.length - 1}
            className="px-6 py-2 text-gray-600 disabled:opacity-50 hover:text-primary-600 transition-colors flex items-center"
          >
            Next Match
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

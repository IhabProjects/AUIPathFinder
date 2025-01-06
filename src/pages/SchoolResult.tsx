import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { schools } from '../data/schools';

export default function SchoolResult() {
  const navigate = useNavigate();

  useEffect(() => {
    const schoolMatch = JSON.parse(localStorage.getItem('schoolMatch') || '{}');
    if (!schoolMatch.name) {
      navigate('/school-quiz');
      return;
    }

    // Redirect to appropriate quiz based on school match
    setTimeout(() => {
      switch (schoolMatch.name) {
        case 'SSE':
          navigate('/major-quiz');
          break;
        case 'SBA':
          navigate('/minor-quiz');
          break;
        case 'SHSS':
          navigate('/shss-quiz');
          break;
        default:
          navigate('/school-quiz');
      }
    }, 3000); // 3 second delay to show the result
  }, [navigate]);

  const schoolMatch = JSON.parse(localStorage.getItem('schoolMatch') || '{}');
  const school = schools.find(s => s.name === schoolMatch.name);

  if (!school) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-notion p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Perfect Match Found!
        </h2>
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
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
                strokeDasharray={`${schoolMatch.score}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">{schoolMatch.score}%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary-600 mb-4">
            {school.name} - {school.fullName}
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            {school.description}
          </p>
        </div>

        <p className="text-gray-600 mb-6">
          Redirecting you to find your ideal {schoolMatch.name === 'SBA' ? 'minor' : 'major'}...
        </p>

        <div className="animate-pulse">
          <div className="w-8 h-8 mx-auto">
            <svg className="w-full h-full text-primary-600" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

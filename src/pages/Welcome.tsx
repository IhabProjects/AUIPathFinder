import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/school-quiz');
  };

  return (
    <div className="min-h-[calc(100vh-theme(space.32))] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-notion hover:shadow-notion-hover transition-shadow">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Welcome to AUI Academic Path Finder
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Let's help you discover your perfect academic path at AUI
            </p>
            <p className="text-base md:text-lg mb-12 text-gray-600">
              We'll guide you through a series of questions to find the best school and major for you.
            </p>
            <button
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg
                       hover:bg-primary-700 transition-colors duration-200 font-medium text-base
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

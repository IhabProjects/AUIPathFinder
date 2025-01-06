import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sseQuestions } from '../data/questions';
import QuestionSlider from '../components/QuestionSlider';

export default function MajorQuiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sliderValue, setSliderValue] = useState(3);

  const schoolMatch = JSON.parse(localStorage.getItem('schoolMatch') || '{}');

  useEffect(() => {
    if (!schoolMatch?.name || schoolMatch.name !== 'SSE') {
      navigate('/school-quiz');
    }
  }, [navigate, schoolMatch]);

  useEffect(() => {
    setSliderValue(3);
  }, [currentQuestion]);

  const question = sseQuestions[currentQuestion];

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setAnswers(prev => ({
      ...prev,
      [`question_${question.id}`]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < sseQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      localStorage.setItem('programAnswers', JSON.stringify({
        type: 'major',
        answers
      }));
      navigate('/recommendations');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  if (!question) return null;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-notion p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Find Your SSE Major
        </h2>
        <div className="relative w-full bg-gray-200 h-2 rounded-full">
          <div
            className="absolute h-2 bg-primary-600 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((currentQuestion + 1) / sseQuestions.length) * 100}%` }}
          />
        </div>
        <p className="text-gray-600 mt-2">
          Question {currentQuestion + 1} of {sseQuestions.length}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-notion p-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={question.id}
            className="text-xl mb-8 text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {question.question}
          </motion.p>
        </AnimatePresence>

        <div className="mb-8">
          <QuestionSlider
            value={sliderValue}
            onChange={handleSliderChange}
            description={question.description}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className={`px-6 py-2 text-gray-600 hover:text-primary-600 transition-colors
                      ${currentQuestion === 0 ? 'invisible' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg
                     hover:bg-primary-700 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {currentQuestion === sseQuestions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}

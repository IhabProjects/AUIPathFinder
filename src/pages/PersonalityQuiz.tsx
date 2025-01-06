import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { calculateRecommendations } from '../utils/quizLogic';

const personalityQuestions = [
  // Analytical/Technical Questions
  {
    id: 1,
    question: "I enjoy solving complex mathematical problems",
    category: "analytical"
  },
  {
    id: 2,
    question: "I like working with computers and technology",
    category: "technical"
  },
  {
    id: 3,
    question: "I prefer tasks that require logical thinking over creative expression",
    category: "analytical"
  },
  {
    id: 4,
    question: "I enjoy analyzing data and finding patterns",
    category: "analytical"
  },
  // Business/Management Questions
  {
    id: 5,
    question: "I am interested in how businesses operate and make money",
    category: "business"
  },
  {
    id: 6,
    question: "I enjoy leading teams and organizing group activities",
    category: "management"
  },
  {
    id: 7,
    question: "I like developing strategies and planning for the future",
    category: "business"
  },
  // Creative/Communication Questions
  {
    id: 8,
    question: "I enjoy creative writing and artistic expression",
    category: "creative"
  },
  {
    id: 9,
    question: "I am good at explaining complex ideas to others",
    category: "communication"
  },
  {
    id: 10,
    question: "I enjoy public speaking and presentations",
    category: "communication"
  },
  // Social Sciences/Humanities
  {
    id: 11,
    question: "I am interested in understanding human behavior and psychology",
    category: "social"
  },
  {
    id: 12,
    question: "I enjoy learning about different cultures and languages",
    category: "humanities"
  },
  {
    id: 13,
    question: "I care about social issues and want to help people",
    category: "social"
  },
  // Science/Research
  {
    id: 14,
    question: "I enjoy conducting experiments and research",
    category: "science"
  },
  {
    id: 15,
    question: "I am curious about how things work in the natural world",
    category: "science"
  }
];

export default function PersonalityQuiz({ onComplete }: { onComplete: () => void }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data: any) => {
    const studentInfo = JSON.parse(localStorage.getItem('studentInfo') || '{}');

    // Calculate recommended majors based on answers
    const recommendedMajors = calculateRecommendations(data);

    const results = {
      answers: data,
      studentInfo,
      recommendedMajors,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('quizResults', JSON.stringify(results));
    onComplete();
    navigate('/recommendations');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-notion p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Personality Assessment</h2>
        <p className="text-gray-600 mb-8">Answer these questions to help us understand your interests and preferences.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {personalityQuestions.map((q) => (
          <div key={q.id} className="bg-white rounded-lg shadow-notion p-6 hover:shadow-notion-hover transition-shadow">
            <p className="mb-6 text-lg text-gray-900">{q.question}</p>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className="flex flex-col items-center group cursor-pointer">
                  <input
                    type="radio"
                    value={value}
                    {...register(`question_${q.id}`, { required: true })}
                    className="sr-only peer"
                  />
                  <div className="w-full py-2 text-center rounded-lg peer-checked:bg-primary-100
                               peer-checked:text-primary-700 hover:bg-surface-100 transition-colors">
                    <span className="text-sm font-medium">
                      {value === 1 && "Strongly Disagree"}
                      {value === 2 && "Disagree"}
                      {value === 3 && "Neutral"}
                      {value === 4 && "Agree"}
                      {value === 5 && "Strongly Agree"}
                    </span>
                  </div>
                </label>
              ))}
            </div>
            {errors[`question_${q.id}`] && (
              <p className="mt-2 text-sm text-red-600">Please answer this question</p>
            )}
          </div>
        ))}

        <div className="sticky bottom-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-notion p-4">
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700
                     transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isValid}
          >
            See Recommendations
          </button>
        </div>
      </form>
    </div>
  );
}

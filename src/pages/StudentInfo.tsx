import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { StudentInfo } from '../types';

const majors = [
  "Computer Science",
  "Business Administration",
  "Communication Studies",
  "Psychology",
  "Engineering",
  "Mathematics",
  "Biology",
  "Economics",
  "Other"
];

export default function StudentInfo() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<StudentInfo>({
    mode: 'onChange'
  });

  const onSubmit = (data: StudentInfo) => {
    localStorage.setItem('studentInfo', JSON.stringify(data));
    navigate('/personality-quiz');
  };

  return (
    <div className="min-h-[calc(100vh-theme(space.32))] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-notion hover:shadow-notion-hover transition-shadow">
        <div className="p-8 md:p-12 lg:p-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">
              Student Information
            </h2>
            <p className="text-lg md:text-xl mb-12 text-gray-600 text-center">
              Tell us a bit about your academic journey
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Year
                </label>
                <select
                  {...register('academicYear', { required: 'Please select your academic year' })}
                  className="w-full p-3 border border-surface-200 rounded-lg focus:ring-2
                           focus:ring-primary-500 focus:border-primary-500 transition-all
                           text-gray-900 bg-white shadow-sm"
                >
                  <option value="">Select your year</option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                </select>
                {errors.academicYear && (
                  <p className="mt-2 text-sm text-red-600">{errors.academicYear.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Major
                </label>
                <select
                  {...register('currentMajor', { required: 'Please select your current major' })}
                  className="w-full p-3 border border-surface-200 rounded-lg focus:ring-2
                           focus:ring-primary-500 focus:border-primary-500 transition-all
                           text-gray-900 bg-white shadow-sm"
                >
                  <option value="">Select your major</option>
                  {majors.map((major) => (
                    <option key={major} value={major}>{major}</option>
                  ))}
                </select>
                {errors.currentMajor && (
                  <p className="mt-2 text-sm text-red-600">{errors.currentMajor.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current GPA
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4"
                  placeholder="Enter your GPA (0-4)"
                  {...register('gpa', {
                    required: 'Please enter your GPA',
                    min: { value: 0, message: 'GPA must be at least 0' },
                    max: { value: 4, message: 'GPA cannot exceed 4' }
                  })}
                  className="w-full p-3 border border-surface-200 rounded-lg focus:ring-2
                           focus:ring-primary-500 focus:border-primary-500 transition-all
                           text-gray-900 bg-white shadow-sm"
                />
                {errors.gpa && (
                  <p className="mt-2 text-sm text-red-600">{errors.gpa.message}</p>
                )}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg
                           hover:bg-primary-700 transition-colors duration-200 font-medium
                           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isValid}
                >
                  Continue to Personality Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

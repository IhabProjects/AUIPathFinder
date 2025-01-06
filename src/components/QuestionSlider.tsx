import { useState, useEffect } from 'react';

interface QuestionSliderProps {
  value: number;
  onChange: (value: number) => void;
  description: string;
}

export default function QuestionSlider({ value, onChange, description }: QuestionSliderProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [smoothValue, setSmoothValue] = useState(value);

  // Smoother transition when question changes
  useEffect(() => {
    if (!isDragging) {
      setSmoothValue(value);
      setDisplayValue(value);
    }
  }, [value, isDragging]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setSmoothValue(newValue);
    setDisplayValue(Math.round(newValue));
  };

  const handleRelease = () => {
    setIsDragging(false);
    const roundedValue = Math.round(smoothValue);
    setSmoothValue(roundedValue);
    setDisplayValue(roundedValue);
    onChange(roundedValue);
  };

  // Smoother magnetic snap effect
  useEffect(() => {
    if (isDragging) {
      const nearestInt = Math.round(smoothValue);
      if (Math.abs(smoothValue - nearestInt) < 0.1) {
        setSmoothValue(nearestInt);
      }
    }
  }, [smoothValue, isDragging]);

  const getTrackColor = (value: number) => {
    const percentage = ((value - 1) / 4) * 100;
    return `linear-gradient(to right,
      rgb(34 197 94) 0%,
      rgb(34 197 94) ${percentage}%,
      rgb(229 231 235) ${percentage}%,
      rgb(229 231 235) 100%)`;
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-500">1</span>
        <span className="text-lg font-medium text-gray-900">{displayValue}</span>
        <span className="text-sm text-gray-500">5</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={smoothValue}
          onChange={handleChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={handleRelease}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={handleRelease}
          style={{
            background: getTrackColor(smoothValue)
          }}
          className="relative z-10 w-full h-2 appearance-none cursor-pointer
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-6
                   [&::-webkit-slider-thumb]:h-6
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-gray-50
                   [&::-webkit-slider-thumb]:border-2
                   [&::-webkit-slider-thumb]:border-green-500
                   [&::-webkit-slider-thumb]:transition-all
                   [&::-webkit-slider-thumb]:duration-700
                   [&::-webkit-slider-thumb]:ease-in-out
                   [&::-webkit-slider-thumb]:hover:scale-110
                   [&::-webkit-slider-thumb]:active:scale-95
                   [&::-moz-range-thumb]:appearance-none
                   [&::-moz-range-thumb]:w-6
                   [&::-moz-range-thumb]:h-6
                   [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:bg-gray-50
                   [&::-moz-range-thumb]:border-2
                   [&::-moz-range-thumb]:border-green-500
                   [&::-moz-range-thumb]:transition-all
                   [&::-moz-range-thumb]:duration-700
                   [&::-moz-range-thumb]:ease-in-out
                   [&::-moz-range-thumb]:hover:scale-110
                   [&::-moz-range-thumb]:active:scale-95"
        />
        <div className="absolute left-0 right-0 flex justify-between px-[10px] mt-2">
          {[1, 2, 3, 4, 5].map((tick) => (
            <div
              key={tick}
              className={`w-1 h-1 rounded-full transition-all duration-700 ease-in-out ${
                Math.round(smoothValue) >= tick ? 'bg-green-500' : 'bg-gray-300'
              } ${Math.round(smoothValue) === tick ? 'scale-150' : ''}`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4 text-center">
        {description}
      </p>
    </div>
  );
}

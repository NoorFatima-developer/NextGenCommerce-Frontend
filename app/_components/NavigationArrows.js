import React from 'react';

const NavigationArrows = ({ onPrevious, onNext, variant, size }) => {
  const arrowStyle = variant === 'default' ? 'text-gray-800' : 'text-white'; 

  // Handle size-based styling
  const sizeStyle = size === 'md' ? 'w-8 h-8' : 'w-6 h-6'; // Adjust button size

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={onPrevious}
        className={`${arrowStyle} ${sizeStyle} flex items-center justify-center rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300`}
      >
        {/* Left arrow icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        className={`${arrowStyle} ${sizeStyle} flex items-center justify-center rounded-full bg-gray-200 p-2 transition-all hover:bg-gray-300`}
      >
        {/* Right arrow icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default NavigationArrows;

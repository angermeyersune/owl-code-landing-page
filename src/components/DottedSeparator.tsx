
import React from 'react';

interface DottedSeparatorProps {
  className?: string;
}

const DottedSeparator: React.FC<DottedSeparatorProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div className="flex items-center justify-center gap-4 w-1/2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index} 
            className="w-2 h-2 rounded-full bg-black"
          />
        ))}
      </div>
    </div>
  );
};

export default DottedSeparator;

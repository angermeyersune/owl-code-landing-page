
import React from 'react';

interface DottedSeparatorProps {
  className?: string;
}

const DottedSeparator: React.FC<DottedSeparatorProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div className="flex items-center justify-center gap-1 w-3/4">
        {Array.from({ length: 150 }).map((_, index) => (
          <div 
            key={index} 
            className="w-0.5 h-0.5 rounded-full bg-black"
          />
        ))}
      </div>
    </div>
  );
};

export default DottedSeparator;

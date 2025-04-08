
import React from 'react';

interface DottedSeparatorProps {
  className?: string;
}

const DottedSeparator: React.FC<DottedSeparatorProps> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div className="w-1/2 h-[2px] bg-transparent" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #000 50%, transparent 50%)',
          backgroundSize: '16px 2px',
          backgroundRepeat: 'repeat-x'
        }} 
      />
    </div>
  );
};

export default DottedSeparator;


import React from 'react';
import { Pencil } from 'lucide-react';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const ProgressSection = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">Weekly target</h3>
        <button className="text-lingoowl-purple flex items-center text-sm">
          Edit <Pencil className="h-3 w-3 ml-1" />
        </button>
      </div>
      
      <div className="mb-4">
        <span className="text-5xl font-bold">2</span>
        <span className="text-sm text-gray-600 ml-2">of 5 days</span>
      </div>
      
      <div className="flex justify-between">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mb-1 
              ${index < 2 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
              {day}
            </div>
            <div className={`w-1 h-1 rounded-full 
              ${index < 2 ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;

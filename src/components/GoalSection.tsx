
import React from 'react';
import { Pencil, ChevronRight } from 'lucide-react';

const GoalSection = () => {
  return (
    <div className="bg-[#FFFAE5] border border-gray-200 rounded-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">Your goal</h3>
        <button className="text-lingoowl-purple flex items-center text-sm">
          Edit <Pencil className="h-3 w-3 ml-1" />
        </button>
      </div>
      
      <p className="text-black">Change my career</p>
      
      <div className="mt-8">
        <a href="#" className="text-sm text-lingoowl-purple flex items-center">
          View achievements <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default GoalSection;

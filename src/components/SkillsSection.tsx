
import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: 'Translation basics', xp: 272, progress: 80 },
  { name: 'Machine translation', xp: 265, progress: 75 },
  { name: 'Cultural adaptation', xp: 161, progress: 55 },
  { name: 'Mobile localization', xp: 35, progress: 20 },
  { name: 'Website localization', xp: 25, progress: 15 },
  { name: 'Data analysis', xp: 10, progress: 10 }
];

const SkillsSection = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-bold">Skills</h3>
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-0.5">
            <span className="text-yellow-500 text-xs font-medium mr-1">439</span>
            <span className="text-xs font-medium">XP</span>
          </div>
          <span className="text-xs text-gray-500">newly added</span>
        </div>
        
        <div className="relative">
          <button className="flex items-center gap-1 text-sm border border-gray-200 rounded-md px-3 py-1">
            <span>Most progress</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-12 text-xs text-gray-500 mb-2">
          <div className="col-span-5"></div>
          <div className="col-span-5 flex justify-between px-4">
            <span>0</span>
            <span>75</span>
            <span>150</span>
            <span>225</span>
            <span>300</span>
          </div>
          <div className="col-span-2 text-right">
            <span>XP</span>
          </div>
        </div>
        
        {skills.map((skill, index) => (
          <div key={index} className="grid grid-cols-12 items-center">
            <div className="col-span-5 flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
                <span className="text-xs">{index + 1}</span>
              </div>
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="col-span-5">
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500" 
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-sm">{skill.xp} XP</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <a href="#" className="text-sm text-lingoowl-purple">Learn more about XP</a>
        <a href="#" className="text-sm text-lingoowl-purple flex items-center">
          View more details <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;

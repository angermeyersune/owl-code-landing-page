
import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Keep learning</h1>
      
      <div className="bg-[#FFFAE5] border border-gray-200 rounded-md overflow-hidden">
        <div className="relative">
          <div className="h-2 bg-yellow-400 w-[41%]"></div>
          <span className="absolute top-0 right-0 text-xs font-medium px-2 py-1">41%</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 border-r border-gray-200">
            <div className="mb-4">
              <span className="text-xs text-black uppercase font-medium">Course</span>
              <h2 className="text-xl font-bold flex items-center justify-between">
                Learn Translation Basics
                <ChevronRight className="h-5 w-5" />
              </h2>
              <p className="text-black text-sm">Current Module: Introduction</p>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <Button variant="outline" className="text-sm">
                Start practice session <span className="text-xs ml-2 text-black">0/1 today</span>
              </Button>
              
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Resume <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 p-6 bg-gray-50">
            <h3 className="font-medium mb-2">Make a study plan</h3>
            <p className="text-sm text-black mb-4">
              Build a learning rhythm that fits your schedule.
            </p>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Make a plan
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <a href="#" className="text-lingoowl-purple text-sm font-medium flex items-center">
          View all learning in progress <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </section>
  );
};

export default Dashboard;

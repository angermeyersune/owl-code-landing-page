
import React from 'react';
import { LayoutDashboard, BookOpen, Calendar, FileCode, Layers } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-gray-50 border-r border-gray-200">
      <div className="p-4">
        <nav className="space-y-1">
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 text-gray-800 bg-gray-100 rounded-md font-medium"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <BookOpen className="h-5 w-5" />
            <span>My learning</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <FileCode className="h-5 w-5" />
            <span>Projects</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Layers className="h-5 w-5" />
            <span>Workspaces</span>
          </a>
        </nav>
        
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Explore job opportunities</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get personalized job listings, connect with employers looking for translation talent, and more with career services.
          </p>
          <button className="w-full py-2 px-4 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">
            Get started
          </button>
          <button className="w-full py-2 px-4 text-gray-700 rounded-md text-sm font-medium mt-2 hover:bg-gray-200">
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

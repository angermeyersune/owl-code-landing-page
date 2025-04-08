
import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-3 px-4 md:px-10 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <div className="text-xl font-bold border-2 border-black p-1">
              <span className="text-black">Lingo</span>
              <span className="text-lingoowl-purple">Owl</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">My Home</a>
            <div className="flex items-center gap-1">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Catalog</a>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Resources</a>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Community</a>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Career Center</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">For Business</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Search className="h-5 w-5 text-gray-500" />
          <Bell className="h-5 w-5 text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-lingoowl-purple text-white flex items-center justify-center">
            <span className="text-sm font-medium">LO</span>
          </div>
        </div>
        
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-16 p-4 shadow-md z-20">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">My Home</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Catalog</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Resources</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Community</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Career Center</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">For Business</a>
            <div className="flex items-center gap-4 mt-2">
              <Search className="h-5 w-5 text-gray-500" />
              <Bell className="h-5 w-5 text-gray-500" />
              <div className="w-8 h-8 rounded-full bg-lingoowl-purple text-white flex items-center justify-center">
                <span className="text-sm font-medium">LO</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

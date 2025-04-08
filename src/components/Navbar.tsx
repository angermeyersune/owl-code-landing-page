
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-10 bg-white sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-lingoowl-purple">Lingo<span className="text-lingoowl-gold">Owl</span></div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-600 hover:text-lingoowl-purple font-medium transition">
              All-in-one platform <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-md p-4 mt-2 min-w-48">
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Translation Services</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Language Tools</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Content Management</a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-600 hover:text-lingoowl-purple font-medium transition">
              Resources <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-md p-4 mt-2 min-w-48">
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Translation Guides</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Language Resources</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Documentation</a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-600 hover:text-lingoowl-purple font-medium transition">
              Company <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-md p-4 mt-2 min-w-48">
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">About Us</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Careers</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">Sign in</a>
          <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary">
            Get started
          </Button>
        </div>
        
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-16 p-4 shadow-md z-20">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">All-in-one platform</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Resources</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Company</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Sign in</a>
            <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary mt-2">
              Get started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

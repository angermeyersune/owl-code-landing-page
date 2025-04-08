
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
              Learning Resources <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-md p-4 mt-2 min-w-48">
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Vocabulary Lists</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Grammar Guides</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-50 rounded-md">Pronunciation Tools</a>
            </div>
          </div>
          <a href="#features" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">Success Stories</a>
          <a href="#faq" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">Log in</a>
          <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary">
            Join Now
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
            <a href="#features" className="text-gray-600 py-2 border-b border-gray-100">Features</a>
            <a href="#testimonials" className="text-gray-600 py-2 border-b border-gray-100">Success Stories</a>
            <a href="#faq" className="text-gray-600 py-2 border-b border-gray-100">FAQ</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Log in</a>
            <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary mt-2">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

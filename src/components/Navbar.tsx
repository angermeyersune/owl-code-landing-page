
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-10 bg-white sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-lingoowl-purple">Lingo<span className="text-lingoowl-gold">Owl</span></div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">Testimonials</a>
          <a href="#faq" className="text-gray-600 hover:text-lingoowl-purple font-medium transition">FAQ</a>
        </div>
        
        <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary">
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-10 bg-[#FFFAE5] border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <div className="text-xl font-bold border-2 border-black p-1">
              <span className="text-black">Lingo</span>
              <span className="text-lingoowl-purple">Owl</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Why LingoOwl</a>
            <a href="#process" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">How It Works</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Testimonials</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">FAQ</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Enterprise</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-lingoowl-purple">Pricing</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-700">
            Log in
          </Button>
          <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary text-white">
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
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFAE5] absolute left-0 right-0 top-16 p-4 shadow-md z-20">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-gray-600 py-2 border-b border-gray-100">Why LingoOwl</a>
            <a href="#process" className="text-gray-600 py-2 border-b border-gray-100">How It Works</a>
            <a href="#testimonials" className="text-gray-600 py-2 border-b border-gray-100">Testimonials</a>
            <a href="#faq" className="text-gray-600 py-2 border-b border-gray-100">FAQ</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Enterprise</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100">Pricing</a>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" className="justify-center">
                Log in
              </Button>
              <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary justify-center text-white">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

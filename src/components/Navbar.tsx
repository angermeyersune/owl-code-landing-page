
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`w-full py-4 px-4 md:px-10 fixed top-0 z-10 transition-all duration-300 
        ${scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-[#FFFAE5] border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <div className="text-xl font-bold border-2 border-black p-1 font-lexend">
              <span className="text-black">Lingo</span>
              <span className="text-lingoowl-purple">Owl</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-bold text-gray-700 hover:text-lingoowl-purple font-lexend">Why LingoOwl</a>
            <a href="#process" className="text-sm font-bold text-gray-700 hover:text-lingoowl-purple font-lexend">How It Works</a>
            <a href="#testimonials" className="text-sm font-bold text-gray-700 hover:text-lingoowl-purple font-lexend">Testimonials</a>
            <a href="#faq" className="text-sm font-bold text-gray-700 hover:text-lingoowl-purple font-lexend">FAQ</a>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-lingoowl-purple font-lexend">Enterprise</a>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-lingoowl-purple font-lexend">Pricing</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="text-gray-700 font-lexend font-bold border-2 border-black h-10">
            Log in
          </Button>
          <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary text-white font-lexend font-bold">
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
        <div className={`md:hidden absolute left-0 right-0 top-16 p-4 shadow-md z-20 ${scrolled ? 'bg-white' : 'bg-[#FFFAE5]'}`}>
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-gray-600 py-2 border-b border-gray-100 font-lexend font-bold">Why LingoOwl</a>
            <a href="#process" className="text-gray-600 py-2 border-b border-gray-100 font-lexend font-bold">How It Works</a>
            <a href="#testimonials" className="text-gray-600 py-2 border-b border-gray-100 font-lexend font-bold">Testimonials</a>
            <a href="#faq" className="text-gray-600 py-2 border-b border-gray-100 font-lexend font-bold">FAQ</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100 font-lexend font-bold">Enterprise</a>
            <a href="#" className="text-gray-600 py-2 border-b border-gray-100 font-lexend font-bold">Pricing</a>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="justify-center font-lexend font-bold border-2 border-black">
                Log in
              </Button>
              <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary justify-center text-white font-lexend font-bold">
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

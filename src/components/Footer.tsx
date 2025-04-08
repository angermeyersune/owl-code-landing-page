
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#FFFAE5] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold border-2 border-[#FFFAE5] p-1 inline-block mb-4">
              <span className="text-[#FFFAE5]">Lingo</span>
              <span className="text-lingoowl-gold">Owl</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional translation services that save you 30-40% without compromising quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FFFAE5]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFFAE5]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFFAE5]">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFFAE5]">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Document Translation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Website Localization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Marketing Content</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Technical Documents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Legal Translation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFAE5]">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LingoOwl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">Lingo<span className="text-lingoowl-gold">Owl</span></div>
            <p className="text-gray-400 max-w-sm">
              Helping language learners achieve fluency through expert advice, practical resources, and community support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Learning Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Free Resources</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} LingoOwl. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">Twitter</span>
              🐦
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">Instagram</span>
              📷
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">LinkedIn</span>
              💼
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">YouTube</span>
              📺
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

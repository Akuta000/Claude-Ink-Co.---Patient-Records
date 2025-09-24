
import React from 'react';
import { LogoIcon } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <LogoIcon />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Claude Ink Co.</h1>
            <p className="text-xs text-gray-500">Medical Center</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Security</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Staff Login
        </button>
      </div>
    </header>
  );
};

export default Header;

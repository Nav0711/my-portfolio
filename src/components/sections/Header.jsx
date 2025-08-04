import React from 'react';
import { SOCIAL_LINKS } from '../../utils/constants';

const Header = () => {
  return (
    <header className="mb-24 border-b border-gray-200 dark:border-gray-700 pb-16 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Navdeep Singh
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
        Student Developer
      </p>
      <div className="flex justify-center gap-5 text-gray-600 dark:text-gray-400">
        {SOCIAL_LINKS.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="hover:text-gray-900 dark:hover:text-white transition-colors relative group"
          >
            {link.text}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
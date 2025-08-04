import React from 'react';
import { SOCIAL_LINKS } from '../../utils/constants';

const Header = () => {
  return (
    <header className="mb-12 pb-8 text-center animate-fade-in">
      <div className="animate-slide-down">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-text-reveal">
          Navdeep Singh
        </h1>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
          Student Developer
        </p>
      </div>

      <div className="flex justify-center gap-5 text-gray-600 dark:text-gray-400">
        {SOCIAL_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group transform hover:scale-110 animate-fade-in-stagger"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            <span className="relative z-10">{link.text}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gray-100 dark:bg-gray-800 -z-10 transition-opacity duration-300 blur-sm"></span>
          </a>
        ))}
      </div>
    </header>
  );
};



export default Header;
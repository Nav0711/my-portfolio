import React from 'react';
import { useState, useEffect } from 'react';
// import { programmingLanguages, frameworksAndTools } from '../../data/Skills';

const About = () => {
  return (
    <div className="animate-page-enter">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-down">
          About Me
        </h2>
        <div className="w-16 h-0.5 bg-gray-900 dark:bg-white opacity-30 mx-auto mb-8 animate-expand-width"></div>
      </div>

      <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300">
            I am a passionate web developer with expertise in creating modern, responsive websites. With a background in design and a keen eye for detail, I deliver solutions that not only look great but also provide an excellent user experience.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and staying up-to-date with the latest trends in web development.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h3>
            <p className="text-gray-600 dark:text-gray-400">Computer Science Student focused on web development and software engineering.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interests</h3>
            <p className="text-gray-600 dark:text-gray-400">Full-stack development, UI/UX design, open source contribution, and emerging technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
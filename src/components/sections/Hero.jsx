import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, UserCheck, MessageCircle } from 'lucide-react';

const SkillItem = ({ name, icon, isHovered, onHover, onLeave }) => (
  <div
    className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${isHovered ? 'bg-blue-900/50 scale-110' : 'bg-gray-900/30'
      }`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    style={{ minWidth: '150px' }}
  >
    <div className={`text-2xl transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>
      <span style={{ filter: isHovered ? 'none' : 'grayscale(100%)' }}>{icon}</span>
    </div>
    <span className={`font-medium whitespace-nowrap transition-all duration-300 ${isHovered ? 'text-white' : 'text-gray-400'
      }`}>{name}</span>
  </div>
);



const Hero = ({ user, setCurrentRoute }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMarqueeRunning, setIsMarqueeRunning] = useState(true);



  const skills = [
    { name: 'C/C++', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' }
  ];


  return (
    <section
      className="min-h-screen flex flex-col justify-center bg-black text-white relative overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >

      {/* Additional animated elements */}

      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl" />


      {/* Main Content */}
      <div
        className="w-full text-center z-10 relative flex-1 flex flex-col justify-center"
        style={{
          padding: '0 2rem',
          maxWidth: 'none',
          margin: 0
        }}
      >
        <div className="space-y-8 animate-fade-in">

          {/* Name */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in">
              Navdeep Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-slide-up">
              Aspiring Software Engineer | Student | Tech Enthusiast
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-700">
              <Download size={20} />
              <span>View CV</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3  hover:bg-blue-8 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-700">
              <UserCheck size={20} />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-700"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-700"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-700"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* View Work Button */}
          <div className="mt-8">
            <button
              onClick={() => setCurrentRoute && setCurrentRoute('/projects')}
              className="px-8 py-3 bg-blue-900 hover:bg-blue-800 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-slow border border-blue-700"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-4 overflow-hidden border-t border-gray-800">
        <div
          className="flex space-x-8"
          style={{
            width: 'max-content',
            animation: isMarqueeRunning ? 'marquee 20s linear infinite' : 'none',
            display: 'flex'
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => {
            const key = `${skill.name}-${index}`;
            return (
              <SkillItem
                key={key}
                name={skill.name}
                icon={skill.icon}
                isHovered={hoveredSkill === key}
                onHover={() => {
                  setHoveredSkill(key);
                  setIsMarqueeRunning(false);
                }}
                onLeave={() => {
                  setHoveredSkill(null);
                  setIsMarqueeRunning(true);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
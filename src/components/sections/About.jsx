import React from 'react';

const About = ({ registerSection }) => {
  return (
    <section
      ref={el => registerSection('about', el)}
      id="about"
      className="mb-20 animate-fade-in"
    >
      <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
        About
        <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-base">
        I am a passionate web developer with expertise in creating modern, responsive websites. With a background in design and a keen eye for detail, I deliver solutions that not only look great but also provide an excellent user experience.
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
      </p>
    </section>
  );
};

export default About;
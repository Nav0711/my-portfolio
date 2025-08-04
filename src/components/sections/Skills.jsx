import React from 'react';
import { programmingLanguages, frameworksAndTools } from '../../data/Skills';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ANIMATION_CONFIG } from '../../utils/constants';

const SkillProgressBar = ({ skill, index, isInView }) => (
  <div key={index}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
      <span className="text-xs text-gray-500">{skill.progress}%</span>
    </div>
    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 rounded-full transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          width: isInView ? `${skill.progress}%` : '0%',
          transitionDelay: `${index * ANIMATION_CONFIG.SKILL_ANIMATION_DELAY}ms`
        }}
      />
    </div>
  </div>
);

const Skills = ({ registerSection }) => {
  const { isInView, elementRef } = useIntersectionObserver();

  return (
    <section 
      ref={(el) => {
        registerSection('skills', el);
        elementRef.current = el;
      }}
      id="skills" 
      className="mb-20 animate-fade-in"
    >
      <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
        skills
        <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">Programming Languages</h3>
          <div className="space-y-5">
            {programmingLanguages.map((skill, index) => (
              <SkillProgressBar 
                key={index}
                skill={skill} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">Frameworks & Tools</h3>
          <div className="space-y-5">
            {frameworksAndTools.map((skill, index) => (
              <SkillProgressBar 
                key={index}
                skill={skill} 
                index={index + programmingLanguages.length} 
                isInView={isInView} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
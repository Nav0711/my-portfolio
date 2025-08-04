import React from 'react';
import { programmingLanguages, frameworksAndTools } from '../../data/Skills';

const SkillProgressBar = ({ skill, index }) => (
  <div key={index} className="group">
    <div className="flex justify-between items-center mb-3">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {skill.name}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
        {skill.progress}%
      </span>
    </div>
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
      <div 
        className="h-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white rounded-full shadow-sm transition-all duration-500 ease-out"
        style={{ width: `${skill.progress}%` }}
      />
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
    </h3>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <SkillProgressBar 
          key={index}
          skill={skill} 
          index={index} 
        />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="mb-20 animate-fade-in">
      <h2 className="text-xl font-semibold mb-10 text-gray-900 dark:text-white relative inline-block">
        skills
        <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gray-900 dark:bg-white opacity-30"></span>
      </h2>
      
      {/* Skills Overview */}
      <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          My technical expertise spans across multiple programming languages and modern development tools. 
          I continuously expand my skillset to stay current with industry trends and best practices.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <SkillCard 
          title="Programming Languages"
          skills={programmingLanguages}
        />
        <SkillCard 
          title="Frameworks & Tools"
          skills={frameworksAndTools}
        />
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Proficiency levels are based on hands-on experience and project complexity
        </p>
      </div>
    </section>
  );
};

export default Skills;
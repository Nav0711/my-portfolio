import React from "react";

import Skills from "../components/sections/Skills";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        <Skills />
      </div>
    </div>
  );
}

export default SkillsPage;
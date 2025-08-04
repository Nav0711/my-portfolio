import React from "react";

import CustomCursor from "../components/ui/CustomCursor";
import Navigation from "../components/ui/Navigation";
import DarkModeToggle from "../components/ui/DarkModeToggle";
import BackToTop from "../components/ui/BackToTop";
import Skills from "../components/sections/Skills";

const SkillsPage = () => {
  // Create a dummy registerSection function since we don't need section registration on this page
  const registerSection = (sectionName, element) => {
    // This is a no-op function for the standalone skills page
    // The Skills component expects this prop but we don't need functionality here
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navigation />

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Back to Top */}
      <BackToTop />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        {/* Skills Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Skills & Expertise</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A comprehensive overview of my technical skills, programming languages, and development tools. 
            Each skill represents my proficiency level based on hands-on experience and project work.
          </p>
        </div>
        
        <Skills registerSection={registerSection} />
      </div>
    </div>
  );
};

export default SkillsPage;
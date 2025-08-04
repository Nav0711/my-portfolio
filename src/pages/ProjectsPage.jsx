import {React,  } from "react";

import CustomCursor from "../components/ui/CustomCursor";
import Navigation from "../components/ui/Navigation";
import DarkModeToggle from "../components/ui/DarkModeToggle";
import BackToTop from "../components/ui/BackToTop";
import Projects from "../components/sections/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        {/*projects Section */}
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <Projects />


      </div>
    </div>
  );
}
export default ProjectsPage;
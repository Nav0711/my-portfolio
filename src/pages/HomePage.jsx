import React from 'react';

// UI Components
import CustomCursor from '../components/ui/CustomCursor';
import Navigation from '../components/ui/Navigation';
import DarkModeToggle from '../components/ui/DarkModeToggle';
import BackToTop from '../components/ui/BackToTop';
import Notification from '../components/ui/Notification';

// Section Components
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';  
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

// Hooks
import { useDarkMode } from '../hooks/useDarkMode';
import { useActiveSection } from '../hooks/useActiveSection';
import { useNotification } from '../hooks/useNotification';

// Styles
import '../styles/animations.css';

const Portfolio = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { activeSection, scrollToSection, registerSection } = useActiveSection();
  const { notification, showNotification } = useNotification();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      {/* Dark Mode Toggle */}
      <DarkModeToggle 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />

      {/* Back to Top */}
      <BackToTop />

      {/* Notification */}
      <Notification notification={notification} />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        {/* Header */}
        <Header />

        {/* About Section */}
        <About registerSection={registerSection} />


        {/* Projects Section */}
        <Projects registerSection={registerSection} />

        {/* Skills Section */}
        <Skills registerSection={registerSection} />

        {/* Contact Section */}
        <Contact 
          registerSection={registerSection}
          showNotification={showNotification}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
// hooks/useActiveSection.js
import { useState, useEffect, useCallback, useRef } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sectionsRef = useRef({});
  const observerRef = useRef(null);

  // Register a section element
  const registerSection = useCallback((sectionName, element) => {
    if (element) {
      sectionsRef.current[sectionName] = element;
    }
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionName) => {
    const element = sectionsRef.current[sectionName];
    if (element) {
      const headerOffset = 100; // Adjust based on your fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Set up intersection observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to fine-tune when sections become "active"
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the section name from the element
          const sectionName = Object.keys(sectionsRef.current).find(
            key => sectionsRef.current[key] === entry.target
          );
          if (sectionName) {
            setActiveSection(sectionName);
          }
        }
      });
    }, observerOptions);

    // Observe all registered sections
    const currentObserver = observerRef.current;
    Object.values(sectionsRef.current).forEach(element => {
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, []);

  // Re-observe when sections are registered
  useEffect(() => {
    if (observerRef.current) {
      // Disconnect current observer
      observerRef.current.disconnect();
      
      // Re-observe all current sections
      Object.values(sectionsRef.current).forEach(element => {
        if (element) {
          observerRef.current.observe(element);
        }
      });
    }
  }, [Object.keys(sectionsRef.current).length]);

  return {
    activeSection,
    scrollToSection,
    registerSection
  };
};
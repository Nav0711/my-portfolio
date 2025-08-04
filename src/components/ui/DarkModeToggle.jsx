import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-10 right-10 z-30 text-sm opacity-70 hover:opacity-100 transition-opacity text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
    >
      {darkMode ? 'light' : 'dark'}
    </button>
  );
};

export default DarkModeToggle;
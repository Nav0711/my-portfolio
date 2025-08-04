import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/Experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex gap-5">
        {NAV_LINKS.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 ${
              location.pathname === path
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
            aria-label={`Navigate to ${name} page`}
            role="link"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

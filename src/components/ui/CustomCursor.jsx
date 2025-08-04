import React from 'react';
import { useCustomCursor } from '../../hooks/useCustomCursor';

const CustomCursor = () => {
  const { cursorPosition, dotPosition } = useCustomCursor();

  return (
    <>
      {/* Main cursor ring */}
      <div 
        className="fixed w-5 h-5 border border-gray-900 dark:border-white rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{ 
          left: cursorPosition.x - 10, 
          top: cursorPosition.y - 10
        }}
      />
      {/* Cursor dot */}
      <div 
        className="fixed w-1 h-1 bg-gray-900 dark:bg-white rounded-full pointer-events-none z-50"
        style={{ 
          left: dotPosition.x - 2, 
          top: dotPosition.y - 2
        }}
      />
    </>
  );
};

export default CustomCursor;
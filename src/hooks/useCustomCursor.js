import { useState, useEffect, useRef } from 'react';
import { ANIMATION_CONFIG } from '../utils/constants';

export const useCustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef();

  // Custom cursor animation
  useEffect(() => {
    const animate = () => {
      setCursorPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * ANIMATION_CONFIG.CURSOR_FOLLOW_SPEED,
        y: prev.y + (mousePosition.y - prev.y) * ANIMATION_CONFIG.CURSOR_FOLLOW_SPEED
      }));
      
      setDotPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * ANIMATION_CONFIG.DOT_FOLLOW_SPEED,
        y: prev.y + (mousePosition.y - prev.y) * ANIMATION_CONFIG.DOT_FOLLOW_SPEED
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { cursorPosition, dotPosition };
};
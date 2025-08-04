import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = { threshold: 0.3 }) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      options
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { isInView, elementRef };
};
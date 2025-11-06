import { useEffect, useRef, useState } from 'react';

export const useScrollFillAnimation = () => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element is in viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start filling when element enters viewport, complete when it reaches center
      const scrollStart = windowHeight;
      const scrollEnd = windowHeight / 2;
      
      if (elementTop <= scrollStart && elementTop >= scrollEnd) {
        // Calculate fill percentage based on scroll position
        const scrollProgress = (scrollStart - elementTop) / (scrollStart - scrollEnd);
        const percentage = Math.min(Math.max(scrollProgress * 100, 0), 100);
        setFillPercentage(percentage);
      } else if (elementTop < scrollEnd) {
        setFillPercentage(100);
      } else {
        setFillPercentage(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { fillPercentage, elementRef };
};

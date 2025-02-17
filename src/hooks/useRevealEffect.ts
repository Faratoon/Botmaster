import { useEffect, useRef } from 'react';

export const useRevealEffect = (direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [direction]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return 'translate3d(-100px, 0, 0) rotate(-5deg)';
      case 'right': return 'translate3d(100px, 0, 0) rotate(5deg)';
      case 'up': return 'translate3d(0, 100px, 0)';
      case 'down': return 'translate3d(0, -100px, 0)';
    }
  };

  return [ref, getInitialTransform] as const;
};
import { useEffect, useRef } from 'react';

export const useSmoothTransition = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.setProperty('--scroll-ratio', '0');
            const onScroll = () => {
              const rect = element.getBoundingClientRect();
              const scrollRatio = Math.max(0, Math.min(1, 
                1 - (rect.bottom - window.innerHeight) / rect.height
              ));
              element.style.setProperty('--scroll-ratio', scrollRatio.toString());
            };
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
          }
        });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};
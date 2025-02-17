import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
  { value: '10k+', label: 'Customers' },
  { value: '150+', label: 'Countries' }
];

export const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-indigo-900" ref={ref}>
      <div className="container mx-auto px-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-500 delay-${index * 100} ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
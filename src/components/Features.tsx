import React from 'react';
import { Zap, Shield, Users, Workflow } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Experience unmatched speed with our optimized infrastructure'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and advanced security protocols'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools for seamless teamwork'
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and focus on what matters'
  }
];

export const Features = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const sectionRef = useSmoothTransition();

  return (
    <section ref={sectionRef} className="py-24 bg-white relative scroll-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Powerful Features for Modern Teams"
            className="text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage projects, automate workflows, and scale your business.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="stagger-animate perspective-container"
          data-visible={isVisible}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ParallaxCard
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-indigo-600 transition-transform duration-300 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
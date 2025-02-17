import React from 'react';
import { useParallaxTilt } from '../hooks/useParallaxTilt';

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({ children, className = '' }) => {
  const { tiltEventHandlers, style } = useParallaxTilt();

  return (
    <div
      className={`transform-gpu ${className}`}
      style={style}
      {...tiltEventHandlers}
    >
      {children}
    </div>
  );
};
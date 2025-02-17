import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = '' }) => {
  const { displayText, scramble } = useTextScramble(text);

  return (
    <h2 
      className={`cursor-pointer ${className}`}
      onMouseEnter={scramble}
    >
      {displayText}
    </h2>
  );
};
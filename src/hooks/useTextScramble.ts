import { useState, useEffect, useCallback } from 'react';

// Character pools based on character types
const pools = {
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?/`~',
};

export const useTextScramble = (text: string, duration = 20000) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const getCharPool = (char: string) => {
    if (/[a-zA-Z]/.test(char)) return pools.letters;
    if (/[0-9]/.test(char)) return pools.numbers;
    if (/\s/.test(char)) return ' '; // Maintain spaces
    return pools.symbols;
  };

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    const iterations = 20;
    const updateRate = duration / iterations;

    let step = 0;

    const scrambleStep = () => {
      setDisplayText(current =>
        current
          .split('')
          .map((char, index) => {
            if (index < Math.floor((step / iterations) * text.length)) {
              return text[index]; // Lock characters progressively
            }
            const pool = getCharPool(char);
            return pool[Math.floor(Math.random() * pool.length)];
          })
          .join('')
      );

      step += 1;

      if (step <= iterations) {
        requestAnimationFrame(scrambleStep);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    requestAnimationFrame(scrambleStep);
  }, [text, duration, isScrambling]);

  return { displayText, scramble, isScrambling };
};
'use client';

import { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  animateOn?: 'view' | 'hover'; 
}

export const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  className,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+',
  animateOn = 'hover',
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / (maxIterations / text.length);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateOn, text, maxIterations, speed]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      scramble();
    }
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: 'default' }}
    >
      {displayText}
    </span>
  );
};
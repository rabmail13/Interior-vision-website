'use client';

import { useEffect, useState } from 'react';

interface ColourfulTextProps {
  text: string;
  colors?: string[];
  interval?: number;
  className?: string;
}

const defaultColors = [
  '#ff6b6b',
  '#4ecdc4',
  '#45b7d1',
  '#96ceb4',
  '#ffeaa7',
  '#dfe6e9',
  '#a29bfe',
  '#fd79a8',
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ColourfulText({
  text,
  colors = defaultColors,
  interval = 3000,
  className = '',
}: ColourfulTextProps) {
  const [colorAssignments, setColorAssignments] = useState<string[]>([]);

  useEffect(() => {
    // Initial color assignment
    const assignColors = () => {
      const assignments = text.split('').map((_, i) => {
        return colors[i % colors.length];
      });
      return shuffleArray(assignments);
    };

    setColorAssignments(assignColors());

    // Shuffle colors at interval
    const timer = setInterval(() => {
      setColorAssignments(assignColors());
    }, interval);

    return () => clearInterval(timer);
  }, [text, colors, interval]);

  return (
    <span className={`colourful-text ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="colourful-char"
          style={{
            color: colorAssignments[index] || colors[0],
            transitionDelay: `${index * 30}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}



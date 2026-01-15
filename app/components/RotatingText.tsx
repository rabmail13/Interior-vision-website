'use client';

import { useState, useEffect } from 'react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function RotatingText({ 
  texts, 
  interval = 3000, 
  className = '' 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 800);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`rotating-text-container ${className}`}>
      <span className={`rotating-text ${isAnimating ? 'rotating-out' : 'rotating-in'}`}>
        {texts[currentIndex]}
      </span>
    </span>
  );
}


'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';

interface TypingTextProps {
  children: ReactNode;
  typingSpeed?: number;
  startDelay?: number;
  className?: string;
}

export default function TypingText({
  children,
  typingSpeed = 50,
  startDelay = 150,
  className = '',
}: TypingTextProps) {
  const [revealPercent, setRevealPercent] = useState(0);
  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Intersection Observer - detect when element is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [inView]);

  // Start delay after coming into view
  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [inView, startDelay]);

  // Typing animation using percentage reveal
  useEffect(() => {
    if (!started || !containerRef.current) return;
    
    const totalChars = containerRef.current.textContent?.length || 1;
    const stepPercent = 100 / totalChars;
    
    if (revealPercent >= 100) return;

    const timer = setTimeout(() => {
      setRevealPercent((prev) => Math.min(prev + stepPercent, 100));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [started, revealPercent, typingSpeed]);

  return (
    <span 
      ref={containerRef} 
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      {/* Hidden version for sizing */}
      <span style={{ visibility: 'hidden' }}>
        {children}
      </span>
      
      {/* Visible version with clip animation */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          whiteSpace: 'nowrap',
          clipPath: `inset(0 ${100 - revealPercent}% 0 0)`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';

interface HighlightTextProps {
  text: string;
  delay?: number; // delay in ms before highlight starts
  duration?: number; // duration of highlight animation in ms
  highlightColor?: string;
  textColor?: string;
  className?: string;
}

export default function HighlightText({
  text,
  delay = 0,
  duration = 600,
  highlightColor = '#facc15', // yellow highlight
  textColor,
  className = '',
}: HighlightTextProps) {
  const [inView, setInView] = useState(false);
  const [animating, setAnimating] = useState(false);
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

  // Start animation after delay when in view
  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      setAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, delay]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        display: 'inline',
        opacity: animating ? 1 : 0,
        transition: 'opacity 0ms',
        color: textColor,
      }}
    >
      {/* Background highlight that animates */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: animating ? '100%' : '0%',
          backgroundColor: highlightColor,
          transition: `width ${duration}ms ease-out`,
          zIndex: -1,
          borderRadius: '2px',
        }}
      />
      {text}
    </span>
  );
}


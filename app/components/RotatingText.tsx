'use client';

import { useState, useEffect, useRef } from 'react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  initialDelay?: number;
  className?: string;
}

export default function RotatingText({ 
  texts, 
  interval = 3000,
  initialDelay = 0,
  className = '' 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [inView, setInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    if (!inView) return;

    // Show the text after initialDelay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, initialDelay);

    let timer: NodeJS.Timeout;
    
    const startRotation = () => {
      timer = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsAnimating(false);
        }, 800);
      }, interval);
    };

    const delayTimer = setTimeout(startRotation, initialDelay);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [inView, texts.length, interval, initialDelay]);

  return (
    <span 
      ref={containerRef} 
      className={`rotating-text-container ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 800ms var(--ease-out-quart)'
      }}
    >
      <span 
        className={`rotating-text ${isAnimating ? 'rotating-out' : 'rotating-in'}`}
      >
        {texts[currentIndex]}
      </span>
    </span>
  );
}


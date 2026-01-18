'use client';

import { useState, useEffect, useRef } from 'react';

export default function BuiltByDesigners() {
  const [revealPercent, setRevealPercent] = useState(0);
  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const [showLines, setShowLines] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const headingText = "Built by Designers, For Designers.";
  const typingSpeed = 30;
  const startDelay = 200;

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
  }, [inView]);

  // Typing animation
  useEffect(() => {
    if (!started) return;
    
    const totalChars = headingText.length;
    const stepPercent = 100 / totalChars;
    
    if (revealPercent >= 100) return;

    const timer = setTimeout(() => {
      setRevealPercent((prev) => Math.min(prev + stepPercent, 100));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [started, revealPercent]);

  // Trigger lines to appear 1.5s after typing starts
  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      setShowLines(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [started]);

  return (
    <div ref={containerRef} className="built-container">
      <h2 className="built-heading">
        {/* Hidden version for sizing */}
        <span style={{ visibility: 'hidden' }}>
          Built by Designers, <span className="built-italic">For Designers.</span>
        </span>
        
        {/* Visible version with clip animation */}
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            clipPath: `inset(0 ${100 - revealPercent}% 0 0)`,
          }}
        >
          Built by Designers, <span className="built-italic">For Designers.</span>
        </span>
      </h2>
      
      <div className="built-subtext">
        <p className={`built-line built-line-float ${showLines ? 'built-line-visible' : ''}`} style={{ transitionDelay: '0ms' }}>
          No gimmicks.
        </p>
        <p className={`built-line built-line-float ${showLines ? 'built-line-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          No overpriced subscriptions.
        </p>
      </div>
    </div>
  );
}


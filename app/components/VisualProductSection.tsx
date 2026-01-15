'use client';

import { useEffect, useRef, useState } from 'react';

export default function VisualProductSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        gap: '1.5rem',
      }}
    >
      <h2
        className={`features-heading section-4-heading ${isVisible ? 'visible' : ''}`}
        style={{ color: '#ffffff' }}
      >
        Manage Your Projects <span className="features-italic">Anywhere</span>
      </h2>
      <img
        src="/InteriorVision main website (8).png"
        alt="Visual Product Search"
        className={`section-4-image ${isVisible ? 'visible' : ''}`}
        style={{ maxWidth: '90%', maxHeight: '70%', objectFit: 'contain' }}
      />
    </div>
  );
}

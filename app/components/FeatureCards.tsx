'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    number: '01',
    title: <>Full-Suite<br />Project Management</>,
    description: <>Communicate with Clients<br />Manage products, projects, &<br />Clients in one interface</>
  },
  {
    number: '02',
    title: <>Intelligent Inventory<br />Management</>,
    description: <>One-click save → <br />organized procurement<br />collections via our Browser<br />Extension</>
  },
  {
    number: '03',
    title: <>Automated<br />workflows to<br />save you time</>,
    description: <>Upload → AI Match<br />Auto-generated spec sheets<br />& deliverables</>
  }
];

export default function FeatureCards() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Find the scroll container to use as root
    const scrollContainer = document.querySelector('.scroll-container');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        root: scrollContainer,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="features-grid">
      {features.map((feature, index) => (
        <div 
          key={feature.number}
          className={`feature-card feature-card-animated ${isVisible ? 'is-visible' : ''}`}
          style={{ '--card-index': index } as React.CSSProperties}
        >
          <div className="feature-number">{feature.number}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}


'use client';

import { useEffect, useRef, useState } from 'react';
import { FolderPen, Brain, ChevronDown } from 'lucide-react';

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find the scroll container (parent with overflow scroll)
    const scrollRoot = document.querySelector('.scroll-container');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay animation start by 250ms
            setTimeout(() => {
              // Add visible class to trigger all staggered animations
              container.classList.add('features-visible');
            }, 250);
            // Disconnect after triggering (only animate once)
            observer.disconnect();
          }
        });
      },
      {
        root: scrollRoot,
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '0px',
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const features = [
    {
      icon: <FolderPen />,
      title: 'Full-Suite Project Management',
      description: 'Communicate with Clients. Manage products, projects, & Clients in one interface'
    },
    {
      icon: <FolderPen />,
      title: 'Intelligent Inventory Management',
      description: 'One-click save → organized procurement collections via our Browser Extension'
    },
    {
      icon: <Brain />,
      title: 'Automated workflows to save you time',
      description: 'Upload → AI Match. Auto-generated spec sheets & deliverables'
    }
  ];

  return (
    <div ref={containerRef} className="features-container">
      <h2 className="features-heading features-heading-animated">
        Key <span className="features-italic">Features</span>
      </h2>

      {/* Desktop grid layout */}
      <div className="features-grid features-grid-desktop">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card feature-card-animated"
            style={{ '--card-index': index + 1 } as React.CSSProperties}
          >
            <div className="feature-number">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile accordion layout */}
      <div className="features-accordion features-accordion-mobile">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-accordion-item ${expandedFeature === index ? 'expanded' : ''}`}
          >
            <button
              className="feature-accordion-header"
              onClick={() => toggleFeature(index)}
              aria-expanded={expandedFeature === index}
            >
              <div className="feature-accordion-header-content">
                <div className="feature-number-small">{feature.icon}</div>
                <h3 className="feature-title-small">{feature.title}</h3>
              </div>
              <ChevronDown
                className={`feature-accordion-chevron ${expandedFeature === index ? 'rotated' : ''}`}
              />
            </button>
            <div className={`feature-accordion-content ${expandedFeature === index ? 'open' : ''}`}>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


'use client';

import { useEffect, useRef } from 'react';
import { FolderPen, Brain } from 'lucide-react';

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className="features-container">
      <h2 className="features-heading features-heading-animated">
        Key <span className="features-italic">Features</span>
      </h2>

      <div className="features-grid">
        {/* Feature 01 */}
        <div
          className="feature-card feature-card-animated"
          style={{ '--card-index': 1 } as React.CSSProperties}
        >
          <div className="feature-number"><FolderPen /></div>
          <h3 className="feature-title">
            Full-Suite Project Management
          </h3>
          <p className="feature-description">
            Communicate with Clients. Manage products, projects, & Clients in one interface
          </p>
        </div>

        {/* Feature 02 */}
        <div
          className="feature-card feature-card-animated"
          style={{ '--card-index': 2 } as React.CSSProperties}
        >
          <div className="feature-number"><FolderPen /></div>
          <h3 className="feature-title">
            Intelligent Inventory Management
          </h3>
          <p className="feature-description">
            One-click save → organized procurement collections via our Browser Extension
          </p>
        </div>

        {/* Feature 03 */}
        <div
          className="feature-card feature-card-animated"
          style={{ '--card-index': 3 } as React.CSSProperties}
        >
          <div className="feature-number"><Brain /></div>
          <h3 className="feature-title">
            Automated workflows to save you time
          </h3>
          <p className="feature-description">
            Upload → AI Match. Auto-generated spec sheets & deliverables
          </p>
        </div>
      </div>
    </div>
  );
}


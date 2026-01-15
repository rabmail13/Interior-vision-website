'use client';

import { useEffect, useRef } from 'react';

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger all staggered animations
            container.classList.add('features-visible');
            // Disconnect after triggering (only animate once)
            observer.disconnect();
          }
        });
      },
      {
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
          <div className="feature-number">01</div>
          <h3 className="feature-title">
            Full-Suite<br />Project Management
          </h3>
          <p className="feature-description">
            Communicate with Clients<br />
            Manage products, projects, &<br />
            Clients in one interface
          </p>
        </div>

        {/* Feature 02 */}
        <div 
          className="feature-card feature-card-animated" 
          style={{ '--card-index': 2 } as React.CSSProperties}
        >
          <div className="feature-number">02</div>
          <h3 className="feature-title">
            Intelligent Inventory<br />Management
          </h3>
          <p className="feature-description">
            One-click save → <br />
            organized procurement<br />
            collections via our Browser<br />
            Extension
          </p>
        </div>

        {/* Feature 03 */}
        <div 
          className="feature-card feature-card-animated" 
          style={{ '--card-index': 3 } as React.CSSProperties}
        >
          <div className="feature-number">03</div>
          <h3 className="feature-title">
            Automated<br />workflows to<br />save you time
          </h3>
          <p className="feature-description">
            Upload → AI Match<br />
            Auto-generated spec sheets<br />
            & deliverables
          </p>
        </div>
      </div>
    </div>
  );
}


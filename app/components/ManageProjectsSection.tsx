'use client';

import { useEffect, useRef } from 'react';

export default function ManageProjectsSection() {
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
            // Add visible class to trigger all staggered animations
            container.classList.add('manage-projects-visible');
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
    <div ref={containerRef} className="manage-projects-container">
      <h2 className="manage-projects-heading manage-projects-heading-animated">
        Manage your projects <span className="manage-projects-italic">anywhere</span>
      </h2>
      <div className="manage-projects-image-wrapper manage-projects-image-animated">
        <img
          src="/InteriorVision main website (8).png"
          alt="Visual Product Search across devices"
          className="manage-projects-image"
        />
      </div>
    </div>
  );
}

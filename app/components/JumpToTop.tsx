'use client';

import { useState, useEffect } from 'react';

export default function JumpToTop() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Track hero section visibility to hide buttons on first section
  useEffect(() => {
    const heroElement = document.getElementById('hero');

    // Guard: If hero doesn't exist, assume we're not on hero (show buttons)
    if (!heroElement) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hero is visible when intersecting with viewport
          setIsHeroVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,  // Trigger when 50% of hero is visible
        rootMargin: '0px'
      }
    );

    observer.observe(heroElement);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Don't render buttons if we're on the hero section
  if (isHeroVisible) {
    return null;
  }

  return (
    <>
      {/* Left Corner Trigger Zone */}
      <div
        className="jump-to-top-trigger jump-to-top-trigger-left"
        onMouseEnter={() => setIsLeftVisible(true)}
        onMouseLeave={() => setIsLeftVisible(false)}
        aria-label="Jump to top trigger - left"
      >
        {/* Left Button */}
        <button
          className={`jump-to-top-button jump-to-top-button-left ${isLeftVisible ? 'jump-to-top-visible' : ''}`}
          onClick={scrollToTop}
          type="button"
          aria-label="Jump to top"
        >
          <svg
            className="jump-to-top-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer chevron */}
            <polyline points="18 15 12 9 6 15" />
            {/* Inner chevron */}
            <polyline points="18 11 12 5 6 11" />
          </svg>
        </button>
      </div>

      {/* Right Corner Trigger Zone */}
      <div
        className="jump-to-top-trigger jump-to-top-trigger-right"
        onMouseEnter={() => setIsRightVisible(true)}
        onMouseLeave={() => setIsRightVisible(false)}
        aria-label="Jump to top trigger - right"
      >
        {/* Right Button */}
        <button
          className={`jump-to-top-button jump-to-top-button-right ${isRightVisible ? 'jump-to-top-visible' : ''}`}
          onClick={scrollToTop}
          type="button"
          aria-label="Jump to top"
        >
          <svg
            className="jump-to-top-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer chevron */}
            <polyline points="18 15 12 9 6 15" />
            {/* Inner chevron */}
            <polyline points="18 11 12 5 6 11" />
          </svg>
        </button>
      </div>
    </>
  );
}

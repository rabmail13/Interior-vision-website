'use client';

import { useState, useEffect } from 'react';

export default function JumpToBottom() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isLearnMoreVisible, setIsLearnMoreVisible] = useState(false);

  // Track hero section (Section 1) visibility to hide buttons on first section
  useEffect(() => {
    const heroElement = document.getElementById('hero');

    // Guard: If hero doesn't exist, assume we're not on hero
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

  // Track learn-more section (Section 8) visibility to hide buttons on last section
  useEffect(() => {
    const learnMoreElement = document.getElementById('learn-more');

    // Guard: If learn-more doesn't exist, assume we're not on it
    if (!learnMoreElement) {
      setIsLearnMoreVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Learn-more section is visible when intersecting with viewport
          setIsLearnMoreVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,  // Trigger when 50% of section is visible
        rootMargin: '0px'
      }
    );

    observer.observe(learnMoreElement);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    const learnMoreElement = document.getElementById('learn-more');
    if (learnMoreElement) {
      learnMoreElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Fallback: scroll to bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Don't render buttons if we're on the hero section OR the learn-more section
  if (isHeroVisible || isLearnMoreVisible) {
    return null;
  }

  return (
    <>
      {/* Left Corner Trigger Zone */}
      <div
        className="jump-to-bottom-trigger jump-to-bottom-trigger-left"
        onMouseEnter={() => setIsLeftVisible(true)}
        onMouseLeave={() => setIsLeftVisible(false)}
        aria-label="Jump to bottom trigger - left"
      >
        {/* Left Button */}
        <button
          className={`jump-to-bottom-button jump-to-bottom-button-left ${isLeftVisible ? 'jump-to-bottom-visible' : ''}`}
          onClick={scrollToBottom}
          type="button"
          aria-label="Jump to bottom"
        >
          <svg
            className="jump-to-bottom-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer chevron - pointing DOWN */}
            <polyline points="18 9 12 15 6 9" />
            {/* Inner chevron - pointing DOWN */}
            <polyline points="18 13 12 19 6 13" />
          </svg>
        </button>
      </div>

      {/* Right Corner Trigger Zone */}
      <div
        className="jump-to-bottom-trigger jump-to-bottom-trigger-right"
        onMouseEnter={() => setIsRightVisible(true)}
        onMouseLeave={() => setIsRightVisible(false)}
        aria-label="Jump to bottom trigger - right"
      >
        {/* Right Button */}
        <button
          className={`jump-to-bottom-button jump-to-bottom-button-right ${isRightVisible ? 'jump-to-bottom-visible' : ''}`}
          onClick={scrollToBottom}
          type="button"
          aria-label="Jump to bottom"
        >
          <svg
            className="jump-to-bottom-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outer chevron - pointing DOWN */}
            <polyline points="18 9 12 15 6 9" />
            {/* Inner chevron - pointing DOWN */}
            <polyline points="18 13 12 19 6 13" />
          </svg>
        </button>
      </div>
    </>
  );
}

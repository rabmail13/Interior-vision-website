'use client';

import { useState, useEffect } from 'react';

export default function JumpToTop() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const fullText = 'Jump to top';

  // Typing animation effect for left button
  useEffect(() => {
    if (isLeftVisible) {
      let currentIndex = 0;
      setLeftText('');
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setLeftText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // 50ms per character for quick typing
      return () => clearInterval(interval);
    } else {
      setLeftText('');
    }
  }, [isLeftVisible]);

  // Typing animation effect for right button
  useEffect(() => {
    if (isRightVisible) {
      let currentIndex = 0;
      setRightText('');
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setRightText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // 50ms per character for quick typing
      return () => clearInterval(interval);
    } else {
      setRightText('');
    }
  }, [isRightVisible]);

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
          {leftText && (
            <span className="jump-to-top-text jump-to-top-text-left">
              {leftText}
            </span>
          )}
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
          {rightText && (
            <span className="jump-to-top-text jump-to-top-text-right">
              {rightText}
            </span>
          )}
        </button>
      </div>
    </>
  );
}

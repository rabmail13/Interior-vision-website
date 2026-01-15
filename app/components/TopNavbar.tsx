'use client';

import { useState, useEffect } from 'react';

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Track hero section visibility to only show navbar on first section
  useEffect(() => {
    const heroElement = document.getElementById('hero');

    // Guard: If hero doesn't exist, assume we're not on hero (hide navbar)
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

  // Don't render navbar if we're not on the hero section
  if (!isHeroVisible) {
    return null;
  }

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about-us' },
    { label: 'Blog', href: '#learn-more' },
    { label: 'Contact', href: '#learn-more' },
    { label: 'Join Waitlist', href: '#hero', highlight: true }
  ];

  return (
    <>
      {/* Trigger Zone - Invisible hover area at top of page */}
      <div
        className="top-navbar-trigger"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        aria-label="Navigation trigger"
      >
        {/* Navigation Bar */}
        <nav
          className={`top-navbar ${isVisible ? 'top-navbar-visible' : ''}`}
          aria-label="Main navigation"
        >
          <div className="top-navbar-content">
            {/* Logo/Brand */}
            <div className="top-navbar-logo">
              <div className="hero-logo-box">
                <svg
                  className="hero-logo-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="6" cy="15" r="4"/>
                  <circle cx="18" cy="15" r="4"/>
                  <path d="M14 15a2 2 0 0 0-4 0"/>
                </svg>
              </div>
              <span className="top-navbar-brand">Interior Vision</span>
            </div>

            {/* Navigation Links */}
            <div className="top-navbar-links">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`top-navbar-link ${link.highlight ? 'top-navbar-link-highlight' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);
  const [isStaticMode, setIsStaticMode] = useState(false);

  // Check if we're in static mode (wrapped in .top-navbar-static)
  useEffect(() => {
    const checkStaticMode = () => {
      const staticWrapper = document.querySelector('.top-navbar-static');
      setIsStaticMode(!!staticWrapper);
    };

    checkStaticMode();
  }, []);

  // Track scroll position to determine if we're on the hero section
  useEffect(() => {
    // Skip hero visibility check if in static mode
    if (isStaticMode) {
      setIsOnHeroSection(true);
      setIsVisible(true); // Always visible in static mode
      return;
    }

    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container');
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = window.innerHeight;

      // We're on the hero section if we're within the first viewport height
      // Adding a small buffer (10% of viewport) to keep navbar available slightly past hero
      setIsOnHeroSection(scrollTop < viewportHeight * 1.1);
    };

    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) {
      setIsOnHeroSection(false);
      return;
    }

    // Initial check
    handleScroll();

    // Listen to scroll events
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on unmount
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isStaticMode]);

  // Don't render navbar if we're not on the hero section and not in static mode
  if (!isOnHeroSection && !isStaticMode) {
    return null;
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Join Waitlist', href: '/waitlist', highlight: true }
  ];

  return (
    <>
      {/* Trigger Zone - Invisible hover area at top of page (only in hero mode) */}
      {!isStaticMode && (
        <div
          className="top-navbar-trigger"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          aria-label="Navigation trigger"
        />
      )}

      {/* Navigation Bar */}
      <nav
        className={`top-navbar ${isVisible || isStaticMode ? 'top-navbar-visible' : ''}`}
        aria-label="Main navigation"
        onMouseEnter={() => !isStaticMode && setIsVisible(true)}
        onMouseLeave={() => !isStaticMode && setIsVisible(false)}
      >
          <div className="top-navbar-content">
            {/* Logo/Brand */}
            <div className="top-navbar-logo">
              <Logo />
              <span className="top-navbar-brand">Interior Vision</span>
            </div>

            {/* Navigation Links */}
            <div className="top-navbar-links">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`top-navbar-link ${link.highlight ? 'top-navbar-link-highlight' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
    </>
  );
}

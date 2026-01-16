'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isStaticMode, setIsStaticMode] = useState(false);

  // Check if we're in static mode (wrapped in .top-navbar-static)
  useEffect(() => {
    const checkStaticMode = () => {
      const staticWrapper = document.querySelector('.top-navbar-static');
      setIsStaticMode(!!staticWrapper);
    };

    checkStaticMode();
  }, []);

  // Track hero section visibility to only show navbar on first section
  useEffect(() => {
    // Skip hero visibility check if in static mode
    if (isStaticMode) {
      setIsHeroVisible(true);
      setIsVisible(true); // Always visible in static mode
      return;
    }

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
  }, [isStaticMode]);

  // Don't render navbar if we're not on the hero section and not in static mode
  if (!isHeroVisible && !isStaticMode) {
    return null;
  }

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
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

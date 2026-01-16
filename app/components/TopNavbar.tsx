'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(true); // Always visible by default
  const [isStaticMode, setIsStaticMode] = useState(false);

  // Check if we're in static mode (wrapped in .top-navbar-static)
  useEffect(() => {
    const checkStaticMode = () => {
      const staticWrapper = document.querySelector('.top-navbar-static');
      setIsStaticMode(!!staticWrapper);
    };

    checkStaticMode();
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Email Us', href: 'mailto:contact@interiorvision.com' },
    { label: 'Join Waitlist', href: '/waitlist', highlight: true }
  ];

  return (
    <>
      {/* Navigation Bar - Always visible and sticky */}
      <nav
        className="top-navbar top-navbar-visible"
        aria-label="Main navigation"
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

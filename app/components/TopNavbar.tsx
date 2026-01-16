'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function TopNavbar() {
  const [isVisible, setIsVisible] = useState(true);

  // Track visibility based on section 1 (hero) visibility
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show navbar ONLY when hero section is visible
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.05 } // Trigger when 5% of section is visible
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
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
      {/* Navigation Bar - Visible only on section 1 */}
      <nav
        className={`top-navbar ${isVisible ? 'top-navbar-visible' : ''}`}
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

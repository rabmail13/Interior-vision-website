'use client';

import Link from 'next/link';
import { useState } from 'react';

interface TopNavbarProps {
  isVisible?: boolean;
}

export default function TopNavbar({ isVisible = true }: TopNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Email Us', href: 'mailto:contact@tryinteriorvision.com' },
    { label: 'Join Waitlist', href: '/waitlist', highlight: true }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`top-navbar ${isVisible ? 'top-navbar-visible' : 'top-navbar-hidden'}`} aria-label="Main navigation">
      <div className="top-navbar-content">
        {/* Brand */}
        <div className="top-navbar-logo">
          <span className="top-navbar-brand">Interior Vision</span>
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Mobile Hamburger Button */}
        <button
          className="top-navbar-hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'hamburger-line-open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'hamburger-line-open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'hamburger-line-open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="mobile-menu-backdrop"
            onClick={closeMobileMenu}
            aria-hidden="true"
          ></div>

          {/* Menu Panel */}
          <div className="mobile-menu-panel">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`mobile-menu-link ${link.highlight ? 'mobile-menu-link-highlight' : ''}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}

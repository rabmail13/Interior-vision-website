'use client';

import Link from 'next/link';
import Image from 'next/image';

interface TopNavbarProps {
  isVisible?: boolean;
}

export default function TopNavbar({ isVisible = true }: TopNavbarProps) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Email Us', href: 'mailto:contact@tryinteriorvision.com' },
    { label: 'Join Waitlist', href: '/waitlist', highlight: true }
  ];

  return (
    <nav className={`top-navbar ${isVisible ? 'top-navbar-visible' : 'top-navbar-hidden'}`} aria-label="Main navigation">
      <div className="top-navbar-content">
        {/* Logo/Brand */}
        <div className="top-navbar-logo">
          <Image
            src="/InteriorVision main website (13).png"
            alt="Interior Vision Logo"
            width={40}
            height={40}
            className="top-navbar-logo-image"
          />
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
  );
}

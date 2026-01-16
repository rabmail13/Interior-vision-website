'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function TopNavbar() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Email Us', href: 'mailto:contact@interiorvision.com' },
    { label: 'Join Waitlist', href: '/waitlist', highlight: true }
  ];

  return (
    <nav className="top-navbar top-navbar-visible" aria-label="Main navigation">
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
  );
}

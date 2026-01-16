'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Roadmap', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Logo />
            <span className="footer-brand-text">Interior Vision</span>
          </div>
          <p className="footer-tagline">Design smarter, not harder.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links-section">
          <h4 className="footer-heading">Navigation</h4>
          <div className="footer-links">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="footer-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="footer-links-section">
          <h4 className="footer-heading">Resources</h4>
          <div className="footer-links">
            {resourceLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="footer-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="footer-cta">
          <Link href="/waitlist" className="footer-cta-button">
            Join Waitlist
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} Interior Vision. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

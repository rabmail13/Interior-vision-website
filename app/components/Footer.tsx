'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Email Us', href: 'mailto:info@interiorvision.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <Logo />
            <span className="footer-brand-text">Interior Vision</span>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Interior Vision
          </p>
        </div>
        
        <nav className="footer-center">
          {navigationLinks.map((link, index) => (
            <Link key={index} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-right">
          <Link href="/waitlist" className="footer-cta-button">
            Join Waitlist
          </Link>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';

interface NavItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Back to Top', targetId: 'hero' },
  { label: 'Hero', targetId: 'hero' },
  { label: 'Tagline', targetId: 'tagline' },
  { label: 'Features', targetId: 'features' },
  { label: 'Manage Projects', targetId: 'manage-projects' },
  { label: 'Mood Boards', targetId: 'mood-boards' },
  { label: 'Built by Designers', targetId: 'built-by-designers' },
  { label: 'About Us', targetId: 'about-us' },
  { label: 'Learn More', targetId: 'learn-more' },
  { label: 'Jump to Bottom', targetId: 'learn-more' },
];

export default function FloatingNav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* Trigger Zone - Invisible hover area in top left */}
      <div
        className="floating-nav-trigger"
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
        aria-label="Navigation menu trigger"
      >
        {/* Navigation Menu */}
        <nav
          className={`floating-nav-menu ${isMenuVisible ? 'floating-nav-visible' : ''}`}
          aria-label="Page navigation"
        >
          <ul className="floating-nav-list">
            {NAV_ITEMS.map((item, index) => (
              <li key={`${item.targetId}-${index}`} className="floating-nav-item">
                <button
                  onClick={() => handleNavClick(item.targetId)}
                  className="floating-nav-link"
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

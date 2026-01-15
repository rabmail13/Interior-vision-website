'use client';

import { useEffect } from 'react';
import { ParallaxController } from '../utils/parallax';
import { ScrollAnimator } from '../utils/scrollAnimator';

/**
 * ScrollEffects Component
 * Initializes parallax and scroll animation effects on the client side
 */
export default function ScrollEffects() {
  useEffect(() => {
    // Initialize parallax controller
    const parallaxController = new ParallaxController();

    // Initialize scroll animator
    const scrollAnimator = new ScrollAnimator();

    // Cleanup function
    return () => {
      scrollAnimator.destroy();
    };
  }, []);

  return null; // This component doesn't render anything
}

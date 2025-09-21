'use client';

import { useState, useEffect } from 'react';

/**
 * A custom React hook that detects if the user has scrolled past a certain threshold.
 * @param threshold The scroll distance in pixels to trigger the scrolled state. Defaults to 10.
 * @returns A boolean indicating if the page has been scrolled past the threshold.
 */
export function useScrolled(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

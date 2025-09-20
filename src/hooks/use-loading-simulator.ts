'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook to simulate a loading state for a specified duration.
 * @param delay The duration of the loading simulation in milliseconds. Defaults to 1500.
 * @returns A boolean indicating if the component is in a loading state.
 */
export function useLoadingSimulator(delay: number = 1500): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}

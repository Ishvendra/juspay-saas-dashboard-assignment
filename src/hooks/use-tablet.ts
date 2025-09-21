import * as React from 'react';

const MOBILE_BREAKPOINT = 1200;

/**
 * A custom React hook that detects if the current viewport width is within a tablet/mobile range.
 * Listens for window resize events to provide a real-time boolean value.
 * @returns A boolean that is true if the viewport width is less than the defined breakpoint.
 */
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsTablet(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener('change', onChange);
    setIsTablet(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isTablet;
}

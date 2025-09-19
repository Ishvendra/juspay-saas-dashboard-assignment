'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Icon } from './icon';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className='h-10 w-10' />;
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      aria-label='Toggle Theme'
      className='icon-wrapper'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Icon name='moon' /> : <Icon name='sun' />}
    </Button>
  );
}

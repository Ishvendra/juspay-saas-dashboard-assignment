'use client';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/use-debounce';

interface SearchInputProps {
  initialValue?: string;
  onDebouncedChange: (value: string) => void;
  debounceDelay?: number;
}

export function SearchInput({
  initialValue = '',
  onDebouncedChange,
  debounceDelay = 300,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(initialValue);
  const debouncedValue = useDebounce(inputValue, debounceDelay);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // Effect to call the parent's handler when the debounced value changes
  useEffect(() => {
    onDebouncedChange(debouncedValue);
  }, [debouncedValue, onDebouncedChange]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='flex items-center gap-2 ml-auto'>
      {/* --- Desktop Search Bar --- */}
      <div className='relative hidden md:block'>
        <Icon
          name='search'
          className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground'
        />
        <Input
          type='search'
          placeholder='Search...'
          value={inputValue}
          onChange={handleChange}
          className={cn(/* ... your existing classes */)}
        />
      </div>

      {/* --- Mobile Search UI --- */}
      <div className='md:hidden'>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setIsMobileSearchOpen(true)}
        >
          <Icon name='search' className='h-5 w-5' />
        </Button>
      </div>

      {isMobileSearchOpen && (
        <div className='absolute inset-0 z-50 flex items-center gap-2 bg-background p-4 md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsMobileSearchOpen(false)}
          >
            <Icon name='arrowLeft' className='h-5 w-5' />
          </Button>
          <div className='relative flex-1'>
            <Icon
              name='search'
              className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground'
            />
            <Input
              type='search'
              placeholder='Search...'
              value={inputValue}
              onChange={handleChange}
              className='w-full rounded-lg bg-muted pl-8'
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/use-debounce';
import { cn } from '@/lib/utils';
import { Search, Command, X } from 'lucide-react';
import { Icon } from '../ui/icon';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  suggestions?: string[];
  loading?: boolean;
  showCloseIcon?: boolean;
}

/**
 * A comprehensive, reusable search bar component.
 * Features include debounced search, keyboard shortcuts (Ctrl+/), suggestions with keyboard navigation, and loading/clear states.
 * @param placeholder - The placeholder text for the input field.
 * @param className - Optional classes to apply to the root container.
 * @param onSearch - Callback function triggered with the debounced search query.
 * @param onClear - Callback function triggered when the search is cleared.
 * @param suggestions - An array of strings to display as search suggestions.
 * @param loading - If true, displays a loading spinner.
 * @param showCloseIcon - If true, shows a close icon to clear the input.
 * @returns A fully functional search bar component.
 */
export function SearchBar({
  placeholder = 'Search',
  className,
  onSearch,
  onClear,
  suggestions = [],
  loading = false,
  showCloseIcon = true,
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery && onSearch) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === 'Escape') {
        if (query) {
          handleClear();
        } else {
          inputRef.current?.blur();
        }
        setShowSuggestions(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [query]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      setSelectedIndex(-1);
      setShowSuggestions(value.length > 0 && suggestions.length > 0);
    },
    [suggestions.length]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
    onClear?.();
    inputRef.current?.focus();
  }, [onClear]);

  const handleSuggestionSelect = useCallback(
    (suggestion: string) => {
      setQuery(suggestion);
      setShowSuggestions(false);
      setSelectedIndex(-1);
      onSearch?.(suggestion);
      inputRef.current?.blur();
    },
    [onSearch]
  );

  // Handle keyboard navigation in suggestions
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!showSuggestions) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            handleSuggestionSelect(suggestions[selectedIndex]);
          } else if (query) {
            onSearch?.(query);
            setShowSuggestions(false);
            inputRef.current?.blur();
          }
          break;
      }
    },
    [
      showSuggestions,
      selectedIndex,
      suggestions,
      query,
      onSearch,
      handleSuggestionSelect,
    ]
  );

  return (
    <div className={cn('relative', className)}>
      <div className='relative'>
        <Icon
          name='search'
          className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2'
        />

        <Input
          ref={inputRef}
          type='text'
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(query.length > 0 && suggestions.length > 0);
          }}
          onBlur={() => {
            setIsFocused(false);
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          className={cn(
            'pl-9 pr-16 transition-all duration-200',
            isFocused && 'ring-2 ring-primary/20',
            'placeholder:text-black-20 text-sm',
            'border-0',
            'shadow-none',
            'bg-black-5'
          )}
        />

        <div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1'>
          {loading && (
            <div className='h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-primary' />
          )}

          {showCloseIcon && query && (
            <Button
              variant='ghost'
              size='sm'
              className='h-6 w-6 p-0 hover:bg-muted/50'
              onClick={handleClear}
            >
              <X className='h-3 w-3' />
            </Button>
          )}

          {!isFocused && (
            <div className='hidden sm:flex items-center gap-1 text-xs text-muted-foreground'>
              <Command className='h-3 w-3' />
              <span>/</span>
            </div>
          )}
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className='absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto'
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className={cn(
                'w-full px-3 py-2 text-left text-sm hover:bg-muted/50 transition-colors',
                selectedIndex === index && 'bg-muted'
              )}
              onClick={() => handleSuggestionSelect(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className='flex items-center gap-2'>
                <Search className='h-3 w-3 text-muted-foreground' />
                {suggestion}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

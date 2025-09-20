'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrolled } from '@/hooks/use-scrolled';
import { SearchBar } from '@/components/common/search-bar';
import { IconButton } from '../ui/icon-button';

interface TopbarProps {
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    initials: string;
  };
  className?: string;
}

export function Topbar({
  breadcrumbs = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics' },
  ],
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    initials: 'JD',
  },
  className,
}: TopbarProps) {
  const isScrolled = useScrolled(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Mock search suggestions
  const searchSuggestions = [
    'Customer Dashboard',
    'Sales Reports',
    'User Management',
    'Analytics Overview',
    'Settings Panel',
  ]
    .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  const handleSearch = useCallback((query: string) => {
    console.log('Searching for:', query);
    setSearchQuery(query);
    // Implement your search logic here
  }, []);

  const handleSearchClear = useCallback(() => {
    console.log('Search cleared');
    setSearchQuery('');
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all duration-200',
        '!bg-transparent backdrop-blur-sm',
        isScrolled && 'bg-background/95 backdrop-blur-md shadow-sm',
        className
      )}
    >
      <div className='flex h-17 w-full items-center px-7 py-5 max-[768px]:px-2 py-0'>
        <div className='flex items-center gap-2 flex-1 min-w-0'>
          <SidebarTrigger />
          <IconButton iconName='star' />

          <Breadcrumb className='hidden sm:flex px-2'>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.label} className='flex items-center'>
                  {index > 0 && <BreadcrumbSeparator className='mr-2' />}
                  <BreadcrumbItem>
                    {crumb.href ? (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className='flex items-center gap-2 flex-none'>
          <IconButton
            iconName='searchDark'
            className='min-[480px]:hidden'
            onClick={() => setShowMobileSearch(true)}
          />

          <SearchBar
            placeholder='Search'
            onSearch={handleSearch}
            onClear={handleSearchClear}
            suggestions={searchSuggestions}
            className='w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 hidden min-[480px]:block'
          />

          <ThemeToggle />
          <IconButton iconName='clock' />
          <IconButton iconName='bell' />
          <SidebarTrigger />
        </div>
        {showMobileSearch && (
          <div className='fixed inset-0 z-50 bg-background/90 backdrop-blur-sm min-[480px]:hidden'>
            <div className='fixed top-20 left-4 right-4'>
              <div className='flex items-center gap-2 bg-background border rounded-lg p-2 shadow-lg'>
                <SearchBar
                  placeholder='Search'
                  onSearch={(query) => {
                    handleSearch(query);
                  }}
                  onClear={handleSearchClear}
                  suggestions={searchSuggestions}
                  className='flex-1'
                  showCloseIcon={false}
                />

                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setShowMobileSearch(false)}
                  className='h-9 w-9 flex-shrink-0'
                >
                  x
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

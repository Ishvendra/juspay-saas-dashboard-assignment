'use client';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import Link from 'next/link';
import { NavSection } from '@/types';

const navItems: NavSection[] = [
  {
    title: 'Favorites',
    links: [
      { href: '#', label: 'Overview', icon: 'pie' },
      { href: '#', label: 'Projects', icon: 'folder' },
    ],
  },
  {
    title: 'Dashboards',
    isCollapsible: true,
    links: [
      { href: '/', label: 'Default' },
      { href: '#', label: 'eCommerce' },
      { href: '#', label: 'Projects' },
      { href: '#', label: 'Online Courses' },
    ],
  },
  {
    title: 'Pages',
    isCollapsible: true,
    links: [
      { href: '#', label: 'User Profile' },
      { href: '#', label: 'Account' },
      { href: '#', label: 'Corporate' },
      { href: '#', label: 'Blog' },
      { href: '#', label: 'Social' },
    ],
  },
];

export function Sidebar() {
  return (
    <div className='hidden lg:block border-r bg-muted/40 w-64 p-4'>
      <div className='flex flex-col gap-4'>
        <div className='px-4 py-2'>
          <h1 className='text-xl font-bold'>ByeWind</h1>
        </div>
        <nav className='flex flex-col gap-2'>
          {navItems.map((section) =>
            section.isCollapsible ? (
              <Collapsible key={section.title}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant='ghost'
                    className='w-full justify-start gap-2'
                  >
                    <Icon name='folder' className='h-4 w-4' />
                    {section.title}
                    <Icon name='chevronDown' className='ml-auto h-4 w-4' />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className='pl-8 flex flex-col gap-1'>
                  {section.links.map((link) => (
                    <Link key={link.label} href={link.href} passHref>
                      <Button
                        variant='ghost'
                        className='w-full justify-start gap-2'
                      >
                        {link.icon && (
                          <Icon name={link.icon} className='h-4 w-4' />
                        )}
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <div key={section.title}>
                <h2 className='px-4 text-sm font-semibold text-muted-foreground'>
                  {section.title}
                </h2>
                <div className='flex flex-col gap-1 mt-2'>
                  {section.links.map((link) => (
                    <Link key={link.label} href={link.href} passHref>
                      <Button
                        variant='ghost'
                        className='w-full justify-start gap-2'
                      >
                        {link.icon && (
                          <Icon name={link.icon} className='h-4 w-4' />
                        )}
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </nav>
      </div>
    </div>
  );
}

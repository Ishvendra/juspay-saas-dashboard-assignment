import { NavSection } from '@/types';

export const tabbedNav: NavSection[] = [
  {
    title: 'Favorites',
    links: [
      { href: '/under-development', label: 'Overview', icon: 'dot' },
      { href: '/under-development', label: 'Projects', icon: 'dot' },
    ],
  },
  {
    title: 'Recently',
    links: [
      { href: '/under-development', label: 'eCommerce', icon: 'dot' },
      { href: '/under-development', label: 'Default', icon: 'dot' },
    ],
  },
];

export const mainNav: NavSection[] = [
  {
    title: 'Dashboards',
    links: [
      { href: '/', label: 'Default', icon: 'pie' },
      {
        label: 'eCommerce',
        icon: 'bag',
        subLinks: [
          { href: '/analytics', label: 'Analytics' },
          { href: '/orders', label: 'Orders List' },
        ],
      },
      {
        label: 'Projects',
        icon: 'folder',
        subLinks: [
          { href: '/under-development', label: 'Project 1' },
          { href: '/under-development', label: 'Project 2' },
        ],
      },
      {
        label: 'Online Courses',
        icon: 'bookOpen',
        subLinks: [
          { href: '/under-development', label: 'React JS' },
          { href: '/under-development', label: 'Next JS' },
        ],
      },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        label: 'User Profile',
        icon: 'userCard1',
        subLinks: [
          { href: '/under-development', label: 'Overview' },
          { href: '/under-development', label: 'Projects' },
          { href: '/under-development', label: 'Campaigns' },
          { href: '/under-development', label: 'Documents' },
          { href: '/under-development', label: 'Followers' },
        ],
      },
      {
        href: '/under-development',
        label: 'Account',
        icon: 'userCard2',
        subLinks: [
          { href: '/under-development', label: 'Overview' },
          { href: '/under-development', label: 'Profile' },
        ],
      },
      {
        href: '/under-development',
        label: 'Corporate',
        icon: 'userGroup',
        subLinks: [
          { href: '/under-development', label: 'Users' },
          { href: '/under-development', label: 'Network' },
        ],
      },
      {
        href: '/under-development',
        label: 'Blog',
        icon: 'bookClosed',
        subLinks: [
          { href: '/under-development', label: 'PPR in Next JS' },
          { href: '/under-development', label: 'Reconciliation Process' },
        ],
      },
      {
        href: '/under-development',
        label: 'Social',
        icon: 'textBubbles',
        subLinks: [
          { href: '/under-development', label: 'Messages' },
          { href: '/under-development', label: 'Events' },
        ],
      },
    ],
  },
];

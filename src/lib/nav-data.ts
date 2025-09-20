import { NavSection } from '@/types';

export const tabbedNav: NavSection[] = [
  {
    title: 'Favorites',
    links: [
      { href: '#', label: 'Overview', icon: 'dot' },
      { href: '#', label: 'Projects', icon: 'dot' },
    ],
  },
  {
    title: 'Recently',
    links: [
      { href: '#', label: 'eCommerce', icon: 'dot' },
      { href: '#', label: 'Default', icon: 'dot' },
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
          { href: '#', label: 'Products' },
          { href: '#', label: 'Orders' },
        ],
      },
      {
        label: 'Projects',
        icon: 'folder',
        subLinks: [
          { href: '#', label: 'Project 1' },
          { href: '#', label: 'Project 2' },
        ],
      },
      {
        label: 'Online Courses',
        icon: 'bookOpen',
        subLinks: [
          { href: '#', label: 'React JS' },
          { href: '#', label: 'Next JS' },
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
          { href: '#', label: 'Overview' },
          { href: '#', label: 'Projects' },
          { href: '#', label: 'Campaigns' },
          { href: '#', label: 'Documents' },
          { href: '#', label: 'Followers' },
        ],
      },
      {
        href: '#',
        label: 'Account',
        icon: 'userCard2',
        subLinks: [
          { href: '#', label: 'Overview' },
          { href: '#', label: 'Profile' },
        ],
      },
      {
        href: '#',
        label: 'Corporate',
        icon: 'userGroup',
        subLinks: [
          { href: '#', label: 'Users' },
          { href: '#', label: 'Network' },
        ],
      },
      {
        href: '#',
        label: 'Blog',
        icon: 'bookClosed',
        subLinks: [
          { href: '#', label: 'PPR in Next JS' },
          { href: '#', label: 'Reconciliation Process' },
        ],
      },
      {
        href: '#',
        label: 'Social',
        icon: 'textBubbles',
        subLinks: [
          { href: '#', label: 'Messages' },
          { href: '#', label: 'Events' },
        ],
      },
    ],
  },
];

import { IconName } from '@/components/icons';
import { StaticImageData } from 'next/image';
export type OrderStatus =
  | 'In Progress'
  | 'Complete'
  | 'Pending'
  | 'Approved'
  | 'Rejected';

export type NavLink = {
  href?: string;
  label: string;
  icon?: IconName;
  subLinks?: NavLink[];
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export type InfoListItemData = {
  title: string;
  avatarUrl?: StaticImageData | string;
  timestamp?: string;
  type?: 'bug' | 'newUser' | 'subscription';
};

export type Order = {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
    initials: string;
  };
  project: string;
  address: string;
  date: string;
  status: OrderStatus;
};

import { IconName } from '@/components/icons';
import { StaticImageData } from 'next/image';

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

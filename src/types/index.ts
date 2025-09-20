import { IconName } from '@/components/icons';

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

import { icons } from '@/components/ui/icon';

export interface LinkItem {
  href: string;
  label: string;
  icon?: keyof typeof icons;
}

export interface NavSection {
  title: string;
  isCollapsible?: boolean;
  links: LinkItem[];
}

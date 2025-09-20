import SunIcon from '@/assets/icons/sun.svg';
import ClockIcon from '@/assets/icons/clock.svg';
import MoonIcon from '@/assets/icons/moon.svg';
import PieIcon from '@/assets/icons/pie.svg';
import DotIcon from '@/assets/icons/dot.svg';
import TextBubblesIcon from '@/assets/icons/text-bubbles.svg';
import BookClosedIcon from '@/assets/icons/book-closed.svg';
import UserGroupIcon from '@/assets/icons/user-group.svg';
import UserCard1Icon from '@/assets/icons/user-card-1.svg';
import UserCard2Icon from '@/assets/icons/user-card-2.svg';
import BookOpenIcon from '@/assets/icons/book-open.svg';
import FolderIcon from '@/assets/icons/folder.svg';
import BagIcon from '@/assets/icons/bag.svg';
import ChevronDownIcon from '@/assets/icons/chevronDown.svg';
import ChevronRightIcon from '@/assets/icons/chevronRight.svg';
import SearchIcon from '@/assets/icons/search.svg';
import SearchDarkIcon from '@/assets/icons/search-dark.svg';
import StarIcon from '@/assets/icons/star.svg';
import SidebarIcon from '@/assets/icons/sidebar.svg';
import BellIcon from '@/assets/icons/bell.svg';
import HamburgerIcon from '@/assets/icons/hamburger.svg';

export const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  clock: ClockIcon,
  pie: PieIcon,
  dot: DotIcon,
  textBubbles: TextBubblesIcon,
  bookClosed: BookClosedIcon,
  userGroup: UserGroupIcon,
  userCard1: UserCard1Icon,
  userCard2: UserCard2Icon,
  bookOpen: BookOpenIcon,
  folder: FolderIcon,
  bag: BagIcon,
  chevronDown: ChevronDownIcon,
  chevronRight: ChevronRightIcon,
  search: SearchIcon,
  searchDark: SearchDarkIcon,
  star: StarIcon,
  sidebar: SidebarIcon,
  bell: BellIcon,
  hamburger: HamburgerIcon,
};

export type IconName = keyof typeof icons;

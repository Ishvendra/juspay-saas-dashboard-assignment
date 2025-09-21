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
import DotsIcon from '@/assets/icons/dots.svg';
import FilterIcon from '@/assets/icons/filter.svg';
import AddIcon from '@/assets/icons/add.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRise from '@/assets/icons/arrow-rise.svg';
import ArrowFall from '@/assets/icons/arrow-fall.svg';
import ArrowUp from '@/assets/icons/arrow-up.svg';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import CalendarIcon from '@/assets/icons/calendar.svg';
import SortIcon from '@/assets/icons/sort.svg';

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
  dots: DotsIcon,
  filter: FilterIcon,
  add: AddIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  calendar: CalendarIcon,
  sort: SortIcon,
  arrowRise: ArrowRise,
  arrowFall: ArrowFall,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
};

export type IconName = keyof typeof icons;

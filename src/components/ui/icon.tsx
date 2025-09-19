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
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const Component = icons[name];
  return <Component width={size} height={size} {...props} />;
}

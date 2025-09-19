import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Icon } from '@/components/ui/icon';

export default function Home() {
  return (
    <div className='inter grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20'>
      <ThemeToggle />
      <Icon name='pie' />
      <Icon name='dot' />
      <Icon name='textBubbles' />
      <Icon name='bookClosed' />
      <Icon name='userGroup' />
      <Icon name='userCard1' />
      <Icon name='userCard2' />
      <Icon name='bookOpen' />
      <Icon name='folder' />
      <Icon name='bag' />
    </div>
  );
}

'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoListItemData } from '@/types';
import { cn, getInitials, truncateText } from '@/lib/utils';
import Image from 'next/image';
import { notificationIcons } from '@/assets/images';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

function InfoListItemSkeleton() {
  return (
    <div className='flex items-start gap-2 relative p-1'>
      <Skeleton className='h-6 w-6 rounded-full' />
      <div className='flex-1 self-center space-y-2'>
        <Skeleton className='h-4 w-3/4' />
        <Skeleton className='h-3 w-1/2' />
      </div>
    </div>
  );
}

interface InfoListProps {
  title: string;
  items: InfoListItemData[];
  variant: 'notifications' | 'activities' | 'contacts';
  isLoading?: boolean;
}

export function InfoList({ title, items, variant, isLoading }: InfoListProps) {
  const showLine = variant === 'activities';
  const showTimestamp = variant === 'notifications' || variant === 'activities';

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Card className='p-0 border-none flex gap-2'>
      <CardHeader className='px-1 py-2'>
        <CardTitle className='text-sm hover:text-secondary-purple-a hover:cursor-pointer hover:underline'>
          {title}
        </CardTitle>
      </CardHeader>

      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <InfoListItemSkeleton key={index} />
        ))
      ) : (
        <motion.div
          className='grid gap-2 p-1'
          variants={listVariants}
          initial='hidden'
          animate='visible'
        >
          {items.map((item, index) => {
            let imageSrc;
            const imageAlt = item.title;

            if (variant === 'notifications') {
              imageSrc = item.type && notificationIcons[item.type];
            } else {
              imageSrc = item.avatarUrl;
            }
            return (
              <motion.div
                key={index}
                className='flex items-start gap-2 relative p-1 rounded-md cursor-pointer'
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {showLine && index < items.length - 1 && (
                  <div className='absolute left-4 top-[33px] h-3 w-px bg-border -translate-x-1/2' />
                )}
                <Avatar
                  className={cn(
                    'flex h-6 w-6 shrink-0',
                    variant !== 'notifications' ? 'rounded-full' : 'rounded-lg'
                  )}
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <AvatarFallback>{getInitials(item.title)}</AvatarFallback>
                  )}
                </Avatar>
                <div className='flex-1 self-center'>
                  <p className='text-sm font-normal leading-none hover:text-secondary-purple-a'>
                    {truncateText(item.title)}
                  </p>
                  {showTimestamp && item.timestamp && (
                    <div className='ml-auto text-xs text-muted-foreground font-normal'>
                      {item.timestamp}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </Card>
  );
}

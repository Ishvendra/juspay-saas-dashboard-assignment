'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoListItemData } from '@/types';
import { cn, getInitials, truncateText } from '@/lib/utils';
import Image from 'next/image';
import { notificationIcons } from '@/assets/images';

interface InfoListProps {
  title: string;
  items: InfoListItemData[];
  variant: 'notifications' | 'activities' | 'contacts';
}

export function InfoList({ title, items, variant }: InfoListProps) {
  const showLine = variant === 'activities';
  const showTimestamp = variant === 'notifications' || variant === 'activities';

  return (
    <Card className='p-0 border-none flex gap-2'>
      <CardHeader className='px-1 py-2'>
        <CardTitle className='text-sm'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-2 p-1'>
        {items.map((item, index) => {
          let imageSrc;
          const imageAlt = item.title;

          if (variant === 'notifications') {
            imageSrc = item.type && notificationIcons[item.type];
          } else {
            imageSrc = item.avatarUrl;
          }
          return (
            <div key={index} className='flex items-start gap-2 relative py-1'>
              {showLine && index < items.length - 1 && (
                <div className='absolute left-4 top-[33px] h-3 w-px bg-border -translate-x-1' />
              )}

              <Avatar
                className={cn(
                  'flex h-6 w-6 shrink-0',
                  variant !== 'notifications' ? 'rounded-full' : 'rounded-lg'
                )}
              >
                {imageSrc ? (
                  <Image src={imageSrc} alt={imageAlt} width={24} height={24} />
                ) : (
                  <AvatarFallback>{getInitials(item.title)}</AvatarFallback>
                )}
              </Avatar>

              <div className='flex-1 self-center'>
                <p className='text-sm font-normal leading-none'>
                  {truncateText(item.title)}
                </p>
                {showTimestamp && item.timestamp && (
                  <div className='ml-auto text-xs text-muted-foreground font-normal'>
                    {item.timestamp}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

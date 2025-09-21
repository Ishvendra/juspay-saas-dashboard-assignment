'use client';

import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isLoading?: boolean;
  bgColor?: string;
  textColor?: string;
}

export function StatCard({
  title,
  value,
  change,
  bgColor,
  textColor,
  isLoading,
}: StatCardProps) {
  const isPositive = change >= 0;

  if (isLoading) {
    return (
      <Card className='p-6 rounded-2xl'>
        <div className='flex flex-col justify-between h-full gap-2'>
          <Skeleton className='h-5 w-3/4' />
          <div className='flex justify-between items-end'>
            <Skeleton className='h-8 w-1/2' />
            <Skeleton className='h-5 w-1/4' />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('max-sm:p-2 p-6 ', 'border-none rounded-2xl', bgColor)}>
      <div className='flex flex-col justify-between h-full gap-2'>
        <div>
          <p className={cn('text-sm font-semibold', textColor)}>{title}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className={cn('text-2xl font-semibold', textColor)}>{value}</p>
          <div className={cn('flex items-center gap-1 text-xs font-normal')}>
            <span className={cn(textColor)}>{change}%</span>
            <Icon
              name={isPositive ? 'arrowRise' : 'arrowFall'}
              className={cn('h-4 w-4', textColor)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

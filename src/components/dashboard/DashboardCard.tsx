'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  children?: React.ReactNode; //Todo: make children prop mandetory
  className?: string;
  isLoading?: boolean;
}

export function DashboardCard({
  title,
  children,
  className,
  isLoading,
}: DashboardCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={cn('flex flex-col', className)}
    >
      <Card className='flex-1 p-6'>
        <CardHeader className='p-0 mb-4'>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className='p-0 h-full'>
          {isLoading ? <Skeleton className='h-full w-full' /> : children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

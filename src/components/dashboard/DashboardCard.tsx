'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: React.ReactNode;
  children?: React.ReactNode;
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
      whileHover={{
        borderRadius: 16,
        boxShadow: 'var(--card-shadow)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn('flex flex-col h-full cursor-pointer', className)}
    >
      <Card className='flex flex-col flex-1 p-6 border-none rounded-2xl bg-primary-light h-full gap-4'>
        <CardHeader className='p-0'>
          <CardTitle className='text-sm'>{title}</CardTitle>
        </CardHeader>
        <CardContent className='p-0 flex-1 min-h-0'>
          {isLoading ? <Skeleton className='h-full w-full' /> : children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

'use client';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  value: number;
  total: number;
}

export function ProgressBar({ value, total }: ProgressBarProps) {
  const percentage = (value / total) * 100;
  return (
    <Progress
      value={percentage}
      className='h-1 bg-gray-200 [&>div]:bg-secondary-blue-a [&>div]:rounded-full'
    />
  );
}

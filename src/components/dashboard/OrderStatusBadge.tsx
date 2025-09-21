import { OrderStatus } from '@/types';
import { cn } from '@/lib/utils';
import { Icon } from '../ui/icon';

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const color = {
    'In Progress': 'text-secondary-indigo',
    Complete: 'text-secondary-green',
    Pending: 'text-secondary-blue',
    Approved: 'text-secondary-yellow',
    Rejected: 'text-black-40',
  }[status];

  return (
    <span className={cn(color, 'flex')}>
      <Icon name='dot' />
      <p>{status}</p>
    </span>
  );
}

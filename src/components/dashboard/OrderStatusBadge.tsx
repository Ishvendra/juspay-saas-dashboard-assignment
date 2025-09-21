import { Badge } from '@/components/ui/badge';
import { OrderStatus } from '@/types';
import { cn } from '@/lib/utils';

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const color = {
    'In Progress':
      'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    Complete:
      'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    Pending:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    Approved:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    Rejected: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  }[status];

  return <Badge className={cn('capitalize', color)}>{status}</Badge>;
}

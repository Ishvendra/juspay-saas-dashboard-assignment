'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Order } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { OrderStatusBadge } from '@/components/dashboard/OrderStatusBadge';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Order>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Order ID',
  },
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <Avatar className='h-8 w-8'>
          <AvatarImage
            src={row.original.user.avatarUrl}
            alt={row.original.user.name}
          />
          <AvatarFallback>{row.original.user.initials}</AvatarFallback>
        </Avatar>
        <span>{row.original.user.name}</span>
      </div>
    ),
  },
  {
    accessorKey: 'project',
    header: 'Project',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <Icon name='calendar' className='h-4 w-4 text-muted-foreground' />
        <span>{row.original.date}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <OrderStatusBadge status={row.original.status} />,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      if (row.original.status !== 'Rejected') {
        return null;
      }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <Icon name='chevronDown' className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

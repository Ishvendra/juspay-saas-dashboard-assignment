'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Order } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { OrderStatusBadge } from '@/components/dashboard/OrderStatusBadge';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { IconButton } from '@/components/ui/icon-button';

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
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='-ml-3 text-muted-foreground font-normal'
        >
          Order ID
          <Icon name='sort' className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'user',
    header: () => <p className='text-muted-foreground font-normal'>User</p>,
    filterFn: (row, columnId, filterValue) => {
      const userName = row.original.user.name.toLowerCase();
      return userName.includes(filterValue.toLowerCase());
    },
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <Avatar className='h-6 w-6'>
          <Image
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
    header: () => <p className='text-muted-foreground font-normal'>Project</p>,
  },
  {
    accessorKey: 'address',
    header: () => <p className='text-muted-foreground font-normal'>Address</p>,
  },
  {
    accessorKey: 'date',
    header: () => <p className='text-muted-foreground font-normal'>Date</p>,
    cell: ({ row }) => (
      <div className='flex items-center gap-2'>
        <Icon name='calendar' className='h-4 w-4 text-muted-foreground' />
        <span>{row.original.date}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => (
      <p className='ml-2 text-muted-foreground font-normal'>Status</p>
    ),
    filterFn: 'arrIncludesSome',
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
          <DropdownMenuTrigger asChild className='h-4 flex items-baseline'>
            <IconButton iconName='dots' />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className='bg-white-100 hover:cursor-pointer'
          >
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

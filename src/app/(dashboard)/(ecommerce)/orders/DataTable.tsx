'use client';

import { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { IconButton } from '@/components/ui/icon-button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { SearchInput } from '@/components/dashboard/TableSearch';
import { Button } from '@/components/ui/button';
import { OrderStatus } from '@/types';

const statuses: OrderStatus[] = [
  'In Progress',
  'Complete',
  'Pending',
  'Approved',
  'Rejected',
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  });
  const hasActiveFilters =
    (columnFilters.length > 0 &&
      Array.isArray(columnFilters[0]?.value) &&
      columnFilters[0].value.length > 0) ||
    globalFilter.length > 0;

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center p-2 bg-primary-light rounded-lg'>
        <div className='flex items-center gap-2'>
          <IconButton iconName='add' />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <IconButton iconName='filter' />

                {hasActiveFilters && (
                  <span className='ml-1 rounded-full bg-primary text-primary-foreground text-xs px-1.5 py-0.5'>
                    {(Array.isArray(columnFilters?.[0]?.value)
                      ? columnFilters[0].value.length
                      : 0) + (globalFilter ? 1 : 0)}
                  </span>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='start'
              className='w-[200px] bg-white-100'
            >
              <DropdownMenuLabel>Filter Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {statuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  className='capitalize'
                  checked={
                    (
                      table.getColumn('status')?.getFilterValue() as string[]
                    )?.includes(status) ?? false
                  }
                  onCheckedChange={(checked) => {
                    const currentFilter =
                      (table
                        .getColumn('status')
                        ?.getFilterValue() as string[]) || [];
                    const newFilter = checked
                      ? [...currentFilter, status]
                      : currentFilter.filter((s) => s !== status);

                    table
                      .getColumn('status')
                      ?.setFilterValue(
                        newFilter.length ? newFilter : undefined
                      );
                  }}
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <IconButton iconName='sort' />
        </div>
        <SearchInput
          initialValue={globalFilter ?? ''}
          onDebouncedChange={setGlobalFilter}
        />
      </div>

      <div className='rounded-md'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className='px-3 py-2'>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='px-3 py-2'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination className='justify-end'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              aria-disabled={!table.getCanPreviousPage()}
              className={
                !table.getCanPreviousPage()
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>

          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => table.setPageIndex(index)}
                isActive={table.getState().pagination.pageIndex === index}
                className='cursor-pointer'
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => table.nextPage()}
              aria-disabled={!table.getCanNextPage()}
              className={
                !table.getCanNextPage()
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

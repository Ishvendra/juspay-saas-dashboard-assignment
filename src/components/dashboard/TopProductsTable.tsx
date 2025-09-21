'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { mockProducts } from '@/lib/mock-data';
import { ScrollArea } from '@/components/ui/scroll-area';
import { currencyFormatter } from '@/lib/utils';

export function TopProductsTable() {
  const products = mockProducts;

  return (
    <ScrollArea className='h-full'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='py-2 text-muted-foreground'>Name</TableHead>
            <TableHead className='py-2 text-muted-foreground text-right'>
              Price
            </TableHead>
            <TableHead className='py-2 text-muted-foreground text-right'>
              Quantity
            </TableHead>
            <TableHead className='py-2 text-muted-foreground text-right'>
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.name} className='border-none'>
              <TableCell className='py-2 font-medium'>{product.name}</TableCell>
              <TableCell className='py-2 text-right'>
                {currencyFormatter.format(product.price)}
              </TableCell>
              <TableCell className='py-2 text-right'>
                {product.quantity}
              </TableCell>
              <TableCell className='py-2 text-right'>
                {currencyFormatter.format(product.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

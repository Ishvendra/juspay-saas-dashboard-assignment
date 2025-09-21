import { PageLayout } from '@/components/layout/PageLayout';
import { DataTable } from './DataTable';
import { mockOrders } from '@/lib/mock-data';
import { columns } from './columns';

async function getOrders() {
  return mockOrders;
}

export default async function OrdersPage() {
  const data = await getOrders();

  return (
    <PageLayout title='Order List'>
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

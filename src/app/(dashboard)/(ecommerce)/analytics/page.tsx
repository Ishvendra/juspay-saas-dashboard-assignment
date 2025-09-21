'use client';

import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { PageLayout } from '@/components/layout/PageLayout';
import { StatCardGrid } from '@/components/dashboard/StatCardGrid';
import { useLoadingSimulator } from '@/hooks/use-loading-simulator';
import { motion } from 'framer-motion';
import { ProjectionsChart } from '@/components/dashboard/ProjectionsChart';
import { RevenueChart } from '@/components/dashboard/RevenueChart';

const revenueHeader = (
  <div className='flex items-center gap-4'>
    <span className='text-sm font-semibold'>Revenue</span>
    <span className='text-muted-foreground'>|</span>
    <div className='flex items-center gap-4 text-xs'>
      <div className='flex items-center gap-2'>
        <span className='h-2 w-2 rounded-full bg-primary-brand' />
        <span className='font-normal'>Current Week</span>
        <span>$58,211</span>
      </div>
      <div className='flex items-center gap-2 '>
        <span className='h-2 w-2 rounded-full bg-secondary-blue-a' />
        <span className='font-normal'>Previous Week</span>
        <span>$68,768</span>
      </div>
    </div>
  </div>
);

export default function AnalyticsPage() {
  const isLoading = useLoadingSimulator(2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <PageLayout title='Analytics'>
      <motion.div
        className='grid grid-cols-12 max-sm:gap-4 gap-7'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='col-span-12 lg:col-span-6'>
          <StatCardGrid isLoading={isLoading} />
        </div>
        <div className='col-span-12 lg:col-span-6 h-[252px] flex flex-col'>
          <DashboardCard title='Projections vs Actuals' isLoading={isLoading}>
            <ProjectionsChart />
          </DashboardCard>
        </div>

        <div className='col-span-12 lg:col-span-9 h-[318px]'>
          <DashboardCard title={revenueHeader} isLoading={isLoading}>
            <RevenueChart />
          </DashboardCard>
        </div>
        <div className='col-span-12 lg:col-span-3 lg:h-[318px]'>
          <DashboardCard title='Revenue by Location' isLoading={isLoading}>
            {/* Map chart will go here */}
          </DashboardCard>
        </div>

        {/* Row 3 */}
        <div className='col-span-12 lg:col-span-9 lg:h-[336px]'>
          <DashboardCard title='Top Selling Products' isLoading={isLoading}>
            {/* Table will go here */}
          </DashboardCard>
        </div>
        <div className='col-span-12 lg:col-span-3 lg:h-[344px]'>
          <DashboardCard title='Total Sales' isLoading={isLoading}>
            {/* Pie chart will go here */}
          </DashboardCard>
        </div>
      </motion.div>
    </PageLayout>
  );
}

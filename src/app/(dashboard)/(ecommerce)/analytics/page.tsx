'use client';

import { DashboardCard } from '@/components/dashboard/DashboardCard';
import { PageLayout } from '@/components/layout/PageLayout';
import { StatCardGrid } from '@/components/dashboard/StatCardGrid';
import { useLoadingSimulator } from '@/hooks/use-loading-simulator';
import { motion } from 'framer-motion';

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
        className='grid grid-cols-12 gap-7'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='col-span-12 lg:col-span-6 lg:h-[252px]'>
          <StatCardGrid isLoading={isLoading} />
        </div>
        <div className='col-span-12 lg:col-span-6 lg:h-[252px]'>
          <DashboardCard title='Projections vs Actuals' isLoading={isLoading}>
            {/* Bar chart will go here */}
          </DashboardCard>
        </div>

        {/* Row 2 */}
        <div className='col-span-12 lg:col-span-9 lg:h-[318px]'>
          <DashboardCard title='Revenue' isLoading={isLoading}>
            {/* Line chart will go here */}
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

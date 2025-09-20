import { DashboardCard } from './DashboardCard';
import { motion } from 'framer-motion';

export function StatCardGrid({ isLoading }: { isLoading?: boolean }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const statCards = [
    { title: 'Total Revenue' },
    { title: 'Subscriptions' },
    { title: 'Sales' },
    { title: 'Active Now' },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className='grid grid-cols-2 grid-rows-2 gap-7'
    >
      {statCards.map((card) => (
        <DashboardCard
          key={card.title}
          title={card.title}
          isLoading={isLoading}
        ></DashboardCard>
      ))}
    </motion.div>
  );
}

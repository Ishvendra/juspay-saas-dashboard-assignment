import { statCardsData } from '@/lib/mock-data';
import { StatCard } from './StatCard';
import { motion } from 'framer-motion';

export function StatCardGrid({ isLoading }: { isLoading?: boolean }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className='grid grid-cols-2 grid-rows-2 max-sm:gap-4 gap-7'
    >
      {statCardsData.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          change={card.change}
          bgColor={card.bgColor}
          textColor={card.textColor}
          isLoading={isLoading}
        />
      ))}
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const statItems = [
  { value: '4+', label: 'Years Experience' },
  { value: '21+', label: 'Solutions Delivered' },
  { value: 'MERN', label: 'Core Stack' },
  { value: 'AI', label: 'Integrated' },
];

const Stats = () => (
  <div className="flex flex-wrap justify-center gap-10 py-10 px-4">
    {statItems.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="text-center min-w-[80px]"
      >
        <div className="text-3xl font-bold text-gradient">{stat.value}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
      </motion.div>
    ))}
  </div>
);

export default Stats;

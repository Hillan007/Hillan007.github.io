import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  // Frontend
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Tailwind CSS', icon: '🎨' },
  // Backend
  { name: 'Node.js', icon: '🟢' },
  { name: 'Flask', icon: '🐍' },
  // Database
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  // Tools
  { name: 'Git', icon: '🔀' },
];

const TechStack = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tech Stack</h2>
        <p className="text-gray-600 dark:text-gray-400">Technologies I work with daily.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tech.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.08, y: -2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <span>{t.icon}</span>
            {t.name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;

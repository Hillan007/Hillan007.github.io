import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="space-y-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            I'm Victor Hillan, a software engineer passionate about building scalable solutions that drive real impact. With expertise in full-stack development, AI integration, and community-focused technology, I transform complex challenges into elegant digital products.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Approach</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  'User-centered design and development',
                  'Scalable, maintainable code architecture',
                  'Data-driven decision making',
                  'Cross-functional collaboration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-primary-500 mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What I'm Building</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  'AI-powered web applications',
                  'Full-stack platforms at scale',
                  'Technology for social impact',
                  'Open-source contributions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-primary-500 mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const roles = [
    'Full-time Software Engineer (Frontend / Full-stack)',
    'Impactful products in education, civic tech, or tooling',
    'Modern stack: React/Next.js, TypeScript, Node/FastAPI, PostgreSQL',
    'Remote-friendly; Kenya-based with flexible hours',
    'Mentorship and code review culture; room to grow',
];

const LookingFor = () => (
    <section className="section-padding">
        <div className="container-custom">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">What I'm Looking For</h2>
                <p className="text-gray-600 dark:text-gray-400">The environments and problems where I do my best work.</p>
            </div>
            <ul className="space-y-3 max-w-2xl">
                {roles.map((r, i) => (
                    <motion.li
                        key={r}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                    >
                        <CheckCircle2 size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{r}</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    </section>
);

export default LookingFor;

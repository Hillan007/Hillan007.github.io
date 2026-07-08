import React from 'react';
import { motion } from 'framer-motion';

const points = [
    { title: 'Async-first', desc: 'Clear written updates, shared docs, and transparent progress.', icon: '📝' },
    { title: 'Small PRs', desc: 'Frequent, reviewable changes with automated checks.', icon: '🔀' },
    { title: 'Test-minded', desc: 'Unit + integration tests where they add real value.', icon: '✅' },
    { title: 'Accessibility', desc: 'Keyboard-friendly, semantic HTML, and WCAG-aware UI.', icon: '♿' },
    { title: 'Performance', desc: 'Measure, set budgets, and ship fast experiences.', icon: '⚡' },
    { title: 'Documentation', desc: 'PR descriptions, READMEs, and helpful comments when needed.', icon: '📖' },
    { title: 'AI Passion', desc: 'Actively exploring practical uses of LLMs, embeddings, and smart automation.', icon: '🤖' },
];

const HowIWork = () => (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">How I Work</h2>
                <p className="text-gray-600 dark:text-gray-400">Process that keeps teams moving and shipping confidently.</p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {points.map((p, i) => (
                    <motion.li
                        key={p.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="text-2xl mb-2">{p.icon}</div>
                        <div className="font-semibold text-gray-900 dark:text-white mb-1">{p.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</div>
                    </motion.li>
                ))}
            </ul>
        </div>
    </section>
);

export default HowIWork;

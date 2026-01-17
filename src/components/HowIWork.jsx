import React from 'react';

const points = [
    { title: 'Async-first', desc: 'Clear written updates, shared docs, and transparent progress.' },
    { title: 'Small PRs', desc: 'Frequent, reviewable changes with automated checks.' },
    { title: 'Test-minded', desc: 'Unit + integration tests where they add real value.' },
    { title: 'Accessibility', desc: 'Keyboard-friendly, semantic HTML, and WCAG-aware UI.' },
    { title: 'Performance', desc: 'Measure, set budgets, and ship fast experiences.' },
    { title: 'Documentation', desc: 'PR descriptions, READMEs, and helpful comments when needed.' },
    { title: 'AI Passion', desc: 'Passionate about AI and actively exploring practical uses (LLMs, embeddings, smart automation).' }
];

const HowIWork = () => (
    <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">How I Work</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Process that keeps teams moving and shipping confidently.</p>
        <ul className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
                <li key={p.title} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="font-semibold text-black dark:text-white">{p.title}</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{p.desc}</div>
                </li>
            ))}
        </ul>
    </section>
);

export default HowIWork;
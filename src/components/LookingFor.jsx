import React from 'react';

const roles = [
    'Full-time Software Engineer (Frontend/Full‑stack)',
    'Impactful products in education, civic tech, or tooling',
    'Modern stack: React/Next.js, TypeScript, Node/FastAPI, PostgreSQL',
    'Remote-friendly; Kenya-based with flexible hours',
    'Mentorship and code review culture; room to grow',
];

const LookingFor = () => (
    <section className="py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">What I’m Looking For</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">The environments and problems where I do my best work.</p>
        <ul className="space-y-3">
            {roles.map((r) => (
                <li key={r} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-black dark:text-white">
                    {r}
                </li>
            ))}
        </ul>
    </section>
);

export default LookingFor;
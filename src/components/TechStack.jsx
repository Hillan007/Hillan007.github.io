import React from 'react';

const tech = [
  { name: 'Flask', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'MongoDB', icon: '🍃' },
];

const TechStack = () => (
  <div className="flex flex-wrap justify-center gap-6 py-4">
    {tech.map(t => (
      <div key={t.name} className="flex flex-col items-center">
  <span className="text-3xl mb-1 text-black dark:text-white">{t.icon}</span>
  <span className="text-sm text-black dark:text-white">{t.name}</span>
      </div>
    ))}
  </div>
);

export default TechStack;

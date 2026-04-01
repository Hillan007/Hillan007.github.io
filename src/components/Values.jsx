import React from 'react';

const values = [
  { label: 'Ethical Tech', icon: '⚖️' },
  { label: 'Mentorship', icon: '🤝' },
  { label: 'Accessibility', icon: '♿' },
  { label: 'Social Good', icon: '🌍' },
];

const Values = () => (
  <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
    <div className="container-custom">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Values I Build By</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          Principles that guide the way I approach technology and people.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {values.map((v) => (
          <div
            key={v.label}
            className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <span>{v.icon}</span>
            {v.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Values;

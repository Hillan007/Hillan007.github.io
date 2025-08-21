import React from 'react';

const values = [
  'Ethical Tech',
  'Mentorship',
  'Accessibility',
  'Social Good',
];

const Values = () => (
  <div className="flex flex-wrap justify-center gap-4 py-4">
    {values.map(v => (
      <span key={v} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium">{v}</span>
    ))}
  </div>
);

export default Values;

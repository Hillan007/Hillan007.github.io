import React from 'react';

const reflections = [
  {
    title: 'Scripture-Inspired Coding',
    text: 'How biblical principles guide my approach to ethical software.'
  },
  {
    title: 'Faith in Debugging',
    text: 'Patience and perseverance in code and life.'
  }
];

const FaithTechCorner = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Faith & Tech Corner</h2>
    <ul className="space-y-4">
      {reflections.map((r, idx) => (
        <li key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="font-semibold">{r.title}</div>
          <div className="text-gray-600 dark:text-gray-300">{r.text}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default FaithTechCorner;

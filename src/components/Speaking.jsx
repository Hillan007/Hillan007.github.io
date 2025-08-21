import React from 'react';

const speaking = [
  {
    title: 'Tech for Good Workshop',
    desc: 'Led a workshop on ethical tech for youth leaders.'
  },
  {
    title: 'Faith & Code Seminar',
    desc: 'Shared insights on integrating faith and technology.'
  }
];

const Speaking = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Speaking & Teaching</h2>
    <ul className="space-y-4">
      {speaking.map((s, idx) => (
        <li key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="font-semibold">{s.title}</div>
          <div className="text-gray-600 dark:text-gray-300">{s.desc}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default Speaking;

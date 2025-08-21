import React from 'react';

const openSource = [
  {
    title: 'Flask-Auth-Plus',
    desc: 'Contributed authentication features to Flask-Auth-Plus.'
  },
  {
    title: 'React-SEO-Helper',
    desc: 'Improved accessibility and SEO for React-SEO-Helper.'
  }
];

const OpenSource = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Open Source Contributions</h2>
    <ul className="space-y-4">
      {openSource.map((o, idx) => (
        <li key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="font-semibold">{o.title}</div>
          <div className="text-gray-600 dark:text-gray-300">{o.desc}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default OpenSource;

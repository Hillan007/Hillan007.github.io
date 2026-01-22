import React from 'react';

const openSource = [
  {
    title: 'HacktoberfestForBeginners',
    desc: 'Added time conversion module with unit tests, fixed sliding-window algorithm, and implemented GitHub Actions CI workflow for automated Python testing.',
    url: 'https://github.com/vichitr/HacktoberfestForBeginners',
    pr: 'https://github.com/vichitr/HacktoberfestForBeginners/pull/607'
  }
];

const OpenSource = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6 text-center">Open Source Contributions</h2>
    <ul className="space-y-4">
      {openSource.map((o, idx) => (
        <li key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="font-semibold">
            {o.url ? (
              <a href={o.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                {o.title}
              </a>
            ) : (
              o.title
            )}
          </div>
          <div className="text-gray-600 dark:text-gray-300 mt-2">{o.desc}</div>
          {o.pr && (
            <div className="mt-2">
              <a href={o.pr} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                View Pull Request →
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default OpenSource;

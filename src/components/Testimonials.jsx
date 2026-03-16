import React from 'react';

const testimonials = [
  {
    name: 'Debby SPN-Nigeria',
    text: 'Victor is a dedicated engineer who truly cares about impact. Our nonprofit site saw a huge boost in engagement'
  },
  {
    name: 'Pastor Kimathi',
    text: 'His church media automation saved us hours every week. Highly recommended!'
  }
];

const Testimonials = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">Testimonials</h2>
    <div className="space-y-6">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-800 dark:text-white">"{t.text}"</p>
          <div className="text-right font-semibold text-gray-900 dark:text-white">- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

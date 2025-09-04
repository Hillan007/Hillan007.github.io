import React from 'react';

const TermsOfUse = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Terms of Use</h2>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-black dark:text-white">
      <p>
        By accessing and using this website, you agree to the following terms:
      </p>
      <ul className="list-disc ml-6 my-4">
        <li>Content is for personal, educational, and professional reference only.</li>
        <li>Do not copy, reproduce, or redistribute content without permission.</li>
        <li>Respect intellectual property and copyright notices.</li>
        <li>Use the contact form or provided email for any inquiries or permissions.</li>
        <li>We reserve the right to update these terms at any time.</li>
      </ul>
      <p>
        Continued use of this site constitutes acceptance of these terms.
      </p>
    </div>
  </section>
);

export default TermsOfUse;
import React from 'react';

const PrivacyPolicy = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h2>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-black dark:text-white">
      <p>
        Your privacy is important to us. This website does not collect personal information unless you voluntarily provide it (e.g., via contact forms or blog comments).
      </p>
      <ul className="list-disc ml-6 my-4">
        <li>We do not sell, trade, or share your information with third parties.</li>
        <li>Any data submitted via Google Forms is handled by Google and subject to their privacy policy.</li>
        <li>We use cookies only for basic site functionality and analytics.</li>
        <li>If you have questions about your data, please contact us via the email provided on the Contact page.</li>
      </ul>
      <p>
        By using this site, you consent to this privacy policy.
      </p>
    </div>
  </section>
);

export default PrivacyPolicy;
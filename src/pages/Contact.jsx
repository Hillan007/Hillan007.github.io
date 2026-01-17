import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <main>
      <ContactForm />
      <SocialLinks />
      <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Call Me</h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <a href="tel:+254757148346" className="block hover:text-blue-600">+254 757 148 346</a>
          <a href="tel:+254737375963" className="block hover:text-blue-600">+254 737 375 963</a>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-700 dark:text-gray-300">
        <p>Want my CV? <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=victorhillan007@gmail.com&su=CV Request&body=Hi Victor,%0D%0A%0D%0AI would love to view your CV. Could you please send it to me?%0D%0A%0D%0AThank you!&tf=cm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >Email me via Gmail</a> and I’ll send it to you directly.</p>
      </div>
    </main>
  );
};

export default Contact;

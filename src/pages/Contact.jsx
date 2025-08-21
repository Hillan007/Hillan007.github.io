import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <main>
      <ContactForm />
      <SocialLinks />
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

import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <main className="section-padding">
      <div className="container-custom max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you have a project in mind or just want to say hello — I'd love to hear from you.
          </p>
        </div>

        <ContactForm />

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <Phone size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Call Me</h3>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <a href="tel:+254757148346" className="block hover:text-primary-500 transition-colors">+254 757 148 346</a>
                <a href="tel:+254737375963" className="block hover:text-primary-500 transition-colors">+254 737 375 963</a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-start gap-3">
            <Mail size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Request My CV</h3>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=victorhillan007@gmail.com&su=CV Request&body=Hi Victor,%0D%0A%0D%0AI would love to view your CV. Could you please send it to me?%0D%0A%0D%0AThank you!&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Email me via Gmail
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </main>
  );
};

export default Contact;

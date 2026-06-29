import { ExternalLink } from 'lucide-react';

const ContactForm = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
    <div className="text-4xl mb-4">💬</div>
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Send Me a Message</h2>
    <p className="mb-6 text-sm text-gray-600 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
      Click below to open my contact form. Your message will be sent directly to me via Google Forms.
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSckZ30A1ELfjncEffJdaChDMusxOXAGQDpTc6UzUah0ZbtcEw/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary inline-flex items-center gap-2"
    >
      Open Contact Form
      <ExternalLink size={16} />
    </a>
  </div>
);

export default ContactForm;

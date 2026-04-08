import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Email',
    url: 'https://mail.google.com/mail/u/0/?fs=1&to=victorhillan007@gmail.com&su=Contact&body=Hi%20Victor,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you!%0D%0A%0D%0AThank%20you!&tf=cm',
    icon: <FaEnvelope />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victor-muthomi-1a57b8305',
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Hillan007',
    icon: <FaGithub />,
  },
  {
    name: 'X',
    url: 'https://x.com/victorhillan007',
    icon: <FaXTwitter />,
  },
];

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Extras', to: '/extras' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
];

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-10">
    <div className="container-custom py-12 px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-10">
        {/* Brand */}
        <div>
          <div className="text-2xl font-bold text-gradient mb-3">Victor M.</div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
            Software Engineer building scalable products, AI-powered apps, and technology for social good.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-xl text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="mailto:victorhillan007@gmail.com" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                victorhillan007@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+254757148346" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                +254 757 148 346
              </a>
            </li>
            <li className="text-gray-500 dark:text-gray-500">Kenya-based · Remote-friendly</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Victor Hillan. All rights reserved.
        </p>
        <div className="flex gap-4">
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
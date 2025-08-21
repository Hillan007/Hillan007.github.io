import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

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
    name: 'Facebook',
  url: 'https://www.facebook.com/profile.php?id=100088873130498',
    icon: <FaFacebook />,
  },
  {
    name: 'X',
    url: 'https://x.com/victorhillan007',
    icon: <FaXTwitter />,
  },
];

const SocialLinks = () => (
  <div className="flex justify-center gap-8 mt-8">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
  className="text-4xl text-black dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        aria-label={link.name}
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;

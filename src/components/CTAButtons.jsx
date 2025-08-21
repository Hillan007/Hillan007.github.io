import React from 'react';
import { Link } from 'react-router-dom';

const CTAButtons = () => (
  <div className="flex flex-wrap justify-center gap-4 py-4">
    <Link to="/projects" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Projects</Link>
    <a
      href="https://mail.google.com/mail/u/0/?fs=1&to=victorhillan007@gmail.com&su=Hire%20Me&body=Hi%20Victor,%0D%0A%0D%0AI am interested in working with you!%0D%0A%0D%0AThank you!&tf=cm"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Hire Me
    </a>
    <Link to="/blog" className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Explore Blog</Link>
  </div>
);

export default CTAButtons;

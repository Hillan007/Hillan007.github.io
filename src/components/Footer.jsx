import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Victor Hillan. All rights reserved.
      </div>
      <div className="flex flex-wrap gap-4">
        <Link to="/" className="text-sm text-gray-500 underline">Home</Link>
        <Link to="/about" className="text-sm text-gray-500 underline">About</Link>
        <Link to="/projects" className="text-sm text-gray-500 underline">Projects</Link>
        <Link to="/blog" className="text-sm text-gray-500 underline">Blog</Link>
        <Link to="/contact" className="text-sm text-gray-500 underline">Contact</Link>
        <Link to="/extras" className="text-sm text-gray-500 underline">Extras</Link>
        <Link to="/privacy-policy" className="text-sm text-gray-500 underline">Privacy Policy</Link>
        <Link to="/terms-of-use" className="text-sm text-gray-500 underline">Terms of Use</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
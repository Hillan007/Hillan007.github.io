import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen } from 'lucide-react';

const CTAButtons = () => (
  <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
        <Briefcase size={18} />
        View Projects
      </Link>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&to=victorhillan007@gmail.com&su=Hire%20Me&body=Hi%20Victor,%0D%0A%0D%0AI am interested in working with you!%0D%0A%0D%0AThank you!&tf=cm"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center gap-2"
      >
        Hire Me
      </a>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to="/blog" className="btn-secondary inline-flex items-center gap-2">
        <BookOpen size={18} />
        Explore Blog
      </Link>
    </motion.div>
  </div>
);

export default CTAButtons;

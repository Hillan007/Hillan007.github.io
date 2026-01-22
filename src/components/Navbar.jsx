import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [extrasOpen, setExtrasOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme()
  const containerRef = useRef(null);
  const extrasContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function onClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setProjectsOpen(false);
      }
      if (extrasContainerRef.current && !extrasContainerRef.current.contains(e.target)) {
        setExtrasOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        setProjectsOpen(false);
        setExtrasOpen(false);
      }
    }
    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileExtrasOpen, setMobileExtrasOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
          >
            Victor M.
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.to}
                  className="text-black dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Projects dropdown */}
            <div
              ref={containerRef}
              className="relative"
            >
              <button
                onClick={() => setProjectsOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={projectsOpen}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 focus:outline-none"
              >
                Projects
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {projectsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-md z-20">
                  <Link
                    to="/projects"
                    onClick={() => setProjectsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Projects
                  </Link>
                  <Link
                    to="/certificates"
                    onClick={() => setProjectsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Certificates
                  </Link>
                </div>
              )}
            </div>

            {/* Extras dropdown */}
            <div
              ref={extrasContainerRef}
              className="relative"
            >
              <button
                onClick={() => setExtrasOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={extrasOpen}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 focus:outline-none"
              >
                Extras
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {extrasOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-md z-20">
                  <Link
                    to="/extras?tab=leadership"
                    onClick={() => setExtrasOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Leadership
                  </Link>
                  <Link
                    to="/extras?tab=opensource"
                    onClick={() => setExtrasOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Open Source
                  </Link>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ x: 10 }}>
                <Link
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-black dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Projects dropdown */}
            <div className="px-4">
              <button
                onClick={() => setMobileProjectsOpen(prev => !prev)}
                className="w-full flex items-center justify-between py-2 text-black dark:text-gray-300 font-medium"
                aria-expanded={mobileProjectsOpen}
              >
                <span>Projects</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileProjectsOpen && (
                <div className="pl-2 space-y-2 pb-2">
                  <Link
                    to="/projects"
                    onClick={() => { setIsOpen(false); setMobileProjectsOpen(false); }}
                    className="block px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    All Projects
                  </Link>
                  <Link
                    to="/certificates"
                    onClick={() => { setIsOpen(false); setMobileProjectsOpen(false); }}
                    className="block px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    Certificates
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Extras dropdown */}
            <div className="px-4">
              <button
                onClick={() => setMobileExtrasOpen(prev => !prev)}
                className="w-full flex items-center justify-between py-2 text-black dark:text-gray-300 font-medium"
                aria-expanded={mobileExtrasOpen}
              >
                <span>Extras</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {mobileExtrasOpen && (
                <div className="pl-2 space-y-2 pb-2">
                  <Link
                    to="/extras?tab=leadership"
                    onClick={() => { setIsOpen(false); setMobileExtrasOpen(false); }}
                    className="block px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    Leadership
                  </Link>
                  <Link
                    to="/extras?tab=opensource"
                    onClick={() => { setIsOpen(false); setMobileExtrasOpen(false); }}
                    className="block px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    Open Source
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
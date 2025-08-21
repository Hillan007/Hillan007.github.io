import victorImg from '../assets/images/victor.jpg';
import { Link } from 'react-router-dom';
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import AnimatedText from './AnimatedText'
import ParticleBackground from './ParticleBackground'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ParticleBackground />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center md:items-start md:text-left text-center"
        >
          {/* Profile Picture on the left */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0 md:mr-10"
          >
            <img
              src={victorImg}
              alt="Victor Muthomi"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover object-[center_30%] border-2 border-primary-500 shadow-lg"
            />
          </motion.div>

          {/* Main Content on the right */}
          <div className="flex-1">
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-gradient">Victor</span>
              <br />
              <span className="text-gray-800 dark:text-white">Muthomi</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <AnimatedText />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed"
            >
              A passionate Software Engineering student from Meru, Kenya, 
              transforming local challenges into innovative tech solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  View My Work
                  <ChevronDown size={20} />
                </Link>
              </motion.div>
              
              {/* CV Request Button - Email */}
              <motion.a
                href="https://mail.google.com/mail/u/0/?fs=1&to=victorhillan007@gmail.com&su=CV Request&body=Hi Victor,%0D%0A%0D%0AI would love to view your CV. Could you please send it to me?%0D%0A%0D%0AThank you!&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Request CV (Gmail)
              </motion.a>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Mail size={20} />
                  Let's Connect
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedText = () => {
  const roles = [
    'Software Engineer',
    'Web Developer', 
    'AI Enthusiast',
    'Innovation Explorer'
  ]
  
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  return (
    <div className="h-16 flex items-center justify-center">
      <motion.h2 
        className="text-2xl md:text-4xl font-semibold text-primary-600 dark:text-primary-400"
        key={displayText}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-accent-500"
        >
          |
        </motion.span>
      </motion.h2>
    </div>
  )
}

export default AnimatedText
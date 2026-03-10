import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Heart, Target } from 'lucide-react'

// Import profile image
import victorImage from '../assets/images/victor.jpg'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable applications from frontend to backend"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Integrating intelligent systems into products"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Product Strategy",
      description: "Architecting solutions that solve real problems"
  return(
    <section id = "about" className = "section-padding bg-gray-50 dark:bg-gray-800/50" >
          <div className="container-custom">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image Section */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="relative w-80 h-80 mx-auto lg:mx-0">
                  {/* Rotating Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-dashed border-primary-300 dark:border-primary-600"
                  />

                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-accent-400 p-1">
                    <img
                      src={victorImage}
                      alt="Victor Muthomi"
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl"
                  >
                    👨‍💻
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white text-xl"
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div>
                  <motion.h2
                    variants={itemVariants}
                    className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                  >
                    Hello, I'm <span className="text-gradient">Victor</span> 👋
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    Full-stack engineer building scalable solutions for real-world impact.
                    From fintech to AI, I focus on creating products that matter.
                  </motion.p>
                </div>

                {/* Highlights */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary-500" />
                    Core Expertise:
                  </h3>

                  <div className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                      >
                        <div className="text-primary-500 mt-1">
                          {highlight.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {highlight.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-4 pt-6"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Shipped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Tech Stacks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-500">2k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
    </section >
  )
}

export default About
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      id: 1,
      type: 'education',
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Bachelor of Science in Software Engineering',
      organization: 'Muranga University of Technology',
      period: '2023 - 2027 (Expected)',
      description: 'Currently pursuing my degree with focus on modern software development practices, algorithms, and system design.',
      highlights: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Web Development',
        'Software Engineering Principles'
      ]
    },
    {
      id: 2,
      type: 'training',
      icon: <Code className="w-6 h-6" />,
      title: 'Software Development Scholarship',
      organization: 'Power Learn Project Academy',
      period: 'February 2025 - Present',
      description: 'Intensive full-stack development training program focusing on modern web technologies and AI integration.',
      highlights: [
        'Full Stack Development',
        'AI for Software Engineering',
        'Modern JavaScript Frameworks',
        'Cloud Technologies'
      ]
    },
    {
      id: 3,
      type: 'education',
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Kenya Certificate of Secondary Education',
      organization: 'Meru School (Boys National School)',
      period: '2019 - 2022',
      description: 'Completed secondary education with strong performance in mathematics and sciences.',
      highlights: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Studies'
      ]
    }
  ]

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education & <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and professional development path
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          Key Areas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="/Victor CV.docx"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Award size={20} />
              Download My CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
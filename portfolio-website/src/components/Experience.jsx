import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Vorro',
      location: 'Gurugram, India',
      role: 'Software Developer',
      duration: 'Feb 2023 – Present',
      achievements: [
        {
          title: 'Responsive App Development',
          description: 'Developed responsive applications using React.js, Next.js, and Material UI',
          impact: 'Improved user experience across all devices',
        },
        {
          title: 'Code Optimization',
          description: 'Reduced redundant code by 30% using better state management (Redux, Context)',
          impact: '30% code reduction',
        },
        {
          title: 'Performance Enhancement',
          description: 'Reduced load time by 40% using lazy loading & code splitting',
          impact: '40% faster load time',
        },
        {
          title: 'Quality Improvement',
          description: 'Reduced UI bugs by 25% through debugging and optimization',
          impact: '25% fewer bugs',
        },
        {
          title: 'Design Collaboration',
          description: 'Worked closely with designers to build pixel-perfect UI',
          impact: 'Enhanced design accuracy',
        },
      ],
    },
    {
      company: 'Freelance',
      location: 'Remote',
      role: 'Full Stack Developer',
      achievements: [
        {
          title: 'Client Projects',
          description: 'Delivered 15+ web applications for diverse clients across industries',
          impact: '100% client satisfaction',
        },
        {
          title: 'Full Stack Development',
          description: 'Built end-to-end solutions using MERN stack',
          impact: 'Complete project ownership',
        },
        {
          title: 'API Development',
          description: 'Designed and implemented RESTful APIs with proper authentication',
          impact: 'Secure & scalable backends',
        },
        {
          title: 'Database Design',
          description: 'Created efficient database schemas and optimized queries',
          impact: 'Improved data retrieval speed',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-gray-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-primary-500 to-accent-500 transform md:-translate-x-1/2"></div>

              {/* Experience Cards */}
              {experiences.map((experience, idx) => (
                <motion.div
                  key={idx}
                  className="relative mb-8"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full transform md:-translate-x-1/2 z-10"
                    animate={isInView ? {
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(168, 85, 247, 0.7)',
                        '0 0 0 10px rgba(168, 85, 247, 0)',
                        '0 0 0 0 rgba(168, 85, 247, 0)',
                      ],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: idx * 0.5,
                    }}
                  />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 ${idx % 2 === 0 ? 'md:w-1/2 md:pr-12 md:text-right md:ml-auto' : 'md:w-1/2 md:pl-12'}`}>
                    <motion.div
                      className="p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300"
                      whileHover={{
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
                      }}
                    >
                      {/* Company Header */}
                      <div className={`flex items-start gap-4 mb-6 ${idx % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                        <motion.div
                          className="flex-shrink-0 p-4 rounded-lg bg-gradient-to-br from-accent-600 to-primary-600"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <FaBriefcase className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {experience.company}
                          </h3>
                          <p className="text-lg text-accent-400 font-semibold mb-2">
                            {experience.role}
                          </p>
                          <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : ''} gap-2 text-gray-400`}>
                            {experience.duration && (
                              <div className="flex items-center gap-2">
                                <FaCalendarAlt className="w-4 h-4" />
                                <span>{experience.duration}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-4">
                        {experience.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-accent-500/30 transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ x: idx % 2 === 0 ? -5 : 5 }}
                          >
                            <h4 className="text-white font-semibold mb-2">
                              {achievement.title}
                            </h4>
                            <p className="text-gray-400 text-sm mb-2">
                              {achievement.description}
                            </p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20">
                              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                              <span className="text-accent-400 text-xs font-medium">
                                {achievement.impact}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { value: '30%', label: 'Code Reduction', color: 'from-accent-500 to-purple-500' },
                { value: '40%', label: 'Faster Load Time', color: 'from-primary-500 to-cyan-500' },
                { value: '25%', label: 'Fewer Bugs', color: 'from-purple-500 to-pink-500' },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

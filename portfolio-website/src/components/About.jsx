import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaCogs, FaPalette } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const highlights = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: '3+ Years Experience',
      description: 'Building scalable web applications',
      color: 'from-accent-500 to-purple-500',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Performance Expert',
      description: 'Optimizing for speed and efficiency',
      color: 'from-primary-500 to-cyan-500',
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: 'Scalable Architecture',
      description: 'Designing robust systems',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: 'UI/UX Focused',
      description: 'Creating delightful experiences',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-gray-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
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
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl blur-xl opacity-50 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Ankit Rana"
                className="relative w-full h-full rounded-xl object-cover border-4 border-gray-800 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Passionate{' '}
                <span className="text-accent-400 font-semibold">MERN Stack Developer</span>{' '}
                with <span className="text-primary-400 font-semibold">3+ years</span> of
                experience building scalable web applications. Skilled in React, Node.js,
                Express, and MongoDB with a strong focus on{' '}
                <span className="text-accent-400 font-semibold">
                  performance optimization
                </span>{' '}
                and{' '}
                <span className="text-primary-400 font-semibold">user experience</span>.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 from-accent-500 to-primary-500"></div>
                <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <motion.div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${highlight.color} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {highlight.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-400">{highlight.description}</p>

                  {/* Hover effect glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-xl shadow-lg shadow-accent-500/20"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '40%', label: 'Load Time Reduced' },
              { value: '30%', label: 'Code Optimized' },
              { value: '25%', label: 'Bugs Reduced' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

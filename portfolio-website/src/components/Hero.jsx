import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/20 via-gray-950 to-primary-900/20"></div>
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="text-gradient bg-gradient-to-r from-accent-400 via-primary-400 to-accent-500 bg-clip-text text-transparent">
            Ankit Rana
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
        >
          Full Stack MERN Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          I build scalable, high-performance web applications with great user experience.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-accent-600 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-accent-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg font-semibold text-white hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://github.com/AnkitRana26"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-accent-500 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ankitofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-primary-500 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:ranaankitr@outlook.com"
            className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-accent-500 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="tel:+919650817217"
            className="p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-primary-500 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full border border-gray-700 hover:border-accent-500 transition-all duration-300"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

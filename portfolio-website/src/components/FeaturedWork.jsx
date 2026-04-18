import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaStar, FaRocket, FaAward } from 'react-icons/fa';

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = [
    {
      title: 'Bulk Certificate Generator',
      description:
        'Automated certificate generation system that creates and distributes personalized certificates at scale. Built with advanced PDF generation and email automation.',
      features: [
        'Automated PDF generation',
        'Email distribution system',
        'Template customization',
        'Batch processing',
      ],
      icon: <FaAward className="w-12 h-12" />,
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      borderGradient: 'from-yellow-500/50 to-red-500/50',
    },
    {
      title: 'LMS Platform',
      description:
        'Comprehensive Learning Management System with course creation, student enrollment, progress tracking, and assessment tools. Designed for scalability and user engagement.',
      features: [
        'Course management',
        'Student analytics',
        'Assessment tools',
        'Progress tracking',
      ],
      icon: <FaRocket className="w-12 h-12" />,
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      borderGradient: 'from-blue-500/50 to-pink-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="featured"
      ref={ref}
      className="relative py-20 md:py-32 bg-gray-950 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-gray-950 to-gray-950"></div>
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header with Premium Badge */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 mb-6"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.3)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(168, 85, 247, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FaStar className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Premium Showcase</span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Exceptional projects that showcase innovation, performance, and creativity
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -15, scale: 1.02 }}
              >
                {/* Animated Border Gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur from-accent-500 to-primary-500"></div>

                {/* Card Content */}
                <div className="relative h-full p-8 rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Spotlight Effect */}
                  <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.gradient} mb-6`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Key Features
                      </h4>
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + featureIndex * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Premium Badge */}
                    <motion.div
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-500/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaStar className="w-3 h-3 text-yellow-400" />
                      <span className="text-white text-sm font-medium">Featured Project</span>
                    </motion.div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-500/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <motion.p
              className="text-lg text-gray-300 mb-6"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Want to see these projects in action?{' '}
              <span className="text-gradient font-semibold">Get in touch!</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;

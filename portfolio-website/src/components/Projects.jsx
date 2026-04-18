import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Online Health & Specialization Courses Platform',
      description:
        'Built a full e-learning platform with authentication and role-based access control. Features include course management, user enrollment, and progress tracking.',
      tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth'],
      result: 'Increased course enrollments by 30%',
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-accent-500 to-purple-500',
    },
    {
      title: 'Movie & TV Show Platform',
      description:
        'Built a comprehensive movie database with real-time search functionality. Features debounced search, detailed movie information, and fully responsive UI.',
      tech: ['JavaScript', 'TMDb API', 'HTML', 'CSS'],
      result: 'Real-time search with optimized performance',
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-primary-500 to-cyan-500',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={projectVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and experience
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                className="group relative"
                whileHover={{ y: -10 }}
              >
                <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-500 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 lg:flex-col">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-600 to-primary-600 text-white font-semibold hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-300 whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>

                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold hover:border-accent-500 transition-all duration-300 whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>GitHub</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 text-sm hover:border-accent-500/50 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.3 + techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Result Badge */}
                    <motion.div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-white/10`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">{project.result}</span>
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            variants={projectVariants}
            className="mt-16 text-center"
          >
            <motion.a
              href="https://github.com/AnkitRana26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-accent-500 text-white font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNginx,
  SiGit,
  SiPostman,
  SiJira,
  SiBitbucket,
  SiMui,
} from 'react-icons/si';
import { FaAws, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-accent-500 to-purple-500',
      skills: [
        { name: 'React.js', icon: <SiReact />, level: 95 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
        { name: 'Material UI', icon: <SiMui />, level: 90 },
        { name: 'HTML', icon: <SiHtml5 />, level: 98 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 95 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-primary-500 to-cyan-500',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
        { name: 'Express.js', icon: <SiExpress />, level: 90 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'REST APIs', icon: <SiNodedotjs />, level: 92 },
        { name: 'Authentication', icon: <SiNodedotjs />, level: 88 },
      ],
    },
    {
      title: 'Tools & DevOps',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS (EC2, S3)', icon: <FaAws />, level: 80 },
        { name: 'Nginx', icon: <SiNginx />, level: 75 },
        { name: 'Git', icon: <SiGit />, level: 95 },
        { name: 'Postman', icon: <SiPostman />, level: 90 },
        { name: 'Jira', icon: <SiJira />, level: 85 },
        { name: 'Bitbucket', icon: <SiBitbucket />, level: 85 },
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="relative"
              >
                {/* Category Title */}
                <div className="mb-8 flex items-center justify-center">
                  <motion.div
                    className={`px-6 py-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-10 backdrop-blur-sm border border-white/10`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                        {/* Skill Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className={`text-3xl text-white`}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {skill.level}% Proficiency
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                              duration: 1,
                              ease: 'easeOut',
                            }}
                          />
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div
                            className={`absolute inset-0 rounded-xl shadow-lg shadow-accent-500/20`}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-wrap justify-center gap-3">
              {[
                'Redux',
                'Context API',
                'Webpack',
                'Vite',
                'TypeScript',
                'Tailwind CSS',
                'Firebase',
                'Socket.io',
                'Docker',
                'CI/CD',
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-accent-500/50 text-gray-300 text-sm transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

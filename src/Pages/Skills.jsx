import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const backgroundVariants = {
    animate: {
      x: [0, -100, 0],
      y: [0, 50, 0],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={40} />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt size={40} />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs size={40} />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact size={40} />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <FaNodeJs size={40} />, color: 'text-green-500' },
    { name: 'Express', icon: <SiExpress size={40} />, color: 'text-gray-400' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-600' },
    { name: 'Git', icon: <FaGitAlt size={40} />, color: 'text-orange-600' },
    { name: 'GitHub', icon: <FaGithub size={40} />, color: 'text-gray-800' },
    { name: 'Tailwind', icon: <FaGithub size={40} />, color: 'text-gray-800' }
  ];

  return (
    <section id='skills' className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        className="absolute top-0 left-0 w-full h-full"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-700 opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-indigo-500 mx-auto"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium text-white">{skill.name}</h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="h-1 bg-indigo-500 mt-2"
              />
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
};

export default Skills;
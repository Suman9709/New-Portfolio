import React from 'react';
import SpotlightCard from '../Components/SpotlightCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiMongodb, SiTailwindcss, SiFirebase } from 'react-icons/si';


const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product filtering, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      technologies: [<SiReact className="text-blue-400" />, <SiMongodb className="text-green-600" />],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Productivity application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
      technologies: [<SiReact className="text-blue-400" />, <SiFirebase className="text-yellow-500" />, <SiTailwindcss className="text-cyan-400" />],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio with smooth animations, project showcase, and contact form.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      technologies: [<SiReact className="text-blue-400" />, <SiTailwindcss className="text-cyan-400" />],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and customizable reports.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80",
      technologies: [<SiReact className="text-blue-400" />, <SiTailwindcss className="text-cyan-400" />],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id='Projects' className="min-h-screen  relative overflow-hidden z-1">
     
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">My Projects</h1>
          <div className="w-20 h-1 bg-indigo-600 mx-auto "></div>
          <p className="text-neutral-400 mb-12 text-center max-w-2xl mx-auto mt-2">
            Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <SpotlightCard 
                key={index}
                className="custom-spotlight-card h-full" 
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="rounded-xl overflow-hidden mb-6 h-48 relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                    />
                    <div className="absolute inset-0  bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-neutral-400 mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex space-x-3 mb-6">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="text-2xl">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      className="flex items-center px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors text-sm"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                    <a 
                      href={project.live} 
                      className="flex items-center px-4 py-2 border border-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
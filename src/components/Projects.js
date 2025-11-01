import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'ScanShot',
      description: 'OCR + OMR Android application built with Kotlin and ML Kit. Detects and evaluates MCQ sheets and text in real-time.',
      tech: ['Kotlin', 'ML Kit', 'OCR', 'OMR', 'Android'],
      github: 'https://github.com/Enigmah-00/project2-2',
      demo: null
    },
    {
      title: 'Dot and Boxes',
      description: 'Interactive game implementation of the classic Dot and Boxes strategy game with AI opponent.',
      tech: ['JavaScript', 'Game Dev', 'AI'],
      github: 'https://github.com/Enigmah-00/Dot-and-Boxes',
      demo: 'https://dot-and-boxes.onrender.com/'
    },
    {
      title: 'MindBridge',
      description: 'A platform connecting minds through innovative communication and collaboration features.',
      tech: ['React', 'Web Dev', 'Real-time'],
      github: 'https://github.com/Enigmah-00/MindBridge',
      demo: 'https://mindbridge-six.vercel.app'
    },
    {
      title: 'Metroscape',
      description: 'NASA Space Apps Challenge 2025 project focused on urban planning and space technology integration.',
      tech: ['React', 'NASA API', 'Space Tech'],
      github: 'https://github.com/niloy200119/Nasa_SpaceChallenge_2025',
      demo: 'https://nasa-space-challenge-2025.vercel.app/'
    }
  ];

  return (
    <motion.section 
      className="projects-section section" 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 50px rgba(0, 255, 204, 0.3)"
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💻</span> GitHub
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🚀</span> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playSound = useSound();

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

  // Auto-slide effect - change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index) => {
    playSound('click');
    setCurrentIndex(index);
  };

  return (
    <motion.section 
      className="projects-section section" 
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        
        <div className="carousel-container">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              className="project-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96],
                opacity: { duration: 0.4 }
              }}
            >
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              
              <div className="tech-stack">
                {projects[currentIndex].tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <motion.a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github clickable"
                  onClick={() => playSound('click')}
                  onMouseEnter={() => playSound('hover')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💻</span> GitHub
                </motion.a>
                {projects[currentIndex].demo && (
                  <motion.a
                    href={projects[currentIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo clickable"
                    onClick={() => playSound('click')}
                    onMouseEnter={() => playSound('hover')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🚀</span> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => playSound('hover')}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;

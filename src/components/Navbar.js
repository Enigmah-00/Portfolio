import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const playSound = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['about', 'stats', 'academic', 'achievements', 'projects', 'skills', 'cocurricular'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    playSound('click');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-links">
        {['about', 'stats', 'academic', 'achievements', 'projects', 'skills', 'cocurricular'].map((section) => (
          <motion.button
            key={section}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            onMouseEnter={() => playSound('hover')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section === 'stats' ? 'CP Stats' : 
             section === 'cocurricular' ? 'Activities' : 
             section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;

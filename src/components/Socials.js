import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Socials.css';

function Socials() {
  const playSound = useSound();
  
  const socials = [
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/mahdi.hasan.qurishi/',
      color: '#1877f2',
      description: 'Connect with me on Facebook'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/mahdi-hasan-qurishi-42ba89318/',
      color: '#0077b5',
      description: 'View my professional profile'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Enigmah-00',
      color: '#00ffcc',
      description: 'Check out my code repositories'
    },
    {
      name: 'Codeforces',
      icon: '🏅',
      url: 'https://codeforces.com/profile/ENIGMAH',
      color: '#ff6b6b',
      description: 'Follow my competitive programming journey'
    }
  ];

  return (
    <motion.section 
      className="socials-section section" 
      id="socials"
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
          Connect With Me
        </motion.h2>
        
        <div className="socials-grid">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 15px 50px ${social.color}60`,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: social.color }}
            >
              <div 
                className="social-icon"
                style={{ filter: `drop-shadow(0 0 15px ${social.color})` }}
              >
                {social.icon}
              </div>
              <h3 style={{ color: social.color }}>{social.name}</h3>
              <p>{social.description}</p>
              <span className="visit-link" style={{ color: social.color }}>
                Visit Profile →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Socials;

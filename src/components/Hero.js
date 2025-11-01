import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Hero.css';

function Hero() {
  const playSound = useSound();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const links = [
    { name: 'Codeforces', url: 'https://codeforces.com/profile/ENIGMAH' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/disaster101' },
    { name: 'AtCoder', url: 'https://atcoder.jp/users/enigmah_00' },
    { name: 'GitHub', url: 'https://github.com/Enigmah-00' }
  ];

  return (
    <motion.section 
      className="hero section" 
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container hero-content">
        <motion.div 
          className="portrait"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/ChatGPT Image Jul 18, 2025, 01_41_32 PM.png" alt="Mahdi Hasan Qurishi" />
        </motion.div>
        
        <motion.div className="bio" variants={itemVariants}>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Mahdi Hasan Qurishi
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a <span className="highlight-rank">Codeforces Specialist</span> and competitive programmer, 
            3rd year CSE student at Shahjalal University of Science and Technology. 
            Passionate about AI, ML, and Android development.
          </motion.p>
          <motion.div 
            className="links"
            variants={containerVariants}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(0, 255, 204, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;

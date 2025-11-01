import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Achievements.css';

function Achievements() {
  const playSound = useSound();
  const achievements = [
    {
      icon: '🌟',
      title: 'Codeforces Specialist',
      description: 'Achieved Specialist rank on Codeforces competitive programming platform',
      color: '#03a89e',
      highlight: true
    },
    {
      icon: '🏆',
      title: 'Top 5 in CP Quiz',
      description: 'Secured Top 5 position in Competitive Programming Quiz of SUST CSE 2021 Batch',
      color: '#ffd700',
      highlight: true
    },
    {
      icon: '💻',
      title: 'LU Inter-University Programming Contest',
      description: 'Secured 16th position in TechStorm presents LU Inter-University Junior Programming Contest as team SUST_Brute_force_believers',
      color: '#a55eea',
      link: true,
      linkUrl: 'https://serious-oj.com/contest/67559b35a9f1c7000843e73f'
    },
    {
      icon: '🛰️',
      title: 'NASA Space Apps Hackathon',
      description: 'Participated in the global NASA Space Apps Challenge hackathon',
      color: '#0B3D91',
      certificate: true,
      certificateLink: '/NASA SPACE.pdf'
    },
    {
      icon: '📡',
      title: 'Ericsson Edge Academia',
      description: 'Successfully completed Ericsson Edge Academia certification program',
      color: '#0082E6',
      certificate: true,
      certificateLink: '/Ericsson.pdf'
    }
  ];

  return (
    <motion.section 
      className="achievements-section section" 
      id="achievements"
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
          Achievements & Certifications
        </motion.h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 15px 50px ${achievement.color}40`,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className="achievement-icon"
                style={{ textShadow: `0 0 20px ${achievement.color}` }}
              >
                {achievement.icon}
              </div>
              <h3 style={{ color: achievement.color }}>{achievement.title}</h3>
              <p>{achievement.description}</p>
              {achievement.certificate && (
                <motion.a
                  href={achievement.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-badge clickable"
                  onClick={() => playSound('click')}
                  onMouseEnter={() => playSound('hover')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📜 View Certificate
                </motion.a>
              )}
              {achievement.link && (
                <motion.a
                  href={achievement.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-badge clickable"
                  onClick={() => playSound('click')}
                  onMouseEnter={() => playSound('hover')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔗 View Contest
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      icon: '🌟',
      title: 'Codeforces Specialist',
      description: 'Achieved Specialist rank on Codeforces competitive programming platform',
      color: '#03a89e',
      highlight: true
    },
    {
      icon: '🚀',
      title: 'NASA Space Apps Hackathon',
      description: 'Participated in the global NASA Space Apps Challenge hackathon',
      color: '#0B3D91',
      certificate: true
    },
    {
      icon: '📡',
      title: 'Ericsson Edge Academia',
      description: 'Successfully completed Ericsson Edge Academia certification program',
      color: '#0082E6',
      certificate: true
    }
  ];

  return (
    <motion.section 
      className="achievements-section section" 
      id="achievements"
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
          Achievements & Certifications
        </motion.h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 15px 50px ${achievement.color}40`
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
                <div className="certificate-badge">
                  📜 Certified
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Achievements;

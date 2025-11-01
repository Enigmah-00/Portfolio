import React from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Activities.css';

function Activities() {
  const playSound = useSound();
  
  const activities = [
    {
      icon: '🎪',
      title: 'SUST CSE Carnival 2023',
      description: 'Volunteered at SUST CSE Carnival 2023, helping organize and coordinate technical events',
      color: '#00ffcc'
    },
    {
      icon: '💻',
      title: 'National High School Programming Contest 2025',
      description: 'Volunteered at National High School Programming Contest 2025, assisting participants and managing contest operations',
      color: '#48dbfb'
    },
    {
      icon: '📚',
      title: 'Creative Writing',
      description: 'Wrote several poems, literature and science fiction as a former member of MAVOI ABRITI SONGSHOD',
      color: '#ff6b6b'
    },
    {
      icon: '📖',
      title: 'Avid Reader & Book Collector',
      description: 'I read varieties of books, novels by Humayun Ahmed and Islamic Books by Arif Azad are my favourite. I have a hobby of collecting books too',
      color: '#9b59b6'
    },
    {
      icon: '♟️',
      title: 'Chess Enthusiast',
      description: 'Apart from programming, I enjoy playing chess online to sharpen strategic thinking',
      color: '#feca57',
      link: 'https://www.chess.com/member/enigmah_00',
      linkText: 'Chess.com Profile'
    }
  ];

  return (
    <motion.section 
      className="activities-section section" 
      id="cocurricular"
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
          Co-Curricular Activities
        </motion.h2>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="activity-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 15px 50px ${activity.color}40`
              }}
            >
              <div 
                className="activity-icon"
                style={{ textShadow: `0 0 20px ${activity.color}` }}
              >
                {activity.icon}
              </div>
              <h3 style={{ color: activity.color }}>{activity.title}</h3>
              <p>{activity.description}</p>
              {activity.link && (
                <motion.a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="activity-link"
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activity.linkText} →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Activities;

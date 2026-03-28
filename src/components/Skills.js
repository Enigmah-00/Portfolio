import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Skills.css';

function Skills() {
  const [, setHoveredSkill] = useState(null);
  const playSound = useSound();

  const skills = [
    { name: 'C / C++', color: '#00a8cc', icon: '©️' },
    { name: 'Java', color: '#ff6b6b', icon: '☕' },
    { name: 'Kotlin', color: '#a55eea', icon: '🅺' },
    { name: 'HTML / CSS', color: '#48dbfb', icon: '🎨' },
    { name: 'Python', color: '#feca57', icon: '🐍' },
    { name: 'Prompt Engineering', color: '#1dd1a1', icon: '🤖' },
    { name: 'Web Development', color: '#ff9ff3', icon: '💻' },
    { name: 'Managing Skill', color: '#00ffcc', icon: '👔' },
    { name: 'Unity / C#', color: '#ffffff', icon: '🎮' },
    { name: 'Deep Learning', color: '#ff6348', icon: 'ann' }
  ];

  const renderSkillIcon = (skill) => {
    if (skill.icon !== 'ann') {
      return <span className="skill-icon">{skill.icon}</span>;
    }

    return (
      <span className="skill-icon skill-icon-ann" aria-label="Artificial Neural Network icon">
        <svg viewBox="0 0 64 64" className="skill-icon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="16" y1="18" x2="32" y2="16" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="18" x2="32" y2="32" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="18" x2="32" y2="48" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="32" x2="32" y2="16" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="32" x2="32" y2="48" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="46" x2="32" y2="16" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="46" x2="32" y2="32" stroke="currentColor" strokeWidth="2.2" />
          <line x1="16" y1="46" x2="32" y2="48" stroke="currentColor" strokeWidth="2.2" />
          <line x1="32" y1="16" x2="48" y2="24" stroke="currentColor" strokeWidth="2.2" />
          <line x1="32" y1="32" x2="48" y2="24" stroke="currentColor" strokeWidth="2.2" />
          <line x1="32" y1="48" x2="48" y2="24" stroke="currentColor" strokeWidth="2.2" />

          <circle cx="16" cy="18" r="3.8" fill="currentColor" />
          <circle cx="16" cy="32" r="3.8" fill="currentColor" />
          <circle cx="16" cy="46" r="3.8" fill="currentColor" />
          <circle cx="32" cy="16" r="3.8" fill="currentColor" />
          <circle cx="32" cy="32" r="3.8" fill="currentColor" />
          <circle cx="32" cy="48" r="3.8" fill="currentColor" />
          <circle cx="48" cy="24" r="4.4" fill="currentColor" />
        </svg>
      </span>
    );
  };

  return (
    <motion.section 
      className="skills-section section" 
      id="skills"
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
          Skills
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-box"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => {
                setHoveredSkill(index);
                playSound('hover');
              }}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: skill.name === 'Unity / C#'
                  ? '0 10px 40px rgba(var(--unity-skill-rgb), 0.38)'
                  : `0 10px 40px ${skill.color}60`,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: skill.name === 'Unity / C#'
                  ? 'rgba(var(--unity-skill-rgb), 0.75)'
                  : skill.color,
                background: skill.name === 'Unity / C#'
                  ? 'linear-gradient(135deg, rgba(var(--unity-skill-rgb), 0.12), transparent)'
                  : `linear-gradient(135deg, ${skill.color}15, transparent)`
              }}
            >
              {renderSkillIcon(skill)}
              <span
                className="skill-name"
                style={{ color: skill.name === 'Unity / C#' ? 'var(--unity-skill-color)' : skill.color }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;

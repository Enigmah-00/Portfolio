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
    { name: 'Managing Skill', color: '#00ffcc', icon: '👔' }
  ];

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
                boxShadow: `0 10px 40px ${skill.color}60`,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: skill.color,
                background: `linear-gradient(135deg, ${skill.color}15, transparent)`
              }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name" style={{ color: skill.color }}>
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

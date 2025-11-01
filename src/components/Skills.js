import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'C / C++', level: 90, color: '#00a8cc' },
    { name: 'Java', level: 60, color: '#ff6b6b' },
    { name: 'Kotlin', level: 30, color: '#a55eea' },
    { name: 'HTML / CSS', level: 90, color: '#48dbfb' },
    { name: 'Python', level: 50, color: '#feca57' },
    { name: 'Prompt Engineering', level: 70, color: '#1dd1a1' },
    { name: 'Web Development', level: 10, color: '#ff9ff3' },
    { name: 'Managing Skill', level: 100, color: '#00ffcc', special: true }
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
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={hoveredSkill === index ? 'hovered' : ''}
            >
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <motion.div 
                  className="skill-level"
                  style={{ 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}80`
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
                <span className="skill-percentage">
                  {skill.special ? '∞' : `${skill.level}%`}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Skills;

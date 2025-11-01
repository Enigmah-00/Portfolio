import React from 'react';
import { motion } from 'framer-motion';
import './Academic.css';

function Academic() {
  return (
    <motion.section 
      className="academic-section section" 
      id="academic"
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
          Academic Background
        </motion.h2>
        
        <motion.div 
          className="academic-card"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 15px 50px rgba(0, 255, 204, 0.3)"
          }}
        >
          <div className="academic-icon">🎓</div>
          <h3>Bachelor of Science in Computer Science & Engineering</h3>
          <p className="university">Shahjalal University of Science and Technology</p>
          <div className="academic-details">
            <div className="detail-item">
              <span className="label">Current Year:</span>
              <span className="value">3rd Year</span>
            </div>
            <div className="detail-item">
              <span className="label">CGPA:</span>
              <motion.span 
                className="value cgpa"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                3.74 / 4.00
              </motion.span>
            </div>
          </div>
          <div className="focus-areas">
            <span className="focus-tag">Competitive Programming</span>
            <span className="focus-tag">AI & ML</span>
            <span className="focus-tag">Android Development</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Academic;

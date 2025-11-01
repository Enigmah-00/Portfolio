import React from 'react';
import { motion } from 'framer-motion';
import './Activities.css';

function Activities() {
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
        <motion.div 
          className="activity-card"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 15px 50px rgba(0, 255, 204, 0.3)"
          }}
        >
          <p>
            Apart from programming, I enjoy playing chess online.
          </p>
          <div className="links">
            <motion.a
              href="https://www.chess.com/member/enigmah_00"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Chess.com Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Activities;

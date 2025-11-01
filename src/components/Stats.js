import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

function Stats() {
  const [cfData, setCfData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/user.info?handles=ENIGMAH');
        const data = await response.json();
        
        if (data.status === 'OK') {
          setCfData(data.result[0]);
        } else {
          setError('Failed to fetch data');
        }
      } catch (err) {
        setError('Error fetching Codeforces data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCodeforcesData();
  }, []);

  const getRankColor = (rank) => {
    const colors = {
      'newbie': '#808080',
      'pupil': '#008000',
      'specialist': '#03a89e',
      'expert': '#0000ff',
      'candidate master': '#a0a',
      'master': '#ff8c00',
      'international master': '#ff8c00',
      'grandmaster': '#ff0000',
      'international grandmaster': '#ff0000',
      'legendary grandmaster': '#ff0000'
    };
    return colors[rank?.toLowerCase()] || '#00ffcc';
  };

  return (
    <motion.section 
      className="stats-section section" 
      id="stats"
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
          Competitive Programming Stats
        </motion.h2>

        {loading ? (
          <div className="loading-stats">Loading stats...</div>
        ) : error ? (
          <div className="error-stats">{error}</div>
        ) : cfData ? (
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)" }}
            >
              <div className="stat-icon">🏆</div>
              <div className="stat-label">Rank</div>
              <div 
                className="stat-value" 
                style={{ color: getRankColor(cfData.rank) }}
              >
                {cfData.rank?.toUpperCase() || 'N/A'}
              </div>
            </motion.div>

            <motion.div 
              className="stat-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)" }}
            >
              <div className="stat-icon">⭐</div>
              <div className="stat-label">Rating</div>
              <div className="stat-value">{cfData.rating || 'N/A'}</div>
            </motion.div>

            <motion.div 
              className="stat-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)" }}
            >
              <div className="stat-icon">📈</div>
              <div className="stat-label">Max Rating</div>
              <div className="stat-value">{cfData.maxRating || 'N/A'}</div>
            </motion.div>

            <motion.div 
              className="stat-card"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)" }}
            >
              <div className="stat-icon">💻</div>
              <div className="stat-label">Contribution</div>
              <div className="stat-value">{cfData.contribution || 0}</div>
            </motion.div>
          </div>
        ) : null}

        <motion.div 
          className="profile-link-container"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="https://codeforces.com/profile/ENIGMAH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Full Profile →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Stats;

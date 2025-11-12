import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useSound from '../hooks/useSound';
import './Stats.css';

function Stats() {
  const [cfData, setCfData] = useState(null);
  const [problemCount, setProblemCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const playSound = useSound();

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        // Fetch user info
        const userResponse = await fetch('https://codeforces.com/api/user.info?handles=ENIGMAH');
        const userData = await userResponse.json();
        
        if (userData.status === 'OK') {
          setCfData(userData.result[0]);
        } else {
          setError('Failed to fetch data');
        }

        // Fetch user submissions to count solved problems
        const submissionsResponse = await fetch('https://codeforces.com/api/user.status?handle=ENIGMAH&from=1&count=10000');
        const submissionsData = await submissionsResponse.json();
        
        if (submissionsData.status === 'OK') {
          // Get unique problems that were solved (verdict === 'OK')
          const solvedProblems = new Set();
          submissionsData.result.forEach(submission => {
            if (submission.verdict === 'OK') {
              const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
              solvedProblems.add(problemId);
            }
          });
          setProblemCount(solvedProblems.size);
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
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)", transition: { duration: 0.2 } }}
            >
              <div className="stat-icon">🏆</div>
              <div className="stat-label">Max Rank</div>
              <div 
                className="stat-value" 
                style={{ color: getRankColor(cfData.maxRank) }}
              >
                {cfData.maxRank?.toUpperCase() || 'N/A'}
              </div>
            </motion.div>

            <motion.div 
              className="stat-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)", transition: { duration: 0.2 } }}
            >
              <div className="stat-icon">⭐</div>
              <div className="stat-label">Rating</div>
              <div className="stat-value">{cfData.rating || 'N/A'}</div>
            </motion.div>

                        <motion.div 
              className="stat-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)", transition: { duration: 0.2 } }}
            >
              <div className="stat-icon">📈</div>
              <div className="stat-label">Max Rating</div>
              <div className="stat-value">{cfData.maxRating || 'N/A'}</div>
            </motion.div>

            <motion.div 
              className="stat-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 255, 204, 0.3)", transition: { duration: 0.2 } }}
            >
              <div className="stat-icon">✅</div>
              <div className="stat-label">Problems Solved</div>
              <div className="stat-value">{problemCount || 'N/A'}</div>
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
            onMouseEnter={() => playSound('hover')}
            onClick={() => playSound('click')}
          >
            View Full Profile →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Stats;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Academic from './components/Academic';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Click sound effect
  const playClickSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
  };

  useEffect(() => {
    // Add click sound to all interactive elements
    const handleClick = (e) => {
      if (e.target.closest('a, button, .clickable')) {
        playClickSound();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="loading-content"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="loading-text">MHQ</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <video autoPlay muted loop id="bgVideo">
            <source src="/images/vecteezy_data-neural-network-ai-technology-cloud-computing-bits_21723042.mp4" type="video/mp4" />
          </video>
          
          <Navbar />
          <Hero />
          <Stats />
          <Academic />
          <Achievements />
          <Projects />
          <Skills />
          <Activities />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

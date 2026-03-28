import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [hacked, setHacked] = useState(false);
  const audioContextRef = useRef(null);
  const loadingAudioRef = useRef(null);

  // Initialize audio context
  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  const startHacking = () => {
    if (loading || !showStartScreen) {
      return;
    }

    initAudio();
    setLoadingProgress(0);
    setLoadingText('Initializing...');
    setHacked(false);
    setShowStartScreen(false);

    setLoading(true);
  };

  useEffect(() => {
    if (!loading) {
      return;
    }

    const messages = [
      'Initializing...',
      'Scanning network...',
      'Bypassing firewall...',
      'Accessing mainframe...',
      'Decrypting data...',
      'Loading profile...',
      'Ah,Shit! Here we go again!'
    ];

    setLoadingProgress(0);
    setLoadingText(messages[0]);
    setHacked(false);

    let messageIndex = 0;
    const loadingDurationMs = 10000;
    const loadingStartTime = Date.now();

    if (!loadingAudioRef.current) {
      loadingAudioRef.current = new Audio('/sounds/gta_san_andreas.mp3');
      loadingAudioRef.current.preload = 'auto';
      loadingAudioRef.current.loop = true;
      loadingAudioRef.current.volume = 0.45;
    }

    loadingAudioRef.current.currentTime = 0;
    loadingAudioRef.current.play().catch((error) => {
      console.log('Loading audio play failed:', error);
    });

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - loadingStartTime;
      const progress = Math.min(100, (elapsed / loadingDurationMs) * 100);
      setLoadingProgress(progress);

      if (
        progress >= ((messageIndex + 1) * (100 / messages.length)) &&
        messageIndex < messages.length - 1
      ) {
        messageIndex++;
        setLoadingText(messages[messageIndex]);
      }

      if (progress >= 100) {
        clearInterval(progressInterval);
        setHacked(true);

        if (loadingAudioRef.current) {
          loadingAudioRef.current.pause();
          loadingAudioRef.current.currentTime = 0;
        }

        setLoading(false);
      }
    }, 200);

    return () => {
      clearInterval(progressInterval);
      if (loadingAudioRef.current) {
        loadingAudioRef.current.pause();
        loadingAudioRef.current.currentTime = 0;
      }
    };
  }, [loading]);

  // Click sound effect
  const playClickSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const shouldHideOverflow = showStartScreen || loading;

    if (shouldHideOverflow) {
      body.style.overflow = 'hidden';
      root.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
      root.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
      root.style.overflow = '';
    };
  }, [showStartScreen, loading]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'));
  };

  const loadingVisualSource = loadingProgress < 30
    ? '/Coding.png'
    : loadingProgress < 60
      ? '/gaming.png'
      : '/AI.png';

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
        {showStartScreen && (
          <motion.div
            className="loading-screen hacking-screen start-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="start-content">
              <motion.div
                className="start-heading"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <span className="terminal-text">root@portfolio:~#</span>
                <h1 className="hacking-name">MAHDI HASAN QURISHI</h1>
              </motion.div>

              <motion.p
                className="start-subtitle"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              >
                Access portal ready. Awaiting authorization...
              </motion.p>

              <motion.button
                className="hack-button"
                onClick={startHacking}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 204, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                HACK THE SYSTEM
              </motion.button>
            </div>

            <div className="matrix-bg">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="matrix-column" style={{ left: `${i * 5}%` }}>
                  {Array.from({ length: 10 }).map((_, j) => (
                    <span key={j} style={{ animationDelay: `${Math.random() * 2}s` }}>
                      {String.fromCharCode(33 + Math.random() * 94)}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <motion.div 
            className="loading-screen hacking-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="hacking-content">
              <motion.div 
                className="laptop-frame"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="laptop-screen">
                  <div className="laptop-camera"></div>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={loadingVisualSource}
                      src={loadingVisualSource}
                      alt="Loading visual"
                      className="loading-screen-visual"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                    />
                  </AnimatePresence>

                  <div className="laptop-content">
                    <motion.div 
                      className="hacking-header"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="terminal-text">root@portfolio:~#</div>
                    </motion.div>

                    <motion.div 
                      className="loading-bar-container"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div className="loading-bar">
                        <motion.div 
                          className="loading-bar-fill"
                          style={{ width: `${loadingProgress}%` }}
                        />
                      </div>
                      <div className="loading-percentage">{Math.floor(loadingProgress)}%</div>
                    </motion.div>

                    <motion.div 
                      className="loading-status"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      {!hacked ? (
                        <>
                          <span className="status-indicator blink">▮</span> {loadingText}
                        </>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="hacked-message"
                        >
                          <span className="success-icon">✓</span> Ah,shit, here we go again
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
                <div className="laptop-base"></div>
              </motion.div>

              <div className="matrix-bg">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="matrix-column" style={{ left: `${i * 5}%` }}>
                    {Array.from({ length: 10 }).map((_, j) => (
                      <span key={j} style={{ animationDelay: `${Math.random() * 2}s` }}>
                        {String.fromCharCode(33 + Math.random() * 94)}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showStartScreen && !loading && (
        <>
          <video autoPlay muted loop id="bgVideo" playsInline>
            <source src="https://cdn.pixabay.com/video/2023/05/17/162947-827892269_large.mp4" type="video/mp4" />
            <source src="https://cdn.pixabay.com/video/2022/11/15/139255-770961038_large.mp4" type="video/mp4" />
          </video>
          
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
          <Hero />
          <Stats />
          <Academic />
          <Achievements />
          <Projects />
          <Skills />
          <Activities />
          <Socials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

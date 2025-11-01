import { useCallback, useRef } from 'react';

const useSound = () => {
  const audioContextRef = useRef(null);
  const audioFilesRef = useRef({});

  const playSynthesizedSound = useCallback((soundName, audioContext) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Enhanced retro gaming-style sounds
    if (soundName === 'hover') {
      // Crisp short blip - classic menu hover
      oscillator.type = 'square';
      oscillator.frequency.value = 1200;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.06);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.06);
    } else if (soundName === 'click') {
      // Menu select - ascending pitch with punch
      oscillator.type = 'square';
      oscillator.frequency.value = 800;
      oscillator.frequency.linearRampToValueAtTime(1100, audioContext.currentTime + 0.08);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } else if (soundName === 'loading') {
      // Loading sound - smooth transition
      oscillator.type = 'sine';
      oscillator.frequency.value = 440;
      oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    }
  }, []);

  const playSound = useCallback((soundName) => {
    try {
      // Try to load custom audio file first
      const soundPath = `/sounds/${soundName}.mp3`;
      
      if (!audioFilesRef.current[soundName]) {
        const audio = new Audio(soundPath);
        audio.volume = 0.4;
        
        audio.play().then(() => {
          audioFilesRef.current[soundName] = audio;
        }).catch(() => {
          // File doesn't exist, use synthesized sound
          if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
          }
          if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
          }
          playSynthesizedSound(soundName, audioContextRef.current);
        });
      } else {
        const audio = audioFilesRef.current[soundName];
        audio.currentTime = 0;
        audio.play().catch(() => {
          if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
          }
          if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
          }
          playSynthesizedSound(soundName, audioContextRef.current);
        });
      }
    } catch (error) {
      console.log('Sound error:', error);
    }
  }, [playSynthesizedSound]);

  return playSound;
};

export default useSound;

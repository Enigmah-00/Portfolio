import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Connect: <motion.a 
          href="mailto:mahdiqureshi9@gmail.com"
          whileHover={{ 
            color: "#00ffcc",
            textShadow: "0 0 10px rgba(0, 255, 204, 0.8)"
          }}
        >
          mahdiqureshi9@gmail.com
        </motion.a>
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="copyright"
      >
        © 2025 Mahdi Hasan Qurishi. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;

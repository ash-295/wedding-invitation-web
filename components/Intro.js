'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EASE } from './Reveal';

// Sealed envelope landing screen. Tapping breaks the seal, lifts the flap,
// slides the card out, then hands over to the invitation.
export default function Intro({ onOpen }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setTimeout(onOpen, 2600);
  };

  return (
    <motion.div
      className="intro"
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <div className="intro-glow" aria-hidden />

      <motion.p
        className="intro-kicker"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: open ? 0 : 1, y: 0 }}
        transition={{ duration: 1, delay: open ? 0 : 0.4, ease: EASE }}
      >
        You are cordially invited
      </motion.p>

      <motion.button
        type="button"
        className={`envelope${open ? ' open' : ''}`}
        onClick={handleOpen}
        aria-label="Open the wedding invitation"
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, ease: EASE }}
        whileHover={open ? undefined : { y: -6 }}
      >
        <span className="env-back" />
        <span className="env-letter">
          <svg viewBox="0 0 20 28" className="env-letter-cross" aria-hidden>
            <path d="M10 1v26M3 9h14" />
          </svg>
          <span className="env-letter-names">Anchal &amp; Rohan</span>
          <span className="env-letter-date">19 · 01 · 2027</span>
        </span>
        <span className="env-front" />
        <span className="env-flap" />
        <span className="env-seal">
          <span>A</span>
          <span>R</span>
        </span>
      </motion.button>

      <motion.p
        className="intro-hint"
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 0 } : { opacity: [0.35, 1, 0.35] }}
        transition={open ? { duration: 0.3 } : { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        Tap the seal to open
      </motion.p>
    </motion.div>
  );
}

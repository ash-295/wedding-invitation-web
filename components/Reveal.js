'use client';

import { motion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className, delay = 0, y = 40, x = 0, amount = 0.3 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Eyebrow + script title + cross ornament, shared by every section.
export function SectionTitle({ eyebrow, title, light }) {
  return (
    <div className={`section-title${light ? ' is-light' : ''}`}>
      <Reveal y={20}>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal y={30} delay={0.1}>
        <h2 className="script-title">{title}</h2>
      </Reveal>
      <Ornament />
    </div>
  );
}

export function Ornament({ className = '' }) {
  return (
    <motion.div
      className={`ornament ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      aria-hidden
    >
      <motion.span
        className="ornament-line"
        style={{ originX: 1 }}
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: EASE, delay: 0.2 } } }}
      />
      <motion.svg
        viewBox="0 0 20 28"
        className="ornament-cross"
        variants={{ hidden: { opacity: 0, scale: 0.4, rotate: -45 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, ease: EASE } } }}
      >
        <path d="M10 1v26M3 9h14" />
      </motion.svg>
      <motion.span
        className="ornament-line"
        style={{ originX: 0 }}
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: EASE, delay: 0.2 } } }}
      />
    </motion.div>
  );
}

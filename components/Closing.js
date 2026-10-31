'use client';

import { motion } from 'framer-motion';
import Floral from './Floral';
import Reveal, { EASE, Ornament } from './Reveal';

export default function Closing() {
  return (
    <footer className="closing">
      <div className="floral-wrap floral-closing-l">
        <Floral />
      </div>
      <div className="floral-wrap floral-closing-r">
        <Floral />
      </div>

      <Reveal>
        <p className="closing-lead">Your presence and prayers are the most precious gift we could ask for.</p>
      </Reveal>

      <motion.div
        className="monogram"
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <span>A</span>
        <svg viewBox="0 0 20 28" aria-hidden>
          <path d="M10 1v26M3 9h14" />
        </svg>
        <span>R</span>
      </motion.div>

      <Reveal delay={0.2}>
        <p className="closing-names">Anchal &amp; Rohan</p>
        <p className="closing-date">19 · 01 · 2027</p>
      </Reveal>
      <Ornament />
      <Reveal delay={0.3}>
        <p className="closing-families">
          With love,
          <br />
          The Jena &amp; Mathew Families
        </p>
      </Reveal>
    </footer>
  );
}

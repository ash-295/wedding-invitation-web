'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EASE, Ornament } from './Reveal';

const LINE = 'A cord of three strands is not quickly broken.';

export default function Verse() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const crossY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="verse" ref={ref}>
      <motion.div className="verse-glow" style={{ y: glowY }} aria-hidden />
      <motion.svg className="verse-cross" viewBox="0 0 20 28" style={{ y: crossY }} aria-hidden>
        <path d="M10 1v26M3 9h14" />
      </motion.svg>
      <div className="verse-stars" aria-hidden />

      <div className="verse-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE }}
        >
          Ecclesiastes 4:12
        </motion.p>

        <motion.blockquote
          className="verse-quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {LINE.split(' ').map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
              }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.blockquote>

        <motion.p
          className="verse-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
        >
          Him, her, and the Lord — bound together in love.
        </motion.p>
        <Ornament className="is-light" />
      </div>
    </section>
  );
}

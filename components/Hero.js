'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Floral from './Floral';
import { EASE } from './Reveal';

function FadeUp({ start, delay, className, children, as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={start ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

// Script names are revealed with a left-to-right wipe, like ink being written.
function ScriptName({ children, start, delay }) {
  return (
    <motion.span
      className="hero-name"
      initial={{ clipPath: 'inset(-30% 100% -30% -10%)', opacity: 0, filter: 'blur(6px)' }}
      animate={start ? { clipPath: 'inset(-30% -10% -30% -10%)', opacity: 1, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 2, delay, ease: [0.45, 0, 0.2, 1] }}
    >
      {children}
    </motion.span>
  );
}

export default function Hero({ start }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const floralY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero-wash" aria-hidden />
      <motion.div className="floral-wrap floral-tl" style={{ y: floralY }}>
        <Floral start={start} />
      </motion.div>
      <motion.div className="floral-wrap floral-br" style={{ y: floralY }}>
        <Floral start={start} />
      </motion.div>

      <motion.div className="hero-inner" style={{ y, opacity }}>
        <motion.svg
          viewBox="0 0 20 28"
          className="hero-cross"
          initial={{ opacity: 0 }}
          animate={start ? { opacity: 1 } : undefined}
          transition={{ duration: 0.4, delay: 0.2 }}
          aria-hidden
        >
          <motion.path
            d="M10 1v26M3 9h14"
            initial={{ pathLength: 0 }}
            animate={start ? { pathLength: 1 } : undefined}
            transition={{ duration: 1.6, delay: 0.2, ease: 'easeInOut' }}
          />
        </motion.svg>

        <FadeUp start={start} delay={0.5} className="hero-verse">
          <p>
            “This was the Lord’s doing; it is marvellous in our eyes. This is the day the Lord has made; we will
            rejoice and be glad in it.”
          </p>
          <span className="verse-ref">— Psalms 118:23 &amp; 24 —</span>
        </FadeUp>

        <FadeUp start={start} delay={1} as="p" className="hero-blessing">
          With the blessings of Almighty God and our families,
          <br /> we joyfully invite you to the holy matrimony of
        </FadeUp>

        <h1 className="hero-names">
          <ScriptName start={start} delay={1.5}>Anchal</ScriptName>
          <motion.span
            className="hero-amp"
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            animate={start ? { opacity: 1, scale: 1, rotate: 0 } : undefined}
            transition={{ duration: 1.2, delay: 2.7, ease: EASE }}
          >
            &amp;
          </motion.span>
          <ScriptName start={start} delay={3}>Rohan</ScriptName>
        </h1>

        <FadeUp start={start} delay={4.1} className="hero-date">
          <span className="hero-date-line" />
          <span className="hero-date-text">
            Tuesday <i>·</i> 19<sup>th</sup> January 2027
          </span>
          <span className="hero-date-line" />
        </FadeUp>
        <FadeUp start={start} delay={4.4} as="p" className="hero-sub">
          3:00 PM onwards · Pimpri, Pune
        </FadeUp>
      </motion.div>

      <motion.a
        href="#countdown"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : undefined}
        transition={{ delay: 5, duration: 1 }}
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <span className="scroll-cue-line" />
      </motion.a>
    </section>
  );
}

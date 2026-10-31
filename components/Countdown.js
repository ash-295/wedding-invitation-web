'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { WEDDING_DATE } from '@/lib/wedding';
import Reveal, { SectionTitle } from './Reveal';

const TARGET = new Date(WEDDING_DATE).getTime();

function remaining() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    done: diff === 0,
    units: [
      ['Days', Math.floor(diff / 86400000)],
      ['Hours', Math.floor(diff / 3600000) % 24],
      ['Minutes', Math.floor(diff / 60000) % 60],
      ['Seconds', Math.floor(diff / 1000) % 60],
    ],
  };
}

function Digit({ value }) {
  const text = String(value).padStart(2, '0');
  return (
    <span className="count-value">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={{ y: '-60%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '60%', opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Countdown() {
  // null until mounted so the server render never disagrees with the client clock.
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(remaining());
    const id = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section countdown" id="countdown">
      <SectionTitle eyebrow="Save the date" title="Counting down to forever" />

      {time?.done ? (
        <Reveal>
          <p className="countdown-done">Two became one — praise the Lord!</p>
        </Reveal>
      ) : (
        <div className="count-grid">
          {(time?.units ?? [['Days'], ['Hours'], ['Minutes'], ['Seconds']]).map(([label, value], i) => (
            <Reveal key={label} delay={i * 0.12} y={30} className="count-card">
              {value === undefined ? <span className="count-value">--</span> : <Digit value={value} />}
              <span className="count-label">{label}</span>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={0.3}>
        <p className="countdown-note">until we say “I do” on Tuesday, 19th January 2027 at 3:00 PM</p>
      </Reveal>
    </section>
  );
}

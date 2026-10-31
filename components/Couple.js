'use client';

import { motion } from 'framer-motion';
import { couple } from '@/lib/wedding';
import Reveal, { EASE, SectionTitle } from './Reveal';

function Person({ person, from }) {
  return (
    <Reveal className="person" x={from * 60} y={20} amount={0.35}>
      <div className="arch">
        <div className="arch-inner">
          <span className="arch-initial">{person.name[0]}</span>
        </div>
      </div>
      <p className="eyebrow">{person.role}</p>
      <h3 className="person-name">{person.name}</h3>
      <p className="person-parents">
        <span>{person.relation}</span>
        {person.parents}
      </p>
    </Reveal>
  );
}

function Rings() {
  const ring = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (d) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.6, delay: d, ease: 'easeInOut' }, opacity: { duration: 0.2, delay: d } },
    }),
  };
  return (
    <motion.svg
      className="rings"
      viewBox="0 0 120 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      aria-hidden
    >
      <motion.circle cx="46" cy="46" r="24" variants={ring} custom={0} />
      <motion.circle cx="74" cy="46" r="24" variants={ring} custom={0.4} />
      <motion.path d="M68 18l6-8 6 8-6 6z" strokeWidth="1.4" variants={ring} custom={1.2} />
      <motion.g
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { delay: 1.8, duration: 0.6, ease: EASE } } }}
        style={{ originX: '74px', originY: '12px' }}
      >
        <path d="M74 4v-3M80 7l2-2M68 7l-2-2" strokeWidth="1" />
      </motion.g>
    </motion.svg>
  );
}

export default function Couple() {
  return (
    <section className="section couple" id="couple">
      <SectionTitle eyebrow="Two hearts · One faith" title="The Bride & Groom" />
      <div className="couple-grid">
        <Person person={couple.bride} from={-1} />
        <Reveal className="couple-middle" y={20} delay={0.2}>
          <Rings />
        </Reveal>
        <Person person={couple.groom} from={1} />
      </div>
      <Reveal className="couple-verse" delay={0.2}>
        <p>“Therefore what God has joined together, let no one separate.”</p>
        <span className="verse-ref">— Mark 10:9 —</span>
      </Reveal>
    </section>
  );
}

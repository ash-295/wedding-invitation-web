'use client';

import { motion } from 'framer-motion';

// Hand-drawn style line-art branch that "draws itself" in.
const PETAL = 'M0 0C-9 -12 -10 -30 0 -38C10 -30 9 -12 0 0Z';
const LEAF = 'M0 0C8 -11 22 -13 34 -6C22 3 8 4 0 0Z';
const LEAF_VEIN = 'M0 0C10 -4 22 -6 34 -6';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (d = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: d, duration: 1.8, ease: 'easeInOut' },
      opacity: { delay: d, duration: 0.3 },
    },
  }),
};

function Bloom({ x, y, s = 1, r = 0, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a, i) => (
        <g key={a} transform={`rotate(${a})`}>
          <motion.path d={PETAL} variants={draw} custom={d + i * 0.14} />
          <motion.path d="M0 -6L0 -22" variants={draw} custom={d + 0.6 + i * 0.1} strokeWidth="0.6" />
        </g>
      ))}
      <motion.circle r="4.5" variants={draw} custom={d + 0.9} />
    </g>
  );
}

function Leaf({ x, y, r = 0, s = 1, d = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <motion.path d={LEAF} variants={draw} custom={d} />
      <motion.path d={LEAF_VEIN} variants={draw} custom={d + 0.4} strokeWidth="0.6" />
    </g>
  );
}

export default function Floral({ className, start }) {
  // Driven by `start` when given (hero), otherwise by scrolling into view.
  const trigger =
    start === undefined
      ? { whileInView: 'visible', viewport: { once: true, amount: 0.3 } }
      : { animate: start ? 'visible' : 'hidden' };

  return (
    <motion.svg
      className={className}
      viewBox="0 0 240 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      aria-hidden
      {...trigger}
    >
      <motion.path d="M8 296C40 250 58 200 86 160S150 80 210 38" variants={draw} custom={0} />
      <motion.path d="M86 160C112 148 140 152 164 166" variants={draw} custom={0.5} />
      <motion.path d="M62 206C40 186 32 160 38 132" variants={draw} custom={0.6} />
      <Leaf x={34} y={256} r={-70} d={0.7} />
      <Leaf x={58} y={210} r={-10} s={0.9} d={0.9} />
      <Leaf x={104} y={132} r={-80} s={0.85} d={1.1} />
      <Leaf x={140} y={96} r={10} s={0.8} d={1.3} />
      <Leaf x={120} y={152} r={40} s={0.7} d={1.2} />
      <Bloom x={212} y={36} s={1.05} r={20} d={1.2} />
      <Bloom x={168} y={168} s={0.75} r={100} d={1.5} />
      <Bloom x={38} y={128} s={0.7} r={-20} d={1.7} />
      <motion.circle cx="176" cy="66" r="3" variants={draw} custom={1.8} />
      <motion.circle cx="70" cy="178" r="2.5" variants={draw} custom={1.9} />
    </motion.svg>
  );
}

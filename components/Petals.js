'use client';

import { useEffect, useState } from 'react';

const TINTS = [
  ['#f1e6fb', '#b994e0'],
  ['#f6e3f1', '#cf9fd0'],
  ['#ece2fa', '#9f7fd1'],
  ['#fbf3ff', '#d8bdf0'],
];

// Randomised on the client only, so server and client markup match.
export default function Petals({ active }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const count = window.innerWidth < 640 ? 12 : 22;
    setPetals(
      Array.from({ length: count }, (_, i) => {
        const [from, to] = TINTS[i % TINTS.length];
        return {
          id: i,
          left: Math.random() * 100,
          size: 9 + Math.random() * 13,
          duration: 13 + Math.random() * 12,
          delay: -Math.random() * 25,
          sway: 25 + Math.random() * 70,
          swayDuration: 3 + Math.random() * 3,
          spin: Math.random() > 0.5 ? 1 : -1,
          from,
          to,
        };
      })
    );
  }, []);

  return (
    <div className={`petals${active ? ' is-active' : ''}`} aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal-track"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <span
            className="petal"
            style={{
              width: p.size,
              height: p.size * 0.8,
              '--sway': `${p.sway}px`,
              '--spin': p.spin,
              animationDuration: `${p.swayDuration}s`,
              background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
            }}
          />
        </span>
      ))}
    </div>
  );
}

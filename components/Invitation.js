'use client';

import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import Closing from './Closing';
import Countdown from './Countdown';
import Couple from './Couple';
import Events from './Events';
import Hero from './Hero';
import Intro from './Intro';
import Petals from './Petals';
import Venues from './Venues';
import Verse from './Verse';

export default function Invitation() {
  const [opened, setOpened] = useState(false);

  // Keep the page pinned to the top while the envelope is showing.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.classList.toggle('is-locked', !opened);
  }, [opened]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!opened && <Intro key="intro" onOpen={() => setOpened(true)} />}</AnimatePresence>
      <Petals active={opened} />
      <main>
        <Hero start={opened} />
        <Countdown />
        <Couple />
        <Events />
        <Verse />
        <Venues />
        <Closing />
      </main>
    </MotionConfig>
  );
}

'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { events } from '@/lib/wedding';
import { ArrowIcon, CalendarIcon, ClockIcon, PinIcon, eventIcons } from './Icons';
import Reveal, { EASE, SectionTitle } from './Reveal';

function EventCard({ event, index }) {
  const Icon = eventIcons[event.icon];
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <div className={`tl-item tl-${side}`}>
      <motion.span
        className="tl-dot"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        aria-hidden
      />
      <Reveal x={side === 'left' ? -50 : 50} y={30} amount={0.25} className="tl-reveal">
        <motion.article
          className={`event-card${event.featured ? ' is-featured' : ''}`}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          {event.featured && <span className="event-badge">The Wedding</span>}
          <div className="event-icon">
            <Icon />
          </div>
          <h3 className="event-title">{event.title}</h3>
          <ul className="event-meta">
            <li>
              <CalendarIcon />
              <span>
                {event.weekday}, {event.day}
                <sup>th</sup> {event.month}
              </span>
            </li>
            <li>
              <ClockIcon />
              <span>{event.time}</span>
            </li>
            <li>
              <PinIcon />
              <span>{event.venue}</span>
            </li>
          </ul>
          <div className="event-actions">
            <a className="btn btn-solid" href={event.directions} target="_blank" rel="noopener noreferrer">
              Directions <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href={event.calendar} target="_blank" rel="noopener noreferrer">
              Add to calendar
            </a>
          </div>
        </motion.article>
      </Reveal>
    </div>
  );
}

export default function Events() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  return (
    <section className="section events" id="events">
      <SectionTitle eyebrow="Join us in celebration" title="Wedding Festivities" />
      <div className="timeline" ref={ref}>
        <span className="tl-line" aria-hidden>
          <motion.span className="tl-line-fill" style={{ scaleY }} />
        </span>
        {events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}

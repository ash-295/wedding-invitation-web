'use client';

import { venues } from '@/lib/wedding';
import { ArrowIcon, PinIcon } from './Icons';
import Reveal, { SectionTitle } from './Reveal';

export default function Venues() {
  return (
    <section className="section venues" id="venues">
      <SectionTitle eyebrow="Where to find us" title="The Venues" />
      <div className="venue-grid">
        {venues.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.15} className="venue-card" amount={0.2}>
            <div className="venue-map">
              <iframe
                src={v.embed}
                title={`Map of ${v.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="venue-body">
              <p className="eyebrow">{v.label}</p>
              <h3 className="venue-name">{v.name}</h3>
              <p className="venue-address">
                <PinIcon />
                {v.address}
              </p>
              <a className="btn btn-solid" href={v.directions} target="_blank" rel="noopener noreferrer">
                Get directions <ArrowIcon />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

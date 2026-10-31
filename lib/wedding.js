// All invitation content lives here so it can be edited in one place.

export const WEDDING_DATE = '2027-01-19T15:00:00+05:30';

const directions = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const mapEmbed = (q) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

// start/end are UTC (IST - 5:30) in Google Calendar's compact format.
const calendar = ({ title, start, end, venue }) =>
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent(`${title} · Anchal & Rohan`)}` +
  `&dates=${start}/${end}` +
  `&location=${encodeURIComponent(venue)}` +
  `&details=${encodeURIComponent('With the blessings of Almighty God, we joyfully await your presence.')}`;

export const couple = {
  bride: {
    name: 'Anchal',
    role: 'The Bride',
    relation: 'Daughter of',
    parents: 'Mr. Shishir Kumar Jena & Mrs. Subhashree Jena',
  },
  groom: {
    name: 'Rohan',
    role: 'The Groom',
    relation: 'Son of',
    parents: 'Mr. Lawrence Mathew & Mrs. Manda Mathew',
  },
};

const CHURCH = 'United Church of Christ, Kamgar Nagar, Pimpri Colony, PCMC, Pune';
const CHURCH_QUERY = 'United Church of Christ, Kamgar Nagar, Pimpri Colony, Pune';
const BIRD_VALLEY = 'Bird Valley, MIDC, Chinchwad, PCMC';
const BIRD_VALLEY_QUERY = 'Bird Valley, MIDC, Chinchwad, Pune';

export const events = [
  {
    id: 'haldi',
    icon: 'haldi',
    title: 'Haldi Ceremony',
    weekday: 'Monday',
    day: 18,
    month: 'January 2027',
    time: '11:00 AM onwards',
    venue: BIRD_VALLEY,
    query: BIRD_VALLEY_QUERY,
    start: '20270118T053000Z',
    end: '20270118T083000Z',
  },
  {
    id: 'wedding',
    icon: 'church',
    title: 'Holy Matrimony',
    weekday: 'Tuesday',
    day: 19,
    month: 'January 2027',
    time: '3:00 PM onwards',
    venue: CHURCH,
    query: CHURCH_QUERY,
    start: '20270119T093000Z',
    end: '20270119T123000Z',
    featured: true,
  },
  {
    id: 'reception',
    icon: 'dinner',
    title: 'Reception & Dinner',
    weekday: 'Tuesday',
    day: 19,
    month: 'January 2027',
    time: '7:00 PM onwards',
    venue: BIRD_VALLEY,
    query: BIRD_VALLEY_QUERY,
    start: '20270119T133000Z',
    end: '20270119T173000Z',
  },
].map((e) => ({ ...e, directions: directions(e.query), calendar: calendar(e) }));

export const venues = [
  {
    id: 'church',
    label: 'Holy Matrimony',
    name: 'United Church of Christ',
    address: 'Kamgar Nagar, Pimpri Colony, PCMC, Pune',
    embed: mapEmbed(CHURCH_QUERY),
    directions: directions(CHURCH_QUERY),
  },
  {
    id: 'bird-valley',
    label: 'Haldi · Reception & Dinner',
    name: 'Bird Valley',
    address: 'MIDC, Chinchwad, PCMC, Pune',
    embed: mapEmbed(BIRD_VALLEY_QUERY),
    directions: directions(BIRD_VALLEY_QUERY),
  },
];

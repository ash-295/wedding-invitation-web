const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const CalendarIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const ChurchIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 1.8v4.4M10 3.8h4M5.5 21v-9.5L12 6.8l6.5 4.7V21M3 21h18M10 21v-3.2a2 2 0 0 1 4 0V21M12 10.5v2.5" />
  </svg>
);

export const HaldiIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.6" />
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <path key={a} transform={`rotate(${a} 12 12)`} d="M12 9.2c-1.6-1.4-1.8-4.2 0-6.2 1.8 2 1.6 4.8 0 6.2z" />
    ))}
  </svg>
);

export const DinnerIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5.5 3h5l-.4 5a2.1 2.1 0 0 1-4.2 0zM8 10.2V19M5.5 19.5h5M13.5 3h5l-.4 5a2.1 2.1 0 0 1-4.2 0zM16 10.2V19M13.5 19.5h5" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const eventIcons = { haldi: HaldiIcon, church: ChurchIcon, dinner: DinnerIcon };

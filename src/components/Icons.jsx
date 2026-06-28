const ip = {
  width: 24, height: 24, viewBox: '0 0 20 20',
  fill: 'none', stroke: 'currentColor', strokeWidth: 1.75,
  strokeLinecap: 'round', strokeLinejoin: 'round',
}

export function ContactIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <circle cx="10" cy="7" r="3.5"/>
      <path d="M3 18c0-3.87 3.13-7 7-7s7 3.13 7 7"/>
    </svg>
  )
}

export function AIProspectingIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <path d="M10 2l1.5 5 5 1.5-5 1.5L10 15l-1.5-5L3 8.5l5-1.5z"/>
      <path d="M16 1l.5 1.5 1.5.5-1.5.5L16 5l-.5-1.5-1.5-.5 1.5-.5z"/>
    </svg>
  )
}

export function TrophyIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <path d="M6 3h8v5a4 4 0 01-8 0V3z"/>
      <path d="M3 5h3M14 5h3"/>
      <path d="M3 5c0 3 2 4.5 3 5M17 5c0 3-2 4.5-3 5"/>
      <path d="M10 12v3M7 18h6"/>
      <line x1="7" y1="15" x2="13" y2="15"/>
    </svg>
  )
}

export function ActivityIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <rect x="3" y="4" width="14" height="14" rx="2"/>
      <path d="M13 2v4M7 2v4M3 9h14"/>
      <path d="M7 13l2 2 4-4"/>
    </svg>
  )
}

export function AIOutreachIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <path d="M18 2L3 9.5l6 2 2 6z"/>
      <line x1="9" y1="11.5" x2="18" y2="2"/>
    </svg>
  )
}

export function BellIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <path d="M10 2a6 6 0 016 6v4l2 3H2l2-3V8a6 6 0 016-6z"/>
      <path d="M8 17a2 2 0 004 0"/>
    </svg>
  )
}

export function CheckCircleIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <circle cx="10" cy="10" r="8"/>
      <path d="M6.5 10l2.5 2.5 4.5-5"/>
    </svg>
  )
}

export function ReportsIcon({ size = 24 }) {
  return (
    <svg {...ip} width={size} height={size}>
      <rect x="2.5" y="12" width="3.5" height="6" rx="1"/>
      <rect x="8.25" y="7" width="3.5" height="11" rx="1"/>
      <rect x="14" y="3" width="3.5" height="15" rx="1"/>
    </svg>
  )
}

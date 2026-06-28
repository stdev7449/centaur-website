export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="58" y1="57" x2="72" y2="42" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="58" y1="57" x2="34" y2="64" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="34" y1="64" x2="22" y2="46" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="22" y1="46" x2="32" y2="28" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="32" y1="28" x2="50" y2="17" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="50" y1="17" x2="72" y2="42" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="72" y1="42" x2="32" y2="28" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <line x1="58" y1="57" x2="74" y2="72" stroke="currentColor" strokeWidth="2.5" opacity="0.5"/>
      <circle cx="58" cy="57" r="8"   fill="currentColor"/>
      <circle cx="72" cy="42" r="5.5" fill="currentColor"/>
      <circle cx="50" cy="17" r="4"   fill="currentColor"/>
      <circle cx="32" cy="28" r="3.5" fill="currentColor"/>
      <circle cx="22" cy="46" r="3"   fill="currentColor"/>
      <circle cx="34" cy="64" r="3.5" fill="currentColor"/>
      <circle cx="74" cy="72" r="2.5" fill="currentColor"/>
    </svg>
  )
}

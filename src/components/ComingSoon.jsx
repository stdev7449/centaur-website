import Logo from './Logo'

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <div className="coming-soon-logo"><Logo size={88} /></div>
      <div className="coming-soon-word">CENTAUR <span>CRM</span></div>
      <p className="coming-soon-tagline">Coming Soon</p>
    </div>
  )
}

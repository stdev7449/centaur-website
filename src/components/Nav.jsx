import Logo from './Logo'

export default function Nav({ onJoinBeta, onHome, view }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <button className="nav-logo" onClick={onHome} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent)' }}>
          <Logo size={76} />
          <span className="nav-wordmark">CENTAUR <span className="nav-sub">CRM</span></span>
        </button>

        {view !== 'enquiry' && (
          <ul className="nav-links">
            <li><a href="#why-centaur">The Concept</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#screenshots">See it in action</a></li>
          </ul>
        )}

        <div className="nav-cta">
          <button className="btn btn-ghost" onClick={onHome} style={{ cursor: 'pointer' }}>Home</button>
          <button className="btn btn-primary" onClick={onJoinBeta} style={{ cursor: 'pointer' }}>Join the Beta</button>
        </div>
      </div>
    </nav>
  )
}

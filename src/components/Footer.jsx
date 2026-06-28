import Logo from './Logo'

export default function Footer({ onJoinBeta }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo" style={{ color: 'var(--accent)' }}>
          <Logo size={28} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: '.08em', color: 'var(--text-muted)' }}>
            CENTAUR CRM
          </span>
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            <li><button className="btn-ghost" onClick={onJoinBeta} style={{ background: 'none', border: 'none', padding: 0, fontSize: 13, color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>Join Beta</button></li>
            <li><button className="btn-ghost" onClick={onJoinBeta} style={{ background: 'none', border: 'none', padding: 0, fontSize: 13, color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit' }}>Contact</button></li>
          </ul>
          <span className="footer-copy">© {new Date().getFullYear()} Centaur CRM. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

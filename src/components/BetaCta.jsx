const PERKS = [
  'Early access — use it before anyone else',
  'Locked-in Beta pricing',
  'Direct input into the product roadmap',
  'One-on-one onboarding with the founder',
]

export default function BetaCta({ onJoinBeta }) {
  return (
    <section className="section beta-section">
      <div className="container">
        <div className="beta-badge">⚡ Beta program now open</div>

        <h2>Be part of building<br />the future of sales.</h2>

        <p>
          We're looking for experienced salespeople who've been let down by the tools available
          and want something built for them. Join the Beta and help shape what Centaur becomes.
        </p>

        <div className="beta-perks">
          {PERKS.map(p => (
            <div key={p} className="beta-perk">
              <div className="beta-perk-dot" />
              {p}
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary"
          onClick={onJoinBeta}
          style={{ cursor: 'pointer', padding: '16px 40px', fontSize: '17px' }}
        >
          Apply for Beta access →
        </button>

        <div className="beta-cta-note">No credit card required. Limited spots available.</div>
      </div>
    </section>
  )
}

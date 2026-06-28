const STEPS = [
  {
    num: '1',
    title: 'Apply for Beta',
    desc: 'Fill in a quick form. We\'ll be in touch within 24 hours to get you set up.',
  },
  {
    num: '2',
    title: 'Import your data',
    desc: 'CSV import or add manually. Your contacts and accounts are live in minutes — no implementation project required.',
  },
  {
    num: '3',
    title: 'Let AI go to work',
    desc: 'From day one, Centaur starts your daily briefings, surfaces warm leads, and has email drafts ready before you ask.',
  },
  {
    num: '4',
    title: 'Focus on selling',
    desc: 'Centaur handles the admin. You handle the conversations that win deals. That\'s the partnership.',
  },
]

export default function HowItWorks({ onJoinBeta }) {
  return (
    <section id="how-it-works" className="section how-section">
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-title">Up and running in minutes.<br />Not months.</h2>

        <div className="how-steps">
          {STEPS.map(s => (
            <div key={s.num} className="how-step">
              <div className="how-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="how-cta">
          <button className="btn btn-primary" onClick={onJoinBeta} style={{ cursor: 'pointer', padding: '15px 36px', fontSize: '16px' }}>
            Apply for Beta access →
          </button>
        </div>
      </div>
    </section>
  )
}

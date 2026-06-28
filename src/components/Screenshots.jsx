import { useState } from 'react'

const SHOTS = [
  {
    file: '/screenshots/dashboard.png',
    tab: 'Dashboard',
    title: 'Engine Room Dashboard',
    desc: 'Your full pipeline at a glance — value, win rate, stage funnel, and today\'s priorities surfaced by AI.',
  },
  {
    file: '/screenshots/pipeline.png',
    tab: 'Pipeline',
    title: 'Pipeline Board',
    desc: 'Kanban-style pipeline view grouped by stage. See deal value, days in stage, and next actions at a glance.',
  },
  {
    file: '/screenshots/accounts.png',
    tab: 'Accounts',
    title: 'Accounts & Contacts',
    desc: 'Full relationship graph linking contacts to accounts and deals. Track history, status, and next steps in one view.',
  },
  {
    file: '/screenshots/activities.png',
    tab: 'Activities',
    title: 'Activity Log',
    desc: 'Every call, email, and meeting tracked automatically. Log new ones in seconds without leaving the page.',
  },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const shot = SHOTS[active]

  return (
    <section id="screenshots" className="section screenshots">
      <div className="container">
        <div className="screenshots-intro">
          <div className="section-label">The product</div>
          <h2 className="section-title">Built to be used, not admired.</h2>
          <p className="section-sub">
            No bloated UI. No 40-tab settings page. Just the views your team actually opens every day.
          </p>
        </div>

        <div className="screenshots-tabs">
          {SHOTS.map((s, i) => (
            <button
              key={s.tab}
              className={`screenshot-tab${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className="screenshot-display">
          <img src={shot.file} alt={shot.title} />
          <div className="screenshot-caption">
            <strong>{shot.title}</strong>
            <span>{shot.desc}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

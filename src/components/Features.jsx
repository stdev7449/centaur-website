import { ActivityIcon, AIProspectingIcon, AIOutreachIcon, BellIcon, CheckCircleIcon, ReportsIcon } from './Icons'

const FEATURES = [
  {
    Icon: ActivityIcon,
    title: 'Zero admin overhead',
    desc: 'Log activity in seconds. Centaur fills in the gaps automatically. Stop spending half your day keeping records up to date.',
  },
  {
    Icon: AIProspectingIcon,
    title: 'AI that actively prospects',
    desc: 'Centaur doesn\'t wait for leads to appear. It analyses your accounts, surfaces warm opportunities, and builds your pipeline — even while you\'re in meetings.',
  },
  {
    Icon: AIOutreachIcon,
    title: 'One-click personalised emails',
    desc: 'Hit a button and get a fully personalised email drafted using everything Centaur knows about that contact, account, and deal. Edit and send in under a minute.',
  },
  {
    Icon: BellIcon,
    title: 'AI daily briefing',
    desc: 'Every morning, Centaur gives you a clear view of your pipeline health, overdue tasks, and where to focus — before you\'ve had your first coffee.',
  },
  {
    Icon: CheckCircleIcon,
    title: 'Up in minutes, not months',
    desc: 'No implementation project. No consultant. No three-week onboarding. Import your contacts, add your deals, and you\'re live. That\'s it.',
  },
  {
    Icon: ReportsIcon,
    title: 'Data you can actually trust',
    desc: 'Centaur prompts you to keep records current and fills in what it can automatically. No more stale pipelines or mystery deals that haven\'t moved in 90 days.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2 className="section-title">Built for the person<br />with quota on their head.</h2>
        <p className="section-sub">
          Not for the manager who wants a dashboard. Not for the CFO who wants a forecast.
          For the salesperson who needs to close deals and doesn't have time to waste.
        </p>

        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon"><f.Icon size={22} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

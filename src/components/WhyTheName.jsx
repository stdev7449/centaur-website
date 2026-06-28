import { ContactIcon, AIProspectingIcon, TrophyIcon } from './Icons'

export default function WhyTheName() {
  return (
    <section id="why-centaur" className="section why-section">
      <div className="container">
        <div className="why-inner">
          <div className="why-visual">
            <div className="why-card">
              <div className="why-card-icon"><ContactIcon size={22} /></div>
              <div>
                <div className="why-card-title">The Human Half</div>
                <div className="why-card-desc">
                  Relationship intelligence, empathy, strategic thinking, the read of a room.
                  Thirty years of knowing when to push and when to listen. The things no algorithm can replace.
                </div>
              </div>
            </div>

            <div className="why-connector">+</div>

            <div className="why-card">
              <div className="why-card-icon"><AIProspectingIcon size={22} /></div>
              <div>
                <div className="why-card-title">The Machine Half</div>
                <div className="why-card-desc">
                  Tireless admin, instant email drafts, pipeline analysis at 2am, lead prospecting
                  while you sleep. Capabilities no human can match alone.
                </div>
              </div>
            </div>

            <div className="why-connector">=</div>

            <div className="why-card" style={{ borderColor: 'rgba(232,77,28,.3)' }}>
              <div className="why-card-icon"><TrophyIcon size={22} /></div>
              <div>
                <div className="why-card-title">Something Better Than Either</div>
                <div className="why-card-desc">
                  A salesperson who never loses a lead, never forgets a follow-up, and always walks
                  into a meeting fully briefed — without spending half their day on data entry.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-label">Why Centaur?</div>
            <h2 className="section-title">The mythology fits.</h2>
            <div className="why-text">
              <div className="why-quote">
                "In Greek mythology, the centaur was the union of human wisdom and raw power —
                two forces that were greater together than either could ever be alone."
              </div>
              <p>
                That's the idea behind this CRM. <strong>Sales is fundamentally human.</strong> The
                relationships you build, the trust you earn, the judgment calls you make — those belong
                to you. No AI is taking that away.
              </p>
              <p>
                But the <strong>admin is killing you.</strong> Updating records, chasing follow-ups,
                searching your inbox for context before a call, trying to figure out which leads are
                worth your time this week. That's where the machine earns its place.
              </p>
              <p>
                Centaur CRM is built on a single belief: <strong>when humans and AI work as one
                unit</strong>, you get something neither can achieve on their own — a salesperson
                who's always on, always prepared, and always focused on the conversations that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

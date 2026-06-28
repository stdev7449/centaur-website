const NAV_ITEMS = ['Dashboard', 'Contacts', 'Accounts', 'Pipeline', 'Activities', 'AI Assistant']
const BAR_HEIGHTS = [38, 62, 88, 52, 72, 108, 92, 128]

export default function Hero({ onJoinBeta }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          <span>✦</span> Now accepting Beta applications
        </div>

        <h1>Half Human.<br />Half Machine.<br />One CRM.</h1>

        <p className="hero-sub">
          Built by a salesperson with 30 years in the field. Centaur CRM handles the admin,
          actively hunts for leads, and keeps your pipeline moving — so you can focus on
          what only humans can do: build relationships and close deals.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onJoinBeta} style={{ cursor: 'pointer' }}>
            Apply for Beta access →
          </button>
          <a href="#screenshots" className="btn btn-ghost">See it in action</a>
        </div>

        <div className="hero-stat-row">
          <div className="hero-stat">
            <div className="hero-stat-num">30<span>+</span></div>
            <div className="hero-stat-label">Years in sales</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num"><span>~</span>80<span>%</span></div>
            <div className="hero-stat-label">Less admin time</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num"><span>&lt;</span>5<span>min</span></div>
            <div className="hero-stat-label">To get started</div>
          </div>
        </div>

        <div className="hero-preview-wrap">
          <AppMockup />
        </div>
      </div>
    </section>
  )
}

function AppMockup() {
  return (
    <div className="app-mock">
      <div className="mock-titlebar">
        <div className="mock-dot" />
        <div className="mock-dot" />
        <div className="mock-dot" />
        <div className="mock-url">centaurcrm.com — Dashboard</div>
      </div>
      <div className="mock-body">
        <div className="mock-sidebar">
          {NAV_ITEMS.map((item, i) => (
            <div key={item} className={`mock-nav-item${i === 0 ? ' active' : ''}`}>
              <div className="mock-icon" />
              {item}
            </div>
          ))}
        </div>
        <div className="mock-main">
          <div className="mock-header">Good morning — here's your pipeline</div>
          <div className="mock-kpis">
            <KPI label="Pipeline value" value="£284k" accent />
            <KPI label="Open deals" value="37" />
            <KPI label="Won this month" value="£41k" accent />
            <KPI label="Due today" value="12" />
          </div>
          <div className="mock-charts">
            <div className="mock-chart-box">
              <div className="mock-chart-title">Pipeline by stage</div>
              <div className="mock-bars">
                {BAR_HEIGHTS.map((h, i) => (
                  <div key={i} className={`mock-bar${h > 100 ? ' hi' : ''}`} style={{ height: h }} />
                ))}
              </div>
            </div>
            <div className="mock-chart-box">
              <div className="mock-chart-title">Recent contacts</div>
              <div className="mock-contacts">
                {['Sarah M.', 'James K.', 'Priya L.', 'Tom W.'].map(name => (
                  <div key={name} className="mock-contact-row">
                    <div className="mock-avatar" />
                    <div className="mock-line-sm" />
                    <div className="mock-pill">Active</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KPI({ label, value, accent }) {
  return (
    <div className="mock-kpi">
      <div className="mock-kpi-label">{label}</div>
      <div className={`mock-kpi-val${accent ? ' accent' : ''}`}>{value}</div>
    </div>
  )
}

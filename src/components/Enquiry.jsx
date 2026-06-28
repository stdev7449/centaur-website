import { useState } from 'react'

const CRM_LEADS_URL = 'https://app.centaurcrm.com/api/leads/submit'

const BENEFITS = [
  {
    title: 'Early access',
    desc: 'Get Centaur CRM before it\'s publicly available.',
  },
  {
    title: 'Locked-in Beta pricing',
    desc: 'Your rate stays fixed — even as we grow.',
  },
  {
    title: 'Shape the product',
    desc: 'Direct line to the founder. Your feedback drives what gets built next.',
  },
  {
    title: 'One-on-one onboarding',
    desc: 'We\'ll set you up personally — not a generic tutorial.',
  },
]

export default function Enquiry({ onBack }) {
  const [form, setForm]       = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | submitting | success | error
  const [errMsg, setErrMsg]   = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrMsg('')
    try {
      const res = await fetch(CRM_LEADS_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, source: 'web-trial' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
    } catch (err) {
      setErrMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="section enquiry-page">
      <div className="container">
        <button className="enquiry-back" onClick={onBack}>
          ← Back to home
        </button>

        <div className="enquiry-inner">
          <div className="enquiry-pitch">
            <div className="section-label">Beta program</div>
            <h1>Join the Centaur CRM Beta</h1>
            <p>
              We're looking for experienced salespeople who want a CRM that actually
              works for them — not just for their manager. Limited spots available.
            </p>

            <div className="enquiry-benefits">
              {BENEFITS.map(b => (
                <div key={b.title} className="enquiry-benefit">
                  <div className="enquiry-benefit-dot" />
                  <div className="enquiry-benefit-text">
                    <strong>{b.title}</strong>
                    <span>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="enquiry-form-wrap">
            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>You're on the list!</h3>
                <p>
                  Thanks for applying. We'll be in touch within 24 hours to get you set up.
                  Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2>Apply for Beta access</h2>

                {status === 'error' && (
                  <div className="form-error">{errMsg}</div>
                )}

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First name *</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="Sarah"
                      value={form.firstName}
                      onChange={e => set('firstName', e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Mitchell"
                      value={form.lastName}
                      onChange={e => set('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Work email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+44 7700 900000"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Ltd"
                      value={form.company}
                      onChange={e => set('company', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us about your sales role</label>
                  <textarea
                    id="message"
                    placeholder="What do you sell, how big is your team, and what's your biggest CRM frustration right now?"
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                  />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Apply for Beta access →'}
                  </button>
                </div>

                <div className="form-note">
                  No credit card required. We'll be in touch within 24 hours.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

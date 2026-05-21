// Contact / Get Started

const CONTACT_FORMSPREE = 'https://formspree.io/f/xredqypy';
const CREATOR_AIRTABLE_URL = 'https://airtable.com/appAiXhXWH4MLG61p/pagWpIdISrkgDqeUY/form';
const MANAGER_TALLY_URL = 'https://tally.so/r/5Bpjdo';

function ContactPage() {
  const [tab, setTab] = React.useState('brand');
  const [scope, setScope] = React.useState([]);
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error

  const fieldStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid var(--line)', padding: '14px 0',
    fontSize: 16, fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none',
  };
  const label = { fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 8, display: 'block' };

  const toggleScope = (s) => {
    setScope(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  // Reset state when switching tabs
  React.useEffect(() => {
    setStatus('idle');
    setScope([]);
  }, [tab]);

  const subjectByTab = {
    brand: 'New brand / agency inquiry',
    press: 'New press inquiry',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    if (scope.length) formData.set('scope', scope.join(', '));
    formData.set('_subject', subjectByTab[tab] || 'New website inquiry');
    formData.set('form_type', tab);
    try {
      const res = await fetch(CONTACT_FORMSPREE, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (res.ok) setStatus('sent');
      else setStatus('error');
    } catch (_err) {
      setStatus('error');
    }
  }

  return (
    <div>
      <Nav />
      <main>
        <section style={{ padding: '140px var(--gutter) 40px', borderBottom: '1px solid var(--line)' }}>
          <div className="index-label" style={{ marginBottom: 40 }}>
            <span className="num">i.</span><span>Get in Touch</span>
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(72px, 13vw, 240px)', lineHeight: 0.85, letterSpacing: '-0.03em' }}>
            Let's <em>talk</em>.
          </h1>
          <p className="body-lg" style={{ fontSize: 19, marginTop: 32, maxWidth: '60ch' }}>
            We respond to every inquiry within 48 hours. Tell us what you're working on, how far along you are, and what we can do to help.
          </p>
        </section>

        <section style={{ padding: 'var(--section) var(--gutter)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            {/* Left — switcher + office info */}
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="small-caps" style={{ marginBottom: 16, color: 'var(--ink-soft)' }}>I am a...</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--ink)', marginBottom: 48 }}>
                {[
                  { k: 'brand', label: 'Brand or agency' },
                  { k: 'creator', label: 'Creator / talent' },
                  { k: 'manager', label: 'Manager — join the team' },
                  { k: 'press', label: 'Press / media' },
                ].map(t => (
                  <button key={t.k} onClick={() => setTab(t.k)} style={{
                    textAlign: 'left', padding: '18px 0',
                    borderBottom: '1px solid var(--line)',
                    fontFamily: 'var(--display)', fontSize: 26, letterSpacing: '-0.01em',
                    fontStyle: tab === t.k ? 'italic' : 'normal',
                    color: tab === t.k ? 'var(--crimson)' : 'var(--ink)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'all 0.25s',
                  }}>
                    <span>{t.label}</span>
                    <span style={{ fontSize: 16, opacity: tab === t.k ? 1 : 0.4 }}>{tab === t.k ? '●' : '○'}</span>
                  </button>
                ))}
              </div>

              <div className="small-caps" style={{ marginBottom: 16, color: 'var(--ink-soft)' }}>Or write directly</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  ['Brand Partnerships', 'partnerships@collegaretalentmanagement.com'],
                  ['Talent Inquiries', 'talent@collegaretalentmanagement.com'],
                  ['Press', 'press@collegaretalentmanagement.com'],
                  ['General', 'contact@collegaretalentmanagement.com'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 2 }}>{k}</div>
                    <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, color: 'var(--crimson)' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form / CTA */}
            <div>
              {status === 'sent' ? (
                <div style={{ padding: '60px 0' }}>
                  <div className="index-label" style={{ marginBottom: 24 }}><span className="num">✓</span><span>Received</span></div>
                  <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 24 }}>
                    Thank you<em style={{ color: 'var(--crimson)' }}>.</em>
                  </h2>
                  <p className="body-lg" style={{ fontSize: 18 }}>
                    We've received your note. Someone from the team will be in touch within 48 hours.
                  </p>
                  <a href="index.html" className="btn btn--ghost" style={{ marginTop: 32 }}>Back to home</a>
                </div>
              ) : tab === 'creator' ? (
                <ApplyCTA
                  eyebrow="Apply to the roster"
                  headline={<>Tell us about your <em>work</em>.</>}
                  copy="Our roster applications live in a dedicated form so we can capture the right details about your work, platforms, and following. It takes about three minutes — and we read every submission."
                  ctaLabel="Open the application"
                  ctaHref={CREATOR_AIRTABLE_URL}
                  secondaryHref="for-creators.html"
                  secondaryLabel="Read the pitch first"
                  footnote="We review within two weeks. No follower minimums, no tiers — taste is the filter."
                />
              ) : tab === 'manager' ? (
                <ApplyCTA
                  eyebrow="Apply to join the team"
                  headline={<>Two questions, <em>one note</em>.</>}
                  copy="Manager applications go through our dedicated hiring form. A founding partner reads every submission personally — no recruiter, no junior, no template response."
                  ctaLabel="Open the application"
                  ctaHref={MANAGER_TALLY_URL}
                  secondaryHref="managers.html"
                  secondaryLabel="Read the manager pitch"
                  footnote="Five business days. Read personally, every time."
                />
              ) : (
                <form onSubmit={handleSubmit}>
                  {tab === 'brand' && (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div><label style={label}>Your Name</label><input style={fieldStyle} name="name" required/></div>
                        <div><label style={label}>Company</label><input style={fieldStyle} name="company" required/></div>
                        <div><label style={label}>Email</label><input style={fieldStyle} name="email" type="email" required/></div>
                        <div><label style={label}>Role</label><input style={fieldStyle} name="role" placeholder="Brand Manager, CMO..."/></div>
                      </div>

                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>Scope of work (select any)</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                          {['Creator Campaign', 'Product Launch', 'Event / Activation', 'Organic Seeding', 'UGC / Paid Creative', 'Strategy & Insights'].map(s => (
                            <button type="button" key={s} onClick={() => toggleScope(s)} style={{
                              padding: '8px 14px', fontSize: 12, letterSpacing: '0.05em',
                              border: '1px solid ' + (scope.includes(s) ? 'var(--crimson)' : 'var(--line)'),
                              background: scope.includes(s) ? 'var(--crimson)' : 'transparent',
                              color: scope.includes(s) ? 'var(--cream)' : 'var(--ink)',
                              borderRadius: 999, transition: 'all 0.2s',
                            }}>{s}</button>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div>
                          <label style={label}>Budget Range</label>
                          <select style={fieldStyle} name="budget" defaultValue="$10–25K">
                            {['Under $10K', '$10–25K', '$25–75K', '$75–200K', '$200K+', "Let's discuss"].map(b => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={label}>Timeline</label>
                          <select style={fieldStyle} name="timeline" defaultValue="Next 30 days">
                            {['Next 30 days', 'Next quarter', 'Next 6 months', 'Exploring'].map(b => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>

                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>The Brief</label>
                        <textarea name="brief" style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}
                          placeholder="What are you working on? What does success look like?"/>
                      </div>
                    </>
                  )}

                  {tab === 'press' && (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div><label style={label}>Name</label><input style={fieldStyle} name="name" required/></div>
                        <div><label style={label}>Publication</label><input style={fieldStyle} name="publication" required/></div>
                        <div><label style={label}>Email</label><input style={fieldStyle} name="email" type="email" required/></div>
                        <div><label style={label}>Deadline</label><input style={fieldStyle} name="deadline"/></div>
                      </div>
                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>Inquiry</label>
                        <textarea name="inquiry" style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}/>
                      </div>
                    </>
                  )}

                  {status === 'error' && (
                    <div style={{ padding: 16, marginBottom: 24, background: 'rgba(139,13,0,0.06)', borderLeft: '3px solid var(--crimson)', fontSize: 14, color: 'var(--ink)' }}>
                      Something went wrong sending your note. Try again, or email us directly at <a href="mailto:contact@collegaretalentmanagement.com" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>contact@collegaretalentmanagement.com</a>.
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>We respond within 48 hours, always.</div>
                    <button type="submit" disabled={status === 'sending'} className="btn btn--primary" style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}>
                      {status === 'sending' ? 'Sending...' : <>Send <span className="arrow">→</span></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <ByCreatorsMarquee />
      <Footer />
    </div>
  );
}

function ApplyCTA({ eyebrow, headline, copy, ctaLabel, ctaHref, secondaryHref, secondaryLabel, footnote }) {
  return (
    <div style={{ padding: '20px 0 40px' }}>
      <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 20 }}>{eyebrow}</div>
      <h2 className="display" style={{ fontSize: 'clamp(40px, 6vw, 84px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 24 }}>
        {headline}
      </h2>
      <p className="body-lg" style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: '52ch', marginBottom: 40 }}>
        {copy}
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
          {ctaLabel} <span className="arrow">→</span>
        </a>
        {secondaryHref && (
          <a href={secondaryHref} className="btn btn--ghost">
            {secondaryLabel} <span className="arrow">→</span>
          </a>
        )}
      </div>
      <div style={{ paddingTop: 24, borderTop: '1px solid var(--line)', fontSize: 12, color: 'var(--ink-soft)' }}>
        {footnote}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactPage />);

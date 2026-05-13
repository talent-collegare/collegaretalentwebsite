// Contact / Get Started

function ContactPage() {
  const [tab, setTab] = React.useState('brand');
  const [form, setForm] = React.useState({ name: '', company: '', email: '', budget: '10-25K', timeline: 'Next 30 days', scope: [], note: '' });
  const [sent, setSent] = React.useState(false);

  const fieldStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid var(--line)', padding: '14px 0',
    fontSize: 16, fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none',
  };
  const label = { fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 8, display: 'block' };

  const toggleScope = (s) => {
    setForm(f => ({ ...f, scope: f.scope.includes(s) ? f.scope.filter(x => x !== s) : [...f.scope, s] }));
  };

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

            {/* Right — form */}
            <div>
              {sent ? (
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
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                  {tab === 'brand' && (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div><label style={label}>Your Name</label><input style={fieldStyle} required/></div>
                        <div><label style={label}>Company</label><input style={fieldStyle} required/></div>
                        <div><label style={label}>Email</label><input style={fieldStyle} type="email" required/></div>
                        <div><label style={label}>Role</label><input style={fieldStyle} placeholder="Brand Manager, CMO..."/></div>
                      </div>

                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>Scope of work (select any)</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                          {['Creator Campaign', 'Product Launch', 'Event / Activation', 'Organic Seeding', 'UGC / Paid Creative', 'Strategy & Insights'].map(s => (
                            <button type="button" key={s} onClick={() => toggleScope(s)} style={{
                              padding: '8px 14px', fontSize: 12, letterSpacing: '0.05em',
                              border: '1px solid ' + (form.scope.includes(s) ? 'var(--crimson)' : 'var(--line)'),
                              background: form.scope.includes(s) ? 'var(--crimson)' : 'transparent',
                              color: form.scope.includes(s) ? 'var(--cream)' : 'var(--ink)',
                              borderRadius: 999, transition: 'all 0.2s',
                            }}>{s}</button>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div>
                          <label style={label}>Budget Range</label>
                          <select style={fieldStyle} value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                            {['Under $10K', '$10–25K', '$25–75K', '$75–200K', '$200K+', "Let's discuss"].map(b => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={label}>Timeline</label>
                          <select style={fieldStyle} value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })}>
                            {['Next 30 days', 'Next quarter', 'Next 6 months', 'Exploring'].map(b => <option key={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>

                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>The Brief</label>
                        <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}
                          placeholder="What are you working on? What does success look like?"/>
                      </div>
                    </>
                  )}

                  {tab === 'creator' && (
                    <>
                      <div style={{ padding: 24, background: 'var(--cream-warm)', borderLeft: '3px solid var(--crimson)', marginBottom: 40 }}>
                        <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, marginBottom: 6 }}>A note on roster applications</div>
                        <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
                          For management representation, please use our dedicated application — <a href="for-creators.html#apply" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>apply here</a>.
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div><label style={label}>Name</label><input style={fieldStyle} required/></div>
                        <div><label style={label}>Handle</label><input style={fieldStyle} placeholder="@" required/></div>
                        <div><label style={label}>Email</label><input style={fieldStyle} type="email" required/></div>
                        <div><label style={label}>Category</label><input style={fieldStyle} placeholder="Fashion, Beauty, etc."/></div>
                      </div>
                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>Your Note</label>
                        <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}/>
                      </div>
                    </>
                  )}

                  {tab === 'manager' && (
                    <>
                      <div style={{ padding: 24, background: 'var(--cream-warm)', borderLeft: '3px solid var(--crimson)', marginBottom: 40 }}>
                        <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, marginBottom: 6 }}>Joining the house</div>
                        <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
                          For the full manager partnership pitch and application — <a href="managers.html" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>read this first</a>.
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div><label style={label}>Name</label><input style={fieldStyle} required/></div>
                        <div><label style={label}>Email</label><input style={fieldStyle} type="email" required/></div>
                        <div><label style={label}>City</label><input style={fieldStyle} placeholder="TX, NY, LA..."/></div>
                        <div><label style={label}>Roster Size</label><input style={fieldStyle} placeholder="e.g. 6 creators"/></div>
                      </div>
                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>A Note — why Collegare?</label>
                        <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}/>
                      </div>
                    </>
                  )}

                  {tab === 'press' && (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 40 }}>
                        <div><label style={label}>Name</label><input style={fieldStyle} required/></div>
                        <div><label style={label}>Publication</label><input style={fieldStyle} required/></div>
                        <div><label style={label}>Email</label><input style={fieldStyle} type="email" required/></div>
                        <div><label style={label}>Deadline</label><input style={fieldStyle}/></div>
                      </div>
                      <div style={{ marginBottom: 40 }}>
                        <label style={label}>Inquiry</label>
                        <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}/>
                      </div>
                    </>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>We respond within 48 hours, always.</div>
                    <button type="submit" className="btn btn--primary">Send <span className="arrow">→</span></button>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactPage />);

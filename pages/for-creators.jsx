// For Creators — pitch for talent to sign / apply

function CreatorsHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 0', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">i.</span><span>For Creators</span>
      </div>
      <h1 className="display" style={{ fontSize: 'clamp(64px, 12vw, 200px)', lineHeight: 0.88, letterSpacing: '-0.03em', marginBottom: 48 }}>
        Built for <em>careers</em>.<br/>Not <em style={{ color: 'var(--crimson)' }}>campaigns</em>.
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 40, alignItems: 'end', paddingTop: 40, borderTop: '1px solid var(--line-soft)', marginBottom: 60 }}>
        <p className="body-lg" style={{ fontSize: 19 }}>
          We represent 80+ creators across fashion, beauty, culture, food, and lifestyle — and we have secured over $42M
          in earned media for them. Full-service management: deals, contracts, creative direction, brand development,
          and the long view. No follower minimums. No tier structure. Taste is the filter.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#apply" className="btn btn--primary">Apply to the Roster <span className="arrow">→</span></a>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)', letterSpacing: '0.02em', lineHeight: 1.7 }}>
          <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 6 }}>In this section</div>
          01. What we do<br/>
          02. What we don't<br/>
          03. How to apply
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
        <img src={talentAt(0)} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        <img src={talentAt(1)} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        <img src={talentAt(2)} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        <img src={talentAt(3)} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const items = [
    { t: 'Brand Deals & Negotiation', d: "Inbound and proactive outreach. We hold the line on rates, exclusivity, usage, and creative control — every time." },
    { t: 'Creative Direction', d: "A producer, a sounding board, a second set of eyes. We help shape the content when you want the help, stay out of the way when you don't." },
    { t: 'Long-Term Strategy', d: "Where your career is in five years, what you need to build now to get there, and which offers to say no to." },
    { t: 'Brand & IP Development', d: "Products, capsules, books, podcasts, companies. When you're ready to build something that outlives the feed." },
    { t: 'Team Building', d: "Editors, managers, agents, lawyers, accountants. We help you assemble the team around your career." },
    { t: 'Business Development', d: "Investor intros, board seats, partnership structures. Advice from operators who've done this at scale." },
  ];
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">ii.</span><span>What We Do</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)' }}>
        {items.map((it, i) => (
          <div key={it.t} style={{ background: 'var(--cream)', padding: 40, minHeight: 280 }}>
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 36, color: 'var(--crimson)', marginBottom: 24, lineHeight: 1 }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="display" style={{ fontSize: 26, letterSpacing: '-0.01em', marginBottom: 16 }}>{it.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatWeDont() {
  const items = [
    "Chase volume over fit — we'd rather do five great campaigns than fifty forgettable ones.",
    "Take creators we don't personally want to work with. Taste is the filter.",
    "Sign creators to eternal contracts. Clear terms, mutual exits.",
    "Disappear after the deal closes. We're in the group chat.",
    "Work with brands that don't respect the creator. Every time.",
    "Chase trends. Build careers that outlast them.",
  ];
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40, color: 'rgba(254,252,240,0.7)' }}>
        <span className="num" style={{ color: 'var(--cream-warm)' }}>iii.</span><span>What We Don't</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(56px, 10vw, 160px)', letterSpacing: '-0.025em', lineHeight: 0.88, marginBottom: 60 }}>
        Just as <em style={{ color: 'var(--cream-warm)' }}>important</em>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px', borderTop: '1px solid rgba(254,252,240,0.25)' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: '28px 0',
            borderBottom: '1px solid rgba(254,252,240,0.15)',
            display: 'flex', gap: 20,
            fontFamily: 'var(--display)', fontSize: 22, lineHeight: 1.35, letterSpacing: '-0.005em',
          }}>
            <span style={{ fontStyle: 'italic', color: 'var(--cream-warm)', opacity: 0.7, minWidth: 40 }}>—</span>
            <span>{it}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Apply() {
  const [form, setForm] = React.useState({ name: '', handle: '', category: 'Fashion', platform: 'Instagram', followers: '', note: '' });
  const [sent, setSent] = React.useState(false);

  const fieldStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--line)',
    padding: '14px 0',
    fontSize: 16,
    fontFamily: 'var(--body)',
    color: 'var(--ink)',
    outline: 'none',
  };
  const labelStyle = { fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 8, display: 'block' };

  if (sent) {
    return (
      <section id="apply" style={{ padding: 'var(--section) var(--gutter)', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.02em', marginBottom: 24 }}>
            Thank you<em style={{ color: 'var(--crimson)' }}>.</em>
          </h2>
          <p className="body-lg" style={{ margin: '0 auto', fontSize: 18 }}>
            Your application is in. If there's a fit, you'll hear from someone on our team within two weeks.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">iv.</span><span>Apply</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 6vw, 88px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 32 }}>
            Tell us about your <em>work</em>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 360 }}>
            A small form. No tiers, no follower minimums. We review every submission, and we read every note.
          </p>
        </div>
        <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px' }}>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input style={fieldStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required/>
            </div>
            <div>
              <label style={labelStyle}>Primary Handle</label>
              <input style={fieldStyle} value={form.handle} onChange={e => setForm({ ...form, handle: e.target.value })} placeholder="@" required/>
            </div>
            <div>
              <label style={labelStyle}>Category</label>
              <select style={fieldStyle} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                {['Fashion', 'Beauty', 'Culture', 'Food', 'Lifestyle', 'Travel', 'Wellness', 'Design', 'Music', 'Other'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Primary Platform</label>
              <select style={fieldStyle} value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })}>
                {['Instagram', 'TikTok', 'YouTube', 'Substack', 'Other'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Following (approx.)</label>
              <input style={fieldStyle} value={form.followers} onChange={e => setForm({ ...form, followers: e.target.value })} placeholder="e.g. 240K"/>
            </div>
            <div>
              <label style={labelStyle}>Current Management?</label>
              <input style={fieldStyle} placeholder="Agency name, or none"/>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>A Note — why Collegare?</label>
              <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 110, lineHeight: 1.5 }}
                value={form.note} onChange={e => setForm({ ...form, note: e.target.value })}/>
            </div>
          </div>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>We review within two weeks. Not every creator is a fit — we're honest either way.</div>
            <button type="submit" className="btn btn--primary">Submit Application <span className="arrow">→</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ForCreators() {
  return (
    <div>
      <Nav current="For Creators" />
      <main>
        <CreatorsHero />
        <WhatWeDo />
        <WhatWeDont />
        <Apply />
      </main>
      <SelectedWorkCarousel eyebrowNum="iv" headline="Campaigns in motion." />
      <ByCreatorsMarquee />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ForCreators />);

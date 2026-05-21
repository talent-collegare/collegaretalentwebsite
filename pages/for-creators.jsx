// For Creators — pitch for talent to sign / apply

const CREATOR_AIRTABLE_URL = 'https://airtable.com/appAiXhXWH4MLG61p/pagWpIdISrkgDqeUY/form';

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
          We represent creators across fashion, beauty, culture, food, and lifestyle — and we build the careers,
          earned media, and brand partnerships behind them. Full-service management: deals, contracts, creative direction,
          brand development, and the long view. No follower minimums. No tier structure. Taste is the filter.
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
        <img loading="lazy" src={talentAt(0)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        <img loading="lazy" src={talentAt(1)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        <img loading="lazy" src={talentAt(2)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        <img loading="lazy" src={talentAt(3)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
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
  const steps = [
    { n: '01', t: 'Open the application', d: "It's hosted on Airtable, takes about three minutes — name, handles, category, following, and a short note." },
    { n: '02', t: 'We review every submission', d: "Personally. No automated screening, no follower thresholds. We read your note before we look at your numbers." },
    { n: '03', t: 'You hear back in two weeks', d: "If there's a fit, we'll be in touch to start a conversation. If not, we tell you — honestly, with care." },
  ];

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
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 360, marginBottom: 32 }}>
            No tiers, no follower minimums. We review every submission, and we read every note.
          </p>
          <a href={CREATOR_AIRTABLE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Start the application <span className="arrow">→</span>
          </a>
        </div>

        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {steps.map(s => (
            <div key={s.n} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32,
              padding: '36px 0', borderBottom: '1px solid var(--line)', alignItems: 'start',
            }}>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 36, color: 'var(--crimson)', lineHeight: 1 }}>{s.n}</div>
              <div>
                <h3 className="display" style={{ fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '54ch' }}>{s.d}</p>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 40, padding: 32, background: 'var(--cream-warm)', borderLeft: '3px solid var(--crimson)' }}>
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, marginBottom: 12, lineHeight: 1.2 }}>
              Already in conversation with us?
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Skip the form — reply to the email thread you're already on, or write directly to{' '}
              <a href="mailto:talent@collegaretalentmanagement.com" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>
                talent@collegaretalentmanagement.com
              </a>.
            </p>
          </div>
        </div>
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
      <SelectedWorkCarousel eyebrowNum="v" headline="Campaigns in motion." />
      <ByCreatorsMarquee />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ForCreators />);

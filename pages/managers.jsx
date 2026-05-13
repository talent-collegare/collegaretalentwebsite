// Managers — recruitment / partnership page for talent managers wanting to join Collegare

function MapMark() {
  // Stylized dotted world map — matches the editorial / cream + crimson palette
  // Pure SVG so it's tasteful and lightweight; no stock imagery needed.
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <svg viewBox="0 0 800 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B0D00" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#8B0D00" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Dot grid forming a stylized world map silhouette */}
        <g fill="#0F0A07" opacity="0.18">
          {(() => {
            const dots = [];
            // Rough continent silhouettes via grid sampling
            const inLand = (x, y) => {
              // North America
              if (x >= 60 && x <= 230 && y >= 70 && y <= 200 && (x - 145) ** 2 / 8000 + (y - 130) ** 2 / 4000 < 1) return true;
              // South America
              if (x >= 180 && x <= 260 && y >= 180 && y <= 320 && (x - 215) ** 2 / 2200 + (y - 250) ** 2 / 5500 < 1) return true;
              // Europe
              if (x >= 360 && x <= 440 && y >= 90 && y <= 150) return true;
              // Africa
              if (x >= 380 && x <= 480 && y >= 150 && y <= 290 && (x - 430) ** 2 / 2800 + (y - 220) ** 2 / 6000 < 1) return true;
              // Asia
              if (x >= 460 && x <= 650 && y >= 90 && y <= 200 && (x - 555) ** 2 / 12000 + (y - 140) ** 2 / 3500 < 1) return true;
              // SE Asia / Indonesia
              if (x >= 600 && x <= 700 && y >= 200 && y <= 240) return true;
              // Australia
              if (x >= 630 && x <= 730 && y >= 240 && y <= 290) return true;
              return false;
            };
            for (let y = 50; y < 320; y += 8) {
              for (let x = 30; x < 760; x += 8) {
                if (inLand(x, y)) {
                  dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" />);
                }
              }
            }
            return dots;
          })()}
        </g>

        {/* Our markers — TX, NY, LA */}
        {[
          { x: 165, y: 140, label: 'New York' },
          { x: 132, y: 152, label: 'Texas' },
          { x: 92,  y: 142, label: 'Los Angeles' },
          { x: 545, y: 180, label: 'Remote — anywhere' },
        ].map((p, i) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="22" fill="url(#cityGlow)" />
            <circle cx={p.x} cy={p.y} r="4" fill="#8B0D00" />
            <line x1={p.x} y1={p.y - 4} x2={p.x} y2={p.y - 24} stroke="#8B0D00" strokeWidth="0.6" opacity="0.4" />
            <text x={p.x} y={p.y - 28} textAnchor="middle" fontSize="9" fontFamily="Be Vietnam Pro, sans-serif" letterSpacing="1.5" fill="#0F0A07" fontWeight="500">
              {p.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Subtle connecting arcs from US to "anywhere" */}
        {[[92, 142], [132, 152], [165, 140]].map(([sx, sy], i) => (
          <path key={i}
            d={`M ${sx} ${sy} Q ${(sx + 545) / 2} ${Math.min(sy, 180) - 60}, 545 180`}
            stroke="#8B0D00" strokeWidth="0.8" fill="none" opacity="0.35" strokeDasharray="2 4" />
        ))}
      </svg>
    </div>
  );
}

function ManagersHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 0', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">i.</span><span>For Managers</span>
      </div>
      <h1 className="display" style={{ fontSize: 'clamp(64px, 11vw, 180px)', lineHeight: 0.88, letterSpacing: '-0.03em', marginBottom: 48 }}>
        Build a career as a <em style={{ color: 'var(--crimson)' }}>talent manager</em>.<br/>From anywhere.
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end', paddingTop: 40, borderTop: '1px solid var(--line-soft)', marginBottom: 60 }}>
        <p className="body-lg" style={{ fontSize: 19 }}>
          Collegare is a rising creator-first talent management agency, and we're looking for proactive, problem-solving managers
          to grow with us. Whether you're experienced or new to the industry, we train, support, and pay you to do work
          that matters — from wherever you are in the world.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#apply" className="btn btn--primary">Apply to Join <span className="arrow">→</span></a>
          <a href="careers.html" className="btn btn--ghost">Explore Open Jobs <span className="arrow">→</span></a>
        </div>
      </div>

      {/* Map mark — replaces heavy photo strip */}
      <div style={{ marginBottom: 24 }}>
        <MapMark />
      </div>

      {/* Three core benefits — surfaced inline under the map */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0, borderTop: '1px solid var(--line)',
      }}>
        {[
          { t: 'Fully Remote', d: 'Work from anywhere. We hire on roster fit and drive, not zip code.' },
          { t: 'Flexible Hours', d: "Choose your schedule. We care that the work gets done — not when you're at a desk." },
          { t: 'Uncapped Earning', d: 'No base, no salary cap — commission-driven economics where your effort sets your income.' },
        ].map((b, i) => (
          <div key={b.t} style={{
            padding: '32px 32px 32px 0',
            borderRight: i < 2 ? '1px solid var(--line)' : 'none',
            paddingLeft: i > 0 ? 32 : 0,
          }}>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 12 }}>0{i + 1}</div>
            <h3 className="display" style={{ fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.05, marginBottom: 10 }}>{b.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{b.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { n: '01', t: 'A rising agency', d: "We're young, fast-moving, and on the way up. The work you do here will shape what this house becomes — and your seat will grow with it." },
    { n: '02', t: 'We train, regardless', d: "Experience helps, but it isn't the gate. If you're proactive, sharp, and ready to learn, we'll teach you the deals desk, contracts, rates, and creative direction." },
    { n: '03', t: 'Your roster, your relationships', d: "Bring your creators with you. You stay the primary point of contact for every artist on your book — we never replace the manager–talent bond." },
    { n: '04', t: 'Problem-solvers welcome', d: "We're looking for managers who think like operators — people who notice the unsolved thing in the room and pick it up before being asked." },
    { n: '05', t: 'Real infrastructure', d: "An active deals desk, contract templates, legal, finance, events, and creative direction. The boring parts are handled so the work can be the work." },
    { n: '06', t: 'Built for the long run', d: "Transparent splits, a real path to senior partnership, and a leadership team that wants to stay small — so individual roles compound." },
  ];
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">ii.</span><span>Why Collegare</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.015em' }}>
            What we <em style={{ color: 'var(--crimson)' }}>offer</em>.
          </h2>
        </div>
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {items.map(c => (
            <div key={c.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 2fr', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 28, color: 'var(--crimson)' }}>{c.n}</div>
              <h3 className="display" style={{ fontSize: 24, letterSpacing: '-0.01em', lineHeight: 1.1 }}>{c.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWePlugIn() {
  const groups = [
    { t: 'Deals', items: ['Brand outreach & inbound triage', 'Rate cards & negotiation', 'Contract templates & redlines', 'Usage, exclusivity, and renewal tracking', 'Quarterly rate audits'] },
    { t: 'Operations', items: ['Invoicing & collections', 'Tax & 1099s', 'Equity and IP advisory', 'Insurance & vendor management', 'Travel & talent logistics'] },
    { t: 'Growth', items: ['Brand & IP development', 'Content production support', 'PR & press strategy', 'Creator-led product launches', 'Investor & operator intros'] },
    { t: 'Community', items: ['Quarterly creator dinners', 'Manager-only retreats', 'Industry intros & co-rep deals', 'Mental health resources', 'Operating partner office hours'] },
  ];
  return (
    <section style={{ background: 'var(--cream-warm)', color: 'var(--ink)', padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">iii.</span><span>What We Plug In</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', marginBottom: 80, lineHeight: 0.9 }}>
        Everything <em style={{ color: 'var(--crimson)' }}>but</em> the relationships.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
        {groups.map((g, i) => (
          <div key={g.t} style={{
            padding: '32px 28px 40px',
            borderRight: i < 3 ? '1px solid var(--line)' : 'none',
            minHeight: 360,
          }}>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 20 }}>0{i + 1} — {g.t}</div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {g.items.map(it => (
                <li key={it} style={{ fontSize: 14, lineHeight: 1.45, display: 'flex', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--crimson)' }}>—</span>
                  <span style={{ color: 'var(--ink-soft)' }}>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ApplyManager() {
  const [form, setForm] = React.useState({ name: '', email: '', city: 'New York', roster: '', focus: 'Fashion', note: '' });
  const [sent, setSent] = React.useState(false);

  const fieldStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid var(--line)', padding: '14px 0',
    fontSize: 16, fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none',
  };
  const labelStyle = { fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 8, display: 'block' };

  if (sent) {
    return (
      <section id="apply" style={{ padding: 'var(--section) var(--gutter)', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.02em', marginBottom: 24 }}>
            Thank you<em style={{ color: 'var(--crimson)' }}>.</em>
          </h2>
          <p className="body-lg" style={{ margin: '0 auto', fontSize: 18 }}>
            A founding partner will reach out within five business days. Every manager inquiry is read personally.
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
            <span className="num">v.</span><span>Start a Conversation</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 32 }}>
            Two questions, <em>one note</em>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 360 }}>
            Tell us a little about your roster and where you're at. A founding partner will follow up — no recruiter, no junior, no template.
          </p>
        </div>
        <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 32 }}>
            <div><label style={labelStyle}>Full Name</label><input style={fieldStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required/></div>
            <div><label style={labelStyle}>Email</label><input style={fieldStyle} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required/></div>
            <div><label style={labelStyle}>Currently Based</label>
              <select style={fieldStyle} value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                {['Texas', 'New York', 'Los Angeles', 'London', 'Other'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div><label style={labelStyle}>Primary Category</label>
              <select style={fieldStyle} value={form.focus} onChange={e => setForm({ ...form, focus: e.target.value })}>
                {['Fashion', 'Beauty', 'Culture', 'Food', 'Lifestyle', 'Travel', 'Wellness', 'Design', 'Music', 'Cross-category'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: 32 }}>
            <label style={labelStyle}>Roster Size (approx.)</label>
            <input style={fieldStyle} placeholder="e.g. 6 creators, ~3M combined following" value={form.roster} onChange={e => setForm({ ...form, roster: e.target.value })}/>
          </div>
          <div style={{ marginBottom: 32 }}>
            <label style={labelStyle}>A Note — why now, why Collegare?</label>
            <textarea style={{ ...fieldStyle, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}
              value={form.note} onChange={e => setForm({ ...form, note: e.target.value })}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Read personally, every time. Five business days.</div>
            <button type="submit" className="btn btn--primary">Send Note <span className="arrow">→</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ManagerBenefits() {
  const blocks = [
    {
      n: '01',
      t: 'Access the Collegare network',
      d: "We've built relationships with the brand teams, agency partners, and platforms that actually move the needle. Our roster has run flagship partnerships with category leaders across wellness, beauty, food, and lifestyle. When you need an intro, we open the door — when you need a second opinion, we're in the group chat.",
    },
    {
      n: '02',
      t: 'Sign and support top creators',
      d: "Collegare is a destination brand for creators. Our credibility extends beyond who we directly manage — talent want to be on the roster, and brands want to work with the talent on it. You'll have the creative, strategic, and operating resources to sign creators you couldn't have alone, retain them through every career inflection, and take them to the next level.",
    },
    {
      n: '03',
      t: 'Admin, taken care of',
      d: "The team at Collegare spans finance, legal, and operations — a dedicated back office built to free you up to do the work only you can do. No more invoicing nights, contract-redline weekends, or chasing a 1099 you should have received in February. Between ops and mentorship, you'll have the full suite.",
    },
  ];
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">iv.</span><span>The Pitch</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', marginBottom: 80, lineHeight: 0.9 }}>
        Why managers <em style={{ color: 'var(--crimson)' }}>join</em>.
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {blocks.map(b => (
          <article key={b.n} style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr 2fr',
            gap: 40,
            padding: '40px 0',
            borderTop: '1px solid var(--ink)',
            alignItems: 'start',
          }}>
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 48, color: 'var(--crimson)', lineHeight: 1 }}>{b.n}</div>
            <h3 className="display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.015em', lineHeight: 1 }}>{b.t}</h3>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '58ch' }}>{b.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Commission() {
  const features = [
    {
      t: 'Industry-leading splits',
      d: "An industry-leading commission structure that ensures the people doing the work keep the majority of the upside. Manager-favorable by default — transparent, written, never negotiated away.",
    },
    {
      t: 'Monthly, on time',
      d: "Reliable monthly commission payments for the deals you close. No chasing finance, no quarter-end surprises. Our deals desk and ops team handle invoicing end-to-end.",
    },
    {
      t: 'No salary cap',
      d: "We don't pay a base — we pay performance. Uncapped commission means your earnings track directly with the work you put in.",
    },
  ];
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40, color: 'rgba(254,252,240,0.7)' }}>
        <span className="num" style={{ color: 'var(--cream-warm)' }}>iii.</span><span>Commission Structure</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
        <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', lineHeight: 0.9 }}>
          Splits that <em style={{ color: 'var(--cream-warm)' }}>respect</em> the work.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, opacity: 0.88, maxWidth: 480 }}>
          Built so the people doing the work keep the majority of the upside, and so the strongest managers have a real path to partnership.
          Specific terms are agreed in writing with every manager — we believe in custom-fit deals over template contracts.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(254,252,240,0.3)' }}>
        {features.map((f, i) => (
          <div key={f.t} style={{
            padding: '40px 32px 40px 0',
            borderRight: i < features.length - 1 ? '1px solid rgba(254,252,240,0.2)' : 'none',
            paddingLeft: i > 0 ? 32 : 0,
          }}>
            <div className="small-caps" style={{ color: 'var(--cream-warm)', marginBottom: 20 }}>
              0{i + 1}
            </div>
            <h3 className="display" style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              marginBottom: 18,
            }}>
              {f.t}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.88 }}>{f.d}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(254,252,240,0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <p style={{ fontSize: 13, opacity: 0.78, maxWidth: 540, lineHeight: 1.5 }}>
          Curious about specifics? Have a conversation — every senior manager's terms are written and discussed in private.
        </p>
        <a href="#apply" className="btn btn--cream">Come Work With Us <span className="arrow">→</span></a>
      </div>
    </section>
  );
}

const MANAGER_FAQS = [
  { q: 'Who can apply to be a Collegare manager?',
    a: 'Proactive, problem-solving people who want to build a career in talent management. Experience is welcome but not required — if you have the drive, we provide the training, mentorship, and tools.' },
  { q: 'What kind of brands will I be working with?',
    a: "Brands across wellness, beauty, food, hospitality, and lifestyle — from emerging DTC labels to category-defining names. You'll work alongside our deals desk to pitch the right brands for your roster and close real deals." },
  { q: 'How does the commission structure work?',
    a: 'Industry-leading, manager-favorable splits with reliable monthly payouts. No base salary cap — your effort sets your income. Specific terms are agreed in writing with every hire.' },
  { q: 'What support do I actually get day-to-day?',
    a: 'A deals desk, contract templates, finance and invoicing, legal, insurance, events production, creative direction, and direct mentorship from the founding team.' },
  { q: 'Do I need to be in Texas, NY, or LA?',
    a: 'No. We work fully remote with flexible hours, and hire based on talent and roster fit, not zip code. We meet up in person occasionally — but the day-to-day is wherever you are.' },
  { q: 'I have no industry experience. Should I still apply?',
    a: 'Yes. We train regardless. If you can communicate clearly, follow through, and think on your feet, the rest is teachable. Send us a note.' },
];

function Managers() {
  return (
    <div>
      <Nav current="Managers" />
      <main>
        <ManagersHero />
        <Why />
        <Commission />
        <FAQ eyebrowNum="iv" items={MANAGER_FAQS} />
        <ApplyManager />
        <ByCreatorsMarquee />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Managers />);

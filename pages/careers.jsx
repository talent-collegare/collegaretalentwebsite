// Careers — talent manager job listings (Grail-style, not in main nav)

const JOBS = [
  { title: 'Influencer Talent Manager — NYC',     dept: 'Talent',     type: 'Full-time', location: 'New York / Remote',     posted: 'Spring 2026' },
  { title: 'Influencer Talent Manager — Dallas',  dept: 'Talent',     type: 'Full-time', location: 'Dallas / Remote',       posted: 'Spring 2026' },
  { title: 'Influencer Talent Manager — LA',      dept: 'Talent',     type: 'Full-time', location: 'Los Angeles / Remote',  posted: 'Spring 2026' },
  { title: 'Influencer Talent Manager — Utah',    dept: 'Talent',     type: 'Full-time', location: 'Utah / Remote',         posted: 'Spring 2026' },
  { title: 'Influencer Talent Manager — Chicago', dept: 'Talent',     type: 'Full-time', location: 'Chicago / Remote',      posted: 'Spring 2026' },
  { title: 'Influencer Talent Manager — Miami',   dept: 'Talent',     type: 'Full-time', location: 'Miami / Remote',        posted: 'Spring 2026' },
  { title: 'College Summer Internship — Events',           dept: 'Internships', type: 'Internship', location: 'Remote', posted: 'Summer 2026' },
  { title: 'College Summer Internship — Sales',            dept: 'Internships', type: 'Internship', location: 'Remote', posted: 'Summer 2026' },
  { title: 'College Summer Internship — Social / Content', dept: 'Internships', type: 'Internship', location: 'Remote', posted: 'Summer 2026' },
];

const DEPARTMENTS = ['All', 'Talent', 'Internships'];
const LOCATIONS = ['All', 'New York', 'Dallas', 'Los Angeles', 'Utah', 'Chicago', 'Miami', 'Remote'];

function CareersHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 0', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">i.</span><span>Careers</span>
      </div>
      <h1 className="display" style={{ fontSize: 'clamp(72px, 13vw, 220px)', lineHeight: 0.85, letterSpacing: '-0.03em', marginBottom: 48 }}>
        Build the next <em style={{ color: 'var(--crimson)' }}>house</em>.
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60, paddingTop: 40, borderTop: '1px solid var(--line-soft)' }}>
        <p className="body-lg" style={{ fontSize: 19 }}>
          We're a small team built around a deliberate roster. Every hire is consequential — you'll work directly
          with the partners, the talent, and the brands. If you want to do the best work of your career
          inside a house that values craft, taste, and ownership, we'd like to meet you.
        </p>
        <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.65 }}>
          <span className="small-caps" style={{ color: 'var(--crimson)', display: 'block', marginBottom: 8 }}>What you get</span>
          Senior partner mentorship, industry-leading commission structure for revenue roles, real equity for senior hires, and the kind of small-team ownership the big agencies can't offer.
        </p>
      </div>

      {/* Hero image strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        <img src={REAL_PHOTOS.events[0]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img src={REAL_PHOTOS.team.candid} alt="The Collegare team in studio" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img src={REAL_PHOTOS.events[2]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
      </div>
    </section>
  );
}

function WhyJoin() {
  const blocks = [
    { t: 'Ownership, not hierarchy',
      d: "You'll work directly with the founders and senior partners. Every role at Collegare ships consequential work — no junior layers, no internal politics, no week-long approval chains." },
    { t: 'Industry-leading economics',
      d: "Revenue-generating roles share in real upside through an industry-leading commission structure. Senior hires have a real path to equity and partnership." },
    { t: 'A small house, on purpose',
      d: "We will not be the biggest. We will be the one the strongest creators and managers stay with the longest. Our team is built for compounding, not for headcount growth." },
  ];
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">ii.</span><span>Why Collegare</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', marginBottom: 80, lineHeight: 0.9 }}>
        The reasons we <em style={{ color: 'var(--crimson)' }}>hire</em> the way we do.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
        {blocks.map((b, i) => (
          <div key={b.t} style={{
            padding: '36px 32px 40px 0',
            borderRight: i < blocks.length - 1 ? '1px solid var(--line)' : 'none',
            paddingLeft: i > 0 ? 32 : 0,
          }}>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 20 }}>0{i + 1}</div>
            <h3 className="display" style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 16 }}>
              {b.t}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{b.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OpenRoles() {
  const [dept, setDept] = React.useState('All');
  const [loc, setLoc] = React.useState('All');

  const filtered = JOBS.filter(j =>
    (dept === 'All' || j.dept === dept) &&
    (loc === 'All' || j.location.includes(loc))
  );

  const Pill = ({ active, onClick, children }) => (
    <button onClick={onClick} style={{
      padding: '8px 16px',
      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
      border: '1px solid ' + (active ? 'var(--crimson)' : 'var(--line)'),
      background: active ? 'var(--crimson)' : 'transparent',
      color: active ? 'var(--cream)' : 'var(--ink)',
      borderRadius: 999,
      transition: 'all 0.25s var(--ease)',
    }}>{children}</button>
  );

  return (
    <section style={{ background: 'var(--cream-warm)', padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">iii.</span><span>Open Roles</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
            <em style={{ color: 'var(--crimson)' }}>{filtered.length}</em> position{filtered.length === 1 ? '' : 's'} open.
          </h2>
        </div>
      </div>

      {/* Filter row */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 32,
        padding: '20px 0 24px',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        marginBottom: 32,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span className="small-caps" style={{ color: 'var(--ink-soft)' }}>Department</span>
          {DEPARTMENTS.map(d => <Pill key={d} active={dept === d} onClick={() => setDept(d)}>{d}</Pill>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span className="small-caps" style={{ color: 'var(--ink-soft)' }}>Location</span>
          {LOCATIONS.map(l => <Pill key={l} active={loc === l} onClick={() => setLoc(l)}>{l}</Pill>)}
        </div>
      </div>

      {/* Job list */}
      {filtered.length === 0 ? (
        <div style={{ padding: '80px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 32, color: 'var(--ink-soft)', marginBottom: 16 }}>
            No open roles match that filter.
          </div>
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: '40ch', margin: '0 auto' }}>
            Send us a note anyway — we read every inquiry, and we hire ahead of postings when we meet the right person.
          </p>
        </div>
      ) : (
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {filtered.map((j, i) => (
            <a key={j.title} href={`#apply-${i}`} style={{
              display: 'grid',
              gridTemplateColumns: '60px 3fr 1fr 1fr 1.2fr 40px',
              gap: 24,
              padding: '26px 0',
              borderBottom: '1px solid var(--line)',
              alignItems: 'center',
              transition: 'all 0.3s var(--ease)',
            }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '20px'; e.currentTarget.style.background = 'rgba(139,13,0,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--crimson)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="display" style={{
                fontSize: 'clamp(24px, 2.8vw, 36px)',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}>
                {j.title}
              </span>
              <span className="small-caps" style={{ color: 'var(--ink-soft)' }}>{j.dept}</span>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{j.type}</span>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{j.location}</span>
              <span style={{ fontSize: 18, color: 'var(--ink-soft)' }}>→</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function GeneralApplication() {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">iv.</span><span>Open Application</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 24 }}>
            Don't see your <em style={{ color: 'var(--crimson)' }}>fit</em>?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 360 }}>
            We hire ahead of postings when we meet someone exceptional. Send us a note about what you'd want to build at Collegare.
          </p>
        </div>

        {sent ? (
          <div style={{ padding: '60px 0' }}>
            <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '-0.02em', marginBottom: 24 }}>
              Thank you<em style={{ color: 'var(--crimson)' }}>.</em>
            </h2>
            <p className="body-lg" style={{ fontSize: 18 }}>
              Your note is in. We read every application personally — expect a response within two weeks.
            </p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px', marginBottom: 32 }}>
              <div><label style={fieldLabel}>Name</label><input style={fieldInput} required/></div>
              <div><label style={fieldLabel}>Email</label><input style={fieldInput} type="email" required/></div>
              <div><label style={fieldLabel}>Where you're based</label><input style={fieldInput} placeholder="TX, NY, LA, Remote..."/></div>
              <div><label style={fieldLabel}>Role of interest</label><input style={fieldInput} placeholder="Talent, Partnerships, Ops..."/></div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <label style={fieldLabel}>Link to your work or LinkedIn</label>
              <input style={fieldInput} placeholder="https://"/>
            </div>
            <div style={{ marginBottom: 32 }}>
              <label style={fieldLabel}>A Note — what would you want to build here?</label>
              <textarea style={{ ...fieldInput, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Read personally. Two weeks, always.</div>
              <button type="submit" className="btn btn--primary">Send Note <span className="arrow">→</span></button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

const fieldInput = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid var(--line)', padding: '14px 0',
  fontSize: 16, fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none',
};
const fieldLabel = { fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 8, display: 'block' };

function Careers() {
  return (
    <div>
      <Nav />
      <main>
        <CareersHero />
        <WhyJoin />
        <OpenRoles />
        <GeneralApplication />
      </main>
      <ByCreatorsMarquee />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Careers />);

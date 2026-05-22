// Careers — talent manager job listings (Grail-style, not in main nav)

const INTERNSHIP_TALLY_URL = 'https://tally.so/r/aQa4QE';

const JOBS = [
  { title: 'College Summer Internship — Events',           dept: 'Internships', type: 'Internship', location: 'Remote', posted: 'Summer 2026' },
  { title: 'College Summer Internship — Sales',            dept: 'Internships', type: 'Internship', location: 'Remote', posted: 'Summer 2026' },
  { title: 'College Summer Internship — Social / Content', dept: 'Internships', type: 'Internship', location: 'Remote', posted: 'Summer 2026' },
];

const DEPARTMENTS = ['All', 'Internships'];
const LOCATIONS = ['All', 'Remote'];

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
          Senior partner mentorship, real responsibility from week one, work that touches the talent and the brands, and the kind of small-team access the big agencies can't offer.
        </p>
      </div>

      {/* Hero image strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        <img loading="lazy" src={REAL_PHOTOS.events[0]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.team.candid} alt="The Collegare team in studio" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.events[2]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
      </div>
    </section>
  );
}

function WhyJoin() {
  const blocks = [
    { t: 'Real responsibility, day one',
      d: "Interns ship real work at Collegare — deal research, campaign decks, talent prep notes, event production. You'll sit in on partner calls and own a piece of work that touches the talent, the brand, or both. No coffee runs." },
    { t: 'Direct access to the table',
      d: "You'll work alongside the founding partners — the people actually closing the deals and signing the talent. The lessons you'll take with you are the ones every junior at a big agency waits years to overhear." },
    { t: 'A path forward',
      d: "Strong interns get the first call when full-time seats open. The summers we hire matter — the team we build now is the one we'll grow with for years." },
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
            <a key={j.title} href="#apply" style={{
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
  const steps = [
    { n: '01', t: 'Pick your role and share your story', d: 'The form asks which internship, plus a few lines about your school, your year, and why this matters to you. About five minutes.' },
    { n: '02', t: 'We read every submission', d: 'Personally. No automated screening, no GPA cutoffs. We read your note before we look at anything else.' },
    { n: '03', t: 'You hear back in two weeks', d: 'If there is a fit, we set up a call. If not, we tell you straight — and we keep your application on file for the next cycle.' },
  ];

  return (
    <section id="apply" style={{ padding: 'var(--section) var(--gutter)', scrollMarginTop: 100 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">iv.</span><span>Apply</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 24 }}>
            Tell us about your <em style={{ color: 'var(--crimson)' }}>fit</em>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 360, marginBottom: 32 }}>
            One application, three internships. Pick the role that fits — and tell us why it's the one.
          </p>
          <a href={INTERNSHIP_TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
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
              Looking for a full-time role?
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Manager openings are on the <a href="managers.html" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>For Managers</a> page. For anything else, write directly to{' '}
              <a href="mailto:careers@collegaretalentmanagement.com" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>careers@collegaretalentmanagement.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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

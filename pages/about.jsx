// About — house story, principles, team

function AboutHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 0', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">i.</span><span>About the House</span>
      </div>
      <h1 className="display" style={{ fontSize: 'clamp(72px, 12vw, 220px)', lineHeight: 0.85, letterSpacing: '-0.03em', marginBottom: 40 }}>
        From the Italian — <em>to connect</em>.
      </h1>
      <p className="body-lg" style={{ fontSize: 22, maxWidth: '55ch', marginBottom: 60 }}>
        Collegare was founded on the belief that the creator industry had lost the plot —
        that careers were being treated like campaigns, and campaigns were being treated like spreadsheets.
        We started a different kind of house.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 8, marginBottom: 0 }}>
        <img loading="lazy" src={REAL_PHOTOS.events[0]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.events[1]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.events[2]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}/>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label">
            <span className="num">ii.</span><span>The Story</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <p style={{ fontFamily: 'var(--display)', fontSize: 28, lineHeight: 1.35, letterSpacing: '-0.005em' }}>
            <span style={{ color: 'var(--crimson)', fontSize: '1.6em', fontStyle: 'italic', float: 'left', lineHeight: 0.9, marginRight: 12, marginTop: 4 }}>W</span>
            e started Collegare in 2025 with a small roster of creators we'd worked with for years
            — the ones whose careers we'd watched get pushed into the wrong deals, the wrong rates,
            and the wrong rooms. We thought we could do it differently. We still do.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
            The creator economy has a scale problem. Everyone is trying to represent thousands of people,
            run thousands of campaigns, and optimize for the metrics that matter least. We went the other way.
            We represent a small group of creators across the categories we actually understand, and we work
            with a smaller group of brands who understand what they're buying when they buy a creator's trust.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0' }}>
            <img loading="lazy" src={REAL_PHOTOS.events[3]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
            <img loading="lazy" src={talentAt(0)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
            We sit between talent and brands — sometimes as manager, sometimes as agency,
            sometimes as producer, sometimes as therapist. What we are always, is in the group chat.
          </p>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    { n: '01', t: 'Taste over tonnage', d: 'One great creator, done right, outperforms ten mediocre ones every time.' },
    { n: '02', t: 'Careers over campaigns', d: "We think in decades. The best deals are the ones you don't take." },
    { n: '03', t: 'Proximity is the job', d: "If you can't reach us on a Saturday, we're not doing it right." },
    { n: '04', t: 'Honesty is the policy', d: 'We say no. Often. To creators, to brands, to ourselves.' },
    { n: '05', t: 'Culture is the product', d: "The work that lasts doesn't feel like advertising. That's the goal." },
    { n: '06', t: 'Small by design', d: "We'll stay small. That's a feature." },
  ];
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ color: 'rgba(254,252,240,0.7)', marginBottom: 40 }}>
        <span className="num" style={{ color: 'var(--cream-warm)' }}>iii.</span><span>Principles</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(56px, 10vw, 160px)', letterSpacing: '-0.03em', lineHeight: 0.88, marginBottom: 60 }}>
        Six <em style={{ color: 'var(--cream-warm)' }}>rules</em> of the house.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(254,252,240,0.2)' }}>
        {principles.map(p => (
          <div key={p.n} style={{ background: 'var(--crimson)', padding: 40, minHeight: 260 }}>
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 36, color: 'var(--cream-warm)', marginBottom: 20, lineHeight: 1 }}>{p.n}</div>
            <h3 className="display" style={{ fontSize: 30, letterSpacing: '-0.01em', marginBottom: 14, lineHeight: 1.05 }}>{p.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: 'Maya',   role: 'Co-founder, COO', imgKey: 'maya' },
    { name: 'Skylar', role: 'Co-founder, CMO', imgKey: 'skylar' },
  ];
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">iv.</span><span>The Team</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', letterSpacing: '-0.02em', marginBottom: 60 }}>
        A small house, <em>on purpose</em>.
      </h2>

      {/* Wide candid image */}
      <div style={{ marginBottom: 60 }}>
        <img loading="lazy" src={REAL_PHOTOS.team.candid} alt="The Collegare team in studio" style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover' }}/>
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
          <span>The House, in studio</span>
          <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0, color: 'var(--crimson)', fontSize: 16 }}>February, 2026</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)' }}>
        {team.map((t) => (
          <div key={t.name} style={{ background: 'var(--cream)', padding: 0 }}>
            <img loading="lazy" src={REAL_PHOTOS.team[t.imgKey]} alt={t.name} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
            <div style={{ padding: '24px 28px 32px' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 36, letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 8 }}>{t.name}</div>
              <div className="small-caps" style={{ color: 'var(--crimson)' }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section style={{ padding: '100px var(--gutter)', textAlign: 'center', background: 'var(--cream-warm)' }}>
      <h2 className="display" style={{ fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.025em', lineHeight: 0.9, marginBottom: 32 }}>
        Press, careers, partnerships.
      </h2>
      <p className="body-lg" style={{ margin: '0 auto 32px', fontSize: 17 }}>
        For media requests, job inquiries, or to partner with the house, write to us directly.
      </p>
      <a href="contact.html" className="btn btn--primary">Contact Collegare <span className="arrow">→</span></a>
    </section>
  );
}

function About() {
  return (
    <div>
      <Nav current="About" />
      <main>
        <AboutHero />
        <Story />
        <Principles />
        <Team />
        <AboutCTA />
        <SelectedWorkCarousel eyebrowNum="v" headline="Campaigns in motion." />
        <ByCreatorsMarquee />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<About />);

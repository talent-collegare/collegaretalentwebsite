// Homepage V2 — Editorial Magazine direction
// Type-first hero, cinematic team video strip, asymmetric mission with talent inserts.
// Same content rules as V1: team video is the only video on the homepage.

const PARTNERS_V2 = ['Olly Wellness', 'Verano Hill', 'Cheers Health', "Burleson's Honey", 'Melting Pod'];

const CASE_STUDIES_V2 = [
  { brand: 'Olly Wellness',    line: 'Daily rituals, made charismatic.',     cat: 'Wellness' },
  { brand: 'Verano Hill',      line: 'A property launched into culture.',    cat: 'Hospitality' },
  { brand: 'Cheers Health',    line: 'Wellness for the morning after.',      cat: 'Wellness' },
  { brand: "Burleson's Honey", line: 'A heritage pantry staple, reframed.',  cat: 'Food' },
  { brand: 'Melting Pod',      line: 'A scent story for the season.',        cat: 'Lifestyle' },
];

// =============================================================================
// Cinematic video strip (full-bleed) — uses video's own first usable frame
// =============================================================================

function CinematicVideo({ src, label }) {
  const videoRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  React.useEffect(() => {
    const v = videoRef.current; if (!v) return;
    const m = () => { try { v.currentTime = 0.5; } catch(e){} };
    v.addEventListener('loadedmetadata', m);
    return () => v.removeEventListener('loadedmetadata', m);
  }, []);
  React.useEffect(() => {
    const v = videoRef.current; if (!v) return;
    if (hovered) v.play().catch(()=>{}); else { v.pause(); try { v.currentTime = 0.5; } catch(e){} }
  }, [hovered]);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', width: '100%', aspectRatio: '21/9', overflow: 'hidden', background: 'var(--ink)' }}>
      <video ref={videoRef} src={src} muted loop playsInline preload="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.015)' : 'scale(1)', transition: 'transform 1s var(--ease)' }}/>
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,10,7,0.15) 0%, rgba(15,10,7,0) 30%, rgba(15,10,7,0) 70%, rgba(15,10,7,0.5) 100%)',
        pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: 24, left: 24, right: 24,
        display: 'flex', justifyContent: 'space-between',
        color: 'var(--cream)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--crimson)',
            boxShadow: '0 0 0 3px rgba(139,13,0,0.3)', animation: 'pulse 2s ease-in-out infinite' }}/>
          {label}
        </span>
        <span>Hover to play</span>
      </div>
      <div style={{ position: 'absolute', bottom: 24, left: 24, color: 'var(--cream)',
        fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 24 }}>
        — A film about the house.
      </div>
    </div>
  );
}

// =============================================================================
// HERO — type-first, no media in first viewport
// =============================================================================

function HeroV2() {
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }) + ' EST');
    };
    tick(); const id = setInterval(tick, 60000); return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      padding: '140px var(--gutter) 80px',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Issue meta row */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        gap: 40, alignItems: 'baseline',
        fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--ink-soft)',
        paddingBottom: 32,
        borderBottom: '1px solid var(--line-soft)',
      }}>
        <span>Vol. 04 — Spring / 2026</span>
        <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 16, textTransform: 'none', letterSpacing: 0, color: 'var(--crimson)' }}>
          A talent house. A practice. A point of view.
        </span>
        <span style={{ textAlign: 'right' }}>{time} — New York</span>
      </div>

      {/* Headline — fills the viewport, type-first */}
      <div style={{ padding: '60px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'end' }}>
          <p style={{
            fontFamily: 'var(--display)',
            fontStyle: 'italic',
            fontSize: 22,
            lineHeight: 1.45,
            color: 'var(--ink-soft)',
            maxWidth: '38ch',
          }}>
            <span style={{ color: 'var(--crimson)' }}>—</span> Collegare, from the Italian, means "to connect."
            A creator-first talent house and brand partnerships agency working at the intersection of culture, content, and commerce.
          </p>
          <h1 className="display" style={{
            fontSize: 'clamp(80px, 14vw, 240px)',
            lineHeight: 0.86,
            letterSpacing: '-0.03em',
            textAlign: 'right',
          }}>
            We build<br/>
            careers, not<br/>
            <em>campaigns</em><span style={{ color: 'var(--crimson)' }}>.</span>
          </h1>
        </div>
      </div>

      {/* Bottom row — In this issue */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 40, paddingTop: 28, borderTop: '1px solid var(--line)',
        fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.6,
      }}>
        {[
          ['i', 'A film about the house', 'Our story, in motion.'],
          ['ii', 'Selected work', 'Ten partnerships, this season.'],
          ['iii', 'Selected partners', 'The brands we build with.'],
          ['iv', 'The team', 'Skylar &amp; Maya. The whole house.'],
        ].map(([num, t, desc]) => (
          <div key={num}>
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 28, color: 'var(--crimson)', marginBottom: 8, lineHeight: 1 }}>{num}.</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 20, letterSpacing: '-0.005em', lineHeight: 1.15, color: 'var(--ink)', marginBottom: 4 }}>{t}</div>
            <div>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// PARTNERS STRIP
// =============================================================================

function PartnersStrip() {
  return (
    <section style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '32px var(--gutter)',
      background: 'var(--cream-warm)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 60 }}>
        <div className="small-caps" style={{ color: 'var(--ink-soft)' }}>Selected Partners</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px 36px' }}>
          {PARTNERS_V2.map((p, i) => (
            <span key={p} style={{
              fontFamily: i % 2 === 0 ? 'var(--display)' : 'var(--body)',
              fontSize: i % 2 === 0 ? 24 : 14,
              fontStyle: i % 3 === 0 ? 'italic' : 'normal',
              fontWeight: i % 2 === 1 ? 600 : 400,
              letterSpacing: i % 2 === 1 ? '0.08em' : '0',
              textTransform: i % 2 === 1 ? 'uppercase' : 'none',
              color: 'var(--ink)',
              opacity: 0.85,
              whiteSpace: 'nowrap',
            }}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// CINEMATIC STRIP — full-bleed team video as section
// =============================================================================

function CinematicSection() {
  return (
    <section style={{ padding: '0' }}>
      <CinematicVideo src={VIDEOS.team_story} label="Our Story" />
    </section>
  );
}

// =============================================================================
// MISSION — asymmetric, with talent photo inserts
// =============================================================================

function MissionV2() {
  const photos = React.useMemo(() => randomTalent(3), []);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 32 }}>
            <span className="num">i.</span><span>The House</span>
          </div>
          <img src={photos[0]} alt="" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        </div>
        <div>
          <p className="display" style={{ fontSize: 'clamp(32px, 4.4vw, 64px)', lineHeight: 1.08, letterSpacing: '-0.015em', marginBottom: 56 }}>
            We represent the voices defining wellness, beauty, food, and lifestyle —
            and we build the campaigns the rest of the industry <em style={{ color: 'var(--crimson)' }}>studies later</em>.
          </p>

          {/* Inline asymmetric photo + paragraph */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 56, alignItems: 'start' }}>
            <img src={photos[1]} alt="" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', marginTop: 80 }}/>
            <div>
              <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 16 }}>01 — Built On The Work</div>
              <h3 className="display" style={{ fontSize: 32, marginBottom: 16, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
                Flagship partnerships, not filler.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 32 }}>
                We pick our brands the way we pick our talent — for taste, ambition, and the willingness
                to make work people actually remember. Quality over volume.
              </p>
              <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 16 }}>02 — A Team You Trust</div>
              <h3 className="display" style={{ fontSize: 32, marginBottom: 16, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
                Senior operators, on the phone.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                A small team with experience that compounds. Built to actually answer the phone,
                not pass you to a junior account manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// WORK — editorial campaign list
// =============================================================================

function WorkV2() {
  return (
    <section style={{ background: 'var(--cream-warm)', padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 60 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">ii.</span><span>Selected Work</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', lineHeight: 0.9 }}>
            Campaigns, <em style={{ color: 'var(--crimson)' }}>indexed</em>.
          </h2>
        </div>
        <a href="management.html" className="btn btn--ghost">Full Archive <span className="arrow">→</span></a>
      </div>

      <div style={{ borderTop: '1px solid var(--ink)' }}>
        {CASE_STUDIES_V2.map((cs, i) => (
          <a key={cs.brand} href="management.html" style={{
            display: 'grid',
            gridTemplateColumns: '60px 2.6fr 2.4fr 1fr 40px',
            gap: 24,
            padding: '22px 0',
            borderBottom: '1px solid var(--line)',
            alignItems: 'center',
            transition: 'all 0.3s var(--ease)',
          }}
            onMouseEnter={e => { e.currentTarget.style.paddingLeft = '20px'; }}
            onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; }}
          >
            <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 24, color: 'var(--crimson)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="display" style={{
              fontSize: 'clamp(26px, 3vw, 40px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
            }}>
              {cs.brand}
            </span>
            <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.3 }}>
              {cs.line}
            </span>
            <span className="small-caps" style={{ color: 'var(--ink-soft)' }}>{cs.cat}</span>
            <span style={{ fontSize: 16, color: 'var(--ink-soft)' }}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// MOMENTS — single landscape event photo (less is more)
// =============================================================================

function MomentsV2() {
  const [photo] = React.useMemo(() => randomEvents(1), []);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'end', marginBottom: 32 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 16 }}>
            <span className="num">iii.</span><span>A Moment</span>
          </div>
          <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 32, color: 'var(--crimson)', lineHeight: 1.1, marginTop: 24 }}>
            From the house —<br/>February 2026.
          </div>
        </div>
      </div>
      <img src={photo} alt="" style={{ width: '100%', aspectRatio: '21/9', objectFit: 'cover' }}/>
    </section>
  );
}

// =============================================================================
// TEAM V2 — feature treatment, larger
// =============================================================================

function TeamV2() {
  return (
    <section style={{ padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">iv.</span><span>The Team</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 8vw, 130px)', letterSpacing: '-0.025em', lineHeight: 0.9 }}>
            A small <em style={{ color: 'var(--crimson)' }}>house</em>, on purpose.
          </h2>
        </div>
        <p className="body-lg" style={{ fontSize: 18 }}>
          Collegare is founded and led by Skylar and Maya — operators with deep relationships across talent, brands, and platforms.
          The team is intentionally small, and built to stay that way.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          { name: 'Skylar', role: 'Founder', imgKey: 'skylar' },
          { name: 'Maya',   role: 'Founder', imgKey: 'maya' },
        ].map(t => (
          <div key={t.name} style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={REAL_PHOTOS.team[t.imgKey]} alt={t.name} style={{
              width: '100%', aspectRatio: '4/5', objectFit: 'cover',
            }}/>
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              color: 'var(--cream)',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 56, fontStyle: 'italic', letterSpacing: '-0.01em', lineHeight: 1 }}>
                {t.name}
              </div>
              <div className="small-caps" style={{ marginTop: 8 }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// IN NUMBERS V2 — vertical, narrative
// =============================================================================

function InNumbersV2() {
  const stats = [
    { v: '10',           k: 'Flagship brand partnerships' },
    { v: '3',            k: 'Creator community events completed' },
    { v: 'TX · NY · LA', k: 'Across three cities' },
    { v: '2025',         k: 'The year we started' },
  ];
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ color: 'rgba(254,252,240,0.7)', marginBottom: 32 }}>
        <span className="num" style={{ color: 'var(--cream-warm)' }}>v.</span>
        <span>In Numbers</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 100px)', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: 60 }}>
        The work, <em style={{ color: 'var(--cream-warm)' }}>quantified</em>.
      </h2>
      <div style={{ borderTop: '1px solid rgba(254,252,240,0.25)' }}>
        {stats.map(s => (
          <div key={s.k} style={{
            display: 'grid', gridTemplateColumns: '2fr 3fr',
            gap: 40, padding: '32px 0',
            borderBottom: '1px solid rgba(254,252,240,0.2)',
            alignItems: 'baseline',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(56px, 9vw, 140px)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}>
              {s.v}
            </div>
            <div className="display" style={{ fontSize: 28, fontStyle: 'italic', color: 'var(--cream-warm)', letterSpacing: '-0.005em' }}>
              {s.k}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// CONNECT V2
// =============================================================================

function ConnectV2() {
  return (
    <section style={{ padding: 'var(--section) var(--gutter)', textAlign: 'center' }}>
      <div className="index-label" style={{ marginBottom: 24, justifyContent: 'center' }}>
        <span className="num">vi.</span><span>Get In Touch</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(72px, 13vw, 220px)', letterSpacing: '-0.03em', lineHeight: 0.88, marginBottom: 32 }}>
        Let's <em>talk</em>.
      </h2>
      <p className="body-lg" style={{ fontSize: 19, margin: '0 auto 40px' }}>
        Whether you're a creator searching for management, a brand planning their next campaign, or a manager looking to join the team —
        we'd like to hear from you.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
        <a href="contact.html" className="btn btn--primary">Start the Conversation <span className="arrow">→</span></a>
        <a href="mailto:hello@collegaretalent.com" className="btn btn--ghost">hello@collegaretalent.com</a>
      </div>
    </section>
  );
}

// =============================================================================
// PAGE
// =============================================================================

function HomeV2() {
  return (
    <div>
      <Nav current="" />
      <main>
        <HeroV2 />
        <CinematicSection />
        <PartnersStrip />
        <MissionV2 />
        <WorkV2 />
        <MomentsV2 />
        <TeamV2 />
        <InNumbersV2 />
        <ConnectV2 />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomeV2 />);

const style = document.createElement('style');
style.textContent = `@keyframes pulse {0%,100%{opacity:1}50%{opacity:0.4}}`;
document.head.appendChild(style);

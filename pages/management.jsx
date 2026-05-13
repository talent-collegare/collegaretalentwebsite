// Talent — Case Studies showcase
// We don't list creators by name (so the page stays evergreen as the roster shifts).
// Instead the work IS the proof — brand campaign tiles, each featuring talent.

const ALL_CAMPAIGNS = [
  { brand: 'Olly Wellness',       line: 'Daily rituals, made charismatic.',         video: 'olly_wellness',   cat: 'Wellness',    year: '2025' },
  { brand: 'Cheers Health',       line: 'Wellness for the morning after.',          video: 'cheers_health',   cat: 'Wellness',    year: '2025' },
  { brand: 'Verano Hill',         line: 'A property launched into culture.',        video: 'verano_hill',     cat: 'Hospitality', year: '2025' },
  { brand: "Burleson's Honey",    line: 'A heritage pantry staple, reframed.',      video: 'burlesons_honey', cat: 'Food',        year: '2025' },
  { brand: 'Melting Pod',         line: 'A scent story for the season.',            video: 'melting_forest',  cat: 'Lifestyle',   year: '2025' },
];

const CATEGORIES = ['All', 'Wellness', 'Food', 'Lifestyle', 'Hospitality'];

function CaseTile({ brand, line, video, cat, year, fallbackPhoto }) {
  const [hovered, setHovered] = React.useState(false);
  const videoRef = React.useRef(null);
  const hasVideo = !!video && !!VIDEOS[video];

  React.useEffect(() => {
    if (!videoRef.current) return;
    if (hovered) videoRef.current.play().catch(() => {});
    else { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }, [hovered]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '4/5',
        overflow: 'hidden',
        background: 'var(--ink)',
        cursor: 'pointer',
      }}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          src={VIDEOS[video]}
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.8s var(--ease)',
          }}
        />
      ) : (
        <img loading="lazy" src={fallbackPhoto} alt="Collegare campaign still" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.8s var(--ease)',
        }}/>
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,10,7,0) 40%, rgba(15,10,7,0.85) 100%)',
        pointerEvents: 'none',
      }}/>

      {/* Top labels */}
      <div style={{
        position: 'absolute', top: 18, left: 18, right: 18,
        display: 'flex', justifyContent: 'space-between', gap: 12,
        color: 'var(--cream)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500,
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {hasVideo ? (
            <>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--crimson)',
                boxShadow: '0 0 0 3px rgba(139,13,0,0.3)',
                animation: 'pulse 2s ease-in-out infinite',
              }}/>
              Reel
            </>
          ) : (
            <span style={{ opacity: 0.85 }}>Reel — In production</span>
          )}
        </span>
        <span>{cat} — {year}</span>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 22, left: 22, right: 22,
        color: 'var(--cream)',
      }}>
        <div style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(32px, 3.6vw, 52px)',
          fontStyle: 'italic',
          letterSpacing: '-0.01em',
          lineHeight: 1,
          marginBottom: 12,
        }}>
          {brand}
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.4, opacity: 0.9, maxWidth: '38ch' }}>
          {line}
        </div>
      </div>
    </div>
  );
}

function CaseHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 60px', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
        <div className="index-label">
          <span className="num">i.</span><span>The Work</span>
        </div>
        <div className="small-caps" style={{ color: 'var(--ink-soft)' }}>Spring / 2026 — {ALL_CAMPAIGNS.length} campaigns shown</div>
      </div>
      <h1 className="display" style={{ fontSize: 'clamp(72px, 13vw, 220px)', lineHeight: 0.85, letterSpacing: '-0.03em' }}>
        The talent, <em>in action</em>.
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 60, marginTop: 40, alignItems: 'end' }}>
        <p className="body-lg" style={{ fontSize: 20 }}>
          Our roster works across wellness, beauty, food, hospitality, and lifestyle. We don't list creators by name —
          the work speaks louder. These are the partnerships defining our season:
          campaigns where the creator brings the audience and the brand brings the ambition, and we make sure both show up.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <img loading="lazy" src={talentAt(2)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
          <img loading="lazy" src={talentAt(5)} alt="Collegare roster talent" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        </div>
      </div>
    </section>
  );
}

// Editorial copy block between hero and carousel — adds depth without media weight
function TalentEthos() {
  const photos = React.useMemo(() => randomTalent(2), []);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">ii.</span><span>Our Ethos</span>
          </div>
          <img loading="lazy" src={photos[0]} alt="Collegare creator" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
        </div>
        <div>
          <p className="display" style={{ fontSize: 'clamp(32px, 4.4vw, 60px)', lineHeight: 1.1, letterSpacing: '-0.015em', marginBottom: 56 }}>
            We represent creators we'd want as friends, working on brands we'd want in our houses.
            The result is work that doesn't <em style={{ color: 'var(--crimson)' }}>look like advertising</em> — and audiences who can tell.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px 48px' }}>
            {[
              {
                t: 'Hand-picked roster',
                d: "Small on purpose. Every creator we sign is someone we want to build with for years — not someone we run through a campaign and lose track of.",
              },
              {
                t: 'Personalized strategy',
                d: "We develop and curate the social and content strategy for every creator individually. There is no template, no playbook we're running everyone through.",
              },
              {
                t: 'Brands that care',
                d: "We turn down brands that don't respect our talent. The brands we say yes to come back — because they get creative work that actually performs.",
              },
              {
                t: 'Wins are mutual',
                d: "Our creators' wins are our wins. Their growth is our growth. We act like partners because we are partners — not vendors with a percentage.",
              },
            ].map(b => (
              <div key={b.t} style={{ paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                <h3 className="display" style={{ fontSize: 26, letterSpacing: '-0.01em', marginBottom: 12, lineHeight: 1.1 }}>
                  <em style={{ color: 'var(--crimson)' }}>—</em> {b.t}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{b.d}</p>
              </div>
            ))}
          </div>

          {/* Single tasteful talent photo inserted asymmetrically */}
          <div style={{ marginTop: 56, display: 'flex', justifyContent: 'flex-end' }}>
            <img loading="lazy" src={photos[1]} alt="Collegare creator" style={{ width: '40%', aspectRatio: '4/5', objectFit: 'cover' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCarousel() {
  const scrollerRef = React.useRef(null);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const tileWidth = 'min(540px, 60vw)';

  // Pre-assign random talent photos as decorative covers for tiles without videos
  // (won't be used now since all 5 brands have videos — kept for safety)
  const fallbacks = React.useMemo(() => randomTalent(ALL_CAMPAIGNS.length), []);

  const scrollBy = (dir) => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const tile = sc.children[0];
    if (!tile) return;
    const w = tile.getBoundingClientRect().width + 12; // tile + gap
    sc.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  // Track which tile is centered for the index counter
  React.useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const onScroll = () => {
      const tile = sc.children[0];
      if (!tile) return;
      const w = tile.getBoundingClientRect().width + 12;
      const idx = Math.round(sc.scrollLeft / w);
      setActiveIdx(Math.max(0, Math.min(ALL_CAMPAIGNS.length - 1, idx)));
    };
    sc.addEventListener('scroll', onScroll, { passive: true });
    return () => sc.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ padding: '40px 0 var(--section)' }}>
      {/* Controls row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '0 var(--gutter)',
        marginBottom: 32,
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div className="small-caps" style={{ color: 'var(--ink-soft)' }}>
          The Work — <span style={{ color: 'var(--crimson)', fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, letterSpacing: 0, textTransform: 'none' }}>
            {String(activeIdx + 1).padStart(2, '0')}
          </span> / {String(ALL_CAMPAIGNS.length).padStart(2, '0')}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scrollBy(-1)} aria-label="Previous" style={arrowBtn}>←</button>
          <button onClick={() => scrollBy(1)} aria-label="Next" style={arrowBtn}>→</button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollerRef}
        style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingLeft: 'var(--gutter)',
          paddingRight: 'var(--gutter)',
          paddingBottom: 24,
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
        }}
        className="case-carousel"
      >
        {ALL_CAMPAIGNS.map((c, i) => (
          <div key={c.brand} style={{
            flex: `0 0 ${tileWidth}`,
            scrollSnapAlign: 'start',
          }}>
            <CaseTile {...c} fallbackPhoto={fallbacks[i]} />
          </div>
        ))}
      </div>

      {/* Drag hint */}
      <div style={{ padding: '0 var(--gutter)', marginTop: 16, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
        Scroll or drag to explore →
      </div>
    </section>
  );
}

const arrowBtn = {
  width: 48, height: 48, borderRadius: '50%',
  border: '1px solid var(--line)',
  background: 'transparent',
  color: 'var(--ink)',
  fontSize: 18,
  cursor: 'pointer',
  transition: 'all 0.25s var(--ease)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--display)',
};

function CaseCTA() {
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: '100px var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end' }}>
        <h2 className="display" style={{ fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.025em', lineHeight: 0.9 }}>
          Want to <em style={{ color: 'var(--cream-warm)' }}>be next</em>?
        </h2>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.9, marginBottom: 24 }}>
            We respond to every brief within 48 hours. Brand, creator, or manager — start the conversation.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="contact.html" className="btn btn--cream">Start a Project <span className="arrow">→</span></a>
            <a href="for-creators.html" className="btn" style={{ border: '1px solid rgba(254,252,240,0.3)', color: 'var(--cream)' }}>For Creators</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const TALENT_FAQS = [
  { q: 'Who do you represent?',
    a: "We work with a small, intentional roster of creators across wellness, beauty, food, hospitality, and lifestyle — selected for taste, audience trust, and the willingness to build a career rather than chase a campaign." },
  { q: 'How do I apply to join the roster?',
    a: "Through the application on our For Creators page. We review every submission personally and respond within two weeks — yes or no, always honestly." },
  { q: 'What kind of creator are you looking for?',
    a: "Rising creators with genuinely engaged communities. Engagement is what we look at, not raw follower count. If your audience trusts you and actually shows up, we want to talk." },
  { q: 'What does management actually include?',
    a: "Brand deals and negotiation, creative direction, content strategy, brand and IP development, PR, business development, and the back office — invoicing, contracts, and the things you shouldn't have to think about." },
  { q: 'How are you different from a bigger agency?',
    a: "Our priority is elevating your creator business — not adding another name to a roster. We're highly intentional about what we pitch you for, who we send your name to, and how we build your long-term brand. You're not a SKU on our list." },
  { q: 'Where are you based?',
    a: "We're based in Texas — our home base — and expanding soon. We work remotely with creators across the country, so location is never the gate." },
];

function CaseStudiesPage() {
  return (
    <div>
      <Nav current="Talent" />
      <main>
        <CaseHero />
        <TalentEthos />
        <CaseCarousel />
        <FAQ eyebrowNum="iii" items={TALENT_FAQS} />
        <CaseCTA />
      </main>
      <ByCreatorsMarquee />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CaseStudiesPage />);

const style = document.createElement('style');
style.textContent = `@keyframes pulse {0%,100%{opacity:1}50%{opacity:0.4}}`;
document.head.appendChild(style);

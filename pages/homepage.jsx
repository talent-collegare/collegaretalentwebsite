// Homepage — Revamped (Grail-inspired structure, Collegare editorial branding)
// Authoritative, metric-led, video-forward. Drop-in MP4s via VIDEOS object.

// =============================================================================
// DATA
// =============================================================================

// Hero tiles — homepage shows team + events + random talent photos.
// Brand campaign videos live ONLY on the Talent page.
// The largest tile is the team video.
const HERO_TILES = [
  { label: 'The House — Our Story', video: 'team_story',  kind: 'house' },
  { label: 'Events',                video: 'event_1' },
  { label: 'Events',                video: 'event_2' },
  { label: 'The Talent',            kind: 'photo' }, // randomized talent photo
  { label: 'The Talent',            kind: 'photo' },
];

// Press band → repurposed as brand strip (5 real partnerships with reels)
const PARTNERS = ['Olly Wellness', 'Verano Hill', 'Cheers Health', "Burleson's Honey", 'Melting Pod'];

// Case studies — 5 brand partnerships
const CASE_STUDIES = [
  { brand: 'Olly Wellness',       line: 'Daily rituals, made charismatic.',         video: 'olly_wellness',   cat: 'Wellness' },
  { brand: 'Cheers Health',       line: 'Wellness for the morning after.',          video: 'cheers_health',   cat: 'Wellness' },
  { brand: 'Verano Hill',         line: 'A property launched into culture.',        video: 'verano_hill',     cat: 'Hospitality' },
  { brand: "Burleson's Honey",    line: 'A heritage pantry staple, reframed.',      video: 'burlesons_honey', cat: 'Food' },
  { brand: 'Melting Pod',         line: 'A scent story for the season.',            video: 'melting_forest',  cat: 'Lifestyle' },
];

// Brand partners — selected partners wall
// Team (real Collegare team — Maya, Skylar, candid moment)
const TEAM_PREVIEW = [
  { name: 'Skylar',  role: 'Founder',   imgKey: 'skylar' },
  { name: 'Maya',    role: 'Founder',   imgKey: 'maya' },
  { name: 'The House', role: 'In studio', imgKey: 'candid' },
];

// =============================================================================
// MEDIA TILE — uses the video itself as the cover (a frame from inside the video).
// `seekTo` sets which second of the video to display when paused (default 0.5s,
// safely past any opening black frame so the creator/scene is visible).
// On hover, plays from that point. On exit, resets to that frame.
// If no `src` is provided, falls back to a photo (`photoSrc`).
// =============================================================================

function VideoTile({ src, photoSrc, label, brand, line, aspect = '4/5', houseTag = false, reelStatus = 'live', seekTo = 0.5 }) {
  const videoRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);

  // Seek to the cover frame as soon as metadata is loaded
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleMeta = () => {
      try { v.currentTime = seekTo; } catch (e) {}
    };
    v.addEventListener('loadedmetadata', handleMeta);
    return () => v.removeEventListener('loadedmetadata', handleMeta);
  }, [seekTo]);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) v.play().catch(() => {});
    else { v.pause(); try { v.currentTime = seekTo; } catch (e) {} }
  }, [hovered, seekTo]);

  const hasVideo = !!src;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: aspect,
        overflow: 'hidden',
        background: 'var(--ink)',
        cursor: 'pointer',
      }}
    >
      {/* Cover layer: either the video element (paused at cover frame) or a photo */}
      {hasVideo ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.8s var(--ease)',
          }}
        />
      ) : photoSrc ? (
        <img src={photoSrc} alt="Collegare creator portrait" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.8s var(--ease)',
        }}/>
      ) : (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, var(--crimson) 0%, var(--crimson-deep) 100%)',
        }}/>
      )}

      {/* Gradient overlay for legibility */}
      {(brand || line || label) && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(15,10,7,0.0) 45%, rgba(15,10,7,0.78) 100%)',
          pointerEvents: 'none',
        }}/>
      )}

      {/* Top labels */}
      <div style={{
        position: 'absolute', top: 16, left: 16, right: 16,
        display: 'flex', justifyContent: 'space-between', gap: 12,
        color: 'var(--cream)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500,
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {hasVideo && reelStatus === 'live' && (
            <>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--crimson)',
                boxShadow: '0 0 0 3px rgba(139,13,0,0.3)',
                animation: 'pulse 2s ease-in-out infinite',
              }}/>
              Reel
            </>
          )}
          {!hasVideo && reelStatus === 'coming' && <span style={{ opacity: 0.85 }}>Reel — In production</span>}
          {houseTag && !hasVideo && <span>The House</span>}
        </span>
        {label && <span style={{ textAlign: 'right' }}>{label}</span>}
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 18, left: 18, right: 18,
        color: 'var(--cream)',
      }}>
        {brand && (
          <div style={{
            fontFamily: 'var(--display)',
            fontSize: 28,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            lineHeight: 1,
            marginBottom: line ? 8 : 0,
          }}>
            {brand}
          </div>
        )}
        {line && (
          <div style={{ fontSize: 13, lineHeight: 1.35, opacity: 0.9, maxWidth: '34ch' }}>
            {line}
          </div>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// HERO — rotating creator grid + huge headline
// =============================================================================

function TypingShaping() {
  const word = 'shaping';
  const [text, setText] = React.useState(word);
  const [phase, setPhase] = React.useState('hold'); // 'typing' | 'hold' | 'erasing'

  React.useEffect(() => {
    let timer;
    if (phase === 'hold') {
      timer = setTimeout(() => setPhase('erasing'), 7000);
    } else if (phase === 'erasing') {
      if (text.length === 0) {
        timer = setTimeout(() => setPhase('typing'), 400);
      } else {
        timer = setTimeout(() => setText(text.slice(0, -1)), 70);
      }
    } else if (phase === 'typing') {
      if (text.length === word.length) {
        setPhase('hold');
      } else {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), 110);
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase]);

  return (
    <em style={{ position: 'relative', display: 'inline-block' }}>
      {text || '\u00A0'}
      <span style={{
        display: 'inline-block',
        width: '0.06em',
        height: '0.85em',
        background: 'var(--crimson)',
        marginLeft: 4,
        verticalAlign: 'baseline',
        animation: 'caretBlink 0.9s steps(2, start) infinite',
      }}/>
    </em>
  );
}

function Hero() {
  const [time, setTime] = React.useState('');
  // Curated photos for the homepage hero (4 selected by the team)
  const photos = REAL_PHOTOS.homepageHero;

  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }) + ' EST');
    };
    tick(); const id = setInterval(tick, 60000); return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      padding: '120px var(--gutter) 60px',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top meta row */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        gap: 40, alignItems: 'baseline',
        fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--ink-soft)',
        paddingBottom: 32,
        borderBottom: '1px solid var(--line-soft)',
      }}>
        <span>Est. 2025 — Texas</span>
        <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 15, textTransform: 'none', letterSpacing: 0, color: 'var(--crimson)' }}>
          The talent house for the cultural present.
        </span>
        <span style={{ textAlign: 'right' }}>{time} — New York</span>
      </div>

      {/* Headline */}
      <div style={{ padding: '48px 0 32px' }}>
        <h1 className="display" style={{
          fontSize: 'clamp(64px, 12vw, 200px)',
          lineHeight: 0.9,
          letterSpacing: '-0.025em',
        }}>
          The house for<br/>
          the creators<br/>
                    <TypingShaping /> what's next<span style={{ color: 'var(--crimson)' }}>.</span>
        </h1>
      </div>

      {/* Media grid — team video (left, spans 2 rows) + 4 talent photos (2×2). */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr 1fr',
        gridTemplateRows: 'repeat(2, auto)',
        gap: 10,
        marginBottom: 48,
      }}>
        <div style={{ gridRow: 'span 2' }}>
          <VideoTile src={VIDEOS.team_story} label="Our Story" aspect="3/4" />
        </div>
        <VideoTile photoSrc={photos[0]} label="The Talent" aspect="4/5" />
        <VideoTile photoSrc={photos[1]} label="The Talent" aspect="4/5" />
        <VideoTile photoSrc={photos[2]} label="The Talent" aspect="4/5" />
        <VideoTile photoSrc={photos[3]} label="The Talent" aspect="4/5" />
      </div>

      {/* Bottom intro + CTAs */}
      <div style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
        gap: 40, alignItems: 'end',
        paddingTop: 32, borderTop: '1px solid var(--line-soft)',
      }}>
        <p className="body-lg" style={{ fontSize: 20, color: 'var(--ink)', maxWidth: '52ch' }}>
          Collegare is a creator-first talent house and brand partnerships agency.
          We represent the voices defining wellness, beauty, food, and lifestyle —
          and we build the campaigns the rest of the industry studies later.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href="management.html" className="btn btn--primary">View the Work <span className="arrow">→</span></a>
          <a href="for-brands.html" className="btn btn--ghost">Start a Project</a>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 6 }}>In this issue</div>
          01. The house<br/>
          02. The team<br/>
          03. Selected campaigns<br/>
          04. Get in touch
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// PRESS BAND — "As featured in"
// =============================================================================

function PressBand() {
  // For Creators, By Creators — a marquee of curated talent photos
  const photos = REAL_PHOTOS.marquee;
  return (
    <section style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '60px 0 32px',
      background: 'var(--cream-warm)',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: '0 var(--gutter)', marginBottom: 40,
      }}>
        <div className="index-label">
          <span className="num">i.</span>
          <span>By Creators, For Creators</span>
        </div>
        <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--crimson)' }}>
          The faces of the house.
        </div>
      </div>

      {/* Marquee row */}
      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track" style={{ gap: 12, animationDuration: '60s' }}>
          {[...photos, ...photos].map((src, i) => (
            <img key={i} src={src} alt="Collegare creator" style={{
              width: 220, height: 280, objectFit: 'cover', flexShrink: 0,
              display: 'block',
            }}/>
          ))}
        </div>
      </div>

      <div style={{
        padding: '24px var(--gutter) 0',
        fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--ink-soft)',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>Wellness · Beauty · Food · Lifestyle · Hospitality</span>
        <a href="management.html" style={{ color: 'var(--crimson)' }}>View the Work →</a>
      </div>
    </section>
  );
}

// =============================================================================
// MISSION — service explanation w/ inline stats
// =============================================================================

function Mission() {
  const photos = React.useMemo(() => randomTalent(2), []);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 32 }}>
            <span className="num">i.</span><span>The House</span>
          </div>
          <img src={REAL_PHOTOS.team.candid} alt="The Collegare team in studio" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}/>
          <div style={{
            marginTop: 20,
            fontFamily: 'var(--display)',
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1.4,
            color: 'var(--ink-soft)',
          }}>
            <span style={{ color: 'var(--crimson)', fontSize: '1.4em', lineHeight: 1 }}>—</span><br/>
            <em style={{ color: 'var(--crimson)' }}>Collegare</em>, from the Italian, means <em>to connect</em>.
          </div>
        </div>

        <div>
          <p className="display" style={{ fontSize: 'clamp(32px, 4.4vw, 64px)', lineHeight: 1.08, letterSpacing: '-0.015em', marginBottom: 56 }}>
            Collegare connects creators with opportunity. We represent the voices defining wellness, beauty, food, and lifestyle —
            and we build the campaigns the rest of the industry <em style={{ color: 'var(--crimson)' }}>studies later</em>.
          </p>

          {/* Origin story */}
          <div style={{ marginBottom: 56, paddingBottom: 40, borderBottom: '1px solid var(--line)' }}>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 16 }}>The Origin</div>
          <p style={{ fontFamily: 'var(--display)', fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.35, letterSpacing: '-0.005em', maxWidth: '42ch', marginBottom: 24 }}>
            <span style={{ color: 'var(--crimson)', fontSize: '1.6em', fontStyle: 'italic', float: 'left', lineHeight: 0.9, marginRight: 12, marginTop: 4 }}>W</span>
            e build your creator business and connect you to the right brands that care.
            We develop and curate a personalized social and content strategy — because as partners, we treat you as such.
            Your wins are <em style={{ color: 'var(--crimson)' }}>our wins</em>.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '56ch' }}>
            We sit between talent and brands as manager, agency, producer, and second opinion. We think in seasons,
            not campaigns. We say no often. And we believe the next chapter of culture will be built by the creators
            working right now — the ones who know their audience by name, and the ones who haven't stopped caring yet.
          </p>
          </div>

          {/* Pillars w/ talent photo insert */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 56, alignItems: 'start' }}>
            <img src={REAL_PHOTOS.events[4]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', marginTop: 80 }}/>
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
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 32 }}>
                A small team with experience that compounds. Built to actually answer the phone,
                not pass you to a junior account manager.
              </p>
              <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 16 }}>03 — Community by design</div>
              <h3 className="display" style={{ fontSize: 32, marginBottom: 16, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
                A creator network we curate.
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Our creator community is built deliberately, in person and online — through dinners,
                workshops, and the <a href="events.html" style={{ color: 'var(--crimson)', textDecoration: 'underline' }}>Collegare On Tour</a> event series.
                Real rooms, real relationships, the work that doesn't show up in a follower count.
              </p>
            </div>
          </div>

          {/* House principles */}
          <div>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 24 }}>House Principles</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 60px' }}>
              {[
                ['Taste over tonnage', 'One creator done right beats ten done fast.'],
                ['Careers over campaigns', 'We think in decades.'],
                ['Proximity is the job', 'If you can\u2019t reach us Saturday, we\u2019re doing it wrong.'],
                ['Small by design', 'We\u2019ll stay small. That\u2019s a feature.'],
              ].map(([t, d]) => (
                <div key={t} style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.005em' }}>
                    — {t}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// CASE STUDIES — video tile grid w/ brand overlays
// =============================================================================

function CaseStudies() {
  const scrollerRef = React.useRef(null);
  const [activeIdx, setActiveIdx] = React.useState(0);

  // Per-tile hover state so videos play on hover
  const videoRefs = React.useRef([]);

  const scrollBy = (dir) => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const tile = sc.children[0];
    if (!tile) return;
    const w = tile.getBoundingClientRect().width + 12;
    sc.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const onScroll = () => {
      const tile = sc.children[0];
      if (!tile) return;
      const w = tile.getBoundingClientRect().width + 12;
      const idx = Math.round(sc.scrollLeft / w);
      setActiveIdx(Math.max(0, Math.min(CASE_STUDIES.length - 1, idx)));
    };
    sc.addEventListener('scroll', onScroll, { passive: true });
    return () => sc.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{ background: 'var(--cream-warm)', color: 'var(--ink)', padding: 'var(--section) 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ padding: '0 var(--gutter)', marginBottom: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24 }}>
          <div>
            <div className="index-label" style={{ marginBottom: 16 }}>
              <span className="num">iii.</span>
              <span>Selected Work</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 130px)', letterSpacing: '-0.025em', lineHeight: 0.88 }}>
              Campaigns in <em style={{ color: 'var(--crimson)' }}>motion</em>.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => scrollBy(-1)} aria-label="Previous" style={{
              width: 52, height: 52, borderRadius: '50%',
              border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)',
              fontSize: 20, cursor: 'pointer', transition: 'all 0.25s var(--ease)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--crimson)'; e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.borderColor = 'var(--crimson)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >←</button>
            <button onClick={() => scrollBy(1)} aria-label="Next" style={{
              width: 52, height: 52, borderRadius: '50%',
              border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)',
              fontSize: 20, cursor: 'pointer', transition: 'all 0.25s var(--ease)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--crimson)'; e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.borderColor = 'var(--crimson)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >→</button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: '46ch', lineHeight: 1.55 }}>
            Five campaigns this season. Drag, scroll, or use the arrows to explore — hover any tile to play the reel.
          </p>
          <div className="small-caps" style={{ color: 'var(--ink-soft)' }}>
            <span style={{ color: 'var(--crimson)', fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, letterSpacing: 0, textTransform: 'none' }}>
              {String(activeIdx + 1).padStart(2, '0')}
            </span> / {String(CASE_STUDIES.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollerRef}
        className="case-carousel"
        style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingLeft: 'var(--gutter)',
          paddingRight: 'var(--gutter)',
          paddingBottom: 8,
          scrollBehavior: 'smooth',
        }}
      >
        {CASE_STUDIES.map(cs => (
          <div key={cs.brand} style={{
            flex: '0 0 min(540px, 65vw)',
            scrollSnapAlign: 'start',
          }}>
            <VideoTile src={VIDEOS[cs.video]} brand={cs.brand} line={cs.line} label={cs.cat} aspect="4/5" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Moments() {
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'end', marginBottom: 32 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 16 }}>
            <span className="num">ii.</span><span>A Moment</span>
          </div>
          <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 32, color: 'var(--crimson)', lineHeight: 1.1, marginTop: 24 }}>
            From the house —<br/>{new Date().toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}.
          </div>
        </div>
      </div>
      <img src={REAL_PHOTOS.events[0]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '21/9', objectFit: 'cover' }}/>
    </section>
  );
}

// =============================================================================
// TEAM PREVIEW — small grid w/ link to About
// =============================================================================

function Team() {
  return (
    <section style={{ padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">iii.</span><span>The Team</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5.5vw, 84px)', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
            A small <em style={{ color: 'var(--crimson)' }}>house</em>, on purpose.
          </h2>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: '52ch' }}>
          Collegare is founded and led by Skylar and Maya — operators with deep relationships across talent, brands, and platforms.
          The team is intentionally small, and built to stay that way.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 760 }}>
        {[
          { name: 'Maya',   role: 'Co-founder, COO', imgKey: 'maya' },
          { name: 'Skylar', role: 'Co-founder, CMO', imgKey: 'skylar' },
        ].map(t => (
          <div key={t.name} style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={REAL_PHOTOS.team[t.imgKey]} alt={t.name} style={{
              width: '100%', aspectRatio: '4/5', objectFit: 'cover',
            }}/>
            <div style={{
              position: 'absolute', bottom: 18, left: 18, right: 18,
              color: 'var(--cream)',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 36, fontStyle: 'italic', letterSpacing: '-0.01em', lineHeight: 1 }}>
                {t.name}
              </div>
              <div className="small-caps" style={{ marginTop: 6, fontSize: 10 }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// IN NUMBERS — big stats
// =============================================================================

function InNumbers() {
  const stats = [
    { v: '10+',  k: 'Flagship brand partnerships',         d: 'Across wellness, beauty, food, hospitality, and lifestyle.' },
    { v: '3',    k: 'Creator community events, produced',  d: 'Dinners, immersions, and rooms our talent actually want to be in.' },
    { v: '2025', k: 'The year we started',                 d: "Built to think in decades, not quarters." },
  ];
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 64 }}>
        <div>
          <div className="index-label" style={{ color: 'rgba(254,252,240,0.7)', marginBottom: 20 }}>
            <span className="num" style={{ color: 'var(--cream-warm)' }}>iv.</span>
            <span>In Numbers</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 8.5vw, 130px)', letterSpacing: '-0.025em', lineHeight: 0.92 }}>
            The work, <em style={{ color: 'var(--cream-warm)' }}>quantified</em>.
          </h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, opacity: 0.88, maxWidth: '52ch' }}>
          Numbers don't make the work — but they tell the truth about the shape of it.
          This is where Collegare is, this season.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid rgba(254,252,240,0.3)' }}>
        {stats.map((s, i) => (
          <div key={s.k} style={{
            padding: '40px 32px 40px 0',
            borderRight: i < stats.length - 1 ? '1px solid rgba(254,252,240,0.2)' : 'none',
            paddingLeft: i > 0 ? 32 : 0,
            display: 'flex', flexDirection: 'column',
          }}>
            <div className="display" style={{
              fontSize: 'clamp(72px, 10vw, 160px)',
              lineHeight: 0.9,
              letterSpacing: '-0.035em',
              marginBottom: 20,
            }}>
              {s.v}
            </div>
            <div style={{
              fontFamily: 'var(--display)',
              fontStyle: 'italic',
              fontSize: 22,
              letterSpacing: '-0.005em',
              lineHeight: 1.2,
              color: 'var(--cream-warm)',
              marginBottom: 12,
            }}>
              {s.k}
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.55, opacity: 0.78, maxWidth: '32ch' }}>
              {s.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// CONNECT — abbreviated form CTA
// =============================================================================

function Connect() {
  const [type, setType] = React.useState('Brand');

  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">vi.</span><span>Get in Touch</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 120px)', letterSpacing: '-0.025em', lineHeight: 0.9, marginBottom: 32 }}>
            Let's <em>talk</em>.
          </h2>
          <p className="body-lg" style={{ fontSize: 18, marginBottom: 32 }}>
            Whether you're a creator searching for management, a brand planning their next campaign, or a manager looking to join the team — we'd like to hear from you.
          </p>
          <div style={{ paddingTop: 24, borderTop: '1px solid var(--line)', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 8 }}>Direct</div>
            <a href="mailto:contact@collegaretalentmanagement.com" style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--crimson)' }}>contact@collegaretalentmanagement.com</a>
          </div>
        </div>

        <form onSubmit={e => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = `Collegare inquiry — ${type}`;
          const body = [
            `Type: ${type}`,
            `Name: ${data.get('name') || ''}`,
            `Organization: ${data.get('org') || ''}`,
            `Email: ${data.get('email') || ''}`,
            `Role: ${data.get('role') || ''}`,
            '',
            'Brief:',
            data.get('brief') || '',
          ].join('\n');
          window.location.href = `mailto:contact@collegaretalentmanagement.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }}>
          <div style={{ marginBottom: 32 }}>
            <div className="small-caps" style={{ marginBottom: 16, color: 'var(--ink-soft)' }}>Application Type</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Creator', 'Brand', 'Manager', 'Press', 'Other'].map(t => (
                <button type="button" key={t} onClick={() => setType(t)} style={{
                  padding: '12px 22px',
                  fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
                  border: '1px solid ' + (type === t ? 'var(--crimson)' : 'var(--line)'),
                  background: type === t ? 'var(--crimson)' : 'transparent',
                  color: type === t ? 'var(--cream)' : 'var(--ink)',
                  borderRadius: 999,
                  transition: 'all 0.25s var(--ease)',
                }}>{t}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 32px', marginBottom: 32 }}>
            {[
              { label: 'Name', name: 'name' },
              { label: type === 'Creator' ? 'Handle' : type === 'Brand' ? 'Company' : type === 'Press' ? 'Publication' : 'Organization', name: 'org' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: type === 'Creator' ? 'Platform' : 'Role', name: 'role' },
            ].map(f => (
              <div key={f.name}>
                <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 6, display: 'block' }}>{f.label}</label>
                <input name={f.name} type={f.type || 'text'} style={{
                  width: '100%', background: 'transparent', border: 'none',
                  borderBottom: '1px solid var(--line)', padding: '12px 0',
                  fontSize: 15, fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none',
                }}/>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 32 }}>
            <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 500, marginBottom: 6, display: 'block' }}>The Brief</label>
            <textarea name="brief" style={{
              width: '100%', background: 'transparent', border: 'none',
              borderBottom: '1px solid var(--line)', padding: '12px 0',
              fontSize: 15, fontFamily: 'var(--body)', color: 'var(--ink)', outline: 'none',
              minHeight: 80, resize: 'vertical', lineHeight: 1.55,
            }} placeholder={`Tell us about your ${type.toLowerCase()} inquiry — we respond within 48 hours.`}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>We read every submission.</div>
            <button type="submit" className="btn btn--primary">Submit <span className="arrow">→</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}

// =============================================================================
// PAGE
// =============================================================================

function HomePage() {
  return (
    <div>
      <Nav current="" />
      <main>
        <Hero />
        <Mission />
        <Moments />
        <Team />
        <InNumbers />
        <SelectedWorkCarousel eyebrowNum="v" headline="Campaigns in motion." />
        <Connect />
        <ByCreatorsMarquee />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

// Inject pulse keyframe for the Reel indicator
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
`;
document.head.appendChild(style);

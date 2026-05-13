// Shared "Selected Work" carousel — same component used on homepage, talent,
// brands, managers, and contact pages (right before footer).
// Shows Collegare's top 3 brand campaigns.

const TOP_CAMPAIGNS = [
  { brand: 'Olly Wellness', line: 'Daily rituals, made charismatic.',     video: 'olly_wellness',  cat: 'Wellness' },
  { brand: 'Cheers Health', line: 'Wellness for the morning after.',      video: 'cheers_health',  cat: 'Wellness' },
  { brand: 'Melting Pod',   line: 'A scent story for the season.',        video: 'melting_forest', cat: 'Lifestyle' },
];

function CarouselTile({ video, brand, line, cat }) {
  const ref = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  React.useEffect(() => {
    const v = ref.current; if (!v) return;
    const m = () => { try { v.currentTime = 0.5; } catch(e){} };
    v.addEventListener('loadedmetadata', m);
    return () => v.removeEventListener('loadedmetadata', m);
  }, []);
  React.useEffect(() => {
    const v = ref.current; if (!v) return;
    if (hovered) v.play().catch(()=>{}); else { v.pause(); try { v.currentTime = 0.5; } catch(e){} }
  }, [hovered]);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--ink)', cursor: 'pointer' }}>
      <video ref={ref} src={VIDEOS[video]} muted loop playsInline preload="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.8s var(--ease)' }}/>
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,10,7,0) 45%, rgba(15,10,7,0.78) 100%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16,
        display: 'flex', justifyContent: 'space-between',
        color: 'var(--cream)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--crimson)',
            boxShadow: '0 0 0 3px rgba(139,13,0,0.3)', animation: 'pulse 2s ease-in-out infinite' }}/>
          Reel
        </span>
        <span>{cat}</span>
      </div>
      <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, color: 'var(--cream)' }}>
        <div style={{ fontFamily: 'var(--display)', fontSize: 32, fontStyle: 'italic', letterSpacing: '-0.01em', lineHeight: 1, marginBottom: 8 }}>
          {brand}
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.35, opacity: 0.9, maxWidth: '32ch' }}>
          {line}
        </div>
      </div>
    </div>
  );
}

function SelectedWorkCarousel({ eyebrowNum = 'iii', headline = 'Campaigns in motion.' }) {
  const scrollerRef = React.useRef(null);
  const [activeIdx, setActiveIdx] = React.useState(0);

  const scrollByDir = (dir) => {
    const sc = scrollerRef.current;
    if (!sc) return;
    const tile = sc.children[0];
    if (!tile) return;
    const w = tile.getBoundingClientRect().width + 12;
    sc.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const sc = scrollerRef.current; if (!sc) return;
    const onScroll = () => {
      const tile = sc.children[0]; if (!tile) return;
      const w = tile.getBoundingClientRect().width + 12;
      const idx = Math.round(sc.scrollLeft / w);
      setActiveIdx(Math.max(0, Math.min(TOP_CAMPAIGNS.length - 1, idx)));
    };
    sc.addEventListener('scroll', onScroll, { passive: true });
    return () => sc.removeEventListener('scroll', onScroll);
  }, []);

  const arrowBtn = {
    width: 52, height: 52, borderRadius: '50%',
    border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)',
    fontSize: 20, cursor: 'pointer', transition: 'all 0.25s var(--ease)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--display)',
  };

  return (
    <section style={{ background: 'var(--cream-warm)', padding: 'var(--section) 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ padding: '0 var(--gutter)', marginBottom: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div className="index-label" style={{ marginBottom: 16 }}>
              <span className="num">{eyebrowNum}.</span><span>Selected Work</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', letterSpacing: '-0.025em', lineHeight: 0.92 }}>
              {headline.split(' ').slice(0, -1).join(' ')} <em style={{ color: 'var(--crimson)' }}>{headline.split(' ').slice(-1)[0].replace(/[.,!?]$/, '')}</em>{headline.match(/[.,!?]$/)?.[0] || ''}
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => scrollByDir(-1)} aria-label="Previous" style={arrowBtn}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--crimson)'; e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.borderColor = 'var(--crimson)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >←</button>
            <button onClick={() => scrollByDir(1)} aria-label="Next" style={arrowBtn}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--crimson)'; e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.borderColor = 'var(--crimson)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
            >→</button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', maxWidth: '50ch', lineHeight: 1.55 }}>
            A look at the work moving culture this season — hover any tile to play the reel.
          </p>
          <div className="small-caps" style={{ color: 'var(--ink-soft)' }}>
            <span style={{ color: 'var(--crimson)', fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, letterSpacing: 0, textTransform: 'none' }}>
              {String(activeIdx + 1).padStart(2, '0')}
            </span> / {String(TOP_CAMPAIGNS.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div ref={scrollerRef} className="case-carousel"
        style={{
          display: 'flex', gap: 12,
          overflowX: 'auto', scrollSnapType: 'x mandatory',
          paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)', paddingBottom: 8,
          scrollBehavior: 'smooth',
        }}>
        {TOP_CAMPAIGNS.map(c => (
          <div key={c.brand} style={{ flex: '0 0 min(480px, 58vw)', scrollSnapAlign: 'start' }}>
            <CarouselTile {...c} />
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { SelectedWorkCarousel, TOP_CAMPAIGNS, ByCreatorsMarquee });

// =============================================================================
// BY CREATORS, FOR CREATORS — marquee of curated talent photos
// Used at the bottom of every page (above SelectedWorkCarousel + Footer).
// =============================================================================

function ByCreatorsMarquee({ hideHeader = false, showSubhead = true }) {
  const photos = REAL_PHOTOS.marquee;
  return (
    <section style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      padding: '60px 0 32px',
      background: 'var(--cream)',
      overflow: 'hidden',
    }}>
      {!hideHeader && (
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: '0 var(--gutter)', marginBottom: 40, gap: 24, flexWrap: 'wrap',
        }}>
          <div className="index-label">
            <span className="num">—</span>
            <span>By Creators, For Creators</span>
          </div>
          {showSubhead && (
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--crimson)' }}>
              The faces of the house.
            </div>
          )}
        </div>
      )}

      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track" style={{ gap: 12, animationDuration: '60s' }}>
          {[...photos, ...photos].map((src, i) => (
            <img key={i} src={src} alt="" style={{
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
        display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
      }}>
        <span>Wellness · Beauty · Food · Lifestyle · Hospitality</span>
        <a href="management.html" style={{ color: 'var(--crimson)' }}>View the Work →</a>
      </div>
    </section>
  );
}

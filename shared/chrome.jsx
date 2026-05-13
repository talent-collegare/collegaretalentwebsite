// Shared nav + footer for Collegare Talent site

const NAV_LINKS = [
  { label: 'Talent', href: 'management.html' },
  { label: 'Brands', href: 'for-brands.html' },
  { label: 'Managers', href: 'managers.html' },
  { label: 'On Tour', href: 'events.html' },
];

function Logo({ color = 'var(--ink)', subtitle = 'Talent' }) {
  return (
    <a href="index.html" aria-label="Collegare home" style={{ display: 'flex', alignItems: 'center', gap: 12, color }}>
      <img loading="lazy" src="shared/collegare-logo.gif" alt="Collegare" style={{
        height: 36,
        width: 'auto',
        display: 'block',
        // mix-blend keeps the gif readable on light cream + dark nav backgrounds
        filter: color === 'var(--cream)' ? 'invert(1)' : 'none',
      }}/>
      <span style={{
        fontSize: 9,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        fontWeight: 500,
        opacity: 0.6,
        borderLeft: '1px solid currentColor',
        paddingLeft: 12,
        alignSelf: 'stretch',
        display: 'flex',
        alignItems: 'center',
      }}>
        {subtitle}
      </span>
    </a>
  );
}

function Nav({ variant = 'light', current = '' }) {
  const dark = variant === 'dark';
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: scrolled ? '14px var(--gutter)' : '22px var(--gutter)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.4s var(--ease)',
    background: scrolled
      ? (dark ? 'rgba(15,10,7,0.92)' : 'rgba(254,252,240,0.92)')
      : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: scrolled ? `1px solid ${dark ? 'rgba(254,252,240,0.1)' : 'var(--line-soft)'}` : '1px solid transparent',
    color: dark ? 'var(--cream)' : 'var(--ink)',
  };

  return (
    <>
      <nav style={navStyle}>
        <Logo color="currentColor" subtitle={current || 'Talent'} />

        <div className="nav-desktop" style={{
          display: 'flex',
          gap: 34,
          alignItems: 'center',
          fontSize: 13,
          letterSpacing: '0.02em',
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              position: 'relative',
              opacity: current === l.label ? 1 : 0.72,
              fontWeight: current === l.label ? 500 : 400,
              transition: 'opacity 0.3s',
            }}
               onMouseEnter={e => e.currentTarget.style.opacity = 1}
               onMouseLeave={e => e.currentTarget.style.opacity = current === l.label ? 1 : 0.72}
            >
              {l.label}
              {current === l.label && (
                <span style={{
                  position: 'absolute', bottom: -6, left: 0, right: 0, height: 1,
                  background: 'var(--crimson)',
                }}/>
              )}
            </a>
          ))}
        </div>

        <a href="contact.html" className="btn btn--primary nav-desktop-cta" style={{ padding: '10px 18px', fontSize: 11 }}>
          Connect <span className="arrow">→</span>
        </a>

        <button
          className="nav-hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          style={{
            width: 44, height: 44,
            display: 'none',
            alignItems: 'center', justifyContent: 'center',
            color: 'currentColor',
          }}
        >
          <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ width: 22, height: 1.5, background: 'currentColor' }}/>
            <span style={{ width: 22, height: 1.5, background: 'currentColor' }}/>
            <span style={{ width: 22, height: 1.5, background: 'currentColor' }}/>
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-overlay" style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'var(--cream)',
          color: 'var(--ink)',
          display: 'flex', flexDirection: 'column',
          padding: '20px var(--gutter) 32px',
          overflowY: 'auto',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 56 }}>
            <Logo color="var(--ink)" subtitle={current || 'Talent'} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: 44, height: 44,
                border: '1px solid var(--line)', borderRadius: '50%',
                fontSize: 22, lineHeight: 1, color: 'var(--ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
            {[...NAV_LINKS, { label: 'Contact', href: 'contact.html' }].map(l => {
              const active = current === l.label;
              return (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(40px, 11vw, 72px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  padding: '12px 0',
                  borderBottom: '1px solid var(--line)',
                  color: active ? 'var(--crimson)' : 'var(--ink)',
                  fontStyle: active ? 'italic' : 'normal',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                }}>
                  <span>{l.label}</span>
                  <span style={{ fontSize: 18, opacity: 0.5 }}>→</span>
                </a>
              );
            })}
          </nav>

          <div style={{ paddingTop: 32, marginTop: 24, borderTop: '1px solid var(--line)' }}>
            <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 8, fontSize: 10 }}>Direct</div>
            <a href="mailto:contact@collegaretalentmanagement.com"
               style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 20, color: 'var(--crimson)' }}>
              contact@collegaretalentmanagement.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Footer({ dark = false }) {
  const bg = dark ? 'var(--ink)' : 'var(--crimson-ink)';
  const fg = 'var(--cream)';

  return (
    <footer style={{ background: bg, color: fg, padding: '80px var(--gutter) 36px' }}>
      {/* Massive wordmark */}
      <div style={{
        fontFamily: 'var(--display)',
        fontSize: 'clamp(80px, 16vw, 260px)',
        lineHeight: 0.85,
        letterSpacing: '-0.02em',
        marginBottom: 60,
        borderBottom: '1px solid rgba(254,252,240,0.18)',
        paddingBottom: 40,
      }}>
        Collegare<span style={{ fontStyle: 'italic', color: 'var(--cream-warm)', opacity: 0.7 }}>.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 60 }}>
        <div>
          <div className="eyebrow" style={{ color: 'rgba(254,252,240,0.6)', marginBottom: 16 }}>Index — A</div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 28, lineHeight: 1.2, maxWidth: 420 }}>
            A talent house representing the creators who <em style={{ color: 'var(--cream-warm)' }}>shape</em> what comes next.
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'rgba(254,252,240,0.6)', marginBottom: 16 }}>Offices</div>
          <div style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.85 }}>
            Texas<br/>
            New York
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'rgba(254,252,240,0.6)', marginBottom: 16 }}>Directory</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            {NAV_LINKS.map(l => <a key={l.href} href={l.href} style={{ opacity: 0.85 }}>{l.label}</a>)}
            <a href="contact.html" style={{ opacity: 0.85 }}>Contact</a>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'rgba(254,252,240,0.6)', marginBottom: 16 }}>Follow</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            <a href="https://instagram.com/collegare" target="_blank" rel="noopener" style={{ opacity: 0.85 }}>Instagram</a>
            <a href="https://tiktok.com/@collegare" target="_blank" rel="noopener" style={{ opacity: 0.85 }}>TikTok</a>
            <a href="https://linkedin.com/company/collegare" target="_blank" rel="noopener" style={{ opacity: 0.85 }}>LinkedIn</a>
            <a href="mailto:contact@collegaretalentmanagement.com" style={{ opacity: 0.85 }}>Email</a>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 24,
        borderTop: '1px solid rgba(254,252,240,0.12)',
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        opacity: 0.6,
      }}>
        <span>© 2026 Collegare LLC</span>
        <span>Est. 2025 — Texas</span>
        <span>contact@collegaretalentmanagement.com</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Logo, Nav, Footer, NAV_LINKS });

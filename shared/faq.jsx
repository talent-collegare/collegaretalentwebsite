// Reusable FAQ accordion — used on Talent, Brands, Managers pages

function FAQ({ eyebrowNum = 'vi', items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">{eyebrowNum}.</span><span>Frequently Asked</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(42px, 5.5vw, 80px)', letterSpacing: '-0.02em', lineHeight: 0.95 }}>
            FAQ<em style={{ color: 'var(--crimson)' }}>'s</em>.
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 24, maxWidth: 340 }}>
            Quick answers. For anything else, write to us directly.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} style={{ borderBottom: '1px solid var(--line)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 24,
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                }}>
                  <span className="display" style={{
                    fontSize: 'clamp(22px, 2.6vw, 32px)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    color: isOpen ? 'var(--crimson)' : 'var(--ink)',
                    fontStyle: isOpen ? 'italic' : 'normal',
                    transition: 'all 0.25s var(--ease)',
                  }}>
                    {it.q}
                  </span>
                  <span style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: '1px solid var(--line)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18,
                    color: isOpen ? 'var(--crimson)' : 'var(--ink)',
                    transition: 'all 0.25s var(--ease)',
                    flexShrink: 0,
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 600 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.45s var(--ease), padding 0.3s var(--ease)',
                  paddingBottom: isOpen ? 28 : 0,
                }}>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: '60ch' }}>
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });

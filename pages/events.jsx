// Events — Collegare On Tour 2026

const EVENTS = [
  {
    num: '01',
    month: 'JUNE',
    year: '2026',
    city: 'Miami',
    state: 'Florida',
    title: 'Rise & Glow',
    subtitle: 'Wellness Creator Morning on the Water',
    desc: 'Sunrise pilates on a chartered yacht, followed by a brunch panel and wellness brand gifting suite. 50 creators max. Wellness, beauty, and lifestyle focus. Every moment is a reel — the venue IS the content opportunity.',
    venue: 'Chartered yacht, Biscayne Bay',
    format: 'Morning · 7:30 AM – 12:30 PM',
    cap: '50 creators max',
    ticket: '$75 · $120 VIP',
    status: 'next',
    statusLabel: 'Next Up — RSVP soon',
    rsvp: 'https://lu.ma/collegare-miami', // placeholder Luma link
    photo: 'miami',
  },
  {
    num: '02',
    month: 'SEPTEMBER',
    year: '2026',
    city: 'New York',
    state: 'New York',
    title: 'The Brief',
    subtitle: 'Creator × Brand Strategy Day',
    desc: 'The most business-forward event on the tour. A brand does a live "brief reveal" on stage — real budgets, real briefs, real feedback on what creators pitch wrong. Brand speed dating in the afternoon. Cocktail close. 50–75 creators.',
    venue: 'SoHo loft or Chelsea gallery',
    format: 'Daytime + Evening · 11 AM – 7 PM',
    cap: '50–75 creators + brand reps',
    ticket: '$85 · $150 VIP · $175 Brand Delegate',
    status: 'soon',
    statusLabel: 'Coming Soon',
    photo: 'nyc',
  },
  {
    num: '03',
    month: 'OCTOBER',
    year: '2026',
    city: 'Dallas',
    state: 'Texas',
    title: 'Build Bold',
    subtitle: 'Creator Business Day',
    desc: 'A full-day creator event combining a hands-on platform strategy workshop with brand activation stations and a networking happy hour close. Practical, social, and brand-connected — the most well-rounded event on the tour.',
    venue: 'Creative studio or loft, Deep Ellum',
    format: 'Daytime + Evening · 10 AM – 6 PM',
    cap: '75–100 creators',
    ticket: '$55 · $95 VIP',
    status: 'soon',
    statusLabel: 'Coming Soon',
    photo: 'dallas',
  },
  {
    num: '04',
    month: 'NOVEMBER',
    year: '2026',
    city: 'Los Angeles',
    state: 'California',
    title: 'The Golden Hour',
    subtitle: 'Fall Fashion & Style Day',
    desc: 'A fall fashion and style activation with styled brand stations, a gifting suite, and a panel on growing as a creator through the industry\'s shifting landscape. Fashion, lifestyle, and beauty creators. 75–100 people. The most visually editorial event on the tour.',
    venue: 'Studio space + rooftop, Culver City or DTLA',
    format: 'Daytime → Golden Hour · 11 AM – 7 PM',
    cap: '75–100 creators',
    ticket: '$65 · $110 VIP',
    status: 'soon',
    statusLabel: 'Coming Soon',
    photo: 'la',
  },
];

function EventsHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 0', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">i.</span><span>Collegare On Tour — 2026</span>
      </div>
      <h1 className="display" style={{ fontSize: 'clamp(72px, 13vw, 220px)', lineHeight: 0.85, letterSpacing: '-0.03em', marginBottom: 48 }}>
        Four cities. <em style={{ color: 'var(--crimson)' }}>One tour</em>.
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 40, alignItems: 'end', paddingTop: 40, borderTop: '1px solid var(--line-soft)', marginBottom: 60 }}>
        <p className="body-lg" style={{ fontSize: 19 }}>
          Collegare On Tour is our 2026 creator event series — four intimate, fully themed events of 50–100 people each,
          built around the wellness, brand strategy, creator business, and fashion communities. Every activation
          has a specific concept. Every brand interaction is real. Every creator walks away with content,
          connections, and something they actually learned.
        </p>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 6 }}>Year One Vision</div>
          Start intimate.<br/>
          Do it exceptionally well.<br/>
          Build for year two.
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 6 }}>The Tour</div>
          01. Miami — June<br/>
          02. New York — September<br/>
          03. Dallas — October<br/>
          04. Los Angeles — November
        </div>
      </div>

      {/* Hero image strip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        <img loading="lazy" src={REAL_PHOTOS.eventHero[0]} alt="Collegare On Tour event" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.eventHero[1]} alt="Collegare On Tour event" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.eventHero[2]} alt="Collegare On Tour event" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
      </div>
    </section>
  );
}

function EventCard({ ev, featured }) {
  const photo = REAL_PHOTOS.eventByCity[ev.photo] || REAL_PHOTOS.events[0];
  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: featured ? '1.2fr 1fr' : '1fr 1.4fr',
      gap: 0,
      borderTop: '1px solid var(--ink)',
      background: featured ? 'var(--cream-warm)' : 'transparent',
    }}>
      {/* Image side */}
      <div style={{ position: 'relative', minHeight: 460, overflow: 'hidden' }}>
        <img loading="lazy" src={photo} alt={`Collegare On Tour — ${ev.city}, ${ev.month} ${ev.year}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        {ev.status === 'next' && (
          <div style={{
            position: 'absolute', top: 24, left: 24,
            background: 'var(--crimson)', color: 'var(--cream)',
            padding: '8px 14px',
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: 'var(--cream)',
              animation: 'pulse 2s ease-in-out infinite',
            }}/>
            {ev.statusLabel}
          </div>
        )}
        {ev.status === 'soon' && (
          <div style={{
            position: 'absolute', top: 24, left: 24,
            background: 'rgba(254,252,240,0.95)', color: 'var(--ink-soft)',
            padding: '8px 14px',
            fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500,
          }}>
            {ev.statusLabel}
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24,
          color: 'var(--cream)', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
          <div className="small-caps" style={{ marginBottom: 6, fontSize: 11 }}>{ev.month} · {ev.year}</div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 6vw, 88px)', fontStyle: 'italic', letterSpacing: '-0.015em', lineHeight: 0.95 }}>
            {ev.city}
          </div>
        </div>
      </div>

      {/* Content side */}
      <div style={{ padding: '48px 48px 56px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
          <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 32, color: 'var(--crimson)', lineHeight: 1 }}>{ev.num}</span>
          <span className="small-caps" style={{ color: 'var(--ink-soft)' }}>{ev.state}</span>
        </div>

        <h3 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 12 }}>
          {ev.title}<span style={{ color: 'var(--crimson)' }}>.</span>
        </h3>
        <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink-soft)', marginBottom: 28, letterSpacing: '-0.005em' }}>
          — {ev.subtitle}
        </div>

        <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 32, maxWidth: '54ch' }}>
          {ev.desc}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: 32, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          {[
            ['Format', ev.format],
            ['Venue', ev.venue],
            ['Capacity', ev.cap],
            ['Ticket', ev.ticket],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="small-caps" style={{ color: 'var(--ink-soft)', marginBottom: 4, fontSize: 10 }}>{k}</div>
              <div style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.4 }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {ev.status === 'next' && ev.rsvp && (
            <a href={ev.rsvp} target="_blank" rel="noopener" className="btn btn--primary">
              RSVP on Luma <span className="arrow">→</span>
            </a>
          )}
          {ev.status === 'soon' && (
            <a href="contact.html" className="btn btn--ghost">
              Get on the list <span className="arrow">→</span>
            </a>
          )}
          <a href="contact.html" className="btn btn--ghost">
            Sponsor this event
          </a>
        </div>
      </div>
    </article>
  );
}

function EventList() {
  return (
    <section style={{ padding: 'var(--section) var(--gutter) 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">ii.</span><span>The Tour</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
            Four cities, <em style={{ color: 'var(--crimson)' }}>four moments</em>.
          </h2>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 360 }}>
          Tickets and sponsorship inquiries open per event. Miami first, then the rest follow.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {EVENTS.map((ev, i) => (
          <EventCard key={ev.num} ev={ev} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}

function EventPromise() {
  const items = [
    {
      n: '01',
      t: 'Product in creator hands',
      d: "Every activation is designed so creators interact with sponsor product naturally, photographably, and post-worthily. Sponsors don't buy a logo — they buy the moment their product is in 50 creator posts the next morning.",
      target: '30+ organic posts per event tagging sponsor product',
    },
    {
      n: '02',
      t: 'Real brand-to-creator connections',
      d: "Brand reps attend, not just sponsor. Every event has a structured moment where brands and creators are intentionally introduced — not just in the same room. These relationships are the direct pipeline to future deals for both sides.",
      target: '3+ follow-up conversations per sponsor per event',
    },
    {
      n: '03',
      t: 'Something worth attending — and talking about',
      d: "Every event has a unique experiential element and a 30–45 min teaching moment. The pilates on a yacht. The live brief reveal. The business workshop. The fall editorial. These are the things that make creators show up and post about it.",
      target: "80%+ of attendees say \"I'd come to the next one\"",
    },
  ];
  return (
    <section style={{ background: 'var(--cream-warm)', padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">iii.</span><span>The Promise</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: 60 }}>
        Three things every event <em style={{ color: 'var(--crimson)' }}>delivers</em>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
        {items.map((it, i) => (
          <div key={it.n} style={{
            padding: '40px 32px 40px 0',
            borderRight: i < 2 ? '1px solid var(--line)' : 'none',
            paddingLeft: i > 0 ? 32 : 0,
          }}>
            <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 40, color: 'var(--crimson)', marginBottom: 24, lineHeight: 1 }}>{it.n}</div>
            <h3 className="display" style={{ fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 16 }}>{it.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 24 }}>{it.d}</p>
            <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)' }}>
              <div className="small-caps" style={{ color: 'var(--crimson)', marginBottom: 6, fontSize: 10 }}>Target</div>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.3, color: 'var(--ink)' }}>{it.target}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventsCTA() {
  return (
    <section style={{ padding: '100px var(--gutter)', background: 'var(--crimson)', color: 'var(--cream)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end' }}>
        <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', lineHeight: 0.9 }}>
          Join us <em style={{ color: 'var(--cream-warm)' }}>on tour</em>.
        </h2>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.9, marginBottom: 24 }}>
            Creators — RSVP to Miami on Luma. Brands — talk to us about sponsorship packages.
            Everyone else — get on the early-access list for the cities you care about.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="contact.html" className="btn btn--cream">Get in Touch <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <div>
      <Nav />
      <main>
        <EventsHero />
        <EventList />
        <EventPromise />
        <EventsCTA />
      </main>
      <ByCreatorsMarquee />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventsPage />);

const style = document.createElement('style');
style.textContent = `@keyframes pulse {0%,100%{opacity:1}50%{opacity:0.4}}`;
document.head.appendChild(style);

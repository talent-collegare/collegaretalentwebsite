// For Brands — services, process, capabilities, case studies

function BrandsHero() {
  return (
    <section style={{ padding: '160px var(--gutter) 0', borderBottom: '1px solid var(--line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 40 }}>
            <span className="num">i.</span><span>For Brands</span>
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(64px, 10vw, 160px)', lineHeight: 0.88, letterSpacing: '-0.025em' }}>
            Built by <em>operators</em>.<br/>Connected to the <em style={{ color: 'var(--crimson)' }}>brands</em> defining the season.
          </h1>
        </div>
        <div>
          <p className="body-lg" style={{ fontSize: 19, marginBottom: 32 }}>
            We build creator businesses and connect the right brands to the right talent — the brands that care.
            From single-creator campaigns to multi-talent product launches and IRL activations, we develop and curate
            personalized social and content strategy. As partners, we treat you as such. Your wins are our wins.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="contact.html" className="btn btn--primary">Start a Project <span className="arrow">→</span></a>
            <a href="#capabilities" className="btn btn--ghost">Our Capabilities</a>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: 8 }}>
        <img loading="lazy" src={REAL_PHOTOS.events[0]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.events[1]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
        <img loading="lazy" src={REAL_PHOTOS.events[2]} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }}/>
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    { n: '01', title: 'Creator Campaigns', desc: 'End-to-end campaign design — from brief and casting to content, amplification, and measurement. Single-creator spotlights or multi-talent seasonal pushes.' },
    { n: '02', title: 'Product Launches', desc: 'Cultural launches for new products, collections, and reformulations. We orchestrate seeding, first-look content, and moment-of-drop narratives.' },
    { n: '03', title: 'Events & Activations', desc: 'Dinners, trips, pop-ups, IRL immersions. We build the room, bring the right people into it, and ensure the story lives beyond the night.' },
    { n: '04', title: 'Organic Seeding', desc: 'Tactical, non-sponsored product placement with the creators whose audiences will convert. Low noise, high signal, built for momentum.' },
    { n: '05', title: 'UGC & Paid Media', desc: 'Performance-tuned creative produced at scale with creators from the Collegare roster and our vetted network. Modular and built to test.' },
    { n: '06', title: 'Strategy & Insights', desc: 'Creator-market landscape research, whitespace mapping, and cultural briefs. We work as an extension of your brand or comms team.' },
  ];
  return (
    <section id="capabilities" style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="index-label" style={{ marginBottom: 24 }}>
            <span className="num">ii.</span><span>Capabilities</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.015em' }}>
            Six <em>practices</em>, one house.
          </h2>
        </div>
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {caps.map(c => (
            <div key={c.n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 2fr', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 28, color: 'var(--crimson)' }}>{c.n}</div>
              <h3 className="display" style={{ fontSize: 26, letterSpacing: '-0.01em' }}>{c.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: '01', t: 'Brief', d: 'We start with your audience, your objectives, and the cultural context you want to step into. A kickoff conversation becomes a working brief within a week.' },
    { n: '02', t: 'Cast', d: 'We curate a shortlist from our roster and wider network — by fit, not follower count. Every pick comes with audience data, past work, and a point of view.' },
    { n: '03', t: 'Create', d: 'Creative direction, content plans, production. We work alongside your team, your agency of record, or as the lead creative partner.' },
    { n: '04', t: 'Amplify', d: 'Organic, paid, and earned. We sequence channels so the work builds momentum instead of dumping inventory.' },
    { n: '05', t: 'Measure', d: 'Reach, engagement, conversion, sentiment, and cultural signal. A post-mortem every campaign, always.' },
  ];
  return (
    <section style={{ background: 'var(--cream-warm)', color: 'var(--ink)', padding: 'var(--section) var(--gutter)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="index-label" style={{ marginBottom: 50 }}>
        <span className="num">iii.</span><span>The Process</span>
      </div>
      <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 140px)', letterSpacing: '-0.025em', marginBottom: 80, lineHeight: 0.9 }}>
        How we <em style={{ color: 'var(--crimson)' }}>work</em>.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{
            padding: '32px 24px 40px',
            borderRight: i < 4 ? '1px solid var(--line)' : 'none',
            minHeight: 280,
            transition: 'all 0.35s var(--ease)',
            cursor: 'default',
          }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.background = 'var(--crimson)';
              el.style.color = 'var(--cream)';
              el.querySelectorAll('[data-step-num]').forEach(n => n.style.color = 'var(--cream-warm)');
              el.querySelectorAll('[data-step-desc]').forEach(n => n.style.color = 'rgba(254,252,240,0.85)');
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.color = '';
              el.querySelectorAll('[data-step-num]').forEach(n => n.style.color = 'var(--crimson)');
              el.querySelectorAll('[data-step-desc]').forEach(n => n.style.color = 'var(--ink-soft)');
            }}
          >
            <div data-step-num style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 40, color: 'var(--crimson)', lineHeight: 1, marginBottom: 24, transition: 'color 0.35s' }}>{s.n}</div>
            <div className="display" style={{ fontSize: 28, marginBottom: 16, letterSpacing: '-0.01em' }}>{s.t}</div>
            <p data-step-desc style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-soft)', transition: 'color 0.35s' }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  const clients = ['PORSCHE RIVER OAKS', 'BUFFBUNNY', 'DEODOCS', 'EMNL', 'CREME PILATES', 'THE SMOOTH COMPANY', 'CANDIER', 'OLLY WELLNESS', 'CHEERS HEALTH', 'VERANO HILL', "BURLESON'S HONEY", 'MELTING POD'];
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div className="index-label" style={{ marginBottom: 40 }}>
        <span className="num">v.</span><span>Selected Clients</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
        {clients.map((c, i) => (
          <div key={c} style={{
            padding: '36px 20px',
            borderRight: (i + 1) % 4 !== 0 ? '1px solid var(--line)' : 'none',
            borderBottom: i < 8 ? '1px solid var(--line)' : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '0.05em',
          }}>
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandsCTA() {
  return (
    <section style={{ background: 'var(--crimson)', color: 'var(--cream)', padding: '120px var(--gutter)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end' }}>
        <h2 className="display" style={{ fontSize: 'clamp(56px, 10vw, 160px)', lineHeight: 0.88, letterSpacing: '-0.025em' }}>
          Tell us what <em style={{ color: 'var(--cream-warm)' }}>you're</em> building.
        </h2>
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.5, opacity: 0.85, marginBottom: 28 }}>
            We respond to every brief within 48 hours. Campaign, launch, activation, or "I don't know yet" — start the conversation.
          </p>
          <a href="contact.html" className="btn btn--cream">Get in Touch <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function EventReel({ src, label }) {
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
      style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--ink)' }}>
      <video ref={videoRef} src={src} muted loop playsInline preload="metadata"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.8s var(--ease)' }}/>
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,10,7,0) 50%, rgba(15,10,7,0.8) 100%)', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16,
        display: 'flex', justifyContent: 'space-between',
        color: 'var(--cream)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--crimson)',
            boxShadow: '0 0 0 3px rgba(139,13,0,0.3)', animation: 'pulse 2s ease-in-out infinite' }}/>
          Reel
        </span>
        <span>{label}</span>
      </div>
    </div>
  );
}

function Events() {
  const photos = React.useMemo(() => {
    const evts = REAL_PHOTOS.events;
    return evts.slice(0, 3);
  }, []);
  return (
    <section style={{ padding: 'var(--section) var(--gutter)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56 }}>
        <div>
          <div className="index-label" style={{ marginBottom: 20 }}>
            <span className="num">iv.</span><span>Events &amp; Activations</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', letterSpacing: '-0.025em', lineHeight: 0.95 }}>
            The rooms <em>we</em> build.
          </h2>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 360 }}>
          Dinners, trips, pop-ups, IRL immersions. We assemble the right people in the right space, and ensure the story lives beyond the night.
        </p>
      </div>

      {/* Video duo */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <EventReel src={VIDEOS.event_1} label="Event Reel — 01" />
        <EventReel src={VIDEOS.event_2} label="Event Reel — 02" />
      </div>

      {/* Photo strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {photos.map((p, i) => (
          <img loading="lazy" key={i} src={p} alt="Collegare event moment" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}/>
        ))}
      </div>
    </section>
  );
}

const BRAND_FAQS = [
  { q: 'What kinds of brands do you work with?',
    a: "Brands across wellness, beauty, food, hospitality, and lifestyle that care about creative quality, audience relevance, and earned attention. We pick our partnerships the way we pick our talent — for taste and ambition, not budget alone." },
  { q: 'How quickly do you respond to a brief?',
    a: "Within 48 hours, always. Every brief is read personally by a partner — no junior triage, no template responses." },
  { q: 'Do you do experiential events and activations?',
    a: "Yes — it's one of our specialties. Beyond brand campaigns, we produce dinners, pop-ups, trips, and our own Collegare On Tour creator community events. Sponsorship slots and bespoke activations are both on the table." },
  { q: 'Do you work with brands that have an agency of record?',
    a: "Yes, frequently. We slot in as the creator partner alongside your AOR — or as the lead creative on the campaigns where creators are the strategy." },
  { q: 'What are typical campaign sizes?',
    a: "From single-creator product placements to multi-talent, multi-format launches and IRL activations. We work across budget ranges; the floor is good work, not a number." },
  { q: 'Can you handle paid amplification?',
    a: "Yes. We produce performance-tuned creative with talent from our roster and our vetted partner network — built modular, designed to test, optimized after launch." },
  { q: 'Do you measure beyond reach and engagement?',
    a: "Always. Sentiment, conversion, sell-through, and cultural signal where applicable. Every campaign closes with a written post-mortem." },
];

function ForBrands() {
  return (
    <div>
      <Nav current="Brands" />
      <main>
        <BrandsHero />
        <Capabilities />
        <Process />
        <Events />
        <Clients />
        <FAQ eyebrowNum="vi" items={BRAND_FAQS} />
        <BrandsCTA />
        <ByCreatorsMarquee />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ForBrands />);

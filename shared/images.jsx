// Editorial image components — used across all pages
// Uses curated Unsplash photos as realistic placeholders.
// Swap URLs for real creator/brand photography.

// Curated photo pool — fashion, beauty, food, travel, portraits, lifestyle
const PHOTOS = {
  fashion_portrait_1: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80',
  fashion_portrait_2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80',
  fashion_editorial: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=80',
  beauty_closeup: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80',
  beauty_portrait: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80',
  culture_man: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&q=80',
  culture_woman: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80',
  food_plated: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80',
  food_scene: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80',
  travel_coast: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
  travel_interior: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
  lifestyle_home: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
  lifestyle_scene: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&q=80',
  design_object: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&q=80',
  event_dinner: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80',
  event_studio: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
  product_launch: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80',
  wellness: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80',
  music_stage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900&q=80',
  campaign_1: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
  campaign_2: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1200&q=80',
  campaign_3: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&q=80',
  portrait_a: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  portrait_b: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
  portrait_c: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  portrait_d: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  portrait_e: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=80',
  portrait_f: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  portrait_g: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80',
  portrait_h: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  portrait_i: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  portrait_j: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80',
};

// Editorial image with optional label and caption overlay
function EditImg({ src, aspect = '3/4', label, caption, duotone = false, style = {} }) {
  return (
    <figure style={{
      position: 'relative',
      aspectRatio: aspect,
      overflow: 'hidden',
      background: 'var(--cream-shadow)',
      ...style,
    }}>
      <img src={PHOTOS[src] || src} alt={caption || ''} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        filter: duotone ? 'grayscale(1) contrast(1.05)' : 'none',
      }}/>
      {duotone && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(139,13,0,0.35) 0%, rgba(43,4,0,0.55) 100%)',
          mixBlendMode: 'multiply',
        }}/>
      )}
      {label && (
        <div style={{
          position: 'absolute', top: 14, left: 14,
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--cream)', fontWeight: 500,
          mixBlendMode: 'difference',
        }}>{label}</div>
      )}
      {caption && (
        <figcaption style={{
          position: 'absolute', bottom: 14, left: 14, right: 14,
          fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 13,
          color: 'var(--cream)', mixBlendMode: 'difference', lineHeight: 1.3,
        }}>— {caption}</figcaption>
      )}
    </figure>
  );
}

// Editorial image grid — mixed aspect ratios
function EditImgGrid({ items, columns = 4, gap = 16 }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap,
      alignItems: 'start',
    }}>
      {items.map((it, i) => (
        <div key={i} style={{ marginTop: it.offset ? it.offset : 0 }}>
          <EditImg {...it} />
        </div>
      ))}
    </div>
  );
}

// Floating asymmetric image composition
function EditImgCollage({ items }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
      {items.map((it, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: it.top, left: it.left, right: it.right, bottom: it.bottom,
          width: it.width, height: it.height,
        }}>
          <EditImg {...it} />
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { EditImg, EditImgGrid, EditImgCollage, PHOTOS });

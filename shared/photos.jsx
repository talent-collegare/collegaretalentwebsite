// Real photos provided by Collegare — Dropbox sources, served through
// wsrv.nl which resizes + converts to WebP and edge-caches globally.
// First request warms the cache (~1-2s), every subsequent visitor gets
// instant WebP from the nearest CDN node — typical mobile payload drops
// 60-90% vs the raw Dropbox JPEGs.

function px(url, w, q = 75) {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${w}&q=${q}&output=webp`;
}

// Raw Dropbox sources (kept separate so they're easy to swap later)
const _SRC = {
  marquee: [
    'https://dl.dropboxusercontent.com/scl/fi/ewth5doouxrzy4ylsu2dl/IMG_5194.jpg?rlkey=dal6kcdar8klxww2t7kj3v8f3&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/s3y7r6w4mtve8odcosgjz/IMG_1053-1.jpg?rlkey=h71g8zkxbn7hpe5z38d43mcf2&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/zn8jsfcr11r7h4fsz1qbe/IMG_5197.jpg?rlkey=j6zqwz1kmi7e4id3dt2afjujg&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/vnv1xhk006nlxcfc8vrgz/IMG_5203.jpg?rlkey=jq6b307jfeuqwct61hv97f9y4&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/1gwai1iqno9h2je7b3n83/IMG_5205.jpg?rlkey=mf9j0wswx3txw6b4cj3s4ep9a&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/ch3u3dt6hcgook6uqn3ls/IMG_5208.jpg?rlkey=bek8j6j57r5yf7tvqh3simy3q&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/25itvm4l0isgjqub98yq8/image1-1.jpeg?rlkey=kvlm5lo3srwpiaipiic7kys7q&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/2boi8yzwr2koyo9c9df9i/IMG_5193.jpg?rlkey=yghdmcxg4e2lquw858wz5oxxq&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/7vp2fv3hhhs2sa1zur4aq/IMG_5198.jpg?rlkey=14n1zmlqtmofw53m242c517yh&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/lvu42f9qwy31ittpkj0q0/IMG_5192.jpg?rlkey=ngkqwxzb6y8hhlfxsb1vnncny&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/tv7zp222tcb6s6rj56za1/IMG_5201.jpg?rlkey=h6g0mz0vkqp3ia7kqucnsluwc&raw=1',
  ],
  homepageHero: [
    'https://dl.dropboxusercontent.com/scl/fi/uayzou0uqzncoz97dthis/IMG_5202.jpg?rlkey=nse335983zhf1lc06b1pavxt8&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/0cn3gylvjwjuo87wsc1f0/IMG_5200.jpg?rlkey=p7i4zswmwopw33s5coaehyxaz&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/wdgt9r1fx1vw3i9s31sle/IMG_1052-1.jpg?rlkey=z6kgy2rkug6mfapqa7ihpxhj8&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/cjknhtmlmalzq8s52bbhq/IMG_5206.jpg?rlkey=21ip15seeiy018scrj8omxam1&raw=1',
  ],
  eventHero: [
    'https://dl.dropboxusercontent.com/scl/fi/zjlgofu0odrp7h6x4cn01/Tezza-3735-1.JPG?rlkey=pafeegrj96hnsmbg07hf3b1iv&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/7vxfecovyr16m28pqymsc/IMG_9511-1.JPG?rlkey=9r7ocvjwnfdek9cz37pmk24cb&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/h787s3ip95ci4hjwbf1vv/IMG_9435-1.JPG?rlkey=v0z3ndzzqag3ixrnnifx5r7wf&raw=1',
  ],
  eventByCity: {
    miami:    'https://dl.dropboxusercontent.com/scl/fi/ics0vt5uwnbijnu23o0gq/_-96.jpeg?rlkey=xg4zd2pf57eg0ibora9lls1en&raw=1',
    nyc:      'https://dl.dropboxusercontent.com/scl/fi/evfcgfz9d7gh8rnaiw9lo/NYC-POP-UP-STORE-2023-1.jpeg?rlkey=lgyc9f9x57dnl5y9bikx2ip2b&raw=1',
    dallas:   'https://dl.dropboxusercontent.com/scl/fi/tpt3nm0kk5ubzorygfv7f/_-97.jpeg?rlkey=bcendo3zuwotz1phyu6yv59ts&raw=1',
    la:       'https://dl.dropboxusercontent.com/scl/fi/vfx9c82ztl9dk64exsdhn/Celebrating-33-Years-of-Kookai.jpeg?rlkey=6lg1c02okq9a4uscykhc15qwk&raw=1',
  },
  talent: [
    'https://dl.dropboxusercontent.com/scl/fi/s3y7r6w4mtve8odcosgjz/IMG_1053-1.jpg?rlkey=h71g8zkxbn7hpe5z38d43mcf2&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/25itvm4l0isgjqub98yq8/image1-1.jpeg?rlkey=kvlm5lo3srwpiaipiic7kys7q&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/wdgt9r1fx1vw3i9s31sle/IMG_1052-1.jpg?rlkey=z6kgy2rkug6mfapqa7ihpxhj8&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/2boi8yzwr2koyo9c9df9i/IMG_5193.jpg?rlkey=yghdmcxg4e2lquw858wz5oxxq&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/ewth5doouxrzy4ylsu2dl/IMG_5194.jpg?rlkey=dal6kcdar8klxww2t7kj3v8f3&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/lvu42f9qwy31ittpkj0q0/IMG_5192.jpg?rlkey=ngkqwxzb6y8hhlfxsb1vnncny&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/hlit36odagg0muw93lypc/IMG_5195.jpg?rlkey=4lq3571nhq7au459iwd79aybj&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/i4fcnuc3xep31cugki1i9/IMG_5196.jpg?rlkey=iba73oxg6x3wpmwldol0bhrep&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/zn8jsfcr11r7h4fsz1qbe/IMG_5197.jpg?rlkey=j6zqwz1kmi7e4id3dt2afjujg&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/7vp2fv3hhhs2sa1zur4aq/IMG_5198.jpg?rlkey=14n1zmlqtmofw53m242c517yh&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/gbal0jwt3rlxp6pr5dkjz/IMG_5199.jpg?rlkey=sd9ohqm8gz5az40pklrr2l202&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/0cn3gylvjwjuo87wsc1f0/IMG_5200.jpg?rlkey=p7i4zswmwopw33s5coaehyxaz&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/tv7zp222tcb6s6rj56za1/IMG_5201.jpg?rlkey=h6g0mz0vkqp3ia7kqucnsluwc&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/uayzou0uqzncoz97dthis/IMG_5202.jpg?rlkey=nse335983zhf1lc06b1pavxt8&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/vnv1xhk006nlxcfc8vrgz/IMG_5203.jpg?rlkey=jq6b307jfeuqwct61hv97f9y4&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/fv51q424q1g8bzmy4h652/IMG_5204.jpg?rlkey=kyp9a83yid1ctnhgku8ik07n4&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/1gwai1iqno9h2je7b3n83/IMG_5205.jpg?rlkey=mf9j0wswx3txw6b4cj3s4ep9a&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/cjknhtmlmalzq8s52bbhq/IMG_5206.jpg?rlkey=21ip15seeiy018scrj8omxam1&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/02xudew5pow6ascox1nn8/IMG_5207.jpg?rlkey=vt8ln61l27y5ztojainob0bsw&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/ch3u3dt6hcgook6uqn3ls/IMG_5208.jpg?rlkey=bek8j6j57r5yf7tvqh3simy3q&raw=1',
  ],
  events: [
    'https://dl.dropboxusercontent.com/scl/fi/56m4bfa2y1tv9pi3dzpz8/Photo-Feb-11-2026-9-55-18-PM.jpg?rlkey=bnblqrhz5p95857zgxsly5yc0&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/7vxfecovyr16m28pqymsc/IMG_9511-1.JPG?rlkey=9r7ocvjwnfdek9cz37pmk24cb&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/ghnc0drn79hlcd9k9h6p5/Photo-Feb-11-2026-10-15-06-PM.jpg?rlkey=u7ocmscgg2hbmyvassp4mkz53&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/nym44wt01fnkqtmezfn7r/IMG_9474-1.JPG?rlkey=paoh0mbvd94x2qq70sxepv9lb&raw=1',
    'https://dl.dropboxusercontent.com/scl/fi/lhp7roulno15nm0f6mztn/IMG_9471-1.JPG?rlkey=t8avzz1rg9xi7pdhvp5wmg8hq&raw=1',
  ],
  team: {
    maya:    'https://dl.dropboxusercontent.com/scl/fi/ygex76l337g97vxxpr84q/headshot_maya-1.jpeg?rlkey=3kvlaiutn8amder641hc3291a&raw=1',
    skylar:  'https://dl.dropboxusercontent.com/scl/fi/7kclle8ve9o2omnn2pz2o/headshot_skylar-1.jpeg?rlkey=wvpsh9yctn2gjvtbzfdy4ceyg&raw=1',
    candid:  'https://dl.dropboxusercontent.com/scl/fi/38ild99t2eh226rxrjlky/Photo-Feb-12-2026-10-19-39-AM.jpg?rlkey=5e35f7kuma731z7ooshutumqx&raw=1',
  },
};

// Mobile-tuned widths. Browsers downscale automatically, so these target
// the largest container they show in (Retina × 2). WebP at q=75 is the
// sweet spot — visually identical, ~60-90% smaller than the source JPEG.
const REAL_PHOTOS = {
  marquee:      _SRC.marquee.map(u => px(u, 400)),
  homepageHero: _SRC.homepageHero.map(u => px(u, 900)),
  eventHero:    _SRC.eventHero.map(u => px(u, 900)),
  eventByCity:  Object.fromEntries(Object.entries(_SRC.eventByCity).map(([k, u]) => [k, px(u, 1100)])),
  talent:       _SRC.talent.map(u => px(u, 700)),
  events:       _SRC.events.map(u => px(u, 1000)),
  team: {
    maya:   px(_SRC.team.maya, 800),
    skylar: px(_SRC.team.skylar, 800),
    candid: px(_SRC.team.candid, 1400),
  },
};

// Stable per-load shuffle so different sessions show different orderings
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Cached shuffled order for the session
const _shuffledTalent = shuffleArray(REAL_PHOTOS.talent);
const _shuffledEvents = shuffleArray(REAL_PHOTOS.events);

function randomTalent(n) {
  return _shuffledTalent.slice(0, n);
}
function randomEvents(n) {
  return _shuffledEvents.slice(0, n);
}
function talentAt(i) {
  return _shuffledTalent[i % _shuffledTalent.length];
}

Object.assign(window, { REAL_PHOTOS, randomTalent, randomEvents, talentAt });

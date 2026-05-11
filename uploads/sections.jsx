// Section components for the M5V × STK microsite.
const { useEffect, useRef, useState } = React;

/* ---------------- Hooks ---------------- */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen];
}

function useCount(target, start, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, t0;
    const tick = (t) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return n;
}

/* ---------------- Hero ---------------- */
function Hero() {
  const [ref, seen] = useInView(0.1);
  return (
    <section ref={ref} id="hero" style={{ paddingTop: 96, paddingBottom: 110, position: 'relative' }}>
      <div className="wrap">
        {/* Masthead — integrated logo bar */}
        <div className={"masthead reveal " + (seen ? 'in' : '')}>
          <div className="mh-edge">
            <span className="eyebrow">Niagara Falls</span>
            <span className="eyebrow">2026 / 2027</span>
          </div>
          <div className="mh-row">
            <div className="mh-mark mh-left">
              <span className="logo-mark m5v"><img src="assets/m5v-logo.jpeg" alt="M5V Developments" /></span>
              <div className="mh-meta">
                <div className="mh-name">M5V Developments</div>
                <div className="mono" style={{ color: 'var(--ink-3)' }}>Boutique developer · Toronto</div>
              </div>
            </div>
            <div className="mh-cross">
              <span className="display-italic" style={{ fontSize: 'clamp(48px, 6vw, 88px)', color: 'var(--accent)', lineHeight: 1 }}>×</span>
              <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 8 }}>Partnership Proposal</div>
            </div>
            <div className="mh-mark mh-right">
              <div className="mh-meta mh-meta-r">
                <div className="mh-name">STK Steakhouse</div>
                <div className="mono" style={{ color: 'var(--ink-3)' }}>Niagara Falls</div>
              </div>
              <span className="logo-mark stk"><img src="assets/stk-logo.png" alt="STK Steakhouse" /></span>
            </div>
          </div>
        </div>

        <h1 className={"display reveal reveal-d1 " + (seen ? 'in' : '')}
            style={{ fontSize: 'clamp(72px, 11vw, 192px)', lineHeight: 0.92, letterSpacing: '-0.025em', marginTop: 80, marginBottom: 40 }}>
          Two brands.<br/>
          One region.<br/>
          <span className="display-italic accent">Seven hundred</span> homes.
        </h1>

        <div className={"reveal reveal-d2 " + (seen ? 'in' : '')} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, marginTop: 56, alignItems: 'end' }}>
          <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 1.35, fontStyle: 'italic', color: 'var(--ink-2)', maxWidth: '38ch' }}>
            M5V Developments is building Niagara's next generation of luxury communities — and we need an address that matches. STK is that address.
          </p>
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 18 }}>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 6 }}>Prepared by</div>
            <div style={{ fontFamily: 'var(--display-font)', fontSize: 28, lineHeight: 1.1 }}>Sherard McQueen</div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 8 }}>Managing Partner · M5V Developments</div>
          </div>
        </div>

        <hr className="rule-thick" style={{ marginTop: 96, marginBottom: 36 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STATS.map((s, i) => (
            <StatBlock key={i} stat={s} start={seen} delay={i * 180} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ stat, start, delay }) {
  const [ref, seen] = useInView(0.4);
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (start && seen && !armed) {
      const t = setTimeout(() => setArmed(true), delay);
      return () => clearTimeout(t);
    }
  }, [start, seen, delay, armed]);
  const n = useCount(stat.value, armed, 1700);
  return (
    <div ref={ref} className={"reveal " + (armed ? 'in' : '')} style={{ borderTop: '1px solid transparent', paddingTop: 6 }}>
      <div style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(54px, 6.5vw, 96px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
        {stat.prefix || ''}{n}{stat.suffix}
      </div>
      <div className="mono" style={{ marginTop: 18, color: 'var(--ink-3)', lineHeight: 1.5 }}>{stat.label}</div>
    </div>
  );
}

/* ---------------- Overview (01) ---------------- */
function Overview() {
  const [ref, seen] = useInView(0.1);
  return (
    <section ref={ref} id="overview" style={{ padding: '140px 0 110px', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>01 — The Opportunity</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          A flagship venue<br/>that matches the<br/><span className="display-italic accent">brand.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, marginTop: 80, alignItems: 'start' }}>
          <div className={"reveal reveal-d2 " + (seen ? 'in' : '')}>
            <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(24px, 2.2vw, 34px)', lineHeight: 1.35 }}>
              M5V Developments is Niagara's most active boutique real estate developer. Across seven communities we are delivering <em>over 700 homes</em> to a buyer profile that perfectly mirrors STK's core guest: high-income Toronto professionals relocating to the region seeking an upscale lifestyle.
            </p>
            <p style={{ marginTop: 28, color: 'var(--ink-2)', maxWidth: '52ch' }}>
              We need a flagship venue. STK needs sustained exposure to a new, high-value local customer base. This proposal outlines a structured partnership that creates measurable value for both organizations on a permanent basis.
            </p>
          </div>

          <div className={"reveal reveal-d3 " + (seen ? 'in' : '')}>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 22 }}>What we propose · in brief</div>
            <ol style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 18 }}>
              {[
                'STK becomes the official event venue for all M5V Niagara launches, closings, and VIP buyer dinners.',
                'M5V delivers dedicated social posts, story content, and email blasts to a verified high-income audience.',
                'Preferred pricing in exchange for guaranteed event volume.',
                'STK co-branding on all Niagara community event materials.',
                'A referral mechanism — the Secret Word program — driving M5V buyers directly to STK.',
                'First right of refusal on all future M5V events across the region.',
              ].map((t, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, borderTop: '1px solid var(--rule)', paddingTop: 14 }}>
                  <span className="mono" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
                  <span style={{ color: 'var(--ink-2)' }}>{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Company Profile (02) ---------------- */
function CompanyProfile() {
  const [ref, seen] = useInView(0.1);
  return (
    <section ref={ref} id="profile" style={{ padding: '140px 0 110px' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>02 — Company Profile</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          We sell and market<br/>our own product<br/><span className="display-italic">in-house.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 48, alignItems: 'start' }}>
          <div className={"reveal reveal-d2 " + (seen ? 'in' : '')}>
            <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(22px, 1.9vw, 28px)', lineHeight: 1.4, color: 'var(--ink-2)' }}>
              M5V Developments is a Toronto-based boutique developer operating across the Greater Golden Horseshoe. Our model is built on a singular edge: while the industry standard is a <strong style={{ color: 'var(--ink)' }}>5% sales commission</strong> and a <strong style={{ color: 'var(--ink)' }}>2% marketing spend</strong>, we operate at <strong className="accent">2%</strong> and <strong className="accent">0.75%</strong> respectively, reinvesting the difference into brand, content, and community.
            </p>
          </div>
          <div className={"placeholder reveal reveal-d3 " + (seen ? 'in' : '')} style={{ aspectRatio: '4/3', height: 'auto' }}>
            <div className="lbl">Founder portrait or M5V campaign image</div>
          </div>
        </div>

        <div className={"reveal reveal-d4 " + (seen ? 'in' : '')} style={{ marginTop: 100 }}>
          <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 20 }}>Competitive advantage · M5V vs. industry</div>
          <div style={{ borderTop: '1px solid var(--ink)' }}>
            {ADVANTAGES.map((a, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '160px 160px 1fr auto',
                alignItems: 'baseline',
                gap: 24,
                borderBottom: '1px solid var(--rule)',
                padding: '22px 0',
              }}>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 44, color: 'var(--accent)', lineHeight: 1 }}>{a.m5v}</div>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 28, color: 'var(--ink-3)', textDecoration: a.industry !== '—' ? 'line-through' : 'none', lineHeight: 1 }}>{a.industry}</div>
                <div style={{ color: 'var(--ink-2)' }}>{a.label}</div>
                <div className="mono" style={{ color: 'var(--ink-3)' }}>{a.note || ''}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio + Map (03) ---------------- */
function Portfolio() {
  const [ref, seen] = useInView(0.05);
  const [hover, setHover] = useState(null);
  const near = PROPERTIES.filter(p => !p.far);
  return (
    <section ref={ref} id="portfolio" style={{ padding: '140px 0 110px', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>03 — Active Niagara Portfolio</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          Five communities,<br/><span className="display-italic accent">five minutes</span> from STK.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 64, marginTop: 56, alignItems: 'start' }}>
          {/* Map */}
          <div className={"reveal reveal-d2 " + (seen ? 'in' : '')}>
            <NiagaraMap hover={hover} setHover={setHover} />
            <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 14, textAlign: 'center' }}>
              Hover a community to locate it · STK shown in <span className="accent">red</span>
            </div>
          </div>

          {/* Table */}
          <div className={"reveal reveal-d3 " + (seen ? 'in' : '')}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.8fr 1fr 0.6fr 0.7fr',
              gap: 16,
              paddingBottom: 12,
              borderBottom: '1px solid var(--ink)',
              alignItems: 'end',
            }}>
              <div className="mono" style={{ color: 'var(--ink-3)' }}>Community</div>
              <div className="mono" style={{ color: 'var(--ink-3)' }}>Type</div>
              <div className="mono" style={{ color: 'var(--ink-3)' }}>Units</div>
              <div className="mono" style={{ color: 'var(--ink-3)', textAlign: 'right' }}>To STK</div>
            </div>

            {PROPERTIES.map(p => (
              <div key={p.id}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.8fr 1fr 0.6fr 0.7fr',
                  gap: 16,
                  padding: '18px 0',
                  borderBottom: '1px solid var(--rule)',
                  alignItems: 'baseline',
                  cursor: 'default',
                  background: hover === p.id ? 'color-mix(in oklab, var(--accent) 10%, transparent)' : 'transparent',
                  transition: 'background 0.2s',
                }}>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 22, lineHeight: 1.15 }}>{p.name}</div>
                <div style={{ color: 'var(--ink-2)', fontSize: 14 }}>{p.type}</div>
                <div style={{ color: 'var(--ink-2)' }}>{p.units}</div>
                <div className="mono" style={{ textAlign: 'right', color: p.far ? 'var(--ink-3)' : 'var(--accent)' }}>
                  {p.far ? p.region : p.proximity + ' min'}
                </div>
              </div>
            ))}

            <p style={{ marginTop: 36, fontFamily: 'var(--display-font)', fontSize: 22, lineHeight: 1.4, fontStyle: 'italic', color: 'var(--ink-2)' }}>
              Five of seven active communities sit within a five-to-six minute drive of STK Niagara Falls — making STK the natural geographic anchor for our event programming in this market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NiagaraMap({ hover, setHover }) {
  // Stylized abstract map — not geographically literal.
  return (
    <div style={{ position: 'relative', aspectRatio: '4/4.4', background: 'var(--bg)', border: '1px solid var(--rule)' }}>
      <svg viewBox="0 0 100 110" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="3" stroke="var(--rule)" strokeWidth="0.5" />
          </pattern>
        </defs>
        {/* "Lake Ontario" / river hatching at top */}
        <path d="M0 0 L100 0 L100 12 Q70 18 50 14 Q30 10 0 16 Z" fill="url(#hatch)" />
        {/* Niagara river suggestion */}
        <path d="M62 12 Q60 30 52 50 Q44 70 40 95 L36 110 L44 110 Q48 70 56 50 Q64 30 66 12 Z" fill="url(#hatch)" opacity="0.6" />
        {/* Major road */}
        <line x1="0" y1="55" x2="100" y2="48" stroke="var(--rule)" strokeWidth="0.3" strokeDasharray="2 2" />
        <line x1="20" y1="0" x2="28" y2="110" stroke="var(--rule)" strokeWidth="0.3" strokeDasharray="2 2" />
        <line x1="58" y1="0" x2="50" y2="110" stroke="var(--rule)" strokeWidth="0.3" strokeDasharray="2 2" />
        {/* STK marker - downtown niagara falls */}
        <g transform="translate(48 56)">
          <circle r="2.4" fill="var(--accent)" />
          <circle r="6" fill="none" stroke="var(--accent)" strokeWidth="0.4" opacity="0.4">
            <animate attributeName="r" values="3;9;3" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <text x="4" y="1" fontSize="3" fontFamily="var(--mono-font)" fill="var(--accent)" letterSpacing="0.3">STK NIAGARA FALLS</text>
        </g>
        {/* property pins */}
        {PROPERTIES.filter(p => !p.far).map(p => {
          const active = hover === p.id;
          return (
            <g key={p.id} transform={`translate(${p.x} ${p.y})`}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: 'pointer' }}>
              <circle r={active ? 1.8 : 1.2} fill="var(--ink)" />
              <circle r="3.5" fill="transparent" />
              {active && (
                <>
                  <line x1="0" y1="0" x2="48 - " transform="" stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="1 1" />
                  <text x="2.4" y="-1.2" fontSize="2.6" fontFamily="var(--mono-font)" fill="var(--ink)">{p.name.split('—')[0].trim().toUpperCase()}</text>
                </>
              )}
            </g>
          );
        })}
        {/* legend */}
        <text x="3" y="106" fontSize="2.4" fontFamily="var(--mono-font)" fill="var(--ink-3)" letterSpacing="0.3">NIAGARA REGION · ILLUSTRATIVE</text>
      </svg>
    </div>
  );
}

window.Hero = Hero;
window.Overview = Overview;
window.CompanyProfile = CompanyProfile;
window.Portfolio = Portfolio;
window.useInView = useInView;
window.useCount = useCount;

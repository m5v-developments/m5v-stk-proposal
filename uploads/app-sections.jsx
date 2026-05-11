// Remaining sections + main app.
const { useEffect: useEffectA, useState: useStateA, useRef: useRefA } = React;

/* ---------------- Demographics (04) ---------------- */
function Demographics() {
  const [ref, seen] = useInView(0.08);
  return (
    <section ref={ref} id="demographics" style={{ padding: '140px 0 110px' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>04 — Demographics</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          The M5V buyer<br/>is STK's <span className="display-italic accent">ideal guest.</span>
        </h2>

        <p className={"reveal reveal-d2 " + (seen ? 'in' : '')}
           style={{ marginTop: 12, fontFamily: 'var(--display-font)', fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: '62ch' }}>
          Our buyer community is not an incidental match with STK's target market — it is a structural one. The Niagara market we operate in is being reshaped by Toronto professionals seeking space, lifestyle, and value. STK is where we direct them.
        </p>

        <div className={"reveal reveal-d3 " + (seen ? 'in' : '')} style={{ marginTop: 80 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 1.2fr',
            gap: 0,
            borderTop: '1px solid var(--ink)',
          }}>
            <ColHead label="Characteristic" mono />
            <ColHead label="M5V Buyer Profile" accent />
            <ColHead label="STK Target Guest" />

            {DEMOGRAPHICS.map((d, i) => (
              <React.Fragment key={i}>
                <CellMono>{d.trait}</CellMono>
                <CellBig accent>{d.m5v}</CellBig>
                <CellBig>{d.stk}</CellBig>
              </React.Fragment>
            ))}
          </div>
        </div>

        <blockquote className={"reveal reveal-d4 " + (seen ? 'in' : '')}
          style={{ marginTop: 100, paddingLeft: 32, borderLeft: '3px solid var(--accent)',
                   fontFamily: 'var(--display-font)', fontSize: 'clamp(28px, 3.2vw, 48px)',
                   lineHeight: 1.2, fontStyle: 'italic' }}>
          We are not bringing STK foot traffic.<br/>
          We are bringing STK <span style={{ fontStyle: 'normal' }} className="accent">regulars.</span>
          <div className="mono" style={{ fontStyle: 'normal', marginTop: 24, color: 'var(--ink-3)' }}>
            Over 700 households · a permanent, loyal customer cohort
          </div>
        </blockquote>
      </div>
    </section>
  );
}

function ColHead({ label, accent, mono }) {
  return (
    <div className="mono" style={{
      padding: '18px 18px 18px 0',
      color: accent ? 'var(--accent)' : 'var(--ink-3)',
      borderBottom: '1px solid var(--rule)',
    }}>{label}</div>
  );
}
function CellMono({ children }) {
  return <div style={{ padding: '24px 18px 24px 0', borderBottom: '1px solid var(--rule)', color: 'var(--ink-3)', fontFamily: 'var(--mono-font)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{children}</div>;
}
function CellBig({ children, accent }) {
  return <div style={{ padding: '24px 18px 24px 0', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--display-font)', fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1.3, color: accent ? 'var(--accent)' : 'var(--ink)' }}>{children}</div>;
}

/* ---------------- Media Value (05) ---------------- */
function MediaValue() {
  const [ref, seen] = useInView(0.08);
  return (
    <section ref={ref} id="media" style={{ padding: '140px 0 110px', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>05 — Media Value</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          What M5V's platform<br/>is <span className="display-italic accent">worth.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 64 }}>
          {[
            { v: '232K', l: 'Instagram Followers' },
            { v: '2M+', l: 'Monthly Organic Reach' },
            { v: '70K', l: 'TikTok Followers' },
            { v: '302K+', l: 'Combined Social Community' },
          ].map((s, i) => (
            <div key={i} className={"reveal reveal-d" + ((i % 4) + 2) + ' ' + (seen ? 'in' : '')}
                 style={{ borderTop: '1px solid var(--ink)', paddingTop: 14 }}>
              <div style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(40px, 4.6vw, 68px)', lineHeight: 1 }}>{s.v}</div>
              <div className="mono" style={{ marginTop: 14, color: 'var(--ink-3)' }}>{s.l}</div>
            </div>
          ))}
        </div>

        <p className={"reveal reveal-d3 " + (seen ? 'in' : '')}
           style={{ marginTop: 72, fontFamily: 'var(--display-font)', fontSize: 'clamp(22px, 1.9vw, 30px)', lineHeight: 1.4, color: 'var(--ink-2)', maxWidth: '66ch' }}>
          At M5V's follower tier and verified engagement rates, industry platforms price branded content partnerships as follows. <em>Our partnership offers this at zero cash cost to STK.</em>
        </p>

        <div className={"reveal reveal-d4 " + (seen ? 'in' : '')} style={{ marginTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1.3fr 1.4fr 2fr', gap: 20, padding: '14px 0', borderBottom: '1px solid var(--ink)' }}>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Item</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Audience</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Monthly value</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Basis</div>
          </div>
          {MEDIA_VALUE.map((m, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2.2fr 1.3fr 1.4fr 2fr', gap: 20, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'var(--display-font)', fontSize: 22 }}>{m.item}</div>
              <div className="mono" style={{ color: 'var(--ink-2)' }}>{m.audience}</div>
              <div style={{ fontFamily: 'var(--display-font)', fontSize: 24, color: 'var(--accent)' }}>${m.low.toLocaleString()}–${m.high.toLocaleString()}</div>
              <div style={{ color: 'var(--ink-3)', fontSize: 14 }}>{m.basis}</div>
            </div>
          ))}
          <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1.3fr 1.4fr 2fr', gap: 20, padding: '28px 0 14px', borderTop: '2px solid var(--ink)', borderBottom: 'none', marginTop: 4, alignItems: 'baseline' }}>
            <div style={{ fontFamily: 'var(--display-font)', fontSize: 28, fontStyle: 'italic' }}>Total monthly</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Minimum deliverable</div>
            <div style={{ fontFamily: 'var(--display-font)', fontSize: 38, color: 'var(--accent)' }}>$10,000–$22,000</div>
            <div style={{ color: 'var(--ink-3)', fontSize: 14 }}>3 posts + 2 stories + 1 TikTok + 1 email</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partnership Structure (06) ---------------- */
function Partnership() {
  const [ref, seen] = useInView(0.06);
  return (
    <section ref={ref} id="partnership" style={{ padding: '140px 0 110px' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>06 — Partnership Structure</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          A handshake.<br/>A calendar.<br/>A <span className="display-italic accent">commitment.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 80, alignItems: 'start' }}>
          <div className={"reveal reveal-d2 " + (seen ? 'in' : '')}>
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: 24 }}>M5V Delivers to STK</div>
            <div style={{ borderTop: '1px solid var(--ink)' }}>
              {M5V_DELIVERS.map((d, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 0.9fr', gap: 16, padding: '18px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'var(--display-font)', fontSize: 18, lineHeight: 1.25 }}>{d.item}</div>
                  <div className="mono" style={{ color: 'var(--ink-3)' }}>{d.freq}</div>
                  <div className="mono" style={{ color: 'var(--accent)', textAlign: 'right' }}>{d.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={"reveal reveal-d3 " + (seen ? 'in' : '')}>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 24 }}>STK Delivers to M5V</div>
            <div style={{ borderTop: '1px solid var(--ink)' }}>
              {STK_DELIVERS.map((s, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, padding: '20px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                  <span className="mono" style={{ color: 'var(--ink-3)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: 'var(--display-font)', fontSize: 20, lineHeight: 1.3 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secret Word feature */}
        <div className={"reveal reveal-d4 " + (seen ? 'in' : '')}
             style={{ marginTop: 100, padding: '64px 56px', background: 'var(--bg-3)', position: 'relative', overflow: 'hidden' }}>
          <div className="mono" style={{ color: 'var(--accent)' }}>The Secret Word Program</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, marginTop: 24, alignItems: 'center' }}>
            <div>
              <h3 className="display" style={{ fontSize: 'clamp(36px, 3.6vw, 56px)', lineHeight: 1.05, marginBottom: 24 }}>
                A rotating word.<br/>A welcome offering.<br/><span className="display-italic accent">A trackable channel.</span>
              </h3>
              <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.5, color: 'var(--ink-2)', maxWidth: '52ch' }}>
                M5V distributes a rotating secret word through our buyer community, email list, and select social Stories. Any guest presenting the word at STK receives a defined welcome offering, tracked by STK's host team. No technology integration. Begins immediately.
              </p>
            </div>
            <SecretWordViz />
          </div>
        </div>
      </div>
    </section>
  );
}

function SecretWordViz() {
  const words = ['VELVET', 'EMBER', 'ASCOT', 'CARDINAL', 'KEYSTONE', 'MERIDIAN'];
  const [i, setI] = useStateA(0);
  useEffectA(() => {
    const t = setInterval(() => setI(x => (x + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--rule)', padding: 32, position: 'relative' }}>
      <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 8 }}>Tonight's word</div>
      <div key={i} style={{
        fontFamily: 'var(--display-font)',
        fontSize: 'clamp(48px, 6vw, 82px)',
        lineHeight: 1,
        color: 'var(--accent)',
        fontStyle: 'italic',
        animation: 'swPulse 0.6s ease-out',
      }}>{words[i]}</div>
      <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 14 }}>Present at STK · Welcome offering applied</div>
      <style>{`@keyframes swPulse { 0% { opacity: 0; transform: translateY(8px); } 100% { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

/* ---------------- Events (07) ---------------- */
function Events() {
  const [ref, seen] = useInView(0.06);
  return (
    <section ref={ref} id="events" style={{ padding: '140px 0 110px', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>07 — Committed Volume</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          $250,000+ in 2026<br/>event spend, <span className="display-italic accent">unallocated.</span>
        </h2>

        <p className={"reveal reveal-d2 " + (seen ? 'in' : '')}
           style={{ marginTop: 24, fontFamily: 'var(--display-font)', fontSize: 'clamp(20px, 1.7vw, 26px)', lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: '60ch' }}>
          This is not speculative. M5V has a confirmed event calendar with real budget already allocated — first event mid-June 2026, fully operational. STK has the opportunity to be the venue for every event on this list.
        </p>

        <div className={"reveal reveal-d3 " + (seen ? 'in' : '')} style={{ marginTop: 72, borderTop: '1px solid var(--ink)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 0.7fr 1fr 1.8fr', gap: 20, padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Event</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Timing</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Guests</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Budget</div>
            <div className="mono" style={{ color: 'var(--ink-3)' }}>Objective</div>
          </div>
          {EVENTS.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 0.7fr 1fr 1.8fr', gap: 20, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
              <div style={{ fontFamily: 'var(--display-font)', fontSize: 22, lineHeight: 1.2 }}>{e.name}</div>
              <div className="mono" style={{ color: 'var(--ink-2)' }}>{e.when}</div>
              <div className="mono" style={{ color: 'var(--ink-2)' }}>{e.guests}</div>
              <div style={{ fontFamily: 'var(--display-font)', fontSize: 24, color: 'var(--accent)' }}>{e.budget}</div>
              <div style={{ color: 'var(--ink-3)', fontSize: 14 }}>{e.objective}</div>
            </div>
          ))}
        </div>

        <div className={"reveal reveal-d4 " + (seen ? 'in' : '')}
             style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          <div className="placeholder" style={{ aspectRatio: '16/10' }}>
            <div className="lbl">STK interior · event-set tablescape</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: 14 }}>The 700-home effect</div>
            <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(22px, 1.9vw, 30px)', lineHeight: 1.35 }}>
              Each closing is a new household. Each household is a potential STK guest, introduced to the brand as part of the single most memorable moment of their home purchase.
            </p>
            <p style={{ marginTop: 20, color: 'var(--ink-2)' }}>
              That lifetime value is not measurable in a single season. It compounds permanently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- The Ask (08) ---------------- */
function TheAsk() {
  const [ref, seen] = useInView(0.06);
  return (
    <section ref={ref} id="ask" style={{ padding: '140px 0 110px' }}>
      <div className="wrap">
        <div className={"section-no reveal " + (seen ? 'in' : '')}>08 — The Ask</div>
        <h2 className={"section-title reveal reveal-d1 " + (seen ? 'in' : '')}>
          A designation.<br/>Preferred access.<br/>That's <span className="display-italic accent">it.</span>
        </h2>

        <p className={"reveal reveal-d2 " + (seen ? 'in' : '')}
           style={{ marginTop: 24, fontFamily: 'var(--display-font)', fontSize: 'clamp(22px, 1.9vw, 30px)', lineHeight: 1.4, color: 'var(--ink-2)', maxWidth: '64ch' }}>
          We are not asking STK to take on any marketing spend. We are not asking for exclusivity. We are asking for a partnership designation and preferred access in exchange for sustained, high-value promotional activity that puts STK in front of 302,000 engaged followers and 50,000+ qualified homebuyers.
        </p>

        <div className={"reveal reveal-d3 " + (seen ? 'in' : '')} style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
          {ASK.map((a, i) => (
            <div key={i} style={{
              padding: '28px 32px 28px 0',
              borderBottom: '1px solid var(--rule)',
              borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
              paddingLeft: i % 2 === 1 ? 32 : 0,
              display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'baseline',
            }}>
              <span className="mono" style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--display-font)', fontSize: 22, lineHeight: 1.3 }}>{a}</span>
            </div>
          ))}
        </div>

        <div className={"reveal reveal-d4 " + (seen ? 'in' : '')}
             style={{ marginTop: 80, padding: '48px 56px', borderLeft: '3px solid var(--accent)', background: 'var(--bg-2)' }}>
          <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 14 }}>In exchange, M5V commits to</div>
          <p style={{ fontFamily: 'var(--display-font)', fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.15, fontStyle: 'italic' }}>
            A minimum of <span className="accent" style={{ fontStyle: 'normal' }}>$10,000/month</span> in equivalent earned media delivered to STK's brand, plus all confirmed event revenue booked exclusively at STK.
          </p>
        </div>

        <div className={"reveal reveal-d5 " + (seen ? 'in' : '')} style={{ marginTop: 100 }}>
          <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 24 }}>Proposed Next Steps</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              ['30-min meeting', 'M5V leadership and STK marketing / GM align on format and confirm first event.'],
              ['One-page MOU',    'Designation, rate structure, content commitment. No complex legal instrument.'],
              ['Secret Word live','Activated within 30 days. Immediate, trackable traffic from M5V channels.'],
              ['June 2026 event','Closing event confirmed at STK with full brief within five business days.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 16 }}>
                <div className="mono" style={{ color: 'var(--accent)', marginBottom: 10 }}>Step 0{i + 1}</div>
                <div style={{ fontFamily: 'var(--display-font)', fontSize: 26, lineHeight: 1.15, marginBottom: 10 }}>{t}</div>
                <div style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Signoff ---------------- */
function Signoff() {
  const [ref, seen] = useInView(0.1);
  return (
    <section ref={ref} id="signoff" style={{ padding: '140px 0 80px', background: 'var(--bg-3)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}>
          <div className={"reveal " + (seen ? 'in' : '')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 36 }}>
              <span className="logo-mark m5v" style={{ height: 80 }}><img src="assets/m5v-logo.jpeg" alt="M5V" /></span>
              <span style={{ fontFamily: 'var(--display-font)', fontSize: 56, fontStyle: 'italic', color: 'var(--accent)', lineHeight: 1 }}>×</span>
              <span className="logo-mark stk" style={{ height: 80 }}><img src="assets/stk-logo.png" alt="STK" /></span>
            </div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 16 }}>STK, we want to be your people.</div>
            <h2 className="display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', lineHeight: 0.95 }}>
              Let's <span className="display-italic accent">talk.</span>
            </h2>
          </div>

          <div className={"reveal reveal-d2 " + (seen ? 'in' : '')} style={{ borderTop: '1px solid var(--ink)', paddingTop: 22 }}>
            <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 8 }}>Prepared by</div>
            <div style={{ fontFamily: 'var(--display-font)', fontSize: 40, lineHeight: 1.1 }}>Sherard McQueen</div>
            <div className="mono" style={{ color: 'var(--ink-2)', marginTop: 10 }}>Managing Partner & Chief Visionary Officer</div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 24 }}>M5V Developments · Toronto, ON / Niagara Region</div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 4 }}>@m5vdevelopments · 232K+ IG · 70K+ TikTok</div>
          </div>
        </div>

        <hr className="rule" style={{ marginTop: 100, marginBottom: 30 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div className="mono" style={{ color: 'var(--ink-3)' }}>M5V × STK · Confidential Partnership Proposal · 2026</div>
          <div className="mono" style={{ color: 'var(--ink-3)' }}>Page 09 / 09</div>
        </div>
      </div>
    </section>
  );
}

window.Demographics = Demographics;
window.MediaValue = MediaValue;
window.Partnership = Partnership;
window.Events = Events;
window.TheAsk = TheAsk;
window.Signoff = Signoff;

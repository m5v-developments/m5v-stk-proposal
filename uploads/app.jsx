// Main app — assembles everything and wires Tweaks.
const { useEffect: useEffectM, useState: useStateM } = React;

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = useStateM(false);

  // Apply theme + font tokens to <body>/<html>
  useEffectM(() => {
    document.body.setAttribute('data-theme', t.theme || 'light');
    const fontMap = {
      'Cormorant Garamond': "'Cormorant Garamond', serif",
      'DM Serif Display':   "'DM Serif Display', serif",
      'Playfair Display':   "'Playfair Display', serif",
    };
    document.documentElement.style.setProperty('--display-font', fontMap[t.headlineFont] || fontMap['Cormorant Garamond']);
    if (t.accent) document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.theme, t.headlineFont, t.accent]);

  useEffectM(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={"topnav" + (scrolled ? ' scrolled' : '')}>
        <div className="brand">
          <span className="logo-chip m5v"><img src="assets/m5v-logo.jpeg" alt="M5V Developments" /></span>
          <span className="x">×</span>
          <span className="logo-chip stk"><img src="assets/stk-logo.png" alt="STK Steakhouse" /></span>
        </div>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#profile">M5V</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#demographics">Demographics</a>
          <a href="#media">Media</a>
          <a href="#partnership">Partnership</a>
          <a href="#events">Events</a>
          <a href="#ask">The Ask</a>
        </nav>
        <button className="cta" onClick={() => document.getElementById('ask').scrollIntoView({ behavior: 'smooth' })}>The Ask →</button>
      </header>

      <main>
        <Hero />
        <Overview />
        <CompanyProfile />
        <Portfolio />
        <Demographics />
        <MediaValue />
        <Partnership />
        <Events />
        <TheAsk />
        <Signoff />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={['light', 'dark']}
          onChange={v => setTweak('theme', v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={['#7a1f1a', '#c8662a', '#1f4a3d', '#2b2f5a']}
          onChange={v => setTweak('accent', v)}
        />
        <TweakSection label="Typography" />
        <TweakSelect
          label="Headline font"
          value={t.headlineFont}
          options={['Cormorant Garamond', 'DM Serif Display', 'Playfair Display']}
          onChange={v => setTweak('headlineFont', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

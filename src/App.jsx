import { IcSpark } from './components/Icons.jsx'
import { PhoneScreen } from './components/PhoneScreen.jsx'
import { Prototype } from './components/Prototype.jsx'
import { SCREENS, FLOWS } from './screens/registry.jsx'

function Masthead() {
  return (
    <>
      <div className="masthead">
        <div className="brandlockup">
          <div className="glyph"><IcSpark size={28} /></div>
          <div>
            <h1>SpendWise</h1>
            <div className="sub">AI-powered personal finance · mobile app concept</div>
          </div>
        </div>
        <div className="tag"><span className="dot" /> Ungrammary UI/UX Assignment</div>
      </div>

      <div className="lede">
        <h2>Money that looks after itself.</h2>
        <p>
          SpendWise predicts your spending for the month, flags the small “leak” expenses draining your account,
          and nudges you to divert that money into small, low-risk investments — so growing money feels calm,
          not stressful.
        </p>
        <div className="who">
          <span>👤 Young professionals, 22–30, India</span>
          <span>📱 Phone-first</span>
          <span>🌱 New to investing</span>
          <span>₹ Rupee-native</span>
        </div>
      </div>
    </>
  )
}

function DesignSystem() {
  const colors = [
    ['Brand', '#5B4FE9'], ['Growth', '#12B76A'], ['Warning', '#F79009'],
    ['Error', '#F04438'], ['Surface', '#FFFFFF'], ['Ink', '#14161C'],
  ]
  return (
    <div className="dsys">
      <div className="dcard">
        <h3>Colour</h3>
        <div className="swatches">
          {colors.map(([n, c]) => (
            <div className="swatch" key={n}><i style={{ background: c }} /><span>{n}</span></div>
          ))}
        </div>
      </div>
      <div className="dcard">
        <h3>Type · Inter</h3>
        <div className="typerow"><b style={{ fontSize: 26, fontWeight: 800 }}>₹48,200</b><span className="muted" style={{ fontSize: 11 }}>Display / 800</span></div>
        <div className="typerow"><b style={{ fontSize: 16, fontWeight: 700 }}>Heading</b><span className="muted" style={{ fontSize: 11 }}>16 / 700</span></div>
        <div className="typerow"><span style={{ fontSize: 14 }}>Comfortable body text</span><span className="muted" style={{ fontSize: 11 }}>14 / 400</span></div>
        <div className="typerow"><span className="muted" style={{ fontSize: 12 }}>Caption label</span><span className="muted" style={{ fontSize: 11 }}>12 / 600</span></div>
      </div>
      <div className="dcard">
        <h3>Components</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>Primary button</button>
          <div className="chipsample">
            <span className="chip on">Food</span>
            <span className="chip risk-low">Low risk</span>
            <span className="chip risk-med">Medium</span>
            <span className="pill amber">90% used</span>
          </div>
        </div>
      </div>
      <div className="dcard">
        <h3>Principles</h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, fontSize: 12.5, color: 'var(--ink-2)' }}>
          <li>◦ One primary action per screen</li>
          <li>◦ Large, legible numbers (tabular)</li>
          <li>◦ Never colour alone — text agrees</li>
          <li>◦ 8-pt spacing · tap targets ≥ 44px</li>
          <li>◦ Plain, friendly, no jargon</li>
        </ul>
      </div>
    </div>
  )
}

export default function App() {
  let n = 0
  const total = FLOWS.reduce((s, f) => s + f.screens.length, 0)
  return (
    <div className="page">
      <Masthead />

      {/* interactive prototype hero */}
      <section className="proto-band">
        <Prototype />
      </section>

      <DesignSystem />

      {/* full static gallery — every screen, grouped by flow */}
      <div className="section" style={{ marginTop: 46 }}>
        <div className="kicker">All screens</div>
        <h2>Every screen, grouped by flow</h2>
        <p>The complete set below — {total} screens across onboarding and the five main tabs. The phone above is the live, tappable version.</p>
      </div>

      {FLOWS.map((sec) => (
        <section key={sec.id}>
          <div className="section">
            <div className="kicker">{sec.kicker}</div>
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
          </div>
          <div className="gallery">
            {sec.screens.map((id) => {
              const s = SCREENS[id]
              n += 1
              return (
                <div className="screen-wrap" key={id}>
                  <PhoneScreen id={id} screenKey={id} />
                  <div className="screen-cap">
                    <b><span className="screen-num tnum">{String(n).padStart(2, '0')}</span>{s.name}</b>
                    <span>{s.sub}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}

      <footer className="footer">
        <p>
          <b>SpendWise</b> — a mobile-first fintech concept · {total} screens ·
          Designed &amp; built for the <b>Ungrammary</b> UI/UX assignment.
        </p>
        <p style={{ marginTop: 8 }}>Alternative names considered: <b>Sprout</b> · <b>Nudge</b> · <b>Driftless</b> · <b>Paise</b></p>
      </footer>
    </div>
  )
}

import { Phone } from '../components/Phone.jsx'
import { AppBar, AreaLine, inr } from '../components/UI.jsx'
import { IcShield, IcArrowUp, IcInfo, IcCheck, IcChevR, IcSpark, IcCoins } from '../components/Icons.jsx'

const FUNDS = [
  { n: 'Steady Growth', d: 'Debt + gold mix', risk: 'low', ret: '7–9%', color: 'var(--green)', tag: 'Best for you' },
  { n: 'Balanced Blend', d: 'Hybrid equity fund', risk: 'med', ret: '9–12%', color: 'var(--amber)' },
  { n: 'Digital Gold', d: 'Buy from ₹10', risk: 'low', ret: '6–8%', color: 'var(--green)' },
  { n: 'Index Starter', d: 'Nifty 50 index', risk: 'high', ret: '11–14%', color: 'var(--red)' },
]
const riskChip = (r) => r === 'low' ? 'risk-low' : r === 'med' ? 'risk-med' : 'risk-high'
const riskLabel = (r) => r === 'low' ? 'Low risk' : r === 'med' ? 'Medium risk' : 'Higher risk'

/* Recommendations */
export function InvestRecs() {
  return (
    <Phone tab="invest">
      <AppBar title="Invest" sub="Small, low-risk, automatic" right={<span className="pill brand"><IcSpark size={13} /> For you</span>} />
      <div className="pad" style={{ paddingTop: 2 }}>
        <div className="card" style={{ background: 'linear-gradient(155deg,#12B76A,#0B8F54)', border: 'none', color: '#fff' }}>
          <span style={{ fontSize: 12.5, opacity: 0.9, fontWeight: 600 }}>You have leaks worth</span>
          <div className="display sm tnum" style={{ margin: '4px 0 2px' }}>{inr(2400)}<span style={{ fontSize: 15, opacity: 0.7 }}>/mo</span></div>
          <p style={{ fontSize: 12.5, opacity: 0.9 }}>Put them to work. Start with as little as ₹100.</p>
        </div>

        <div className="banner brand" style={{ margin: '14px 0' }}>
          <IcShield size={18} className="bi" style={{ color: 'var(--brand)' }} />
          <p style={{ fontSize: 12.5 }}>New to investing? We only suggest <b style={{ color: 'var(--ink)' }}>low-risk</b> options first. No jargon, no lock-ins.</p>
        </div>

        <div className="card-h" style={{ margin: '4px 2px 8px' }}><h4 style={{ fontSize: 14 }}>Recommended for you</h4></div>
        <div className="stack-gap">
          {FUNDS.map((f, i) => (
            <div className="card" key={i} style={{ padding: 14, borderColor: f.tag ? 'var(--green)' : 'var(--line)', boxShadow: f.tag ? '0 0 0 3px var(--green-soft)' : 'var(--sh-1)' }}>
              <div className="rowflex">
                <div className="ic" style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--surface-2)', color: f.color }}><IcCoins size={22} /></div>
                <div className="grow">
                  <div className="rowflex" style={{ gap: 8 }}><b style={{ fontSize: 15 }}>{f.n}</b>{f.tag && <span className="pill green" style={{ fontSize: 10 }}>{f.tag}</span>}</div>
                  <div className="muted" style={{ fontSize: 12.5 }}>{f.d}</div>
                </div>
                <IcChevR size={20} className="muted" />
              </div>
              <div className="rowflex" style={{ marginTop: 12, gap: 8 }}>
                <span className={'chip ' + riskChip(f.risk)} style={{ padding: '6px 11px' }}>{riskLabel(f.risk)}</span>
                <span className="pill grey" style={{ fontSize: 11.5 }}>Est. {f.ret} / yr</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  )
}

/* Investment detail */
export function InvestDetail() {
  const pts = [{ x: 0, y: 10 }, { x: 1, y: 12 }, { x: 2, y: 11.4 }, { x: 3, y: 13 }, { x: 4, y: 14.2 }, { x: 5, y: 15, big: true }]
  return (
    <Phone tab="invest">
      <AppBar title="Steady Growth" sub="Debt + gold · Low risk" back right={<span className="pill green">Low risk</span>} />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="card">
          <div className="spread">
            <div>
              <span className="eyebrow">Est. return</span>
              <div className="display sm tnum" style={{ color: 'var(--green)' }}>7–9%<span style={{ fontSize: 14, opacity: 0.6 }}>/yr</span></div>
            </div>
            <span className="pill green"><IcArrowUp size={13} /> Steady</span>
          </div>
          <div style={{ marginTop: 10 }}><AreaLine points={pts} w={252} h={92} color="var(--green)" fill="rgba(18,183,106,0.12)" /></div>
          <div className="muted center" style={{ fontSize: 11.5, marginTop: 4 }}>Past 5 years · illustrative</div>
        </div>

        <div className="rowflex" style={{ gap: 12, marginTop: 14 }}>
          {[['Min amount', '₹100'], ['Lock-in', 'None'], ['Volatility', 'Very low']].map(([k, v], i) => (
            <div className="card grow center" key={i} style={{ padding: '13px 6px' }}>
              <div className="muted" style={{ fontSize: 11 }}>{k}</div>
              <b style={{ fontSize: 15, marginTop: 3, display: 'block' }}>{v}</b>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          <div className="card-h"><h4>Why we suggest this</h4></div>
          {['Matches your “play it safe” comfort level', 'Barely moves when markets dip', 'Withdraw anytime, no penalty'].map((t, i) => (
            <div className="row" key={i} style={{ padding: '9px 0', borderTop: i ? '1px solid var(--line)' : 'none' }}>
              <div className="ic" style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--green-soft)', color: 'var(--green)' }}><IcCheck size={17} sw={2.4} /></div>
              <div className="body"><b style={{ fontSize: 13.5, fontWeight: 600 }}>{t}</b></div>
            </div>
          ))}
        </div>

        <div className="banner amber" style={{ marginTop: 14 }}>
          <IcInfo size={18} className="bi" style={{ color: 'var(--amber)' }} />
          <p style={{ fontSize: 12 }}>Investments carry some risk. Returns aren’t guaranteed. This isn’t financial advice.</p>
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 12 }}>
        <button className="btn btn-green">Simulate & invest</button>
      </div>
    </Phone>
  )
}

/* Simulator */
export function Simulator() {
  const pts = [{ x: 0, y: 2400 }, { x: 1, y: 8000 }, { x: 2, y: 15000 }, { x: 3, y: 22000 }, { x: 4, y: 30200, big: true }]
  return (
    <Phone tab="invest">
      <AppBar title="Simulator" sub="See it grow before you commit" back />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="card center" style={{ padding: '18px 16px' }}>
          <span className="eyebrow">Investing every month</span>
          <div className="display tnum" style={{ margin: '4px 0 12px' }}><span className="rs">₹</span>2,400</div>
          {/* slider */}
          <div style={{ position: 'relative', height: 34 }}>
            <div className="meter" style={{ height: 6, marginTop: 12 }}><i style={{ width: '48%', background: 'var(--brand)' }} /></div>
            <div style={{ position: 'absolute', left: '48%', top: 6, width: 24, height: 24, borderRadius: '50%', background: '#fff', border: '3px solid var(--brand)', boxShadow: 'var(--sh-2)', transform: 'translateX(-50%)' }} />
          </div>
          <div className="spread muted" style={{ fontSize: 11.5, marginTop: 2 }}><span>₹100</span><span>₹5,000</span></div>
        </div>

        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', margin: '18px 0 9px' }}>Time horizon</label>
        <div className="seg"><button>1 yr</button><button>3 yr</button><button className="on">5 yr</button><button>10 yr</button></div>

        <div className="card" style={{ marginTop: 16, background: 'var(--green-soft)', border: 'none' }}>
          <div className="spread">
            <div><span className="eyebrow" style={{ color: '#0B7B47' }}>In 5 years, about</span><div className="display sm tnum" style={{ color: 'var(--green)' }}>{inr(1.75 * 100000)}</div></div>
            <div className="center"><div className="muted" style={{ fontSize: 11 }}>You put in</div><b className="tnum">{inr(144000)}</b><div style={{ fontSize: 11.5, color: '#0B7B47', fontWeight: 700, marginTop: 2 }}>+{inr(31000)} growth</div></div>
          </div>
          <div style={{ marginTop: 12 }}><AreaLine points={pts} w={252} h={86} color="var(--green)" fill="rgba(18,183,106,0.16)" /></div>
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 12 }}>
        <button className="btn btn-green">Continue</button>
      </div>
    </Phone>
  )
}

/* Round-up toggle */
const Toggle = ({ on }) => <div className={'toggle' + (on ? ' on' : '')}><i /></div>
export function RoundUp() {
  return (
    <Phone tab="invest">
      <AppBar title="Auto-invest" sub="Set it and forget it" back />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="card">
          <div className="rowflex">
            <div className="ic" style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--brand-soft)', color: 'var(--brand)' }}><IcCoins size={22} /></div>
            <div className="grow"><b style={{ fontSize: 15 }}>Round-up spare change</b><p className="muted" style={{ fontSize: 12.5 }}>Round each spend to ₹10 and invest the difference.</p></div>
            <Toggle on />
          </div>
          <div className="card" style={{ marginTop: 12, background: 'var(--surface-2)', padding: 12 }}>
            <div className="spread" style={{ fontSize: 12.5 }}><span className="ink2">Coffee — ₹182</span><span className="ink2">rounds to ₹190</span></div>
            <div className="spread" style={{ marginTop: 6 }}><b style={{ fontSize: 13 }}>Invested</b><b className="tnum" style={{ color: 'var(--green)' }}>+₹8</b></div>
          </div>
          <p className="muted center" style={{ fontSize: 12, marginTop: 10 }}>≈ {inr(320)} a month from spare change alone</p>
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          {[
            { t: 'Divert flagged leaks', d: '₹2,400/mo · low-risk fund', on: true },
            { t: 'Pay-day auto-invest', d: 'Invest ₹1,000 every 1st', on: true },
            { t: 'Weekend spend guard', d: 'Save what you don’t spend', on: false },
          ].map((r, i) => (
            <div className="row" key={i}>
              <div className="body"><b>{r.t}</b><span>{r.d}</span></div>
              <Toggle on={r.on} />
            </div>
          ))}
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 12 }}>
        <button className="btn btn-primary">Confirm auto-invest</button>
      </div>
    </Phone>
  )
}

/* Confirm & success */
export function InvestSuccess() {
  return (
    <Phone darkStatus bg="linear-gradient(160deg,#12B76A 0%,#0B9E5C 55%,#0B7B47 100%)">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#fff', padding: '18px 22px 26px' }}>
        <div className="grow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', marginBottom: 22 }}>
            <IcCheck size={54} sw={2.4} />
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}>You’re investing! 🎉</h1>
          <p style={{ fontSize: 15, opacity: 0.92, marginTop: 10, maxWidth: 250 }}>
            {inr(2400)}/month is now going into <b>Steady Growth</b>. First deposit on 1st Sep.
          </p>
          <div style={{ marginTop: 22, background: 'rgba(255,255,255,0.16)', borderRadius: 18, padding: '16px 20px', width: '100%' }}>
            <div className="spread"><span style={{ opacity: 0.9, fontSize: 13 }}>Monthly</span><b className="tnum">{inr(2400)}</b></div>
            <div className="spread" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.2)' }}><span style={{ opacity: 0.9, fontSize: 13 }}>Est. in 5 years</span><b className="tnum">~{inr(175000)}</b></div>
          </div>
        </div>
        <div className="stack-gap">
          <button className="btn" style={{ background: '#fff', color: 'var(--green)' }}>View my investments</button>
          <button className="btn btn-ghost" style={{ color: '#fff' }}>Back to home</button>
        </div>
      </div>
    </Phone>
  )
}

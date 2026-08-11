import { AppBar, BellBtn, Donut, inr } from '../components/UI.jsx'
import { useNav } from '../navContext.js'
import { IcSpark, IcLeak, IcArrowUp, IcInfo } from '../components/Icons.jsx'

const CATS = [
  { n: 'Food & dining', v: 14200, color: '#5B4FE9', pct: 30 },
  { n: 'Shopping', v: 9800, color: '#12B76A', pct: 20 },
  { n: 'Bills & rent', v: 12000, color: '#F79009', pct: 25 },
  { n: 'Transport', v: 6200, color: '#6C5CF5', pct: 13 },
  { n: 'Other', v: 6000, color: '#C7CBD6', pct: 12 },
]

/* Home — spend prediction, breakdown, leaks, divert nudge (single scroll) */
export function Home() {
  const nav = useNav()
  return (
    <>
      <AppBar title="Hi, Aarav 👋" sub="August · day 11 of 31" right={<BellBtn />} />
      <div className="pad" style={{ paddingTop: 2 }}>
        {/* prediction hero */}
        <div className="card grad-brand" style={{ border: 'none', color: '#fff' }}>
          <div className="spread">
            <span style={{ fontSize: 12.5, fontWeight: 600, opacity: 0.85 }}>Predicted spend this month</span>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}><IcSpark size={13} /> AI</span>
          </div>
          <div className="display tnum" style={{ margin: '8px 0 2px' }}><span className="rs" style={{ opacity: 0.7 }}>₹</span>48,200</div>
          <div style={{ fontSize: 12.5, opacity: 0.9 }}>of {inr(62000)} income · you’re on track</div>
          <div className="meter" style={{ marginTop: 14, background: 'rgba(255,255,255,0.25)' }}>
            <i style={{ width: '52%', background: '#fff' }} />
          </div>
          <div className="spread" style={{ marginTop: 8, fontSize: 11.5, opacity: 0.9 }}>
            <span>{inr(19100)} spent so far</span>
            <span>{inr(29100)} predicted left</span>
          </div>
        </div>

        {/* leak nudge banner */}
        <div className="card tap" style={{ marginTop: 14, borderColor: 'transparent', background: 'var(--amber-soft)' }} onClick={() => nav.go('leaks')}>
          <div className="rowflex" style={{ alignItems: 'flex-start' }}>
            <div className="ic" style={{ background: '#fff', color: 'var(--amber)', width: 42, height: 42 }}><IcLeak size={22} /></div>
            <div className="grow">
              <b style={{ fontSize: 14.5 }}>We spotted 3 small leaks</b>
              <p className="ink2" style={{ fontSize: 12.5, marginTop: 2 }}>About {inr(2400)}/mo slipping away on things you barely use.</p>
            </div>
          </div>
          <button className="btn btn-sm" style={{ width: '100%', marginTop: 12, background: 'var(--amber)', color: '#fff' }} onClick={() => nav.go('leaks')}>Review leaks</button>
        </div>

        {/* category breakdown */}
        <div className="card" style={{ marginTop: 14 }}>
          <div className="card-h"><h4>Where it’s going</h4><span className="link tap" onClick={() => nav.tab('reports')}>Details</span></div>
          <div className="rowflex" style={{ gap: 16, alignItems: 'center' }}>
            <Donut data={CATS.map((c) => ({ value: c.v, color: c.color }))} size={120} thickness={19}
              center={<div><div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>{inr(48200)}</div><div style={{ fontSize: 10.5, color: 'var(--muted)' }}>predicted</div></div>} />
            <div className="legend grow">
              {CATS.map((c, i) => (
                <div className="li" key={i}>
                  <i style={{ background: c.color }} />
                  <span>{c.n}</span>
                  <span className="pct tnum">{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* divert to invest nudge */}
        <div className="card tap" style={{ marginTop: 14, background: 'var(--green-soft)', border: 'none' }} onClick={() => nav.go('divert')}>
          <div className="rowflex" style={{ alignItems: 'flex-start' }}>
            <div className="ic" style={{ background: '#fff', color: 'var(--green)', width: 42, height: 42 }}><IcArrowUp size={22} /></div>
            <div className="grow">
              <b style={{ fontSize: 14.5 }}>Turn leaks into growth</b>
              <p className="ink2" style={{ fontSize: 12.5, marginTop: 2 }}>Divert {inr(2400)} into a low-risk fund. In a year that’s about <b style={{ color: '#0B7B47' }}>{inr(30000)}+</b>.</p>
            </div>
          </div>
          <button className="btn btn-green btn-sm" style={{ width: '100%', marginTop: 12 }} onClick={() => nav.go('divert')}>Divert to invest</button>
        </div>
      </div>
    </>
  )
}

/* Leak flags detail */
export function LeakFlags() {
  const nav = useNav()
  const leaks = [
    { e: '🎬', n: 'OTT Premium', d: 'Not opened in 38 days', v: 649 },
    { e: '🏋️', n: 'Gym membership', d: 'Last visit 6 weeks ago', v: 1200 },
    { e: '☕', n: 'Coffee runs', d: '11 orders this month', v: 560 },
  ]
  return (
    <>
      <AppBar title="Leak flags" sub="3 found · ~₹2,400/mo" back right={<span className="pill amber">Save {inr(2400)}</span>} />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="banner amber" style={{ marginBottom: 14 }}>
          <IcInfo size={18} className="bi" style={{ color: 'var(--amber)' }} />
          <div><b>These are just nudges</b><p>Small recurring spends you may have forgotten. You decide — nothing happens automatically.</p></div>
        </div>

        <div className="stack-gap">
          {leaks.map((l, i) => (
            <div className="card" key={i} style={{ padding: 14 }}>
              <div className="rowflex">
                <div className="ic" style={{ width: 46, height: 46, borderRadius: 14, background: 'var(--surface-2)', fontSize: 22 }}>{l.e}</div>
                <div className="grow">
                  <div className="spread"><b style={{ fontSize: 15 }}>{l.n}</b><span className="tnum" style={{ fontWeight: 800 }}>{inr(l.v)}<small className="muted" style={{ fontWeight: 600, fontSize: 11 }}>/mo</small></span></div>
                  <div className="muted" style={{ fontSize: 12.5, marginTop: 2 }}>{l.d}</div>
                </div>
              </div>
              <div className="rowflex" style={{ marginTop: 12, gap: 8 }}>
                <button className="btn btn-secondary btn-sm grow">Keep</button>
                <button className="btn btn-primary btn-sm grow" onClick={() => nav.go('divert')}>Divert it</button>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 14, background: 'var(--brand-soft)', border: 'none', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>Divert all 3 leaks and invest</div>
          <div className="display sm tnum" style={{ color: 'var(--brand)', margin: '6px 0 12px' }}>{inr(2400)}<span style={{ fontSize: 15, opacity: 0.6 }}>/mo</span></div>
          <button className="btn btn-primary cta" onClick={() => nav.go('divert')}>Divert all to investing</button>
        </div>
      </div>
    </>
  )
}

/* Divert-to-invest confirmation nudge (bottom-sheet style) */
export function DivertNudge() {
  const nav = useNav()
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="grow" style={{ background: 'rgba(20,22,28,0.35)' }} onClick={() => nav.back()} />
      <div className="sheet sheet-up">
        <div className="grabber" />
        <div className="hero-ill pop-in" style={{ width: 80, height: 80, background: 'var(--green-soft)', color: 'var(--green)', margin: '0 auto 16px' }}>
          <IcArrowUp size={38} />
        </div>
        <h2 className="center" style={{ fontSize: 21, fontWeight: 800, letterSpacing: '-0.02em' }}>Divert {inr(2400)} to invest?</h2>
        <p className="center ink2" style={{ fontSize: 14, marginTop: 6, padding: '0 8px' }}>
          We’ll move this into your <b style={{ color: 'var(--ink)' }}>Steady Growth</b> fund each month. You can stop anytime.
        </p>

        <div className="card" style={{ marginTop: 18, background: 'var(--surface-2)' }}>
          <div className="spread" style={{ padding: '4px 0' }}><span className="ink2" style={{ fontSize: 13.5 }}>Monthly amount</span><b className="tnum">{inr(2400)}</b></div>
          <div className="spread" style={{ padding: '10px 0', borderTop: '1px solid var(--line)' }}><span className="ink2" style={{ fontSize: 13.5 }}>Risk level</span><span className="chip risk-low" style={{ padding: '5px 10px' }}>Low</span></div>
          <div className="spread" style={{ padding: '10px 0 4px', borderTop: '1px solid var(--line)' }}><span className="ink2" style={{ fontSize: 13.5 }}>Est. value in 1 year</span><b className="tnum" style={{ color: 'var(--green)' }}>~{inr(30200)}</b></div>
        </div>

        <div className="stack-gap" style={{ marginTop: 18 }}>
          <button className="btn btn-green cta" onClick={() => nav.go('investSuccess')}>Confirm &amp; start</button>
          <button className="btn btn-ghost" onClick={() => nav.back()}>Not now</button>
        </div>
      </div>
    </div>
  )
}

import { Phone } from '../components/Phone.jsx'
import { AppBar, Meter, Bars, inr } from '../components/UI.jsx'
import { IcPlus, IcInfo, IcChevR, IcCheck } from '../components/Icons.jsx'

const BUDGETS = [
  { e: '🍔', n: 'Food & dining', spent: 11800, cap: 12000, color: 'var(--amber)', pct: 98, state: 'warn' },
  { e: '🛍️', n: 'Shopping', spent: 4200, cap: 8000, color: 'var(--green)', pct: 53, state: 'ok' },
  { e: '🛵', n: 'Transport', spent: 3100, cap: 6000, color: 'var(--green)', pct: 52, state: 'ok' },
  { e: '🎬', n: 'Subscriptions', spent: 1850, cap: 1500, color: 'var(--red)', pct: 100, state: 'over' },
  { e: '💡', n: 'Bills & utilities', spent: 6400, cap: 9000, color: 'var(--brand)', pct: 71, state: 'ok' },
]

/* Budgets list */
export function BudgetList() {
  return (
    <Phone tab="budget">
      <AppBar title="Budgets" sub="August · ₹36,500 of ₹47,000"
        right={<button className="iconbtn" aria-label="Add budget"><IcPlus size={20} /></button>} />
      <div className="pad" style={{ paddingTop: 2 }}>
        <div className="card" style={{ marginBottom: 4 }}>
          <div className="spread"><span className="eyebrow">Total budget left</span><span className="pill green">On track</span></div>
          <div className="display sm tnum" style={{ margin: '6px 0 10px' }}>{inr(10500)}</div>
          <Meter pct={78} color="var(--brand)" />
          <div className="spread" style={{ marginTop: 8, fontSize: 11.5 }} >
            <span className="muted">{inr(36500)} spent</span><span className="muted">{inr(47000)} budget</span>
          </div>
        </div>

        <div className="card-h" style={{ margin: '18px 2px 8px' }}><h4 style={{ fontSize: 14 }}>By category</h4><span className="link">Edit all</span></div>

        <div className="stack-gap">
          {BUDGETS.map((b, i) => (
            <div className="card" key={i} style={{ padding: 14 }}>
              <div className="rowflex" style={{ marginBottom: 10 }}>
                <div className="ic" style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--surface-2)', fontSize: 19 }}>{b.e}</div>
                <div className="grow">
                  <div className="spread">
                    <b style={{ fontSize: 14.5 }}>{b.n}</b>
                    <b className="tnum" style={{ fontSize: 14 }}>{inr(b.spent)} <span className="muted" style={{ fontWeight: 500, fontSize: 12 }}>/ {inr(b.cap)}</span></b>
                  </div>
                </div>
              </div>
              <Meter pct={b.pct} color={b.color} />
              <div style={{ marginTop: 7, fontSize: 11.5, fontWeight: 600, color: b.state === 'over' ? 'var(--red)' : b.state === 'warn' ? 'var(--amber)' : 'var(--muted)' }}>
                {b.state === 'over' ? `Over by ${inr(b.spent - b.cap)}` : b.state === 'warn' ? `${inr(b.cap - b.spent)} left · getting close` : `${inr(b.cap - b.spent)} left`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  )
}

/* Set / edit budget */
export function EditBudget() {
  const presets = [8000, 10000, 12000, 15000]
  return (
    <Phone tab="budget">
      <AppBar title="Edit budget" sub="Food & dining" back />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="card center" style={{ padding: '22px 16px' }}>
          <div style={{ fontSize: 44, marginBottom: 6 }}>🍔</div>
          <span className="eyebrow">Monthly limit</span>
          <div className="display tnum" style={{ margin: '4px 0 0' }}><span className="rs">₹</span>12,000</div>
          <div className="muted" style={{ fontSize: 12.5, marginTop: 6 }}>You spent {inr(11400)} on average, last 3 months</div>
        </div>

        <div className="chipsample" style={{ margin: '16px 0 8px', justifyContent: 'center' }}>
          {presets.map((p, i) => <span key={i} className={'chip' + (p === 12000 ? ' on' : '')}>{inr(p)}</span>)}
        </div>

        <div className="banner brand" style={{ marginTop: 10 }}>
          <IcInfo size={18} className="bi" style={{ color: 'var(--brand)' }} />
          <div><b>Smart suggestion</b><p>Set ₹11,000 and we’ll help you divert the extra ₹1,000 to investing.</p></div>
        </div>

        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', margin: '18px 0 9px' }}>Alert me when I reach</label>
        <div className="seg">
          <button>75%</button><button className="on">90%</button><button>100%</button>
        </div>
      </div>
      <div className="pad mt-a stack-gap" style={{ paddingTop: 16 }}>
        <button className="btn btn-primary">Save budget</button>
      </div>
    </Phone>
  )
}

/* Anomaly alert */
export function AnomalyAlert() {
  return (
    <Phone tab="budget">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="grow" style={{ background: 'rgba(20,22,28,0.35)' }} />
        <div style={{ background: 'var(--surface)', borderRadius: '26px 26px 0 0', padding: '10px 20px 24px', boxShadow: '0 -10px 30px rgba(0,0,0,0.12)' }}>
          <div style={{ width: 40, height: 4, borderRadius: 3, background: 'var(--line)', margin: '0 auto 18px' }} />
          <div className="hero-ill" style={{ width: 80, height: 80, background: 'var(--amber-soft)', color: 'var(--amber)', margin: '0 auto 14px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5M12 17v.5"/></svg>
          </div>
          <div className="center"><span className="pill amber">Unusual activity</span></div>
          <h2 className="center" style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 10 }}>That’s a bigger spend than usual</h2>
          <p className="center ink2" style={{ fontSize: 14, marginTop: 6, padding: '0 4px' }}>
            You spent <b style={{ color: 'var(--ink)' }}>{inr(4300)}</b> at <b style={{ color: 'var(--ink)' }}>Zomato</b> today — about <b style={{ color: 'var(--amber)' }}>3.5×</b> your usual food order.
          </p>

          <div className="card" style={{ marginTop: 16, background: 'var(--surface-2)' }}>
            <div className="row" style={{ padding: '8px 0' }}>
              <div className="ic" style={{ background: '#fff', fontSize: 18 }}>🍔</div>
              <div className="body"><b>Zomato · Party order</b><span>Today, 8:42 PM</span></div>
              <div className="amt tnum" style={{ color: 'var(--amber)' }}>-{inr(4300)}</div>
            </div>
          </div>

          <div className="stack-gap" style={{ marginTop: 16 }}>
            <button className="btn btn-secondary">This was expected</button>
            <button className="btn btn-primary">Review my food budget</button>
          </div>
        </div>
      </div>
    </Phone>
  )
}

/* Weekly / monthly summary */
export function BudgetSummary() {
  const weeks = [
    { label: 'W1', segments: [{ v: 6200, color: '#5B4FE9' }, { v: 2400, color: '#12B76A' }] },
    { label: 'W2', segments: [{ v: 7800, color: '#5B4FE9' }, { v: 1900, color: '#12B76A' }] },
    { label: 'W3', segments: [{ v: 5400, color: '#5B4FE9' }, { v: 2600, color: '#12B76A' }] },
    { label: 'W4', segments: [{ v: 4800, color: '#5B4FE9' }, { v: 3200, color: '#12B76A' }] },
  ]
  return (
    <Phone tab="budget">
      <AppBar title="Summary" sub="Your money, this month" />
      <div className="pad" style={{ paddingTop: 2 }}>
        <div className="seg" style={{ marginBottom: 14 }}>
          <button>Weekly</button><button className="on">Monthly</button>
        </div>

        <div className="rowflex" style={{ gap: 12, marginBottom: 14 }}>
          <div className="card grow center" style={{ padding: '16px 10px' }}>
            <span className="eyebrow">Spent</span>
            <div className="display sm tnum" style={{ margin: '4px 0 2px' }}>{inr(36500)}</div>
            <span className="pill amber" style={{ fontSize: 11 }}>▲ 6% vs last</span>
          </div>
          <div className="card grow center" style={{ padding: '16px 10px' }}>
            <span className="eyebrow">Saved</span>
            <div className="display sm tnum" style={{ margin: '4px 0 2px', color: 'var(--green)' }}>{inr(9400)}</div>
            <span className="pill green" style={{ fontSize: 11 }}>▲ 12% vs last</span>
          </div>
        </div>

        <div className="card">
          <div className="card-h"><h4>Spend vs save by week</h4></div>
          <Bars cols={weeks} />
          <div className="rowflex" style={{ gap: 16, marginTop: 12, justifyContent: 'center', fontSize: 12 }}>
            <span className="rowflex" style={{ gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 3, background: '#5B4FE9', display: 'inline-block' }} /> Spent</span>
            <span className="rowflex" style={{ gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 3, background: '#12B76A', display: 'inline-block' }} /> Saved</span>
          </div>
        </div>

        <div className="card" style={{ marginTop: 14, background: 'var(--green-soft)', border: 'none' }}>
          <div className="rowflex">
            <div className="ic" style={{ width: 42, height: 42, background: '#fff', color: 'var(--green)' }}><IcCheck size={22} sw={2.2} /></div>
            <div className="grow"><b style={{ fontSize: 14.5 }}>Best week yet 🎉</b><p className="ink2" style={{ fontSize: 12.5 }}>Week 4 you saved {inr(3200)} — your highest this month.</p></div>
          </div>
        </div>
      </div>
    </Phone>
  )
}

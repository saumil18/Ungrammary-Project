import { Phone } from '../components/Phone.jsx'
import { AppBar, Bars, AreaLine, inr } from '../components/UI.jsx'
import { IcSpark, IcArrowUp, IcInfo, IcArrowDown } from '../components/Icons.jsx'

/* Spend vs save graph */
export function SpendVsSave() {
  const months = [
    { label: 'Mar', segments: [{ v: 42000, color: '#5B4FE9' }, { v: 6000, color: '#12B76A' }] },
    { label: 'Apr', segments: [{ v: 45000, color: '#5B4FE9' }, { v: 5200, color: '#12B76A' }] },
    { label: 'May', segments: [{ v: 39000, color: '#5B4FE9' }, { v: 8000, color: '#12B76A' }] },
    { label: 'Jun', segments: [{ v: 41000, color: '#5B4FE9' }, { v: 7600, color: '#12B76A' }] },
    { label: 'Jul', segments: [{ v: 38000, color: '#5B4FE9' }, { v: 9200, color: '#12B76A' }] },
    { label: 'Aug', segments: [{ v: 36500, color: '#5B4FE9' }, { v: 9400, color: '#12B76A' }] },
  ]
  return (
    <Phone tab="reports">
      <AppBar title="Reports" sub="6 months at a glance" />
      <div className="pad" style={{ paddingTop: 2 }}>
        <div className="seg" style={{ marginBottom: 14 }}>
          <button>3M</button><button className="on">6M</button><button>1Y</button>
        </div>

        <div className="rowflex" style={{ gap: 12, marginBottom: 14 }}>
          <div className="card grow" style={{ padding: '14px 14px' }}>
            <span className="eyebrow">Avg. spend</span>
            <div className="display sm tnum" style={{ margin: '4px 0 2px' }}>{inr(40250)}</div>
            <span className="pill green" style={{ fontSize: 11 }}><IcArrowDown size={12} /> 5% lower</span>
          </div>
          <div className="card grow" style={{ padding: '14px 14px' }}>
            <span className="eyebrow">Avg. saved</span>
            <div className="display sm tnum" style={{ margin: '4px 0 2px', color: 'var(--green)' }}>{inr(7570)}</div>
            <span className="pill green" style={{ fontSize: 11 }}><IcArrowUp size={12} /> 18% up</span>
          </div>
        </div>

        <div className="card">
          <div className="card-h"><h4>Spend vs save</h4><span className="pill grey" style={{ fontSize: 11 }}>Monthly</span></div>
          <Bars cols={months} />
          <div className="rowflex" style={{ gap: 16, marginTop: 12, justifyContent: 'center', fontSize: 12 }}>
            <span className="rowflex" style={{ gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 3, background: '#5B4FE9', display: 'inline-block' }} /> Spent</span>
            <span className="rowflex" style={{ gap: 6 }}><i style={{ width: 10, height: 10, borderRadius: 3, background: '#12B76A', display: 'inline-block' }} /> Saved</span>
          </div>
        </div>

        <div className="card" style={{ marginTop: 14, background: 'var(--green-soft)', border: 'none' }}>
          <div className="rowflex">
            <div className="ic" style={{ width: 42, height: 42, background: '#fff', color: 'var(--green)' }}><IcArrowUp size={22} /></div>
            <div className="grow"><b style={{ fontSize: 14.5 }}>You’re trending up</b><p className="ink2" style={{ fontSize: 12.5 }}>Savings grew 4 of the last 6 months. Small leaks, handled.</p></div>
          </div>
        </div>
      </div>
    </Phone>
  )
}

/* Next-month prediction */
export function NextMonthPrediction() {
  const pts = [
    { x: 0, y: 42000 }, { x: 1, y: 45000 }, { x: 2, y: 39000 },
    { x: 3, y: 41000 }, { x: 4, y: 38000 }, { x: 5, y: 36500, big: true },
    { x: 6, y: 35200, big: true },
  ]
  return (
    <Phone tab="reports">
      <AppBar title="Next month" sub="What September looks like" back right={<span className="pill brand"><IcSpark size={13} /> AI</span>} />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="card" style={{ background: 'linear-gradient(155deg,#5B4FE9,#4A3FD0)', border: 'none', color: '#fff' }}>
          <span style={{ fontSize: 12.5, opacity: 0.85, fontWeight: 600 }}>Predicted spend · September</span>
          <div className="display tnum" style={{ margin: '6px 0 2px' }}><span className="rs" style={{ opacity: 0.7 }}>₹</span>35,200</div>
          <div className="rowflex" style={{ gap: 8, marginTop: 4 }}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}><IcArrowDown size={12} /> {inr(1300)} less than Aug</span>
          </div>
          <div style={{ marginTop: 12, marginLeft: -4, marginRight: -4 }}>
            <AreaLine points={pts} w={252} h={92} color="#fff" fill="rgba(255,255,255,0.16)" predictFrom={5} />
          </div>
          <div className="spread" style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}><span>Mar</span><span>Actual · Predicted</span><span>Sep</span></div>
        </div>

        <div className="card" style={{ marginTop: 14 }}>
          <div className="card-h"><h4>What’s driving it</h4></div>
          {[
            { t: 'Rent & bills steady', d: 'Same as usual', v: inr(21000), c: 'var(--ink-2)' },
            { t: 'Food trending down', d: 'You’re cooking more', v: '-' + inr(1200), c: 'var(--green)' },
            { t: 'Festival shopping likely', d: 'Onam week', v: '+' + inr(1500), c: 'var(--amber)' },
          ].map((r, i) => (
            <div className="row" key={i} style={{ borderTop: i ? '1px solid var(--line)' : 'none' }}>
              <div className="body"><b>{r.t}</b><span>{r.d}</span></div>
              <div className="amt tnum" style={{ color: r.c }}>{r.v}</div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 14, background: 'var(--green-soft)', border: 'none' }}>
          <div className="rowflex" style={{ alignItems: 'flex-start' }}>
            <div className="ic" style={{ width: 42, height: 42, background: '#fff', color: 'var(--green)' }}><IcArrowUp size={22} /></div>
            <div className="grow"><b style={{ fontSize: 14.5 }}>You could save {inr(11400)}</b><p className="ink2" style={{ fontSize: 12.5 }}>If September goes as predicted. Want us to auto-invest half?</p></div>
          </div>
          <button className="btn btn-green btn-sm" style={{ width: '100%', marginTop: 12 }}>Plan September savings</button>
        </div>
      </div>
    </Phone>
  )
}

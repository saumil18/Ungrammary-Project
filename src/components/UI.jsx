import { IcChevL, IcBell } from './Icons.jsx'
import { useNav } from '../navContext.js'

/* ---- rupee formatter ---- */
export const inr = (n) =>
  '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 })

/* ---- App bar inside a screen ---- */
export function AppBar({ title, sub, back = false, right, big = false }) {
  const nav = useNav()
  return (
    <div className="appbar">
      <div className="left">
        {back && <button className="iconbtn" aria-label="Back" onClick={() => nav.back()}><IcChevL size={20} /></button>}
        <div>
          <div className="title" style={big ? { fontSize: 24 } : undefined}>{title}</div>
          {sub && <div className="sub">{sub}</div>}
        </div>
      </div>
      {right}
    </div>
  )
}

export function BellBtn() {
  const nav = useNav()
  return (
    <button className="iconbtn" aria-label="Notifications" style={{ position: 'relative' }} onClick={() => nav.go('notifications')}>
      <IcBell size={20} />
      <i style={{ position: 'absolute', top: 8, right: 9, width: 7, height: 7, borderRadius: 4, background: 'var(--red)' }} />
    </button>
  )
}

/* ---- Donut chart (SVG) ---- */
export function Donut({ data, size = 132, thickness = 20, center }) {
  const total = data.reduce((s, d) => s + (Number(d.value) || 0), 0) || 1
  const r = (size - thickness) / 2
  const c = 2 * Math.PI * r
  let offset = 0
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth={thickness} />
        {data.map((d, i) => {
          const len = (d.value / total) * c
          const el = (
            <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke={d.color} strokeWidth={thickness} strokeLinecap="round"
              strokeDasharray={`${Math.max(len - 3, 0)} ${c}`} strokeDashoffset={-offset} />
          )
          offset += len
          return el
        })}
      </g>
      {center && (
        <foreignObject x="0" y="0" width={size} height={size}>
          <div style={{ height: size, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
            {center}
          </div>
        </foreignObject>
      )}
    </svg>
  )
}

/* ---- Stacked / grouped bar chart ---- */
export function Bars({ cols, max }) {
  const top = max || Math.max(...cols.map((c) => c.segments.reduce((s, x) => s + x.v, 0)))
  return (
    <div className="bars">
      {cols.map((col, i) => {
        const totalH = (col.segments.reduce((s, x) => s + x.v, 0) / top) * 100
        return (
          <div className="bcol" key={i}>
            <div className="stack" style={{ height: `${totalH}%`, minHeight: 6 }}>
              {col.segments.map((sg, j) => (
                <i key={j} style={{ display: 'block', height: `${(sg.v / col.segments.reduce((s, x) => s + x.v, 0)) * 100}%`, background: sg.color }} />
              ))}
            </div>
            <small>{col.label}</small>
          </div>
        )
      })}
    </div>
  )
}

/* ---- Line/area sparkline-style chart for reports ---- */
export function AreaLine({ points, w = 264, h = 120, color = 'var(--brand)', fill = 'rgba(91,79,233,0.12)', predictFrom }) {
  const xs = points.map((p) => p.x)
  const ys = points.map((p) => p.y)
  const minX = Math.min(...xs), maxX = Math.max(...xs)
  const minY = Math.min(...ys), maxY = Math.max(...ys)
  const px = (x) => ((x - minX) / (maxX - minX || 1)) * (w - 8) + 4
  const py = (y) => h - 12 - ((y - minY) / (maxY - minY || 1)) * (h - 26)
  const d = points.map((p, i) => `${i ? 'L' : 'M'}${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`).join(' ')
  const area = `${d} L${px(maxX)},${h} L${px(minX)},${h} Z`
  const splitX = predictFrom != null ? px(predictFrom) : null
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      {splitX != null && <rect x={splitX} y="0" width={w - splitX} height={h} fill="rgba(91,79,233,0.05)" />}
      <path d={area} fill={fill} />
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={predictFrom != null ? '0' : '0'} />
      {points.map((p, i) => (
        <circle key={i} cx={px(p.x)} cy={py(p.y)} r={p.big ? 4 : 0} fill="#fff" stroke={color} strokeWidth="2.5" />
      ))}
    </svg>
  )
}

/* ---- horizontal meter ---- */
export function Meter({ pct, color = 'var(--brand)' }) {
  return <div className="meter"><i style={{ width: `${Math.min(pct, 100)}%`, background: color }} /></div>
}

/* ---- onboarding step dots ---- */
export function Steps({ total, current }) {
  return (
    <div className="steps">
      {Array.from({ length: total }).map((_, i) => (
        <i key={i} className={i === current ? 'on' : i < current ? 'done' : ''} />
      ))}
    </div>
  )
}

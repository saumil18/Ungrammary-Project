import { Phone } from '../components/Phone.jsx'
import { AppBar, Meter, inr } from '../components/UI.jsx'
import {
  IcTarget, IcLink, IcBell, IcProfile, IcChevR, IcShield, IcArrowUp,
  IcLock, IcInfo, IcCheck, IcWallet, IcSettings,
} from '../components/Icons.jsx'

const Toggle = ({ on }) => <div className={'toggle' + (on ? ' on' : '')}><i /></div>

/* Profile hub */
export function ProfileHome() {
  const items = [
    { Ic: IcTarget, t: 'Goals', d: '2 active · 62% to emergency fund', c: 'var(--brand)' },
    { Ic: IcLink, t: 'Linked accounts', d: '2 banks · 1 card', c: 'var(--green)' },
    { Ic: IcBell, t: 'Notifications', d: 'Leaks, budgets, nudges', c: 'var(--amber)' },
    { Ic: IcProfile, t: 'Personal info', d: 'Name, phone, KYC', c: 'var(--ink-2)' },
    { Ic: IcShield, t: 'Privacy & security', d: 'Face ID, data controls', c: 'var(--brand)' },
  ]
  return (
    <Phone tab="profile">
      <AppBar title="Profile" right={<button className="iconbtn" aria-label="Settings"><IcSettings size={20} /></button>} />
      <div className="pad" style={{ paddingTop: 2 }}>
        <div className="card center" style={{ padding: '20px 16px' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 10px', background: 'linear-gradient(145deg,#6C5CF5,#4A3FD0)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 26, fontWeight: 800 }}>A</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>Aarav Mehta</h3>
          <div className="muted" style={{ fontSize: 13 }}>Bengaluru · Member since Aug 2025</div>
          <div className="rowflex" style={{ justifyContent: 'center', gap: 8, marginTop: 12 }}>
            <span className="pill green"><IcCheck size={12} sw={2.4} /> KYC verified</span>
            <span className="pill brand">Saver level 3</span>
          </div>
        </div>

        <div className="card" style={{ marginTop: 14, padding: '6px 16px' }}>
          {items.map((r, i) => (
            <div className="row" key={i}>
              <div className="ic" style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--surface-2)', color: r.c }}><r.Ic size={20} /></div>
              <div className="body"><b style={{ fontWeight: 600 }}>{r.t}</b><span>{r.d}</span></div>
              <IcChevR size={20} className="muted" />
            </div>
          ))}
        </div>

        <button className="btn btn-secondary" style={{ marginTop: 16, color: 'var(--red)' }}>Log out</button>
        <p className="muted center" style={{ fontSize: 11.5, marginTop: 14 }}>SpendWise v1.0 · Not investment advice</p>
      </div>
    </Phone>
  )
}

/* Goals */
export function Goals() {
  const goals = [
    { Ic: IcShield, t: 'Emergency fund', now: 112000, target: 180000, pct: 62, c: 'var(--green)' },
    { Ic: IcArrowUp, t: 'Start investing', now: 24000, target: 100000, pct: 24, c: 'var(--brand)' },
  ]
  return (
    <Phone tab="profile">
      <AppBar title="Goals" sub="What you’re working towards" back right={<button className="iconbtn" aria-label="Add"><IcTarget size={18} /></button>} />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="stack-gap">
          {goals.map((g, i) => (
            <div className="card" key={i}>
              <div className="rowflex" style={{ marginBottom: 12 }}>
                <div className="ic" style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--surface-2)', color: g.c }}><g.Ic size={22} /></div>
                <div className="grow"><b style={{ fontSize: 15 }}>{g.t}</b><div className="muted" style={{ fontSize: 12.5 }}>{inr(g.now)} of {inr(g.target)}</div></div>
                <span className="pill green tnum">{g.pct}%</span>
              </div>
              <Meter pct={g.pct} color={g.c} />
              <div className="spread" style={{ marginTop: 10 }}>
                <span className="muted" style={{ fontSize: 12 }}>{inr(g.target - g.now)} to go</span>
                <span className="link" style={{ fontSize: 12.5 }}>Add money</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 14, background: 'var(--brand-soft)', border: 'none' }}>
          <div className="rowflex">
            <div className="ic" style={{ width: 42, height: 42, background: '#fff', color: 'var(--brand)' }}><IcInfo size={20} /></div>
            <div className="grow"><b style={{ fontSize: 14 }}>On pace for March 2026</b><p className="ink2" style={{ fontSize: 12.5 }}>Keep diverting ₹2,400/mo to hit your emergency fund on time.</p></div>
          </div>
        </div>

        <button className="btn btn-secondary" style={{ marginTop: 16 }}>+ Create a new goal</button>
      </div>
    </Phone>
  )
}

/* Linked accounts */
export function LinkedAccounts() {
  const accounts = [
    { e: '🏦', n: 'HDFC Bank', d: 'Savings ••4210', bal: 48200, ok: true },
    { e: '🏦', n: 'ICICI Bank', d: 'Salary ••8830', bal: 12600, ok: true },
    { e: '💳', n: 'HDFC Credit Card', d: '••5501 · due 18 Aug', bal: -8400, ok: true },
  ]
  return (
    <Phone tab="profile">
      <AppBar title="Linked accounts" sub="Read-only · via account aggregator" back />
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="banner green" style={{ marginBottom: 14 }}>
          <IcLock size={18} className="bi" style={{ color: 'var(--green)' }} />
          <div><b>Your logins are safe</b><p>We use a licensed aggregator. SpendWise only reads balances — never moves money.</p></div>
        </div>

        <div className="card" style={{ padding: '6px 16px' }}>
          {accounts.map((a, i) => (
            <div className="row" key={i}>
              <div className="ic" style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--surface-2)', fontSize: 20 }}>{a.e}</div>
              <div className="body"><b style={{ fontWeight: 600 }}>{a.n}</b><span>{a.d}</span></div>
              <div className="amt tnum" style={{ color: a.bal < 0 ? 'var(--ink-2)' : 'var(--ink)' }}>
                {a.bal < 0 ? '-' : ''}{inr(Math.abs(a.bal))}
                <small style={{ color: 'var(--green)' }}>● synced</small>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-secondary" style={{ marginTop: 16 }}><IcLink size={18} /> Link another account</button>
        <p className="muted center" style={{ fontSize: 12, marginTop: 14 }}>Manage or revoke access anytime. Changes apply instantly.</p>
      </div>
    </Phone>
  )
}

/* Notifications */
export function Notifications() {
  const groups = [
    { h: 'Money nudges', items: [
      { t: 'Leak flags', d: 'When we spot wasteful spends', on: true },
      { t: 'Divert-to-invest tips', d: 'Chances to grow spare money', on: true },
    ] },
    { h: 'Budgets & alerts', items: [
      { t: 'Budget warnings', d: 'At 90% of any budget', on: true },
      { t: 'Unusual spend alerts', d: 'Bigger-than-usual charges', on: true },
      { t: 'Weekly summary', d: 'Every Sunday, 9 AM', on: false },
    ] },
    { h: 'Account', items: [
      { t: 'Salary credited', d: 'When pay lands', on: true },
      { t: 'Marketing & offers', d: 'Occasional product news', on: false },
    ] },
  ]
  return (
    <Phone tab="profile">
      <AppBar title="Notifications" sub="Only what actually helps" back />
      <div className="pad" style={{ paddingTop: 4 }}>
        {groups.map((g, gi) => (
          <div key={gi} style={{ marginBottom: 6 }}>
            <div className="eyebrow" style={{ margin: '10px 4px 8px' }}>{g.h.toUpperCase()}</div>
            <div className="card" style={{ padding: '6px 16px' }}>
              {g.items.map((r, i) => (
                <div className="row" key={i}>
                  <div className="body"><b style={{ fontWeight: 600 }}>{r.t}</b><span>{r.d}</span></div>
                  <Toggle on={r.on} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="banner brand" style={{ marginTop: 8 }}>
          <IcInfo size={18} className="bi" style={{ color: 'var(--brand)' }} />
          <p style={{ fontSize: 12.5 }}>We keep it calm — at most one nudge a day. Money stress, reduced.</p>
        </div>
      </div>
    </Phone>
  )
}

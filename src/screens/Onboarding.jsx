import { Steps, inr } from '../components/UI.jsx'
import { useNav } from '../navContext.js'
import {
  IcSpark, IcChevL, IcCheck, IcTarget, IcShield, IcLink, IcLock, IcArrowUp,
} from '../components/Icons.jsx'

function OnbTop({ step, total = 6, onBack = true }) {
  const nav = useNav()
  return (
    <div className="pad" style={{ paddingTop: 8, paddingBottom: 12 }}>
      <div className="rowflex" style={{ marginBottom: 14 }}>
        {onBack && <button className="iconbtn" aria-label="Back" onClick={() => nav.back()}><IcChevL size={20} /></button>}
        <div className="grow" style={{ padding: '0 6px' }}><Steps total={total} current={step} /></div>
        <span className="muted" style={{ fontSize: 13, fontWeight: 600 }}>{step + 1}/{total}</span>
      </div>
    </div>
  )
}

/* 1 — Welcome */
export function Welcome() {
  const nav = useNav()
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#fff', padding: '18px 22px 26px' }}>
      <div className="grow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="float-badge" style={{ width: 84, height: 84, borderRadius: 24, background: 'rgba(255,255,255,0.16)', display: 'grid', placeItems: 'center', marginBottom: 26, backdropFilter: 'blur(4px)' }}>
          <IcSpark size={44} />
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Money that<br />looks after itself.
        </h1>
        <p style={{ fontSize: 15.5, opacity: 0.85, marginTop: 14, maxWidth: 250 }}>
          SpendWise predicts your month, spots the small leaks, and quietly grows the rest.
        </p>
      </div>
      <div className="stack-gap">
        <button className="btn cta" style={{ background: '#fff', color: 'var(--brand)' }} onClick={() => nav.go('create')}>Get started</button>
        <button className="btn btn-ghost" style={{ color: '#fff' }} onClick={() => nav.tab('home')}>I already have an account</button>
      </div>
    </div>
  )
}

/* 2 — Create account */
export function CreateAccount() {
  const nav = useNav()
  return (
    <>
      <OnbTop step={0} onBack={false} />
      <div className="pad">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Let’s create your account</h1>
        <p className="ink2" style={{ fontSize: 14.5, marginTop: 6, marginBottom: 22 }}>Takes about two minutes. No paperwork.</p>

        <div className="field">
          <label>Full name</label>
          <div className="input"><span style={{ color: 'var(--ink)' }}>Aarav Mehta</span></div>
        </div>
        <div className="field">
          <label>Mobile number</label>
          <div className="input focus"><span className="cur">+91</span><span style={{ color: 'var(--ink)' }}>98765 43210</span></div>
        </div>
        <div className="field">
          <label>Email <span className="muted" style={{ fontWeight: 500 }}>(optional)</span></label>
          <div className="input"><span className="muted">you@email.com</span></div>
        </div>

        <div className="banner brand" style={{ marginTop: 6 }}>
          <IcLock size={18} className="bi" style={{ color: 'var(--brand)' }} />
          <p style={{ fontSize: 12.5 }}>Bank-grade 256-bit encryption. We never store your bank password.</p>
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 4 }}>
        <button className="btn btn-primary cta" onClick={() => nav.go('income')}>Send OTP</button>
      </div>
    </>
  )
}

/* 3 — Income & basic details */
export function IncomeDetails() {
  const nav = useNav()
  return (
    <>
      <OnbTop step={1} />
      <div className="pad">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Tell us about your income</h1>
        <p className="ink2" style={{ fontSize: 14.5, marginTop: 6, marginBottom: 20 }}>This helps us predict your month accurately.</p>

        <div className="field">
          <label>Monthly take-home</label>
          <div className="input amount focus"><span className="cur">₹</span><span>62,000</span></div>
        </div>

        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 9 }}>How often are you paid?</label>
        <div className="chipsample" style={{ marginBottom: 20 }}>
          <span className="chip on">Monthly</span>
          <span className="chip">Bi-weekly</span>
          <span className="chip">Irregular</span>
        </div>

        <div className="field">
          <label>Usual pay day</label>
          <div className="input spread"><span style={{ color: 'var(--ink)' }}>1st of every month</span><span className="muted">▾</span></div>
        </div>
        <div className="field">
          <label>City <span className="muted" style={{ fontWeight: 500 }}>(for cost-of-living tips)</span></label>
          <div className="input spread"><span style={{ color: 'var(--ink)' }}>Bengaluru</span><span className="muted">▾</span></div>
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 4 }}>
        <button className="btn btn-primary cta" onClick={() => nav.go('habits')}>Continue</button>
      </div>
    </>
  )
}

/* 4 — Spending habits */
const Toggle = ({ on }) => <div className={'toggle' + (on ? ' on' : '')}><i /></div>
export function SpendingHabits() {
  const nav = useNav()
  const cats = [
    { e: '🍔', n: 'Eating out & food delivery', on: true },
    { e: '🛵', n: 'Cabs & commute', on: true },
    { e: '🎬', n: 'Subscriptions', on: true },
    { e: '🛍️', n: 'Shopping', on: false },
    { e: '💊', n: 'Health & fitness', on: false },
  ]
  return (
    <>
      <OnbTop step={2} />
      <div className="pad">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Where does it usually go?</h1>
        <p className="ink2" style={{ fontSize: 14.5, marginTop: 6, marginBottom: 18 }}>Pick what you spend on most. We’ll watch these for leaks.</p>

        <div className="card" style={{ padding: '6px 16px' }}>
          {cats.map((c, i) => (
            <div className="row" key={i}>
              <div className="ic" style={{ background: 'var(--surface-2)' }}>{c.e}</div>
              <div className="body"><b>{c.n}</b></div>
              <Toggle on={c.on} />
            </div>
          ))}
        </div>

        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', margin: '20px 0 9px' }}>How careful are you with money today?</label>
        <div className="seg">
          <button>Carefree</button>
          <button className="on">Trying</button>
          <button>Very careful</button>
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 14 }}>
        <button className="btn btn-primary cta" onClick={() => nav.go('obGoals')}>Continue</button>
      </div>
    </>
  )
}

/* 5 — Financial goals */
export function FinancialGoals() {
  const nav = useNav()
  const goals = [
    { Ic: IcShield, t: 'Emergency fund', d: '3 months of expenses', on: true, c: 'var(--green)' },
    { Ic: IcArrowUp, t: 'Start investing', d: 'Grow money slowly', on: true, c: 'var(--brand)' },
    { Ic: IcTarget, t: 'Big purchase', d: 'Phone, trip, gadget', on: false, c: 'var(--amber)' },
  ]
  return (
    <>
      <OnbTop step={3} />
      <div className="pad">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>What are you saving for?</h1>
        <p className="ink2" style={{ fontSize: 14.5, marginTop: 6, marginBottom: 18 }}>Choose one or more. No pressure — you can change these anytime.</p>

        <div className="stack-gap">
          {goals.map((g, i) => (
            <div key={i} className="card" style={{ padding: 14, borderColor: g.on ? 'var(--brand)' : 'var(--line)', boxShadow: g.on ? '0 0 0 3px var(--brand-soft)' : 'var(--sh-1)' }}>
              <div className="rowflex">
                <div className="ic" style={{ width: 44, height: 44, borderRadius: 13, background: g.on ? 'var(--brand-soft)' : 'var(--surface-2)', color: g.c }}><g.Ic size={22} /></div>
                <div className="grow"><b style={{ fontSize: 15 }}>{g.t}</b><div className="muted" style={{ fontSize: 12.5 }}>{g.d}</div></div>
                <div style={{ width: 24, height: 24, borderRadius: 8, border: g.on ? 'none' : '2px solid var(--line)', background: g.on ? 'var(--brand)' : 'transparent', display: 'grid', placeItems: 'center', color: '#fff' }}>
                  {g.on && <IcCheck size={15} sw={2.6} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="field" style={{ marginTop: 18 }}>
          <label>Emergency fund target</label>
          <div className="input amount"><span className="cur">₹</span><span>1,80,000</span></div>
        </div>
      </div>
      <div className="pad mt-a" style={{ paddingTop: 4 }}>
        <button className="btn btn-primary cta" onClick={() => nav.go('link')}>Continue</button>
      </div>
    </>
  )
}

/* 6 — Link account / permissions */
export function LinkAccount() {
  const nav = useNav()
  return (
    <>
      <OnbTop step={4} />
      <div className="pad">
        <div className="hero-ill" style={{ background: 'var(--brand-soft)', color: 'var(--brand)', width: 96, height: 96, margin: '4px auto 18px' }}>
          <IcLink size={44} />
        </div>
        <h1 className="center" style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-0.02em' }}>Connect an account</h1>
        <p className="ink2 center" style={{ fontSize: 14.5, marginTop: 6, marginBottom: 20, padding: '0 6px' }}>
          We read your transactions to predict spending. <b style={{ color: 'var(--ink)' }}>Read-only</b> — SpendWise can never move your money.
        </p>

        <div className="card" style={{ padding: '6px 16px' }}>
          {[
            { Ic: IcShield, t: 'View-only access', d: 'We can see, never touch' },
            { Ic: IcLock, t: 'Encrypted & RBI-aligned', d: 'Via a licensed account aggregator' },
            { Ic: IcEye, t: 'Revoke anytime', d: 'One tap in Profile' },
          ].map((r, i) => (
            <div className="row" key={i}>
              <div className="ic" style={{ background: 'var(--green-soft)', color: 'var(--green)' }}><r.Ic size={20} /></div>
              <div className="body"><b>{r.t}</b><span>{r.d}</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className="pad mt-a stack-gap" style={{ paddingTop: 14 }}>
        <button className="btn btn-primary cta" onClick={() => nav.go('ready')}>Link securely</button>
        <button className="btn btn-ghost" onClick={() => nav.go('ready')}>Maybe later</button>
      </div>
    </>
  )
}
const IcEye = (p) => (
  <svg width={p.size || 22} height={p.size || 22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
)

/* 7 — Ready */
export function Ready() {
  const nav = useNav()
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', color: '#fff', padding: '18px 22px 26px' }}>
      <div className="grow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="pop-in" style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', marginBottom: 24 }}>
          <IcCheck size={52} sw={2.4} />
        </div>
        <h1 style={{ fontSize: 27, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>You’re all set, Aarav</h1>
        <p style={{ fontSize: 15, opacity: 0.9, marginTop: 12, maxWidth: 260 }}>
          We’ve built your first prediction. Looks like you could free up <b>{inr(2400)}/mo</b> to invest.
        </p>
        <div style={{ marginTop: 22, background: 'rgba(255,255,255,0.16)', borderRadius: 16, padding: '14px 18px', display: 'flex', gap: 22 }}>
          <div><div style={{ fontSize: 22, fontWeight: 800 }}>{inr(48200)}</div><div style={{ fontSize: 11.5, opacity: 0.85 }}>Predicted spend</div></div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.25)' }} />
          <div><div style={{ fontSize: 22, fontWeight: 800 }}>{inr(2400)}</div><div style={{ fontSize: 11.5, opacity: 0.85 }}>Leaks found</div></div>
        </div>
      </div>
      <button className="btn cta" style={{ background: '#fff', color: 'var(--green)' }} onClick={() => nav.tab('home')}>Go to my dashboard</button>
    </div>
  )
}

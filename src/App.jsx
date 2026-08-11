import { IcSpark } from './components/Icons.jsx'
import { Welcome, CreateAccount, IncomeDetails, SpendingHabits, FinancialGoals, LinkAccount, Ready } from './screens/Onboarding.jsx'
import { Home, LeakFlags, DivertNudge } from './screens/Home.jsx'
import { BudgetList, EditBudget, AnomalyAlert, BudgetSummary } from './screens/Budget.jsx'
import { InvestRecs, InvestDetail, Simulator, RoundUp, InvestSuccess } from './screens/Invest.jsx'
import { SpendVsSave, NextMonthPrediction } from './screens/Reports.jsx'
import { ProfileHome, Goals, LinkedAccounts, Notifications } from './screens/Profile.jsx'

const SECTIONS = [
  {
    kicker: '1.1 · Onboarding',
    title: 'First run',
    desc: 'A calm, two-minute setup. One question per screen, plain language, and a clear reason for every permission we ask for.',
    screens: [
      { c: <Welcome />, t: 'Welcome', s: 'Warm intro + single CTA' },
      { c: <CreateAccount />, t: 'Create account', s: 'Phone-first, OTP, encrypted' },
      { c: <IncomeDetails />, t: 'Income & details', s: 'Powers the prediction' },
      { c: <SpendingHabits />, t: 'Spending habits', s: 'Pick categories to watch' },
      { c: <FinancialGoals />, t: 'Financial goals', s: 'What you’re saving for' },
      { c: <LinkAccount />, t: 'Link account', s: 'Read-only, revoke anytime' },
      { c: <Ready />, t: 'Ready', s: 'First prediction delivered' },
    ],
  },
  {
    kicker: '2.1.1 · Home',
    title: 'Spend prediction',
    desc: 'The heart of the app: what this month will cost, where it goes, the little leaks — and one gentle nudge to invest the difference.',
    screens: [
      { c: <Home />, t: 'Home', s: 'Predicted month + breakdown' },
      { c: <LeakFlags />, t: 'Leak flags', s: 'Forgotten recurring spends' },
      { c: <DivertNudge />, t: 'Divert to invest', s: 'One-tap nudge sheet' },
    ],
  },
  {
    kicker: '2.1.2 · Budget',
    title: 'Budgets & alerts',
    desc: 'Set limits without guilt. Colour + text always agree, so a warning never relies on colour alone.',
    screens: [
      { c: <BudgetList />, t: 'Budgets list', s: 'Category limits at a glance' },
      { c: <EditBudget />, t: 'Set / edit budget', s: 'Smart suggested limit' },
      { c: <AnomalyAlert />, t: 'Anomaly alert', s: 'Unusual-spend, not scary' },
      { c: <BudgetSummary />, t: 'Weekly / monthly', s: 'Spend vs save summary' },
    ],
  },
  {
    kicker: '2.1.3 · Invest',
    title: 'Invest',
    desc: 'Low-risk first, jargon never. Simulate before committing, automate with round-ups, and celebrate the start.',
    screens: [
      { c: <InvestRecs />, t: 'Recommendations', s: 'Ranked low-risk options' },
      { c: <InvestDetail />, t: 'Investment detail', s: 'Why we suggest it' },
      { c: <Simulator />, t: 'Simulator', s: 'See it grow, then decide' },
      { c: <RoundUp />, t: 'Round-up & auto', s: 'Spare-change investing' },
      { c: <InvestSuccess />, t: 'Confirm & success', s: 'Reassuring finish' },
    ],
  },
  {
    kicker: '2.1.4 · Reports',
    title: 'Reports',
    desc: 'The long view. Spend-versus-save history and an AI forecast of next month, explained in words.',
    screens: [
      { c: <SpendVsSave />, t: 'Spend vs save', s: '6-month history' },
      { c: <NextMonthPrediction />, t: 'Next-month prediction', s: 'AI forecast, explained' },
    ],
  },
  {
    kicker: '2.1.5 · Profile',
    title: 'Profile',
    desc: 'Everything personal in one calm place — goals, the accounts you’ve linked, notification controls, and your details.',
    screens: [
      { c: <ProfileHome />, t: 'Profile hub', s: 'Overview + shortcuts' },
      { c: <Goals />, t: 'Goals', s: 'Progress toward each' },
      { c: <LinkedAccounts />, t: 'Linked accounts', s: 'Read-only, synced' },
      { c: <Notifications />, t: 'Notifications', s: 'Calm by default' },
    ],
  },
]

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
    ['Brand', '#5B4FE9'], ['Green · growth', '#12B76A'], ['Amber · warning', '#F79009'],
    ['Red · error', '#F04438'], ['Background', '#F4F5F8'], ['Ink', '#14161C'],
  ]
  return (
    <div className="dsys">
      <div className="dcard">
        <h3>Colour</h3>
        <div className="swatches">
          {colors.map(([n, c]) => (
            <div className="swatch" key={n}><i style={{ background: c }} /><span>{n.split(' ')[0]}</span></div>
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
  return (
    <div className="page">
      <Masthead />
      <DesignSystem />

      {SECTIONS.map((sec, si) => (
        <section key={si}>
          <div className="section">
            <div className="kicker">{sec.kicker}</div>
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
          </div>
          <div className="gallery">
            {sec.screens.map((scr, i) => {
              n += 1
              return (
                <div className="screen-wrap" key={i}>
                  {scr.c}
                  <div className="screen-cap">
                    <b><span className="screen-num tnum">{String(n).padStart(2, '0')}</span>{scr.t}</b>
                    <span>{scr.s}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}

      <footer className="footer">
        <p>
          <b>SpendWise</b> — a mobile-first fintech concept · {SECTIONS.reduce((s, x) => s + x.screens.length, 0)} screens ·
          Designed &amp; built for the <b>Ungrammary</b> UI/UX assignment.
        </p>
        <p style={{ marginTop: 8 }}>Alternative names considered: <b>Sprout</b> · <b>Nudge</b> · <b>Driftless</b> · <b>Paise</b></p>
      </footer>
    </div>
  )
}

import { IcHome, IcBudget, IcInvest, IcReports, IcProfile, IcPlus } from './Icons.jsx'
import { useNav } from '../navContext.js'

/* iPhone hardware frame + notch + status bar + home indicator.
   `tab` highlights the active bottom tab; pass tab={null} to hide the tab bar
   (used for onboarding & full-bleed flows). `darkStatus` flips status text white. */
/* The screen is authored on a compact canvas and uniformly scaled up to a true
   iPhone 15/16 logical resolution of 393 × 852 pt, then the whole device is
   scaled down for display. So every frame is a genuine 393×852 artboard while
   the page layout and the polished proportions stay exactly the same. */
export function Phone({ children, tab = null, darkStatus = false, bg, screenKey, anim = false }) {
  return (
    <div className="phone-holder">
      <div className="phone">
        <div className="phone-screen" style={bg ? { background: bg } : undefined}>
          <div className="phone-canvas">
            <div className="island" />
            <StatusBar dark={darkStatus} />
            <div className="viewport">
              <div className={'screen' + (anim ? ' anim' : '')} key={screenKey}>{children}</div>
            </div>
            {tab !== undefined && tab !== null && <TabBar active={tab} />}
            <div className={'home-ind' + (darkStatus ? ' light' : '')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function StatusBar({ dark }) {
  return (
    <div className={'statusbar' + (dark ? ' on-brand' : '')}>
      <span className="tnum">9:41</span>
      <div className="icons" aria-hidden>
        {/* signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1" opacity="0.4"/></svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.2c2.3 0 4.4.9 6 2.4l-1.3 1.3A6.7 6.7 0 0 0 8 4.1 6.7 6.7 0 0 0 3.3 5.9L2 4.6A8.6 8.6 0 0 1 8 2.2Z"/><path d="M8 5.8c1.3 0 2.5.5 3.4 1.4L8 10.6 4.6 7.2A4.8 4.8 0 0 1 8 5.8Z"/></svg>
        {/* battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="16" height="8" rx="1.8" fill="currentColor"/><rect x="23" y="4" width="1.5" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  )
}

const TABS = [
  { id: 'home', label: 'Home', Icon: IcHome },
  { id: 'budget', label: 'Budget', Icon: IcBudget },
  { id: 'invest', label: 'Invest', Icon: IcInvest, fab: true },
  { id: 'reports', label: 'Reports', Icon: IcReports },
  { id: 'profile', label: 'Profile', Icon: IcProfile },
]

export function TabBar({ active }) {
  const nav = useNav()
  return (
    <nav className="tabbar" aria-label="Primary">
      {TABS.map(({ id, label, Icon, fab }) =>
        fab ? (
          <button key={id} className={'tab fab' + (active === id ? ' on' : '')} onClick={() => nav.tab(id)} aria-label={label}>
            <div className="fabbtn"><IcPlus size={24} sw={2.2} /></div>
            <span style={{ marginTop: 4 }}>{label}</span>
          </button>
        ) : (
          <button key={id} className={'tab' + (active === id ? ' on' : '')} onClick={() => nav.tab(id)} aria-label={label}>
            <Icon size={23} sw={active === id ? 2.1 : 1.8} />
            <span>{label}</span>
          </button>
        )
      )}
    </nav>
  )
}

import { useState, useCallback, useMemo } from 'react'
import { Phone } from './Phone.jsx'
import { NavContext } from '../navContext.js'
import { SCREENS, FLOWS, TAB_ROOTS } from '../screens/registry.jsx'
import { IcChevL, IcSpark } from './Icons.jsx'

/* The live, tap-through prototype. Holds a small navigation stack and provides
   `nav` to every screen via context, so buttons, tabs and back all work. */
export function Prototype() {
  const [stack, setStack] = useState(['welcome'])
  const [count, setCount] = useState(0)
  const current = stack[stack.length - 1]

  const go = useCallback((id) => { if (SCREENS[id]) { setStack((s) => [...s, id]); setCount((c) => c + 1) } }, [])
  const back = useCallback(() => { setStack((s) => (s.length > 1 ? s.slice(0, -1) : s)); setCount((c) => c + 1) }, [])
  const tab = useCallback((id) => { const r = TAB_ROOTS[id] || id; setStack((s) => [...s, r]); setCount((c) => c + 1) }, [])
  const reset = useCallback(() => { setStack(['welcome']); setCount((c) => c + 1) }, [])

  const nav = useMemo(() => ({ go, back, tab, reset, active: current, interactive: true }), [go, back, tab, reset, current])

  const meta = SCREENS[current]
  const flow = FLOWS.find((f) => f.screens.includes(current)) || FLOWS[0]

  return (
    <NavContext.Provider value={nav}>
      <div className="proto">
        <div className="proto-info">
          <div className="proto-eyebrow"><IcSpark size={14} /> Live prototype · tap to explore</div>
          <h2>Try the real journey</h2>
          <p>Tap buttons, cards and the bottom tab bar — just like the real app. Start with onboarding, or jump to any flow below.</p>

          <div className="proto-chips">
            {FLOWS.map((f) => (
              <button key={f.id}
                className={'pchip' + (flow.id === f.id ? ' on' : '')}
                onClick={() => go(f.root)}>
                {f.title}
              </button>
            ))}
          </div>

          <div className="proto-controls">
            <button className="pbtn" onClick={back} disabled={stack.length <= 1}><IcChevL size={16} /> Back</button>
            <button className="pbtn ghost" onClick={reset}>↺ Restart</button>
            <span className="proto-now">{meta.name}</span>
          </div>

          <ul className="proto-legend">
            <li>Onboarding → dashboard in 7 taps</li>
            <li>Home leaks → divert → investing done</li>
            <li>Full bottom-tab navigation, with back</li>
          </ul>
        </div>

        <div className="proto-stage live">
          <Phone tab={meta.tab} darkStatus={meta.darkStatus} bg={meta.bg} screenKey={current + '-' + count} anim>
            <meta.Comp />
          </Phone>
        </div>
      </div>
    </NavContext.Provider>
  )
}

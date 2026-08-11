import { Phone } from './Phone.jsx'
import { SCREENS } from '../screens/registry.jsx'

/* Renders one screen inside a phone frame. Overlay screens (bottom sheets like
   Divert / Anomaly) are drawn on top of the screen you came from — `prevId` in
   the live prototype, or a sensible default (`under`) in the static gallery — so
   the sheet dims a real screen instead of an empty grey background. */
export function PhoneScreen({ id, prevId, screenKey, anim = false }) {
  const meta = SCREENS[id]

  if (meta.overlay) {
    const underId = prevId && !SCREENS[prevId]?.overlay ? prevId : meta.under
    const under = SCREENS[underId]
    const UnderComp = under.Comp
    const Sheet = meta.Comp
    return (
      <Phone
        tab={under.tab}
        darkStatus={under.darkStatus}
        bg={under.bg}
        screenKey={underId}
        overlay={<Sheet />}
      >
        <UnderComp />
      </Phone>
    )
  }

  const Comp = meta.Comp
  return (
    <Phone tab={meta.tab} darkStatus={meta.darkStatus} bg={meta.bg} screenKey={screenKey} anim={anim}>
      <Comp />
    </Phone>
  )
}

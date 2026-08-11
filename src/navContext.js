import { createContext, useContext } from 'react'

/* Navigation shared by the interactive prototype.
   In the static gallery a no-op provider is used, so the same screen
   components render there without any wiring. */
export const NavContext = createContext({
  go() {},        // push a screen by id
  back() {},      // pop to previous screen
  tab() {},       // jump to a bottom-tab root
  reset() {},     // restart the journey
  active: null,   // current screen id
  interactive: false,
})

export const useNav = () => useContext(NavContext)

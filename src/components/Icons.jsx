// Minimal, consistent stroke icons (1.8 weight, rounded) used across screens.
const S = ({ children, size = 22, fill = 'none', sw = 1.8, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
)

export const IcHome = (p) => <S {...p}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/></S>
export const IcBudget = (p) => <S {...p}><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18"/><path d="M7.5 14h4"/></S>
export const IcInvest = (p) => <S {...p}><path d="M4 15l4-4 3 3 5-6"/><path d="M14 8h3v3"/><path d="M4 20h16"/></S>
export const IcReports = (p) => <S {...p}><path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="11" width="3" height="6" rx="1"/><rect x="13" y="7" width="3" height="10" rx="1"/></S>
export const IcProfile = (p) => <S {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/></S>
export const IcPlus = (p) => <S {...p}><path d="M12 5v14M5 12h14"/></S>
export const IcBell = (p) => <S {...p}><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></S>
export const IcChevR = (p) => <S {...p}><path d="M9 6l6 6-6 6"/></S>
export const IcChevL = (p) => <S {...p}><path d="M15 6l-6 6 6 6"/></S>
export const IcChevD = (p) => <S {...p}><path d="M6 9l6 6 6-6"/></S>
export const IcCheck = (p) => <S {...p}><path d="M4 12.5l5 5 11-11"/></S>
export const IcSpark = (p) => <S {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z"/></S>
export const IcLeak = (p) => <S {...p}><path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z"/></S>
export const IcTarget = (p) => <S {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></S>
export const IcShield = (p) => <S {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/></S>
export const IcLink = (p) => <S {...p}><path d="M9 15l6-6"/><path d="M10.5 6.5l1.5-1.5a4 4 0 0 1 6 6L16.5 12"/><path d="M13.5 17.5 12 19a4 4 0 0 1-6-6l1.5-1.5"/></S>
export const IcArrowUp = (p) => <S {...p}><path d="M12 19V5M6 11l6-6 6 6"/></S>
export const IcArrowDown = (p) => <S {...p}><path d="M12 5v14M6 13l6 6 6-6"/></S>
export const IcCoins = (p) => <S {...p}><ellipse cx="9" cy="7" rx="5" ry="2.5"/><path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7"/><path d="M10 14.5c.6 2 3 3 6 3 2.8 0 5-1.1 5-2.5v-4c0-1.2-1.6-2.2-4-2.4"/></S>
export const IcWallet = (p) => <S {...p}><rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18"/><circle cx="16.5" cy="14" r="1.2"/></S>
export const IcSettings = (p) => <S {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></S>
export const IcLock = (p) => <S {...p}><rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></S>
export const IcInfo = (p) => <S {...p}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.5"/></S>
export const IcCal = (p) => <S {...p}><rect x="4" y="5" width="16" height="16" rx="3"/><path d="M4 9h16M8 3v4M16 3v4"/></S>
export const IcFilter = (p) => <S {...p}><path d="M4 6h16M7 12h10M10 18h4"/></S>
export const IcSearch = (p) => <S {...p}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></S>
export const IcFood = (p) => <S {...p}><path d="M6 3v7M9 3v7M7.5 10v11M15 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9"/></S>
export const IcCart = (p) => <S {...p}><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.2 11h10L20 7H6"/></S>
export const IcCab = (p) => <S {...p}><path d="M5 16l1.5-5A3 3 0 0 1 9.4 9h5.2a3 3 0 0 1 2.9 2L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7" cy="18" r="0.6"/><circle cx="17" cy="18" r="0.6"/></S>
export const IcPlay = (p) => <S {...p}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3V9Z" fill="currentColor" stroke="none"/></S>
export const IcMobile = (p) => <S {...p}><rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/></S>
export const IcGift = (p) => <S {...p}><rect x="4" y="9" width="16" height="11" rx="2"/><path d="M4 13h16M12 9v11"/><path d="M12 9c-1-3-5-3-5-.5 0 .3.2.5.5.5H12Zm0 0c1-3 5-3 5-.5 0 .3-.2.5-.5.5H12Z"/></S>

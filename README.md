# SpendWise · Ungrammary UI/UX Assignment

A **mobile-first fintech app concept** — designed and built as an interactive, deployable showcase for the Ungrammary UI/UX design assignment.

> **SpendWise** predicts your spending for the month, flags the small “leak” expenses draining your account, and nudges you to divert that money into small, low-risk investments — so growing money feels calm, not stressful.

Every screen is rendered inside a real iPhone frame. Open the live site and scroll through all **25 screens**, grouped by flow.

## Product

- **What it does:** AI spend prediction → leak detection → “divert to invest” nudges.
- **Who it’s for:** Young professionals (22–30) in India, new to investing, phone-first, slightly money-anxious.
- **Currency:** Rupees (₹), India-native language and examples.

## Flows (25 screens)

| Section | Screens |
| --- | --- |
| **1.1 Onboarding** | Welcome · Create account · Income & details · Spending habits · Financial goals · Link account · Ready |
| **2.1.1 Home** | Spend prediction · Leak flags · Divert-to-invest nudge |
| **2.1.2 Budget** | Budgets list · Set/edit budget · Anomaly alert · Weekly/monthly summary |
| **2.1.3 Invest** | Recommendations · Investment detail · Simulator · Round-up & auto-invest · Confirm & success |
| **2.1.4 Reports** | Spend vs save · Next-month prediction |
| **2.1.5 Profile** | Profile hub · Goals · Linked accounts · Notifications |

## Design system

- **One primary brand colour** (indigo `#5B4FE9`) · green = growth · amber = warning · red = errors only.
- **Type:** Inter — large display numbers (tabular), clear hierarchy, comfortable body.
- **Shape & spacing:** rounded cards/buttons, soft shadows, 8-pt spacing, generous padding.
- **Components:** buttons (primary/secondary), inputs, cards, list rows with amounts, chips (category & risk), bottom tab bar, donut/bar/area charts.
- **Accessibility:** strong contrast, never colour-alone (text always agrees), tap targets ≥ 44px.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Tech

Vite · React 18 · hand-rolled CSS design system (no UI kit) · inline SVG icons & charts. `base: './'` so the same build works at a domain root (Vercel) or a repo subpath (GitHub Pages).

---

Designed & built for the **Ungrammary** UI/UX assignment.

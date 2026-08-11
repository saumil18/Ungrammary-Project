import { Welcome, CreateAccount, IncomeDetails, SpendingHabits, FinancialGoals, LinkAccount, Ready } from './Onboarding.jsx'
import { Home, LeakFlags, DivertNudge } from './Home.jsx'
import { BudgetList, EditBudget, AnomalyAlert, BudgetSummary } from './Budget.jsx'
import { InvestRecs, InvestDetail, Simulator, RoundUp, InvestSuccess } from './Invest.jsx'
import { SpendVsSave, NextMonthPrediction } from './Reports.jsx'
import { ProfileHome, Goals, LinkedAccounts, Notifications } from './Profile.jsx'

const G_BRAND = 'linear-gradient(160deg,#6C5CF5 0%,#4A3FD0 60%,#3B32B0 100%)'
const G_GREEN = 'linear-gradient(160deg,#12B76A 0%,#0B9E5C 58%,#0B7B47 100%)'

/* Every screen: id → { Comp (content fragment), phone chrome, gallery caption }.
   `tab` = which bottom-tab is active (null hides the bar, for onboarding & sheets). */
export const SCREENS = {
  // Onboarding
  welcome:  { Comp: Welcome,        tab: null, darkStatus: true, bg: G_BRAND, name: 'Welcome',            sub: 'Warm intro + single CTA' },
  create:   { Comp: CreateAccount,  tab: null,                    name: 'Create account',     sub: 'Phone-first, OTP, encrypted' },
  income:   { Comp: IncomeDetails,  tab: null,                    name: 'Income & details',   sub: 'Powers the prediction' },
  habits:   { Comp: SpendingHabits, tab: null,                    name: 'Spending habits',    sub: 'Pick categories to watch' },
  obGoals:  { Comp: FinancialGoals, tab: null,                    name: 'Financial goals',    sub: 'What you’re saving for' },
  link:     { Comp: LinkAccount,    tab: null,                    name: 'Link account',       sub: 'Read-only, revoke anytime' },
  ready:    { Comp: Ready,          tab: null, darkStatus: true, bg: G_GREEN, name: 'Ready',             sub: 'First prediction delivered' },

  // Home
  home:     { Comp: Home,       tab: 'home', name: 'Home',            sub: 'Predicted month + breakdown' },
  leaks:    { Comp: LeakFlags,  tab: 'home', name: 'Leak flags',      sub: 'Forgotten recurring spends' },
  divert:   { Comp: DivertNudge, tab: null, overlay: true, under: 'home', name: 'Divert to invest', sub: 'One-tap nudge sheet' },

  // Budget
  budget:     { Comp: BudgetList,    tab: 'budget', name: 'Budgets list',      sub: 'Category limits at a glance' },
  editBudget: { Comp: EditBudget,    tab: 'budget', name: 'Set / edit budget', sub: 'Smart suggested limit' },
  anomaly:    { Comp: AnomalyAlert,  tab: null, overlay: true, under: 'budget', name: 'Anomaly alert', sub: 'Unusual-spend, not scary' },
  summary:    { Comp: BudgetSummary, tab: 'budget', name: 'Weekly / monthly',  sub: 'Spend vs save summary' },

  // Invest
  invest:        { Comp: InvestRecs,   tab: 'invest', name: 'Recommendations',    sub: 'Ranked low-risk options' },
  investDetail:  { Comp: InvestDetail, tab: 'invest', name: 'Investment detail',  sub: 'Why we suggest it' },
  simulator:     { Comp: Simulator,    tab: 'invest', name: 'Simulator',          sub: 'See it grow, then decide' },
  roundup:       { Comp: RoundUp,      tab: 'invest', name: 'Round-up & auto',    sub: 'Spare-change investing' },
  investSuccess: { Comp: InvestSuccess, tab: null, darkStatus: true, bg: G_GREEN, name: 'Confirm & success', sub: 'Reassuring finish' },

  // Reports
  reports:   { Comp: SpendVsSave,          tab: 'reports', name: 'Spend vs save',         sub: '6-month history' },
  nextMonth: { Comp: NextMonthPrediction,  tab: 'reports', name: 'Next-month prediction', sub: 'AI forecast, explained' },

  // Profile
  profile:       { Comp: ProfileHome,    tab: 'profile', name: 'Profile hub',     sub: 'Overview + shortcuts' },
  goals:         { Comp: Goals,          tab: 'profile', name: 'Goals',           sub: 'Progress toward each' },
  linked:        { Comp: LinkedAccounts, tab: 'profile', name: 'Linked accounts', sub: 'Read-only, synced' },
  notifications: { Comp: Notifications,  tab: 'profile', name: 'Notifications',   sub: 'Calm by default' },
}

/* Ordered flows — drives the gallery sections and the prototype's jump chips. */
export const FLOWS = [
  { id: 'onboarding', kicker: '1.1 · Onboarding', title: 'First run', root: 'welcome',
    desc: 'A calm, two-minute setup. One question per screen, plain language, and a clear reason for every permission we ask for.',
    screens: ['welcome', 'create', 'income', 'habits', 'obGoals', 'link', 'ready'] },
  { id: 'home', kicker: '2.1.1 · Home', title: 'Spend prediction', root: 'home',
    desc: 'The heart of the app: what this month will cost, where it goes, the little leaks — and one gentle nudge to invest the difference.',
    screens: ['home', 'leaks', 'divert'] },
  { id: 'budget', kicker: '2.1.2 · Budget', title: 'Budgets & alerts', root: 'budget',
    desc: 'Set limits without guilt. Colour + text always agree, so a warning never relies on colour alone.',
    screens: ['budget', 'editBudget', 'anomaly', 'summary'] },
  { id: 'invest', kicker: '2.1.3 · Invest', title: 'Invest', root: 'invest',
    desc: 'Low-risk first, jargon never. Simulate before committing, automate with round-ups, and celebrate the start.',
    screens: ['invest', 'investDetail', 'simulator', 'roundup', 'investSuccess'] },
  { id: 'reports', kicker: '2.1.4 · Reports', title: 'Reports', root: 'reports',
    desc: 'The long view. Spend-versus-save history and an AI forecast of next month, explained in words.',
    screens: ['reports', 'nextMonth'] },
  { id: 'profile', kicker: '2.1.5 · Profile', title: 'Profile', root: 'profile',
    desc: 'Everything personal in one calm place — goals, the accounts you’ve linked, notification controls, and your details.',
    screens: ['profile', 'goals', 'linked', 'notifications'] },
]

export const TAB_ROOTS = { home: 'home', budget: 'budget', invest: 'invest', reports: 'reports', profile: 'profile' }

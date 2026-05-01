// Live state — Neo updates this file as work progresses.
// Dashboard re-exports update when this changes (push + re-deploy or GitHub auto-deploy).

export const stats = [
  { label: "Active Projects", value: "4", detail: "2 active, 2 planned", icon: "FolderKanban", tone: "purple" },
  { label: "Tasks In Progress", value: "18", detail: "7 written, 11 pending", icon: "CheckCircle2", tone: "cyan" },
  { label: "AI Agents Online", value: "3 / 6", detail: "3 active, 3 drafted", icon: "Bot", tone: "gold" },
  { label: "Businesses", value: "6", detail: "All systems active", icon: "Building2", tone: "blue" },
];

export const activity = [
  { title: "Hector completed help article batch", detail: "Getting Started: 7 articles drafted (account creation through inviting team)", time: "Today 3:34 PM", icon: "FileText", tone: "green" },
  { title: "Hector drafted troubleshooting articles", detail: "8 troubleshooting guides covering comps, tokens, login, and more", time: "Today 2:15 PM", icon: "Bot", tone: "green" },
  { title: "Org chart and dashboard built", detail: "Visual org chart + ClawBot command center deployed to Vercel", time: "Today 7:00 PM", icon: "Workflow", tone: "cyan" },
  { title: "Help center deployed to Vercel", detail: "43 articles live at reiserch-help-center.vercel.app", time: "Today 5:12 PM", icon: "FileText", tone: "green" },
  { title: "Google Drive synced", detail: "All articles uploaded and shared publicly", time: "Today 4:45 PM", icon: "Coins", tone: "gold" },
  { title: "Quinn, Devin, Connie drafted", detail: "Agent prompts saved. Waiting for Shad to activate", time: "Apr 29", icon: "CircleAlert", tone: "gold" },
];

export const projects = [
  { name: "ReiSearch Help Center", tag: "ReiSearch", progress: 45, time: "Today" },
  { name: "Bob Buy Box Workflow", tag: "ReiSearch", progress: 30, time: "Yesterday" },
  { name: "ClawBot Dashboard", tag: "CRAIMer", progress: 70, time: "Today" },
  { name: "HouseAble Partner Ops", tag: "HouseAble", progress: 5, time: "Planned" },
  { name: "PCI Agent Outreach", tag: "PCI", progress: 15, time: "Planned" },
];

export const queues = [
  { label: "Needs Shad Review", count: 7, tone: "purple" },
  { label: "In Progress", count: 5, tone: "cyan" },
  { label: "Ready for Devs", count: 3, tone: "blue" },
  { label: "Ready to Publish", count: 4, tone: "green" },
  { label: "Blocked", count: 2, tone: "red" },
  { label: "Completed", count: 43, tone: "slate" },
];

export const priorities = [
  "Ship remaining 27 help articles (Comps, Presentations, Network, Tokens).",
  "Activate Quinn for QA testing across ReiSearch onboarding flows.",
  "Connect Vercel GitHub auto-deploy so pushes go live automatically.",
  "Define OAuth requirements for Gmail, Contacts, and ChatGPT/OpenAI access.",
  "Turn recurring Shad decisions into repeatable Clawbot operating rules.",
  "Begin Comps & Analysis article cluster — 7 planned articles.",
];

// Metadata for agent context
export const lastUpdated = "2026-04-30T19:42:00-07:00";
export const agentStatus = "All systems nominal. Hector completed 8 clusters. Bob active. Quinn/Devin/Connie awaiting activation.";

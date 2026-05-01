import React from "react";
import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Clock3,
  Coins,
  Database,
  FileText,
  FolderKanban,
  GitBranch,
  Home,
  House,
  LayoutDashboard,
  MessageSquare,
  Plug,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  SquareCheckBig,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import {
  stats as liveStats,
  activity as liveActivity,
  projects as liveProjects,
  queues as liveQueues,
  priorities as livePriorities,
  lastUpdated,
  agentStatus,
} from "../data/state";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "AI Team", icon: Users },
  { label: "Businesses", icon: Building2 },
  { label: "Projects", icon: FolderKanban },
  { label: "Tasks", icon: SquareCheckBig },
  { label: "Knowledge Base", icon: Database },
  { label: "Analytics", icon: BarChart3 },
  { label: "Integrations", icon: Plug },
  { label: "Settings", icon: Settings },
];

const businesses = [
  { name: "ReiSearch", icon: Brain, tone: "purple" },
  { name: "CRAIMer", icon: Brain, tone: "cyan" },
  { name: "HouseAble", icon: House, tone: "green" },
  { name: "PCI", icon: Building2, tone: "cyan" },
  { name: "Penny Skips", icon: Coins, tone: "gold" },
  { name: "REICB", icon: Building2, tone: "yellow" },
];

const agents = [
  { name: "Neo", role: "Chief of Staff", status: "Active", detail: "Routes work, manages priorities, and coordinates the AI team." },
  { name: "Hector", role: "Help Center & Training", status: "Active", detail: "Creates help docs, FAQs, onboarding guides, and training scripts." },
  { name: "Bob", role: "Buy Box Outreach", status: "Active", detail: "Collects buyer criteria and formats buy boxes for ReiSearch." },
  { name: "Quinn", role: "QA Agent", status: "Drafted", detail: "Tests workflows and reports bugs, friction, and confusing UX." },
  { name: "Devin", role: "Dev Ticket Agent", status: "Drafted", detail: "Turns issues and QA findings into clear developer tickets." },
  { name: "Connie", role: "Content Agent", status: "Drafted", detail: "Creates social posts, emails, video scripts, and marketing content." },
];

const integrations = [
  { name: "OpenAI / ChatGPT", status: "Connected" },
  { name: "GitHub Repo", status: "Connected" },
  { name: "Google Drive", status: "Connected" },
  { name: "Gmail", status: "Needs OAuth" },
  { name: "Google Contacts", status: "Needs OAuth" },
  { name: "ReiSearch", status: "Planned" },
  { name: "GHL / CRAIMer", status: "Planned" },
  { name: "BlueBubbles / iMessage", status: "Planned" },
];

const iconMap = {
  FolderKanban: FolderKanban,
  CheckCircle2: CheckCircle2,
  Bot: Bot,
  Building2: Building2,
  FileText: FileText,
  Workflow: Workflow,
  Coins: Coins,
  CircleAlert: CircleAlert,
};

function getIcon(name) { return iconMap[name] || FolderKanban; }

function StatusPill({ status }) {
  const clean = status.toLowerCase().replaceAll(" ", "-");
  return (
    <span className={`status-pill ${clean}`}>
      <span />
      {status}
    </span>
  );
}

function Panel({ children, className = "" }) {
  return <section className={`panel ${className}`}>{children}</section>;
}

function SectionTitle({ icon: Icon, title, action }) {
  return (
    <div className="section-title">
      <div>
        <Icon size={18} />
        <h2>{title}</h2>
      </div>
      {action && <button className="ghost-button">{action}</button>}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Bot size={30} />
        </div>
        <div>
          <div className="brand-name"><span>CLAW</span>BOT</div>
          <p>AI command center</p>
        </div>
      </div>
      <nav className="nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.label} className={item.active ? "active" : ""}>
              <Icon size={19} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="sidebar-status">
        <div className="status-head">
          <h3>Clawbot Status</h3>
          <span className="online-dot" />
        </div>
        <div className="online-row">
          <span className="online-dot" />
          Online
        </div>
        <div className="mini-row">
          <span>Uptime</span>
          <strong>7d 14h 22m</strong>
        </div>
        <div className="mini-row">
          <span>Version</span>
          <strong>1.0.0</strong>
        </div>
        <div className="mini-row" style={{ borderTop: "1px solid var(--border)", paddingTop: "10px", marginTop: "6px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)" }}>Last updated</span>
          <strong style={{ fontSize: "11px", color: "var(--text-muted)" }}>{new Date(lastUpdated).toLocaleString()}</strong>
        </div>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div>
        <div className="eyebrow">
          <Sparkles size={15} />
          Multi-business AI operations
        </div>
        <h1>Welcome back, Shad 👋</h1>
        <p>{agentStatus}</p>
      </div>
      <div className="topbar-actions">
        <div className="search">
          <Search size={18} />
          <input placeholder="Search bots, projects, docs..." />
        </div>
        <button className="icon-button">
          <Bell size={19} />
          <span />
        </button>
        <button className="profile-button">
          <div>S</div>
          <strong>Shad</strong>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}

function StatsGrid() {
  return (
    <div className="stats-grid">
      {liveStats.map((stat) => {
        const Icon = getIcon(stat.icon);
        return (
          <div key={stat.label} className={`stat-card ${stat.tone}`}>
            <div>
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
              <span>{stat.detail}</span>
            </div>
            <div className="stat-icon">
              <Icon size={33} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function OrgOverview() {
  return (
    <Panel className="org-panel">
      <SectionTitle icon={GitBranch} title="Organization Overview" action="View Org Chart" />
      <div className="org-map">
        <div className="owner-card">
          <div className="avatar">S</div>
          <strong>Shad</strong>
          <span>Owner / Operator</span>
        </div>
        <div className="connector vertical" />
        <div className="org-label">Businesses</div>
        <div className="business-row">
          {businesses.map((business) => {
            const Icon = business.icon;
            return (
              <div key={business.name} className={`business-node ${business.tone}`}>
                <Icon size={30} />
                <span>{business.name}</span>
              </div>
            );
          })}
        </div>
        <div className="connector vertical" />
        <div className="agent-node neo-node">
          <div className="agent-bot-icon"><Brain size={18} /></div>
          <div>
            <strong>Neo</strong>
            <span>Chief of Staff</span>
          </div>
        </div>
        <div className="connector vertical short" />
        <div className="org-label">AI Team</div>
        <div className="agent-row">
          {agents.filter((agent) => agent.name !== "Neo").map((agent) => (
            <div key={agent.name} className={`agent-node ${agent.status === "Active" ? "active-agent" : "draft-agent"}`}>
              <div className="agent-bot-icon"><Bot size={18} /></div>
              <div>
                <strong>{agent.name}</strong>
                <span>{agent.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function ActivityFeed() {
  return (
    <Panel>
      <SectionTitle icon={Zap} title="Activity Feed" action="View All" />
      <div className="activity-list">
        {liveActivity.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={item.title} className="activity-item">
              <div className={`activity-icon ${item.tone}`}>
                <Icon size={22} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
              <span>{item.time}</span>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function ProjectsPanel() {
  return (
    <Panel>
      <SectionTitle icon={FolderKanban} title="Recent Projects" />
      <div className="project-list">
        {liveProjects.map((project) => (
          <div key={project.name} className="project-item">
            <div>
              <h4>{project.name}</h4>
              <span>{project.tag}</span>
            </div>
            <div className="progress-wrap">
              <div className="progress-track">
                <div style={{ width: `${project.progress}%` }} />
              </div>
              <strong>{project.progress}%</strong>
            </div>
            <p>{project.time}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function CapacityPanel() {
  const activeCount = agents.filter(a => a.status === "Active").length - 1; // exclude Neo from count (he's always active)
  const draftedCount = agents.filter(a => a.status === "Drafted").length;
  const total = agents.length - 1; // exclude Neo
  const activePct = Math.round((activeCount / total) * 100);
  return (
    <Panel>
      <SectionTitle icon={ShieldCheck} title="AI Team Capacity" />
      <div className="capacity-wrap">
        <div className="capacity-ring">
          <div>
            <strong>{activePct}%</strong>
            <span>Active</span>
          </div>
        </div>
        <div className="capacity-list">
          <div>
            <span className="green-dot" />
            Active Agents <strong>{activeCount}</strong>
          </div>
          <div>
            <span className="gold-dot" />
            Drafted Agents <strong>{draftedCount}</strong>
          </div>
          <div>
            <span className="blue-dot" />
            Total Capacity <strong>{total}</strong>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function QuickActions() {
  return (
    <Panel>
      <SectionTitle icon={Zap} title="Quick Actions" />
      <div className="quick-actions">
        <button className="purple-action"><Plus size={22} /> New Project</button>
        <button className="green-action"><CheckCircle2 size={22} /> Assign Task</button>
        <button className="cyan-action"><MessageSquare size={22} /> Ask Clawbot</button>
        <button className="gold-action"><FileText size={22} /> Add Document</button>
      </div>
    </Panel>
  );
}

function QueuesPanel() {
  return (
    <Panel>
      <SectionTitle icon={SquareCheckBig} title="Active Work Queues" />
      <div className="queue-grid">
        {liveQueues.map((queue) => (
          <div key={queue.label} className={`queue-card ${queue.tone}`}>
            <span>{queue.label}</span>
            <strong>{queue.count}</strong>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function AgentsPanel() {
  return (
    <Panel>
      <SectionTitle icon={Users} title="AI Team Roster" />
      <div className="agent-grid">
        {agents.map((agent) => (
          <article key={agent.name} className="agent-card">
            <div className="agent-card-head">
              <div className="agent-avatar"><Bot size={23} /></div>
              <div>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
              </div>
              <StatusPill status={agent.status} />
            </div>
            <p>{agent.detail}</p>
          </article>
        ))}
      </div>
    </Panel>
  );
}

function IntegrationsPanel() {
  return (
    <Panel>
      <SectionTitle icon={Plug} title="Integrations & Access" />
      <div className="integration-list">
        {integrations.map((integration) => (
          <div key={integration.name} className="integration-item">
            <span>{integration.name}</span>
            <StatusPill status={integration.status} />
          </div>
        ))}
      </div>
    </Panel>
  );
}

function PrioritiesPanel() {
  return (
    <Panel>
      <SectionTitle icon={Activity} title="Current Priorities" />
      <div className="priority-list">
        {livePriorities.map((priority, index) => (
          <div key={priority} className="priority-item">
            <strong>{index + 1}</strong>
            <p>{priority}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="bg-glow one" />
      <div className="bg-glow two" />
      <div className="bg-glow three" />
      <Sidebar />
      <main className="main">
        <Header />
        <StatsGrid />
        <div className="dashboard-grid">
          <OrgOverview />
          <ActivityFeed />
        </div>
        <div className="lower-grid">
          <ProjectsPanel />
          <CapacityPanel />
          <QuickActions />
        </div>
        <div className="split-grid">
          <QueuesPanel />
          <AgentsPanel />
        </div>
        <div className="bottom-grid">
          <IntegrationsPanel />
          <PrioritiesPanel />
        </div>
        <footer>
          <span>"Clawbot: Your multi-business AI command center."</span>
          <span>Built with <Bot size={14} /> and <Clock3 size={14} /> by Clawbot</span>
        </footer>
      </main>
    </div>
  );
}

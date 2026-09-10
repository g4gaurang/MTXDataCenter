import { FormEvent, useMemo, useState } from 'react'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronRight,
  CircuitBoard,
  Clock3,
  Cpu,
  Database,
  Gauge,
  Layers3,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Snowflake,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  architecture,
  challenges,
  controls,
  journey,
  measures,
  models,
  readiness,
  responsibilities,
  workloads,
} from './data'

const nav = [
  ['Overview', 'overview'],
  ['Infrastructure Models', 'models'],
  ['Workloads', 'workloads'],
  ['AI Readiness', 'ai-readiness'],
  ['Operations', 'operations'],
  ['Architecture', 'architecture'],
  ['Adoption', 'adoption'],
]

const bands = ['Low', 'Moderate', 'Elevated', 'High']

function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string
  title: string
  body?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}

function Selector({
  items,
  active,
  setActive,
  label,
}: {
  items: string[]
  active: number
  setActive: (index: number) => void
  label: string
}) {
  return (
    <div className="selector" role="tablist" aria-label={label}>
      {items.map((item, index) => (
        <button
          key={item}
          role="tab"
          aria-selected={active === index}
          className={active === index ? 'active' : ''}
          onClick={() => setActive(index)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="MTX Data Center Solutions home">
        <span className="brand-mark"><Server size={20} /></span>
        <span><strong>MTX</strong> Data Center Solutions</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav">
        {open ? <X /> : <Menu />}<span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="primary-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {nav.map(([label, href]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button small" href="#contact" onClick={() => setOpen(false)}>Request a Consultation</a>
      </nav>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Conceptual view connecting enterprise compute, private infrastructure, colocation, monitoring, and a developing AI-ready expansion zone">
      <div className="visual-topline"><span><Activity size={15} /> Infrastructure planning view</span><span className="live-dot">Conceptual</span></div>
      <div className="fabric-lines" aria-hidden="true" />
      <div className="node enterprise"><Server /><span>Enterprise<br />compute cluster</span><i>CPU · VM · data</i></div>
      <div className="node private"><ShieldCheck /><span>Private<br />infrastructure</span><i>Isolated zone</i></div>
      <div className="node colo"><Building2 /><span>Colocation<br />racks</span><i>Facility dependent</i></div>
      <div className="node fabric"><Network /><span>Network fabric</span><i>Private · internet</i></div>
      <div className="node monitor"><Gauge /><span>Monitoring layer</span><i>Health · capacity</i></div>
      <div className="node ai"><Sparkles /><span>AI-ready expansion zone</span><i>Planned or developing</i></div>
      <p className="visual-caption">Conceptual infrastructure view — not a representation of a specific MTX facility</p>
    </div>
  )
}

function Hero() {
  return (
    <>
      <main id="top">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <span className="eyebrow">Enterprise and AI Infrastructure</span>
            <h1>Infrastructure built for critical operations and AI-driven growth</h1>
            <p className="hero-lead">Deploy enterprise applications, dedicated workloads, and emerging AI services through infrastructure models aligned with your performance, security, connectivity, and operating requirements.</p>
            <p>MTX Data Center Solutions brings dedicated hosting, private infrastructure, managed colocation, and an evolving AI-ready infrastructure strategy into one offering. Organizations can address current hosting requirements while preparing for higher-density compute, GPU infrastructure, advanced cooling, low-latency networking, and scalable AI deployment patterns.</p>
            <div className="hero-actions">
              <a className="button" href="#models">Explore Deployment Models <ArrowRight size={17} /></a>
              <a className="button secondary" href="#ai-readiness">Assess AI Readiness</a>
              <a className="text-link" href="#contact">Talk to an Infrastructure Specialist <ChevronRight size={16} /></a>
            </div>
          </div>
          <HeroVisual />
        </section>
        <section className="scope" aria-label="Offering scope">
          <span className="scope-label">Offering scope</span>
          {[['3', 'infrastructure models'], ['2', 'workload families'], ['1', 'managed operating view'], ['Flexible', 'growth path']].map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </section>
      </main>
    </>
  )
}

function Challenges() {
  const [active, setActive] = useState(0)
  const item = challenges[active]
  return (
    <section className="section" aria-labelledby="challenge-title">
      <SectionHeading eyebrow="Buyer priorities" title="Turn infrastructure constraints into planning decisions" body="Select a challenge to see a potential product response and measures that can guide the conversation." />
      <div className="challenge-layout">
        <div className="challenge-grid" role="tablist" aria-label="Buyer challenges">
          {challenges.map((challenge, index) => (
            <button role="tab" aria-selected={active === index} className={`challenge-card ${active === index ? 'active' : ''}`} key={challenge.title} onClick={() => setActive(index)}>
              <span>0{index + 1}</span><strong>{challenge.title}</strong><ChevronRight />
            </button>
          ))}
        </div>
        <div className="response-panel" role="tabpanel">
          <span className="panel-kicker">Selected challenge</span>
          <h3 id="challenge-title">{item.title}</h3>
          <h4>Challenge</h4><p>{item.challenge}</p>
          <h4>MTX response</h4><p>{item.response}</p>
          <h4>Suggested measures</h4>
          <div className="measure-chips">{item.measures.map((measure) => <span key={measure}>{measure}</span>)}</div>
        </div>
      </div>
    </section>
  )
}

function Models() {
  const [active, setActive] = useState(0)
  const [compare, setCompare] = useState(false)
  const model = models[active]
  const dimensions = Object.keys(models[0].comparison)
  return (
    <section className="section tinted" id="models">
      <SectionHeading eyebrow="Infrastructure models" title="Select the operating and control model that fits the workload" body="Each model reflects a different balance of hardware control, facility dependency, density, and operating responsibility." />
      <Selector items={models.map((m) => m.name)} active={active} setActive={setActive} label="Infrastructure models" />
      <div className="model-detail">
        <div>
          <span className={`status ${active === 2 ? 'planned' : 'configured'}`}>{model.status}</span>
          <h3>{model.name}</h3><p>{model.description}</p>
          {active === 2 && <div className="notice"><Sparkles /> AI-ready capabilities are subject to facility availability, capacity, design validation, and deployment schedule.</div>}
        </div>
        <ul className="check-list">{model.traits.map((trait) => <li key={trait}><Check />{trait}</li>)}</ul>
      </div>
      <button className="compare-toggle" aria-expanded={compare} onClick={() => setCompare(!compare)}>{compare ? 'Close model comparison' : 'Compare deployment models'} <BarChart3 /></button>
      {compare && (
        <div className="table-scroll">
          <table className="comparison-table">
            <caption>Illustrative infrastructure model comparison</caption>
            <thead><tr><th>Decision area</th>{models.map((m) => <th key={m.name}>{m.name}</th>)}</tr></thead>
            <tbody>{dimensions.map((dimension) => <tr key={dimension}><th>{dimension}</th>{models.map((m) => <td key={m.name}>{m.comparison[dimension]}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
    </section>
  )
}

function Workloads() {
  const [active, setActive] = useState(3)
  const workload = workloads[active]
  const profiles = [
    ['Compute profile', workload.compute, Cpu],
    ['Storage profile', workload.storage, Database],
    ['Network considerations', workload.network, Network],
    ['Cooling considerations', workload.cooling, Snowflake],
    ['Security considerations', workload.security, ShieldCheck],
    ['Possible deployment models', workload.models, Layers3],
  ] as const
  return (
    <section className="section dark" id="workloads">
      <SectionHeading light eyebrow="Workload explorer" title="Start with workload behavior, not a hardware assumption" body="AI workloads vary. Select a category to review the infrastructure questions that shape a viable deployment." />
      <Selector items={workloads.map((w) => w.name)} active={active} setActive={setActive} label="Workload categories" />
      <div className="workload-layout">
        <div className="workload-summary">
          <span className="panel-kicker">Selected workload</span><h3>{workload.name}</h3>
          <h4>Primary infrastructure considerations</h4>
          <ul>{workload.considerations.map((item) => <li key={item}>{item}</li>)}</ul>
          <h4>Questions that require discovery</h4>
          <ul>{workload.questions.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="profile-grid">{profiles.map(([title, body, Icon]) => <article key={title}><Icon /><h4>{title}</h4><p>{body}</p></article>)}</div>
      </div>
    </section>
  )
}

const assessmentQuestions = [
  ['What type of workload are you planning?', ['Enterprise', 'SaaS / data', 'AI / HPC']],
  ['How predictable is demand?', ['Predictable', 'Variable', 'Unclear']],
  ['Do you need dedicated hardware?', ['Yes', 'No', 'Undecided']],
  ['What level of hardware control do you require?', ['High', 'Moderate', 'Low']],
  ['Are AI or HPC workloads part of the near-term roadmap?', ['Yes', 'No', 'Exploring']],
  ['Which operating responsibilities should be managed by MTX?', ['Infrastructure', 'Shared operations', 'Advisory only']],
]

function Assessment() {
  const [answers, setAnswers] = useState<string[]>(Array(6).fill(''))
  const completed = answers.every(Boolean)
  const recommendation = useMemo(() => {
    if (!completed) return ''
    if (answers[4] === 'Yes' || answers[0] === 'AI / HPC') return 'AI-readiness assessment recommended'
    if (answers[2] === 'Yes' || answers[3] === 'High') return 'Dedicated infrastructure starting point'
    if (answers[3] === 'Low' && answers[2] === 'No') return 'Colocation starting point'
    return 'Hybrid deployment may warrant evaluation'
  }, [answers, completed])
  return (
    <section className="section assessment">
      <SectionHeading eyebrow="Infrastructure fit assessment" title="Find your infrastructure starting point" body="Answer six planning questions to generate an illustrative starting point." />
      <div className="assessment-grid">
        <div className="questions">
          {assessmentQuestions.map(([question, options], index) => (
            <fieldset key={question}>
              <legend><span>{index + 1}</span>{question}</legend>
              <div>{options.map((option) => <label key={option}><input type="radio" name={`q-${index}`} checked={answers[index] === option} onChange={() => setAnswers((current) => current.map((value, i) => i === index ? option : value))} />{option}</label>)}</div>
            </fieldset>
          ))}
        </div>
        <aside className="result-card" aria-live="polite">
          <Gauge />
          <span className="panel-kicker">Initial planning view</span>
          <h3>{recommendation || 'Complete the questions to view a starting point'}</h3>
          <p>{completed ? 'Use this result to focus workload, facility, capacity, security, and operating-model discovery.' : `${answers.filter(Boolean).length} of 6 questions completed`}</p>
          <blockquote>This prototype provides an initial planning view. Infrastructure recommendations require workload, facility, security, capacity, cost, and operational analysis.</blockquote>
        </aside>
      </div>
    </section>
  )
}

function AIReadiness() {
  const [active, setActive] = useState(0)
  const item = readiness[active]
  return (
    <section className="section ai-section" id="ai-readiness">
      <SectionHeading eyebrow="AI readiness" title="Prepare the infrastructure before AI demand arrives" body="Readiness connects workload demand to data, compute, facility capacity, security, and operations. Select a dimension to examine the planning work." />
      <div className="readiness-layout">
        <div className="readiness-map" role="tablist" aria-label="AI readiness dimensions">
          {readiness.map((dimension, index) => <button role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={dimension[0]}><span>{String(index + 1).padStart(2, '0')}</span>{dimension[0]}</button>)}
        </div>
        <div className="readiness-detail" role="tabpanel">
          <Sparkles /><span className="status planned">Planning dimension</span><h3>{item[0]}</h3>
          {[['Questions to answer', item[1]], ['Common constraints', item[2]], ['Planning considerations', item[3]], ['Potential MTX support', item[4]]].map(([title, value]) => <div key={title}><h4>{title}</h4><p>{value}</p></div>)}
        </div>
      </div>
    </section>
  )
}

function Architecture() {
  const [active, setActive] = useState(0)
  return (
    <section className="section architecture-section" id="architecture">
      <SectionHeading light eyebrow="Conceptual architecture" title="Trace the dependencies from workload to operations" body="Select a layer to see its role. This view is conceptual and does not represent a specific MTX facility or deployed design." />
      <div className="architecture-shell">
        <div className="layer-stack" role="tablist" aria-label="Architecture layers">
          {architecture.map(([name, items], index) => <button role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={active === index ? 'active' : ''} key={name}><span>{name} layer</span><small>{items.slice(0, 3).join(' · ')}</small></button>)}
        </div>
        <div className="layer-detail" role="tabpanel">
          <span className="concept-label">Conceptual view</span><Layers3 /><h3>{architecture[active][0]} layer</h3><p>{architecture[active][2]}</p>
          <div>{architecture[active][1].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  )
}

function CapacityPlanner() {
  const [workload, setWorkload] = useState('Enterprise applications')
  const [compute, setCompute] = useState(2)
  const [growth, setGrowth] = useState(2)
  const [redundancy, setRedundancy] = useState('Balanced')
  const [accelerator, setAccelerator] = useState('Not determined')
  const [density, setDensity] = useState(2)
  const [cooling, setCooling] = useState('Air cooling')
  const score = compute + growth + density + (accelerator === 'Required' ? 3 : 0) + (redundancy === 'Higher resilience' ? 1 : 0)
  const category = (offset: number) => bands[Math.min(3, Math.max(0, Math.round(score / 4) + offset))]
  const output = [
    ['Relative compute demand', category(0)],
    ['Relative power demand', category(accelerator === 'Required' ? 1 : 0)],
    ['Relative cooling demand', category(cooling === 'Liquid-cooling evaluation' ? 1 : 0)],
    ['Network-demand category', workload.includes('AI') ? 'High' : category(-1)],
    ['Suggested planning horizon', growth > 2 ? 'Phased, with early checkpoints' : 'Baseline plus expansion trigger'],
    ['Expansion checkpoints', growth > 2 ? 'Demand validation · facility review · procurement' : 'Utilization · forecast · service review'],
  ]
  return (
    <section className="section capacity">
      <SectionHeading eyebrow="Capacity planning" title="Explore how workload assumptions change infrastructure demand" body="Adjust the inputs to compare relative planning categories. The output is not an engineering calculation." />
      <div className="planner-layout">
        <div className="planner-controls">
          <label>Workload type<select value={workload} onChange={(e) => setWorkload(e.target.value)}><option>Enterprise applications</option><option>AI inference</option><option>AI training / HPC</option></select></label>
          <label>Initial compute requirement <strong>{bands[compute - 1]}</strong><input type="range" min="1" max="4" value={compute} onChange={(e) => setCompute(Number(e.target.value))} /></label>
          <label>Expected growth range <strong>{bands[growth - 1]}</strong><input type="range" min="1" max="4" value={growth} onChange={(e) => setGrowth(Number(e.target.value))} /></label>
          <label>Redundancy preference<select value={redundancy} onChange={(e) => setRedundancy(e.target.value)}><option>Baseline resilience</option><option>Balanced</option><option>Higher resilience</option></select></label>
          <label>AI accelerator requirement<select value={accelerator} onChange={(e) => setAccelerator(e.target.value)}><option>Not determined</option><option>Not expected</option><option>Required</option></select></label>
          <label>Rack-density range <strong>{bands[density - 1]}</strong><input type="range" min="1" max="4" value={density} onChange={(e) => setDensity(Number(e.target.value))} /></label>
          <label>Cooling approach<select value={cooling} onChange={(e) => setCooling(e.target.value)}><option>Air cooling</option><option>Enhanced air-cooling evaluation</option><option>Liquid-cooling evaluation</option></select></label>
        </div>
        <div className="planner-output" aria-live="polite">
          <div className="demand-rings" aria-hidden="true"><span /><span /><span><Cpu /></span></div>
          <div className="output-list">{output.map(([label, value], index) => <div key={label}><span>{label}</span><strong className={index < 4 ? value.toLowerCase() : ''}>{value}</strong></div>)}</div>
          <p className="data-label">Illustrative planning output. Facility engineering and capacity validation are required.</p>
        </div>
      </div>
    </section>
  )
}

const dashboardTabs = ['Infrastructure health', 'Capacity', 'Power and cooling', 'Connectivity', 'Workloads', 'Incidents']
const dashboardData = {
  'Infrastructure health': [58, 62, 60, 67, 65, 71, 69],
  Capacity: [49, 52, 58, 62, 68, 74, 81],
  'Power and cooling': [45, 54, 57, 63, 69, 66, 73],
  Connectivity: [35, 58, 44, 62, 55, 76, 60],
  Workloads: [42, 46, 53, 59, 66, 78, 83],
  Incidents: [12, 8, 19, 14, 22, 16, 11],
}

function Dashboard() {
  const [active, setActive] = useState(1)
  const data = dashboardData[dashboardTabs[active] as keyof typeof dashboardData].map((value, index) => ({ period: `P${index + 1}`, value }))
  return (
    <section className="section dashboard-section" id="operations">
      <SectionHeading light eyebrow="Operations command center" title="Use infrastructure signals to support operating decisions" body="A fictional dashboard demonstrates how teams could review capacity, demand, and operational warning states." />
      <Selector items={dashboardTabs} active={active} setActive={setActive} label="Operations dashboard views" />
      <div className="dashboard">
        <div className="dashboard-head"><div><span className="live-dot amber">2 items need review</span><h3>{dashboardTabs[active]}</h3></div><span className="data-label">Illustrative product data</span></div>
        <div className="kpi-grid">
          {[['Rack utilization', 'Elevated', 'Capacity review'], ['Compute allocation', 'Moderate', 'Within planning band'], ['Storage consumption', 'Elevated', 'Forecast rising'], ['Network demand', 'Moderate', 'Variable profile'], ['Power-capacity band', 'Elevated', 'Engineering review'], ['Cooling-capacity band', 'Moderate', 'Monitor density'], ['Open operational events', '2', 'One warning'], ['AI workload demand', 'High', 'Planning signal']].map(([label, value, note], index) => <article className={index === 0 || index === 4 ? 'warning' : ''} key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
        </div>
        <div className="chart-card">
          <div><h4>Capacity forecast</h4><p>Relative demand index by planning period</p></div>
          <div className="chart-wrap" aria-label={`Illustrative ${dashboardTabs[active]} trend: ${data.map((d) => `${d.period} ${d.value}`).join(', ')}`}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#32c6c2" stopOpacity=".5" /><stop offset="100%" stopColor="#32c6c2" stopOpacity="0" /></linearGradient></defs><CartesianGrid strokeDasharray="4 6" stroke="#29425e" /><XAxis dataKey="period" stroke="#9bb0c7" /><YAxis hide domain={[0, 100]} /><Tooltip /><Area type="monotone" dataKey="value" stroke="#56ded7" strokeWidth={3} fill="url(#area)" /></AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="data-label">Illustrative product data</p>
        </div>
      </div>
    </section>
  )
}

function Security() {
  const [active, setActive] = useState(0)
  return (
    <section className="section">
      <SectionHeading eyebrow="Security and operational resilience" title="Coordinate controls across the infrastructure lifecycle" body="Specific controls, monitoring, and service responsibilities depend on the selected model, facility, risk profile, and agreement." />
      <div className="security-layout">
        <div className="control-orbit" aria-hidden="true"><ShieldCheck /><span>Layered<br />controls</span></div>
        <div className="control-list" role="tablist" aria-label="Control layers">{controls.map(([name], index) => <button role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={active === index ? 'active' : ''} key={name}>{name}<ChevronRight /></button>)}</div>
        <div className="control-detail" role="tabpanel"><span className="panel-kicker">Potential controls</span><h3>{controls[active][0]}</h3><ul className="check-list">{controls[active][1].map((item) => <li key={item}><Check />{item}</li>)}</ul><p className="muted">Availability and responsibility require validation for each engagement.</p></div>
      </div>
    </section>
  )
}

function Journey() {
  const [active, setActive] = useState(0)
  return (
    <section className="section tinted" id="adoption">
      <SectionHeading eyebrow="Deployment journey" title="Move from workload discovery to managed evolution" body="Select a phase to review expected activities and the decision it supports. Timing depends on scope, procurement, facility, and migration needs." />
      <div className="journey-rail" role="tablist" aria-label="Deployment phases">{journey.map(([name], index) => <button role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={active === index ? 'active' : ''} key={name}><span>{index + 1}</span>{name}</button>)}</div>
      <div className="journey-detail" role="tabpanel"><div><span className="panel-kicker">Phase {active + 1}</span><h3>{journey[active][0]}</h3><p>{journey[active][2]}</p></div><ul className="check-list">{journey[active][1].map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
    </section>
  )
}

function Responsibility() {
  const [focus, setFocus] = useState('MTX')
  const cols = ['Area', 'MTX', 'Customer', 'Facility operator', 'Equipment / carrier']
  return (
    <section className="section">
      <SectionHeading eyebrow="Responsibility model" title="Make operating ownership explicit" body="The final responsibility model depends on the selected service and contract." />
      <div className="focus-controls" aria-label="Highlight responsibility party">{cols.slice(1).map((col) => <button className={focus === col ? 'active' : ''} onClick={() => setFocus(col)} key={col}>{col}</button>)}</div>
      <div className="table-scroll"><table className="responsibility-table"><caption>Illustrative division of infrastructure responsibilities</caption><thead><tr>{cols.map((col) => <th className={focus === col ? 'focused' : ''} key={col}>{col}</th>)}</tr></thead><tbody>{responsibilities.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td className={focus === cols[index] ? 'focused' : ''} key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div>
    </section>
  )
}

function Offering() {
  const offerings = [
    ['Infrastructure services', 'Configured for each engagement', ['Dedicated hosting', 'Private infrastructure', 'Managed colocation', 'Connectivity', 'Compute', 'Storage', 'Backup', 'Monitoring']],
    ['AI infrastructure services', 'Planned or developing', ['AI-readiness assessment', 'GPU infrastructure planning', 'Accelerator selection support', 'High-density design', 'Cooling strategy', 'Data-fabric design', 'AI workload deployment support', 'Capacity expansion planning']],
    ['Managed operations', 'Configured for each engagement', ['Infrastructure monitoring', 'Incident coordination', 'Capacity reporting', 'Change support', 'Maintenance coordination', 'Vendor coordination', 'Service reviews', 'Operational optimization']],
  ]
  return (
    <section className="section offering">
      <SectionHeading eyebrow="Offering structure" title="Compose services around the selected deployment model" body="Potential components are scoped by engagement; a component’s presence here does not mean it is included in every model." />
      <div className="offering-grid">{offerings.map(([name, status, items], index) => <article key={name as string}><div className="offering-icon">{[<Server />, <Cpu />, <Activity />][index]}</div><span className={`status ${index === 1 ? 'planned' : 'configured'}`}>{status}</span><h3>{name}</h3><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>
  )
}

function Maturity() {
  const columns = [
    ['Available', 'Use after MTX confirms current delivery evidence.', ['No repository evidence currently supports an unconditional public availability claim.']],
    ['Configured for each engagement', 'Depends on workload, facility, customer, and contract requirements.', ['Dedicated and private infrastructure', 'Managed colocation components', 'Monitoring and operating support']],
    ['Planned or developing', 'Not presented as operational or commercially available.', ['GPU and accelerator capacity', 'High-density rack designs', 'Liquid-cooling capabilities', 'AI cluster infrastructure']],
  ]
  return (
    <section className="section maturity">
      <SectionHeading eyebrow="Current availability and roadmap" title="State maturity before discussing capability" body="This prototype defaults claim-sensitive physical AI capabilities to planned or developing because the repository contains no approval evidence." />
      <div className="maturity-grid">{columns.map(([name, body, items], index) => <article key={name as string} className={`maturity-${index}`}><span className="status">{name}</span><p>{body}</p><ul>{(items as string[]).map((item) => <li key={item}><Check />{item}</li>)}</ul></article>)}</div>
    </section>
  )
}

function Measures() {
  const data = Object.entries(measures).map(([name, values]) => ({ name, value: values.length }))
  return (
    <section className="section measures">
      <SectionHeading eyebrow="Recommended measures" title="Infrastructure measures that support operating decisions" body="Select measures during service design based on workload objectives. No benchmark or improvement value is implied." />
      <div className="measures-layout">
        <div>{Object.entries(measures).map(([group, items]) => <article key={group}><h3>{group}</h3><div className="measure-chips">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        <div className="measure-chart" aria-label="Measure groups and number of candidate measures">
          <ResponsiveContainer width="100%" height="100%"><BarChart data={data} layout="vertical" margin={{ left: 20 }}><CartesianGrid strokeDasharray="3 6" horizontal={false} /><XAxis type="number" hide /><YAxis dataKey="name" type="category" width={105} tick={{ fontSize: 12 }} /><Tooltip /><Bar dataKey="value" radius={[0, 6, 6, 0]}>{data.map((_, index) => <Cell key={index} fill={['#1768e0', '#20aaa8', '#7357d8', '#e29c36', '#506a88'][index]} />)}</Bar></BarChart></ResponsiveContainer>
          <p className="data-label">Category count only — not performance data</p>
        </div>
      </div>
    </section>
  )
}

function WhyMTX() {
  const items = [
    ['A path from current infrastructure to AI readiness', 'MTX helps organizations evaluate current workloads while preparing for higher-density AI and analytics demand.', CircuitBoard],
    ['Flexible deployment models', 'Organizations can evaluate dedicated infrastructure, colocation, and AI-ready patterns based on control, capacity, security, and operating requirements.', Boxes],
    ['Workload-led planning', 'Infrastructure decisions begin with workload behavior, data needs, performance expectations, and growth patterns.', Gauge],
    ['Implementation and operating support', 'MTX can support assessment, architecture, deployment, migration, monitoring, and continued infrastructure evolution based on the agreed engagement scope.', Activity],
  ]
  return (
    <section className="section why">
      <SectionHeading eyebrow="Why MTX" title="Connect infrastructure decisions to the workload roadmap" />
      <div className="why-grid">{items.map(([title, body, Icon]) => <article key={title as string}><Icon /><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (event.currentTarget.checkValidity()) setSubmitted(true)
  }
  return (
    <section className="contact" id="contact">
      <div className="contact-copy"><span className="eyebrow">Plan the next decision</span><h2>Build an infrastructure path that supports what comes next</h2><p>Evaluate your current workloads, understand AI infrastructure requirements, and develop a phased deployment plan aligned with your operating model.</p><div className="contact-actions"><span>Schedule an Infrastructure Assessment</span><span>Discuss AI Readiness</span><span>Request a Consultation</span></div></div>
      {submitted ? (
        <div className="confirmation" role="status"><Check /><h3>Your planning request is ready.</h3><p>This prototype stored and transmitted no information. In a production site, an approved contact workflow would continue the request.</p><button className="button secondary" onClick={() => setSubmitted(false)}>Start another request</button></div>
      ) : (
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>Name<input required name="name" autoComplete="name" /></label>
            <label>Organization<input required name="organization" autoComplete="organization" /></label>
            <label>Role<input required name="role" autoComplete="organization-title" /></label>
            <label>Email<input required type="email" name="email" autoComplete="email" /></label>
            <label>Workload type<select required defaultValue=""><option value="" disabled>Select one</option><option>Enterprise applications</option><option>SaaS / data</option><option>AI / HPC</option><option>Mixed workload</option></select></label>
            <label>Current infrastructure model<select required defaultValue=""><option value="" disabled>Select one</option><option>On-premises</option><option>Colocation</option><option>Hosted / cloud</option><option>Mixed model</option></select></label>
            <label>Area of interest<select required defaultValue=""><option value="" disabled>Select one</option><option>Dedicated infrastructure</option><option>Managed colocation</option><option>AI readiness</option><option>Managed operations</option></select></label>
            <label className="full">Message<textarea name="message" rows={4} placeholder="Describe the workload, timing considerations, and planning questions." /></label>
          </div>
          <p className="form-note"><ShieldCheck /> Prototype form: information is validated locally and is not transmitted.</p>
          <button className="button" type="submit">Request a Consultation <ArrowRight /></button>
        </form>
      )}
    </section>
  )
}

function Footer() {
  return (
    <footer><div><a className="brand" href="#top"><span className="brand-mark"><Server size={20} /></span><span><strong>MTX</strong> Data Center Solutions</span></a><p>Secure infrastructure for today’s critical workloads and tomorrow’s AI-driven growth.</p></div><div><span>Prototype notice</span><p>Conceptual views and fictional data support product planning. Capability availability requires MTX validation.</p></div></footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#overview">Skip to main content</a>
      <Header />
      <Hero />
      <Challenges />
      <Models />
      <Workloads />
      <Assessment />
      <AIReadiness />
      <Architecture />
      <CapacityPlanner />
      <Security />
      <Dashboard />
      <Journey />
      <Responsibility />
      <Offering />
      <Maturity />
      <Measures />
      <WhyMTX />
      <Contact />
      <Footer />
      <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
    </>
  )
}

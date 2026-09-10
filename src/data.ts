export type Model = {
  name: string
  status: string
  description: string
  traits: string[]
  comparison: Record<string, string>
}

export const challenges = [
  {
    title: 'Infrastructure that cannot scale with demand',
    challenge: 'Fixed infrastructure can make it difficult to accommodate application growth, new services, and changing performance requirements.',
    response: 'Provide modular deployment options that allow compute, storage, connectivity, and operating support to evolve with workload demand.',
    measures: ['Capacity forecast', 'Utilization by resource', 'Expansion decision points'],
  },
  {
    title: 'Rising operational complexity',
    challenge: 'Power, cooling, hardware, connectivity, monitoring, physical security, and vendor coordination create ongoing operational demands.',
    response: 'Combine infrastructure services and operational support within a governed service model based on the customer’s division of responsibilities.',
    measures: ['Operational events', 'Change success', 'Vendor actions'],
  },
  {
    title: 'Reliability and continuity concerns',
    challenge: 'Critical applications require infrastructure designed around availability, monitoring, incident response, and recovery planning.',
    response: 'Establish resilient infrastructure patterns, operating procedures, monitoring, escalation paths, and recovery objectives suited to the workload.',
    measures: ['Availability trend', 'Incident duration', 'Recovery exercise results'],
  },
  {
    title: 'Unclear path to AI infrastructure',
    challenge: 'Organizations may know that AI demand is growing without knowing which workloads require GPUs, high-density racks, specialized networking, or advanced cooling.',
    response: 'Assess workload characteristics and develop a phased infrastructure plan covering inference, model customization, training, data movement, capacity, and operational readiness.',
    measures: ['Accelerator demand', 'Data throughput', 'Power and cooling bands'],
  },
  {
    title: 'Security and governance requirements',
    challenge: 'Physical infrastructure, network access, privileged administration, data protection, monitoring, and auditability must work together.',
    response: 'Apply layered security and governance controls based on the customer’s data, workload, regulatory, and risk requirements.',
    measures: ['Access reviews', 'Configuration findings', 'Security events'],
  },
  {
    title: 'Cost and capacity uncertainty',
    challenge: 'Organizations can overprovision infrastructure or face capacity constraints when application and AI demand changes.',
    response: 'Use workload discovery, capacity planning, deployment scenarios, and phased expansion decisions to align infrastructure with expected demand.',
    measures: ['Demand variance', 'Capacity headroom', 'Forecast review cadence'],
  },
]

export const models: Model[] = [
  {
    name: 'Dedicated and private infrastructure',
    status: 'Configured for each engagement',
    description: 'For organizations requiring isolated environments, greater configuration control, or infrastructure dedicated to defined business workloads.',
    traits: ['Dedicated compute', 'Private network design', 'Configurable storage', 'Workload isolation', 'Customer-specific security controls', 'Managed monitoring options', 'Capacity expansion planning'],
    comparison: {
      'Workload type': 'Critical enterprise and SaaS',
      'Hardware control': 'Customer-specific configuration',
      'Expected density': 'Conventional to elevated',
      Scalability: 'Modular expansion',
      'Operational responsibility': 'Shared by agreement',
      Connectivity: 'Private and internet options',
      'Typical adoption path': 'Discover → design → migrate',
    },
  },
  {
    name: 'Managed colocation',
    status: 'Facility validation required',
    description: 'For organizations that want to retain ownership or control of hardware while using facility infrastructure and operational support.',
    traits: ['Rack and cage options', 'Power and cooling', 'Carrier-neutral connectivity — validate', 'Physical access controls', 'Environmental monitoring', 'Remote-hands support — validate', 'Customer hardware control'],
    comparison: {
      'Workload type': 'Customer-owned platforms',
      'Hardware control': 'Customer-led',
      'Expected density': 'Facility dependent',
      Scalability: 'Space and capacity dependent',
      'Operational responsibility': 'Customer, MTX, and facility',
      Connectivity: 'Carrier options require validation',
      'Typical adoption path': 'Facility fit → install → operate',
    },
  },
  {
    name: 'AI-ready infrastructure',
    status: 'Planned or developing',
    description: 'A target model for AI inference, model customization, training, advanced analytics, and HPC workloads requiring specialized infrastructure.',
    traits: ['GPU and accelerator infrastructure', 'High-density rack designs', 'Advanced air or liquid cooling', 'High-speed data fabrics', 'Low-latency networking', 'Scalable storage', 'AI cluster monitoring', 'Training and inference support'],
    comparison: {
      'Workload type': 'AI, analytics, and HPC',
      'Hardware control': 'Design dependent',
      'Expected density': 'Elevated to high',
      Scalability: 'Cluster and facility dependent',
      'Operational responsibility': 'Defined during design',
      Connectivity: 'High-speed fabric and private links',
      'Typical adoption path': 'Readiness assessment → phased design',
    },
  },
]

type Workload = {
  name: string
  considerations: string[]
  compute: string
  storage: string
  network: string
  cooling: string
  security: string
  models: string
  questions: string[]
}

export const workloads: Workload[] = [
  {
    name: 'Enterprise applications',
    considerations: ['Business criticality', 'Availability objectives', 'Integration dependencies'],
    compute: 'CPU and memory aligned with application tiers',
    storage: 'Transactional performance, resilience, and backup',
    network: 'Segmentation, private access, and internet dependencies',
    cooling: 'Conventional density; validate selected hardware',
    security: 'Privileged access, data classification, and audit needs',
    models: 'Dedicated infrastructure or managed colocation',
    questions: ['Which applications are most critical?', 'What are the recovery objectives?'],
  },
  {
    name: 'SaaS platforms',
    considerations: ['Tenant growth', 'Release patterns', 'Regional user demand'],
    compute: 'Elastic application and service tiers',
    storage: 'Tenant data growth and backup patterns',
    network: 'Internet capacity, private services, and latency',
    cooling: 'Based on platform density',
    security: 'Tenant isolation and administrative controls',
    models: 'Dedicated, private, or hybrid patterns',
    questions: ['How does demand vary?', 'Which platform functions require isolation?'],
  },
  {
    name: 'Data and analytics',
    considerations: ['Dataset growth', 'Query concurrency', 'Pipeline schedules'],
    compute: 'Balanced CPU, memory, and possible acceleration',
    storage: 'Capacity plus throughput for active datasets',
    network: 'Data-ingress and east-west movement',
    cooling: 'Validate for compute concentration',
    security: 'Data lineage, handling, and role-based access',
    models: 'Dedicated or AI-ready patterns',
    questions: ['Where does source data reside?', 'Which jobs are time-sensitive?'],
  },
  {
    name: 'AI inference',
    considerations: ['Latency and throughput requirements', 'Model size', 'Request patterns', 'Data locality'],
    compute: 'CPU, GPU, or accelerator based on model and demand',
    storage: 'Model artifacts, cache, and request data',
    network: 'Ingress latency, throughput, and scaling pattern',
    cooling: 'Hardware density and utilization dependent',
    security: 'Model access, prompt data, and monitoring',
    models: 'Dedicated or AI-ready patterns after discovery',
    questions: ['Is acceleration needed?', 'What availability and monitoring are expected?'],
  },
  {
    name: 'Model customization',
    considerations: ['Base model', 'Dataset quality', 'Experiment cadence'],
    compute: 'Accelerator need depends on method and model size',
    storage: 'Training data, artifacts, and version history',
    network: 'Data movement and distributed job traffic',
    cooling: 'Validate power and thermal profile',
    security: 'Training-data controls and model governance',
    models: 'AI-ready pattern or external capacity integration',
    questions: ['Which customization method is planned?', 'How sensitive is the dataset?'],
  },
  {
    name: 'AI model training',
    considerations: ['Dataset size', 'GPU cluster design', 'Job duration', 'Checkpointing and recovery'],
    compute: 'Multi-accelerator cluster design may be required',
    storage: 'High-throughput datasets and checkpoint storage',
    network: 'Data-fabric performance and cluster communication',
    cooling: 'Power density and cooling strategy require engineering',
    security: 'Dataset, model, and administrative boundaries',
    models: 'AI-ready infrastructure subject to capacity validation',
    questions: ['What is the storage throughput target?', 'How will failed jobs recover?'],
  },
  {
    name: 'High-performance computing',
    considerations: ['Job shape', 'Scheduler needs', 'Parallel efficiency'],
    compute: 'CPU, memory, and accelerator mix by workload',
    storage: 'Scratch, shared, and archive tiers',
    network: 'Low-latency cluster fabric may be needed',
    cooling: 'Engineering review for sustained density',
    security: 'Project isolation and controlled data movement',
    models: 'Dedicated cluster or AI-ready pattern',
    questions: ['What limits current jobs?', 'How bursty is the queue?'],
  },
  {
    name: 'Backup and recovery workloads',
    considerations: ['Recovery objectives', 'Retention', 'Data-change rate'],
    compute: 'Moderate processing with recovery surge planning',
    storage: 'Capacity, immutability options, and retention tiers',
    network: 'Backup windows and recovery transfer demand',
    cooling: 'Usually conventional; hardware dependent',
    security: 'Restricted access and recovery validation',
    models: 'Dedicated infrastructure or colocation',
    questions: ['Which systems are in scope?', 'How are recoveries tested?'],
  },
]

export const readiness = [
  ['Workload definition', 'Which AI tasks create value?', 'Unclear use cases and demand', 'Define inference, customization, training, or HPC profiles', 'Facilitate workload discovery'],
  ['Data location and movement', 'Where is governed data held?', 'Transfer windows and residency', 'Map source, pipeline, and retention needs', 'Develop data-movement patterns'],
  ['Compute and accelerator demand', 'Which models and runtimes are expected?', 'Accelerator scarcity or mismatch', 'Profile CPU, GPU, memory, and utilization', 'Evaluate deployment scenarios'],
  ['Power availability', 'What density range is anticipated?', 'Facility and rack limits', 'Model staged power demand', 'Coordinate facility validation'],
  ['Cooling design', 'What thermal profile will hardware create?', 'Heat rejection at sustained load', 'Assess air and liquid-cooling readiness', 'Support engineering requirements'],
  ['Network and data fabric', 'How much east-west traffic is expected?', 'Latency and oversubscription', 'Map cluster and external connectivity', 'Develop fabric requirements'],
  ['Storage throughput', 'How quickly must data reach compute?', 'I/O bottlenecks and growth', 'Separate active, checkpoint, and archive needs', 'Evaluate storage tiers'],
  ['Security and governance', 'Who can access data and models?', 'Unclear ownership and controls', 'Define boundaries, logging, and approvals', 'Align controls to risk requirements'],
  ['Platform operations', 'Who runs schedulers and runtimes?', 'Skills and tooling gaps', 'Define monitoring, changes, and incidents', 'Shape the operating model'],
  ['Capacity expansion', 'What triggers the next deployment phase?', 'Long lead items and uncertain demand', 'Set forecasts and decision checkpoints', 'Maintain a phased capacity plan'],
]

export const architecture: [string, string[], string][] = [
  ['Workload', ['Enterprise applications', 'SaaS services', 'Analytics', 'AI inference', 'AI training', 'HPC'], 'Defines service behavior, criticality, and demand patterns.'],
  ['Compute', ['CPU compute', 'GPU nodes', 'AI accelerators', 'Virtualized workloads', 'Container platforms'], 'Maps software requirements to processing, memory, and orchestration.'],
  ['Data', ['High-performance storage', 'Object storage', 'Backup', 'Data pipelines', 'Model artifacts'], 'Moves and protects application data, datasets, and models.'],
  ['Network', ['Carrier connectivity', 'Internet connectivity', 'Private links', 'High-speed data fabric', 'Segmentation'], 'Connects users, services, compute nodes, and external data sources.'],
  ['Facility', ['Power', 'Backup power', 'Rack capacity', 'Air cooling', 'Liquid-cooling readiness', 'Environmental monitoring', 'Physical security'], 'Provides the physical conditions and capacity that the selected design requires.'],
  ['Operations', ['Monitoring', 'Capacity management', 'Incident management', 'Change management', 'Access governance', 'Reporting'], 'Turns infrastructure signals into controlled operational decisions.'],
]

export const journey: [string, string[], string][] = [
  ['Discover', ['Workload inventory', 'Business criticality', 'Performance needs', 'Security requirements', 'Current infrastructure', 'Growth expectations', 'AI demand'], 'Agree which workloads and outcomes enter assessment.'],
  ['Assess', ['Deployment-model evaluation', 'Capacity analysis', 'Connectivity review', 'Power and cooling considerations', 'Operating-responsibility model', 'Risk review'], 'Identify constraints, assumptions, and viable models.'],
  ['Design', ['Target architecture', 'Facility requirements', 'Migration waves', 'Security controls', 'Monitoring model', 'Recovery approach', 'Acceptance criteria'], 'Document the configuration and decisions to validate.'],
  ['Deploy', ['Environment preparation', 'Connectivity', 'Hardware installation', 'Configuration', 'Migration', 'Testing', 'Operational transition'], 'Validate readiness and move workloads through agreed waves.'],
  ['Operate and evolve', ['Monitoring', 'Incident support', 'Capacity reviews', 'Platform maintenance', 'Reporting', 'Workload optimization', 'AI-ready expansion'], 'Use operational evidence to guide maintenance and expansion.'],
]

export const controls: [string, string[]][] = [
  ['Physical security', ['Controlled facility access', 'Visitor management', 'Equipment-area restrictions', 'Monitoring', 'Access records']],
  ['Infrastructure security', ['Network segmentation', 'Administrative access controls', 'Secure configuration', 'Patch coordination', 'Vulnerability management']],
  ['Data protection', ['Encryption options', 'Backup', 'Retention', 'Recovery planning', 'Data-handling controls']],
  ['Operational governance', ['Change management', 'Incident procedures', 'Escalation', 'Capacity management', 'Maintenance planning', 'Service reporting']],
  ['Monitoring', ['Infrastructure health', 'Environmental conditions', 'Connectivity', 'Capacity thresholds', 'Operational alerts']],
]

export const responsibilities = [
  ['Hardware ownership', 'Customer / provider', 'Customer', '—', 'Equipment'],
  ['Facility operations', 'Coordination', 'Consulted', 'Facility', '—'],
  ['Network connectivity', 'Coordination', 'Requirements', 'Facility', 'Carrier'],
  ['Operating systems', 'By service', 'Shared / customer', '—', '—'],
  ['Virtualization', 'By service', 'Shared / customer', '—', 'Equipment'],
  ['Container platform', 'Optional support', 'Customer / MTX', '—', '—'],
  ['Monitoring', 'Infrastructure view', 'Application view', 'Facility signals', 'Network signals'],
  ['Physical access', 'Coordination', 'Authorized access', 'Facility', '—'],
  ['Security operations', 'Defined controls', 'Customer governance', 'Physical controls', 'Network controls'],
  ['Application operations', 'Optional support', 'Customer', '—', '—'],
  ['Backup', 'By service', 'Policy and scope', '—', 'Equipment'],
  ['Capacity planning', 'Model and review', 'Demand forecast', 'Facility inputs', 'Circuit inputs'],
]

export const measures = {
  Reliability: ['Availability', 'Incident frequency', 'Incident duration', 'Recovery performance', 'Maintenance events'],
  Capacity: ['Compute utilization', 'Storage utilization', 'Rack availability', 'Power-capacity headroom', 'Cooling-capacity headroom', 'Capacity forecast'],
  Performance: ['Application latency', 'Network throughput', 'Storage performance', 'AI job completion time', 'Inference throughput'],
  Operations: ['Alert volume', 'Response time', 'Change success', 'Maintenance completion', 'Capacity-review frequency'],
  'AI infrastructure': ['Accelerator utilization', 'Queue time', 'Training-job duration', 'Inference demand', 'Data throughput', 'Energy consumption by workload'],
}

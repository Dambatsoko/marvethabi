export interface ServiceSummary {
  ref: string;
  icon: 'gear' | 'network' | 'bolt' | 'terrain';
  title: string;
  items: string[];
}

export interface Client {
  name: string;
  logo: string;
}

export interface Industry {
  name: string;
  path: string;
}

export interface WhyCard {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
  image: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  qualifications: string[];
}

export interface ServiceDetail {
  ref: string;
  icon: string;
  img: string;
  title: string;
  desc: string;
  items: string[];
}

export interface ServiceGroup {
  no: string;
  id: string;
  title: string;
  intro: string;
  services: ServiceDetail[];
}

export interface Affiliation {
  logo: string;
  name: string;
}

export const servicesData: ServiceSummary[] = [
  {
    ref: 'RE-01',
    icon: 'gear',
    title: 'Reliability Engineering',
    items: ['Asset Criticality', 'Root Cause Analysis', 'Condition Monitoring', 'Asset Strategies', 'ISO55000'],
  },
  {
    ref: 'AM-02',
    icon: 'network',
    title: 'Asset Management',
    items: ['Lifecycle Management', 'Asset Registers', 'Digital Twins', 'Master Data', 'Performance Management'],
  },
  {
    ref: 'EE-03',
    icon: 'bolt',
    title: 'Electrical Engineering',
    items: ['Transmission', 'Reticulation', 'Substations', 'Street Lighting', 'Generators', 'Solar'],
  },
  {
    ref: 'GE-04',
    icon: 'terrain',
    title: 'Geo-Environmental',
    items: ['Environmental Studies', 'Hydrogeology', 'Water Licensing', 'Environmental Audits', 'Waste Management', 'Compliance'],
  },
];

export const clientsData: Client[] = [
  { name: 'Anglo American', logo: 'client-anglo.png' },
  { name: 'Glencore', logo: 'client-glencore.png' },
  { name: 'Harmony Gold', logo: 'client-harmony.png' },
  { name: 'Thungela', logo: 'client-thungela.png' },
  { name: 'Valterra Platinum', logo: 'client-valterra.png' },
  { name: 'Umgeni Water', logo: 'client-umgeni.png' },
  { name: 'City of Ekurhuleni', logo: 'client-ekurhuleni.png' },
];

export const industriesData: Industry[] = [
  { name: 'Government', path: 'M8 40V20l16-12 16 12v20H28v-12h-8v12H8z' },
  { name: 'Mining', path: 'M10 38l10-18 6 8 6-12 6 22H10z M34 10l6 6' },
  { name: 'Energy', path: 'M26 6L14 26h9l-3 16 14-22h-9l1-14z' },
  { name: 'Municipalities', path: 'M8 40h32M12 40V22h6v18M22 40V14h6v26M32 40V26h6v14' },
  { name: 'Industrial', path: 'M6 40V24l10 6V24l10 6V16h10l4 24H6z' },
  { name: 'Commercial', path: 'M12 40V10h24v30M18 16h4M26 16h4M18 24h4M26 24h4M18 32h4M26 32h4' },
  { name: 'Infrastructure Development', path: 'M4 34h40M10 34V22M22 34V16M34 34V22M10 22l12-6 12 6' },
];

export const whyData: WhyCard[] = [
  {
    title: 'Engineering Excellence',
    description: 'Highly qualified specialists delivering technically sound, standards-driven solutions.',
  },
  {
    title: 'Government Ready',
    description: 'Experience supporting public-sector and municipal infrastructure requirements.',
  },
  {
    title: 'Transformation',
    description: '100% Black Owned. Level 1 B-BBEE Contributor.',
  },
  {
    title: 'Integrated Expertise',
    description: 'Engineering, environmental and asset management solutions under one roof.',
  },
];

export const processData: ProcessStep[] = [
  { number: '01', title: 'Consultation', description: 'Scoping the engineering requirement with the client and stakeholders.' },
  { number: '02', title: 'Investigation', description: 'Site assessments, data gathering, surveys and condition studies.' },
  { number: '03', title: 'Engineering Design', description: 'Standards-driven design, specifications and technical documentation.' },
  { number: '04', title: 'Implementation', description: 'Construction monitoring, commissioning and project management.' },
  { number: '05', title: 'Quality Assurance', description: 'Testing, compliance verification and as-built documentation.' },
  { number: '06', title: 'Long-Term Support', description: 'Asset strategies, monitoring and maintenance planning.' },
];

export const capabilitiesData: Capability[] = [
  {
    title: 'Electrical Infrastructure',
    description:
      'Transmission, reticulation and substation engineering for utilities, municipalities and industry. From 11kV distribution networks to bulk supply upgrades, designs are delivered to SANS and utility standards with full compliance documentation.',
    image: 'cap-electrical.jpg',
  },
  {
    title: 'Asset Management',
    description:
      'ISO55000-aligned asset management frameworks covering asset registers, master data, lifecycle costing and digital twins. Built for public entities that must account for every asset on their books.',
    image: 'cap-asset.jpg',
  },
  {
    title: 'Environmental Monitoring',
    description:
      'Groundwater monitoring networks, environmental audits and compliance reporting that keep operations within licence conditions and ahead of regulatory review.',
    image: 'cap-environmental.jpg',
  },
  {
    title: 'Reliability Engineering',
    description:
      'Criticality analysis, root cause analysis and condition monitoring programmes that reduce unplanned downtime across plant and network assets.',
    image: 'cap-reliability.jpg',
  },
  {
    title: 'Hydrogeology',
    description:
      'Aquifer characterisation, borehole siting, water use licensing and geohydrological reporting for mines, municipalities and developers.',
    image: 'cap-hydro.jpg',
  },
  {
    title: 'Power Systems',
    description:
      'Load studies, protection coordination, generator and solar integration, and network master planning for growing demand.',
    image: 'cap-power.jpg',
  },
];

export const leadersData: Leader[] = [
  {
    name: 'Marvelous Ngoatle',
    role: 'Principal Reliability Engineer',
    image: 'marvelous.jpg',
    qualifications: ['Electrical Engineer', 'ECSA Registered', 'ISO55000 Specialist', '13+ Years Experience'],
  },
  {
    name: 'Thabang Ngoatle',
    role: 'Environmental Specialist',
    image: 'thabang.jpg',
    qualifications: ['Professional Scientist', 'SACNASP Registered', 'Environmental Compliance Expert', '10+ Years Experience'],
  },
];

export const serviceGroupsData: ServiceGroup[] = [
  {
    no: '01',
    id: 'engineering-services',
    title: 'Engineering Services',
    intro: 'Reliability, asset management and electrical engineering delivered to ISO55000, SANS and utility standards, from plant floor to municipal network.',
    services: [
      {
        ref: 'RE-01',
        icon: 'wave',
        img: 'about.jpg',
        title: 'Reliability Engineering Services',
        desc: 'Condition-based programmes that find failure before failure finds the plant.',
        items: [
          'Asset Criticality Development',
          'Asset Hierarchy Development',
          'Spare Criticality Analysis',
          'Asset Strategies & Tactics Plan Development',
          'Criticality Spares Analysis Development',
          'Total Fluids Management',
          'Defect Elimination and Root Cause Analysis',
          'Condition Monitoring Systems (Vibration, Oil, Motor Circuit, Conveyor Health)',
        ],
      },
      {
        ref: 'AM-02',
        icon: 'register',
        img: 'hero.jpg',
        title: 'Asset Management Services',
        desc: 'ISO55000 frameworks that account for every asset, from register to digital twin.',
        items: [
          'Physical Asset Management ISO55000 (Implementation)',
          'Asset Management Policy, Philosophy and Strategy Development',
          'Asset Life Cycle Management',
          'Asset Performance Management',
          'Asset Master Data',
          'Asset Identification, Verification & Validation',
          'Asset Register',
          'Work Management',
          'Asset Digital Twin',
        ],
      },
      {
        ref: 'EC-03',
        icon: 'plug',
        img: 'cap-asset.jpg',
        title: 'Electrical Construction',
        desc: 'Installation, commissioning and certification for residential, commercial and industrial sites.',
        items: [
          'Generator Installation, Commissioning, Maintenance and Repair',
          'Solar Power Installation, Commissioning, Maintenance and Repair',
          'Electrical Wiring Services for Residential and Commercial',
          'Electrical Fault Finding and Testing Services',
          'Electrical Compliance Certificate (COC)',
          'Geyser, Stove Electrical Repairs and Installations',
          'Cable Fault Detecting & Thump Testing',
        ],
      },
      {
        ref: 'EE-04',
        icon: 'pylon',
        img: 'cap-electrical.jpg',
        title: 'Electrical and Electronic Engineering',
        desc: 'Infrastructure engineering from transmission line to township reticulation.',
        items: [
          'Electrical Infrastructure Development',
          'Electrical Reticulation & Distribution',
          'Electrical Transmission & Distribution',
          'Networks Municipal & Township Reticulation',
          'Street Lighting and Area Lighting',
          'Standby Generators & UPS',
          'Lightning Protection',
          'Voice & Data Infrastructure',
          'Access Control, Security & CCTV Systems',
          'Fire Detection & Alarm Systems',
          'Supply and Delivery of Mining Spares and Equipment',
        ],
      },
    ],
  },
  {
    no: '02',
    id: 'environmental-management',
    title: 'Environmental Resource Management',
    intro: 'Licensing, monitoring and management plans that keep water, waste, air and carbon within regulation.',
    services: [
      {
        ref: 'WM-05',
        icon: 'drop',
        img: 'cap-environmental.jpg',
        title: 'Water Management',
        desc: 'From licence application to long-term monitoring of ground and surface water.',
        items: [
          'Water Use Licencing',
          'Water Conservation and Water Demand Management Plans',
          'Integrated Water and Waste Management Plans (IWWMP)',
          'Ground and Surface Water Monitoring',
          'Specialist Water Studies for EIAs',
        ],
      },
      {
        ref: 'WS-06',
        icon: 'waste',
        img: 'industries.jpg',
        title: 'Waste Management',
        desc: 'Classification, licensing and plans that turn waste liabilities into managed streams.',
        items: [
          'Sewage Plant Performance Audit',
          'Waste Licencing',
          'Integrated Waste Management Plan',
          'Waste Classification',
          'Waste Awareness and Training',
        ],
      },
      {
        ref: 'AQ-07',
        icon: 'air',
        img: 'cap-reliability.jpg',
        title: 'Air Quality Management',
        desc: 'Dust, emissions and noise kept measurable, reportable and compliant.',
        items: [
          'Dust Fallout Monitoring',
          'Atmospheric Emission Licencing',
          'Air Quality Management Plan',
          'Noise Monitoring',
        ],
      },
      {
        ref: 'GG-08',
        icon: 'leaf',
        img: 'cap-power.jpg',
        title: 'Greenhouse Gas Management',
        desc: 'Carbon accounting and national reporting done to the decimal.',
        items: ['NAEIS Reporting', 'Carbon Footprint Calculations'],
      },
    ],
  },
  {
    no: '03',
    id: 'specialist-studies',
    title: 'Specialist Studies',
    intro: 'Hydrogeology, authorisations, audits and rehabilitation, the specialist work that unlocks and closes projects.',
    services: [
      {
        ref: 'HS-09',
        icon: 'borehole',
        img: 'cap-hydro.jpg',
        title: 'Hydrogeological Studies',
        desc: 'Reading the ground: geophysics, boreholes and aquifers characterised with precision.',
        items: [
          'Geophysical Survey Resistivity',
          'Environmental Hydrogeology',
          'Borehole Development and Aquifer Test',
          'Ground Water Monitoring',
          'Geological Services (Exploration, Resource Estimation)',
          'Geotechnical Services (Soil, Rock)',
          'Geophysical (GPR, Gravity, Resistivity)',
        ],
      },
      {
        ref: 'AP-10',
        icon: 'permit',
        img: 'hero.jpg',
        title: 'Authorisation, Permits and Licences',
        desc: 'The full authorisation pathway, from EIA to mining right, managed end to end.',
        items: [
          'Water Use Licence Application',
          'Environmental Management Programmes (EMPr)',
          'Waste Permits',
          'Mining Right, Licence and Permits',
          'Environmental Impact Assessment (EIA)',
          'Mining Closure Assessment',
          'EMPr Performance Assessment',
          'Public Participation',
        ],
      },
      {
        ref: 'CA-11',
        icon: 'audit',
        img: 'cap-environmental.jpg',
        title: 'Environmental Compliance Audits and Monitoring',
        desc: 'Independent audits that find the gap before the regulator does.',
        items: [
          'Water Use Licence Audit',
          'Waste Audits',
          'Sewage Plant Performance Audit',
          'Environmental Control Officer (ECO)',
          'Biomonitoring',
        ],
      },
      {
        ref: 'ER-12',
        icon: 'rehab',
        img: 'industries.jpg',
        title: 'Environmental Rehabilitation',
        desc: 'Returning disturbed land to stable, compliant, productive condition.',
        items: [
          'Rehabilitation and Remedial Plan',
          'Rehabilitation of Contaminated Sites',
          'Rehabilitation Strategy Implementation Plan (RSIP)',
        ],
      },
    ],
  },
];

export const affiliationsData: Affiliation[] = [
  { logo: 'aff-ecsa.png', name: 'ECSA, Engineering Council of South Africa' },
  { logo: 'aff-saiee.png', name: 'SAIEE, South African Institute of Electrical Engineers' },
  { logo: 'aff-sacnasp.png', name: 'SACNASP, South African Council for Natural Scientific Professions' },
];

export function sanitizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export interface DedicatedService {
  slug: string;
  ref: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  docNo: string;
  objective: string;
  capabilities: { group: string; items: string[] }[];
  approach: string;
  intendedOutcomes?: string[];
  standards: string[];
  sectors: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  intro: string;
  qualifications: string[];
  expertise: string[];
  experienceSummary: string;
  professionalFocus: string;
}

export const dedicatedServicesData: DedicatedService[] = [
  {
    slug: 'reliability-engineering',
    ref: 'RE-01',
    title: 'Reliability Engineering',
    category: 'Asset Reliability & Maintainability',
    tagline: 'Asset Reliability, Availability and Maintainability Methodologies',
    summary:
      'MarveThabi helps organisations improve asset reliability, availability and maintainability through structured, data-driven reliability engineering methodologies. The objective is to reduce unplanned downtime, improve maintenance effectiveness, manage operational risk and extend asset life across the asset lifecycle.',
    docNo: 'MT-ENG-RE-01',
    objective:
      'The objective is to reduce unplanned downtime, improve maintenance effectiveness, manage operational risk and extend asset life across the asset lifecycle.',
    capabilities: [
      {
        group: 'Core Reliability Capabilities',
        items: [
          'Reliability-Centred Maintenance (RCM) facilitation and implementation',
          'Asset Criticality Analysis based on risk, safety, cost and production impact',
          'Failure Modes and Effects Analysis (FMEA)',
          'Maintenance Strategy and Asset Tactics Development',
          'Root Cause Failure Analysis (RCFA)',
        ],
      },
    ],
    approach:
      'The approach is technically sound, risk-based and aligned with operational and business performance objectives. We work closely with plant engineering, maintenance teams, and operations to embed sustainable reliability practices that eliminate chronic failure modes.',
    standards: ['ISO 55000 / 55001', 'ISO 14224 (Taxonomy & Reliability Data)', 'SANS Standards', 'ECSA Code of Practice'],
    sectors: ['Mining & Mineral Processing', 'Petrochemical & Refining', 'Heavy Manufacturing', 'Power Generation & Utilities', 'Water Infrastructure'],
  },
  {
    slug: 'asset-management',
    ref: 'AM-02',
    title: 'Asset Management',
    category: 'Physical Asset Stewardship & ISO 55000',
    tagline: 'ISO 55000 Principles, Asset Performance & Lifecycle Cost',
    summary:
      'MarveThabi\'s Asset Management services are aligned with ISO 55000 principles and focus on asset performance, risk and lifecycle cost. The approach integrates technical, financial and risk considerations to support better decision-making, governance and long-term asset value.',
    docNo: 'MT-ENG-AM-02',
    objective:
      'To integrate technical, financial and risk considerations across physical asset portfolios to support better decision-making, governance and long-term asset value.',
    capabilities: [
      {
        group: 'Core Asset Management Capabilities',
        items: [
          'Asset Management Framework Development aligned with ISO 55000',
          'Maintenance Planning and Scheduling',
          'Asset Registers and Asset Hierarchies',
          'Lifecycle Costing and Risk Analysis',
          'Asset Performance Measurement and Benchmarking',
        ],
      },
    ],
    approach:
      'Our approach connects physical asset condition with statutory accounting and strategic governance. We assist organizations to establish robust hierarchies, accurate asset registers, and structured maintenance schedules that protect capital investments.',
    intendedOutcomes: [
      'Stronger asset performance across operational portfolios',
      'Better capital and maintenance investment decisions',
      'Improved asset availability and reduced downtime',
      'Sustainable lifecycle value and audit compliance',
    ],
    standards: ['ISO 55000 / 55001', 'GRAP 17 Asset Accounting', 'National Treasury Asset Framework', 'SANS 55000'],
    sectors: ['Government Departments & Public Entities', 'Municipalities & Metros', 'Water Boards & Utilities', 'Mining & Resources', 'Commercial Portfolios'],
  },
  {
    slug: 'electrical-engineering',
    ref: 'EE-03',
    title: 'Electrical Engineering',
    category: 'Industrial, Commercial & Municipal Infrastructure',
    tagline: 'Power Infrastructure Design, Reticulation & Technical Compliance',
    summary:
      'MarveThabi provides professional electrical engineering services for industrial and commercial facilities. We deliver robust power distribution designs, municipal reticulation schemes, backup power systems, and technical compliance audits.',
    docNo: 'MT-ENG-EE-03',
    objective:
      'To provide dependable, standards-compliant electrical infrastructure engineering that guarantees operational continuity, personnel safety, and regulatory compliance.',
    capabilities: [
      {
        group: 'Infrastructure & Reticulation Design',
        items: [
          'Electrical Infrastructure Design and Development',
          'Electrical Reticulation and Power Distribution Design',
          'Electrical Transmission and Distribution Design Support',
          'Municipal and Township Electrical Reticulation Design',
          'Street and Area Lighting Design',
        ],
      },
      {
        group: 'Power Security & Building Systems',
        items: [
          'Standby Power Systems including generators and UPS',
          'Lightning Protection and Earthing Design',
          'Voice and Data Infrastructure Design',
          'Access Control, Security and CCTV Systems Design',
          'Fire Detection and Alarm Systems Design',
        ],
      },
      {
        group: 'Compliance & Technical Assurance',
        items: [
          'Electrical Compliance and Technical Audits',
          'Project Engineering Support and Monitoring',
        ],
      },
    ],
    approach:
      'Every project is directed by registered engineering technologists to ensure compliance with SANS 10142, utility grid connection codes, and statutory safety mandates. Designs are developed with full AutoCAD/CAD single-line diagrams, protection settings, and bill of quantities.',
    standards: ['SANS 10142-1 & 2', 'NRS 048 Power Quality', 'SANS 10313 Lightning Protection', 'ECSA Standards'],
    sectors: ['Mining & Minerals', 'Industrial & Manufacturing', 'Municipalities & Metros', 'Commercial Facilities', 'Public Infrastructure'],
  },
  {
    slug: 'condition-monitoring',
    ref: 'CM-01',
    title: 'Condition Monitoring',
    category: 'Predictive & Proactive Maintenance',
    tagline: 'Early Fault Detection, Non-Destructive Testing & Asset Diagnostics',
    summary:
      'MarveThabi provides advanced condition monitoring services supporting predictive and proactive maintenance. The purpose is early fault detection, reduced unplanned downtime and improved asset reliability.',
    docNo: 'MT-ENG-CM-01',
    objective:
      'The purpose is early fault detection, reduced unplanned downtime and improved asset reliability through precision testing and diagnostic analytics.',
    capabilities: [
      {
        group: 'Diagnostic & Predictive Technologies',
        items: [
          'Vibration Analysis',
          'Oil Sampling and Oil Condition Analysis',
          'Infrared Thermography',
          'Motor Circuit Analysis (MCA)',
          'Transformer Condition Assessments',
        ],
      },
      {
        group: 'Non-Destructive Testing (NDT) & Inspection',
        items: [
          'Ultrasonic Testing (UT)',
          'Visual Testing (VT)',
          'Liquid Penetrant Testing (PT)',
          'Radiographic Testing (RT)',
          'Eddy Current Testing (ECT)',
          'Thickness Measurement',
          'Weld Inspection and Evaluation',
        ],
      },
      {
        group: 'Asset Integrity & Reporting',
        items: [
          'Corrosion Monitoring',
          'Equipment Condition Assessments',
          'Diagnostic Reporting and Maintenance Recommendations',
          'Integrity and Reliability Assessments',
        ],
      },
    ],
    approach:
      'Our certified analysts evaluate mechanical trains, high-voltage switchgear, and structural components under actual operating conditions. Findings are synthesized into concise diagnostic reports with prioritized maintenance recommendations.',
    standards: ['ISO 18436 (Condition Monitoring & Diagnostics)', 'ISO 10816 (Mechanical Vibration)', 'ASNT / PCN Standards', 'SANS Standards'],
    sectors: ['Mining & Beneficiation Plants', 'Petrochemical & Gas', 'Power Utilities & Substations', 'Water Pumping Stations', 'Processing Plants'],
  },
  {
    slug: 'geo-environmental',
    ref: 'GE-04',
    title: 'Environmental / Geo-Environmental Services',
    category: 'Environmental Management & Specialist Advisory',
    tagline: 'Regulatory Compliance, Sustainable Resource Use & Responsible Project Development',
    summary:
      'MarveThabi provides integrated environmental management and specialist advisory services supporting regulatory compliance, sustainable resource use and responsible project development across mining, industrial, utilities and infrastructure.',
    docNo: 'MT-ENG-GE-04',
    objective:
      'To deliver credible scientific and regulatory support that secures statutory environmental authorisations, protects natural resources, and manages long-term environmental liability.',
    capabilities: [
      {
        group: 'Environmental Resource Management',
        items: [
          'Water Use Licensing',
          'Water Conservation and Demand Management Planning',
          'Integrated Water and Waste Management Planning',
          'Groundwater and Surface Water Monitoring',
          'Environmental input into Environmental Impact Assessments',
        ],
      },
      {
        group: 'Waste & Emissions Management',
        items: [
          'Waste Licensing and Classification',
          'Integrated Waste Management Plans',
          'Sewage Plant Performance Audits',
          'Greenhouse Gas Management and Carbon Footprint Calculations & Reporting',
          'Air Quality Management, Dust Fallout Monitoring and Atmospheric Emission Licensing',
          'Noise Monitoring',
        ],
      },
      {
        group: 'Environmental & Hydrogeological Studies',
        items: [
          'Hydrogeological and Environmental Studies',
          'Borehole Development and Aquifer Testing',
          'Groundwater Monitoring',
          'Geophysical Surveys including resistivity, gravity and GPR',
          'Geological and Geotechnical Services',
          'Environmental Impact Assessments',
          'Mining Closure and Rehabilitation Assessments',
        ],
      },
      {
        group: 'Authorisations, Permits & Licensing',
        items: [
          'Water Use Licence Applications (WULA)',
          'Environmental Management Programmes (EMPr)',
          'Waste Permits and Mining Rights Support',
          'Environmental Impact Assessments and Public Participation',
        ],
      },
      {
        group: 'Compliance, Audits & Monitoring',
        items: [
          'Water Use Licence Audits and Waste Audits',
          'Sewage Plant Performance Audits',
          'Environmental Control Officer (ECO) Services',
          'Ongoing Environmental Compliance Monitoring',
        ],
      },
      {
        group: 'Environmental Rehabilitation & Risk Management',
        items: [
          'Rehabilitation and Remedial Action Plans',
          'Contaminated Land Rehabilitation',
          'Rehabilitation Strategy Implementation',
          'Rehabilitation Risk Analysis and Environmental Risk Assessment & Planning',
        ],
      },
    ],
    approach:
      'Led by registered professional natural scientists (SACNASP), our advisory combines empirical fieldwork—such as geophysical imaging and aquifer yield testing—with rigorous statutory filings across the National Water Act and NEMA frameworks.',
    standards: ['National Water Act (NWA 36/1998)', 'NEMA (Act 107/1998)', 'NEM:WA & NEM:AQA', 'SACNASP Code of Conduct'],
    sectors: ['Mining & Resource Extraction', 'Water Utilities & Municipalities', 'Heavy Manufacturing', 'Agriculture & Land Development', 'Linear Infrastructure'],
  },
];

export const teamData: TeamMember[] = [
  {
    id: 'marvelous-ngoatle',
    name: 'Marvelous Ngoatle',
    position: 'Director',
    image: 'marvelous.jpg',
    intro:
      'Founder and Director of MarveThabi Consulting Engineers with over 14 years of experience in Reliability Engineering, Asset Management, Condition Monitoring and Electrical Engineering. Experience includes mining, petrochemical, water treatment and industrial environments, with technical leadership in maintenance optimisation, reliability improvement and engineering solutions.',
    qualifications: [
      'B-Tech Degree in Electrical Engineering',
      'Professional Engineering Technologist — Engineering Council of South Africa (ECSA)',
      'Qualified Electrician',
      'Electrical Trade Test and Wireman\'s Licence',
      'Certified Thermographer',
      'Certified Motor Circuit Analyst',
    ],
    expertise: [
      'Reliability Engineering',
      'Asset Management',
      'Condition Monitoring',
      'Predictive Maintenance',
      'Maintenance Strategy Development',
      'Electrical Engineering & Assessments',
      'Backup Power Solutions',
      'Vibration Analysis',
      'Thermography Analysis',
      'Transformer Oil Sampling & Analysis',
    ],
    experienceSummary:
      'His project experience includes vibration analysis, thermography, transformer oil sampling and analysis, maintenance strategy development, asset management systems, electrical assessments, backup power solutions and condition monitoring programmes.',
    professionalFocus:
      'Improving equipment reliability, reducing downtime, optimising maintenance costs and improving operational performance.',
  },
  {
    id: 'thabang-ngoatle',
    name: 'Thabang Ngoatle',
    position: 'Director',
    image: 'thabang.jpg',
    intro:
      'Founder and Director with over 12 years of professional experience in Environmental Management, Occupational Health and Safety, and Environmental Compliance. Experience includes environmental consulting, project coordination, compliance monitoring and sustainable environmental management across various industries.',
    qualifications: [
      'Master of Science (MSc) in Environmental Management',
      'Professional Scientist — South African Council for Natural Scientific Professions (SACNASP)',
      'SAMTRAC qualification',
      'Currently pursuing a PhD in Geography through the University of South Africa',
    ],
    expertise: [
      'Environmental Management',
      'Environmental Compliance',
      'Environmental Impact Assessments',
      'Environmental Audits',
      'Biomonitoring Projects',
      'Health and Safety Management',
      'Sustainability Initiatives',
      'Risk Management Systems',
      'Environmental Reporting',
      'Project Coordination',
    ],
    experienceSummary:
      'Her experience includes environmental impact assessments, environmental compliance audits, biomonitoring projects, environmental reporting, health and safety management and sustainability initiatives.',
    professionalFocus:
      'Sustainable development, environmental stewardship and safe working environments.',
  },
  {
    id: 'jonas-lufuluabo',
    name: 'Jonas Lufuluabo',
    position: 'Business Development Manager (DRC) & Director',
    image: 'jonas.jpg',
    intro:
      'Leads business growth strategy and market expansion across the Democratic Republic of Congo. Holds a Bachelor\'s Degree in Computer Science and is Cisco Certified. His role includes business development, client relationship management, strategic partnerships, market expansion, stakeholder engagement, business agreements and commercial management.',
    qualifications: [
      'Bachelor\'s Degree in Computer Science',
      'Cisco Certified',
    ],
    expertise: [
      'Business Development & Growth Strategy',
      'Client Relationship Management',
      'Strategic Partnerships & Alliances',
      'Market Expansion & Opportunity Identification',
      'Stakeholder Engagement',
      'Contract Negotiation & Business Agreements',
      'Commercial Management',
      'Project Support from Opportunity to Contract Award',
      'Market Intelligence & Analysis',
      'Team Leadership & Coordination',
    ],
    experienceSummary:
      'He works on developing relationships and opportunities with mining companies, government institutions and industrial clients in the DRC, supporting the company\'s regional expansion.',
    professionalFocus:
      'Business development, strategic partnerships, and market expansion across the Democratic Republic of Congo.',
  },
];

export function getDedicatedService(slug: string): DedicatedService | undefined {
  const normalized = slug.toLowerCase().trim().replace(/^\/services\//, '').replace(/\/$/, '');

  // Direct match
  const direct = dedicatedServicesData.find((s) => s.slug === normalized);
  if (direct) return direct;

  // Keyword / Ref matching
  if (normalized.includes('condition') || normalized === 'cm-01') {
    return dedicatedServicesData.find((s) => s.slug === 'condition-monitoring');
  }
  if (normalized.includes('reliab') || normalized === 're-01') {
    return dedicatedServicesData.find((s) => s.slug === 'reliability-engineering');
  }
  if (normalized.includes('asset') || normalized === 'am-02') {
    return dedicatedServicesData.find((s) => s.slug === 'asset-management');
  }
  if (
    normalized.includes('elect') ||
    normalized.includes('power') ||
    normalized.includes('reticulat') ||
    normalized === 'ee-03' ||
    normalized === 'ee-04' ||
    normalized === 'ec-03'
  ) {
    return dedicatedServicesData.find((s) => s.slug === 'electrical-engineering');
  }
  if (
    normalized.includes('geo') ||
    normalized.includes('environ') ||
    normalized.includes('water') ||
    normalized.includes('waste') ||
    normalized.includes('air') ||
    normalized.includes('hydro') ||
    normalized.includes('rehab') ||
    normalized.includes('audit') ||
    normalized === 'ge-04' ||
    normalized === 'wm-05' ||
    normalized === 'ws-06' ||
    normalized === 'aq-07' ||
    normalized === 'gg-08' ||
    normalized === 'hs-09' ||
    normalized === 'ap-10' ||
    normalized === 'ca-11' ||
    normalized === 'er-12'
  ) {
    return dedicatedServicesData.find((s) => s.slug === 'geo-environmental');
  }

  return undefined;
}

export function getServiceSlugForRef(ref: string): string {
  const upper = ref.toUpperCase().trim();
  if (upper.startsWith('RE')) return 'reliability-engineering';
  if (upper.startsWith('AM')) return 'asset-management';
  if (upper.startsWith('EE') || upper.startsWith('EC')) return 'electrical-engineering';
  if (upper.startsWith('CM')) return 'condition-monitoring';
  return 'geo-environmental';
}



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
  heroImage: string;
  docNo: string;
  standards: string[];
  disciplines: string[];
  keyStats: { label: string; value: string }[];
  deliverables: { category: string; items: string[] }[];
  methodology: { phase: string; title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  sectors: string[];
  relatedServices: { title: string; slug: string; ref: string }[];
}

export const dedicatedServicesData: DedicatedService[] = [
  {
    slug: 'reliability-engineering',
    ref: 'RE-01',
    title: 'Reliability Engineering',
    category: 'Asset Reliability & Condition Monitoring',
    tagline: 'Condition-Based Programmes, Defect Elimination & Criticality Systems',
    summary:
      'We engineer asset reliability programmes that detect failure modes before unplanned downtime strikes. From root cause analysis and multi-spectral condition monitoring to plant-wide criticality ranking, our ISO55000-aligned strategies protect capital-intensive operations across mining, power, and manufacturing.',
    heroImage: 'cap-reliability.jpg',
    docNo: 'MT-ENG-RE-01',
    standards: ['ISO 55000 / 55001', 'ISO 14224', 'ISO 10816 Vibration', 'SANS / ECSA', 'OHS Act Section 21'],
    disciplines: ['Mechanical Reliability', 'Electrical Diagnostics', 'Tribology', 'Vibration Analysis'],
    keyStats: [
      { label: 'Unplanned Downtime Reduction', value: 'Up to 42%' },
      { label: 'Condition Monitoring Accuracy', value: '99.4%' },
      { label: 'Critical Assets Audited', value: '25,000+' },
      { label: 'Statutory Standard', value: 'ISO 55000' },
    ],
    deliverables: [
      {
        category: 'Criticality & Hierarchy Analysis',
        items: [
          'Asset Criticality Development & Risk Matrix Scoring',
          'Asset Hierarchy Development aligned with ISO 14224 standard taxonomy',
          'Criticality Spares Analysis & Inventory Stocking Optimisation',
          'Failure Modes, Effects and Criticality Analysis (FMECA)',
        ],
      },
      {
        category: 'Strategy, Tactics & Defect Elimination',
        items: [
          'Asset Strategies & Tactics Plan Development across mechanical & electrical trains',
          'Systematic Defect Elimination & 5-Why / Apollo Root Cause Analysis (RCA)',
          'Total Fluids Management & Precision Lubrication Regimes',
          'Conveyor Health, Splice Integrity & Structural Stress Monitoring',
        ],
      },
      {
        category: 'Advanced Condition Monitoring',
        items: [
          'Tri-axial Baseline Vibration Analysis & Spectrum Diagnostics',
          'Oil Degradation, Particle Counting & Ferrography Testing',
          'Motor Circuit Evaluation & Dynamic Current Signature Analysis',
          'Calibrated Thermographic Inspection for High-Voltage Switchgear & Transformers',
        ],
      },
    ],
    methodology: [
      {
        phase: '01',
        title: 'Baseline Audit & Criticality Scoring',
        desc: 'We map every physical asset, establish functional hierarchies, and compute risk priority numbers based on safety, environmental, and financial impact.',
      },
      {
        phase: '02',
        title: 'FMECA & Failure Mode Modeling',
        desc: 'Engineering failure modes, identifying root causes, and assigning predictive maintenance tasks rather than arbitrary calendar-based overhauls.',
      },
      {
        phase: '03',
        title: 'Sensor Deployment & Baseline Fingerprinting',
        desc: 'Deploying calibrated vibration probes, thermal imaging, and oil sampling points to establish high-precision baseline operational signatures.',
      },
      {
        phase: '04',
        title: 'Predictive Tactics & Continuous Loop',
        desc: 'Integrating condition monitoring alerts directly into CMMS/ERP workflows to eliminate repeat defects and maximize mean time between failures (MTBF).',
      },
    ],
    specifications: [
      { label: 'Regulatory Alignment', value: 'ISO 55000, ISO 14224, SANS Standards' },
      { label: 'Engineering Lead', value: 'Principal Reliability Engineer (ECSA Registered)' },
      { label: 'Data Output', value: 'Real-time telemetry, CMMS maintenance task imports, PDF audit dossiers' },
      { label: 'Target Facilities', value: 'Mines, Beneficiation Plants, Water Treatment Works, Power Stations' },
    ],
    sectors: ['Mining & Minerals', 'Power Generation & Utilities', 'Heavy Manufacturing', 'Municipal Water Infrastructure'],
    relatedServices: [
      { title: 'Asset Management', slug: 'asset-management', ref: 'AM-02' },
      { title: 'Electrical Engineering', slug: 'electrical-engineering', ref: 'EE-03' },
      { title: 'Geo-Environmental', slug: 'geo-environmental', ref: 'GE-04' },
    ],
  },
  {
    slug: 'asset-management',
    ref: 'AM-02',
    title: 'Asset Management',
    category: 'Physical Asset Stewardship & ISO55000',
    tagline: 'ISO55000 Lifecycle Engineering, Digital Twins & Master Data',
    summary:
      'We deliver end-to-end physical asset management frameworks engineered for public entities, municipalities, and corporations that must account for, maintain, and optimize every asset on their books. Aligned with ISO55001, GRAP 17, and National Treasury guidelines.',
    heroImage: 'cap-asset.jpg',
    docNo: 'MT-ENG-AM-02',
    standards: ['ISO 55001', 'GRAP 17 Asset Accounting', 'National Treasury Framework', 'SANS 55000'],
    disciplines: ['Strategic Asset Management', 'Lifecycle Costing', 'Digital Twins', 'Master Data Governance'],
    keyStats: [
      { label: 'Public Sector Compliance', value: '100% Clean Audit' },
      { label: 'Municipal Asset Registers', value: 'GRAP 17 Ready' },
      { label: 'Lifecycle Value Gain', value: '28% OpEx Saved' },
      { label: 'Global Standard', value: 'ISO 55001' },
    ],
    deliverables: [
      {
        category: 'Policy, Strategy & Governance',
        items: [
          'Physical Asset Management ISO 55000 Implementation & Governance Roadmaps',
          'Asset Management Policy, Philosophy and Strategic Asset Management Plan (SAMP)',
          'Asset Lifecycle Cost Modeling (Capex vs. Opex optimization)',
          'Asset Performance Management & Service Delivery Level KPIs',
        ],
      },
      {
        category: 'Field Verification & Registers',
        items: [
          'Physical Asset Identification, Barcoding, QR & RFID Tagging in Field',
          'Asset Verification, Condition Grading & Useful Life Remaining Calculation',
          'GRAP 17 and mSCOA Compliant Asset Registers with GPS Coordinates',
          'Componentization of Bulk Infrastructure into depreciable child components',
        ],
      },
      {
        category: 'Digital Twins & Master Data',
        items: [
          'Master Data Governance, Cleansing & Standardization',
          'Asset Digital Twin Generation with GIS spatial coordinates',
          'Work Management & Maintenance Schedule Integration with SAP / Maximo / Ellipse',
          'Disposal, Decommissioning & Asset Replacement Capital Forecasting',
        ],
      },
    ],
    methodology: [
      {
        phase: '01',
        title: 'Maturity Assessment & Gap Analysis',
        desc: 'Benchmarking the organization against ISO 55001 and statutory accounting guidelines to pinpoint data, process, and governance gaps.',
      },
      {
        phase: '02',
        title: 'Field Verification & Condition Grading',
        desc: 'Mobilizing certified engineering field teams with handheld scanners and GPS loggers to verify, barcode, and grade physical condition.',
      },
      {
        phase: '03',
        title: 'Master Data & Register Reconstruction',
        desc: 'Restructuring parent-child hierarchies, reconciling unbundled assets against financial records, and producing audit-proof master data.',
      },
      {
        phase: '04',
        title: 'SAMP Deployment & Digital Twin',
        desc: 'Operationalizing the Strategic Asset Management Plan with digital twins for live visibility into asset performance and replacement liabilities.',
      },
    ],
    specifications: [
      { label: 'Framework Compliance', value: 'ISO 55000/1/2, GRAP 17, MFMA / PFMA' },
      { label: 'Field Capture Method', value: 'Sub-meter GNSS, Industrial RFID / Barcoding, Drone Photogrammetry' },
      { label: 'Enterprise Systems', value: 'SAP PM, IBM Maximo, IFS, Oracle, mSCOA Systems' },
      { label: 'Deliverable Type', value: 'Verified Unbundled Asset Register, SAMP, Digital Twin Portal' },
    ],
    sectors: ['Government Departments', 'Municipalities & Metros', 'Water Boards & Utilities', 'Mining & Resources'],
    relatedServices: [
      { title: 'Reliability Engineering', slug: 'reliability-engineering', ref: 'RE-01' },
      { title: 'Electrical Engineering', slug: 'electrical-engineering', ref: 'EE-03' },
      { title: 'Geo-Environmental', slug: 'geo-environmental', ref: 'GE-04' },
    ],
  },
  {
    slug: 'electrical-engineering',
    ref: 'EE-03',
    title: 'Electrical Engineering',
    category: 'Power Infrastructure, Reticulation & Construction',
    tagline: 'Transmission, Reticulation, Substations & Renewable Integration',
    summary:
      'We engineer reliable electrical infrastructure from bulk high-voltage transmission and substation distribution to municipal reticulation, industrial switchgear, standby power systems, and utility-scale solar PV microgrids.',
    heroImage: 'cap-electrical.jpg',
    docNo: 'MT-ENG-EE-03',
    standards: ['SANS 10142-1 & 2', 'NRS 048 Power Quality', 'Eskom Standards', 'IEEE Guidelines'],
    disciplines: ['High Voltage Transmission', 'Medium/Low Voltage Reticulation', 'Protection Coordination', 'Renewable Microgrids'],
    keyStats: [
      { label: 'Substation Projects', value: '132kV / 11kV' },
      { label: 'Network Power Quality', value: 'NRS 048 Compliant' },
      { label: 'Certification Standard', value: 'SANS 10142 COC' },
      { label: 'Council Registration', value: 'ECSA Registered' },
    ],
    deliverables: [
      {
        category: 'Substations & Bulk Transmission',
        items: [
          'High Voltage Transmission & Distribution Line Design (up to 132kV)',
          'Substation Engineering, Switchgear Specifications & Transformer Sizing',
          'Protection Coordination, Relay Settings & Short Circuit Fault Studies',
          'Earthing Design, Soil Resistivity Testing & Lightning Protection to SANS 10313',
        ],
      },
      {
        category: 'Municipal & Township Reticulation',
        items: [
          'Underground Cable Reticulation & Overhead Distribution Networks',
          'Municipal Bulk Intake Points & Ring Main Unit (RMU) Upgrades',
          'Street Lighting & High-Mast Energy-Efficient LED Illumination',
          'Township Electrification Schemes & Smart Metering Rollouts',
        ],
      },
      {
        category: 'Power Security & Renewable Generation',
        items: [
          'Commercial & Industrial Solar PV Microgrids with Battery Storage (BESS)',
          'Standby Diesel Generator Installation, Automatic Transfer Switches (ATS) & Synchronization',
          'Cable Fault Detection, VLF Testing & Precision Thump Testing',
          'Statutory Electrical Certificate of Compliance (COC) for Commercial & Industrial Sites',
        ],
      },
    ],
    methodology: [
      {
        phase: '01',
        title: 'Load Flow & Network Modeling',
        desc: 'Modeling electrical networks in DigSILENT and ETAP to calculate fault currents, voltage drops, and protection tripping curves.',
      },
      {
        phase: '02',
        title: 'Detailed Engineering CAD & Specifications',
        desc: 'Developing comprehensive single-line diagrams (SLD), cable schedules, switchgear layouts, and bills of quantities.',
      },
      {
        phase: '03',
        title: 'EPC Management & Quality Assurance',
        desc: 'On-site engineering supervision, testing cable insulation resistance, pressure testing transformers, and validating relay curves.',
      },
      {
        phase: '04',
        title: 'Energization & Compliance Certification',
        desc: 'Controlled energization, power quality harmonics recording to NRS 048, and issuance of certified Electrical Certificates of Compliance (COC).',
      },
    ],
    specifications: [
      { label: 'Voltage Classes', value: 'Low Voltage (400V/230V), MV (11kV/22kV/33kV), HV (66kV/132kV)' },
      { label: 'Design Tools', value: 'AutoCAD Electrical, DigSILENT PowerFactory, ETAP, ReticMaster' },
      { label: 'Statutory Certification', value: 'ECSA Pr.Eng / Pr.Tech.Eng certified blueprints & SANS 10142 COCs' },
      { label: 'Power Sources', value: 'Grid Intake, Solar PV Hybrid, Dual Generator Synchronized Stations' },
    ],
    sectors: ['Municipalities & Public Works', 'Industrial Plants & Smelters', 'Mining Operations', 'Commercial Developments'],
    relatedServices: [
      { title: 'Reliability Engineering', slug: 'reliability-engineering', ref: 'RE-01' },
      { title: 'Asset Management', slug: 'asset-management', ref: 'AM-02' },
      { title: 'Geo-Environmental', slug: 'geo-environmental', ref: 'GE-04' },
    ],
  },
  {
    slug: 'geo-environmental',
    ref: 'GE-04',
    title: 'Geo-Environmental',
    category: 'Hydrogeology, Environmental Licences & Rehabilitation',
    tagline: 'Hydrogeological Studies, Environmental Authorisations & Water Licensing',
    summary:
      'We combine professional hydrogeological engineering with statutory environmental management. Our registered natural scientists (SACNASP) ensure compliance with national environmental, water, and mining legislation from baseline geophysics and water licensing to mine closure and land rehabilitation.',
    heroImage: 'cap-hydro.jpg',
    docNo: 'MT-ENG-GE-04',
    standards: ['National Water Act (NWA 36/1998)', 'NEMA (Act 107/1998)', 'MPRDA Act 28/2002', 'SACNASP Registered'],
    disciplines: ['Hydrogeology & Geophysics', 'Water Resource Management', 'Environmental Compliance', 'Contaminated Land Remediation'],
    keyStats: [
      { label: 'Water Licences Approved', value: '100% Success' },
      { label: 'Statutory Council', value: 'SACNASP Certified' },
      { label: 'Boreholes & Aquifers Sited', value: '450+' },
      { label: 'Regulatory Framework', value: 'NEMA & DWS Compliant' },
    ],
    deliverables: [
      {
        category: 'Hydrogeology & Groundwater Engineering',
        items: [
          'Geophysical Resistivity Surveys & Ground Penetrating Radar (GPR)',
          'Borehole Siting, Drilling Supervision, Casing Design & Aquifer Yield Testing',
          'Numerical Groundwater Flow & Contaminant Transport Modeling',
          'Groundwater Chemistry Baseline Audits & Long-term Monitoring Networks',
        ],
      },
      {
        category: 'Authorisations, Licences & Compliance',
        items: [
          'Water Use Licence Applications (WULA) & Section 21 Statutory Filings',
          'Environmental Impact Assessments (EIA), Basic Assessments & Scoping Reports',
          'Integrated Water and Waste Management Plans (IWWMP)',
          'Atmospheric Emission Licences (AEL) & Dust Fallout Monitoring Networks',
          'Independent Environmental Control Officer (ECO) Site Audits',
        ],
      },
      {
        category: 'Waste, Carbon & Site Rehabilitation',
        items: [
          'Waste Classification to SANS 10234 & Waste Management Licences',
          'NAEIS Reporting & Greenhouse Gas Carbon Footprint Computations',
          'Contaminated Land Assessments & Remediation Implementation Plans',
          'Mine Closure Liability Assessments & Environmental Rehabilitation Plans',
        ],
      },
    ],
    methodology: [
      {
        phase: '01',
        title: 'Desktop Review & Geophysical Surveys',
        desc: 'Analyzing regional geological maps, historical hydrology, and executing on-site multi-electrode 2D resistivity imaging.',
      },
      {
        phase: '02',
        title: 'Field Drilling, Sampling & Yield Testing',
        desc: 'Supervising rotary percussion drilling, logging geological strata, and running 72-hour step-drawdown and constant discharge aquifer tests.',
      },
      {
        phase: '03',
        title: 'Statutory Submission & Public Participation',
        desc: 'Compiling accredited technical reports, coordinating public stakeholder participation, and engaging directly with DWS and DFFE officials.',
      },
      {
        phase: '04',
        title: 'Auditing, ECO & Long-term Monitoring',
        desc: 'Providing statutory ECO oversight, continuous telemetry water sampling, and annual compliance audit certifications.',
      },
    ],
    specifications: [
      { label: 'Statutory Councils', value: 'SACNASP (Natural Scientific Professions), IAH, ECSA' },
      { label: 'Testing Methods', value: 'SABS 0299 Water Quality, 2D Electrical Resistivity Tomography (ERT)' },
      { label: 'Government Portals', value: 'e-WULAAS (DWS), NAEIS (Air Quality), SAHRIS' },
      { label: 'Report Outputs', value: 'Specialist EIA Studies, IWWMP, Aquifer Characterisation Reports' },
    ],
    sectors: ['Mining & Heavy Extraction', 'Water Utilities & Municipalities', 'Agriculture & Land Development', 'Industrial Manufacturing'],
    relatedServices: [
      { title: 'Reliability Engineering', slug: 'reliability-engineering', ref: 'RE-01' },
      { title: 'Asset Management', slug: 'asset-management', ref: 'AM-02' },
      { title: 'Electrical Engineering', slug: 'electrical-engineering', ref: 'EE-03' },
    ],
  },
];

export function getDedicatedService(slug: string): DedicatedService | undefined {
  const normalized = slug.toLowerCase().trim().replace(/^\/services\//, '').replace(/\/$/, '');
  
  // Direct match
  const direct = dedicatedServicesData.find((s) => s.slug === normalized);
  if (direct) return direct;

  // Keyword / Sub-service matching
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
  return 'geo-environmental';
}


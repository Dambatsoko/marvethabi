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
          'Reliability-Centred Maintenance (RCM) implementation',
          'Asset Criticality Analysis based on risk, safety, and production impact',
          'Failure Modes and Effects Analysis (FMEA)',
          'Maintenance Strategy and Asset Tactics Development',
          'Root Cause Failure Analysis (RCFA)',
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
          'Asset Management Framework Development aligned with ISO 55000',
          'Maintenance Planning and Scheduling',
          'Asset Registers, Asset Hierarchies & Master Data',
          'Lifecycle Costing and Risk Analysis',
          'Asset Performance Measurement and Benchmarking',
          'Physical Asset Identification, Verification & Validation',
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
          'Electrical Wiring Services for Commercial and Industrial Facilities',
          'Electrical Fault Finding and Testing Services',
          'Electrical Compliance Certificates (COC)',
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
          'Electrical Infrastructure Design and Development',
          'Electrical Reticulation and Power Distribution Design',
          'Municipal and Township Electrical Reticulation Design',
          'Street and Area Lighting Design',
          'Standby Power Systems Design — Generators and UPS',
          'Lightning Protection and Earthing Design',
          'Voice and Data Infrastructure Design',
          'Access Control, Security, CCTV and Fire Alarm Systems Design',
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
          'Water Use Licence Applications (WULA) & Licensing',
          'Water Conservation and Water Demand Management Plans (WC/WDM)',
          'Integrated Water and Waste Management Plans (IWWMP)',
          'Groundwater and Surface Water Quality Monitoring Networks',
          'Specialist Water Studies and Catchment Balances for EIAs',
        ],
      },
      {
        ref: 'WS-06',
        icon: 'waste',
        img: 'industries.jpg',
        title: 'Waste Management',
        desc: 'Classification, licensing and plans that turn waste liabilities into managed streams.',
        items: [
          'Waste Licensing and Classification according to NEM:WA standards',
          'Integrated Waste Management Plans (IWMP)',
          'Sewage Plant Performance Audits and Effluent Compliance',
          'Waste Minimisation, Handling, Storage and Disposal Protocols',
          'Hazardous and General Waste Compliance Audits',
        ],
      },
      {
        ref: 'AQ-07',
        icon: 'air',
        img: 'cap-reliability.jpg',
        title: 'Air Quality Management',
        desc: 'Dust, emissions and noise kept measurable, reportable and compliant.',
        items: [
          'Dust Fallout Monitoring Networks & ASTM D1739 Reporting',
          'Atmospheric Emission Licence (AEL) Applications and Reviews',
          'Air Quality Management Plans (AQMP)',
          'Environmental and Occupational Noise Monitoring',
          'Point-Source and Fugitive Dust Assessments',
        ],
      },
      {
        ref: 'GG-08',
        icon: 'leaf',
        img: 'cap-power.jpg',
        title: 'Greenhouse Gas Management',
        desc: 'Carbon accounting and national reporting done to the decimal.',
        items: [
          'Carbon Footprint Calculations (Scope 1, Scope 2, and Scope 3)',
          'NAEIS Mandatory Emissions Reporting',
          'Greenhouse Gas Management and Mitigation Strategies',
          'Carbon Tax Exposure Assessments and Energy Optimization',
        ],
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
          'Hydrogeological and Environmental Studies',
          'Borehole Development, Yield Testing and Aquifer Characterisation',
          'Groundwater Monitoring Network Design and Surveillance',
          'Geophysical Surveys (Resistivity, Gravity and GPR)',
          'Geological and Geotechnical Soil & Rock Profiling',
          'Mining Closure Dewatering Assessments',
        ],
      },
      {
        ref: 'AP-10',
        icon: 'permit',
        img: 'hero.jpg',
        title: 'Authorisation, Permits and Licences',
        desc: 'The full authorisation pathway, from EIA to mining right, managed end to end.',
        items: [
          'Water Use Licence Applications (WULA)',
          'Environmental Impact Assessments (Basic Assessment & Scoping/EIR)',
          'Environmental Management Programmes (EMPr)',
          'Waste Management Permits and Licences',
          'Mining Rights, Prospecting Rights, and Mining Permits Support',
          'Public Participation Processes and Stakeholder Engagement',
        ],
      },
      {
        ref: 'CA-11',
        icon: 'audit',
        img: 'cap-environmental.jpg',
        title: 'Environmental Compliance Audits and Monitoring',
        desc: 'Independent audits that find the gap before the regulator does.',
        items: [
          'Water Use Licence Compliance Audits',
          'Waste Management Licence Audits',
          'Sewage Plant Performance Audits',
          'Environmental Control Officer (ECO) Site Supervision',
          'Biomonitoring (Aquatic Macro-invertebrates & Ecological Health)',
          'Ongoing Statutory Environmental Compliance Monitoring',
        ],
      },
      {
        ref: 'ER-12',
        icon: 'rehab',
        img: 'industries.jpg',
        title: 'Environmental Rehabilitation',
        desc: 'Returning disturbed land to stable, compliant, productive condition.',
        items: [
          'Rehabilitation and Remedial Action Plans for Disturbed and Mining Land',
          'Contaminated Land Assessment, Delineation and Remediation',
          'Rehabilitation Strategy Implementation Plans (RSIP)',
          'Rehabilitation Risk Analysis and Closure Liability Costing',
          'Topsoil Management and Native Revegetation Oversight',
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
  outcomeStatement?: string;
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
    category: 'Engineering Services',
    tagline: 'Asset Reliability, Availability and Maintainability Methodologies',
    summary:
      'MarveThabi improves asset reliability, availability and maintainability through structured, data-driven reliability engineering methodologies. Our engineering programmes reduce unplanned downtime, improve maintenance effectiveness, manage operational risk and extend asset life.',
    docNo: 'MT-ENG-RE-01',
    objective:
      'To reduce unplanned downtime, optimize maintenance interventions, manage operational risk and extend asset life across the physical asset lifecycle.',
    capabilities: [
      {
        group: 'Reliability Methodologies & Analysis',
        items: [
          'Reliability-Centred Maintenance (RCM) facilitation and implementation',
          'Asset Criticality Analysis based on risk, safety, cost and production impact',
          'Failure Modes and Effects Analysis (FMEA)',
          'Maintenance Strategy and Asset Tactics Development aligned to operational objectives and business value',
          'Root Cause Failure Analysis (RCFA) and defect elimination',
        ],
      },
    ],
    approach:
      'The approach is technically sound, risk-based and aligned with operational and business performance goals. We work directly with plant engineering, maintenance teams, and operations to embed sustainable reliability practices that eliminate chronic failure modes.',
    outcomeStatement:
      'Lower maintenance costs, eliminated chronic failures, improved asset availability, and data-driven maintenance decision making.',
    standards: ['ISO 55000 / 55001', 'ISO 14224 (Taxonomy & Reliability Data)', 'SAE JA1011 (RCM)', 'ECSA Code of Practice'],
    sectors: ['Mining & Mineral Processing', 'Petrochemical & Refining', 'Heavy Manufacturing', 'Power Generation & Utilities', 'Water Infrastructure'],
  },
  {
    slug: 'asset-management',
    ref: 'AM-02',
    title: 'Asset Management',
    category: 'Engineering Services',
    tagline: 'ISO 55000 Principles, Asset Performance & Lifecycle Cost',
    summary:
      "MarveThabi's Asset Management services are aligned with ISO 55000 principles and focus on asset performance, risk and lifecycle cost. The approach integrates technical, financial and risk considerations to support decision-making, governance and long-term asset value.",
    docNo: 'MT-ENG-AM-02',
    objective:
      'To integrate technical, financial and risk considerations across physical asset portfolios to support better decision-making, governance, and long-term asset value.',
    capabilities: [
      {
        group: 'Asset Management Frameworks & Lifecycle Systems',
        items: [
          'Asset Management Framework Development aligned with ISO 55000 requirements',
          'Maintenance Planning and Scheduling',
          'Asset Registers, Asset Hierarchies and Master Data validation',
          'Lifecycle Costing and Risk Analysis',
          'Asset Performance Measurement and Benchmarking',
        ],
      },
    ],
    approach:
      'Our approach connects physical asset condition with statutory accounting and strategic governance. We assist organizations to establish robust hierarchies, accurate asset registers, and structured maintenance schedules that protect capital investments and satisfy statutory audits.',
    outcomeStatement:
      'Transparent asset accountability, optimized capital and operational expenditure, and sustained regulatory governance compliance.',
    standards: ['ISO 55000 / 55001', 'GRAP 17 Asset Accounting', 'National Treasury Asset Framework', 'SANS 55000'],
    sectors: ['Municipalities & Metros', 'Government Departments & Public Entities', 'Water Boards & Utilities', 'Mining & Resources', 'Commercial Portfolios'],
  },
  {
    slug: 'electrical-construction',
    ref: 'EC-03',
    title: 'Electrical Construction',
    category: 'Engineering Services',
    tagline: 'Installation, Commissioning, Maintenance & Compliance Certification',
    summary:
      'MarveThabi delivers professional electrical installation, commissioning, maintenance, fault-finding and statutory compliance certification for commercial, industrial and infrastructure facilities.',
    docNo: 'MT-ENG-EC-03',
    objective:
      'To provide dependable, code-compliant electrical construction, standby generation integration, cable diagnostics, and statutory compliance certification.',
    capabilities: [
      {
        group: 'Installation & Reticulation Execution',
        items: [
          'Standby Generator Installation, Commissioning, Maintenance and Repair',
          'Solar Power (PV) Installation, Commissioning, Maintenance and Repair',
          'Electrical Wiring Services for Commercial and Industrial Facilities',
          'Cable Fault Detecting, Thump Testing and Cable Diagnostics',
          'Electrical Fault Finding and Testing Services',
          'Issuance of Electrical Compliance Certificates (COC)',
        ],
      },
    ],
    approach:
      'All installation, wiring, and testing works are executed by qualified installation electricians and registered engineering technologists, adhering strictly to SANS 10142-1 (Wiring of Premises) and Occupational Health and Safety mandates.',
    outcomeStatement:
      'Turnkey electrical installations delivered safely on schedule, verified statutory safety compliance, and immediate issuance of valid Certificates of Compliance.',
    standards: ['SANS 10142-1 (Wiring of Premises)', 'OHS Act (Electrical Installation Regulations)', 'NRS 048 (Power Quality)', 'ECSA Code of Practice'],
    sectors: ['Industrial & Manufacturing Plants', 'Commercial Facilities & Warehouses', 'Municipal Buildings & Depots', 'Residential Developments', 'Mining Surface Infrastructure'],
  },
  {
    slug: 'electrical-and-electronic-engineering',
    ref: 'EE-04',
    title: 'Electrical & Electronic Engineering',
    category: 'Engineering Services',
    tagline: 'Power Infrastructure Design, Reticulation & Technical Assurance',
    summary:
      'Professional electrical engineering services for industrial and commercial facilities. We deliver robust power distribution designs, municipal reticulation schemes, backup power systems, and technical compliance audits.',
    docNo: 'MT-ENG-EE-04',
    objective:
      'To provide dependable, standards-compliant electrical infrastructure engineering that guarantees operational continuity, personnel safety, and regulatory approval.',
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
        group: 'Standby Power, Safety & Electronic Systems',
        items: [
          'Standby Power Systems Design — Generators and UPS',
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
          'Project Engineering Support and Construction Monitoring',
        ],
      },
    ],
    approach:
      'Every project is directed by registered engineering technologists to ensure compliance with SANS 10142, utility grid connection codes, and statutory safety mandates. Designs are developed with full AutoCAD/CAD single-line diagrams, protection settings, and bill of quantities.',
    outcomeStatement:
      'Resilient power distribution networks engineered for long-term load growth, verified safety margins, and turnkey compliance documentation.',
    standards: ['SANS 10142-1 & 2', 'NRS 048 Power Quality', 'SANS 10313 Lightning Protection', 'ECSA Standards'],
    sectors: ['Mining & Minerals', 'Industrial & Manufacturing', 'Municipalities & Metros', 'Commercial Facilities', 'Public Infrastructure'],
  },
  {
    slug: 'condition-monitoring',
    ref: 'CM-01',
    title: 'Condition Monitoring',
    category: 'Engineering Services',
    tagline: 'Early Fault Detection, Non-Destructive Testing & Asset Diagnostics',
    summary:
      'Advanced condition monitoring supporting predictive and proactive maintenance strategies. The purpose is early fault detection, reduced unplanned downtime and improved asset reliability.',
    docNo: 'MT-ENG-CM-01',
    objective:
      'Early fault detection, reduced unplanned downtime and improved asset reliability through precision testing and diagnostic analytics.',
    capabilities: [
      {
        group: 'Diagnostic & Predictive Technologies',
        items: [
          'Vibration Analysis and rotating equipment diagnostics',
          'Oil Sampling and Oil Condition Analysis',
          'Infrared Thermography for electrical and mechanical plant',
          'Motor Circuit Analysis (MCA)',
          'Transformer Condition Assessments and dissolved gas analysis',
        ],
      },
      {
        group: 'Non-Destructive Testing (NDT) & Structural Inspection',
        items: [
          'Ultrasonic Testing (UT) and thickness measurement',
          'Visual Testing (VT)',
          'Liquid Penetrant Testing (PT)',
          'Radiographic Testing (RT)',
          'Eddy Current Testing (ECT)',
          'Weld Inspection and Evaluation',
        ],
      },
      {
        group: 'Asset Integrity & Condition Reporting',
        items: [
          'Corrosion Monitoring and degradation tracking',
          'Equipment Condition Assessments',
          'Diagnostic Reporting and Maintenance Recommendations',
          'Integrity and Reliability Assessments',
        ],
      },
    ],
    approach:
      'Our certified analysts evaluate mechanical trains, high-voltage switchgear, and structural components under actual operating conditions. Findings are synthesized into concise diagnostic reports with prioritized maintenance recommendations.',
    outcomeStatement:
      'Zero catastrophic machine breakdowns, maintenance scheduled only when condition warrants, and extended component operating lifecycle.',
    standards: ['ISO 18436 (Condition Monitoring & Diagnostics)', 'ISO 10816 (Mechanical Vibration)', 'ASNT / PCN Standards', 'SANS Standards'],
    sectors: ['Mining & Beneficiation Plants', 'Petrochemical & Gas', 'Power Utilities & Substations', 'Water Pumping Stations', 'Processing Plants'],
  },
  {
    slug: 'water-management',
    ref: 'WM-05',
    title: 'Water Management',
    category: 'Environmental Resource Management',
    tagline: 'Water Use Licensing, Balances & Catchment Quality Protection',
    summary:
      'Integrated water resource management services supporting statutory water use licensing, conservation and demand management planning, and comprehensive surface and groundwater monitoring networks.',
    docNo: 'MT-ENV-WM-05',
    objective:
      'To secure statutory water use authorizations, safeguard water security, and maintain strict compliance with catchment quality standards across industrial and municipal operations.',
    capabilities: [
      {
        group: 'Water Resource Licensing & Conservation Planning',
        items: [
          'Water Use Licence Applications (WULA) and Licence Amendments',
          'Water Conservation and Water Demand Management Plans (WC/WDM)',
          'Integrated Water and Waste Management Plans (IWWMP)',
          'Groundwater and Surface Water Quality Monitoring Networks',
          'Specialist Hydrological Studies and Catchment Water Balances for EIAs',
        ],
      },
    ],
    approach:
      'Led by SACNASP-registered scientists, our water management programmes combine hydrochemical sampling, catchment water balancing, and technical liaison with the Department of Water and Sanitation (DWS) under the National Water Act.',
    outcomeStatement:
      'Secured Water Use Licences, mitigated pollution liability, optimized industrial water reuse, and sustained regulatory standing.',
    standards: ['National Water Act (Act 36 of 1998)', 'DWS Best Practice Guidelines', 'SANS 241 (Drinking Water Quality)', 'SACNASP Code of Conduct'],
    sectors: ['Mining & Mineral Extraction', 'Municipal Water Utilities', 'Industrial & Chemical Processing', 'Agricultural Schemes', 'Infrastructure Development'],
  },
  {
    slug: 'waste-management',
    ref: 'WS-06',
    title: 'Waste Management',
    category: 'Environmental Resource Management',
    tagline: 'Waste Classification, Licensing & Sewage Plant Performance Audits',
    summary:
      'MarveThabi provides waste classification, waste management licensing, integrated waste planning, and sewage plant performance audits for industrial and municipal operations.',
    docNo: 'MT-ENV-WS-06',
    objective:
      'To ensure statutory compliance in waste handling, eliminate pollution risks, optimize waste classification, and ensure efficient wastewater treatment operations.',
    capabilities: [
      {
        group: 'Waste Licensing, Audits & Operational Plans',
        items: [
          'Waste Licensing and Classification according to NEM:WA standards',
          'Integrated Waste Management Plans (IWMP)',
          'Sewage Plant Performance Audits and effluent compliance',
          'Waste Minimisation, Handling, Storage and Disposal Protocols',
          'Hazardous and General Waste Storage Compliance Audits',
        ],
      },
    ],
    approach:
      'We conduct cradle-to-grave waste stream characterisation, hazard assessments (SANS 10234), and wastewater plant process reviews. Solutions focus on legal compliance, waste hierarchy principles, and risk mitigation.',
    outcomeStatement:
      'Legally compliant waste storage and disposal, optimized recycling streams, avoided regulatory fines, and verified wastewater effluent standards.',
    standards: ['National Environmental Management: Waste Act (NEM:WA 59/2008)', 'SANS 10234 (GHS Classification)', 'National Waste Management Strategy', 'DWS Discharge Standards'],
    sectors: ['Manufacturing & Petrochemical Plants', 'Municipalities & Water Service Authorities', 'Mining Operations & Tailings Facilities', 'Commercial & Industrial Parks', 'Waste Treatment Facilities'],
  },
  {
    slug: 'air-quality-management',
    ref: 'AQ-07',
    title: 'Air Quality Management',
    category: 'Environmental Resource Management',
    tagline: 'Dust Fallout Monitoring, Atmospheric Licensing & Noise Assessment',
    summary:
      'Comprehensive ambient air quality monitoring, atmospheric emission licensing, and environmental noise assessments keeping industrial operations measurable and compliant.',
    docNo: 'MT-ENV-AQ-07',
    objective:
      'To quantify atmospheric emissions, maintain statutory Atmospheric Emission Licences (AEL), and mitigate ambient dust and noise impacts on surrounding communities.',
    capabilities: [
      {
        group: 'Monitoring Networks & Regulatory Licensing',
        items: [
          'Dust Fallout Monitoring Networks and ASTM D1739 Reporting',
          'Atmospheric Emission Licence (AEL) Applications and Reviews',
          'Air Quality Management Plans (AQMP) and Dust Management Plans',
          'Environmental and Occupational Noise Monitoring Surveys',
          'Point-Source and Fugitive Dust Assessments',
        ],
      },
    ],
    approach:
      'We deploy calibrated dust fallout bucket networks, acoustic monitors, and sampling protocols aligned with national norms and standards. Data is analyzed in accredited laboratories and synthesized into audit-ready monthly and annual compliance reports.',
    outcomeStatement:
      'Defensible air quality records, maintained Atmospheric Emission Licences, minimized nuisance complaints, and full regulatory transparency.',
    standards: ['National Environmental Management: Air Quality Act (NEM:AQA 39/2004)', 'National Dust Control Regulations (NDCR)', 'SANS 10103 (Environmental Noise)', 'ASTM D1739 Standard'],
    sectors: ['Opencast Mining & Quarries', 'Heavy Manufacturing & Smelters', 'Bulk Handling & Logistics Facilities', 'Power Generation & Petrochemical', 'Municipal & Urban Interfaces'],
  },
  {
    slug: 'greenhouse-gas-management',
    ref: 'GG-08',
    title: 'Greenhouse Gas Management',
    category: 'Environmental Resource Management',
    tagline: 'Carbon Footprint Accounting & Mandatory Emissions Reporting',
    summary:
      "MarveThabi assists organisations to navigate South Africa's climate change legislation through precise carbon footprint calculations, NAEIS reporting, and statutory greenhouse gas management.",
    docNo: 'MT-ENV-GG-08',
    objective:
      'To deliver accurate, audit-ready carbon emissions accounting, satisfy national reporting thresholds, and optimize carbon tax exposure.',
    capabilities: [
      {
        group: 'Carbon Accounting & National Statutory Reporting',
        items: [
          'Carbon Footprint Calculations (Scope 1 Direct, Scope 2 Electricity, and Scope 3 Value Chain)',
          'National Atmospheric Emission Information System (NAEIS) Reporting',
          'Mandatory National Greenhouse Gas (GHG) Emissions Reporting',
          'Carbon Tax Liability Calculations and Exposure Assessment',
          'Greenhouse Gas Mitigation Strategies and Decarbonization Pathways',
        ],
      },
    ],
    approach:
      'Our carbon specialists apply IPCC Tier methodology and the GHG Protocol Corporate Standard to quantify emissions across facility operations, ensuring full alignment with the Climate Change Act and National GHG Reporting Regulations.',
    outcomeStatement:
      'Defensible, audit-ready carbon inventories, timely NAEIS statutory submissions, and strategic clarity on carbon tax liabilities.',
    standards: ['Climate Change Act', 'National GHG Reporting Regulations', 'GHG Protocol Corporate Standard', 'IPCC Guidelines for National GHG Inventories'],
    sectors: ['Mining & Resource Extraction', 'Energy Generation & Refining', 'Heavy Manufacturing & Foundries', 'Bulk Transport & Logistics', 'Commercial Property Portfolios'],
  },
  {
    slug: 'hydrogeological-studies',
    ref: 'HS-09',
    title: 'Hydrogeological Studies',
    category: 'Specialist Studies',
    tagline: 'Geophysics, Borehole Development & Aquifer Yield Characterisation',
    summary:
      'Scientific groundwater investigation, geophysical subsurface imaging, borehole development and aquifer yield testing directed by SACNASP-registered geohydrologists.',
    docNo: 'MT-SCI-HS-09',
    objective:
      'To accurately map groundwater resources, determine sustainable borehole abstraction yields, and assess subsurface contaminant migration risks.',
    capabilities: [
      {
        group: 'Groundwater Investigation & Subsurface Geophysics',
        items: [
          'Hydrogeological and Environmental Studies',
          'Borehole Development, Yield Testing and Aquifer Characterisation',
          'Groundwater Monitoring Network Design and Surveillance',
          'Geophysical Surveys (Resistivity, Gravity and Ground Penetrating Radar / GPR)',
          'Geological and Geotechnical Soil & Rock Core Logging',
          'Mining Closure Dewatering Assessments',
        ],
      },
    ],
    approach:
      'We integrate surface geophysics, calibrated pumping test data, and hydrochemical fingerprinting to model aquifer behavior according to SANS 10299 standards. Every report provides defensible abstraction recommendations.',
    outcomeStatement:
      'Sustainable water supply security, reliable groundwater yield determinations, accurate plume migration modeling, and sound engineering foundation parameters.',
    standards: ['SANS 10299 (Groundwater Resource Development)', 'National Water Act (NWA 36/1998)', 'SACNASP Code of Conduct'],
    sectors: ['Mining Dewatering & Operations', 'Municipal Groundwater Reticulation Schemes', 'Agricultural Irrigators', 'Industrial Water Sourcing', 'Linear Infrastructure Projects'],
  },
  {
    slug: 'authorisation-permits-and-licences',
    ref: 'AP-10',
    title: 'Authorisation, Permits and Licences',
    category: 'Specialist Studies',
    tagline: 'EIA, Water Licences, Waste Permits & Mining Rights Approvals',
    summary:
      'MarveThabi manages the entire statutory environmental approval process, from screening and environmental impact assessments to mining permits, water licences, and public participation.',
    docNo: 'MT-ENV-AP-10',
    objective:
      'To navigate complex statutory frameworks, coordinate specialist disciplines, and secure legally robust environmental authorisations with zero procedural delays.',
    capabilities: [
      {
        group: 'Statutory Approvals & Environmental Authorisations',
        items: [
          'Water Use Licence Applications (WULA)',
          'Environmental Impact Assessments (Basic Assessment & Scoping/EIR)',
          'Environmental Management Programmes (EMPr)',
          'Waste Management Licences and Atmospheric Emission Licences',
          'Mining Rights, Prospecting Rights, and Mining Permits Support',
          'Public Participation Processes and Stakeholder Engagement',
        ],
      },
    ],
    approach:
      'We act as the independent Environmental Assessment Practitioner (EAP), coordinating specialist baseline studies, liaising directly with competent authorities (DFFE, DMRE, DWS), and managing all gazetted public participation requirements.',
    outcomeStatement:
      'Legally defensible authorizations secured within statutory timeframes, reduced regulatory risks, and strong stakeholder alignment.',
    standards: ['NEMA (Act 107 of 1998) & EIA Regulations', 'MPRDA (Act 28 of 2002)', 'National Water Act (Act 36 of 1998)', 'EAPASA Guidelines'],
    sectors: ['Mining & Exploration Companies', 'Industrial Developers & Energy Projects', 'Municipalities & Public Infrastructure', 'Commercial Land Developers', 'Road & Pipeline Authorities'],
  },
  {
    slug: 'compliance-audits-and-monitoring',
    ref: 'CA-11',
    title: 'Environmental Compliance Audits & Monitoring',
    category: 'Specialist Studies',
    tagline: 'Independent Statutory Audits, ECO Oversight & Biomonitoring',
    summary:
      'Independent environmental auditing, on-site Environmental Control Officer (ECO) supervision, and ecological biomonitoring that identify compliance gaps before regulatory enforcement.',
    docNo: 'MT-ENV-CA-11',
    objective:
      'To verify continuous adherence to statutory licence conditions, authorisations, and Environmental Management Programmes across construction and operational phases.',
    capabilities: [
      {
        group: 'Audit & Compliance Monitoring Programmes',
        items: [
          'Water Use Licence Compliance Audits and Gap Analyses',
          'Environmental Authorisation & EMPr Performance Audits',
          'Waste Management Licence Audits',
          'Sewage Plant Performance Audits and effluent monitoring',
          'Environmental Control Officer (ECO) Site Supervision and Construction Oversight',
          'Biomonitoring (Aquatic Macro-invertebrates & Ecological Health)',
          'Ongoing Statutory Environmental Compliance Monitoring',
        ],
      },
    ],
    approach:
      'Our certified environmental auditors conduct systematic physical site inspections, review documentation against statutory conditions, log objective findings, and deliver prioritized corrective action schedules.',
    outcomeStatement:
      'Proactive compliance gap closure, avoidance of pre-directive notices and statutory penalties, maintained operating licences, and documented corporate stewardship.',
    standards: ['ISO 19011 (Auditing Management Systems)', 'NEMA Section 34 Compliance Regulations', 'National Water Act Standards', 'SASS5 Aquatic Protocols'],
    sectors: ['Construction & Civil Contractors', 'Operational Mines & Processing Facilities', 'Municipal Water & Waste Facilities', 'Industrial Manufacturing Operations', 'Energy & Linear Infrastructure'],
  },
  {
    slug: 'environmental-rehabilitation',
    ref: 'ER-12',
    title: 'Environmental Rehabilitation',
    category: 'Specialist Studies',
    tagline: 'Remediation, Land Rehabilitation & Sustainable Closure Planning',
    summary:
      'Practical environmental rehabilitation, contaminated land remediation, and mine closure planning that restore disturbed terrain to compliant, stable, and sustainable condition.',
    docNo: 'MT-ENV-ER-12',
    objective:
      'To remediate environmental contamination, satisfy statutory financial provisioning requirements, and engineer sustainable closure landforms.',
    capabilities: [
      {
        group: 'Rehabilitation & Closure Execution',
        items: [
          'Rehabilitation and Remedial Action Plans for Disturbed and Mining Land',
          'Contaminated Land Assessment, Delineation and Remediation',
          'Rehabilitation Strategy Implementation Plans (RSIP)',
          'Rehabilitation Risk Analysis and Closure Liability Costing',
          'Topsoil Management and Native Revegetation Oversight',
        ],
      },
    ],
    approach:
      'We combine geotechnical slope stability, soil pedology, and ecological restoration principles to design and implement practical rehabilitation programmes that withstand erosion and meet DMRE closure criteria.',
    outcomeStatement:
      'Reduced statutory financial closure liability, successful site remediation, stabilized landscapes, and milestone progress toward final closure certificates.',
    standards: ['NEMA Financial Provisioning Regulations', 'NEM:WA Contaminated Land Provisions (Part 8)', 'DMRE Mine Closure Guidelines'],
    sectors: ['Mining & Quarrying Operations', 'Petrochemical & Fuel Storage Sites', 'Heavy Chemical & Industrial Facilities', 'Municipal Landfills', 'Infrastructure Corridors'],
  },
  {
    slug: 'geo-environmental',
    ref: 'GE-04',
    title: 'Environmental Services',
    category: 'Environmental & Natural Sciences',
    tagline: 'Integrated Environmental Management, Studies & Statutory Compliance',
    summary:
      'MarveThabi provides integrated environmental management and specialist advisory services supporting regulatory compliance, sustainable resource use and responsible project development across mining, industrial, utilities and infrastructure sectors.',
    docNo: 'MT-ENV-GE-04',
    objective:
      'To deliver credible scientific and regulatory support that secures statutory environmental authorisations, protects natural resources, and manages long-term environmental liability.',
    capabilities: [
      {
        group: 'Environmental Resource Management',
        items: [
          'Water Use Licensing, Catchment Water Balances and Monitoring',
          'Waste Classification, Licensing and Integrated Waste Plans',
          'Air Quality Monitoring, Dust Fallout Networks and AEL Support',
          'Greenhouse Gas Accounting and Mandatory NAEIS Reporting',
        ],
      },
      {
        group: 'Specialist Studies & Approvals',
        items: [
          'Hydrogeological Studies, Borehole Development and Geophysics',
          'Environmental Impact Assessments (EIA / BA / Scoping)',
          'Environmental Compliance Audits and ECO Construction Oversight',
          'Environmental Rehabilitation, Contaminated Land Remediation and Closure Costing',
        ],
      },
    ],
    approach:
      'Directed by registered professional natural scientists (SACNASP), our multidisciplinary practice bridges empirical earth sciences with South Africa\'s statutory environmental regulatory frameworks.',
    outcomeStatement:
      'Full statutory environmental compliance, defensible authorizations, minimized closure liabilities, and sustainable resource management.',
    standards: ['National Water Act (NWA 36/1998)', 'NEMA (Act 107/1998)', 'NEM:WA & NEM:AQA', 'SACNASP Code of Conduct'],
    sectors: ['Mining & Minerals', 'Municipalities & Water Utilities', 'Industrial & Manufacturing', 'Energy & Power Infrastructure', 'Commercial & Civil Development'],
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

  // Normalized aliases
  if (normalized === 'electrical-engineering' || normalized === 'ee-03' || normalized === 'ee-04') {
    return dedicatedServicesData.find((s) => s.slug === 'electrical-and-electronic-engineering');
  }
  if (normalized === 'electrical-construction' || normalized === 'ec-03') {
    return dedicatedServicesData.find((s) => s.slug === 'electrical-construction');
  }
  if (normalized === 'condition-monitoring' || normalized === 'cm-01') {
    return dedicatedServicesData.find((s) => s.slug === 'condition-monitoring');
  }
  if (normalized === 'water-management' || normalized === 'wm-05' || normalized === 'water') {
    return dedicatedServicesData.find((s) => s.slug === 'water-management');
  }
  if (normalized === 'waste-management' || normalized === 'ws-06' || normalized === 'waste') {
    return dedicatedServicesData.find((s) => s.slug === 'waste-management');
  }
  if (normalized === 'air-quality-management' || normalized === 'air-quality' || normalized === 'aq-07') {
    return dedicatedServicesData.find((s) => s.slug === 'air-quality-management');
  }
  if (normalized === 'greenhouse-gas-management' || normalized === 'greenhouse-gas' || normalized === 'gg-08') {
    return dedicatedServicesData.find((s) => s.slug === 'greenhouse-gas-management');
  }
  if (normalized === 'hydrogeological-studies' || normalized === 'hydrogeology' || normalized === 'hs-09') {
    return dedicatedServicesData.find((s) => s.slug === 'hydrogeological-studies');
  }
  if (
    normalized === 'authorisation-permits-and-licences' ||
    normalized === 'authorisation-permits-licences' ||
    normalized === 'permits-and-licences' ||
    normalized === 'ap-10'
  ) {
    return dedicatedServicesData.find((s) => s.slug === 'authorisation-permits-and-licences');
  }
  if (
    normalized === 'compliance-audits-and-monitoring' ||
    normalized === 'environmental-compliance-audits' ||
    normalized === 'compliance-audits' ||
    normalized === 'ca-11'
  ) {
    return dedicatedServicesData.find((s) => s.slug === 'compliance-audits-and-monitoring');
  }
  if (
    normalized === 'environmental-rehabilitation' ||
    normalized === 'rehabilitation' ||
    normalized === 'er-12'
  ) {
    return dedicatedServicesData.find((s) => s.slug === 'environmental-rehabilitation');
  }
  if (normalized.includes('reliab') || normalized === 're-01') {
    return dedicatedServicesData.find((s) => s.slug === 'reliability-engineering');
  }
  if (normalized.includes('asset') || normalized === 'am-02') {
    return dedicatedServicesData.find((s) => s.slug === 'asset-management');
  }
  if (normalized.includes('geo') || normalized.includes('environ') || normalized === 'ge-04') {
    return dedicatedServicesData.find((s) => s.slug === 'geo-environmental');
  }

  return undefined;
}

export function getServiceSlugForRef(ref: string): string {
  const upper = ref.toUpperCase().trim();
  switch (upper) {
    case 'RE-01':
      return 'reliability-engineering';
    case 'AM-02':
      return 'asset-management';
    case 'EC-03':
      return 'electrical-construction';
    case 'EE-04':
    case 'EE-03':
      return 'electrical-and-electronic-engineering';
    case 'CM-01':
      return 'condition-monitoring';
    case 'WM-05':
      return 'water-management';
    case 'WS-06':
      return 'waste-management';
    case 'AQ-07':
      return 'air-quality-management';
    case 'GG-08':
      return 'greenhouse-gas-management';
    case 'HS-09':
      return 'hydrogeological-studies';
    case 'AP-10':
      return 'authorisation-permits-and-licences';
    case 'CA-11':
      return 'compliance-audits-and-monitoring';
    case 'ER-12':
      return 'environmental-rehabilitation';
    case 'GE-04':
      return 'geo-environmental';
    default:
      if (upper.startsWith('RE')) return 'reliability-engineering';
      if (upper.startsWith('AM')) return 'asset-management';
      if (upper.startsWith('EC')) return 'electrical-construction';
      if (upper.startsWith('EE')) return 'electrical-and-electronic-engineering';
      if (upper.startsWith('CM')) return 'condition-monitoring';
      if (upper.startsWith('WM')) return 'water-management';
      if (upper.startsWith('WS')) return 'waste-management';
      if (upper.startsWith('AQ')) return 'air-quality-management';
      if (upper.startsWith('GG')) return 'greenhouse-gas-management';
      if (upper.startsWith('HS')) return 'hydrogeological-studies';
      if (upper.startsWith('AP')) return 'authorisation-permits-and-licences';
      if (upper.startsWith('CA')) return 'compliance-audits-and-monitoring';
      if (upper.startsWith('ER')) return 'environmental-rehabilitation';
      return 'geo-environmental';
  }
}




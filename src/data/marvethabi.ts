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

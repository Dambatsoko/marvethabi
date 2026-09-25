import React, { useEffect } from 'react';
import { clientsData } from '../data/marvethabi';
import { CADPlotter } from './CADPlotter';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sectorDetails = [
    {
      name: 'Government & Public Entities',
      desc: 'Infrastructure auditing, GRAP 17 asset registers, and statutory compliance for national and provincial departments.',
      challenges: ['MFMA / PFMA clean audit requirements', 'National Treasury asset guidelines', 'Unbundled infrastructure registers'],
      services: ['Asset Management', 'Geo-Environmental Studies', 'Electrical Master Planning'],
    },
    {
      name: 'Mining & Mineral Extraction',
      desc: 'Heavy industrial reliability, condition monitoring, water use licensing, and mine closure rehabilitation across the Bushveld and Witwatersrand basins.',
      challenges: ['Catastrophic conveyor/mill downtime', 'DWS Water Use Licence compliance', 'Contaminated site remediation'],
      services: ['Reliability Engineering', 'Hydrogeology & Aquifer Testing', 'Environmental Rehabilitation'],
    },
    {
      name: 'Energy & Power Utilities',
      desc: 'Substation engineering, 132kV/11kV network reticulation, protection coordination, and solar PV hybrid integration.',
      challenges: ['Grid instability and load fluctuations', 'Relay coordination and arc-flash safety', 'Renewable microgrid synchronization'],
      services: ['High-Voltage Engineering', 'Cable Diagnostics', 'Standby Power & UPS'],
    },
    {
      name: 'Municipalities & Metros',
      desc: 'Township electrification, high-mast illumination, water supply protection, and mSCOA-compliant infrastructure asset registers.',
      challenges: ['Service delivery mandates', 'Aging distribution networks', 'Asset capitalization and useful life estimation'],
      services: ['Electrical Reticulation', 'Water Management Plans', 'Asset Verification & Barcoding'],
    },
    {
      name: 'Industrial & Manufacturing',
      desc: 'Total fluids management, vibration monitoring, SANS 10142 COCs, and air quality emission licensing for processing plants.',
      challenges: ['Predictive vs breakdown maintenance', 'Air emissions limits (AEL)', 'Power quality harmonics (NRS 048)'],
      services: ['Condition Monitoring', 'Air Quality Audits', 'Electrical Installation & COC'],
    },
    {
      name: 'Commercial & Property Development',
      desc: 'Internal reticulation, standby generator synchronisation, bulk water licensing, and environmental impact assessments for large commercial sites.',
      challenges: ['Uninterrupted tenant power security', 'EIA and stormwater authorisations', 'Energy efficiency and smart metering'],
      services: ['Backup Power Solutions', 'EIA & Environmental Audits', 'Lighting & Power Distribution'],
    },
    {
      name: 'Bulk Infrastructure Development',
      desc: 'Civil-electrical interfaces, pipeline cathodic protection, aquifer yield testing, and environmental control officer (ECO) monitoring.',
      challenges: ['Cross-disciplinary coordination', 'Construction environmental compliance', 'Quality assurance and commissioning'],
      services: ['Geotechnical & Hydrogeology', 'Construction Supervision', 'ECO Audits'],
    },
  ];

  return (
    <main className="ind-page detail-page">
      {/* ============ PAGE HERO ============ */}
      <section className="svc-hero">
        <div className="svc-hero-grid-bg" aria-hidden="true"></div>
        <CADPlotter />

        <div className="wrap">
          <div className="svc-hero-top label">
            <span>SECTOR SPECIALISATION</span>
            <span className="dot" aria-hidden="true"></span>
            <span>PUBLIC & PRIVATE INFRASTRUCTURE</span>
          </div>
          <h1 className="svc-hero-title">Industries We Serve</h1>
          <p className="lead svc-hero-sub">
            From deep-level gold and platinum extraction to municipal bulk distribution networks,
            MarveThabi deploys registered engineering and scientific professionals tailored to the
            demanding regulatory requirements of each sector.
          </p>
        </div>

        <div className="hero-base label">
          <span>SECTORS: 07 CRITICAL INFRASTRUCTURE DOMAINS</span>
          <span>SANS / ISO / NEMA COMPLIANT</span>
          <span>REV 1.9</span>
        </div>
      </section>

      {/* ============ INDUSTRY MATRIX ============ */}
      <section className="detail-body-section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '48px' }}>
            <h2>Sector Engineering Breakdown</h2>
            <p>Tailored engineering and environmental methodologies addressing specific industry operational risks.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {sectorDetails.map((sec, idx) => (
              <div
                key={sec.name}
                style={{
                  background: 'var(--grey)',
                  borderTop: '3px solid var(--btn-green)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderRadius: '2px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 className="card-title" style={{ fontSize: '20px', color: 'var(--ink)' }}>
                    {sec.name}
                  </h3>
                  <span className="num" style={{ fontSize: '13px', color: 'var(--brand)', fontWeight: 700 }}>
                    SEC-0{idx + 1}
                  </span>
                </div>
                <p style={{ fontSize: '15px', color: '#47564F', lineHeight: 1.6 }}>{sec.desc}</p>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: 'auto' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', display: 'block', marginBottom: '8px' }}>
                    Key Challenges Solved
                  </span>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: '#3C4A45' }}>
                    {sec.challenges.map((c, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '6px', height: '6px', background: 'var(--btn-green)', borderRadius: '50%', flexShrink: 0 }}></span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand)', display: 'block', marginBottom: '8px' }}>
                    Core Disciplines Deployed
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {sec.services.map((s, i) => (
                      <span key={i} className="side-chip" style={{ fontSize: '12px', background: '#fff' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLIENT MARQUEE ============ */}
      <section className="cred" style={{ background: 'var(--grey)' }}>
        <div className="wrap">
          <h2 className="cred-head">Trusted by Industry Leaders Across South Africa</h2>
          <div className="marquee">
            <div className="marquee-track" aria-hidden="true">
              {clientsData.concat(clientsData).map((c, idx) => (
                <div key={idx} className="marquee-item">
                  <img src={`/assets/images/${c.logo}`} alt={c.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="svc-cta">
        <div className="wrap svc-cta-inner">
          <div>
            <h2>Discuss Your Sector Requirement</h2>
            <p className="svc-cta-sub">
              Our registered engineers provide sector-specific technical scoping and regulatory roadmaps.
            </p>
          </div>
          <a
            href="/contact"
            className="btn btn-brand"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/contact');
            }}
          >
            Request Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

import React, { useEffect } from 'react';
import { affiliationsData } from '../data/marvethabi';
import { CADPlotter } from './CADPlotter';

interface LeadershipPageProps {
  onNavigate: (path: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const leadershipBiographies = [
    {
      name: 'Marvelous Ngoatle',
      role: 'Principal Reliability Engineer & Director',
      image: 'marvelous.jpg',
      credentials: ['Pr.Tech.Eng (ECSA)', 'B-Tech Electrical Engineering', 'ISO 55000 Asset Specialist', 'Member SAIEE'],
      bio: 'Marvelous Ngoatle is a registered Electrical Engineering professional with more than 13 years of specialised experience directing heavy-industrial reliability, asset stewardship, and electrical infrastructure projects across Southern Africa. Having led condition monitoring and reliability transformation initiatives across gold, platinum, and coal mining giants including Anglo American, Glencore, and Harmony Gold, Marvelous specializes in root cause analysis, FMECA failure modeling, ISO 55000 asset management roadmaps, and high-voltage substation and reticulation projects.',
      disciplines: ['Physical Asset Reliability', 'Condition Monitoring', 'Electrical Distribution', 'ISO 55000 Governance'],
    },
    {
      name: 'Thabang Ngoatle',
      role: 'Senior Environmental Specialist & Director',
      image: 'thabang.jpg',
      credentials: ['Pr.Sci.Nat (SACNASP)', 'B.Sc Hons Environmental Science & Hydrogeology', 'Environmental Auditor', 'IAH Member'],
      bio: 'Thabang Ngoatle is a SACNASP-registered Professional Natural Scientist with over a decade of hands-on expertise in environmental compliance, hydrogeological investigation, and statutory resource licensing. Thabang has successfully directed comprehensive Water Use Licence Applications (WULA), Environmental Impact Assessments (EIA), Integrated Water & Waste Management Plans (IWWMP), and groundwater geophysics programs for municipal bulk water authorities and multinational resource extractors.',
      disciplines: ['Hydrogeology & Geophysics', 'Water Resource Licensing', 'Environmental Audits & ECO', 'Mine Rehabilitation'],
    },
  ];

  return (
    <main className="lead-page detail-page">
      {/* ============ PAGE HERO ============ */}
      <section className="svc-hero">
        <div className="svc-hero-grid-bg" aria-hidden="true"></div>
        <CADPlotter />

        <div className="wrap">
          <div className="svc-hero-top label">
            <span>GOVERNANCE & LEADERSHIP</span>
            <span className="dot" aria-hidden="true"></span>
            <span>STATUTORY SIGN-OFF</span>
          </div>
          <h1 className="svc-hero-title">Practice Leadership</h1>
          <p className="lead svc-hero-sub">
            Accountable engineering requires certified, statutory professionals. Our practice is
            personally directed by registered engineers and scientists who take direct legal and
            ethical responsibility for every specification, blueprint, and environmental report.
          </p>
        </div>

        <div className="hero-base label">
          <span>COUNCILS: ECSA &middot; SACNASP &middot; SAIEE</span>
          <span>CODE OF PROFESSIONAL CONDUCT</span>
          <span>REV 1.8</span>
        </div>
      </section>

      {/* ============ DIRECTORS IN-DEPTH ============ */}
      <section className="detail-body-section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {leadershipBiographies.map((leader, idx) => (
            <div
              key={leader.name}
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '380px 1fr' : '1fr 380px',
                gap: '56px',
                alignItems: 'center',
                background: 'var(--grey)',
                borderLeft: '4px solid var(--btn-green)',
                padding: '48px',
                borderRadius: '4px',
              }}
            >
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 16px 36px -12px rgba(15,27,24,0.3)' }}>
                  <img
                    src={`/assets/images/${leader.image}`}
                    alt={leader.name}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '1/1' }}
                  />
                  <div style={{ background: 'var(--slate)', color: '#fff', padding: '16px 20px' }}>
                    <span className="num" style={{ fontSize: '12px', color: 'var(--brand-light)', letterSpacing: '0.1em' }}>
                      REGISTRATION
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '13px', fontWeight: 600 }}>
                      {leader.credentials[0]}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <span className="label" style={{ color: 'var(--brand)', marginBottom: '8px', display: 'block' }}>
                  EXECUTIVE PROFILE
                </span>
                <h2 style={{ fontSize: '32px', color: 'var(--ink)', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
                  {leader.name}
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--btn-green-dark)', fontWeight: 600, marginBottom: '20px' }}>
                  {leader.role}
                </p>

                <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#3C4A45', marginBottom: '24px' }}>
                  {leader.bio}
                </p>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', display: 'block', marginBottom: '10px' }}>
                    Professional Qualifications & Affiliations
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {leader.credentials.map((cred, i) => (
                      <span key={i} className="side-chip" style={{ fontSize: '13px', background: '#fff' }}>
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', display: 'block', marginBottom: '10px' }}>
                    Practice Focus Areas
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {leader.disciplines.map((disc, i) => (
                      <span key={i} className="side-chip num" style={{ fontSize: '13px', background: '#fff', borderLeft: '2px solid var(--btn-green)' }}>
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ STATUTORY GOVERNANCE ============ */}
      <section className="detail-body-section" style={{ background: '#fff', paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <h2>Statutory Code of Professional Conduct</h2>
            <p>Our commitment to engineering integrity, environmental stewardship, and public safety.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            <div style={{ background: 'var(--grey)', padding: '36px 32px', borderLeft: '3px solid var(--brand)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                ECSA Code of Practice
              </h3>
              <p style={{ fontSize: '15px', color: '#47564F', lineHeight: 1.65 }}>
                All engineering drawings, single-line diagrams, and substation specifications are
                delivered strictly in compliance with ECSA professional rules, SANS standards, and
                statutory occupational health and safety guidelines.
              </p>
            </div>

            <div style={{ background: 'var(--grey)', padding: '36px 32px', borderLeft: '3px solid var(--brand)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                SACNASP Scientific Integrity
              </h3>
              <p style={{ fontSize: '15px', color: '#47564F', lineHeight: 1.65 }}>
                Environmental assessments, hydrogeological models, and waste classifications are
                conducted with uncompromising scientific rigour, adhering to peer-reviewed
                protocols and National Water Act standards.
              </p>
            </div>

            <div style={{ background: 'var(--grey)', padding: '36px 32px', borderLeft: '3px solid var(--brand)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                Independent Quality Audits
              </h3>
              <p style={{ fontSize: '15px', color: '#47564F', lineHeight: 1.65 }}>
                We maintain dual-sign-off protocols on all critical infrastructure deliverables,
                ensuring every client receives vetted, defect-free, and audit-ready technical
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AFFILIATIONS ============ */}
      <section className="affil">
        <div className="wrap">
          <h2 className="affil-head">Statutory Councils & Institutes</h2>
          <div className="affil-row">
            {affiliationsData.map((aff) => (
              <div key={aff.name} className="affil-card">
                <img src={`/assets/images/${aff.logo}`} alt={aff.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="svc-cta">
        <div className="wrap svc-cta-inner">
          <div>
            <h2>Direct Consultation With Our Directors</h2>
            <p className="svc-cta-sub">
              Schedule an executive engineering consultation to review your technical requirements.
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

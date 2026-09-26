import React, { useEffect } from 'react';
import { affiliationsData, leadershipTeamData } from '../data/marvethabi';
import { CADPlotter } from './CADPlotter';

interface LeadershipPageProps {
  onNavigate: (path: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
            <span>DIRECTORS & SPECIALISTS</span>
            <span className="dot" aria-hidden="true"></span>
            <span>STATUTORY SIGN-OFF</span>
          </div>
          <h1 className="svc-hero-title">Practice Leadership & Team</h1>
          <p className="lead svc-hero-sub">
            Accountable engineering requires certified, statutory professionals. Our practice is
            personally directed by registered engineers, natural scientists, and international
            business development leaders who take direct responsibility for every deliverable.
          </p>
        </div>

        <div className="hero-base label">
          <span>COUNCILS: ECSA &middot; SACNASP &middot; SAMTRAC</span>
          <span>REGIONAL FOOTPRINT: SOUTH AFRICA &middot; DRC</span>
          <span>REV 2.0</span>
        </div>
      </section>

      {/* ============ DIRECTORS IN-DEPTH ============ */}
      <section className="detail-body-section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {leadershipTeamData.map((leader, idx) => (
            <div
              key={leader.name}
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '360px 1fr' : '1fr 360px',
                gap: '52px',
                alignItems: 'start',
                background: 'var(--grey)',
                borderLeft: '4px solid var(--btn-green)',
                padding: '48px 40px',
                borderRadius: '4px',
              }}
            >
              {/* Leader Photo & Registration Box */}
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    boxShadow: '0 16px 36px -12px rgba(15,27,24,0.3)',
                    background: '#fff',
                  }}
                >
                  <img
                    src={`/assets/images/${leader.image}?v=2`}
                    alt={leader.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      aspectRatio: '1/1',
                    }}
                  />
                  <div style={{ background: 'var(--slate)', color: '#fff', padding: '16px 20px' }}>
                    <span
                      className="num"
                      style={{ fontSize: '11px', color: 'var(--brand-light)', letterSpacing: '0.1em' }}
                    >
                      STATUTORY STANDING
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                      {leader.primaryRegistration}
                    </p>
                  </div>
                </div>

                {/* Profile Outcomes / Positioning */}
                <div
                  style={{
                    marginTop: '20px',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    padding: '20px',
                    borderRadius: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Profile Outcomes & Impact
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {leader.outcomes.map((out, i) => (
                      <span
                        key={i}
                        className="side-chip"
                        style={{
                          fontSize: '11px',
                          background: 'var(--grey)',
                          color: 'var(--btn-green-dark)',
                          fontWeight: 600,
                        }}
                      >
                        &#10003; {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio & Credentials Content */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <span
                  className="label"
                  style={{ color: 'var(--brand)', marginBottom: '8px', display: 'block' }}
                >
                  DIRECTOR PROFILE &middot; NO. 0{idx + 1}
                </span>
                <h2
                  style={{
                    fontSize: '32px',
                    color: 'var(--ink)',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {leader.name}
                </h2>
                <p
                  style={{
                    fontSize: '17px',
                    color: 'var(--btn-green-dark)',
                    fontWeight: 700,
                    marginBottom: '20px',
                  }}
                >
                  {leader.role}
                </p>

                <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#3C4A45', marginBottom: '24px' }}>
                  {leader.summary}
                </p>

                {/* Qualifications & Certifications */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Qualifications & Certifications
                  </span>
                  <ul
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '8px',
                      padding: 0,
                      margin: 0,
                      listStyle: 'none',
                    }}
                  >
                    {leader.qualifications.map((q, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '13px',
                          color: '#2B3934',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: '#fff',
                          padding: '6px 12px',
                          border: '1px solid var(--line)',
                          borderRadius: '2px',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            background: 'var(--btn-green)',
                            borderRadius: '50%',
                            flexShrink: 0,
                          }}
                        ></span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Areas of Expertise */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--brand)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Areas of Expertise
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {leader.areasOfExpertise.map((exp, i) => (
                      <span
                        key={i}
                        className="side-chip"
                        style={{ fontSize: '12px', background: '#fff', borderLeft: '2px solid var(--btn-green)' }}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical / Project Experience or Commercial Responsibilities */}
                {leader.projectExperience && (
                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--ink)',
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      Key Project / Technical Experience
                    </span>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        padding: 0,
                        margin: 0,
                        listStyle: 'none',
                        fontSize: '13px',
                        color: '#47564F',
                      }}
                    >
                      {leader.projectExperience.map((exp, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: 'var(--brand)', fontWeight: 700 }}>&bull;</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {leader.commercialResponsibilities && (
                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--ink)',
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      Commercial & Strategic Responsibilities (DRC & Regional)
                    </span>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        padding: 0,
                        margin: 0,
                        listStyle: 'none',
                        fontSize: '13px',
                        color: '#47564F',
                      }}
                    >
                      {leader.commercialResponsibilities.map((resp, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: 'var(--brand)', fontWeight: 700 }}>&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Professional Focus */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--brand)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Professional Focus & Value Commitment
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#3C4A45' }}>
                    {leader.professionalFocus.map((foc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--btn-green)', fontWeight: 700 }}>&#8594;</span>
                        <span>{foc}</span>
                      </div>
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
                Cross-Border Commercial Integrity
              </h3>
              <p style={{ fontSize: '15px', color: '#47564F', lineHeight: 1.65 }}>
                Our DRC and Central African business expansion adheres to the highest standards of
                commercial transparency, international stakeholder engagement, and bilateral legal
                compliance across public and private partnerships.
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
              Schedule an executive engineering consultation to review your technical requirements with our directors.
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


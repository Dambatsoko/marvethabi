import React, { useEffect } from 'react';
import { getDedicatedService, dedicatedServicesData } from '../data/marvethabi';
import { CADPlotter } from './CADPlotter';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = getDedicatedService(slug) || dedicatedServicesData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <main className="detail-page">
      {/* ============ SERVICE HERO ============ */}
      <section className="svc-hero">
        <div className="svc-hero-grid-bg" aria-hidden="true"></div>
        <CADPlotter />

        <div className="wrap">
          <nav className="page-hero-nav" aria-label="Breadcrumb">
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/services');
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Services
            </a>
            <span aria-hidden="true">&rsaquo;</span>
            <span>{service.title}</span>
          </nav>

          <div className="svc-hero-top label">
            <span>DISCIPLINE: {service.ref}</span>
            <span className="dot" aria-hidden="true"></span>
            <span>{service.category}</span>
          </div>

          <h1 className="svc-hero-title">{service.title}</h1>
          <p className="detail-hero-tagline">{service.tagline}</p>
          <p className="lead svc-hero-sub">{service.summary}</p>
        </div>

        <div className="hero-base label">
          <span>DOC NO. {service.docNo}</span>
          <span>STANDARDS-DRIVEN METHODOLOGY</span>
          <span>MARVETHABI CONSULTING ENGINEERS</span>
        </div>
      </section>

      {/* ============ SERVICE CONTENT & SPECIFICATIONS ============ */}
      <section className="detail-body-section">
        <div className="wrap detail-grid">
          {/* Main Content Column */}
          <div className="detail-prose">
            <h2>Engineering Objective & Scope</h2>
            <p>{service.objective}</p>

            <div className="detail-block">
              <h3>Core Capabilities & Focus Areas</h3>
              <p>
                Our services are delivered through structured, standards-based engineering practices
                aligned with operational and regulatory requirements.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '24px' }}>
                {service.capabilities.map((capGroup, idx) => (
                  <div key={idx} style={{ background: 'var(--grey)', padding: '28px 32px', borderLeft: '3px solid var(--btn-green)' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--ink)', marginBottom: '14px' }}>
                      {capGroup.group}
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', color: '#3C4A45' }}>
                      {capGroup.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--btn-green)', fontWeight: 800, marginTop: '-1px' }}>&rsaquo;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {service.intendedOutcomes && service.intendedOutcomes.length > 0 && (
              <div className="detail-block">
                <h3>Intended Outcomes</h3>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginTop: '16px' }}>
                  {service.intendedOutcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      style={{
                        background: 'var(--grey)',
                        padding: '16px 20px',
                        borderLeft: '2px solid var(--brand)',
                        fontSize: '14.5px',
                        color: 'var(--ink)',
                        fontWeight: 500,
                      }}
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="detail-block">
              <h3>Technical Approach & Delivery</h3>
              <p>{service.approach}</p>
            </div>
          </div>

          {/* Technical Sidebar */}
          <aside className="detail-sidebar" aria-label="Technical Specifications">
            <div className="side-card">
              <h4>Governing Standards & Protocols</h4>
              <div className="side-chips">
                {service.standards.map((std, i) => (
                  <span key={i} className="side-chip num" style={{ fontSize: '13px', background: '#fff' }}>
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div className="side-card">
              <h4>Applicable Sectors</h4>
              <div className="side-chips">
                {service.sectors.map((sec, i) => (
                  <span key={i} className="side-chip" style={{ fontSize: '13px' }}>
                    {sec}
                  </span>
                ))}
              </div>
            </div>

            <div className="side-card">
              <h4>Engineering Disciplines</h4>
              <div className="side-nav-list">
                {dedicatedServicesData.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="side-nav-item"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/services/${s.slug}`);
                    }}
                    style={{
                      borderColor: s.slug === service.slug ? 'var(--btn-green)' : undefined,
                      fontWeight: s.slug === service.slug ? 700 : undefined,
                    }}
                  >
                    <span>{s.title}</span>
                    <span className="num">{s.ref}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="side-card" style={{ background: 'var(--slate)', color: '#fff', border: 'none' }}>
              <h4 style={{ color: 'var(--brand-light)' }}>Technical Enquiry</h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '20px' }}>
                Discuss your technical scope or statutory compliance requirements directly with our registered professionals.
              </p>
              <a
                href="/contact"
                className="btn btn-brand btn-full"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
              >
                Request Consultation
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ============ FOOTER CTA ============ */}
      <section className="svc-cta">
        <div className="wrap svc-cta-inner">
          <div>
            <h2>Ready to Deploy Technical Expertise?</h2>
            <p className="svc-cta-sub">
              Engage registered ECSA and SACNASP professionals for structured, standards-driven execution.
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

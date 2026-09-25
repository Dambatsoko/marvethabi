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
          <span>SANS / ISO COMPLIANT</span>
          <span>REV 2.4</span>
        </div>
      </section>

      {/* ============ TECHNICAL SPECIFICATION METRICS BAR ============ */}
      <div className="wrap">
        <div className="detail-specs-bar">
          {service.keyStats.map((stat, i) => (
            <div key={i} className="detail-spec-item">
              <span className="detail-spec-label">{stat.label}</span>
              <span className="detail-spec-val num">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ MAIN BODY & SPECIFICATIONS ============ */}
      <section className="detail-body-section">
        <div className="wrap detail-grid">
          {/* Main Content Column */}
          <div className="detail-prose">
            <h2>Engineering Scope & Deliverables</h2>
            <p>
              Delivering high-integrity, standards-aligned engineering solutions tailored
              for public infrastructure, industrial plants, and mining developments across
              South Africa.
            </p>

            <div className="deliv-sections">
              {service.deliverables.map((sec, idx) => (
                <div key={idx} className="detail-block">
                  <h3 className="card-title">{sec.category}</h3>
                  <div className="deliv-grid">
                    {sec.items.map((item, i) => (
                      <div key={i} className="deliv-card">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 4-Phase Methodology */}
            <div className="detail-block">
              <h3>Engineering Methodology & Execution</h3>
              <p>
                Our projects follow a disciplined, standards-driven lifecycle that ensures
                traceability, statutory compliance, and zero defect recurrence.
              </p>
              <div className="method-timeline">
                {service.methodology.map((m) => (
                  <div key={m.phase} className="method-step">
                    <span className="method-no num">{m.phase}</span>
                    <div className="method-content">
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statutory Standards & Protocols */}
            <div className="detail-block">
              <h3>Governing Standards & Regulatory Matrix</h3>
              <div className="side-chips" style={{ marginTop: '16px' }}>
                {service.standards.map((std, i) => (
                  <span key={i} className="side-chip num" style={{ padding: '8px 16px', fontSize: '14px' }}>
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Technical Sidebar */}
          <aside className="detail-sidebar" aria-label="Technical Specifications">
            <div className="side-card">
              <h4>Technical Specifications</h4>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {service.specifications.map((spec, i) => (
                  <div key={i}>
                    <dt className="detail-spec-label">{spec.label}</dt>
                    <dd style={{ marginTop: '4px', fontSize: '14px', color: '#16211E', fontWeight: 500 }}>
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="side-card">
              <h4>Applicable Sectors</h4>
              <div className="side-chips">
                {service.sectors.map((sec, i) => (
                  <span key={i} className="side-chip">
                    {sec}
                  </span>
                ))}
              </div>
            </div>

            <div className="side-card">
              <h4>All Engineering Disciplines</h4>
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
              <h4 style={{ color: 'var(--brand-light)' }}>Engage an Engineer</h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '20px' }}>
                Discuss your infrastructure requirement directly with our registered principal engineers.
              </p>
              <a
                href="/contact"
                className="btn btn-brand btn-full"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
              >
                Request Scoping Call
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
              Receive a structured project proposal and compliance specification from registered ECSA/SACNASP professionals.
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

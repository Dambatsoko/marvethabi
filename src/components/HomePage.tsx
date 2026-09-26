import React, { useState, useEffect, useRef } from 'react';
import {
  servicesData,
  clientsData,
  industriesData,
  whyData,
  processData,
  capabilitiesData,
  getServiceSlugForRef,
} from '../data/marvethabi';
import { SvcIcon } from './ServiceIcons';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Capabilities rotator state
  const [activeCap, setActiveCap] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Animated counters
  const [counts, setCounts] = useState({
    blackOwned: 0,
    experience: 0,
    projects: 0,
    disciplines: 0,
  });
  const statsRef = useRef<HTMLElement>(null);
  const countersStarted = useRef(false);

  // Setup scroll reveals
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length && 'IntersectionObserver' in window && !reduced) {
      const ro = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
              ro.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      reveals.forEach((el) => ro.observe(el));
      return () => ro.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add('on'));
    }
  }, []);

  // Capabilities auto timer
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const timer = setInterval(() => {
      setActiveCap((prev) => (prev + 1) % capabilitiesData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Animated counters observer
  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const animateCounters = () => {
      if (countersStarted.current) return;
      countersStarted.current = true;

      const dur = 1800;
      const t0 = performance.now();

      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);

        setCounts({
          blackOwned: Math.round(100 * ease),
          experience: Math.round(13 * ease),
          projects: Math.round(100 * ease),
          disciplines: Math.round(3 * ease),
        });

        if (p < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const co = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          co.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    co.observe(statsEl);

    return () => co.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormStatus('error');
      return;
    }
    // Simulate instantaneous enquiry logging
    setFormStatus('success');
    setFormData({
      name: '',
      org: '',
      email: '',
      phone: '',
      service: '',
      details: '',
    });
  };

  const capFigNumber = String(activeCap + 1).padStart(2, '0');

  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-photo" aria-hidden="true"></div>
        <div className="hero-photo-grey" aria-hidden="true"></div>
        <div className="hero-fade" aria-hidden="true"></div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-reg label">
              <span>ECSA Registered</span>
              <span className="dot" aria-hidden="true"></span>
              <span>SACNASP Registered</span>
              <span className="dot" aria-hidden="true"></span>
              <span>CSD: Active</span>
            </div>
            <h1 className="hero-title">Engineering Solutions That Build South Africa</h1>
            <p className="hero-sub lead">
              Delivering specialist Reliability Engineering, Asset Management, Electrical
              Engineering and Geo-Environmental solutions for government, municipalities,
              mining, energy and industrial sectors.
            </p>
            <div className="hero-cta">
              <a
                href="/services"
                className="btn btn-brand"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('/services');
                  } else {
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="btn btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('/contact');
                  } else {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Consultation
              </a>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <div className="bp-wrap">
              <svg viewBox="0 0 520 560" className="bp-svg">
                <defs>
                  <pattern id="bpGrid" width="26" height="26" patternUnits="userSpaceOnUse">
                    <path
                      d="M 26 0 L 0 0 0 26"
                      fill="none"
                      stroke="rgba(94,158,139,0.22)"
                      strokeWidth="0.6"
                    />
                  </pattern>
                  <pattern id="bpGridBig" width="130" height="130" patternUnits="userSpaceOnUse">
                    <path
                      d="M 130 0 L 0 0 0 130"
                      fill="none"
                      stroke="rgba(94,158,139,0.4)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="520" height="560" fill="url(#bpGrid)" className="bp-drift" />
                <rect width="520" height="560" fill="url(#bpGridBig)" />
                <g stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" fill="none" className="bp-draw">
                  <path d="M60 80 H460" />
                  <path d="M120 80 V150" />
                  <circle cx="120" cy="172" r="22" />
                  <circle cx="120" cy="205" r="22" />
                  <path d="M120 227 V300 H260" />
                  <path d="M320 80 V150" />
                  <circle cx="320" cy="172" r="22" />
                  <circle cx="320" cy="205" r="22" />
                  <path d="M320 227 V300 H260 V380" />
                  <path d="M200 380 H320" />
                  <path d="M220 380 V430 M260 380 V430 M300 380 V430" />
                  <path d="M205 430 H235 M245 430 H275 M285 430 H315" />
                  <path d="M60 80 V60 M460 80 V60" />
                  <path d="M400 80 V120 L420 140 M400 140 V180" strokeDasharray="4 5" />
                </g>
                <g fill="rgba(94,158,139,1)">
                  <circle cx="120" cy="80" r="3.5" className="bp-node" />
                  <circle cx="320" cy="80" r="3.5" className="bp-node d2" />
                  <circle cx="260" cy="300" r="3.5" className="bp-node d3" />
                </g>
                <g className="bp-labels" fontSize="10" fill="rgba(255,255,255,0.45)">
                  <text x="64" y="52">132kV BUS A</text>
                  <text x="352" y="196">TRF-02</text>
                  <text x="330" y="452">11kV DIST</text>
                  <text x="404" y="200">NEC-R</text>
                </g>
              </svg>
            </div>
            <div className="float-stats">
              <div className="fstat">
                <span className="num fstat-v">13+</span>
                <span className="fstat-l">Years Experience</span>
              </div>
              <div className="fstat">
                <span className="num fstat-v">Level 1</span>
                <span className="fstat-l">B-BBEE Contributor</span>
              </div>
              <div className="fstat">
                <span className="num fstat-v">100%</span>
                <span className="fstat-l">Black Owned</span>
              </div>
              <div className="fstat">
                <span className="num fstat-v">ISO55000</span>
                <span className="fstat-l">Asset Specialists</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-base label">
          <span>25.7479&deg; S, 28.2293&deg; E</span>
          <span>DWG NO. MT-2026-001</span>
          <span>REV C</span>
        </div>
      </section>

      {/* ============ CLIENTS MARQUEE ============ */}
      <section className="cred">
        <div className="wrap">
          <p className="cred-head">Trusted Across Critical Infrastructure</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((pass) => (
              <React.Fragment key={pass}>
                {clientsData.map((client, idx) => (
                  <span
                    key={`${pass}-${idx}`}
                    className="marquee-item"
                    aria-hidden={pass === 1 ? 'true' : undefined}
                  >
                    <img
                      src={`/assets/images/${client.logo}`}
                      alt={pass === 0 ? client.name : ''}
                      loading="lazy"
                    />
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats" ref={statsRef}>
        <div className="stats-grid-bg" aria-hidden="true"></div>
        <div className="wrap stats-row">
          <div className="stat">
            <span className="num stat-v">{counts.blackOwned}%</span>
            <span className="stat-l">Black Owned</span>
          </div>
          <div className="stat">
            <span className="num stat-v">Level 1</span>
            <span className="stat-l">B-BBEE</span>
          </div>
          <div className="stat">
            <span className="num stat-v">{counts.experience}+</span>
            <span className="stat-l">Years Experience</span>
          </div>
          <div className="stat">
            <span className="num stat-v">{counts.projects}+</span>
            <span className="stat-l">Projects</span>
          </div>
          <div className="stat">
            <span className="num stat-v">{counts.disciplines}</span>
            <span className="stat-l">Core Engineering Disciplines</span>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="reveal">
            <div className="about-frame">
              <img
                src="/assets/images/about.jpg"
                alt="MarveThabi engineer testing an electrical distribution board"
                className="about-img"
                loading="lazy"
              />
              <div className="about-badge">
                <span className="num">EST. 2013</span>
                <span>Multidisciplinary Consultancy</span>
              </div>
            </div>
          </div>
          <div className="reveal r-delay-1">
            <h2>Our Story</h2>
            <p className="lead">
              MarveThabi Consulting Engineers is a multidisciplinary South African engineering
              consultancy delivering sustainable engineering solutions across the public and
              private sectors.
            </p>
            <p>
              As a Level 1 B-BBEE contributor and 100% black-owned business, the company
              combines technical excellence with transformation, providing specialised
              expertise in Reliability Engineering, Asset Management, Electrical Engineering
              and Geo-Environmental Management.
            </p>
            <div className="about-regs">
              <span className="num reg-chip">ECSA</span>
              <span className="num reg-chip">SACNASP</span>
              <span className="num reg-chip">ISO55000</span>
              <span className="num reg-chip">CIDB</span>
            </div>
            <a
              href="/about"
              className="btn btn-dark"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('/about');
                }
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Engineering Services</h2>
            <p>Four specialist disciplines, one integrated consultancy.</p>
          </div>
          <div className="svc-grid">
            {servicesData.map((svc, i) => (
              <article key={svc.ref} className={`svc-card reveal r-delay-${i}`}>
                <div className="svc-top">
                  <SvcIcon name={svc.icon} />
                  <span className="num svc-ref">{svc.ref}</span>
                </div>
                <h3 className="card-title">{svc.title}</h3>
                <ul>
                  {svc.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a
                  href={`/services/${getServiceSlugForRef(svc.ref)}`}
                  className="sline-more-btn"
                  style={{ marginTop: '16px', position: 'relative', zIndex: 2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate(`/services/${getServiceSlugForRef(svc.ref)}`);
                    }
                  }}
                >
                  Read More
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <svg className="svc-bp" viewBox="0 0 300 60" aria-hidden="true">
                  <path
                    d="M0 50 H60 V20 H120 V50 H180 L200 30 H260 V50 H300"
                    fill="none"
                    stroke="#336659"
                    strokeWidth="1.4"
                  />
                  <circle cx="60" cy="50" r="3" fill="#336659" />
                  <circle cx="180" cy="50" r="3" fill="#336659" />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="industries" id="industries">
        <div className="ind-bg" aria-hidden="true"></div>
        <div className="wrap ind-content">
          <div className="sec-head sec-head-light reveal">
            <h2>Industries We Serve</h2>
            <p>Specialist support for the sectors that keep the country running. Click any sector to see where our services fit.</p>
          </div>
          <div className="ind-grid">
            {industriesData.map((ind, i) => (
              <a
                key={ind.name}
                href={`/industries/${ind.slug}`}
                className={`ind-card ind-card-link reveal r-delay-${i % 4}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate(`/industries/${ind.slug}`);
                  }
                }}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.25s ease, background 0.25s ease, border-color 0.25s ease',
                }}
                title={`Explore how MarveThabi serves the ${ind.name} sector`}
              >
                <svg viewBox="0 0 48 48" className="ind-icon" aria-hidden="true">
                  <path d={ind.path} fill="none" />
                </svg>
                <span className="card-title" style={{ marginTop: '12px' }}>{ind.name}</span>
                <span
                  style={{
                    fontSize: '11px',
                    color: 'var(--brand-light, #5e9e8b)',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    marginTop: '8px',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Where We Fit &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="why">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Why Choose Us</h2>
          </div>
          <div className="why-grid">
            {whyData.map((card, i) => (
              <div key={card.title} className={`why-card reveal r-delay-${i}`}>
                <span className="num why-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="sec-head sec-head-light reveal">
            <h2>Engineering Process</h2>
            <p>A disciplined path from first consultation to long-term support.</p>
          </div>
          <div className="proc-grid">
            {processData.map((step, i) => (
              <div key={step.number} className={`proc-step reveal r-delay-${i % 4}`}>
                <span className="num proc-num">{step.number}</span>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="caps">
        <div className="wrap caps-grid">
          <div className="reveal">
            <div className="caps-visual">
              {capabilitiesData.map((capab, i) => (
                <img
                  key={capab.title}
                  src={`/assets/images/${capab.image}`}
                  alt={capab.title}
                  className={`caps-img ${activeCap === i ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
              <span className="num caps-fig" id="caps-fig">
                FIG {capFigNumber} &middot; MT-CAP-0{capFigNumber}
              </span>
            </div>
          </div>
          <div className="caps-copy reveal r-delay-1">
            <h2>Featured Capabilities</h2>
            <div className="caps-tabs" role="tablist">
              {capabilitiesData.map((capab, i) => (
                <button
                  key={capab.title}
                  className={`caps-tab ${activeCap === i ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeCap === i}
                  onClick={() => setActiveCap(i)}
                >
                  <span className="num">{String(i + 1).padStart(2, '0')}</span> {capab.title}
                </button>
              ))}
            </div>
            {capabilitiesData.map((capab, i) => (
              <div
                key={capab.title}
                className={`caps-body ${activeCap === i ? 'active' : ''}`}
              >
                <h3 className="card-title">{capab.title}</h3>
                <p>{capab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="reveal">
            <h2>Start a Project</h2>
            <p className="contact-lead lead">
              From municipal electrification to mine-wide asset strategies, the first step is a
              conversation with a registered engineer.
            </p>
            <div className="contact-block">
              <span className="c-label label">Office</span>
              <p>Unit 68 Saliehout Street, Stenostelma, Annlin, Pretoria 0182</p>
            </div>
            <div className="contact-block">
              <span className="c-label label">Enquiries</span>
              <p className="num">info@marvethabi.co.za</p>
              <p className="num">+27 82 412 3847</p>
              <p className="num">+27 72 834 7953</p>
            </div>
            <div className="contact-block">
              <span className="c-label label">Professional Registrations</span>
              <p className="num regs-line">ECSA &middot; SACNASP &middot; CIDB &middot; CSD</p>
            </div>
          </div>
          <div className="reveal r-delay-1">
            <form className="form-card" onSubmit={handleFormSubmit}>
              {formStatus === 'success' && (
                <p className="form-notice form-notice-ok">
                  Thank you. A registered engineer will respond within one business day.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="form-notice form-notice-err">
                  Your enquiry could not be sent. Please check the required fields and try again.
                </p>
              )}
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="mt_name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Organisation
                  <input
                    type="text"
                    name="mt_org"
                    placeholder="Department, municipality or company"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input
                    type="email"
                    name="mt_email"
                    placeholder="you@organisation.gov.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Phone
                  <input
                    type="tel"
                    name="mt_phone"
                    placeholder="+27"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </label>
              </div>
              <label>
                Service Required
                <select
                  name="mt_service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="" disabled>
                    Select a discipline
                  </option>
                  {servicesData.map((svc) => (
                    <option key={svc.ref} value={svc.title}>
                      {svc.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Project Details
                <textarea
                  name="mt_details"
                  rows={4}
                  placeholder="Scope, location and timeline"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </label>
              <button type="submit" className="btn btn-brand btn-full">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

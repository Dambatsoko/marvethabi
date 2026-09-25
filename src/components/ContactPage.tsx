import React, { useState, useEffect } from 'react';
import { CADPlotter } from './CADPlotter';

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    discipline: 'Reliability Engineering',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    setFormStatus('success');
  };

  return (
    <main className="contact-page detail-page">
      {/* ============ PAGE HERO ============ */}
      <section className="svc-hero">
        <div className="svc-hero-grid-bg" aria-hidden="true"></div>
        <CADPlotter />

        <div className="wrap">
          <div className="svc-hero-top label">
            <span>ENGAGE WITH AN ENGINEER</span>
            <span className="dot" aria-hidden="true"></span>
            <span>HEAD OFFICE & DISPATCH</span>
          </div>
          <h1 className="svc-hero-title">Start a Project</h1>
          <p className="lead svc-hero-sub">
            From municipal electrical reticulation to heavy-industrial reliability and water use
            licensing, speak directly with our registered principal engineers.
          </p>
        </div>

        <div className="hero-base label">
          <span>COORDINATES: 25.7479&deg; S, 28.2293&deg; E</span>
          <span>DISPATCH: GAUTENG & NATIONAL</span>
          <span>RESPONSE: &le; 24 HOURS</span>
        </div>
      </section>

      {/* ============ FORM & DETAILS GRID ============ */}
      <section className="detail-body-section">
        <div className="wrap detail-grid">
          {/* Left Form */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h2>Project Scoping Enquiry</h2>
              <p>
                Complete the technical inquiry below. A registered professional engineer (Pr.Eng /
                Pr.Tech.Eng) or natural scientist (Pr.Sci.Nat) will review your scope and provide a
                formal response within one business day.
              </p>
            </div>

            <form className="form-card" onSubmit={handleSubmit} style={{ background: 'var(--grey)', padding: '40px' }}>
              {formStatus === 'success' && (
                <div
                  style={{
                    background: 'rgba(100,156,8,0.12)',
                    borderLeft: '4px solid var(--btn-green)',
                    padding: '20px 24px',
                    color: 'var(--ink)',
                    marginBottom: '28px',
                    borderRadius: '2px',
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--btn-green-dark)' }}>
                    Enquiry transmitted successfully.
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: '14.5px', color: '#47564F' }}>
                    Thank you, {formData.name}. A registered engineer has received your scope and will
                    respond within one business day.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div
                  style={{
                    background: 'rgba(217,83,79,0.1)',
                    borderLeft: '4px solid #d9534f',
                    padding: '16px 20px',
                    color: '#a94442',
                    marginBottom: '24px',
                    borderRadius: '2px',
                  }}
                >
                  Please ensure Name, Email, and Project Description are completed.
                </div>
              )}

              <div className="form-row">
                <label>
                  <span>Your Full Name *</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Marvelous Ngoatle"
                    required
                  />
                </label>
                <label>
                  <span>Organisation / Department</span>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    placeholder="e.g. Anglo American / City of Ekurhuleni"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Corporate Email *</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.co.za"
                    required
                  />
                </label>
                <label>
                  <span>Telephone / Mobile</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+27 82 000 0000"
                  />
                </label>
              </div>

              <label style={{ display: 'block', marginBottom: '20px' }}>
                <span>Primary Engineering Discipline</span>
                <select
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleInputChange}
                >
                  <option value="Reliability Engineering">Reliability Engineering & Condition Monitoring</option>
                  <option value="Asset Management">Asset Management (ISO 55000 & Registers)</option>
                  <option value="Electrical Engineering">Electrical Engineering (Transmission, Reticulation, Solar)</option>
                  <option value="Geo-Environmental">Geo-Environmental (Hydrogeology, Licences, Rehabilitation)</option>
                  <option value="Multidisciplinary">Multidisciplinary Infrastructure Requirement</option>
                </select>
              </label>

              <label style={{ display: 'block', marginBottom: '28px' }}>
                <span>Project Requirement & Scope Description *</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Outline the operational facility, required standard (ISO/SANS), timeline, and technical objectives..."
                  required
                ></textarea>
              </label>

              <button type="submit" className="btn btn-brand btn-full">
                Transmit Technical Enquiry
              </button>
            </form>
          </div>

          {/* Right Contact Card & Details */}
          <aside className="detail-sidebar" aria-label="Head Office Details">
            <div className="side-card">
              <h4>Head Office Location</h4>
              <p style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.6, marginBottom: '16px' }}>
                Unit 68 Saliehout Street, Stenostelma, Annlin, Pretoria 0182, Gauteng, South Africa
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--btn-green-dark)', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--btn-green)', borderRadius: '50%' }}></span>
                Pretoria East Administrative & Drafting Office
              </div>
            </div>

            <div className="side-card">
              <h4>Direct Telephone Contacts</h4>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <dt className="detail-spec-label">General Enquiries & Reliability Desk</dt>
                  <dd className="num" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginTop: '2px' }}>
                    +27 82 412 3847
                  </dd>
                </div>
                <div>
                  <dt className="detail-spec-label">Environmental & Statutory Licences</dt>
                  <dd className="num" style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginTop: '2px' }}>
                    +27 72 834 7953
                  </dd>
                </div>
                <div>
                  <dt className="detail-spec-label">Official Electronic Mail</dt>
                  <dd className="num" style={{ fontSize: '15px', fontWeight: 600, color: 'var(--brand)', marginTop: '2px' }}>
                    info@marvethabi.co.za
                  </dd>
                </div>
              </dl>
            </div>

            <div className="side-card">
              <h4>Verified Procurement Status</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#47564F' }}>
                <li><strong>B-BBEE:</strong> Level 1 Contributor (135% Recognition)</li>
                <li><strong>Ownership:</strong> 100% Black Owned</li>
                <li><strong>Statutory:</strong> ECSA &middot; SACNASP &middot; CIDB &middot; CSD</li>
                <li><strong>Company Reg:</strong> 2013/000000/07</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

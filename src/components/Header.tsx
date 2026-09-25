import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href.startsWith('/#')) {
      const hash = href.substring(1); // '#about'
      if (currentPath !== '/') {
        onNavigate('/');
        // Wait for page to render then scroll
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href === '/services' || href === '/services/') {
      onNavigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '/') {
      onNavigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`nav ${isScrolled ? 'nav-scrolled' : ''}`} id="site-nav">
      <div className="header-inner">
        {/* Zone 1: Logo — far left */}
        <a
          href="/"
          className="logo"
          aria-label="MarveThabi Consulting Engineers"
          onClick={(e) => handleLinkClick(e, '/')}
        >
          <img src="/assets/images/logo.png" alt="MarveThabi Consulting Engineers" />
        </a>

        {/* Zone 2: Navigation — genuinely centered */}
        <nav
          className={`nav-links navigation ${menuOpen ? 'open' : ''}`}
          id="nav-links"
          aria-label="Primary"
        >
          <a
            href="/services"
            onClick={(e) => handleLinkClick(e, '/services')}
            style={currentPath === '/services' ? { color: 'var(--brand)' } : {}}
          >
            Services
          </a>
          <a href="/#industries" onClick={(e) => handleLinkClick(e, '/#industries')}>
            Industries
          </a>
          <a href="/#about" onClick={(e) => handleLinkClick(e, '/#about')}>
            About
          </a>
          <a href="/#leadership" onClick={(e) => handleLinkClick(e, '/#leadership')}>
            Leadership
          </a>
          <a href="/#process" onClick={(e) => handleLinkClick(e, '/#process')}>
            Process
          </a>
          <a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')}>
            Contact
          </a>
          <a
            href="/#contact"
            className="btn btn-brand btn-sm mobile-nav-cta"
            onClick={(e) => handleLinkClick(e, '/#contact')}
          >
            Request Consultation
          </a>
        </nav>

        {/* Zone 3: Right CTA button */}
        <div className="header-cta">
          <a
            href="/#contact"
            className="btn btn-brand btn-sm header-cta-btn"
            onClick={(e) => handleLinkClick(e, '/#contact')}
          >
            Request Consultation
          </a>
          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-controls="nav-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

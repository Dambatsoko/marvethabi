import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { IndustriesPage } from './components/IndustriesPage';
import { IndustryDetailPage } from './components/IndustryDetailPage';
import { AboutPage } from './components/AboutPage';
import { LeadershipPage } from './components/LeadershipPage';
import { ProcessPage } from './components/ProcessPage';
import { ContactPage } from './components/ContactPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route resolution
  const renderCurrentPage = () => {
    const normalized = currentPath.replace(/\/+$/, '') || '/';

    if (normalized === '/services') {
      return <ServicesPage onNavigate={navigateTo} />;
    }

    if (normalized.startsWith('/services/')) {
      const slug = normalized.replace('/services/', '');
      return <ServiceDetailPage slug={slug} onNavigate={navigateTo} />;
    }

    if (normalized === '/industries') {
      return <IndustriesPage onNavigate={navigateTo} />;
    }

    if (normalized.startsWith('/industries/')) {
      const slug = normalized.replace('/industries/', '');
      return <IndustryDetailPage slug={slug} onNavigate={navigateTo} />;
    }

    if (normalized === '/about') {
      return <AboutPage onNavigate={navigateTo} />;
    }

    if (normalized === '/leadership' || normalized === '/team') {
      return <LeadershipPage onNavigate={navigateTo} />;
    }

    if (normalized === '/process') {
      return <ProcessPage onNavigate={navigateTo} />;
    }

    if (normalized === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }

    // Default to HomePage
    return <HomePage onNavigate={navigateTo} />;
  };

  return (
    <>
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      {renderCurrentPage()}
      <Footer onNavigate={navigateTo} />
    </>
  );
};

export default App;

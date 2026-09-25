import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    return path.startsWith('/services') ? '/services' : '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path.startsWith('/services') ? '/services' : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  return (
    <>
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      {currentPath === '/services' ? (
        <ServicesPage onNavigate={navigateTo} />
      ) : (
        <HomePage />
      )}
      <Footer onNavigate={navigateTo} />
    </>
  );
};

export default App;

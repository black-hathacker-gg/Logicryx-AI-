import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { BackgroundVideo } from './components/BackgroundVideo.tsx';
import { ServicesOverview } from './components/ServicesOverview.tsx';
import { RoiCalculator } from './components/RoiCalculator.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

type Page = 'home' | 'services' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle browser hash navigation if user uses back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (hash === 'home' || hash === 'services' || hash === 'about' || hash === 'contact') {
        setCurrentPage(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white flex flex-col justify-between selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      {/* 
        Persistent Loop Background Video across all pages:
        Keeps running seamlessly without interruption
      */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <BackgroundVideo />
        {/* Subtle darkness gradient overlay for optimal readability over video */}
        <div className="absolute inset-0 bg-black/35 backdrop-brightness-95 pointer-events-none" />
      </div>

      {/* Top Navbar with transparent frosted glass pill */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Pages View */}
      <main className="flex-1 w-full flex flex-col justify-center">
        {/* PAGE 1: HOME (HERO) */}
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            <HeroSection
              onScrollToContact={() => handleNavigate('contact')}
              onScrollDown={() => handleNavigate('services')}
            />
          </div>
        )}

        {/* PAGE 2: SERVICES & PRODUCTS (with Interactive Simulator) */}
        {currentPage === 'services' && (
          <div className="animate-in fade-in duration-300 py-6">
            <ServicesOverview
              onSelectService={() => handleNavigate('contact')}
              onBackToHome={() => handleNavigate('home')}
            />
            <RoiCalculator
              onClaimAudit={() => handleNavigate('contact')}
            />
          </div>
        )}

        {/* PAGE 3: ABOUT LOGICRYX */}
        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-300 py-6">
            <AboutSection
              onBackToHome={() => handleNavigate('home')}
              onNavigateToContact={() => handleNavigate('contact')}
            />
          </div>
        )}

        {/* PAGE 4: CONTACT & WEB3FORM */}
        {currentPage === 'contact' && (
          <div className="animate-in fade-in duration-300 py-6">
            <ContactSection
              onBackToHome={() => handleNavigate('home')}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onScrollTop={handleScrollTop}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

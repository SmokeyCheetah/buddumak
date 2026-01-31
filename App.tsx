import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ReviewSection from './components/ReviewSection';
import LocationSection from './components/LocationSection';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Language>('en');

  const t = TRANSLATIONS[lang];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navbar 
        onNavigate={scrollToSection} 
        activeSection={activeSection} 
        lang={lang} 
        setLang={setLang} 
        t={t.nav}
      />
      
      <main>
        <Hero onExplore={() => scrollToSection('menu')} t={t.hero} />
        <MenuSection lang={lang} t={t.menu} />
        <ReviewSection t={t.reviews} />
        <LocationSection t={t.location} />
      </main>

      <footer className="bg-black py-8 border-t border-neutral-800 text-center">
        <p className="text-neutral-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Buddumak Frankfurt. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
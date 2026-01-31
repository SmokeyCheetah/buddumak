import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Globe } from 'lucide-react';
import { Language, Translation } from '../types';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.menu, id: 'menu' },
    { name: t.reviews, id: 'reviews' },
    { name: t.location, id: 'location' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'de' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl md:text-3xl font-serif font-bold text-amber-500 cursor-pointer tracking-wider"
          onClick={() => handleNavClick('home')}
        >
          BUDDUMAK
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                activeSection === link.id ? 'text-amber-500 border-b border-amber-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          {/* Language Switcher Desktop */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors border border-gray-700 px-3 py-1 rounded-full text-xs uppercase tracking-wider"
          >
            <Globe size={14} />
            <span>{lang === 'en' ? 'DE' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           {/* Language Switcher Mobile */}
           <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-white border border-gray-700 px-2 py-1 rounded-full text-xs uppercase tracking-wider"
          >
            <span className="font-bold">{lang.toUpperCase()}</span>
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile MenuOverlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 flex flex-col items-center py-8 space-y-6 animate-fadeIn">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg tracking-widest uppercase ${
                activeSection === link.id ? 'text-amber-500' : 'text-gray-300'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
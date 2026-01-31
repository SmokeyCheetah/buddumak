import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Translation } from '../types';

interface HeroProps {
  onExplore: () => void;
  t: Translation['hero'];
}

const Hero: React.FC<HeroProps> = ({ onExplore, t }) => {
  return (
    <div id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-amber-500 tracking-[0.2em] text-sm md:text-base mb-4 uppercase animate-pulse">
          {t.subtitle}
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight">
          {t.titleStart} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">{t.titleEnd}</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          {t.description}
        </p>
        <button 
          onClick={onExplore}
          className="px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
        >
          {t.cta}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Language, Translation } from '../types';

interface MenuSectionProps {
  lang: Language;
  t: Translation['menu'];
}

const MenuSection: React.FC<MenuSectionProps> = ({ lang, t }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'starter', label: t.categories.starter },
    { id: 'main', label: t.categories.main },
    { id: 'soup', label: t.categories.soup },
    { id: 'dessert', label: t.categories.dessert },
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-neutral-900 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">{t.subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wider uppercase ${
                activeCategory === cat.id
                  ? 'bg-amber-600 border-amber-600 text-white'
                  : 'border-neutral-700 text-neutral-400 hover:border-amber-500 hover:text-amber-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative bg-neutral-800 rounded-sm overflow-hidden hover:shadow-xl hover:shadow-amber-900/20 transition-all duration-500">
              {/* Image / Placeholder */}
              <div className="h-64 overflow-hidden bg-neutral-900">
                {item.image ? (
                    <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center border-b border-neutral-700/50">
                        <span className="text-neutral-700 font-serif italic tracking-wider text-sm">{t.comingSoon}</span>
                    </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl text-white group-hover:text-amber-500 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-amber-500 font-serif text-xl">€{item.price}</span>
                 </div>
                 <h4 className="text-gray-500 text-sm mb-3 font-medium">{item.koreanName}</h4>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[40px]">
                   {item.description[lang]}
                 </p>
                 
                 {/* Badges */}
                 <div className="flex gap-2">
                    {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                      <span className="text-xs text-red-400 border border-red-900/50 bg-red-900/20 px-2 py-1 rounded">
                        {Array(item.spicyLevel).fill('🌶️').join('')} {t.spicy}
                      </span>
                    )}
                    <span className="text-xs text-neutral-400 border border-neutral-700 px-2 py-1 rounded uppercase">
                      {t.categories[item.category] || item.category}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react';
import { RESTAURANT_COORDS } from '../constants';
import { Translation } from '../types';

interface LocationSectionProps {
  t: Translation['location'];
}

const LocationSection: React.FC<LocationSectionProps> = ({ t }) => {
  return (
    <section id="location" className="relative py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-8">
            <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">{t.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    {t.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-amber-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t.address}</h4>
                            <p className="text-gray-400 text-sm">Alt Zeilsheim 27<br/>65931 Frankfurt am Main</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-amber-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t.phone}</h4>
                            <p className="text-gray-400 text-sm">+49 69 90559151</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <Clock className="text-amber-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t.hours}</h4>
                            {t.schedule.map((line, index) => (
                              <p key={index} className={`text-gray-400 text-sm ${line === "" ? "h-2" : ""}`}>{line}</p>
                            ))}
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="text-amber-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t.reservations}</h4>
                            <p className="text-gray-400 text-sm">booking@buddumak.de</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Instagram className="text-amber-500 mt-1 shrink-0" />
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{t.instagram}</h4>
                            <a 
                              href="https://www.instagram.com/buddu_mak" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-400 text-sm hover:text-amber-500 transition-colors"
                            >
                              @buddu_mak
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <button className="w-full md:w-auto bg-amber-600 text-white px-8 py-4 rounded-sm hover:bg-amber-700 transition-colors uppercase tracking-widest text-sm font-semibold">
                    {t.cta}
                </button>
            </div>
        </div>

        {/* Map */}
        <div className="h-[400px] lg:h-auto w-full bg-neutral-800 rounded-sm overflow-hidden border border-neutral-800 relative group">
            <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src={`https://maps.google.com/maps?q=${RESTAURANT_COORDS.lat},${RESTAURANT_COORDS.lng}&hl=en&z=15&output=embed`}
                className="filter grayscale contrast-125 opacity-80 hover:opacity-100 hover:filter-none transition-all duration-700"
                title="Buddumak Location"
            >
            </iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-neutral-900/50"></div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
import React, { useState } from 'react';
import { Star, User, BookOpen, ExternalLink } from 'lucide-react';
import { REVIEWS, GOOGLE_MAPS_LINK } from '../constants';
import { Translation } from '../types';

interface ReviewSectionProps {
  t: Translation['reviews'];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'guide'>('reviews');

  return (
    <section id="reviews" className="py-24 bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">{t.title}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
            <div className="bg-neutral-900 p-1 rounded-full border border-neutral-800 inline-flex">
                <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'reviews' ? 'bg-neutral-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {t.tabReviews}
                </button>
                <button 
                    onClick={() => setActiveTab('guide')}
                    className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'guide' ? 'bg-neutral-800 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {t.tabGuide}
                </button>
            </div>
        </div>

        {activeTab === 'reviews' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reviews List */}
            {REVIEWS.map((review) => (
                <a 
                  key={review.id} 
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 p-8 rounded-sm border border-neutral-800 relative hover:border-amber-900/50 transition-colors group block"
                >
                    <div className="absolute top-0 right-0 p-4 text-neutral-800 group-hover:text-amber-900/40 transition-colors">
                        <ExternalLink size={20} />
                    </div>
                    <div className="flex gap-1 text-amber-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-neutral-700"} />
                        ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="mt-auto">
                        <h4 className="text-white font-serif text-lg">{review.author}</h4>
                        <p className="text-gray-600 text-xs mt-1">{review.date}</p>
                    </div>
                </a>
            ))}
            
            {/* Simple Mock Form Link */}
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="bg-neutral-800/50 p-8 rounded-sm border border-dashed border-neutral-700 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-neutral-800 transition-colors">
                <h4 className="text-white font-serif text-xl mb-2">{t.writeReview}</h4>
                <p className="text-gray-400 text-sm mb-6">Google Maps</p>
                <div className="px-6 py-2 border border-gray-500 text-gray-300 group-hover:border-amber-500 group-hover:text-amber-500 transition-colors rounded text-sm uppercase tracking-wider">
                   →
                </div>
            </a>
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-neutral-900 p-8 md:p-12 rounded-sm border border-neutral-800">
                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-amber-500 mb-2">
                        <BookOpen size={24} />
                        <span className="uppercase tracking-widest text-sm font-semibold">{t.guideTitle}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white">{t.guideSubtitle}</h3>
                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        {t.guideContent.map((item, index) => (
                            <p key={index}>
                                <strong className="text-white">{item.title}:</strong> {item.text}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="relative h-64 md:h-full min-h-[300px] rounded overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                        alt="Korean Dining Table" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
import React from 'react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/portfolioData';
import { MessageSquare, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            Client Testimonials
          </h2>
          <p className="text-[#5C4A3E] text-xs sm:text-sm font-light">
            Feedback and reviews from international agencies, dubbing partners, and production managers.
          </p>
        </div>

        {/* Placeholder Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#E8DED0] shadow-md flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#C5A46D]/20 absolute top-4 right-4" />

              <div>
                <div className="flex space-x-1 text-[#C5A46D] mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#5C4A3E] italic font-light leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DED0]">
                <div className="text-xs font-bold text-[#352820]">{t.clientName}</div>
                <div className="text-[11px] text-[#A1814B] font-medium">{t.role} • {t.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Note to Ramsha */}
        <div className="mt-6 p-3 rounded-xl bg-white border border-[#E8DED0] text-center text-xs text-[#5C4A3E] shadow-sm">
          📌 <span className="text-[#352820] font-medium">Editable Section:</span> Real client quotes and recommendations can be updated here as Ramsha collects verified reviews.
        </div>

      </div>
    </section>
  );
};

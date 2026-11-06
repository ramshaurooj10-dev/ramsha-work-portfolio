import React from 'react';
import { BRAND_UGC_SERVICES } from '../data/portfolioData';
import { Megaphone, UserCheck, CheckCircle2, Sparkles, Play, ArrowUpRight } from 'lucide-react';

interface BrandUgcProps {
  onHireClick: () => void;
}

export const BrandUgc: React.FC<BrandUgcProps> = ({ onHireClick }) => {
  const brandMockups = [
    {
      title: 'Skincare & Beauty UGC Spot',
      type: 'UGC-Style Social Video',
      tag: 'TikTok & Reels',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      metric: 'High Conversion UGC'
    },
    {
      title: 'AI Tech Appliance Launch Ad',
      type: 'AI Character & Product Video',
      tag: 'Commercial TVC',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
      metric: 'AI Visual Rendering'
    },
    {
      title: 'Corporate Brand Storytelling',
      type: 'Voice-Over & Narrative Video',
      tag: 'LinkedIn & YouTube',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      metric: 'American Accent VO'
    }
  ];

  return (
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Megaphone className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Commercial & Social Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            Brand & UGC Content
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            "I create AI-powered and voice-driven content for brands, advertisements and social media."
          </p>
        </div>

        {/* 3 Visual Campaign Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandMockups.map((mockup, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden bg-[#352820]">
                <img
                  src={mockup.image}
                  alt={mockup.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#352820]/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#352820] border border-[#E8DED0]">
                  {mockup.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#352820] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono border border-[#C5A46D]/40">
                  {mockup.metric}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                    {mockup.title}
                  </h3>
                  <p className="text-xs text-[#5C4A3E] mt-1">
                    {mockup.type}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DED0] flex items-center justify-between text-xs text-[#5C4A3E]">
                  <span className="flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>AI Visuals + Studio VO</span>
                  </span>
                  <button
                    onClick={onHireClick}
                    className="text-[#A1814B] hover:text-[#352820] font-semibold flex items-center space-x-1 text-xs"
                  >
                    <span>Request Similar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Services List */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-xl">
          <h3 className="text-lg font-bold text-[#352820] mb-4">Commercial Brand Capabilities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {BRAND_UGC_SERVICES.map((srv, i) => (
              <div key={i} className="p-3 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs font-medium text-[#352820] flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                <span className="truncate">{srv}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

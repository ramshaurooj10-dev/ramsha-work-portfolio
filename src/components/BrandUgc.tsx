import React from 'react';
import { BRAND_UGC_SERVICES } from '../data/portfolioData';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { Megaphone, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

interface BrandUgcProps {
  onHireClick: () => void;
}

export const BrandUgc: React.FC<BrandUgcProps> = ({ onHireClick }) => {
  const brandMockups = [
    {
      title: 'Skincare & Beauty UGC Spot',
      type: 'UGC-Style Social Video',
      tag: 'TikTok & Reels',
      image: MEDIA_ASSETS.brandUgcSkincare,
      metric: 'High Conversion UGC'
    },
    {
      title: 'AI Tech Appliance Launch Ad',
      type: 'AI Character & Product Video',
      tag: 'Commercial TVC',
      image: MEDIA_ASSETS.brandTechAppliance,
      metric: 'AI Visual Rendering'
    },
    {
      title: 'Corporate Brand Storytelling',
      type: 'Voice-Over & Narrative Video',
      tag: 'LinkedIn & YouTube',
      image: MEDIA_ASSETS.brandCorporateStory,
      metric: 'American Accent VO'
    }
  ];

  return (
    <section className="py-20 bg-[#141414] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Megaphone className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Commercial & Social Media</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            Brand & UGC Content
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            "I create AI-powered and voice-driven content for brands, advertisements and social media."
          </p>
        </div>

        {/* 3 Visual Campaign Cards with On-Brief Generated Imagery */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandMockups.map((mockup, idx) => (
            <div
              key={idx}
              className="group bg-[#181818] rounded-2xl overflow-hidden border border-[#2C2C2C] hover:border-[#D4AF37]/65 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-[#111111]">
                <img
                  src={mockup.image}
                  alt={mockup.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-[#F5F5F5] border border-[#D4AF37]/40">
                  {mockup.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#111111]/90 text-[#D4AF37] px-2.5 py-1 rounded-md text-[11px] font-bold uppercase font-mono border border-[#D4AF37]/45">
                  {mockup.metric}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                    {mockup.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] mt-1">
                    {mockup.type}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#262626] flex items-center justify-between text-xs">
                  <span className="flex items-center space-x-1.5 text-[#D4D4D4] font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                    <span>AI Visuals + Studio VO</span>
                  </span>
                  <button
                    onClick={onHireClick}
                    className="text-[#D4AF37] hover:text-[#FFFFFF] font-bold flex items-center space-x-1 text-xs cursor-pointer transition-colors"
                  >
                    <span>Request Similar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.25} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Services List — Full Untruncated Pills */}
        <div className="mt-12 bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#2C2C2C] shadow-xl">
          <h3 className="text-lg sm:text-xl font-bold text-[#FFFFFF] mb-5">Commercial Brand Capabilities</h3>
          <div className="flex flex-wrap gap-3">
            {BRAND_UGC_SERVICES.map((srv, i) => (
              <div
                key={i}
                className="px-4 py-2.5 rounded-xl bg-[#202020] border border-[#303030] hover:border-[#D4AF37]/50 text-xs sm:text-sm font-semibold text-[#F5F5F5] flex items-center space-x-2 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                <span>{srv}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

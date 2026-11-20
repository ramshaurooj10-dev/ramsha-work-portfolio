import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';
import { Award, Sparkles, Globe, Layers } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const icons = [Award, Sparkles, Layers, Globe];

  return (
    <section className="relative z-20 py-10 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {QUICK_STATS.map((stat, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="relative group bg-[#181818] rounded-2xl p-6 border border-[#2C2C2C] hover:border-[#D4AF37]/60 shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Bold Gold Icon Tile positioned cleanly above stat value so long labels never clip */}
                  <div className="w-11 h-11 rounded-xl bg-[#222222] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors shadow-sm mb-4">
                    <IconComp className="w-5 h-5" strokeWidth={2.25} />
                  </div>

                  {/* Unified Warm Gold Stat Value with full card width */}
                  <div className="text-2xl sm:text-[26px] xl:text-3xl font-extrabold tracking-tight font-sans text-[#D4AF37] leading-tight break-words">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm font-bold text-[#FFFFFF]">
                    {stat.label}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#CCCCCC] font-normal leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

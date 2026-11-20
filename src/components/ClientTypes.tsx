import React from 'react';
import { CLIENT_TYPES } from '../data/portfolioData';
import {
  Users,
  Building2,
  Film,
  Megaphone,
  GraduationCap,
  Smile,
  Clapperboard,
  Landmark,
  Globe,
  Tv,
  Sparkles,
} from 'lucide-react';

export const ClientTypes: React.FC = () => {
  const icons = [
    Building2,
    Film,
    Megaphone,
    GraduationCap,
    Smile,
    Clapperboard,
    Landmark,
    Globe,
    Tv,
    Sparkles,
  ];

  return (
    <section className="py-20 bg-[#111111] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Target Sectors & Collaborators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            Who I Work With
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            Tailoring voice performance, dubbing coordination, and AI media production for diverse industry sectors.
          </p>
        </div>

        {/* 10 Client Categories Grid with Bold Gold Icons on Dark Tiles */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_TYPES.map((ct, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#181818] rounded-xl p-5 border border-[#2C2C2C] hover:border-[#D4AF37]/65 shadow-md transition-all flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors mb-3.5">
                    <IconComp className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-sm font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {ct.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#CCCCCC] font-normal leading-relaxed">
                    {ct.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

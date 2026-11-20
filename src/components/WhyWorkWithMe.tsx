import React from 'react';
import { WHY_WORK_WITH_RAMSHA } from '../data/portfolioData';
import { Award, Mic, Layers, Sparkles, Heart, Radio, Globe, Zap } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5', strokeWidth: 2.25 };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Mic': return <Mic {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Radio': return <Radio {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Award {...props} />;
    }
  };

  const pillars = WHY_WORK_WITH_RAMSHA.filter((pillar) => pillar.title !== 'Professional Studio Setup');

  return (
    <section className="py-20 bg-[#111111] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <span>❖</span>
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            Why Work With Me?
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            Bringing 8+ years of voice artistry, dubbing leadership, pedagogical insights, and AI video mastery to your project.
          </p>
        </div>

        {/* Balanced 7-Card Grid (4 on Row 1, 3 Wide on Row 2 = 12 cols each, Zero Empty Bottom-Right Gap) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {pillars.map((pillar, idx) => {
            const isSecondRow = idx >= 4;
            const spanClasses = isSecondRow
              ? 'lg:col-span-4'
              : 'lg:col-span-3';

            return (
              <div
                key={idx}
                className={`${spanClasses} bg-[#181818] rounded-2xl p-6 border border-[#2C2C2C] hover:border-[#D4AF37]/65 shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#CCCCCC] font-normal leading-relaxed">
                    {pillar.desc}
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

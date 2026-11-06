import React from 'react';
import { QUICK_STATS } from '../data/portfolioData';
import { Award, Sparkles, Globe, Layers } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const icons = [Award, Sparkles, Layers, Globe];
  const vibrantThemes = [
    { textGradient: 'from-[#D97706] to-[#F59E0B]', iconBg: 'bg-[#FFFBEB]', iconBorder: 'border-[#FDE68A]', iconColor: 'text-[#D97706]', hoverBorder: 'hover:border-[#D97706]/60' },
    { textGradient: 'from-[#059669] to-[#10B981]', iconBg: 'bg-[#ECFDF5]', iconBorder: 'border-[#A7F3D0]', iconColor: 'text-[#059669]', hoverBorder: 'hover:border-[#059669]/60' },
    { textGradient: 'from-[#2563EB] to-[#3B82F6]', iconBg: 'bg-[#EFF6FF]', iconBorder: 'border-[#BFDBFE]', iconColor: 'text-[#2563EB]', hoverBorder: 'hover:border-[#2563EB]/60' },
    { textGradient: 'from-[#E05A3A] to-[#F97316]', iconBg: 'bg-[#FFF5F2]', iconBorder: 'border-[#FDC5B8]', iconColor: 'text-[#E05A3A]', hoverBorder: 'hover:border-[#E05A3A]/60' },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {QUICK_STATS.map((stat, idx) => {
          const IconComp = icons[idx % icons.length];
          const theme = vibrantThemes[idx % vibrantThemes.length];
          return (
            <div
              key={idx}
              className={`relative group bg-white rounded-2xl p-5 sm:p-6 border border-[#E8DED0] ${theme.hoverBorder} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-bold text-[#352820]">
                    {stat.label}
                  </div>
                </div>
                <div className={`p-2.5 rounded-xl ${theme.iconBg} border ${theme.iconBorder} ${theme.iconColor} group-hover:scale-110 transition-all shadow-sm`}>
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <p className="mt-3 text-[11px] sm:text-xs text-[#5C4A3E] font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

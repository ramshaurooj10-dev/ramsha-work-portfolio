import React from 'react';
import { WHY_WORK_WITH_RAMSHA } from '../data/portfolioData';
import { Award, Mic, Layers, Sparkles, Heart, Radio, Globe, Zap } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Mic': return <Mic className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-amber-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-amber-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="text-[#C5A46D]">❖</span>
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            Why Work With Me?
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            Bringing 8+ years of voice artistry, dubbing leadership, pedagogical insights, and AI video mastery to your project.
          </p>
        </div>

        {/* Core Advantages Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_WORK_WITH_RAMSHA.filter((pillar) => pillar.title !== 'Professional Studio Setup').map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#C5A46D] shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#F6F1E8] w-fit group-hover:bg-[#E8DED0] transition-colors border border-[#E8DED0]">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="mt-4 text-base font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

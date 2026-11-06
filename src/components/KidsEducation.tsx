import React from 'react';
import { KIDS_SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Heart, Sparkles, BookOpen, Smile, CheckCircle2, Music, Volume2 } from 'lucide-react';

interface KidsEducationProps {
  onHireClick: () => void;
}

export const KidsEducation: React.FC<KidsEducationProps> = ({ onHireClick }) => {
  return (
    <section id="kids-education" className="py-20 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      {/* Soft Playful Glow Accent */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#C5A46D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pedagogical ECE Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
              <GraduationCap className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Pedagogical Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
              Children's & Preschool Content
            </h2>

            <div className="p-5 rounded-2xl bg-white border border-[#E8DED0] shadow-md space-y-3">
              <div className="flex items-center space-x-2 text-[#A1814B] font-bold text-sm">
                <Smile className="w-5 h-5 text-[#C5A46D]" />
                <span>Early Childhood Education (ECE) Advantage</span>
              </div>
              <p className="text-[#5C4A3E] text-xs sm:text-sm font-light leading-relaxed">
                "{PERSONAL_INFO.eceHighlight}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E8DED0] flex items-center space-x-3 text-xs text-[#5C4A3E] shadow-sm">
              <Music className="w-5 h-5 text-[#C5A46D] flex-shrink-0" />
              <span>Voice Pacing & Intonation Optimized for Toddlers & Preschoolers</span>
            </div>

            <div>
              <button
                onClick={onHireClick}
                className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#352820] hover:bg-[#271D17] shadow-md transition-all flex items-center space-x-2 border border-[#C5A46D]/40"
              >
                <span>Discuss Children's Project</span>
                <Heart className="w-3.5 h-3.5 fill-current text-[#C5A46D]" />
              </button>
            </div>
          </div>

          {/* Right Column: 10 Preschool & Kids Content Specialties */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8DED0]">
              <div>
                <h3 className="text-xl font-bold text-[#352820]">Educational & Entertainment Formats</h3>
                <p className="text-xs text-[#5C4A3E]">Tailored for YouTube Kids, Preschool Apps, TV & EdTech</p>
              </div>
              <BookOpen className="w-6 h-6 text-[#C5A46D]" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {KIDS_SERVICES.map((service, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] hover:border-[#C5A46D] transition-all flex items-center space-x-3 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DED0] flex items-center justify-center text-[#352820] font-bold text-xs group-hover:bg-[#352820] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-medium text-[#352820] group-hover:text-black transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DED0] text-center">
              <span className="text-[11px] text-[#5C4A3E]">
                ⭐ Ramsha's voice adapts naturally from gentle bedtime storytelling to high-energy character animation.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

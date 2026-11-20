import React from 'react';
import { KIDS_SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { GraduationCap, Heart, BookOpen, Smile, Music, Sparkles } from 'lucide-react';

interface KidsEducationProps {
  onHireClick: () => void;
}

export const KidsEducation: React.FC<KidsEducationProps> = ({ onHireClick }) => {
  return (
    <section id="kids-education" className="py-20 bg-[#111111] relative overflow-hidden border-t border-[#262626]">
      {/* Warm Storybook Amber-Gold Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C9A227]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Pedagogical ECE Highlight + Warm Storybook Illustration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1A14] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              <span>Pedagogical Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
              Children's & Preschool Content
            </h2>

            {/* Child-Friendly Storybook Illustration Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#181612] shadow-xl group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={MEDIA_ASSETS.kidsPreschoolIllustration}
                  alt="Warm children's storybook reading illustration with friendly animals and golden musical notes"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-[#181612]/95 px-4 py-3 border-t border-[#D4AF37]/30 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                  <span className="text-xs font-bold text-[#F5F5F5]">Warm Storybook & Early-Learning Aesthetics</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#D4AF37] shrink-0">ECE Backed</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#181714] border border-[#D4AF37]/30 shadow-md space-y-2.5">
              <div className="flex items-center space-x-2.5 text-[#D4AF37] font-bold text-sm">
                <Smile className="w-5 h-5 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Early Childhood Education (ECE) Advantage</span>
              </div>
              <p className="text-[#E0E0E0] text-xs sm:text-sm font-normal leading-relaxed">
                "{PERSONAL_INFO.eceHighlight}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1A1814] border border-[#2F2B22] flex items-center space-x-3 text-xs sm:text-sm text-[#E5E5E5] font-medium">
              <div className="w-9 h-9 rounded-lg bg-[#242018] border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
                <Music className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              </div>
              <span>Voice Pacing & Intonation Optimized for Toddlers & Preschoolers</span>
            </div>

            <div>
              <button
                onClick={onHireClick}
                className="px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Discuss Children's Project</span>
                <Heart className="w-4 h-4 fill-current text-[#111111]" />
              </button>
            </div>
          </div>

          {/* Right Column: 10 Preschool & Kids Content Specialties */}
          <div className="lg:col-span-7 bg-[#181714] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2C2922]">
              <div>
                <h3 className="text-xl font-bold text-[#FFFFFF]">Educational & Entertainment Formats</h3>
                <p className="text-xs sm:text-sm text-[#CCCCCC] mt-0.5">Tailored for YouTube Kids, Preschool Apps, TV & EdTech</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#242018] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#D4AF37]" strokeWidth={2.25} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {KIDS_SERVICES.map((service, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#1F1D18] border border-[#312D23] hover:border-[#D4AF37]/60 transition-all flex items-center space-x-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#28241A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-extrabold text-xs group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#2C2922] text-center">
              <span className="text-xs sm:text-sm text-[#D4D4D4] font-medium">
                Ramsha's voice adapts naturally from gentle bedtime storytelling to high-energy character animation.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

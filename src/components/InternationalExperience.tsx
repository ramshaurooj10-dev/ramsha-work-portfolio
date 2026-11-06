import React from 'react';
import { TRUSTED_ORGANIZATIONS } from '../data/portfolioData';
import { Globe, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const InternationalExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Global Reach & Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            Trusted Across Borders
          </h2>
          <p className="text-lg font-semibold text-[#A1814B]">
            Voice Over & Content Production Experience Across Multiple Countries
          </p>
          <p className="text-[#5C4A3E] text-xs sm:text-sm font-light">
            Working directly with international bodies, government institutions, global media agencies, and production studios.
          </p>
        </div>

        {/* 11 Organization Elegant Text-Based Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TRUSTED_ORGANIZATIONS.map((org, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-[#E8DED0] hover:border-[#C5A46D] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-[#F6F1E8] border border-[#E8DED0] text-[#C5A46D] group-hover:bg-[#E8DED0] transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#352820] bg-[#E8DED0] px-2 py-0.5 rounded border border-[#D4C6B4]">
                    {org.region}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                  {org.name}
                </h3>
                <span className="text-[11px] text-[#5C4A3E] block mt-0.5 font-medium">
                  {org.type}
                </span>

                {org.description && (
                  <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                    {org.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DED0] flex items-center space-x-1.5 text-[11px] text-[#5C4A3E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                <span>Verified Production Experience</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Rule Constraint */}
        <div className="mt-8 text-center text-xs text-[#5C4A3E] font-light">
          <p>
            * International organizations and countries presented represent verified project and client experience across 8+ years of voice and content production.
          </p>
        </div>

      </div>
    </section>
  );
};

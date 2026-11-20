import React from 'react';
import { TRUSTED_ORGANIZATIONS } from '../data/portfolioData';
import { Globe, CheckCircle2, Award } from 'lucide-react';

interface ClientMeta {
  monogram: string;
  engagementLabel: string;
  featured?: boolean;
}

const CLIENT_META: Record<string, ClientMeta> = {
  'United Nations': {
    monogram: 'UN',
    engagementLabel: 'Humanitarian & Global Outreach Narration',
    featured: true,
  },
  'UNICEF': {
    monogram: 'UNICEF',
    engagementLabel: 'Children’s Health & Education Campaigns',
    featured: true,
  },
  'Ministry of Defence, Pakistan': {
    monogram: 'MoD',
    engagementLabel: 'Official Institutional Documentaries',
  },
  'Sunjok Organization, Bangladesh': {
    monogram: 'SO',
    engagementLabel: 'Cross-Border Educational Voiceover',
  },
  'Voice of Australians Australia': {
    monogram: 'VoA',
    engagementLabel: 'Broadcast Radio & Digital Podcasts',
  },
  'Magna Vox, UK': {
    monogram: 'MV',
    engagementLabel: 'Commercial Dubbing & Character Sync',
  },
  'Big Mouth, New Zealand': {
    monogram: 'BM',
    engagementLabel: 'American Accent Brand Commercials',
  },
  'R&M, Riyadh, Saudi Arabia': {
    monogram: 'R&M',
    engagementLabel: 'Corporate Narrations & Brand Films',
  },
  'MMG Global, Vietnam': {
    monogram: 'MMG',
    engagementLabel: 'Digital Campaigns & AI Video Production',
  },
  'Pakistani Government Projects': {
    monogram: 'GOV',
    engagementLabel: 'National Public Awareness Broadcasts',
  },
  'International Clients & Projects': {
    monogram: 'GLB',
    engagementLabel: 'Worldwide Commercial & E-Learning VO',
  },
};

export const InternationalExperience: React.FC = () => {
  const featuredOrgs = TRUSTED_ORGANIZATIONS.filter((org) => CLIENT_META[org.name]?.featured);
  const partnerOrgs = TRUSTED_ORGANIZATIONS.filter((org) => !CLIENT_META[org.name]?.featured);

  return (
    <section id="experience" className="py-20 bg-[#141414] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Global Reach & Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            Trusted Across Borders
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#D4AF37]">
            Voice Over & Content Production Experience Across Multiple Countries
          </p>
          <p className="text-[#D4D4D4] text-sm font-normal">
            Working directly with international bodies, government institutions, global media agencies, and production studios.
          </p>
        </div>

        {/* Visually Elevated Featured Tier: United Nations & UNICEF */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {featuredOrgs.map((org, idx) => {
            const meta = CLIENT_META[org.name] ?? { monogram: 'INT', engagementLabel: 'Global Media Production' };
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-[#1E1A11] via-[#191712] to-[#151515] rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/60 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/8 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-3.5">
                      {/* Distinct Gold Monogram Emblem */}
                      <div className="min-w-[54px] h-12 px-2.5 rounded-xl bg-[#D4AF37] text-[#111111] font-extrabold text-sm tracking-wider flex items-center justify-center shadow-md shadow-[#D4AF37]/25 font-mono">
                        {meta.monogram}
                      </div>
                      <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D4AF37] bg-[#241F13] px-3 py-1 rounded-full border border-[#D4AF37]/40">
                        <Award className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                        <span>Featured Global Organization</span>
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#E5E5E5] bg-[#222222] px-2.5 py-1 rounded-lg border border-[#333333] hidden sm:inline-block">
                      {org.region}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                    {org.name}
                  </h3>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mt-1">
                    {org.type}
                  </span>

                  {org.description && (
                    <p className="mt-2.5 text-sm text-[#E0E0E0] font-normal leading-relaxed">
                      {org.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-[#D4AF37]/25 flex items-center space-x-2 text-xs font-semibold text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                  <span>{meta.engagementLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remaining 9 International & Government Clients in a Balanced 3x3 Grid */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partnerOrgs.map((org, idx) => {
            const meta = CLIENT_META[org.name] ?? { monogram: 'ORG', engagementLabel: 'Studio Voice & Media Delivery' };
            return (
              <div
                key={idx}
                className="bg-[#181818] rounded-xl p-5 border border-[#2C2C2C] hover:border-[#D4AF37]/60 shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    {/* Distinct Per-Client Monogram Tile */}
                    <div className="min-w-[44px] h-10 px-2 rounded-lg bg-[#222222] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors font-mono font-extrabold text-xs tracking-wider flex items-center justify-center">
                      {meta.monogram}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#D4D4D4] bg-[#222222] px-2.5 py-1 rounded-md border border-[#323232]">
                      {org.region}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                    {org.name}
                  </h3>
                  <span className="text-xs text-[#D4AF37] block mt-0.5 font-semibold">
                    {org.type}
                  </span>

                  {org.description && (
                    <p className="mt-2 text-xs sm:text-sm text-[#CCCCCC] font-normal leading-relaxed">
                      {org.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#262626] flex items-center space-x-2 text-xs font-medium text-[#D4D4D4]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                  <span>{meta.engagementLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote Disclaimer */}
        <div className="mt-8 text-center text-xs sm:text-sm text-[#B8B8B8] font-normal">
          <p>
            * International organizations and countries presented represent verified project and client experience across 8+ years of voice and content production.
          </p>
        </div>

      </div>
    </section>
  );
};

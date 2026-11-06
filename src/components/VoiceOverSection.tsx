import React, { useState } from 'react';
import { PORTFOLIO_DEMOS, PERSONAL_INFO } from '../data/portfolioData';
import { VoiceDemo } from '../types';
import { 
  Mic, 
  Sparkles, 
  Filter, 
  Globe, 
  CheckCircle2, 
  Mail, 
  ArrowRight, 
  Volume2, 
  Radio, 
  Music, 
  BookOpen, 
  PhoneCall, 
  Building2, 
  Award,
  Star,
  ExternalLink,
  ShieldCheck,
  Megaphone,
  Upload
} from 'lucide-react';

interface VoiceOverSectionProps {
  onOpenAdminModal?: () => void;
  onOpenContactModal?: () => void;
}

export const VoiceOverSection: React.FC<VoiceOverSectionProps> = ({
  onOpenAdminModal,
  onOpenContactModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const openDriveLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filters = [
    'All',
    'Urdu',
    'English',
    'American Accent',
    'Commercial',
    'Documentary',
    'Explainer',
    'IVR',
    'Corporate',
    'Poetry'
  ];

  // Filtering logic
  const getFilteredDemos = () => {
    if (selectedFilter === 'All') return PORTFOLIO_DEMOS;

    const lowerFilter = selectedFilter.toLowerCase();

    return PORTFOLIO_DEMOS.filter((demo) => {
      const cat = demo.category.toLowerCase();
      const lang = demo.language.toLowerCase();
      const proj = demo.projectType.toLowerCase();
      const title = demo.title.toLowerCase();
      const accent = demo.accent ? demo.accent.toLowerCase() : '';

      if (lowerFilter === 'urdu') return lang.includes('urdu');
      if (lowerFilter === 'english') return lang === 'english';
      if (lowerFilter === 'american accent') return lang.includes('american') || accent.includes('american');
      if (lowerFilter === 'commercial') return cat.includes('commercial') || cat.includes('ad') || proj.includes('commercial') || proj.includes('tvc');
      if (lowerFilter === 'documentary') return cat.includes('documentary') || proj.includes('documentary') || title.includes('documentary');
      if (lowerFilter === 'explainer') return cat.includes('explainer') || proj.includes('explainer');
      if (lowerFilter === 'ivr') return cat.includes('ivr') || proj.includes('ivr') || title.includes('ivr');
      if (lowerFilter === 'corporate') return cat.includes('corporate') || cat.includes('institutional') || proj.includes('corporate');
      if (lowerFilter === 'poetry') return cat.includes('poetry') || demo.isPoetryStyle || title.includes('poetry');

      return true;
    });
  };

  const filteredDemos = getFilteredDemos();
  const featuredDemos = PORTFOLIO_DEMOS.filter((d) => d.isFeatured);

  const voiceStyles = [
    {
      title: 'Commercial',
      tagline: 'Warm, confident and persuasive',
      desc: 'High-converting tone for TVCs, radio, digital ads and brand stories.',
      icon: Megaphone,
      color: 'from-violet-500/20 to-indigo-500/10 border-violet-500/30 text-violet-300'
    },
    {
      title: 'Documentary',
      tagline: 'Clear, authoritative and storytelling-focused',
      desc: 'Engaging, narrative delivery for television, institutional & historical films.',
      icon: BookOpen,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300'
    },
    {
      title: 'Explainer',
      tagline: 'Friendly, informative and easy to understand',
      desc: 'Paced articulation for app walkthroughs, corporate e-learning and software intros.',
      icon: Sparkles,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300'
    },
    {
      title: 'IVR',
      tagline: 'Clear, precise and professional',
      desc: 'Calm, inviting telephone automated systems, call navigation & voice menus.',
      icon: PhoneCall,
      color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300'
    },
    {
      title: 'Corporate',
      tagline: 'Polished and trustworthy',
      desc: 'Sophisticated presentation voice for annual reports, investor briefs & financial institutions.',
      icon: Building2,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300'
    },
    {
      title: 'Poetry',
      tagline: 'Expressive and emotional',
      desc: 'Nuanced, soulful literary performance highlighting Urdu literature and emotional range.',
      icon: Music,
      color: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-300'
    },
    {
      title: 'American English',
      tagline: 'Natural American accent and delivery',
      desc: 'Authentic US English pronunciation suitable for international campaigns and Western audiences.',
      icon: Globe,
      color: 'from-violet-600/20 to-cyan-500/10 border-violet-400/30 text-violet-200'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#F6F1E8] text-[#352820] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#C5A46D]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[300px] bg-[#E8DED0]/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO HEADER */}
        <div className="text-center max-w-4xl mx-auto space-y-5 pb-12 border-b border-[#E8DED0]">
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm">
              <Mic className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Real Human Voice Showcase</span>
            </span>

            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>8+ Years Experience</span>
            </span>

            <span className="px-3.5 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm">
              <Radio className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Professional Studio Recording</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans uppercase text-[#352820]">
            Hear Ramsha's Voice
          </h1>

          <p className="text-lg sm:text-xl font-bold text-[#A1814B] font-sans tracking-wide">
            Professional Voice Over in Urdu, English & American English
          </p>

          <p className="text-sm sm:text-base text-[#5C4A3E] max-w-3xl mx-auto leading-relaxed font-light">
            "From commercials and documentaries to explainers, IVR, reporting and emotional narration, Ramsha delivers professional human voice performances for brands, organizations, media and digital content."
          </p>

          <div className="inline-flex items-center space-x-2 text-xs text-[#5C4A3E] font-mono bg-white px-4 py-2 rounded-xl border border-[#E8DED0] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
            <span>Personally Performed Recordings — 100% Authentic Human Voice (Not AI-Generated)</span>
          </div>

          {onOpenAdminModal && (
            <div className="pt-2">
              <button
                onClick={onOpenAdminModal}
                className="px-4 py-2 text-xs font-semibold text-[#352820] bg-white hover:bg-[#E8DED0] border border-[#E8DED0] hover:border-[#C5A46D] rounded-xl inline-flex items-center space-x-2 transition-all shadow-sm"
              >
                <Upload className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Manage Audio Demos</span>
              </button>
            </div>
          )}
        </div>

        {/* FEATURED SAMPLES BAR */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-white text-[#C5A46D] border border-[#E8DED0] shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#352820] uppercase tracking-tight">
                  Featured Voice Demos
                </h2>
                <p className="text-xs text-[#5C4A3E]">
                  Key highlight performances representing Urdu, English, and American accent mastery
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-[11px] font-mono text-[#352820] bg-white border border-[#E8DED0] shadow-sm">
              ⭐ Top 3 Featured Audio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDemos.map((demo) => (
              <div
                key={`featured-${demo.id}`}
                className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#C5A46D] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Gradient Ribbon */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C5A46D] to-[#A1814B]" />

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#E8DED0] text-[#352820] border border-[#D4C6B4]">
                      ⭐ Featured
                    </span>

                    <div className="flex items-center space-x-1.5">
                      {demo.accent ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C5A46D]/20 text-[#352820] border border-[#C5A46D]/40">
                          AMERICAN ACCENT
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#A1814B] font-mono font-bold">
                          {demo.language}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors leading-snug">
                    {demo.title}
                  </h3>

                  <div className="mt-1 text-xs font-semibold text-[#A1814B] font-mono">
                    {demo.category}
                  </div>

                  <p className="mt-3 text-xs text-[#5C4A3E] font-light leading-relaxed min-h-[40px]">
                    "{demo.description}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DED0]">
                  <button
                    onClick={() => openDriveLink(demo.driveLink)}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] transition-all shadow-md shadow-[#352820]/20 flex items-center justify-center space-x-2 border border-[#C5A46D]/40 group/btn"
                  >
                    <span>Listen to Sample ↗</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-90 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VOICE CATEGORIES FILTER BAR */}
        <div className="mt-16 pt-12 border-t border-[#E8DED0]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#352820] uppercase tracking-tight flex items-center space-x-2">
                <Volume2 className="w-6 h-6 text-[#C5A46D]" />
                <span>Explore Full Voice Portfolio</span>
              </h2>
              <p className="text-xs text-[#5C4A3E] mt-1">
                Filter by language, accent, or performance style to listen to specific audio samples
              </p>
            </div>

            <div className="text-xs text-[#5C4A3E] font-mono">
              Showing <strong className="text-[#352820] font-bold">{filteredDemos.length}</strong> Voice Samples
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-4 flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
            <div className="p-2 rounded-xl bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
              <Filter className="w-4 h-4" />
            </div>

            {filters.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setSelectedFilter(filterName)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 ${
                  selectedFilter === filterName
                    ? 'bg-[#352820] text-white shadow-md scale-105 border border-[#C5A46D]'
                    : 'bg-white text-[#352820] hover:bg-[#E8DED0] border border-[#E8DED0] shadow-sm'
                }`}
              >
                {filterName === 'American Accent' ? '🇺🇸 American Accent' : filterName}
              </button>
            ))}
          </div>

          {/* VOICE SAMPLES GRID */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDemos.map((demo) => {
              const catLower = demo.category.toLowerCase();
              let badgeColor = 'bg-[#F6F1E8] text-[#352820] border-[#E8DED0]';
              if (catLower.includes('ad') || catLower.includes('tvc') || catLower.includes('commercial')) {
                badgeColor = 'bg-[#FFF5F2] text-[#E05A3A] border-[#FDC5B8]';
              } else if (catLower.includes('doc')) {
                badgeColor = 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]';
              } else if (catLower.includes('explainer')) {
                badgeColor = 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]';
              } else if (catLower.includes('ivr')) {
                badgeColor = 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]';
              } else if (catLower.includes('corporate')) {
                badgeColor = 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]';
              } else if (catLower.includes('poetry')) {
                badgeColor = 'bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]';
              }

              return (
                <div
                  key={demo.id}
                  className="rounded-2xl p-5 border border-[#E8DED0] hover:border-[#C5A46D] bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Badge Header */}
                    <div className="flex items-start justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${badgeColor}`}>
                        {demo.category}
                      </span>

                      <div className="text-right flex flex-col items-end gap-1">
                        {demo.accent ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-gradient-to-r from-[#D97706] to-[#E05A3A] text-white uppercase tracking-wider shadow-sm">
                            AMERICAN ACCENT
                          </span>
                        ) : (
                          <span className={`text-[11px] font-mono font-bold ${demo.language.toLowerCase().includes('urdu') ? 'text-[#059669]' : 'text-[#2563EB]'}`}>
                            {demo.language}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Type */}
                    <h3 className="mt-4 text-base font-bold text-[#352820] group-hover:text-[#D97706] transition-colors leading-snug">
                      {demo.title}
                    </h3>

                    <div className="mt-1 text-[11px] font-mono font-medium text-[#A1814B]">
                      {demo.projectType}
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs text-[#5C4A3E] font-light leading-relaxed line-clamp-3">
                      "{demo.description}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8DED0]">
                    <button
                      onClick={() => openDriveLink(demo.driveLink)}
                      className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] transition-all shadow-md shadow-[#352820]/20 flex items-center justify-center space-x-2 border border-[#E5A93C]/40 group/btn"
                    >
                      <span>Listen to Sample ↗</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-90 group-hover/btn:translate-x-0.5 transition-transform text-[#E5A93C]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VOICE RANGE SECTION: "One Voice. Multiple Styles." */}
        <div className="mt-24 pt-16 border-t border-[#E8DED0]">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Mic className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Vocal Adaptability & Tone Range</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
              One Voice. Multiple Styles.
            </h2>

            <p className="text-sm sm:text-base text-[#5C4A3E] font-light">
              Ramsha adapts her pacing, inflection, tone and emotional resonance to fit your project's exact audience requirement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {voiceStyles.map((style, i) => {
              const IconComponent = style.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-[#C5A46D] inline-block">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#352820] uppercase tracking-wide">
                    {style.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-[#A1814B] font-sans">
                    {style.tagline}
                  </p>

                  <p className="mt-3 text-xs text-[#5C4A3E] font-light leading-relaxed">
                    {style.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROFESSIONAL STUDIO SECTION */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DED0] shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F6F1E8] border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Acoustic Excellence</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#352820] uppercase tracking-tight">
                Studio-Quality Recording
              </h2>

              <p className="text-sm sm:text-base text-[#5C4A3E] font-light leading-relaxed">
                Ramsha records professional voice-over work using a dedicated studio setup designed for clean and high-quality audio delivery.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5C4A3E]">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Acoustically Treated Space</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Pristine Noise Floor</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Broadcast Ready Audio Files</span>
                </span>
              </div>
            </div>

            <div className="bg-[#F6F1E8] p-6 rounded-2xl border border-[#E8DED0] text-center space-y-3 w-full md:w-auto flex-shrink-0">
              <Mic className="w-10 h-10 text-[#C5A46D] mx-auto" />
              <div className="text-xs font-bold text-[#352820] uppercase tracking-wider">Fast Turnaround</div>
              <p className="text-[11px] text-[#5C4A3E] max-w-[200px] mx-auto">
                Clean studio files delivered in high-res WAV or MP3 format with quick revisions.
              </p>
            </div>
          </div>
        </div>

        {/* VOICE OVER CTA SECTION */}
        <div className="mt-20 pt-16 border-t border-[#E8DED0] text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            Need a Professional Voice?
          </h2>

          <p className="text-base text-[#5C4A3E] font-light max-w-xl mx-auto">
            "Send your script, project details and preferred style."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContactModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm text-white bg-[#352820] hover:bg-[#271D17] shadow-xl shadow-[#352820]/20 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 border border-[#C5A46D]/40"
            >
              <Mic className="w-4 h-4 text-[#C5A46D]" />
              <span>Request a Voice Over</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm text-[#352820] bg-white hover:bg-[#E8DED0] transition-all flex items-center justify-center space-x-3 border border-[#E8DED0] shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#C5A46D]" />
              <span>Contact Ramsha</span>
            </a>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-[#5C4A3E]">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-[#E8DED0] shadow-sm">
              <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Primary: </span>
              <a href="mailto:ramshaurooj10@gmail.com" className="text-[#352820] hover:underline font-bold">
                ramshaurooj10@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-[#E8DED0] shadow-sm">
              <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Alternate: </span>
              <a href="mailto:ramshaurooj92@gmail.com" className="text-[#352820] hover:underline font-bold">
                ramshaurooj92@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Mic, Sparkles, ArrowRight, CheckCircle2, Film, Video } from 'lucide-react';

interface TwoPillarsProps {
  onVoiceClick: () => void;
  onDubbingClick?: () => void;
  onAiClick: () => void;
}

export const TwoPillars: React.FC<TwoPillarsProps> = ({
  onVoiceClick,
  onDubbingClick,
  onAiClick
}) => {
  const voSkills = [
    'Urdu & English Voice Over',
    'American English Accent',
    'UN & UNICEF Narrations',
    'Documentaries & TV Commercials',
    'IVR & Corporate Systems',
    'Poetry & Emotional Voice'
  ];

  const dubbingSkills = [
    'Movie & Feature Film Dubbing',
    'Drama & Serial Character Sync',
    'Cartoon & Animated Dubbing',
    'Multilingual Production Team',
    'Children & Baby Character Voices',
    'Lip-Sync & Dialogue Pacing'
  ];

  const aiSkills = [
    'UGC & Product Advertisements',
    'Hollywood-Style Cinematic Videos',
    '3D Product Animation',
    'Kids Cartoons & Nursery Rhymes',
    'ASMR & Sensory Experiences',
    'AI Influencers & Digital Content'
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#F6F1E8] relative overflow-hidden border-y border-[#E8DED0]">
      {/* Subtle Warm Glows */}
      <div className="absolute top-1/2 left-1/6 -translate-y-1/2 w-[400px] h-[400px] bg-[#C5A46D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/6 -translate-y-1/2 w-[400px] h-[400px] bg-[#E8DED0]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Three Pillars of Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            Three Core Creative Pillars
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light leading-relaxed">
            Ramsha Shaikh brings together 8+ years of human voice over mastery, professional multilingual dubbing execution, and 3+ years of cutting-edge AI content creation.
          </p>
        </div>

        {/* Pipeline Bridge Banner */}
        <div className="mt-10 max-w-5xl mx-auto p-4 sm:p-6 rounded-2xl bg-white border border-[#E8DED0] text-center shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A1814B] block mb-2 font-bold">
            ⚡ Complete End-To-End Creative Pipeline
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#352820]">
            <span className="px-3 py-1 rounded-lg bg-[#F6F1E8] border border-[#E8DED0] text-[#352820]">01 🎙️ Human Voice</span>
            <span className="text-[#A1814B]">→</span>
            <span className="px-3 py-1 rounded-lg bg-[#F6F1E8] border border-[#E8DED0] text-[#352820]">02 🎬 Dubbing & Sync</span>
            <span className="text-[#A1814B]">→</span>
            <span className="px-3 py-1 rounded-lg bg-[#F6F1E8] border border-[#E8DED0] text-[#352820]">03 🤖 AI Content Creation</span>
            <span className="text-[#A1814B]">→</span>
            <span className="px-3.5 py-1 rounded-lg bg-[#352820] text-white font-extrabold shadow-md border border-[#C5A46D]/40">
              Broadcast Output
            </span>
          </div>
        </div>

        {/* Three Pillars Grid */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          
          {/* PILLAR 1: VOICE OVER */}
          <div className="bg-white rounded-3xl p-7 border border-[#E8DED0] hover:border-[#D97706] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B]" />
            
            <div>
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] shadow-sm">
                  <Mic className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#FFFBEB] border border-[#FDE68A] text-[#D97706] shadow-sm font-mono">
                  PILLAR 01
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-[#352820] tracking-tight uppercase group-hover:text-[#D97706] transition-colors">
                🎙️ Voice Over
              </h3>
              <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                Pristine studio voiceovers trusted by UN, UNICEF, global agencies, and TV channels in Urdu, English & American English accent.
              </p>

              <div className="mt-6 pt-6 border-t border-[#E8DED0]">
                <h4 className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-3">
                  Key Capabilities:
                </h4>
                <div className="space-y-2 text-xs text-[#5C4A3E]">
                  {voSkills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DED0]">
              <button
                onClick={onVoiceClick}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] transition-all shadow-md shadow-[#352820]/20 flex items-center justify-center space-x-2 border border-[#E5A93C]/40"
              >
                <span>Explore Voice Over</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
              </button>
            </div>

          </div>

          {/* PILLAR 2: DUBBING */}
          <div className="bg-white rounded-3xl p-7 border border-[#E8DED0] hover:border-[#2563EB] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#3B82F6]" />

            <div>
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] shadow-sm">
                  <Film className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] shadow-sm font-mono">
                  PILLAR 02
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-[#352820] tracking-tight uppercase group-hover:text-[#2563EB] transition-colors">
                🎬 Dubbing
              </h3>
              <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                Movie, drama, cartoon & character dubbing performed personally and coordinated with a professional dubbing team for larger productions.
              </p>

              <div className="mt-6 pt-6 border-t border-[#E8DED0]">
                <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">
                  Dubbing Specializations:
                </h4>
                <div className="space-y-2 text-xs text-[#5C4A3E]">
                  {dubbingSkills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DED0]">
              <button
                onClick={() => {
                  if (onDubbingClick) onDubbingClick();
                  else scrollToSection('dubbing');
                }}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] transition-all shadow-md shadow-[#352820]/20 flex items-center justify-center space-x-2 border border-[#2563EB]/40"
              >
                <span>Explore Dubbing Work</span>
                <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
              </button>
            </div>

          </div>

          {/* PILLAR 3: AI CONTENT CREATION */}
          <div className="bg-white rounded-3xl p-7 border border-[#E8DED0] hover:border-[#7C3AED] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899]" />

            <div>
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] shadow-sm">
                  <Video className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] shadow-sm font-mono">
                  PILLAR 03
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-[#352820] tracking-tight uppercase group-hover:text-[#7C3AED] transition-colors">
                🤖 AI Content Creation
              </h3>
              <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                3+ years creating UGC ads, cinematic movies, 3D product animations, children's cartoons, ASMR, and viral digital videos.
              </p>

              <div className="mt-6 pt-6 border-t border-[#E8DED0]">
                <h4 className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-3">
                  AI Content Offerings:
                </h4>
                <div className="space-y-2 text-xs text-[#5C4A3E]">
                  {aiSkills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DED0]">
              <button
                onClick={onAiClick}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] transition-all shadow-md shadow-[#352820]/20 flex items-center justify-center space-x-2 border border-[#7C3AED]/40"
              >
                <span>Explore AI Content</span>
                <ArrowRight className="w-4 h-4 text-[#EC4899]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

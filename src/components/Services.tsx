import React from 'react';
import { Mic, Layers, Sparkles, Megaphone, Smile, Film, CheckCircle2, ArrowRight, Users } from 'lucide-react';

interface ServicesProps {
  onHireClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onHireClick }) => {
  const serviceCategories = [
    {
      id: 'vo',
      title: '01 — Voice Over',
      ctaLabel: 'Request Voice Over',
      subtitle: '8+ Years Professional Voice Experience',
      icon: Mic,
      tag: 'Solo & Commercial VO',
      description: 'Pristine voiceover recorded in a professional studio setup in Urdu, English, and American accent for global brands, commercials, documentaries, and educational platforms.',
      items: [
        'Urdu Voice Over',
        'English Voice Over',
        'American English Accent',
        'Commercial Advertisements',
        'Documentary Narration',
        'Corporate & E-Learning',
        'IVR & Telephone Messages',
        'Character & Radio VO'
      ]
    },
    {
      id: 'dubbing',
      title: '02 — Dubbing & Multilingual Production',
      ctaLabel: 'Request Dubbing',
      subtitle: 'Synchronized Character & Film Dubbing',
      icon: Layers,
      tag: 'Lip-Sync & Team Production',
      description: 'Precision lip-sync, tone matching, and expressive voice replacement. Ramsha personally performs dubbing and can coordinate a full dubbing team for large multi-character projects.',
      note: 'Team-backed multi-character and multi-language production management.',
      items: [
        'Film & Movie Dubbing',
        'Animation & Cartoon Dubbing',
        'Sync / Lip-Sync Dubbing',
        'Multi-character Voice Matching',
        'Multilingual Team Coordination',
        'Children’s Content Dubbing'
      ]
    },
    {
      id: 'ai-content',
      title: '03 — AI Content Creation',
      ctaLabel: 'Request AI Content',
      subtitle: '3+ Years AI Video & Media Expertise',
      icon: Sparkles,
      tag: 'End-to-End AI Media',
      description: 'From concept to complete video. Creating high-impact AI-powered videos, hyper-realistic avatars, digital storytelling, and creative AI campaigns.',
      items: [
        'Concept & Prompt Engineering',
        'Script to Video Generation',
        'Realistic AI Avatars',
        'AI Storytelling & Shorts',
        'AI Influencer Content',
        'Custom Sound & AI Songs'
      ]
    },
    {
      id: 'ugc-brands',
      title: '04 — UGC & Brand Content',
      ctaLabel: 'Request UGC & Ads',
      subtitle: 'High-Conversion Product Advertisements',
      icon: Megaphone,
      tag: 'E-commerce & Ads',
      description: 'Relatable, user-generated style product videos, beauty UGC, automotive commercials, and social media ad reels engineered for viral traction.',
      items: [
        'Product Advertisements',
        'UGC-Style Social Ads',
        'Beauty & Skincare Spots',
        'Car & Lifestyle Ads',
        'E-Commerce Video Reels',
        'Brand Narrative Campaigns'
      ]
    },
    {
      id: 'kids-edu',
      title: '05 — Children’s & Educational Content',
      ctaLabel: 'Request Kids Content',
      subtitle: 'Early Childhood Education (ECE) Backed',
      icon: Smile,
      tag: 'Preschool & Kids Media',
      description: 'Leveraging an ECE academic background to produce age-appropriate, engaging cartoons, nursery rhymes, stories, and educational content for children.',
      items: [
        'Urdu & English Cartoons',
        'Nursery Rhymes & Music',
        'Preschool Learning Modules',
        'Moral & Storybook Animation',
        'Phonics & Alphabet Videos',
        'Character Voice Acting'
      ]
    },
    {
      id: 'ai-movies',
      title: '06 — AI Movies & Animation',
      ctaLabel: 'Request AI Animation',
      subtitle: 'Cinematic Visuals & 3D Motion',
      icon: Film,
      tag: 'Hollywood-Style & 3D',
      description: 'Hollywood-caliber cinematic movie trailers, 3D product animations, 2D stick animations, and immersive visual productions.',
      items: [
        'Hollywood-Style AI Movies',
        '3D Product Animation',
        'Cinematic Story Sequences',
        '2D Vector Animation',
        'ASMR & Satisfying Visuals',
        'Viral Food & Lifestyle Reels'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#141414] relative overflow-hidden border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <span>❖</span>
            <span>Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight font-sans uppercase">
            Services Offered
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            Combining 8+ years of voice and dubbing mastery with 3+ years of cutting-edge AI content creation.
          </p>
        </div>

        {/* 6 Main Service Cards Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {serviceCategories.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#181818] rounded-2xl p-6 sm:p-7 border border-[#2C2C2C] hover:border-[#D4AF37]/65 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-12 h-12 bg-[#222222] rounded-xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" strokeWidth={2.25} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D4AF37] bg-[#222222] px-2.5 py-1 rounded-lg border border-[#D4AF37]/30">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-[#D4AF37] mt-1">
                    {service.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-[#CCCCCC] font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {service.note && (
                    <div className="mt-3.5 p-3 rounded-xl bg-[#202020] border border-[#D4AF37]/30 text-xs font-medium text-[#F5F5F5] flex items-start space-x-2">
                      <Users className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={2.25} />
                      <span>{service.note}</span>
                    </div>
                  )}

                  {/* Service Items List */}
                  <div className="mt-6 pt-5 border-t border-[#262626]">
                    <h4 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-3">
                      Capabilities Included:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-[#D4D4D4]">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Shortened Single-Line Card CTA Footer */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onHireClick}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#F5F5F5] hover:text-[#111111] bg-[#202020] hover:bg-[#D4AF37] transition-all flex items-center justify-center space-x-2 border border-[#D4AF37]/45 hover:border-[#D4AF37] whitespace-nowrap cursor-pointer"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.25} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

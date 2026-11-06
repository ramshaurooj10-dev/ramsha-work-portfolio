import React from 'react';
import { Mic, Layers, Sparkles, Megaphone, Smile, Film, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onHireClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onHireClick }) => {
  const serviceCategories = [
    {
      id: 'vo',
      title: '01 — Voice Over',
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
    <section id="services" className="py-20 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="text-[#C5A46D]">❖</span>
            <span>Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            Services Offered
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            Combining 8+ years of voice and dubbing mastery with 3+ years of cutting-edge AI content creation.
          </p>
        </div>

        {/* 6 Main Service Cards Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#F6F1E8] rounded-xl text-[#C5A46D] group-hover:bg-[#E8DED0] transition-colors border border-[#E8DED0]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#352820] bg-[#E8DED0] px-2.5 py-1 rounded-md border border-[#D4C6B4]">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#A1814B] mt-1">
                    {service.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#5C4A3E] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {service.note && (
                    <div className="mt-3 p-2.5 rounded-lg bg-[#F6F1E8] border border-[#E8DED0] text-[11px] font-medium text-[#352820]">
                      💡 {service.note}
                    </div>
                  )}

                  {/* Service Items List */}
                  <div className="mt-6 pt-5 border-t border-[#E8DED0]">
                    <h4 className="text-xs font-bold text-[#352820] uppercase tracking-wider mb-3">
                      Capabilities Included:
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-[#5C4A3E]">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onHireClick}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs text-white bg-[#352820] hover:bg-[#271D17] transition-all flex items-center justify-center space-x-2 border border-[#C5A46D]/40 shadow-sm"
                  >
                    <span>Request {service.title.split('—')[1]?.trim()} Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
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


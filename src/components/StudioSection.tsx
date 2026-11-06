import React from 'react';
import { Mic, Headphones, Radio, CheckCircle2, Sliders, Shield, Volume2 } from 'lucide-react';

export const StudioSection: React.FC = () => {
  const suitabilityList = [
    'Commercials',
    'Corporate Videos',
    'E-learning',
    'Films',
    'Dubbing',
    'Documentaries',
    'YouTube',
    "Children's Content",
    'International Projects',
    'Digital Advertising'
  ];

  const studioFeatures = [
    { title: 'Studio Microphone', desc: 'Precision condenser microphone capturing rich vocal nuances', icon: Mic },
    { title: 'Pop Filter & Shockmount', desc: 'Eliminates plosives and handling vibration for clean takes', icon: Radio },
    { title: 'Studio Headphones', desc: 'Acoustic monitoring for exact dubbing lip-sync alignment', icon: Headphones },
    { title: 'Acoustic Treatment', desc: 'Dedicated soundproof booth eliminating room reflections', icon: Sliders },
    { title: 'Recording Environment', desc: 'Clean low-noise noise floor suitable for broadcast standards', icon: Volume2 }
  ];

  return (
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Studio Setup Image & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Radio className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Acoustic Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
              Professional Studio Setup
            </h2>

            <p className="text-[#5C4A3E] text-base font-light leading-relaxed">
              "I have a professional studio setup for high-quality voice recording and production."
            </p>

            {/* Studio Equipment Cards */}
            <div className="space-y-3 pt-2">
              {studioFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#E8DED0] flex items-start space-x-3 shadow-sm hover:border-[#C5A46D] transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-[#F6F1E8] text-[#C5A46D] mt-0.5 border border-[#E8DED0]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#352820]">{feat.title}</h4>
                      <p className="text-[11px] text-[#5C4A3E] font-light mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Studio Photo Banner & Suitable Projects */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DED0] shadow-xl bg-white p-1">
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                  alt="Ramsha Shaikh Recording Studio Environment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#352820]/90 via-[#352820]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E8DED0] text-xs text-[#352820] shadow-md">
                  <span className="font-bold text-[#A1814B] block">Broadcast Ready Output</span>
                  <span className="text-[#5C4A3E]">24-bit / 48kHz WAV audio files delivered clean, edited, and de-noised.</span>
                </div>
              </div>
            </div>

            {/* Project Suitability Grid */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8DED0] shadow-lg">
              <h3 className="text-sm font-bold text-[#352820] uppercase tracking-wider mb-4">
                Ideal Production Applications:
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {suitabilityList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#5C4A3E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Mic, Headphones, Radio, CheckCircle2, Sliders, Volume2 } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';

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
    { title: 'Recording Environment', desc: 'Clean low-noise floor suitable for broadcast standards', icon: Volume2 }
  ];

  return (
    <section className="py-20 bg-[#141414] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Features List with Bold Gold Icons on Dark Tiles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
              <span>Acoustic Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
              Professional Studio Setup
            </h2>

            <p className="text-[#E0E0E0] text-base font-normal leading-relaxed">
              "I have a professional studio setup for high-quality voice recording and production."
            </p>

            {/* Studio Equipment Cards */}
            <div className="space-y-3 pt-1">
              {studioFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#181818] border border-[#2C2C2C] flex items-start space-x-3.5 hover:border-[#D4AF37]/60 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors">
                      <IconComp className="w-5 h-5" strokeWidth={2.25} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#FFFFFF]">{feat.title}</h4>
                      <p className="text-xs sm:text-sm text-[#CCCCCC] font-normal mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Authentic Voice Booth Photo & Suitable Projects */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#111111]">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={MEDIA_ASSETS.studioVoiceBooth}
                  alt="Dedicated acoustic voice-over vocal booth with studio condenser microphone, pop filter, and headphones"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="bg-[#161616] p-4 sm:p-5 border-t border-[#D4AF37]/30 text-xs sm:text-sm">
                <span className="font-bold text-[#D4AF37] block">Broadcast Ready Output</span>
                <span className="text-[#E0E0E0] mt-0.5 block">24-bit / 48kHz WAV audio files delivered clean, edited, and de-noised.</span>
              </div>
            </div>

            {/* Project Suitability Grid */}
            <div className="bg-[#181818] rounded-2xl p-6 border border-[#2C2C2C] shadow-lg">
              <h3 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider mb-4">
                Ideal Production Applications:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {suitabilityList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#E0E0E0] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
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

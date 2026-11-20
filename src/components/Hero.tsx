import React from 'react';
import { Sparkles, Send, Volume2, ShieldCheck, Globe, Radio, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MEDIA_ASSETS } from '../data/mediaAssets';

interface HeroProps {
  onListenClick: () => void;
  onAiClick: () => void;
  onWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onListenClick, onAiClick, onWorkClick }) => {
  return (
    <section id="home" className="relative min-h-[88vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Subtle Warm Gold Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#C9A227]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Name, Title, Tagline & 3 CTAs (1 Primary + 2 Secondary) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Status / Experience Pill — Gold Accent Only */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/35 text-[#F5F5F5] text-xs font-semibold shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span>Available for Global Voice & AI Production</span>
              <span className="text-[#D4AF37]">•</span>
              <span className="text-[#D4AF37] font-bold">{PERSONAL_INFO.voExperience} Industry Experience</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] uppercase leading-none font-sans">
                RAMSHA SHAIKH
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-[#D4AF37]">
                Voice • Dubbing • AI Production
              </h2>
            </div>

            {/* One Short Tagline */}
            <p className="text-base sm:text-lg text-[#E0E0E0] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Professional voice, dubbing, and AI-powered content solutions for global brands, broadcast media, and creative agencies.
            </p>

            {/* Key Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left text-xs text-[#F5F5F5] max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2.5 bg-[#181818] p-3 rounded-xl border border-[#2C2C2C] hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#222222] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                </div>
                <span className="font-semibold text-xs text-[#F5F5F5]">UN & UNICEF Trusted</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-[#181818] p-3 rounded-xl border border-[#2C2C2C] hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#222222] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                </div>
                <span className="font-semibold text-xs text-[#F5F5F5]">Urdu & English Voice</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-[#181818] p-3 rounded-xl border border-[#2C2C2C] hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#222222] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Radio className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                </div>
                <span className="font-semibold text-xs text-[#F5F5F5]">Broadcast Studio</span>
              </div>
            </div>

            {/* Action Buttons: 1 Primary (Solid Gold) + 2 Secondary/Ghost */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              {/* Primary CTA */}
              <button
                onClick={onListenClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-extrabold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] border border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 text-sm cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
                <span>Listen to My Voice</span>
              </button>

              {/* Secondary Ghost CTA 1 */}
              <button
                onClick={onAiClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-[#F5F5F5] bg-[#181818] hover:bg-[#222222] border border-[#D4AF37]/45 hover:border-[#D4AF37] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 text-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Explore AI Content</span>
              </button>

              {/* Secondary Ghost CTA 2 */}
              <button
                onClick={onWorkClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-[#F5F5F5] bg-transparent hover:bg-[#1E1E1E] border border-[#3A3A3A] hover:border-[#D4AF37]/70 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 text-sm cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Hire Ramsha</span>
              </button>
            </div>

            {/* Resume Links: Download Resume & View Resume */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-sm font-semibold">
              <a
                href="/Ramsha_Urooj_CV.pdf"
                download="Ramsha_Urooj_CV.pdf"
                className="text-[#F5F5F5] hover:text-[#D4AF37] flex items-center space-x-1.5 transition-colors cursor-pointer"
                title="Download Ramsha's Official Resume PDF"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Download Resume</span>
              </a>
              <span className="text-[#4A4A4A]">|</span>
              <a
                href="/Ramsha_Urooj_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4D4D4] hover:text-[#D4AF37] flex items-center space-x-1.5 transition-colors cursor-pointer"
                title="View Resume PDF in new tab"
              >
                <FileText className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
              </a>
            </div>

          </div>

          {/* Right Column: Glowing Gold Neon Microphone on Pure Black with Thin Gold Frame & Dark Caption Bar */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-[#D4AF37]/45 bg-[#000000] shadow-[0_20px_60px_rgba(0,0,0,0.75)] group">
              <div className="relative h-72 sm:h-80 md:h-[340px] w-full bg-[#000000] flex items-center justify-center p-4">
                <img
                  src={MEDIA_ASSETS.heroMic}
                  alt="Glowing Gold Neon Studio Condenser Microphone"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center transform group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>

              {/* Dark Caption Bar with Gold Text */}
              <div className="bg-[#141414] px-5 py-4 border-t border-[#D4AF37]/30 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#D4AF37]">Broadcast Recording Studio</p>
                  <p className="text-xs text-[#D4D4D4] font-medium mt-0.5">24-bit / 48kHz Clean Acoustic Chain</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                  <Radio className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

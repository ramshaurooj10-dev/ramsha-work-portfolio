import React from 'react';
import { Sparkles, Send, Volume2, ShieldCheck, Globe, Radio, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onListenClick: () => void;
  onAiClick: () => void;
  onWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onListenClick, onAiClick, onWorkClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#F6F1E8]">
      {/* Subtle Warm Glow Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D97706]/15 via-[#C5A46D]/15 to-[#352820]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E8DED0]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Name, Title, Tagline & Exactly 3 CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status / Experience Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Available for Global Voice & AI Production</span>
              <span className="text-[#C5A46D]">•</span>
              <span className="text-[#D97706] font-bold">{PERSONAL_INFO.voExperience} Industry Experience</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#352820] uppercase leading-none font-sans">
                RAMSHA SHAIKH
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide text-[#C5A46D]">
                Voice • Dubbing • AI Production
              </h2>
            </div>

            {/* One Short Tagline */}
            <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Professional voice, dubbing, and AI-powered content solutions for global brands, broadcast media, and creative agencies.
            </p>

            {/* Key Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-1 text-left text-xs text-[#352820] max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 bg-white/90 p-2.5 rounded-xl border border-[#E8DED0] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#059669] flex-shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">UN & UNICEF Trusted</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 p-2.5 rounded-xl border border-[#E8DED0] shadow-sm">
                <Globe className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Urdu & English Voice</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 p-2.5 rounded-xl border border-[#E8DED0] shadow-sm">
                <Radio className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                <span className="font-medium text-[11px] sm:text-xs">Broadcast Studio</span>
              </div>
            </div>

            {/* Exactly THREE Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              {/* Button 1: Listen to My Voice */}
              <button
                onClick={onListenClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-[#352820] hover:bg-[#271D17] border border-[#C5A46D] shadow-lg shadow-[#352820]/15 hover:shadow-[#352820]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 text-sm"
              >
                <Volume2 className="w-4.5 h-4.5 text-[#C5A46D]" />
                <span>Listen to My Voice</span>
              </button>

              {/* Button 2: Explore AI Content */}
              <button
                onClick={onAiClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-[#352820] bg-white hover:bg-[#E8DED0]/60 border border-[#C5A46D] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 text-sm"
              >
                <Sparkles className="w-4.5 h-4.5 text-[#C5A46D]" />
                <span>Explore AI Content</span>
              </button>

              {/* Button 3: Hire Ramsha */}
              <button
                onClick={onWorkClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-[#352820] bg-[#E8DED0] hover:bg-[#DDD2C2] border border-[#D4C6B4] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2.5 text-sm"
              >
                <Send className="w-4 h-4 text-[#D97706]" />
                <span>Hire Ramsha</span>
              </button>
            </div>

            {/* Resume Links: Download Resume & View Resume */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold">
              <a
                href="/Ramsha_Urooj_CV.pdf"
                download="Ramsha_Urooj_CV.pdf"
                className="text-[#352820] hover:text-[#C5A46D] flex items-center space-x-1.5 transition-colors cursor-pointer"
                title="Download Ramsha's Official Resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#059669]" />
                <span>Download Resume</span>
              </a>
              <span className="text-[#D4C6B4]">|</span>
              <a
                href="/Ramsha_Urooj_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5C4A3E] hover:text-[#352820] flex items-center space-x-1 transition-colors cursor-pointer"
                title="View Resume PDF in new tab"
              >
                <FileText className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>View Resume</span>
                <ExternalLink className="w-3 h-3 text-[#7A695E]" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Studio Visual Frame without overlapping cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#E8DED0] bg-white shadow-xl p-2 group">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-[#352820]">
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
                  alt="Ramsha Shaikh Broadcast Studio Setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#352820]/80 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Clean Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-[#E8DED0] shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#352820]">Broadcast Recording Studio</p>
                    <p className="text-[11px] text-[#7A695E]">24-bit / 48kHz Clean Acoustic Chain</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#059669] shadow-sm animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Mail, Linkedin, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#voice-audition' },
    { name: 'Services', href: '#services' },
    { name: 'Dubbing', href: '#dubbing' },
    { name: 'AI Content', href: '#ai-content' },
    { name: 'Kids & Education', href: '#kids-education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="site-footer"
      className="bg-[#0C0C0C] border-t border-[#D4AF37]/25 py-14 text-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-[#242424]">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#141414] border-2 border-[#D4AF37] flex items-center justify-center shadow-md shadow-[#D4AF37]/20">
                <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6" aria-hidden="true">
                  <rect x="12" y="4" width="12" height="17" rx="6" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="2.2" />
                  <line x1="12.8" y1="9" x2="16.5" y2="9" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="19.5" y1="9" x2="23.2" y2="9" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="12.5" y1="13" x2="16.5" y2="13" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="19.5" y1="13" x2="23.5" y2="13" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8.5 15.5V17.5C8.5 22.7467 12.7533 27 18 27C23.2467 27 27.5 22.7467 27.5 17.5V15.5" stroke="#D4AF37" strokeWidth="2.3" strokeLinecap="round" />
                  <line x1="18" y1="27" x2="18" y2="31.5" stroke="#D4AF37" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M12.5 32H23.5" stroke="#D4AF37" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-extrabold text-[#FFFFFF] uppercase tracking-tight">
                RAMSHA SHAIKH
              </span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#D4AF37]">
              Voice Over Artist | Dubbing Artist | AI Content Creator
            </p>

            <p className="text-xs sm:text-sm text-[#CCCCCC] max-w-sm font-normal leading-relaxed">
              8+ Years of Professional Voice Over Experience • Urdu, English & American Accent • Multilingual Dubbing Solutions & AI Content Creation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3.5 font-mono">
              Navigation Links
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
              Connect & Hire
            </h4>
            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-[#181818] hover:bg-[#D4AF37] hover:text-[#111111] text-[#D4AF37] transition-all border border-[#D4AF37]/40"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" strokeWidth={2.25} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#181818] hover:bg-[#D4AF37] hover:text-[#111111] text-[#D4AF37] transition-all border border-[#D4AF37]/40"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" strokeWidth={2.25} />
              </a>
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#181818] hover:bg-[#D4AF37] hover:text-[#111111] text-[#D4AF37] transition-all border border-[#D4AF37]/40"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" strokeWidth={2.25} />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-[#CCCCCC] font-medium">
              Email: {PERSONAL_INFO.email}
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#B8B8B8] font-normal">
          <div>
            © 2026 Ramsha Shaikh. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 text-[#D4AF37] font-semibold">
            Professional Voice, Dubbing & AI Content Studio
          </div>
        </div>

      </div>
    </footer>
  );
};

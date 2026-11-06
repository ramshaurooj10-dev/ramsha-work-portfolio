import React from 'react';
import { Mic, Mail, Linkedin, Facebook, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Dubbing', href: '#dubbing' },
    { name: 'AI Content', href: '#ai-content' },
    { name: 'Kids & Education', href: '#kids-education' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#271D17] border-t border-[#352820] py-12 text-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-[#352820]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A46D] flex items-center justify-center text-[#271D17] font-bold shadow-md shadow-[#C5A46D]/20">
                <Mic className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white uppercase tracking-tight">
                RAMSHA SHAIKH
              </span>
            </div>

            <p className="text-xs font-semibold text-[#C5A46D]">
              Voice Over Artist | Dubbing Artist | AI Content Creator
            </p>

            <p className="text-xs text-[#E8DED0]/80 max-w-sm font-light">
              8+ Years of Professional Voice Over Experience • Urdu, English & American Accent • Multilingual Dubbing Solutions & AI Content Creation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono">
              Navigation Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#C5A46D] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Connect & Hire
            </h4>
            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-[#352820] hover:bg-[#C5A46D] hover:text-[#271D17] text-[#E8DED0] transition-all border border-[#352820]"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#352820] hover:bg-[#C5A46D] hover:text-[#271D17] text-[#E8DED0] transition-all border border-[#352820]"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#352820] hover:bg-[#C5A46D] hover:text-[#271D17] text-[#E8DED0] transition-all border border-[#352820]"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-[#E8DED0]/80">
              Email: {PERSONAL_INFO.email}
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DED0]/70 font-light">
          <div>
            © 2026 Ramsha Shaikh. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 text-[#C5A46D]">
            Professional Voice, Dubbing & AI Content Studio
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Mic, Menu, X, Sparkles, Send, Film, Video, Download } from 'lucide-react';

interface NavbarProps {
  onHireClick: () => void;
  onVoiceClick: () => void;
  onDubbingClick?: () => void;
  onAiClick: () => void;
  onWholeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onHireClick, 
  onVoiceClick, 
  onDubbingClick, 
  onAiClick,
  onWholeClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Voice Over', action: onVoiceClick, href: '#portfolio-hub' },
    { name: 'Dubbing', action: onDubbingClick, href: '#portfolio-hub' },
    { name: 'AI Content', action: onAiClick, href: '#portfolio-hub' },
    { name: 'Whole Portfolios', action: onWholeClick, href: '#portfolio-hub' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', action: onHireClick, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F1E8]/95 backdrop-blur-md border-b border-[#E8DED0] shadow-md shadow-[#352820]/5 py-3'
          : 'bg-gradient-to-b from-[#F6F1E8]/95 via-[#F6F1E8]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#E5A93C] via-[#C5A46D] to-[#D97706] p-[1.5px] shadow-md shadow-[#C5A46D]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#352820] rounded-full flex items-center justify-center">
                <Mic className="w-5 h-5 text-[#E5A93C] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#352820] block group-hover:text-[#D97706] transition-colors">
                RAMSHA SHAIKH
              </span>
              <span className="text-[10px] text-[#A1814B] tracking-widest uppercase block font-mono font-semibold">
                Voice • Dubbing • AI Production
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="px-2.5 py-1.5 text-xs font-semibold text-[#5C4A3E] hover:text-[#352820] hover:bg-[#E8DED0]/60 rounded-lg transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/Ramsha_Urooj_CV.pdf"
              download="Ramsha_Urooj_CV.pdf"
              className="px-3.5 py-2 text-xs font-bold text-[#352820] bg-white hover:bg-[#E8DED0] border border-[#E8DED0] hover:border-[#059669]/40 rounded-xl transition-all flex items-center space-x-1.5 shadow-sm"
              title="Download Ramsha Urooj's Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#059669]" />
              <span>Resume ↓</span>
            </a>
            <button
              onClick={onHireClick}
              className="px-5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] border border-[#E5A93C]/50 rounded-xl shadow-md shadow-[#C5A46D]/20 transition-all transform active:scale-95 flex items-center space-x-1.5"
            >
              <Send className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>Hire Ramsha</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onHireClick}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#352820] rounded-lg shadow"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#352820] hover:bg-[#E8DED0] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#352820]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F1E8] border-b border-[#E8DED0] px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="px-3.5 py-2.5 text-sm font-semibold text-[#352820] hover:text-[#C5A46D] hover:bg-white rounded-xl transition-colors border border-transparent hover:border-[#E8DED0]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8DED0] flex flex-col space-y-2">
            <a
              href="/Ramsha_Urooj_CV.pdf"
              download="Ramsha_Urooj_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-xs font-bold text-[#352820] bg-white border border-[#E8DED0] rounded-xl flex items-center justify-center space-x-2 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#059669]" />
              <span>Download My Resume ↓</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onHireClick();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] rounded-xl shadow-md flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4 text-[#C5A46D]" />
              <span>Hire Ramsha</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

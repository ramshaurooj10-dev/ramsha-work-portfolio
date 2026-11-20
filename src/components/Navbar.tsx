import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Download } from 'lucide-react';

interface NavbarProps {
  onHireClick: () => void;
  onVoiceClick: () => void;
  onDubbingClick?: () => void;
  onAiClick: () => void;
  onWholeClick?: () => void;
}

const StudioMicLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Condenser capsule body */}
    <rect x="12" y="4" width="12" height="17" rx="6" fill="#D4AF37" fillOpacity="0.18" stroke="#D4AF37" strokeWidth="2.2" />
    {/* Detailed studio grille lines */}
    <line x1="12.8" y1="8.5" x2="16.5" y2="8.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19.5" y1="8.5" x2="23.2" y2="8.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12.2" y1="12" x2="16.5" y2="12" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19.5" y1="12" x2="23.8" y2="12" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12.8" y1="15.5" x2="16.5" y2="15.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="19.5" y1="15.5" x2="23.2" y2="15.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />
    {/* Center vertical rib */}
    <line x1="18" y1="5" x2="18" y2="19.5" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="round" />
    {/* Shockmount / U-yoke */}
    <path d="M8.5 15.5V17.5C8.5 22.7467 12.7533 27 18 27C23.2467 27 27.5 22.7467 27.5 17.5V15.5" stroke="#D4AF37" strokeWidth="2.3" strokeLinecap="round" />
    {/* Side mount pins */}
    <line x1="6.8" y1="16.5" x2="10" y2="16.5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="16.5" x2="29.2" y2="16.5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
    {/* Pedestal stem & base */}
    <line x1="18" y1="27" x2="18" y2="31.5" stroke="#D4AF37" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M12.5 32H23.5" stroke="#D4AF37" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  onHireClick,
  onVoiceClick,
  onDubbingClick,
  onAiClick,
  onWholeClick,
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
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-lg shadow-black/50 py-3'
          : 'bg-gradient-to-b from-[#111111] via-[#111111]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-left focus:outline-none shrink-0"
          >
            <div className="relative w-11 h-11 rounded-full bg-[#111111] border-2 border-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.28)] flex items-center justify-center group-hover:scale-105 transition-transform">
              <StudioMicLogoIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#FFFFFF] block group-hover:text-[#D4AF37] transition-colors leading-tight">
                RAMSHA SHAIKH
              </span>
              <span className="text-[11px] sm:text-xs text-[#D4AF37] tracking-[0.14em] uppercase block font-mono font-bold mt-0.5">
                VOICE • DUBBING • AI PRODUCTION
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
                className="px-3 py-1.5 text-xs font-semibold text-[#E5E5E5] hover:text-[#D4AF37] hover:bg-[#1E1E1E] rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Actions — Consistent Dark + Gold Button Family */}
          <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
            <a
              href="/Ramsha_Urooj_CV.pdf"
              download="Ramsha_Urooj_CV.pdf"
              className="h-9 px-4 text-xs font-bold text-[#F5F5F5] bg-[#1A1A1A] hover:bg-[#242424] border border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-xl transition-all inline-flex items-center justify-center space-x-1.5 whitespace-nowrap"
              title="Download Ramsha Urooj's Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
              <span>Resume</span>
            </a>
            <button
              onClick={onHireClick}
              className="h-9 px-4 text-xs font-bold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] border border-[#D4AF37] rounded-xl shadow-md shadow-[#D4AF37]/20 transition-all transform active:scale-95 inline-flex items-center justify-center space-x-1.5 whitespace-nowrap cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#111111] shrink-0" strokeWidth={2.25} />
              <span>Hire Ramsha</span>
            </button>
          </div>

          {/* Mobile Action Bar */}
          <div className="lg:hidden flex items-center space-x-2 shrink-0">
            <a
              href="/Ramsha_Urooj_CV.pdf"
              download="Ramsha_Urooj_CV.pdf"
              className="h-9 px-3 text-xs font-bold text-[#F5F5F5] bg-[#1A1A1A] hover:bg-[#242424] border border-[#D4AF37]/50 rounded-xl inline-flex items-center space-x-1 whitespace-nowrap"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              onClick={onHireClick}
              className="h-9 px-3.5 text-xs font-bold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] border border-[#D4AF37] rounded-xl shadow whitespace-nowrap"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 rounded-xl text-[#F5F5F5] bg-[#1A1A1A] hover:bg-[#262626] border border-[#D4AF37]/40 flex items-center justify-center focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#D4AF37]/25 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
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
                className="px-3.5 py-2.5 text-sm font-semibold text-[#F5F5F5] hover:text-[#D4AF37] hover:bg-[#1E1E1E] rounded-xl transition-colors border border-transparent hover:border-[#D4AF37]/25"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#2A2A2A] flex flex-col space-y-2.5">
            <a
              href="/Ramsha_Urooj_CV.pdf"
              download="Ramsha_Urooj_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-xs font-bold text-[#F5F5F5] bg-[#1A1A1A] hover:bg-[#242424] border border-[#D4AF37]/50 rounded-xl flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onHireClick();
              }}
              className="w-full py-3 text-xs font-bold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] border border-[#D4AF37] rounded-xl shadow-md flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4 text-[#111111]" strokeWidth={2.25} />
              <span>Hire Ramsha</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

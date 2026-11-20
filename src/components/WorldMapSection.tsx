import React, { useState } from 'react';
import { COUNTRY_MAP_PROJECTS } from '../data/portfolioData';
import { Globe, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';

export const WorldMapSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_MAP_PROJECTS[0]);

  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden border-t border-[#262626]">
      {/* Subtle Gold Dot Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Global Project Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            International Project Experience
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            Connecting voices and AI content across continents. Projects executed for clients in key global hubs.
          </p>
        </div>

        {/* Map Visual Interactive Stage */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#2C2C2C] shadow-2xl">

          {/* Map Graphic Canvas / Pins Grid */}
          <div className="lg:col-span-7 relative bg-[#121212] rounded-xl p-6 border border-[#2A2A2A] min-h-[320px] flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#CCCCCC] border-b border-[#262626] pb-3">
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span className="font-mono font-bold text-[#D4AF37]">Interactive Location Selector</span>
              </span>
              <span>Click a region to view client project highlights</span>
            </div>

            {/* Region Pins Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              {COUNTRY_MAP_PROJECTS.map((cp) => {
                const isSelected = selectedCountry.country === cp.country;
                return (
                  <button
                    key={cp.country}
                    onClick={() => setSelectedCountry(cp)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#221D11] border-[#D4AF37] text-[#FFFFFF] shadow-md shadow-[#D4AF37]/15'
                        : 'bg-[#181818] border-[#2C2C2C] text-[#D4D4D4] hover:border-[#D4AF37]/60 hover:bg-[#1E1E1E]'
                    }`}
                  >
                    <div className="text-lg">{cp.flag}</div>
                    <div className="text-xs font-bold mt-1.5 text-[#FFFFFF]">{cp.country}</div>
                    <div className="text-[11px] text-[#D4AF37] font-mono font-semibold mt-0.5">{cp.projectCount} Projects</div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#CCCCCC] pt-3 border-t border-[#262626]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Remote Studio & Production Management</span>
              </span>
              <span className="font-semibold text-[#F5F5F5]">Worldwide File Delivery</span>
            </div>
          </div>

          {/* Selected Region Detail Box */}
          <div className="lg:col-span-5 bg-[#121212] rounded-xl p-6 border border-[#2A2A2A] space-y-4">
            <div className="flex items-center space-x-3.5">
              <span className="text-3xl">{selectedCountry.flag}</span>
              <div>
                <h3 className="text-xl font-bold text-[#FFFFFF]">
                  {selectedCountry.country}
                </h3>
                <span className="text-xs text-[#D4AF37] font-mono font-semibold">
                  {selectedCountry.regionName} • {selectedCountry.projectCount} Client Deliverables
                </span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">
                Key Project Highlights:
              </h4>
              <div className="space-y-2">
                {selectedCountry.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#F5F5F5] bg-[#1A1A1A] p-3 rounded-lg border border-[#2C2C2C] font-medium">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#B8B8B8] font-normal italic pt-2">
              * Client deliverables executed remotely via high-speed digital studio pipeline.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

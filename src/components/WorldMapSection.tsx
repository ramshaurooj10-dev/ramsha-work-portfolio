import React, { useState } from 'react';
import { COUNTRY_MAP_PROJECTS } from '../data/portfolioData';
import { Globe, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const WorldMapSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_MAP_PROJECTS[0]);

  return (
    <section className="py-20 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      {/* World Map Ambient Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Global Project Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            International Project Experience
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            Connecting voices and AI content across continents. Projects executed for clients in key global hubs.
          </p>
        </div>

        {/* Map Visual Interactive Stage */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-xl">
          
          {/* Map Graphic Canvas / Pins Grid */}
          <div className="lg:col-span-7 relative bg-[#F6F1E8] rounded-xl p-6 border border-[#E8DED0] min-h-[320px] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-[#5C4A3E] border-b border-[#E8DED0] pb-3">
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A46D]" />
                <span className="font-mono text-[#A1814B]">Interactive Location Selector</span>
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
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-white border-[#C5A46D] text-[#352820] shadow-md scale-105'
                        : 'bg-white/80 border-[#E8DED0] text-[#5C4A3E] hover:border-[#C5A46D] hover:bg-white'
                    }`}
                  >
                    <div className="text-lg">{cp.flag}</div>
                    <div className="text-xs font-bold mt-1 text-[#352820]">{cp.country}</div>
                    <div className="text-[10px] text-[#A1814B] font-mono mt-0.5">{cp.projectCount} Projects</div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#5C4A3E] pt-3 border-t border-[#E8DED0]">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Remote Studio & Production Management</span>
              </span>
              <span>Worldwide File Delivery</span>
            </div>
          </div>

          {/* Selected Region Detail Box */}
          <div className="lg:col-span-5 bg-[#F6F1E8] rounded-xl p-6 border border-[#E8DED0] space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{selectedCountry.flag}</span>
              <div>
                <h3 className="text-xl font-bold text-[#352820]">
                  {selectedCountry.country}
                </h3>
                <span className="text-xs text-[#A1814B] font-mono">
                  {selectedCountry.regionName} • {selectedCountry.projectCount} Client Deliverables
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-[#352820] uppercase tracking-wider">
                Key Project Highlights:
              </h4>
              <div className="space-y-2">
                {selectedCountry.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#352820] bg-white p-2.5 rounded-lg border border-[#E8DED0]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-[#5C4A3E] font-light italic pt-2">
              * Client deliverables executed remotely via high-speed digital studio pipeline.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

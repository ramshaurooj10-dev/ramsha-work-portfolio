import React from 'react';
import { CLIENT_TYPES } from '../data/portfolioData';
import { Users, CheckCircle2 } from 'lucide-react';

export const ClientTypes: React.FC = () => {
  return (
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Target Sectors & Collaborators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            Who I Work With
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            Tailoring voice performance, dubbing coordination, and AI media production for diverse industry sectors.
          </p>
        </div>

        {/* 10 Client Categories Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CLIENT_TYPES.map((ct, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-[#E8DED0] hover:border-[#C5A46D] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 text-[#352820] font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D] flex-shrink-0" />
                  <span>{ct.title}</span>
                </div>
                <p className="mt-2 text-[11px] text-[#5C4A3E] font-light leading-relaxed">
                  {ct.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

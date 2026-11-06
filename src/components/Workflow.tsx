import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { Sliders, ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Structured Production Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            How I Work
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            A seamless 5-step workflow ensuring creative excellence, rapid turnarounds, and flawless synchronization.
          </p>
        </div>

        {/* 5-Step Process Horizontal/Grid Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-5 border border-[#E8DED0] shadow-md flex flex-col justify-between relative group hover:border-[#C5A46D] transition-all"
            >
              <div>
                <div className="text-2xl font-black font-mono text-[#A1814B] opacity-90 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#C5A46D]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

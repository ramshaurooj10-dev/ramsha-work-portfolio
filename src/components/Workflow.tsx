import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { Sliders, ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section className="py-20 bg-[#141414] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Structured Production Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            How I Work
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            A seamless 5-step workflow ensuring creative excellence, rapid turnarounds, and flawless synchronization.
          </p>
        </div>

        {/* 5-Step Process Grid Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="bg-[#181818] rounded-2xl p-5 border border-[#2C2C2C] shadow-lg flex flex-col justify-between relative group hover:border-[#D4AF37]/65 transition-all"
            >
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#222222] border border-[#D4AF37]/40 text-base font-extrabold font-mono text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors">
                  {step.num}
                </div>
                <h3 className="mt-4 text-base font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#CCCCCC] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#141414] border border-[#D4AF37]/45 text-[#D4AF37]">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Sliders, CheckCircle2, Send, Sparkles } from 'lucide-react';

interface ProjectCalculatorProps {
  onHireClickWithData: (service: string, est: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onHireClickWithData }) => {
  const [serviceType, setServiceType] = useState('Voice Over');
  const [language, setLanguage] = useState('Urdu');
  const [wordCount, setWordCount] = useState(250);
  const [needAI, setNeedAI] = useState(false);
  const [needTeamDubbing, setNeedTeamDubbing] = useState(false);

  const calculateEstimate = () => {
    const estDurationMin = Math.max(1, Math.round(wordCount / 130));
    let baseComplexity = 'Standard Production';

    if (needTeamDubbing || serviceType === 'Dubbing') {
      baseComplexity = 'Multi-Character Sync Dubbing';
    } else if (needAI || serviceType === 'AI Content') {
      baseComplexity = 'AI Video & Studio Voice Production';
    }

    return {
      estDurationMin,
      baseComplexity
    };
  };

  const { estDurationMin, baseComplexity } = calculateEstimate();

  return (
    <section className="py-20 bg-[#111111] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Estimator Controls */}
          <div className="lg:col-span-7 bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#2C2C2C] shadow-2xl space-y-6">
            <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              <span>Project Estimator & Inquiry Calculator</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
              Estimate Your Production Requirements
            </h3>

            {/* Service Type Selection */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-2.5">1. Select Service Type:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Voice Over', 'Dubbing', 'AI Content', 'Kids & Preschool'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setServiceType(st)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      serviceType === st
                        ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                        : 'bg-[#141414] text-[#E0E0E0] border-[#2E2E2E] hover:border-[#D4AF37]/60 hover:text-[#FFFFFF]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-2.5">2. Language / Accent Required:</label>
              <div className="grid grid-cols-3 gap-2.5">
                {['Urdu', 'English', 'American Accent'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      language === lang
                        ? 'bg-[#262114] text-[#D4AF37] border-[#D4AF37]'
                        : 'bg-[#141414] text-[#D4D4D4] border-[#2E2E2E] hover:border-[#D4AF37]/50 hover:text-[#FFFFFF]'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Word Count Slider */}
            <div>
              <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-sm font-bold text-[#F5F5F5] mb-2.5">
                <span>3. Estimated Word Count:</span>
                <span className="text-[#D4AF37] font-mono tabular-nums">
                  {`${wordCount.toLocaleString()} words (~${estDurationMin} min finished audio)`}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
                className="w-full accent-[#D4AF37] bg-[#2C2C2C] rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-xs text-[#B8B8B8] font-mono mt-2">
                <span>50 words (Commercial)</span>
                <span>1,000 words (E-Learning)</span>
                <span>2,500 words (Documentary)</span>
              </div>
            </div>

            {/* Add-on Toggles */}
            <div className="space-y-3 pt-4 border-t border-[#262626]">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needAI}
                  onChange={(e) => setNeedAI(e.target.checked)}
                  className="rounded accent-[#D4AF37] w-4 h-4 bg-[#141414] border-[#3A3A3A]"
                />
                <span className="text-xs sm:text-sm text-[#E0E0E0] font-medium">Include AI-Generated Video / Animation</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needTeamDubbing}
                  onChange={(e) => setNeedTeamDubbing(e.target.checked)}
                  className="rounded accent-[#D4AF37] w-4 h-4 bg-[#141414] border-[#3A3A3A]"
                />
                <span className="text-xs sm:text-sm text-[#E0E0E0] font-medium">Require Full Dubbing Team (Multi-character casting)</span>
              </label>
            </div>

          </div>

          {/* Right Column: Calculated Recommendation Summary */}
          <div className="lg:col-span-5 bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-2xl space-y-5">
            <div className="flex items-center space-x-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              <span>Recommended Production Package</span>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-[#121212] border border-[#2C2C2C] space-y-2">
                <div className="text-xs font-semibold text-[#B8B8B8] uppercase tracking-wider">Selected Scope:</div>
                <div className="text-xl font-bold text-[#FFFFFF]">
                  {serviceType} ({language})
                </div>
                <div className="text-xs sm:text-sm text-[#D4AF37] font-mono font-semibold">
                  {`${baseComplexity} • Approx. ${estDurationMin} Min Finished Output`}
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#E0E0E0] pt-1">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                  <span>24-bit Studio WAV Audio Master included</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                  <span>Fast turnaround with complimentary revisions</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                  <span>Broadcast & Commercial usage rights available</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onHireClickWithData(serviceType, `${wordCount} words (${language})`)}
              className="w-full py-3.5 px-5 rounded-xl font-extrabold text-xs sm:text-sm text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
              <span>Send Inquiry For This Estimate</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

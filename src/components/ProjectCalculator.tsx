import React, { useState } from 'react';
import { Sliders, CheckCircle2, Send, Sparkles, HelpCircle } from 'lucide-react';

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
    let estDurationMin = Math.max(1, Math.round(wordCount / 130));
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
    <section className="py-20 bg-[#F6F1E8] relative border-t border-[#E8DED0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Estimator Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-xl space-y-6">
            <div className="flex items-center space-x-2 text-[#A1814B] text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-4 h-4 text-[#C5A46D]" />
              <span>Project Estimator & Inquiry Calculator</span>
            </div>

            <h3 className="text-2xl font-bold text-[#352820]">
              Estimate Your Production Requirements
            </h3>

            {/* Service Type Selection */}
            <div>
              <label className="text-xs font-bold text-[#352820] block mb-2">1. Select Service Type:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Voice Over', 'Dubbing', 'AI Content', 'Kids & Preschool'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setServiceType(st)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      serviceType === st
                        ? 'bg-[#352820] text-white border-[#C5A46D] shadow-sm'
                        : 'bg-[#F6F1E8] text-[#352820] border-[#E8DED0] hover:border-[#C5A46D]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div>
              <label className="text-xs font-bold text-[#352820] block mb-2">2. Language / Accent Required:</label>
              <div className="grid grid-cols-3 gap-2">
                {['Urdu', 'English', 'American Accent'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      language === lang
                        ? 'bg-[#E8DED0] text-[#352820] border-[#C5A46D] font-bold'
                        : 'bg-[#F6F1E8] text-[#5C4A3E] border-[#E8DED0]'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Word Count Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-[#352820] mb-2">
                <span>3. Estimated Word Count:</span>
                <span className="text-[#A1814B] font-mono">{wordCount} words (~{estDurationMin} min finished audio)</span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                className="w-full accent-[#C5A46D] bg-[#E8DED0] rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-[#7A695E] font-mono mt-1">
                <span>50 words (Commercial)</span>
                <span>1,000 words (E-Learning)</span>
                <span>2,500 words (Documentary)</span>
              </div>
            </div>

            {/* Add-on Toggles */}
            <div className="space-y-2 pt-2 border-t border-[#E8DED0]">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needAI}
                  onChange={(e) => setNeedAI(e.target.checked)}
                  className="rounded accent-[#C5A46D] w-4 h-4 bg-white border-[#E8DED0]"
                />
                <span className="text-xs text-[#5C4A3E]">Include AI-Generated Video / Animation</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needTeamDubbing}
                  onChange={(e) => setNeedTeamDubbing(e.target.checked)}
                  className="rounded accent-[#C5A46D] w-4 h-4 bg-white border-[#E8DED0]"
                />
                <span className="text-xs text-[#5C4A3E]">Require Full Dubbing Team (Multi-character casting)</span>
              </label>
            </div>

          </div>

          {/* Right Column: Calculated Recommendation Summary */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-xl space-y-5">
            <div className="flex items-center space-x-2 text-[#A1814B] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C5A46D]" />
              <span>Recommended Production Package</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] space-y-2">
                <div className="text-xs text-[#5C4A3E]">Selected Scope:</div>
                <div className="text-lg font-bold text-[#352820]">
                  {serviceType} ({language})
                </div>
                <div className="text-xs text-[#A1814B] font-mono">
                  {baseComplexity} • Approx {estDurationMin} Min Finished Output
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#5C4A3E] pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>24-bit Studio WAV Audio Master included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Prompt delivery with revisions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  <span>Broadcast & Commercial usage rights available</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onHireClickWithData(serviceType, `${wordCount} words (${language})`)}
              className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-[#352820] hover:bg-[#271D17] shadow-lg shadow-[#352820]/20 transition-all flex items-center justify-center space-x-2 border border-[#C5A46D]/40"
            >
              <Send className="w-4 h-4 text-[#C5A46D]" />
              <span>Send Inquiry For This Estimate</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

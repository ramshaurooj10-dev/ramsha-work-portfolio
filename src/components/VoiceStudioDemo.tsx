import React, { useState } from 'react';
import { Mic, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';

export const VoiceStudioDemo: React.FC = () => {
  const voiceStyles = [
    {
      id: 'urdu-commercial',
      title: 'Urdu Commercial & TVC',
      language: 'Urdu',
      accent: 'Warm & Authoritative',
      sampleScript: 'ہر لمحہ خاص ہے، جب بات ہو اپنوں کے پیار اور معیار کی۔ رمشا شیخ کی آواز کے ساتھ۔',
      tone: 'Warm, Luxurious, Persuasive',
      driveLink: 'https://drive.google.com/file/d/1HfIvZDQi-eBT_3BB39T34y7YlgJjPy1C/view?usp=drive_link'
    },
    {
      id: 'american-tech',
      title: 'American English Corporate / Tech',
      language: 'English',
      accent: 'American Accent',
      sampleScript: 'Welcome to the future of AI production. Seamlessly connecting voice, visuals, and global scale.',
      tone: 'Crisp, Professional, Modern',
      driveLink: 'https://drive.google.com/file/d/1vc9LuMgXjSsEjMqHk9Hf7w0vwY9nLs5Y/view?usp=drive_link'
    },
    {
      id: 'dubbing-character',
      title: 'Multilingual Animation & Dubbing',
      language: 'Urdu / English',
      accent: 'Expressive Character',
      sampleScript: 'Hold on tight! We are about to enter the enchanted forest, and nothing can stop us now!',
      tone: 'Energetic, Synchronized, Emotional',
      driveLink: 'https://drive.google.com/file/d/1NQEvR4FthSpEaihFkJ4ncTzY5zYYotNf/view?usp=drive_link'
    },
    {
      id: 'kids-preschool',
      title: 'ECE Preschool & Storytelling',
      language: 'English / Urdu',
      accent: 'Cheerful & Playful',
      sampleScript: 'Let’s learn the letter A today! A is for Apple, crisp and red! Can you say Apple with me?',
      tone: 'Friendly, Engaging, Pedagogical',
      driveLink: 'https://drive.google.com/file/d/1WYQsZhcAIMk4PLg3Auen2cLo0GphYijj/view?usp=drive_link'
    }
  ];

  const [activeStyle, setActiveStyle] = useState(voiceStyles[0]);

  return (
    <section id="voice-audition" className="py-20 bg-[#F6F1E8] relative border-y border-[#E8DED0]">
      <div id="voice-studio" className="relative -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Mic className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Interactive Voice Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#352820] tracking-tight font-sans">
            Test Ramsha's Voice Styles
          </h2>
          <p className="text-[#5C4A3E] text-sm sm:text-base font-light">
            Select a vocal style below to preview Ramsha's accent, tone, and script delivery.
          </p>
        </div>

        {/* Interactive Studio Console */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-xl">
          
          {/* Left Column: Style Selection Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#A1814B] uppercase tracking-widest font-mono block mb-2">
              Select Audition Style:
            </span>
            {voiceStyles.map((style) => {
              const isSelected = activeStyle.id === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#F6F1E8] border-[#C5A46D] text-[#352820] shadow-sm'
                      : 'bg-white border-[#E8DED0] text-[#5C4A3E] hover:border-[#C5A46D] hover:text-[#352820]'
                  }`}
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#352820]">{style.title}</h3>
                    <p className="text-[11px] text-[#A1814B] mt-0.5">{style.language} • {style.accent}</p>
                  </div>
                  {isSelected && <CheckCircle className="w-5 h-5 text-[#C5A46D] flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Audio Console & Script Reader */}
          <div className="lg:col-span-7 bg-[#F6F1E8] p-6 rounded-xl border border-[#E8DED0] space-y-5">
            <div className="flex items-center justify-between border-b border-[#E8DED0] pb-3">
              <div>
                <span className="text-xs font-bold text-[#A1814B] uppercase font-mono">Audition Console</span>
                <h4 className="text-lg font-bold text-[#352820]">{activeStyle.title}</h4>
              </div>
              <span className="text-xs font-mono text-[#352820] bg-white px-2.5 py-1 rounded border border-[#E8DED0]">
                {activeStyle.tone}
              </span>
            </div>

            {/* Script Display */}
            <div className="p-4 rounded-xl bg-white border border-[#E8DED0] space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#7A695E] uppercase block">Sample Script Snippet:</span>
              <p className="text-sm text-[#352820] italic font-serif leading-relaxed">
                "{activeStyle.sampleScript}"
              </p>
            </div>

            {/* External Sample Link Button */}
            <div className="p-4 rounded-xl bg-white border border-[#E8DED0] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#352820] block">Google Drive Audio Sample</span>
                <p className="text-[11px] text-[#5C4A3E]">Pristine studio recording in HD</p>
              </div>

              <a
                href={activeStyle.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] transition-all shadow-md shadow-[#352820]/20 flex items-center space-x-1.5 flex-shrink-0 group border border-[#C5A46D]/40"
              >
                <span>Listen to Sample ↗</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

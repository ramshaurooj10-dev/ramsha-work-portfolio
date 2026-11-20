import React, { useState } from 'react';
import { Mic, CheckCircle, ExternalLink } from 'lucide-react';

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
    <section id="voice-audition" className="py-20 bg-[#141414] relative border-y border-[#262626]">
      <div id="voice-studio" className="relative -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Interactive Voice Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-sans">
            Test Ramsha's Voice Styles
          </h2>
          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal">
            Select a vocal style below to preview Ramsha's accent, tone, and script delivery.
          </p>
        </div>

        {/* Interactive Studio Console */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#2C2C2C] shadow-2xl">

          {/* Left Column: Style Selection Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest font-mono block mb-2">
              Select Audition Style:
            </span>
            {voiceStyles.map((style) => {
              const isSelected = activeStyle.id === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#222222] border-[#D4AF37] text-[#FFFFFF] shadow-md shadow-[#D4AF37]/10'
                      : 'bg-[#141414] border-[#2C2C2C] text-[#D4D4D4] hover:border-[#D4AF37]/60 hover:text-[#FFFFFF]'
                  }`}
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#FFFFFF]">{style.title}</h3>
                    <p className="text-xs text-[#D4AF37] font-medium mt-0.5">{style.language} • {style.accent}</p>
                  </div>
                  {isSelected && <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" strokeWidth={2.25} />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Audio Console & Script Reader */}
          <div className="lg:col-span-7 bg-[#121212] p-6 rounded-xl border border-[#2C2C2C] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2A2A2A] pb-3.5">
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase font-mono">Audition Console</span>
                <h4 className="text-lg font-bold text-[#FFFFFF] mt-0.5">{activeStyle.title}</h4>
              </div>
              <span className="text-xs font-mono font-semibold text-[#F5F5F5] bg-[#1E1E1E] px-3 py-1 rounded-lg border border-[#D4AF37]/30">
                {activeStyle.tone}
              </span>
            </div>

            {/* Script Display */}
            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2C2C2C] space-y-1.5">
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase block">Sample Script Snippet:</span>
              <p className="text-sm sm:text-base text-[#F5F5F5] italic font-serif leading-relaxed">
                "{activeStyle.sampleScript}"
              </p>
            </div>

            {/* External Sample Link Button */}
            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2C2C2C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold text-[#FFFFFF] block">Google Drive Audio Sample</span>
                <p className="text-xs text-[#C8C8C8] mt-0.5">Pristine studio recording in HD</p>
              </div>

              <a
                href={activeStyle.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] transition-all shadow-md shadow-[#D4AF37]/20 flex items-center justify-center space-x-1.5 shrink-0 group"
              >
                <span>Listen to Sample</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#111111] group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

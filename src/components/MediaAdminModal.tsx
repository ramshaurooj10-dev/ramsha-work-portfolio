import React, { useState } from 'react';
import { PORTFOLIO_DEMOS } from '../data/portfolioData';
import { X, Upload, Check, Link } from 'lucide-react';

interface MediaAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediaAdminModal: React.FC<MediaAdminModalProps> = ({ isOpen, onClose }) => {
  const [demos, setDemos] = useState(PORTFOLIO_DEMOS);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleUrlChange = (id: string, newUrl: string) => {
    setDemos(
      demos.map((d) => (d.id === id ? { ...d, driveLink: newUrl } : d))
    );
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#181818] border border-[#D4AF37]/40 rounded-2xl shadow-2xl p-6 max-h-[90vh] flex flex-col">

        <div className="flex items-center justify-between pb-4 border-b border-[#2C2C2C]">
          <div className="flex items-center space-x-2.5">
            <Upload className="w-5 h-5 text-[#D4AF37]" strokeWidth={2.25} />
            <h3 className="text-lg font-bold text-[#FFFFFF]">Portfolio Media Link Manager</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#CCCCCC] hover:text-[#FFFFFF] hover:bg-[#242424] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#CCCCCC] my-3">
          Attach direct audio or video URLs (MP3, WAV, MP4, Vimeo, YouTube) to replace placeholders with real media files for client auditions.
        </p>

        {/* Scrollable Demos Editor List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 my-2">
          {demos.map((d) => (
            <div key={d.id} className="p-3.5 bg-[#121212] rounded-xl border border-[#2C2C2C] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#FFFFFF]">
                <span>{d.title}</span>
                <span className="text-[11px] bg-[#222222] text-[#D4AF37] px-2 py-0.5 rounded font-mono border border-[#D4AF37]/30">{d.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                <input
                  type="text"
                  value={d.driveLink || ''}
                  onChange={(e) => handleUrlChange(d.id, e.target.value)}
                  placeholder="Paste direct Google Drive link..."
                  className="w-full px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#333333] text-xs text-[#FFFFFF] placeholder-[#A8A8A8] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#2C2C2C] flex items-center justify-between">
          <span className="text-xs text-[#CCCCCC]">
            {savedSuccess ? 'Changes saved to preview session.' : 'Changes apply live in your current session'}
          </span>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] transition-colors flex items-center space-x-1.5 shadow-sm cursor-pointer"
          >
            <Check className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
            <span>Save & Apply Links</span>
          </button>
        </div>

      </div>
    </div>
  );
};

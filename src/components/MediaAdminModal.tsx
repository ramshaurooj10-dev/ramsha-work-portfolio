import React, { useState } from 'react';
import { PORTFOLIO_DEMOS } from '../data/portfolioData';
import { X, Upload, Check, Link, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#352820]/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-white border border-[#E8DED0] rounded-2xl shadow-2xl p-6 max-h-[90vh] flex flex-col">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#E8DED0]">
          <div className="flex items-center space-x-2">
            <Upload className="w-5 h-5 text-[#C5A46D]" />
            <h3 className="text-lg font-bold text-[#352820]">Portfolio Media Link Manager</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#352820]/60 hover:text-[#352820] hover:bg-[#F6F1E8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#352820]/70 my-3">
          Attach direct audio or video URLs (MP3, WAV, MP4, Vimeo, YouTube) to replace placeholders with real media files for client auditions.
        </p>

        {/* Scrollable Demos Editor List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 my-2">
          {demos.map((d) => (
            <div key={d.id} className="p-3 bg-[#F6F1E8] rounded-xl border border-[#E8DED0] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#352820]">
                <span>{d.title}</span>
                <span className="text-[10px] bg-[#E8DED0] text-[#352820] px-2 py-0.5 rounded font-mono">{d.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link className="w-4 h-4 text-[#C5A46D] flex-shrink-0" />
                <input
                  type="text"
                  value={d.driveLink || ''}
                  onChange={(e) => handleUrlChange(d.id, e.target.value)}
                  placeholder="Paste direct Google Drive link..."
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-[#E8DED0] text-xs text-[#352820] focus:outline-none focus:border-[#C5A46D]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#E8DED0] flex items-center justify-between">
          <span className="text-[11px] text-[#352820]/70">
            {savedSuccess ? '✅ Changes saved to preview session!' : 'Changes apply live in your current session'}
          </span>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] border border-[#C5A46D]/30 transition-colors flex items-center space-x-1.5 shadow-sm"
          >
            <Check className="w-4 h-4 text-[#C5A46D]" />
            <span>Save & Apply Links</span>
          </button>
        </div>

      </div>
    </div>
  );
};

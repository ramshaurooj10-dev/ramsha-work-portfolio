import React from 'react';
import { VoiceDemo } from '../types';
import { X, ExternalLink, Globe, Mic, Film, PhoneCall, Megaphone, CheckCircle2 } from 'lucide-react';

interface AudioPlayerModalProps {
  demo: VoiceDemo | null;
  onClose: () => void;
}

export const AudioPlayerModal: React.FC<AudioPlayerModalProps> = ({ demo, onClose }) => {
  if (!demo) return null;

  // Extract drive file id for embedded preview
  const match = demo.driveLink.match(/\/file\/d\/([^\/]+)/);
  const fileId = match ? match[1] : null;
  const embedUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;

  const handleOpenDrive = () => {
    window.open(demo.driveLink, '_blank', 'noopener,noreferrer');
  };

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'international': return <Globe className="w-5 h-5 text-amber-400" />;
      case 'ad': return <Megaphone className="w-5 h-5 text-amber-400" />;
      case 'ivr': return <PhoneCall className="w-5 h-5 text-amber-400" />;
      case 'video': return <Film className="w-5 h-5 text-amber-400" />;
      default: return <Mic className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start space-x-4 pr-8">
          <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 flex-shrink-0">
            {getMediaIcon(demo.mediaType)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {demo.category}
              </span>
              <span className="text-[11px] font-mono font-medium text-slate-400">
                {demo.projectType}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1 leading-snug">{demo.title}</h3>
            <p className="text-xs text-slate-300 mt-1">
              Language: <span className="text-amber-400 font-semibold">{demo.language}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-xs text-slate-300 leading-relaxed font-light bg-slate-950 p-3 rounded-xl border border-slate-800">
          {demo.description}
        </p>

        {/* Google Drive Embed Player Frame */}
        <div className="mt-4 flex-1 min-h-[220px] sm:min-h-[280px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full min-h-[220px] sm:min-h-[280px] border-0"
              allow="autoplay"
              title={demo.title}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-amber-400" />
              <p className="text-xs text-slate-300">Google Drive sample ready for audition.</p>
            </div>
          )}
        </div>

        {/* Action Button Bar */}
        <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-4">
          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
            Direct Google Drive Sample
          </span>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={handleOpenDrive}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>{demo.buttonText} (Google Drive)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};


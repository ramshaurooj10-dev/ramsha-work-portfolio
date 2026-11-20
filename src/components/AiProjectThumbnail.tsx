import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { getDriveThumbnail } from '../data/aiPortfolioData';

interface AiProjectThumbnailProps {
  driveLink: string;
  title: string;
  category?: string;
  videoType?: string;
  categoryIcon?: React.ReactNode;
  showBadges?: boolean;
  className?: string;
}

export const AiProjectThumbnail: React.FC<AiProjectThumbnailProps> = ({
  driveLink,
  title,
  category,
  videoType,
  categoryIcon,
  showBadges = true,
  className = 'h-44 w-full border-b border-[#262626]',
}) => {
  const thumbUrl = getDriveThumbnail(driveLink);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [driveLink]);

  const showImage = Boolean(thumbUrl) && !imgFailed;

  return (
    <div className={`relative bg-[#111111] overflow-hidden ${className}`}>
      {showImage && thumbUrl ? (
        <>
          <img
            src={thumbUrl}
            alt={`${title} video thumbnail`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#111111]/25 to-transparent pointer-events-none" />
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#221D11] via-[#151515] to-[#0B0B0B] flex flex-col items-center justify-center px-5 text-center relative">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center mb-2.5 shadow-lg shadow-black/40 group-hover:scale-105 group-hover:bg-[#D4AF37]/25 transition-all duration-300">
            <Play className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37] ml-0.5" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#F5F5F5] line-clamp-2 max-w-[85%] leading-snug">
            {title}
          </span>
        </div>
      )}

      {showBadges && category && (
        <div className="absolute top-3 left-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#111111]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-sm">
          {categoryIcon}
          <span>{category}</span>
        </div>
      )}

      {showBadges && videoType && (
        <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-[#111111]/85 text-[11px] font-mono font-semibold text-[#E5E5E5] border border-[#333333]">
          {videoType}
        </span>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  Sparkles,
  Mic,
  Film,
  Globe,
  FolderArchive,
  ExternalLink,
  Play,
  Search,
  Filter,
  CheckCircle2,
  X,
  Megaphone,
  Camera,
  Video,
  Smile,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DEMOS } from '../data/portfolioData';
import { DUBBING_PROJECTS, DUBBING_FILTERS, DUBBING_CAPABILITIES } from '../data/dubbingData';
import { AI_PORTFOLIO_PROJECTS, AI_PORTFOLIO_CATEGORIES } from '../data/aiPortfolioData';
import {
  getVoiceThumbnail,
  getDubbingThumbnail,
} from '../data/mediaAssets';
import { AiProjectThumbnail } from './AiProjectThumbnail';
import { VoiceDemo, DubbingProject, AiContentProject } from '../types';

export type MasterTabType = 'ai' | 'urdu' | 'english' | 'dubbing' | 'whole';

interface MasterPortfolioSectionProps {
  activeTab?: MasterTabType;
  onTabChange?: (tab: MasterTabType) => void;
  onOpenContactModal?: () => void;
}

export const MasterPortfolioSection: React.FC<MasterPortfolioSectionProps> = ({
  activeTab: controlledTab,
  onTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<MasterTabType>('ai');
  const currentTab = controlledTab ?? internalTab;

  const handleSelectTab = (tab: MasterTabType) => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setInternalTab(tab);
    }
  };

  // Sub-category filters for each section
  const [aiFilter, setAiFilter] = useState<string>('All');
  const [aiSearch, setAiSearch] = useState<string>('');
  const [activeVideoModal, setActiveVideoModal] = useState<AiContentProject | null>(null);

  const [urduFilter, setUrduFilter] = useState<string>('All');
  const [englishFilter, setEnglishFilter] = useState<string>('All');
  const [dubbingFilter, setDubbingFilter] = useState<string>('All');

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Populated AI categories so no filter chip leads to an empty screen
  const activeAiCategories = AI_PORTFOLIO_CATEGORIES.filter(
    (cat) =>
      cat === 'All' ||
      AI_PORTFOLIO_PROJECTS.some(
        (p) => p.category === cat || p.secondaryCategory === cat
      )
  );

  // 1. Filtered AI Content
  const getFilteredAi = (): AiContentProject[] => {
    return AI_PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory =
        aiFilter === 'All' ||
        proj.category === aiFilter ||
        (proj.secondaryCategory && proj.secondaryCategory === aiFilter);
      const matchesSearch =
        aiSearch === '' ||
        proj.title.toLowerCase().includes(aiSearch.toLowerCase()) ||
        proj.description.toLowerCase().includes(aiSearch.toLowerCase()) ||
        proj.videoType.toLowerCase().includes(aiSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  };

  // 2. Filtered Urdu VO
  const getFilteredUrdu = (): VoiceDemo[] => {
    const urduDemos = PORTFOLIO_DEMOS.filter((d) =>
      d.language.toLowerCase().includes('urdu')
    );
    if (urduFilter === 'All') return urduDemos;

    const f = urduFilter.toLowerCase();
    return urduDemos.filter((demo) => {
      const cat = demo.category.toLowerCase();
      const proj = demo.projectType.toLowerCase();
      const title = demo.title.toLowerCase();

      if (f === 'commercial / tvc')
        return (
          cat.includes('commercial') ||
          cat.includes('ad') ||
          proj.includes('commercial') ||
          proj.includes('tvc') ||
          title.includes('advertisement')
        );
      if (f === 'documentary')
        return (
          cat.includes('documentary') ||
          proj.includes('documentary') ||
          title.includes('documentary')
        );
      if (f === 'explainer')
        return (
          cat.includes('explainer') ||
          proj.includes('explainer') ||
          title.includes('explainer')
        );
      if (f === 'corporate')
        return (
          cat.includes('corporate') ||
          cat.includes('institutional') ||
          proj.includes('corporate')
        );
      if (f === 'poetry')
        return (
          cat.includes('poetry') ||
          demo.isPoetryStyle ||
          title.includes('poetry')
        );
      if (f === 'ivr')
        return cat.includes('ivr') || proj.includes('ivr') || title.includes('ivr');
      return true;
    });
  };

  // 3. Filtered English VO
  const getFilteredEnglish = (): VoiceDemo[] => {
    const englishDemos = PORTFOLIO_DEMOS.filter((d) =>
      d.language.toLowerCase().includes('english')
    );
    if (englishFilter === 'All') return englishDemos;

    const f = englishFilter.toLowerCase();
    return englishDemos.filter((demo) => {
      const cat = demo.category.toLowerCase();
      const proj = demo.projectType.toLowerCase();
      const title = demo.title.toLowerCase();
      const accent = demo.accent ? demo.accent.toLowerCase() : '';

      if (f === 'american accent')
        return (
          cat.includes('american') ||
          accent.includes('american') ||
          title.includes('american') ||
          title.includes('arizona')
        );
      if (f === 'documentary')
        return (
          cat.includes('documentary') ||
          proj.includes('documentary') ||
          title.includes('documentary') ||
          title.includes('blackholes')
        );
      if (f === 'corporate')
        return (
          cat.includes('corporate') ||
          cat.includes('financial') ||
          title.includes('bank')
        );
      if (f === 'ivr')
        return cat.includes('ivr') || proj.includes('ivr') || title.includes('ivr');
      if (f === 'commercial')
        return cat.includes('commercial') || proj.includes('commercial');
      return true;
    });
  };

  // 4. Filtered Dubbing
  const getFilteredDubbing = (): DubbingProject[] => {
    if (dubbingFilter === 'All') return DUBBING_PROJECTS;

    const f = dubbingFilter.toLowerCase();
    return DUBBING_PROJECTS.filter((proj) => {
      const cat = proj.category.toLowerCase();
      const lang = proj.language.toLowerCase();
      const type = proj.type.toLowerCase();
      const title = proj.title.toLowerCase();

      if (f === 'urdu dubbing') return lang === 'urdu';
      if (f === 'english dubbing') return lang === 'english';
      if (f === 'drama')
        return (
          cat.includes('drama') ||
          type.includes('drama') ||
          title.includes('drama')
        );
      if (f === 'movie')
        return (
          cat.includes('movie') ||
          type.includes('movie') ||
          title.includes('movie')
        );
      if (f === 'cartoon')
        return (
          cat.includes('cartoon') ||
          type.includes('cartoon') ||
          title.includes('cartoon') ||
          title.includes('tangled')
        );
      if (f === 'character dubbing')
        return (
          cat.includes('character') ||
          type.includes('character') ||
          title.includes('baby') ||
          title.includes('mermaid')
        );
      return true;
    });
  };

  // Unified Gold + Neutral Category Icons (no rainbow/pastel colors)
  const getAiCategoryIcon = (category: string) => {
    switch (category) {
      case 'Ads':
      case 'Product Ads':
        return <Megaphone className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />;
      case 'UGC':
      case 'UGC & Brands':
        return <Camera className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />;
      case 'Cinematic':
      case 'AI Movies':
        return <Film className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />;
      case '3D Animation':
      case '2D Animation':
        return <Video className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />;
      case 'Kids & Cartoons':
      case 'Cartoons':
      case 'Rhymes':
      case 'Kids & Education':
        return <Smile className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />;
    }
  };

  const masterSections = [
    {
      id: 'ai' as MasterTabType,
      title: 'AI Content Creation',
      subtitle: 'Ads, UGC, 3D Commercials & Films',
      count: `${AI_PORTFOLIO_PROJECTS.length} Projects`,
      icon: Sparkles,
    },
    {
      id: 'urdu' as MasterTabType,
      title: 'Urdu Voice Over',
      subtitle: 'Commercial, Documentary & UN VO',
      count: `${PORTFOLIO_DEMOS.filter((d) => d.language === 'Urdu').length} Samples`,
      icon: Mic,
    },
    {
      id: 'english' as MasterTabType,
      title: 'English Voice Over',
      subtitle: 'American Accent, Doc & Corporate',
      count: `${PORTFOLIO_DEMOS.filter((d) => d.language === 'English').length} Samples`,
      icon: Globe,
    },
    {
      id: 'dubbing' as MasterTabType,
      title: 'Dubbing',
      subtitle: 'Dramas, Movies, Cartoons & Sync',
      count: `${DUBBING_PROJECTS.length} Projects`,
      icon: Film,
    },
    {
      id: 'whole' as MasterTabType,
      title: 'Whole Portfolios',
      subtitle: 'Complete Master Drive Archives',
      count: '4 Full Archives',
      icon: FolderArchive,
    },
  ];

  const wholePortfolioCards = [
    {
      id: 'whole-urdu',
      icon: Mic,
      badge: 'Master Archive • Urdu',
      title: 'Whole Portfolio of Urdu',
      description:
        'Complete master library of all Urdu voiceovers including UN & humanitarian narrations, television commercials (TVCs), corporate documentaries, institutional videos, IVR menus, and Urdu poetry.',
      bullets: [
        'Complete Urdu TVCs & Brand Campaigns',
        'UN, UNICEF & Institutional Documentaries',
        'Corporate Explainers & IVR Prompts',
      ],
      buttonLabel: 'Open Whole Portfolio of Urdu',
      driveUrl: 'https://drive.google.com/drive/folders/1XqMqItgrGE0tPAMSkpovxPMQWQPHxKrl?usp=drive_link',
    },
    {
      id: 'whole-english',
      icon: Globe,
      badge: 'Master Archive • English',
      title: 'Whole Portfolio of English',
      description:
        'Comprehensive English master archive featuring international neutral English narrations, authentic North American accent recordings, space & science documentaries, banking systems, and corporate communication.',
      bullets: [
        'Authentic North American Accent Samples',
        'Documentary & Science Storytelling Voiceovers',
        'Financial Institutions & National Bank VO',
      ],
      buttonLabel: 'Open Whole Portfolio of English',
      driveUrl: 'https://drive.google.com/drive/folders/1nMGAjJDwh5fxh4JaQEMqFKirz5y9Ne75?usp=drive_link',
    },
    {
      id: 'whole-dubbing',
      icon: Film,
      badge: 'Master Archive • Dubbing',
      title: 'Whole Portfolio of Dubbing',
      description:
        'Full sync dubbing library containing serialized drama dubbing (Chinese, Turkish, Pakistani), movie productions, cartoon character voices, baby voice acting, fantasy mermaid roles, and full ensemble team dubbing.',
      bullets: [
        'International Drama Series & Historical Shows',
        'Animated Feature Films & Disney Style Cartoons',
        'Multilingual Production Team Sync Catalog',
      ],
      buttonLabel: 'Open Whole Portfolio of Dubbing',
      driveUrl: 'https://drive.google.com/drive/folders/1LyNnxL6UwaSUTvyCBAuqoOHzEJm1Dv9a?usp=drive_link',
    },
    {
      id: 'whole-ai',
      icon: Sparkles,
      badge: 'Master Archive • AI Content',
      title: 'Whole Portfolio of AI Content Creation',
      description:
        'Complete master drive of all AI-generated media: Prince Biscuit claymation, Slice Juice commercial, CGI automotive ads, luxury watch & perfume spots, AI UGC presenters, cinematic reels, and educational modules.',
      bullets: [
        '15+ Commercial Brand & Food Claymations',
        'Realistic AI UGC Host & Influencer Ads',
        'Cinematic Trailers, 3D Animations & Kids Series',
      ],
      buttonLabel: 'Open Whole Portfolio of AI Content',
      driveUrl: 'https://drive.google.com/drive/folders/1mhaMua3Y-D4oJaHoPbKUMPsR4M7zijhe?usp=drive_link',
    },
  ];

  return (
    <section
      id="portfolio-hub"
      className="py-20 bg-[#111111] relative overflow-hidden border-t border-[#262626]"
    >
      {/* Subtle Ambient Gold Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#D4AF37]/6 rounded-full blur-[180px] pointer-events-none" />

      {/* Anchor markers for hash links */}
      <div id="portfolio" className="relative -top-24 pointer-events-none" />
      <div id="voice-over" className="relative -top-24 pointer-events-none" />
      <div id="dubbing" className="relative -top-24 pointer-events-none" />
      <div id="ai-content" className="relative -top-24 pointer-events-none" />
      <div id="ai-portfolio" className="relative -top-24 pointer-events-none" />
      <div id="whole-portfolio" className="relative -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Master Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Interactive Portfolio Hub</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight font-sans uppercase">
            Work & Portfolio Samples
          </h2>

          <p className="text-[#D4D4D4] text-sm sm:text-base font-normal leading-relaxed">
            Select a domain below to browse its dedicated portfolio. Each section includes specialized sub-categories and direct samples.
          </p>
        </div>

        {/* 5 MAIN TOP-LEVEL SECTION SELECTOR TABS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
          {masterSections.map((sec) => {
            const isCurrent = currentTab === sec.id;
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelectTab(sec.id)}
                className={`relative group p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isCurrent
                    ? 'bg-[#1D1A12] border-[#D4AF37] ring-1 ring-[#D4AF37]/60 shadow-lg shadow-[#D4AF37]/10'
                    : 'bg-[#181818] hover:bg-[#1F1F1F] border-[#2C2C2C] hover:border-[#D4AF37]/50 text-[#F5F5F5]'
                }`}
              >
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      isCurrent
                        ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37]'
                        : 'bg-[#222222] text-[#D4AF37] border-[#D4AF37]/30 group-hover:border-[#D4AF37]'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      isCurrent
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40'
                        : 'bg-[#222222] text-[#D4D4D4] border-[#333333]'
                    }`}
                  >
                    {sec.count}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base leading-snug text-[#FFFFFF]">
                    {sec.title}
                  </h3>
                  <p className="text-xs leading-normal line-clamp-1 text-[#B8B8B8]">
                    {sec.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ===================================================================== */}
        {/* SECTION 1: AI CONTENT CREATION PORTFOLIO                              */}
        {/* ===================================================================== */}
        {currentTab === 'ai' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262626]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  <span>AI Video & Visual Production</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  AI Content Creation Portfolio
                </h3>
                <p className="text-[#D4D4D4] text-sm mt-1.5 max-w-2xl font-normal">
                  Explore {AI_PORTFOLIO_PROJECTS.length} AI-generated and AI-assisted projects across commercial ads, UGC videos, cinematic shorts, 3D claymations, and children's content.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                <input
                  type="text"
                  placeholder="Search AI projects..."
                  value={aiSearch}
                  onChange={(e) => setAiSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#181818] border border-[#333333] text-sm text-[#FFFFFF] placeholder-[#A8A8A8] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Wrapping Sub-category Filter Row */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="p-2 rounded-xl bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                <Filter className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              </div>
              {activeAiCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAiFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    aiFilter === cat
                      ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                      : 'bg-[#181818] text-[#E0E0E0] hover:text-[#FFFFFF] hover:border-[#D4AF37]/60 border-[#2E2E2E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* AI Projects Grid with Poster Thumbnails */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredAi().map((proj) => {
                const hasLocalVideo = Boolean(
                  proj.videoUrl ||
                    (proj.driveLink &&
                      (proj.driveLink.startsWith('/') ||
                        proj.driveLink.includes('.mp4')))
                );
                return (
                  <div
                    key={proj.id}
                    className="bg-[#181818] rounded-2xl border border-[#2C2C2C] hover:border-[#D4AF37]/65 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
                  >
                    <div>
                      {/* Project Drive Video Thumbnail */}
                      <AiProjectThumbnail
                        driveLink={proj.driveLink}
                        title={proj.title}
                        category={proj.category}
                        videoType={proj.videoType}
                        categoryIcon={getAiCategoryIcon(proj.category)}
                      />

                      <div className="p-5 pb-0">
                        {/* Single-color White Card Title */}
                        <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {proj.title}
                        </h4>

                        {/* Specific Tailored Description */}
                        <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 font-normal leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="p-5 pt-4 mt-4 border-t border-[#242424]">
                      {hasLocalVideo ? (
                        <button
                          onClick={() => setActiveVideoModal(proj)}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-extrabold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 text-[#111111] fill-current" />
                          <span>Watch Video</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => openExternal(proj.driveLink)}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#202020] hover:bg-[#D4AF37] text-[#F5F5F5] hover:text-[#111111] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.25} />
                          <span>Watch on Google Drive</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {getFilteredAi().length === 0 && (
              <div className="text-center py-12 bg-[#181818] rounded-2xl border border-[#2C2C2C] p-6">
                <p className="text-[#D4D4D4] text-sm">
                  No AI projects found matching your search.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* SECTION 2: URDU VOICE OVER PORTFOLIO                                  */}
        {/* ===================================================================== */}
        {currentTab === 'urdu' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262626]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Mic className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  <span>Pillar 01 • Urdu Voice Artistry</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  Urdu Voice Over Portfolio
                </h3>
                <p className="text-[#D4D4D4] text-sm mt-1.5 max-w-2xl font-normal">
                  High-profile Urdu voice-over samples recorded for international organizations (United Nations), commercial television commercials, documentaries, corporate explainers, IVR, and poetry.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#181818] border border-[#2C2C2C] text-xs font-medium text-[#D4D4D4] shrink-0">
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Samples open on Google Drive in HD Audio</span>
              </div>
            </div>

            {/* Wrapping Filter Row */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="p-2 rounded-xl bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                <Filter className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              </div>
              {['All', 'Commercial / TVC', 'Documentary', 'Explainer', 'Corporate', 'Poetry', 'IVR'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setUrduFilter(sub)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    urduFilter === sub
                      ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                      : 'bg-[#181818] text-[#E0E0E0] hover:text-[#FFFFFF] hover:border-[#D4AF37]/60 border-[#2E2E2E]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Urdu Samples Grid (Poster Thumbnails + External Google Drive Links, NO Audio Player) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredUrdu().map((demo) => {
                const thumbSrc = getVoiceThumbnail(demo.category, demo.title);
                return (
                  <div
                    key={demo.id}
                    className="bg-[#181818] rounded-2xl border border-[#2C2C2C] hover:border-[#D4AF37]/65 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
                  >
                    <div>
                      <div className="relative h-40 w-full bg-[#111111] overflow-hidden border-b border-[#262626]">
                        <img
                          src={thumbSrc}
                          alt={`${demo.title} studio visual`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#111111]/25 to-transparent" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#111111]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-sm">
                          Urdu
                        </span>
                        <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-[#111111]/85 text-[11px] font-mono font-semibold text-[#E5E5E5] border border-[#333333]">
                          {demo.category}
                        </span>
                      </div>

                      <div className="p-5 pb-0">
                        <h4 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {demo.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 font-normal leading-relaxed">
                          {demo.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-4 mt-4 border-t border-[#242424]">
                      <button
                        onClick={() => openExternal(demo.driveLink)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#202020] hover:bg-[#D4AF37] text-[#F5F5F5] hover:text-[#111111] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <span>Listen to Sample</span>
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.25} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* SECTION 3: ENGLISH VOICE OVER PORTFOLIO                               */}
        {/* ===================================================================== */}
        {currentTab === 'english' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262626]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  <span>Pillar 01 • English & American Accent</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  English Voice Over Portfolio
                </h3>
                <p className="text-[#D4D4D4] text-sm mt-1.5 max-w-2xl font-normal">
                  International English voice-over samples including authentic North American accent narration, television documentary voiceovers, banking corporate presentations, and IVR systems.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#181818] border border-[#2C2C2C] text-xs font-medium text-[#D4D4D4] shrink-0">
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Samples open on Google Drive in HD Audio</span>
              </div>
            </div>

            {/* Wrapping Filter Row */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="p-2 rounded-xl bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                <Filter className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              </div>
              {['All', 'American Accent', 'Documentary', 'Corporate', 'IVR'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setEnglishFilter(sub)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    englishFilter === sub
                      ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                      : 'bg-[#181818] text-[#E0E0E0] hover:text-[#FFFFFF] hover:border-[#D4AF37]/60 border-[#2E2E2E]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* English Samples Grid (Poster Thumbnails + External Google Drive Links, NO Audio Player) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredEnglish().map((demo) => {
                const thumbSrc = getVoiceThumbnail(demo.category, demo.title);
                return (
                  <div
                    key={demo.id}
                    className="bg-[#181818] rounded-2xl border border-[#2C2C2C] hover:border-[#D4AF37]/65 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
                  >
                    <div>
                      <div className="relative h-40 w-full bg-[#111111] overflow-hidden border-b border-[#262626]">
                        <img
                          src={thumbSrc}
                          alt={`${demo.title} studio visual`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#111111]/25 to-transparent" />
                        <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#111111]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-sm">
                            {demo.accent ? demo.accent : 'English'}
                          </span>
                          {demo.accent && (
                            <span className="px-2 py-1 rounded-lg text-[11px] font-bold bg-[#1F1F1F]/90 text-[#F5F5F5] border border-[#3A3A3A]">
                              US Accent
                            </span>
                          )}
                        </div>
                        <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-[#111111]/85 text-[11px] font-mono font-semibold text-[#E5E5E5] border border-[#333333]">
                          {demo.category}
                        </span>
                      </div>

                      <div className="p-5 pb-0">
                        <h4 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {demo.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 font-normal leading-relaxed">
                          {demo.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-4 mt-4 border-t border-[#242424]">
                      <button
                        onClick={() => openExternal(demo.driveLink)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#202020] hover:bg-[#D4AF37] text-[#F5F5F5] hover:text-[#111111] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <span>Listen to Sample</span>
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.25} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* SECTION 4: DUBBING PORTFOLIO                                          */}
        {/* ===================================================================== */}
        {currentTab === 'dubbing' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262626]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Film className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  <span>Pillar 02 • Dubbing & Multilingual Production</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  Dubbing & Multilingual Production
                </h3>
                <p className="text-[#D4D4D4] text-sm mt-1.5 max-w-2xl font-normal">
                  "Ramsha personally performs dubbing and also works with a professional dubbing team capable of handling multilingual, character-based and larger productions."
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#181818] border border-[#2C2C2C] text-xs font-medium text-[#D4D4D4] shrink-0">
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Sync samples open on Google Drive</span>
              </div>
            </div>

            {/* Highlighted Capabilities */}
            <div className="flex flex-wrap gap-2">
              {DUBBING_CAPABILITIES.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-lg bg-[#181818] border border-[#2E2E2E] text-[#F5F5F5] text-xs font-semibold flex items-center space-x-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  <span>{cap}</span>
                </span>
              ))}
            </div>

            {/* Wrapping Sub-categories Filter Row */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="p-2 rounded-xl bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                <Filter className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
              </div>
              {DUBBING_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setDubbingFilter(f)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    dubbingFilter === f
                      ? 'bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                      : 'bg-[#181818] text-[#E0E0E0] hover:text-[#FFFFFF] hover:border-[#D4AF37]/60 border-[#2E2E2E]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Dubbing Projects Grid with Poster Thumbnails */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredDubbing().map((proj) => {
                const thumbSrc = getDubbingThumbnail(proj.category, proj.title);
                return (
                  <div
                    key={proj.id}
                    className="bg-[#181818] rounded-2xl border border-[#2C2C2C] hover:border-[#D4AF37]/65 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
                  >
                    <div>
                      <div className="relative h-40 w-full bg-[#111111] overflow-hidden border-b border-[#262626]">
                        <img
                          src={thumbSrc}
                          alt={`${proj.title} dubbing poster`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#111111]/25 to-transparent" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#111111]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-sm">
                          {proj.language}
                        </span>
                        <span className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-[#111111]/85 text-[11px] font-mono font-semibold text-[#E5E5E5] border border-[#333333]">
                          {proj.category}
                        </span>
                      </div>

                      <div className="p-5 pb-0">
                        <h4 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {proj.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 font-normal leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-4 mt-4 border-t border-[#242424]">
                      <button
                        onClick={() => openExternal(proj.driveLink)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#202020] hover:bg-[#D4AF37] text-[#F5F5F5] hover:text-[#111111] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <span>Listen / View Sample</span>
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.25} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* SECTION 5: WHOLE PORTFOLIOS (MASTER DRIVE ARCHIVES)                   */}
        {/* ===================================================================== */}
        {currentTab === 'whole' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262626]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <FolderArchive className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  <span>Master Drive Archives</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  Whole Portfolio Archives
                </h3>
                <p className="text-[#D4D4D4] text-sm mt-1.5 max-w-2xl font-normal">
                  Direct master folders containing Ramsha's complete, comprehensive body of work across each creative specialization. Select any whole portfolio below.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#1A1A1A] border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37] shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                <span>Google Drive Master Archives Connected</span>
              </div>
            </div>

            {/* 4 Grand Portfolio Cards — Unified Dark & Gold */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wholePortfolioCards.map((card) => {
                const IconComp = card.icon;
                return (
                  <div
                    key={card.id}
                    className="bg-[#181818] rounded-3xl border border-[#2C2C2C] hover:border-[#D4AF37]/65 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/6 rounded-bl-full pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between mb-5 gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#222222] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors">
                          <IconComp className="w-6 h-6" strokeWidth={2.25} />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/35">
                          {card.badge}
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-extrabold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                        {card.title}
                      </h4>

                      <p className="text-sm text-[#CCCCCC] mt-3 font-normal leading-relaxed">
                        {card.description}
                      </p>

                      <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#E0E0E0]">
                        {card.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-center space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#262626]">
                      <button
                        onClick={() => openExternal(card.driveUrl)}
                        className="w-full py-3.5 px-5 rounded-xl bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs sm:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                      >
                        <span>{card.buttonLabel}</span>
                        <ExternalLink className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-[#181818] border border-[#D4AF37]/45 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C2C2C] bg-[#141414]">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/35">
                  {activeVideoModal.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#FFFFFF] truncate max-w-md">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-8 h-8 rounded-full bg-[#242424] hover:bg-[#333333] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-black aspect-video flex items-center justify-center relative">
              <video
                src={activeVideoModal.videoUrl || activeVideoModal.driveLink}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="px-6 py-4 bg-[#141414] border-t border-[#2C2C2C] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#D4D4D4] line-clamp-2">
                {activeVideoModal.description}
              </p>
              {activeVideoModal.driveLink && activeVideoModal.driveLink.startsWith('http') && (
                <button
                  onClick={() => openExternal(activeVideoModal.driveLink)}
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-extrabold whitespace-nowrap flex items-center space-x-1.5 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Google Drive</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

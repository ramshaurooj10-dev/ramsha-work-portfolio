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
  BookOpen, 
  PhoneCall, 
  Building2, 
  Music, 
  Layers,
  ArrowRight,
  ShieldCheck,
  Clapperboard,
  Download,
  FolderOpen
} from 'lucide-react';
import { PORTFOLIO_DEMOS } from '../data/portfolioData';
import { DUBBING_PROJECTS, DUBBING_FILTERS, DUBBING_CAPABILITIES } from '../data/dubbingData';
import { AI_PORTFOLIO_PROJECTS, AI_PORTFOLIO_CATEGORIES } from '../data/aiPortfolioData';
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
  onOpenContactModal
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

  // Helper to open links
  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 1. Filtered AI Content
  const getFilteredAi = (): AiContentProject[] => {
    return AI_PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory = aiFilter === 'All' || 
        proj.category === aiFilter || 
        (proj.secondaryCategory && proj.secondaryCategory === aiFilter);
      const matchesSearch = aiSearch === '' || 
        proj.title.toLowerCase().includes(aiSearch.toLowerCase()) ||
        proj.description.toLowerCase().includes(aiSearch.toLowerCase()) ||
        proj.videoType.toLowerCase().includes(aiSearch.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  };

  // 2. Filtered Urdu VO
  const getFilteredUrdu = (): VoiceDemo[] => {
    const urduDemos = PORTFOLIO_DEMOS.filter((d) => d.language.toLowerCase().includes('urdu'));
    if (urduFilter === 'All') return urduDemos;

    const f = urduFilter.toLowerCase();
    return urduDemos.filter((demo) => {
      const cat = demo.category.toLowerCase();
      const proj = demo.projectType.toLowerCase();
      const title = demo.title.toLowerCase();

      if (f === 'commercial / tvc') return cat.includes('commercial') || cat.includes('ad') || proj.includes('commercial') || proj.includes('tvc') || title.includes('advertisement');
      if (f === 'documentary') return cat.includes('documentary') || proj.includes('documentary') || title.includes('documentary');
      if (f === 'explainer') return cat.includes('explainer') || proj.includes('explainer') || title.includes('explainer');
      if (f === 'corporate') return cat.includes('corporate') || cat.includes('institutional') || proj.includes('corporate');
      if (f === 'poetry') return cat.includes('poetry') || demo.isPoetryStyle || title.includes('poetry');
      if (f === 'ivr') return cat.includes('ivr') || proj.includes('ivr') || title.includes('ivr');
      return true;
    });
  };

  // 3. Filtered English VO
  const getFilteredEnglish = (): VoiceDemo[] => {
    const englishDemos = PORTFOLIO_DEMOS.filter((d) => d.language.toLowerCase().includes('english'));
    if (englishFilter === 'All') return englishDemos;

    const f = englishFilter.toLowerCase();
    return englishDemos.filter((demo) => {
      const cat = demo.category.toLowerCase();
      const proj = demo.projectType.toLowerCase();
      const title = demo.title.toLowerCase();
      const accent = demo.accent ? demo.accent.toLowerCase() : '';

      if (f === 'american accent') return cat.includes('american') || accent.includes('american') || title.includes('american') || title.includes('arizona');
      if (f === 'documentary') return cat.includes('documentary') || proj.includes('documentary') || title.includes('documentary') || title.includes('blackholes');
      if (f === 'corporate') return cat.includes('corporate') || cat.includes('financial') || title.includes('bank');
      if (f === 'ivr') return cat.includes('ivr') || proj.includes('ivr') || title.includes('ivr');
      if (f === 'commercial') return cat.includes('commercial') || proj.includes('commercial');
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
      if (f === 'drama') return cat.includes('drama') || type.includes('drama') || title.includes('drama');
      if (f === 'movie') return cat.includes('movie') || type.includes('movie') || title.includes('movie');
      if (f === 'cartoon') return cat.includes('cartoon') || type.includes('cartoon') || title.includes('cartoon') || title.includes('tangled');
      if (f === 'character dubbing') return cat.includes('character') || type.includes('character') || title.includes('baby') || title.includes('mermaid');
      return true;
    });
  };

  // Categories helper styling for AI
  const getAiCategoryTheme = (category: string) => {
    switch (category) {
      case 'Ads':
      case 'Product Ads':
        return { icon: <Megaphone className="w-4 h-4 text-[#D97706]" />, badge: 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]' };
      case 'UGC':
      case 'UGC & Brands':
        return { icon: <Camera className="w-4 h-4 text-[#059669]" />, badge: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]' };
      case 'Cinematic':
      case 'AI Movies':
        return { icon: <Film className="w-4 h-4 text-[#4F46E5]" />, badge: 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]' };
      case '3D Animation':
      case '2D Animation':
        return { icon: <Video className="w-4 h-4 text-[#EA580C]" />, badge: 'bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]' };
      case 'Kids & Cartoons':
      case 'Cartoons':
      case 'Rhymes':
      case 'Kids & Education':
        return { icon: <Smile className="w-4 h-4 text-[#E11D48]" />, badge: 'bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]' };
      case 'Marketing':
      case 'AI Influencer':
        return { icon: <Sparkles className="w-4 h-4 text-[#7C3AED]" />, badge: 'bg-[#FAF5FF] text-[#7C3AED] border-[#E9D5FF]' };
      default:
        return { icon: <Sparkles className="w-4 h-4 text-[#C5A46D]" />, badge: 'bg-[#FBF8F3] text-[#A1814B] border-[#E8DED0]' };
    }
  };

  // Master section definitions
  const masterSections = [
    {
      id: 'ai' as MasterTabType,
      title: 'AI Content Creation',
      shortTitle: 'AI Content',
      subtitle: 'Ads, UGC, 3D Commercials & Films',
      count: `${AI_PORTFOLIO_PROJECTS.length} Projects`,
      icon: Sparkles,
      accentColor: 'text-[#D97706]',
      activeBg: 'bg-[#352820] text-white shadow-lg shadow-[#352820]/15'
    },
    {
      id: 'urdu' as MasterTabType,
      title: 'Urdu Voice Over',
      shortTitle: 'Urdu VO',
      subtitle: 'Commercial, Documentary & UN VO',
      count: `${PORTFOLIO_DEMOS.filter(d => d.language === 'Urdu').length} Samples`,
      icon: Mic,
      accentColor: 'text-[#059669]',
      activeBg: 'bg-[#352820] text-white shadow-lg shadow-[#352820]/15'
    },
    {
      id: 'english' as MasterTabType,
      title: 'English Voice Over',
      shortTitle: 'English VO',
      subtitle: 'American Accent, Doc & Corporate',
      count: `${PORTFOLIO_DEMOS.filter(d => d.language === 'English').length} Samples`,
      icon: Globe,
      accentColor: 'text-[#2563EB]',
      activeBg: 'bg-[#352820] text-white shadow-lg shadow-[#352820]/15'
    },
    {
      id: 'dubbing' as MasterTabType,
      title: 'Dubbing',
      shortTitle: 'Dubbing',
      subtitle: 'Dramas, Movies, Cartoons & Sync',
      count: `${DUBBING_PROJECTS.length} Projects`,
      icon: Film,
      accentColor: 'text-[#7C3AED]',
      activeBg: 'bg-[#352820] text-white shadow-lg shadow-[#352820]/15'
    },
    {
      id: 'whole' as MasterTabType,
      title: 'Whole Portfolios',
      shortTitle: 'Master Drives',
      subtitle: 'Complete Master Drive Archives',
      count: '4 Full Archives',
      icon: FolderArchive,
      accentColor: 'text-[#E11D48]',
      activeBg: 'bg-[#352820] text-white shadow-lg shadow-[#352820]/15'
    }
  ];

  return (
    <section id="portfolio-hub" className="py-20 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[#C5A46D]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[700px] h-[350px] bg-[#E8DED0]/60 rounded-full blur-[160px] pointer-events-none" />

      {/* Hidden anchors to maintain backwards compatibility with existing nav hash jumps */}
      <div id="portfolio" className="relative -top-24 pointer-events-none" />
      <div id="voice-over" className="relative -top-24 pointer-events-none" />
      <div id="dubbing" className="relative -top-24 pointer-events-none" />
      <div id="ai-content" className="relative -top-24 pointer-events-none" />
      <div id="ai-portfolio" className="relative -top-24 pointer-events-none" />
      <div id="whole-portfolio" className="relative -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Master Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Interactive Portfolio Hub</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            Work & Portfolio Samples
          </h2>

          <p className="text-[#5C4A3E] text-sm sm:text-base font-light leading-relaxed">
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
                className={`relative group p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border ${
                  isCurrent
                    ? `${sec.activeBg} border-[#352820] ring-2 ring-[#C5A46D]/60 scale-[1.02]`
                    : 'bg-white hover:bg-[#FDFBF7] border-[#E8DED0] hover:border-[#C5A46D]/50 text-[#352820] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Active Indicator Pip */}
                {isCurrent && (
                  <span className="absolute top-3 right-3 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A93C] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E5A93C]"></span>
                  </span>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isCurrent 
                      ? 'bg-white/10 text-[#E5A93C]' 
                      : 'bg-[#F6F1E8] ' + sec.accentColor
                  } transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                    isCurrent ? 'bg-white/15 text-white/90' : 'bg-[#F6F1E8] text-[#7A695E]'
                  }`}>
                    {sec.count}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className={`font-bold text-sm sm:text-base leading-snug ${isCurrent ? 'text-white' : 'text-[#352820]'}`}>
                    {sec.title}
                  </h3>
                  <p className={`text-[11px] sm:text-xs leading-normal line-clamp-1 ${isCurrent ? 'text-white/70' : 'text-[#7A695E]'}`}>
                    {sec.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ----------------------------------------------------------------------------------------- */}
        {/* SECTION 1: AI CONTENT CREATION PORTFOLIO */}
        {/* ----------------------------------------------------------------------------------------- */}
        {currentTab === 'ai' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DED0]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>AI Video & Visual Production</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#352820] tracking-tight">
                  AI Content Creation Portfolio
                </h3>
                <p className="text-[#5C4A3E] text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  Explore {AI_PORTFOLIO_PROJECTS.length} AI-generated and AI-assisted projects across commercial ads, UGC videos, cinematic shorts, 3D claymations, and children's content.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A695E]" />
                <input
                  type="text"
                  placeholder="Search AI projects..."
                  value={aiSearch}
                  onChange={(e) => setAiSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#352820] placeholder-[#7A695E] focus:outline-none focus:border-[#C5A46D] shadow-sm"
                />
              </div>
            </div>

            {/* Sub-categories Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
              <div className="p-2 rounded-lg bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
                <Filter className="w-4 h-4 text-[#C5A46D]" />
              </div>
              {AI_PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAiFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                    aiFilter === cat
                      ? 'bg-[#352820] text-white shadow-md'
                      : 'bg-white text-[#5C4A3E] hover:text-[#352820] hover:bg-[#E8DED0]/50 border border-[#E8DED0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* AI Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredAi().map((proj) => {
                const theme = getAiCategoryTheme(proj.category);
                const hasLocalVideo = Boolean(proj.videoUrl || (proj.driveLink && (proj.driveLink.startsWith('/') || proj.driveLink.includes('.mp4'))));

                return (
                  <div
                    key={proj.id}
                    className="bg-white rounded-2xl border border-[#E8DED0] hover:border-[#C5A46D]/60 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group shadow-sm"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${theme.badge}`}>
                          {theme.icon}
                          <span>{proj.category}</span>
                        </span>
                        {proj.secondaryCategory && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#F6F1E8] text-[#5C4A3E] border border-[#E8DED0]">
                            {proj.secondaryCategory}
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-[#7A695E] ml-auto">
                          {proj.videoType}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h4 className="text-base sm:text-lg font-bold text-[#352820] group-hover:text-[#D97706] transition-colors leading-snug">
                        {proj.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-[#5C4A3E] mt-2 font-light leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-5 mt-5 border-t border-[#F6F1E8] flex items-center justify-between">
                      {hasLocalVideo ? (
                        <button
                          onClick={() => setActiveVideoModal(proj)}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#352820] hover:bg-[#201813] text-[#F6F1E8] hover:text-[#E5A93C] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow group-hover:scale-[1.01]"
                        >
                          <Play className="w-3.5 h-3.5 text-[#E5A93C] fill-current" />
                          <span>Watch Video</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => openExternal(proj.driveLink)}
                          className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#F6F1E8] text-[#352820] border border-[#E8DED0] hover:border-[#C5A46D] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm group-hover:scale-[1.01]"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#C5A46D]" />
                          <span>Watch on Google Drive ↗</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {getFilteredAi().length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#E8DED0] p-6">
                <p className="text-[#5C4A3E] text-sm">No AI projects found matching your search.</p>
              </div>
            )}
          </div>
        )}

        {/* ----------------------------------------------------------------------------------------- */}
        {/* SECTION 2: URDU VOICE OVER PORTFOLIO */}
        {/* ----------------------------------------------------------------------------------------- */}
        {currentTab === 'urdu' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DED0]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Mic className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Pillar 01 • Urdu Voice Artistry</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#352820] tracking-tight">
                  Urdu Voice Over Portfolio
                </h3>
                <p className="text-[#5C4A3E] text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  High-profile Urdu voice-over samples recorded for international organizations (United Nations), commercial television commercials, documentaries, corporate explainers, IVR, and poetry.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#7A695E] shadow-sm">
                <ExternalLink className="w-4 h-4 text-[#C5A46D]" />
                <span>Samples open on Google Drive in HD Audio</span>
              </div>
            </div>

            {/* Sub-categories Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
              <div className="p-2 rounded-lg bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
                <Filter className="w-4 h-4 text-[#059669]" />
              </div>
              {['All', 'Commercial / TVC', 'Documentary', 'Explainer', 'Corporate', 'Poetry', 'IVR'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setUrduFilter(sub)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                    urduFilter === sub
                      ? 'bg-[#352820] text-white shadow-md'
                      : 'bg-white text-[#5C4A3E] hover:text-[#352820] hover:bg-[#E8DED0]/50 border border-[#E8DED0]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Urdu Samples Cards (Strictly NO play button, NO audio player) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredUrdu().map((demo) => (
                <div
                  key={demo.id}
                  className="bg-white rounded-2xl border border-[#E8DED0] hover:border-[#059669]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group shadow-sm"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                        Urdu
                      </span>
                      <span className="text-[11px] font-mono font-medium text-[#7A695E]">
                        {demo.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="text-lg font-bold text-[#352820] group-hover:text-[#059669] transition-colors leading-snug">
                      {demo.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#5C4A3E] mt-2.5 font-light leading-relaxed">
                      {demo.description}
                    </p>
                  </div>

                  {/* Clean CTA Button with ExternalLink icon */}
                  <div className="pt-5 mt-5 border-t border-[#F6F1E8]">
                    <button
                      onClick={() => openExternal(demo.driveLink)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#F6F1E8] text-[#352820] hover:text-[#059669] border border-[#E8DED0] hover:border-[#059669] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm group-hover:scale-[1.01]"
                    >
                      <span>Listen to Sample</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#059669]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------------------------- */}
        {/* SECTION 3: ENGLISH VOICE OVER PORTFOLIO */}
        {/* ----------------------------------------------------------------------------------------- */}
        {currentTab === 'english' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DED0]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Pillar 01 • English & American Accent</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#352820] tracking-tight">
                  English Voice Over Portfolio
                </h3>
                <p className="text-[#5C4A3E] text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  International English voice-over samples including authentic North American accent narration, television documentary voiceovers, banking corporate presentations, and IVR systems.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#7A695E] shadow-sm">
                <ExternalLink className="w-4 h-4 text-[#2563EB]" />
                <span>Samples open on Google Drive in HD Audio</span>
              </div>
            </div>

            {/* Sub-categories Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
              <div className="p-2 rounded-lg bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
                <Filter className="w-4 h-4 text-[#2563EB]" />
              </div>
              {['All', 'American Accent', 'Documentary', 'Corporate', 'IVR'].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setEnglishFilter(sub)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                    englishFilter === sub
                      ? 'bg-[#352820] text-white shadow-md'
                      : 'bg-white text-[#5C4A3E] hover:text-[#352820] hover:bg-[#E8DED0]/50 border border-[#E8DED0]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* English Samples Cards (Strictly NO play button, NO audio player) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredEnglish().map((demo) => (
                <div
                  key={demo.id}
                  className="bg-white rounded-2xl border border-[#E8DED0] hover:border-[#2563EB]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group shadow-sm"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center space-x-1.5">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                          {demo.accent ? demo.accent : 'English'}
                        </span>
                        {demo.accent && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
                            US Accent
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono font-medium text-[#7A695E]">
                        {demo.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="text-lg font-bold text-[#352820] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {demo.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#5C4A3E] mt-2.5 font-light leading-relaxed">
                      {demo.description}
                    </p>
                  </div>

                  {/* Clean CTA Button with ExternalLink icon */}
                  <div className="pt-5 mt-5 border-t border-[#F6F1E8]">
                    <button
                      onClick={() => openExternal(demo.driveLink)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#F6F1E8] text-[#352820] hover:text-[#2563EB] border border-[#E8DED0] hover:border-[#2563EB] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm group-hover:scale-[1.01]"
                    >
                      <span>Listen to Sample</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------------------------- */}
        {/* SECTION 4: DUBBING PORTFOLIO */}
        {/* ----------------------------------------------------------------------------------------- */}
        {currentTab === 'dubbing' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DED0]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <Film className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>Pillar 02 • Dubbing & Multilingual Production</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#352820] tracking-tight">
                  Dubbing & Multilingual Production
                </h3>
                <p className="text-[#5C4A3E] text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  "Ramsha personally performs dubbing and also works with a professional dubbing team capable of handling multilingual, character-based and larger productions."
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#7A695E] shadow-sm">
                <ExternalLink className="w-4 h-4 text-[#7C3AED]" />
                <span>Sync samples open on Google Drive</span>
              </div>
            </div>

            {/* Highlighted Capabilities */}
            <div className="flex flex-wrap gap-2">
              {DUBBING_CAPABILITIES.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1 rounded-lg bg-white border border-[#E8DED0] text-[#352820] text-xs font-medium flex items-center space-x-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#7C3AED]" />
                  <span>{cap}</span>
                </span>
              ))}
            </div>

            {/* Sub-categories Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
              <div className="p-2 rounded-lg bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
                <Filter className="w-4 h-4 text-[#7C3AED]" />
              </div>
              {DUBBING_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setDubbingFilter(f)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-sm ${
                    dubbingFilter === f
                      ? 'bg-[#352820] text-white shadow-md'
                      : 'bg-white text-[#5C4A3E] hover:text-[#352820] hover:bg-[#E8DED0]/50 border border-[#E8DED0]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Dubbing Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredDubbing().map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-[#E8DED0] hover:border-[#7C3AED]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group shadow-sm"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${
                        proj.language === 'Urdu'
                          ? 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]'
                          : 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]'
                      }`}>
                        {proj.language}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-[#7A695E]">
                        {proj.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h4 className="text-lg font-bold text-[#352820] group-hover:text-[#7C3AED] transition-colors leading-snug">
                      {proj.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#5C4A3E] mt-2.5 font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Clean CTA Button */}
                  <div className="pt-5 mt-5 border-t border-[#F6F1E8]">
                    <button
                      onClick={() => openExternal(proj.driveLink)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#F6F1E8] text-[#352820] hover:text-[#7C3AED] border border-[#E8DED0] hover:border-[#7C3AED] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm group-hover:scale-[1.01]"
                    >
                      <span>Listen / View Sample</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#7C3AED]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------------------------- */}
        {/* SECTION 5: WHOLE PORTFOLIOS (NEW MASTER DIRECTORY) */}
        {/* ----------------------------------------------------------------------------------------- */}
        {currentTab === 'whole' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header & Subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8DED0]">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <FolderArchive className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Master Drive Archives</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#352820] tracking-tight">
                  Whole Portfolio Archives
                </h3>
                <p className="text-[#5C4A3E] text-xs sm:text-sm mt-1 max-w-2xl font-light">
                  Direct master folders containing Ramsha's complete, comprehensive body of work across each creative specialization. Select any whole portfolio below.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-semibold text-[#059669] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <span>Google Drive Master Archives Connected</span>
              </div>
            </div>

            {/* 4 Grand Portfolio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Whole Portfolio of Urdu */}
              <div className="bg-white rounded-3xl border border-[#E8DED0] hover:border-[#059669]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] shadow-sm group-hover:scale-105 transition-transform">
                      <Mic className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                      Master Archive • Urdu
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#352820] group-hover:text-[#059669] transition-colors">
                    Whole Portfolio of Urdu
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C4A3E] mt-3 font-light leading-relaxed">
                    Complete master library of all Urdu voiceovers including UN & humanitarian narrations, television commercials (TVCs), corporate documentaries, institutional videos, IVR menus, and Urdu poetry.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5C4A3E]">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>Complete Urdu TVCs & Brand Campaigns</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>UN, UNICEF & Institutional Documentaries</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>Corporate Explainers & IVR Prompts</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F6F1E8]">
                  <button
                    onClick={() => openExternal('https://drive.google.com/drive/folders/1XqMqItgrGE0tPAMSkpovxPMQWQPHxKrl?usp=drive_link')}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#352820] hover:bg-[#201813] text-[#F6F1E8] hover:text-[#059669] text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md group-hover:scale-[1.01]"
                  >
                    <span>Open Whole Portfolio of Urdu</span>
                    <ExternalLink className="w-4 h-4 text-[#059669]" />
                  </button>
                </div>
              </div>

              {/* Card 2: Whole Portfolio of English */}
              <div className="bg-white rounded-3xl border border-[#E8DED0] hover:border-[#2563EB]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] shadow-sm group-hover:scale-105 transition-transform">
                      <Globe className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                      Master Archive • English
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#352820] group-hover:text-[#2563EB] transition-colors">
                    Whole Portfolio of English
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C4A3E] mt-3 font-light leading-relaxed">
                    Comprehensive English master archive featuring international neutral English narrations, authentic North American accent recordings, space & science documentaries, banking systems, and corporate communication.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5C4A3E]">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                      <span>Authentic North American Accent Samples</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                      <span>Documentary & Science Storytelling Voiceovers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                      <span>Financial Institutions & National Bank VO</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F6F1E8]">
                  <button
                    onClick={() => openExternal('https://drive.google.com/drive/folders/1nMGAjJDwh5fxh4JaQEMqFKirz5y9Ne75?usp=drive_link')}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#352820] hover:bg-[#201813] text-[#F6F1E8] hover:text-[#2563EB] text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md group-hover:scale-[1.01]"
                  >
                    <span>Open Whole Portfolio of English</span>
                    <ExternalLink className="w-4 h-4 text-[#2563EB]" />
                  </button>
                </div>
              </div>

              {/* Card 3: Whole Portfolio of Dubbing */}
              <div className="bg-white rounded-3xl border border-[#E8DED0] hover:border-[#7C3AED]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] flex items-center justify-center text-[#7C3AED] shadow-sm group-hover:scale-105 transition-transform">
                      <Film className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF5FF] text-[#7C3AED] border border-[#E9D5FF]">
                      Master Archive • Dubbing
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#352820] group-hover:text-[#7C3AED] transition-colors">
                    Whole Portfolio of Dubbing
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C4A3E] mt-3 font-light leading-relaxed">
                    Full sync dubbing library containing serialized drama dubbing (Chinese, Turkish, Pakistani), movie productions, cartoon character voices, baby voice acting, fantasy mermaid roles, and full ensemble team dubbing.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5C4A3E]">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                      <span>International Drama Series & Historical Shows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                      <span>Animated Feature Films & Disney Style Cartoons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                      <span>Multilingual Production Team Sync Catalog</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F6F1E8]">
                  <button
                    onClick={() => openExternal('https://drive.google.com/drive/folders/1LyNnxL6UwaSUTvyCBAuqoOHzEJm1Dv9a?usp=drive_link')}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#352820] hover:bg-[#201813] text-[#F6F1E8] hover:text-[#7C3AED] text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md group-hover:scale-[1.01]"
                  >
                    <span>Open Whole Portfolio of Dubbing</span>
                    <ExternalLink className="w-4 h-4 text-[#7C3AED]" />
                  </button>
                </div>
              </div>

              {/* Card 4: Whole Portfolio of AI Content Creation */}
              <div className="bg-white rounded-3xl border border-[#E8DED0] hover:border-[#D97706]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-[#D97706] shadow-sm group-hover:scale-105 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]">
                      Master Archive • AI Content
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-[#352820] group-hover:text-[#D97706] transition-colors">
                    Whole Portfolio of AI Content Creation
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C4A3E] mt-3 font-light leading-relaxed">
                    Complete master drive of all AI-generated media: Prince Biscuit claymation, Slice Juice commercial, CGI automotive ads, luxury watch & perfume spots, AI UGC presenters, Hollywood cinematic reels, and educational modules.
                  </p>

                  <ul className="mt-5 space-y-2 text-xs text-[#5C4A3E]">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                      <span>15+ Commercial Brand & Food Claymations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                      <span>Realistic AI UGC Host & Influencer Ads</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                      <span>Cinematic Trailers, 3D Animations & Kids Series</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F6F1E8]">
                  <button
                    onClick={() => openExternal('https://drive.google.com/drive/folders/1mhaMua3Y-D4oJaHoPbKUMPsR4M7zijhe?usp=drive_link')}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#352820] hover:bg-[#201813] text-[#F6F1E8] hover:text-[#D97706] text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md group-hover:scale-[1.01]"
                  >
                    <span>Open Whole Portfolio of AI Content</span>
                    <ExternalLink className="w-4 h-4 text-[#D97706]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Video Modal for AI Local Video Playback */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="bg-[#352820] border border-[#C5A46D]/40 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#2A1F18]">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#C5A46D]/20 text-[#E5A93C] border border-[#C5A46D]/30">
                  {activeVideoModal.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#F6F1E8] truncate max-w-md">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveVideoModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#F6F1E8] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player */}
            <div className="bg-black aspect-video flex items-center justify-center relative">
              <video 
                src={activeVideoModal.videoUrl || activeVideoModal.driveLink} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#2A1F18] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-[#F6F1E8]/70 line-clamp-2">
                {activeVideoModal.description}
              </p>
              {activeVideoModal.driveLink && activeVideoModal.driveLink.startsWith('http') && (
                <button
                  onClick={() => openExternal(activeVideoModal.driveLink)}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap flex items-center space-x-1.5 border border-white/10"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Google Drive ↗</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

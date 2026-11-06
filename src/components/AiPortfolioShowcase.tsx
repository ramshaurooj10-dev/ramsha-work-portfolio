import React, { useState } from 'react';
import { AI_PORTFOLIO_PROJECTS, AI_PORTFOLIO_CATEGORIES } from '../data/aiPortfolioData';
import { AiContentProject } from '../types';
import { Sparkles, Filter, ExternalLink, Play, Film, Video, Megaphone, Smile, Search, X, Camera } from 'lucide-react';

export const AiPortfolioShowcase: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeVideo, setActiveVideo] = useState<AiContentProject | null>(null);

  const getFilteredProjects = (): AiContentProject[] => {
    return AI_PORTFOLIO_PROJECTS.filter((proj) => {
      const matchesCategory = selectedFilter === 'All' || 
        proj.category === selectedFilter || 
        (proj.secondaryCategory && proj.secondaryCategory === selectedFilter);
      const matchesSearch = searchQuery === '' || 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.videoType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  };

  const filteredProjects = getFilteredProjects();

  const handleWatchProject = (project: AiContentProject) => {
    if (project.videoUrl || (project.driveLink && (project.driveLink.startsWith('/') || project.driveLink.includes('.mp4')))) {
      setActiveVideo(project);
    } else {
      window.open(project.driveLink, '_blank', 'noopener,noreferrer');
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Ads':
      case 'Product Ads':
        return { icon: <Megaphone className="w-4 h-4 text-[#E05A3A]" />, badge: 'bg-[#FFF5F2] text-[#E05A3A] border-[#FDC5B8]', iconBg: 'bg-[#FFF5F2]' };
      case 'UGC':
      case 'UGC & Brands':
        return { icon: <Camera className="w-4 h-4 text-[#059669]" />, badge: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]', iconBg: 'bg-[#ECFDF5]' };
      case 'AI Movies':
      case 'Cinematic':
        return { icon: <Film className="w-4 h-4 text-[#4F46E5]" />, badge: 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]', iconBg: 'bg-[#EEF2FF]' };
      case '3D Animation':
      case '2D Animation':
        return { icon: <Video className="w-4 h-4 text-[#D97706]" />, badge: 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]', iconBg: 'bg-[#FFFBEB]' };
      case 'Kids & Cartoons':
      case 'Kids & Education':
      case 'Cartoons':
      case 'Rhymes':
        return { icon: <Smile className="w-4 h-4 text-[#E11D48]" />, badge: 'bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]', iconBg: 'bg-[#FFF1F2]' };
      case 'Marketing':
      case 'AI Influencer':
        return { icon: <Sparkles className="w-4 h-4 text-[#7C3AED]" />, badge: 'bg-[#FAF5FF] text-[#7C3AED] border-[#E9D5FF]', iconBg: 'bg-[#FAF5FF]' };
      default:
        return { icon: <Sparkles className="w-4 h-4 text-[#EA580C]" />, badge: 'bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]', iconBg: 'bg-[#FFF7ED]' };
    }
  };

  return (
    <section id="ai-portfolio" className="py-20 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      {/* Background Subtle Warm Glow */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-[900px] h-[500px] bg-[#C5A46D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8DED0]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Full AI Video Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
              AI Content Portfolio
            </h2>
            <p className="text-[#5C4A3E] text-sm sm:text-base mt-2 max-w-2xl font-light leading-relaxed">
              Explore individual AI-generated and AI-assisted video projects ranging from realistic UGC and advertisements to cinematic films, 3D product animations, ASMR, nursery rhymes, and viral content.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A695E]" />
            <input
              type="text"
              placeholder="Search AI projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#352820] placeholder-[#7A695E] focus:outline-none focus:border-[#C5A46D] shadow-sm"
            />
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="mt-8 flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
          <div className="p-2 rounded-lg bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
            <Filter className="w-4 h-4 text-[#C5A46D]" />
          </div>
          {AI_PORTFOLIO_CATEGORIES.map((catName) => (
            <button
              key={catName}
              onClick={() => setSelectedFilter(catName)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedFilter === catName
                  ? 'bg-[#352820] text-white shadow-md font-extrabold scale-105 border border-[#C5A46D]'
                  : 'bg-white text-[#352820] hover:bg-[#E8DED0] border border-[#E8DED0] shadow-sm'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>

        {/* Results Counter Bar */}
        <div className="mt-6 flex items-center justify-between text-xs text-[#5C4A3E] font-mono">
          <span>
            Showing <strong className="text-[#352820] font-bold">{filteredProjects.length}</strong> AI Video Projects
          </span>
          {selectedFilter !== 'All' && (
            <button
              onClick={() => setSelectedFilter('All')}
              className="text-[#A1814B] hover:underline font-bold"
            >
              Reset Filter ✕
            </button>
          )}
        </div>

        {/* AI Projects Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const theme = getCategoryTheme(project.category);
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${theme.iconBg} border border-[#E8DED0]`}>
                        {theme.icon}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${theme.badge}`}>
                        {project.category}
                      </span>
                    </div>

                    <span className="text-[10px] text-[#A1814B] font-mono font-medium">
                      {project.videoType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base font-bold text-[#352820] group-hover:text-[#D97706] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-[#E8DED0]">
                  <button
                    onClick={() => handleWatchProject(project)}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] shadow-md shadow-[#352820]/20 transition-all flex items-center justify-center space-x-2 group/btn border border-[#E5A93C]/40"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#E5A93C] text-[#E5A93C]" />
                    <span>{project.videoUrl || project.driveLink.startsWith('/') ? 'Play Video' : 'Watch Project'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform text-[#E5A93C]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 p-8 rounded-2xl bg-white border border-[#E8DED0] text-center text-[#5C4A3E] space-y-2 shadow-sm">
            <p className="text-sm font-semibold text-[#352820]">No AI projects match your filter or search query.</p>
            <button
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#A1814B] underline font-bold"
            >
              Clear filters and view all AI projects
            </button>
          </div>
        )}

      </div>

      {/* Video Playback Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DED0] space-y-4">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F6F1E8] text-[#352820] border border-[#E8DED0]">
                  {activeVideo.category} • {activeVideo.videoType}
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-[#352820]">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-[#5C4A3E] mt-1 max-w-2xl">
                  {activeVideo.description}
                </p>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-xl text-[#352820] hover:bg-[#E8DED0] transition-colors"
                aria-label="Close video player"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-inner">
              <video
                controls
                autoPlay
                playsInline
                src={activeVideo.videoUrl || activeVideo.driveLink}
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-[#5C4A3E]">
              <span>Playing portfolio sample</span>
              <div className="flex items-center space-x-3">
                <a
                  href={activeVideo.videoUrl || activeVideo.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#352820] bg-[#F6F1E8] hover:bg-[#E8DED0] border border-[#E8DED0] transition-colors flex items-center space-x-1.5"
                >
                  <span>Open Video in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

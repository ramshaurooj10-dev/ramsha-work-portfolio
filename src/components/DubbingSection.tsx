import React, { useState } from 'react';
import { Film, Filter, Play, ExternalLink, Users, Mic, Sparkles, Languages, CheckCircle2 } from 'lucide-react';
import { DUBBING_PROJECTS, DUBBING_FILTERS, DUBBING_CAPABILITIES } from '../data/dubbingData';
import { DubbingProject } from '../types';

interface DubbingSectionProps {
  onOpenContactModal?: () => void;
}

export const DubbingSection: React.FC<DubbingSectionProps> = ({ onOpenContactModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const getFilteredProjects = (): DubbingProject[] => {
    if (selectedFilter === 'All') return DUBBING_PROJECTS;

    const filter = selectedFilter.toLowerCase();
    return DUBBING_PROJECTS.filter((proj) => {
      const cat = proj.category.toLowerCase();
      const lang = proj.language.toLowerCase();
      const type = proj.type.toLowerCase();
      const title = proj.title.toLowerCase();

      if (filter === 'urdu dubbing') return lang === 'urdu';
      if (filter === 'english dubbing') return lang === 'english';
      if (filter === 'drama') return cat.includes('drama') || type.includes('drama') || title.includes('drama');
      if (filter === 'movie') return cat.includes('movie') || type.includes('movie') || title.includes('movie');
      if (filter === 'cartoon') return cat.includes('cartoon') || type.includes('cartoon') || title.includes('cartoon');
      if (filter === 'character dubbing') return cat.includes('character') || type.includes('character') || title.includes('character');

      return true;
    });
  };

  const filteredProjects = getFilteredProjects();
  const urduProjects = DUBBING_PROJECTS.filter((p) => p.language === 'Urdu');
  const englishProjects = DUBBING_PROJECTS.filter((p) => p.language === 'English');

  const openDriveLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToContact = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dubbing" className="py-20 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[#C5A46D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[300px] bg-[#E8DED0]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Film className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Pillar 02 — Dubbing & Multilingual Production</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            Dubbing & Multilingual Production
          </h2>

          <p className="text-[#A1814B] font-mono text-xs sm:text-sm font-semibold tracking-wide">
            Character Dubbing • Sync Dubbing • Movie & Drama Dubbing • Cartoon Dubbing
          </p>

          <p className="text-[#5C4A3E] text-sm sm:text-base font-light leading-relaxed pt-1">
            "Ramsha personally performs dubbing and also works with a professional dubbing team capable of handling multilingual, character-based and larger dubbing productions."
          </p>
        </div>

        {/* Highlighted Capability Chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {DUBBING_CAPABILITIES.map((cap) => (
            <span
              key={cap}
              className="px-3 py-1 rounded-lg bg-white border border-[#E8DED0] text-[#352820] text-xs font-medium flex items-center space-x-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-3 h-3 text-[#C5A46D]" />
              <span>{cap}</span>
            </span>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
          <div className="p-2 rounded-lg bg-white text-[#352820] flex-shrink-0 border border-[#E8DED0] shadow-sm">
            <Filter className="w-4 h-4" />
          </div>
          {DUBBING_FILTERS.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setSelectedFilter(filterName)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedFilter === filterName
                  ? 'bg-[#352820] text-white shadow-md font-extrabold scale-105 border border-[#C5A46D]'
                  : 'bg-white text-[#352820] hover:bg-[#E8DED0] border border-[#E8DED0] shadow-sm'
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        {/* Main Dubbing Portfolio Grid */}
        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E8DED0] pb-3">
            <h3 className="text-xl font-bold text-[#352820] tracking-tight uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C5A46D]" />
              <span>
                {selectedFilter === 'All' ? 'Complete Dubbing Portfolio' : `${selectedFilter} Samples (${filteredProjects.length})`}
              </span>
            </h3>
            <span className="text-xs text-[#5C4A3E] font-mono">
              Showing {filteredProjects.length} Dubbing Samples
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-5 border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  {/* Card Header Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-[#C5A46D]">
                      <Film className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-[#E8DED0] text-[#352820] border border-[#D4C6B4]">
                        {project.language}
                      </span>
                      <div className="text-[10px] text-[#A1814B] font-mono mt-1 font-medium">
                        {project.type}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 text-lg font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors leading-snug">
                    {project.title}
                  </h4>

                  {/* Category */}
                  <div className="mt-1 text-[11px] font-semibold text-[#5C4A3E] font-mono">
                    Category: {project.category}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs text-[#5C4A3E] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-[#E8DED0]">
                  <button
                    onClick={() => openDriveLink(project.driveLink)}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] transition-all shadow-md shadow-[#352820]/20 flex items-center justify-center space-x-2 border border-[#C5A46D]/40 group/btn"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-white" />
                    <span>Watch Project ↗</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ENGLISH DUBBING HIGHLIGHT SUBSECTION */}
        {selectedFilter === 'All' && (
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DED0] shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8DED0] pb-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F6F1E8] text-[#352820] text-xs font-bold uppercase mb-2 border border-[#E8DED0]">
                  <Languages className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>English Dubbing Focus</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#352820] uppercase tracking-tight">
                  English Dubbing & Animation Sync
                </h3>
                <p className="text-xs text-[#5C4A3E] mt-1">
                  Pristine English character voice dubbing and animation synchronization with neutral and American accents.
                </p>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {englishProjects.map((eng) => (
                <div key={eng.id} className="bg-[#F6F1E8] p-5 rounded-2xl border border-[#E8DED0] hover:border-[#C5A46D] transition-all flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-[#352820] border border-[#E8DED0]">
                      {eng.type}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-[#352820]">{eng.title}</h4>
                    <p className="mt-2 text-xs text-[#5C4A3E] font-light">{eng.description}</p>
                  </div>
                  <button
                    onClick={() => openDriveLink(eng.driveLink)}
                    className="mt-4 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#352820] hover:bg-[#271D17] border border-[#C5A46D]/40 transition-all flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>Watch Project ↗</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DUBBING TEAM FEATURE CARD */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DED0] shadow-xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F6F1E8] border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase">
              <Users className="w-4 h-4 text-[#C5A46D]" />
              <span>Multi-Character & Multilingual Dubbing Capability</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#352820] tracking-tight uppercase">
              More Than One Voice
            </h3>

            <p className="text-[#5C4A3E] text-sm sm:text-base font-light leading-relaxed">
              "Ramsha can personally perform dubbing and can also coordinate a professional dubbing team for projects requiring multiple voices, characters or languages."
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs text-[#352820] font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#F6F1E8] border border-[#E8DED0]">✓ Solo Dubbing</span>
              <span className="px-2.5 py-1 rounded-md bg-[#F6F1E8] border border-[#E8DED0]">✓ Full Voice Cast Coordination</span>
              <span className="px-2.5 py-1 rounded-md bg-[#F6F1E8] border border-[#E8DED0]">✓ Multilingual Localization</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-[#352820] hover:bg-[#271D17] shadow-lg shadow-[#352820]/20 transition-all border border-[#C5A46D]/40 flex items-center space-x-2 group"
            >
              <span>Discuss a Dubbing Project</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

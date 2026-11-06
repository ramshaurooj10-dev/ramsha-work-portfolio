import React, { useState } from 'react';
import { AI_FEATURED_TOP6, AI_SERVICE_CARDS, AI_PORTFOLIO_PROJECTS } from '../data/aiPortfolioData';
import { Sparkles, Play, ExternalLink, ArrowRight, Camera, Megaphone, Film, Heart, Zap, CheckCircle2, Award, X } from 'lucide-react';
import { AiContentProject } from '../types';

interface AiContentSectionProps {
  onExploreFullPortfolio: () => void;
}

export const AiContentSection: React.FC<AiContentSectionProps> = ({ onExploreFullPortfolio }) => {
  const [activeVideo, setActiveVideo] = useState<AiContentProject | null>(null);

  const handleWatchProject = (project: any) => {
    if (project.videoUrl || (project.driveLink && (project.driveLink.startsWith('/') || project.driveLink.includes('.mp4')))) {
      setActiveVideo(project);
    } else {
      window.open(project.driveLink, '_blank', 'noopener,noreferrer');
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-5 h-5 text-cyan-300" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-blue-300" />;
      case 'Film':
        return <Film className="w-5 h-5 text-indigo-300" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-300" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-emerald-300" />;
      case 'Zap':
      default:
        return <Zap className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="ai-content" className="py-24 bg-[#F6F1E8] relative overflow-hidden border-t border-[#E8DED0]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A46D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DED0] text-[#352820] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>3+ Years of AI Content Creation</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            AI Content Creation
          </h2>
          
          <p className="text-base sm:text-lg font-semibold text-[#A1814B] tracking-wide font-mono">
            AI-Powered Advertising • UGC • Animation • Cinematic Storytelling • Digital Content
          </p>

          <p className="text-[#5C4A3E] text-sm sm:text-base font-light leading-relaxed">
            "Ramsha combines creative direction, storytelling and AI production workflows to create visual content for brands, marketing, education, entertainment and social media."
          </p>
        </div>

        {/* HIGHLIGHT STATEMENTS */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DED0] shadow-md space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase text-[#A1814B] tracking-wider">
              <Sparkles className="w-4 h-4 text-[#C5A46D]" />
              <span>From Concept to Content</span>
            </div>
            <p className="text-[#5C4A3E] text-sm font-light leading-relaxed">
              "Ramsha creates AI-powered visual content from concept to final creative output, including UGC, advertisements, cinematic storytelling, animation, children's content, product visuals, social media content and experimental formats."
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DED0] shadow-md space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase text-[#A1814B] tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
              <span>Human Voice + AI Visuals</span>
            </div>
            <p className="text-[#5C4A3E] text-sm font-light leading-relaxed">
              "Ramsha's unique strength is combining professional human voice-over and dubbing expertise with AI-powered visual content creation."
            </p>
          </div>
        </div>

        {/* 6 AI SERVICE CARDS */}
        <div className="mt-16 space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8DED0] pb-3">
            <h3 className="text-lg font-bold text-[#352820] tracking-tight uppercase flex items-center space-x-2">
              <span className="text-[#C5A46D]">❖</span>
              <span>AI Content Production Specialties</span>
            </h3>
            <span className="text-xs text-[#5C4A3E] font-mono">6 Service Offerings</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_SERVICE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] w-fit text-[#C5A46D]">
                    {getServiceIcon(card.icon)}
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                    {card.title}
                  </h4>

                  <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI FEATURED TOP 6 PROJECTS */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E8DED0]">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#A1814B] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Featured AI Content Highlights</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#352820] tracking-tight uppercase">
                Featured AI Portfolio Highlights
              </h3>
            </div>

            <button
              onClick={onExploreFullPortfolio}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#352820] hover:bg-[#271D17] shadow-md transition-all flex items-center space-x-2 self-start sm:self-auto border border-[#C5A46D]/40"
            >
              <span>Explore Full AI Portfolio ({AI_PORTFOLIO_PROJECTS.length} Projects)</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
            </button>
          </div>

          {/* Top 6 Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_FEATURED_TOP6.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#C5A46D] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#F6F1E8] text-[#352820] border border-[#E8DED0]">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#A1814B] font-medium">
                      {project.videoType}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base sm:text-lg font-bold text-[#352820] group-hover:text-[#A1814B] transition-colors">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-xs text-[#5C4A3E] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DED0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleWatchProject(project)}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#352820] to-[#271D17] hover:from-[#271D17] hover:to-[#352820] shadow-md transition-all flex items-center justify-center space-x-2 group/btn border border-[#E5A93C]/40"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#E5A93C] text-[#E5A93C]" />
                    <span>{project.videoUrl || project.driveLink.startsWith('/') ? 'Play Video' : 'Watch Project ↗'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform text-[#E5A93C]" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Explore CTA */}
          <div className="pt-8 text-center">
            <button
              onClick={onExploreFullPortfolio}
              className="px-8 py-4 rounded-2xl font-extrabold text-sm text-white bg-[#352820] hover:bg-[#271D17] shadow-xl shadow-[#352820]/20 transition-all transform hover:scale-105 inline-flex items-center space-x-3 border border-[#C5A46D]/40"
            >
              <span>Explore Complete Categorized AI Portfolio ({AI_PORTFOLIO_PROJECTS.length} Works)</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
            </button>
          </div>
        </div>

      </div>

      {/* Video Playback Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DED0] space-y-4">
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

            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center shadow-inner">
              <video
                controls
                autoPlay
                playsInline
                src={activeVideo.videoUrl || activeVideo.driveLink}
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

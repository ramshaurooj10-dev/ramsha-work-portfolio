import React, { useState } from 'react';
import { AI_CONTENT_CATEGORIES, AI_PROCESS_STEPS } from '../data/portfolioData';
import {
  Sparkles,
  Clapperboard,
  Smile,
  Video,
  Megaphone,
  UserCheck,
  BookOpen,
  GraduationCap,
  Users,
  Package,
  Share2,
  Heart,
  Lightbulb,
  FileText,
  Mic,
  User,
  Image as ImageIcon,
  Film,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface AiContentProps {
  onSelectCategory?: (category: string) => void;
}

export const AiContent: React.FC<AiContentProps> = ({ onSelectCategory }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard': return <Clapperboard className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-amber-400" />;
      case 'Video': return <Video className="w-5 h-5 text-amber-400" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      case 'Package': return <Package className="w-5 h-5 text-amber-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-amber-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Mic': return <Mic className="w-4 h-4" />;
      case 'User': return <User className="w-4 h-4" />;
      case 'Image': return <ImageIcon className="w-4 h-4" />;
      case 'Film': return <Film className="w-4 h-4" />;
      case 'CheckCircle': return <CheckCircle className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="ai-content" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Tech Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Content Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            AI Content Creation
          </h2>
          <p className="text-lg font-bold text-amber-400">
            3+ Years of AI Content Creation Experience
          </p>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            "Alongside voice-over and dubbing, I create AI-powered visual content for brands, entertainment, education and digital media."
          </p>
        </div>

        {/* Process Flow Visual */}
        <div className="mt-12 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              End-To-End Production Pipeline
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              From Concept to Broadcast-Ready AI Video
            </h3>
          </div>

          {/* Steps Track */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {AI_PROCESS_STEPS.map((stepItem, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={stepItem.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-amber-400">
                      STEP {stepItem.step}
                    </span>
                    <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                      {getStepIcon(stepItem.iconName)}
                    </span>
                  </div>
                  <div className="mt-3 text-xs font-bold truncate">{stepItem.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Box */}
          <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400">
                {getStepIcon(AI_PROCESS_STEPS[activeStep].iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase">
                  Step {AI_PROCESS_STEPS[activeStep].step}: {AI_PROCESS_STEPS[activeStep].title}
                </span>
                <p className="text-xs text-slate-300 font-light mt-0.5">
                  {AI_PROCESS_STEPS[activeStep].description}
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2 text-xs text-amber-300 font-medium">
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 12 Category Interactive Cards Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">
              AI Content Formats & Specialties
            </h3>
            <span className="text-xs text-slate-400">12 Specialized Production Categories</span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AI_CONTENT_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-xl p-5 border border-slate-800 hover:border-amber-500/40 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-2.5 rounded-lg bg-slate-800 w-fit group-hover:bg-amber-500/20 transition-colors">
                  {getIcon(cat.icon)}
                </div>
                <h4 className="mt-4 text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {cat.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-400 font-light leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mic, Users, Sparkles, BookOpen, CheckCircle2, Shield, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Ramsha's Professional Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-slate-800 to-amber-500/20 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                  alt="Ramsha Shaikh - Voice Over & Dubbing Artist"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Overlaid Title Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-amber-500/30">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Ramsha Shaikh</h3>
                  <p className="text-xs font-semibold text-amber-400 mt-0.5">
                    Voice Over Artist • Dubbing Artist • AI Creator
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center space-x-1">
                      <Mic className="w-3.5 h-3.5 text-amber-400" />
                      <span>8+ Years VO</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>3+ Years AI Video</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Highlight Box */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl items-center space-x-3 max-w-xs z-20">
              <div className="p-2.5 bg-amber-500/20 rounded-lg text-amber-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Dubbing Team Director</p>
                <p className="text-[11px] text-slate-400">Coordinating multi-character & multilingual productions</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <span>Bio & Background</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              About Ramsha
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              <p className="text-slate-200 font-normal">
                I’m Ramsha Shaikh, a professional Voice Over Artist, Dubbing Artist and AI Content Creator with 8+ years of experience in voice-over and audio production.
              </p>
              <p>
                I work in Urdu and English, including American English accent, and provide professional voice-over, dubbing and synchronized dubbing services for brands, organizations, educational projects, films, documentaries, advertisements and digital content.
              </p>
              <p>
                Alongside my individual work, I also work with a professional dubbing team, allowing me to provide complete multilingual dubbing solutions and coordinate voice production for larger projects.
              </p>
              <p>
                For the past 3+ years, I have also been working as an AI Content Creator, creating AI-powered advertisements, children's content, educational videos, animated stories, realistic videos, UGC-style content and AI films.
              </p>
            </div>

            {/* ECE Early Childhood Education Highlight Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-amber-500/20 shadow-lg space-y-2">
              <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Early Childhood Education (ECE) Advantage</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {PERSONAL_INFO.eceHighlight}
              </p>
            </div>

            {/* Quick Core Capabilities Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                'Urdu & English Voiceover',
                'American English Accent',
                'Synchronized Character Dubbing',
                'Multilingual Dubbing Team',
                'AI Video & Movie Generation',
                'ECE Preschool Content'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Rocket, 
  Sparkles, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  BrainCircuit, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Star, 
  ExternalLink 
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface HeroSectionProps {
  onOpenLaunchModal: () => void;
  onExploreTabs: () => void;
  onWatchVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenLaunchModal, 
  onExploreTabs, 
  onWatchVideo 
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-sky-500/30 shadow-lg shadow-sky-500/10 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              RankPilot AI 2.0: Engineered for JEE Main 2025/2026 & Advanced
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.1]">
            Turn Every Mock Test Into A <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
              99.5+ Percentile Roadmap
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop studying blindly. RankPilot's AI engine analyzes 140+ real NTA shift papers, pinpoints mark-leaking blunders, generates daily foundation resets, and provides 24/7 instant doubt clarity.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={LOVABLE_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
              <Rocket className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Launch Live App (Lovable Project)</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button 
              onClick={onWatchVideo}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <div className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch AI Video Explainer</span>
            </button>

            <button 
              onClick={onExploreTabs}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 text-slate-400 hover:text-slate-200 text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              <span>Explore 7 Tabs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Social Proof Trust Bar */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 border-t border-slate-800/60 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>140+ NTA Shift Papers (2019-2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-sky-400" />
              <span>AI Error Taxonomy Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9/5 Rating (1,280+ Aspirants)</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Hero Showcase Preview */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-sky-500/30 via-indigo-500/20 to-transparent shadow-2xl shadow-sky-950/80">
            <div className="rounded-[22px] bg-slate-950/95 border border-slate-800/80 overflow-hidden backdrop-blur-xl p-4 sm:p-6 lg:p-8">
              
              {/* Fake App Window Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">rankpilot.io/dashboard</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-semibold">Live JEE Prep Active</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-300">Predicted Percentile: <strong className="text-cyan-300">99.18 %ile</strong></span>
                </div>
              </div>

              {/* 3 Showcase Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Card 1: PYQ Mocks */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      NTA Mock Engine
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">21 Jan 2026 Shift 1</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Full-Length JEE Main Mock</h4>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Physics Mastery:</span>
                      <span className="font-semibold text-emerald-400">84/100 (98.9 %ile)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Chemistry:</span>
                      <span className="font-semibold text-cyan-400">92/100 (99.6 %ile)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Maths Calculus:</span>
                      <span className="font-semibold text-amber-400">72/100 (97.4 %ile)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>

                {/* Card 2: AI Coach Zero-to-Hero */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 to-transparent space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      AI Coach
                    </span>
                    <span className="text-[11px] text-indigo-400 font-bold">Day 14 / 60</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Zero-to-Hero Foundation Reset</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Rotational Dynamics (Solved 25 PYQs)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Aldehydes & Ketones Mechanism</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-300 font-medium">
                      <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>Next: Definite Integrals Sprint</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Deep Analytics */}
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Error Taxonomy
                    </span>
                    <span className="text-[11px] text-slate-400">Last 90 Days</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Performance Decoded</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Silly Errors</span>
                      <span className="text-sm font-black text-rose-400">-12 Marks</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Accuracy Trend</span>
                      <span className="text-sm font-black text-emerald-400">+18.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-cyan-300">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Predicted AIR: <strong className="text-white">AIR 420</strong></span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

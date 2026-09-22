import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Brain, 
  Compass, 
  Cpu, 
  Layers, 
  Target, 
  Clock, 
  Zap,
  BookOpenCheck,
  LineChart,
  ShieldAlert
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'comparison' | 'exams'>('architecture');

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Inside RankPilot
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Engineered For The Aspirant Who Refuses To Settle For Average
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            RankPilot is not just another question bank. It is an intelligent co-pilot built to eliminate every inefficiency in your JEE Main & Advanced preparation.
          </p>
        </div>

        {/* Tab Toggle for About Section */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" /> AI Architecture
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'comparison'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" /> Traditional vs RankPilot
            </button>

            <button
              onClick={() => setActiveTab('exams')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'exams'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" /> Exam Matrix Coverage
            </button>
          </div>
        </div>

        {/* View 1: AI Architecture Pillars */}
        {activeTab === 'architecture' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">1. AI Error Taxonomy Engine</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Traditional tests simply tell you what went wrong. RankPilot tells you <em className="text-sky-300 font-medium">why</em>. It categorizes every lost mark into Conceptual Gaps, Calculation Slips, or Time-Pressure Panic.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Sub-topic precision down to individual theorems
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Negative mark penalty simulator
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">2. Zero-to-Hero Foundation Reset</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Got trapped in coaching backlogs? The AI Coach identifies the 20% highest-weightage topics (Rotational, Carbonyls, Conics) that yield 80% of JEE marks and schedules targeted daily sprints.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  Dynamic 1-day, 7-day, and 30-day recovery sprints
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  Milestone percentile projections (65%ile → 99.5%ile)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">3. Live Shift Normalization</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                JEE Main shift difficulty fluctuates wildly. RankPilot normalizes your mock performance against official NTA bell curves across 140+ shifts to give real All India Rank predictions.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  2019-2026 Shift-by-Shift normalized scale
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  AIR prediction with ±150 ranks confidence interval
                </li>
              </ul>
            </div>

          </div>
        )}

        {/* View 2: Traditional Prep vs RankPilot Comparison */}
        {activeTab === 'comparison' && (
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Traditional Coaching Column */}
              <div className="p-6 sm:p-8 space-y-5 bg-rose-950/10">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" /> Traditional Coaching Routine
                </div>
                <h4 className="text-lg font-bold text-white">The Plateau Trap</h4>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Fixed rigid batch pace leaving your backlogs permanently unresolved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Mock test results only show total marks, ignoring why mistakes occurred</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Hours wasted standing in queues for doubt clearing sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>No data on time wasted per question or negative mark tendencies</span>
                  </li>
                </ul>
              </div>

              {/* RankPilot Column */}
              <div className="p-6 sm:p-8 space-y-5 bg-sky-950/20 border-l border-sky-500/20">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> RankPilot AI Advantage
                </div>
                <h4 className="text-lg font-bold text-white">Precision Mastery</h4>
                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Dynamic study plan that self-adjusts daily around your capacity and weak spots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>AI Error Taxonomy separating silly calculation errors from real knowledge gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Instant 24/7 AI Doubt Solver with LaTeX proofs and 3 matching PYQs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Radar benchmark comparing topic mastery directly with AIR 100 toppers</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* View 3: Exam Matrix Coverage */}
        {activeTab === 'exams' && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
            
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit">
                Primary Focus
              </div>
              <h4 className="text-lg font-bold text-white">JEE Main 2025/2026</h4>
              <p className="text-xs text-slate-300">
                All Shift 1 & 2 papers from 2019-2026. Complete 300-mark NTA test pattern with numerical integer rounding.
              </p>
              <div className="text-[11px] text-sky-300 font-semibold">140+ Full-Length Tests</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 w-fit">
                Advanced Depth
              </div>
              <h4 className="text-lg font-bold text-white">JEE Advanced</h4>
              <p className="text-xs text-slate-300">
                Multi-correct, matrix match, comprehension, and numerical formats from IIT Madras, Bombay, and Delhi papers.
              </p>
              <div className="text-[11px] text-purple-300 font-semibold">Paper 1 & Paper 2 Suite</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit">
                Speed & Accuracy
              </div>
              <h4 className="text-lg font-bold text-white">BITSAT 2025/2026</h4>
              <p className="text-xs text-slate-300">
                High-speed 130-question sprint engine including English Proficiency and Logical Reasoning drills.
              </p>
              <div className="text-[11px] text-amber-300 font-semibold">Bonus Question Unlocks</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                State Top Ranks
              </div>
              <h4 className="text-lg font-bold text-white">WBJEE & MHT-CET</h4>
              <p className="text-xs text-slate-300">
                Category-I, II, and III high-yield question formats with instant college branch cutoff forecasting.
              </p>
              <div className="text-[11px] text-emerald-300 font-semibold">State Top 500 Benchmarks</div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

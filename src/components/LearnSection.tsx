import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  BrainCircuit,
  BookOpen,
  Target,
  FileText,
  Clock
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const LearnSection: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<'11th' | '12th'>('11th');

  return (
    <section id="learn" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>JEE Ranker Learn Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Targeted Academic Programs: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300">
              11th Foundation & 12th Booster
            </span>
          </h2>

          <p className="text-base text-slate-300 font-medium">
            Engineered by IITians and top educators to build ironclad conceptual depth. Master the complete JEE Main & Advanced curriculum with structured high-yield notes, Daily Practice Problems (DPP), and AI diagnostic testing.
          </p>
        </div>

        {/* 11th Foundation vs 12th Booster Toggle Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-800/90 rounded-2xl border border-slate-700 backdrop-blur-md shadow-xl">
            <button
              onClick={() => setActiveProgram('11th')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2.5 ${
                activeProgram === '11th'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>11th Foundation Program (JEE 2027)</span>
            </button>

            <button
              onClick={() => setActiveProgram('12th')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2.5 ${
                activeProgram === '12th'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>12th Booster Program (JEE 2026 / Dropper)</span>
            </button>
          </div>
        </div>

        {/* Program Highlights Banner Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-md mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-purple-400">
                {activeProgram === '11th' ? 'Class 11 Foundation Roadmap' : 'Class 12 & Droppers Score Accelerator'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {activeProgram === '11th' 
                  ? 'Building Rock-Solid Conceptual Fundamentals for JEE 2027' 
                  : 'Rapid High-Yield Revision & Rank Maximization for JEE 2026'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeProgram === '11th'
                  ? 'Covers all 28 foundational chapters in depth with progressive difficulty (Board to JEE Main to Advanced Level), eliminating early fear of Physics and Math.'
                  : 'Fast-paced, high-retention syllabus coverage focusing on high-weightage topics, Section B numerical integer accuracy, and 120+ real shift mocks.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:col-span-2">
              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">Coverage</div>
                <div className="text-xl font-black text-white mt-1">
                  {activeProgram === '11th' ? '28 Chapters' : '30 Chapters'}
                </div>
                <div className="text-[11px] text-blue-300 mt-1">Physics, Chem & Math</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">Chapter Tests</div>
                <div className="text-xl font-black text-white mt-1">
                  {activeProgram === '11th' ? '50+ Tests' : '70+ Tests'}
                </div>
                <div className="text-[11px] text-emerald-300 mt-1">Customizable Timers</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">AI Doubts</div>
                <div className="text-xl font-black text-white mt-1">5 Languages</div>
                <div className="text-[11px] text-purple-300 mt-1">Tamil, En, Hi, Te, Kn</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">Full Mocks</div>
                <div className="text-xl font-black text-white mt-1">
                  {activeProgram === '11th' ? '30+ Mocks' : '120+ Mocks'}
                </div>
                <div className="text-[11px] text-amber-300 mt-1">Real NTA Interface</div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Academic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-black text-white">Full Theory & Formula Packs</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Step-by-step rigorous derivations, handwritten IITian summaries, and boundary condition formulas covering the complete syllabus.
            </p>
            <div className="pt-2 text-xs font-bold text-blue-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Backlog Retention</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-black text-white">Targeted Chapter Tests</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Timed chapter assessments with single-choice, multiple-choice, and Section B integer formats mimicking genuine NTA pattern.
            </p>
            <div className="pt-2 text-xs font-bold text-purple-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Speed & Accuracy Mastery</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-black text-white">24/7 AI Doubt Resolution</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instant LaTeX mathematical proofs and step-by-step guidance in Tamil, English, Hindi, Telugu, and Kannada with similar PYQs.
            </p>
            <div className="pt-2 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Multi-Lingual Clarity</span>
            </div>
          </div>
        </div>

        {/* Bottom Feature Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-purple-900/60 border border-blue-500/30 text-center space-y-4">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            Included in Both 11th Foundation & 12th Booster Plans
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-medium">
            Every enrolled student gets unlimited access to AI Doubt Solving in 5 Indian languages, visual mind maps, high-yield formula sheets, chapter-wise test series with timer, and longitudinal 5-test performance tracking.
          </p>
          <div className="pt-2">
            <a
              href={LOVABLE_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 transition-all group"
            >
              <span>Enroll in JEE Ranker Learn Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

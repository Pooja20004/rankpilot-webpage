import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BrainCircuit
} from 'lucide-react';

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
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-md shadow-xl">
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

      </div>
    </section>
  );
};

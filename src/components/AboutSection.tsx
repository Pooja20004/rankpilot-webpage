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
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'comparison' | 'exams'>('architecture');

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Inside RankPilot
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Engineered For The Aspirant Who Refuses To Settle For Average
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            RankPilot is India’s most relevant prep co-pilot built to eliminate mark-leaking blunders across JEE Main, JEE Advanced, and BITSAT.
          </p>
        </div>

        {/* Tab Toggle for About Section */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Cpu className="w-4 h-4" /> AI Diagnostic Core
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'comparison'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" /> Traditional vs RankPilot
            </button>

            <button
              onClick={() => setActiveTab('exams')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'exams'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Target className="w-4 h-4" /> Exam Matrix Coverage
            </button>
          </div>
        </div>

        {/* View 1: AI Architecture Pillars */}
        {activeTab === 'architecture' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. NTA Difficulty Normalizer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                JEE Main shifts vary wildly in difficulty. Our algorithm normalizes your raw score against historical shift percentiles to give you realistic All India Ranks.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-blue-700">✓ Calibrated on 140+ NTA shift papers</li>
                <li className="flex items-center gap-2 text-blue-700">✓ Real marks vs percentile conversion</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2. Silly Mistake Deconstructor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most students lose 20-30 marks not because of tough concepts, but calculation slips. Our 15-page analysis report pinpoints avoidable negative marking.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-emerald-700">✓ Classifies sign, calculation & reading errors</li>
                <li className="flex items-center gap-2 text-emerald-700">✓ Tracks recovery delta before next mock</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3. High-Yield Smart Revision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every mock exam connects straight to curated Concept Notes, Formula Cheat Sheets, and Visual Mind Maps to close knowledge gaps immediately.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2 text-indigo-700">✓ Instant one-click formula reviews</li>
                <li className="flex items-center gap-2 text-indigo-700">✓ 24/7 AI IITian Doubt Solver</li>
              </ul>
            </div>
          </div>
        )}

        {/* View 2: Traditional vs RankPilot */}
        {activeTab === 'comparison' && (
          <div className="mt-12 overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 text-slate-900 text-xs sm:text-sm font-extrabold">
                  <th className="p-4 sm:p-5">Preparation Aspect</th>
                  <th className="p-4 sm:p-5 text-rose-700">Generic Coaching / Books</th>
                  <th className="p-4 sm:p-5 text-blue-700 bg-blue-50/70">RankPilot AI EdTech Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">PYQ Mock Test Bank</td>
                  <td className="p-4 sm:p-5 text-rose-600">PDF questions with static text answer keys</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">120+ JEE Main, 40+ Advanced (19 yrs) & 6+ BITSAT timed CBT mocks</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Post-Test Analysis</td>
                  <td className="p-4 sm:p-5 text-rose-600">Basic marks tally & overall percentage</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">15-page Quizrr-standard report with accuracy, silly mistake & time analysis</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Doubt Resolution</td>
                  <td className="p-4 sm:p-5 text-rose-600">Wait days for coaching faculty doubt counters</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">Instant 24/7 AI solver with LaTeX math, diagrams & shortcuts</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Study Materials</td>
                  <td className="p-4 sm:p-5 text-rose-600">Bulky 800-page modules causing backlog fatigue</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">Crisp Concept Notes, Formula Cheat Sheets & Visual Mind Maps</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* View 3: Exam Matrix Coverage */}
        {activeTab === 'exams' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-black">JEE Main</span>
              <h4 className="text-lg font-black text-slate-900">120+ PYQ Full Mocks</h4>
              <p className="text-xs text-slate-600">
                Complete coverage of January and April session shift papers with Section A MCQs and Section B numericals under exact NTA timings.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded bg-indigo-100 text-indigo-800 text-xs font-black">JEE Advanced</span>
              <h4 className="text-lg font-black text-slate-900">40+ Full Mocks (19 Years)</h4>
              <p className="text-xs text-slate-600">
                19-year archive (2007-2025) of Paper 1 and Paper 2 with partial marking, integer, paragraph, and matrix match schemes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-black">BITSAT</span>
              <h4 className="text-lg font-black text-slate-900">6+ Mocks + 12 Bonus Engine</h4>
              <p className="text-xs text-slate-600">
                Full 130-question speed and accuracy format including English Proficiency and Logical Reasoning with real-time speed indexes.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

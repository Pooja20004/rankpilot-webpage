import React, { useState } from 'react';
import { 
  FileCheck2, 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Layers, 
  Flame, 
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { TEST_SERIES_COLLECTION, LOVABLE_PROJECT_URL } from '../data/mockData';
import { ExamType } from '../types';

export const TestSeriesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | ExamType>('All');
  const [activeShiftIndex, setActiveShiftIndex] = useState(0);

  const filteredSeries = selectedFilter === 'All' 
    ? TEST_SERIES_COLLECTION 
    : TEST_SERIES_COLLECTION.filter(item => item.exam === selectedFilter);

  const sampleShiftMocks = [
    { title: 'JEE Main 2025 Jan Shift 1', date: '24 Jan 2025', marks: 300, time: '180 mins', difficulty: 'Moderate', solvedBy: '42,100+ aspirants' },
    { title: 'JEE Main 2025 Jan Shift 2', date: '24 Jan 2025', marks: 300, time: '180 mins', difficulty: 'Tough Physics', solvedBy: '39,400+ aspirants' },
    { title: 'JEE Advanced 2024 Paper 1 & 2', date: '26 May 2024', marks: 360, time: '360 mins', difficulty: 'High Concept', solvedBy: '28,900+ aspirants' },
    { title: 'BITSAT 2024 Full Mock #01', date: '15 May 2024', marks: 390, time: '180 mins', difficulty: 'Speed Focused', solvedBy: '31,200+ aspirants' },
  ];

  return (
    <section id="test-series" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-blue-600" />
            <span>National Test Series 2026 - 2027</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            India’s Most Relevant Test Series for <br />
            <span className="text-blue-700">JEE Mains, JEE Advanced & BITSAT</span>
          </h2>

          {/* Requested Highlight Banner */}
          <div className="pt-2">
            <span className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-extrabold text-sm sm:text-base px-6 py-2 rounded-full shadow-md">
              ⚡ All These Features in One Single Platform
            </span>
          </div>

          <p className="text-base text-slate-600 font-medium">
            Practice in the exact NTA computer-based exam environment with authentic previous years' questions, detailed video/text analysis, and predictive All India Ranks.
          </p>
        </div>

        {/* Exam Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            {(['All', 'JEE Main', 'JEE Advanced', 'BITSAT'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                  selectedFilter === tab
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab === 'All' ? 'All Test Series' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Core Cards (JEE Main 120+, JEE Adv 40+ 19 yrs, BITSAT 6+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredSeries.map((item) => (
            <div 
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between bg-white ${
                item.isPopular 
                  ? 'border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20' 
                  : 'border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300'
              }`}
            >
              <div className="p-7">
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide bg-blue-100 text-blue-800 border border-blue-200">
                    {item.exam}
                  </span>
                  {item.isPopular && (
                    <span className="flex items-center gap-1 text-[11px] font-black uppercase text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3 text-amber-500" /> Most Popular
                    </span>
                  )}
                </div>

                {/* Exact Specified Feature Tag */}
                <div className="mb-4">
                  <div className="text-lg font-black text-blue-700 bg-blue-50/80 p-3 rounded-xl border border-blue-100">
                    🎯 {item.pyqCountBadge}
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold mb-6">
                  {item.coverage}
                </p>

                {/* Key Details Pill */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-6 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{item.totalMocks}</span>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Included in this test series:
                  </div>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-7 pt-0 border-t border-slate-100 mt-auto">
                <div className="pt-4 flex flex-col gap-2.5">
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm text-center shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Attempt Full Mock Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-xs text-center border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Chapterwise Test Schedule</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Live Interactive Paper Explorer Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-9xl font-black">
            NTA CBT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Official NTA Screen Simulation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Simulate the Actual JEE & BITSAT Exam Hall Experience
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From the color-coded question palette (Answered, Not Answered, Marked for Review) to Section B numerical entry keypads, test your exam-day temperament with zero surprises on the final day.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={LOVABLE_PROJECT_URL}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Start Free NTA CBT Mock</span>
                </a>
                <a
                  href="#sample-report"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>View Mock Test Report</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Shift Selector Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Trending Mock Papers This Week:
              </div>
              <div className="space-y-2">
                {sampleShiftMocks.map((shift, idx) => (
                  <a
                    key={idx}
                    href={LOVABLE_PROJECT_URL}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-between transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                        {shift.title}
                      </div>
                      <div className="text-[11px] text-slate-300">
                        {shift.time} • {shift.difficulty} • {shift.solvedBy}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

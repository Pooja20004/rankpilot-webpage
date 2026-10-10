import React from 'react';
import { 
  FileCheck2, 
  Award, 
  Zap, 
  Layers, 
  Languages, 
  BarChart3, 
  Calendar, 
  Users, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface AboutSectionProps {
  onOpenExamResources?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenExamResources }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>Everything Inside JEE Ranker Platform</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Makes JEE Ranker The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
              AI-Powered JEE & BITSAT Co-Pilot?
            </span>
          </h2>

          {/* User Requested: Syllabus & Exam Cracking Strategies Line & Click Here Button */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/80 to-purple-50 border-2 border-blue-200/90 shadow-sm my-3 space-y-2">
            <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              JEE main ,JEE advanced and BITSAT Exam syllabuses and Exam cracking strategies
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenExamResources}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm shadow-md shadow-blue-700/25 transition-all hover:scale-105 group cursor-pointer"
              >
                <span>Click Here</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We’ve packed India’s most comprehensive testing, revision, and AI mentorship ecosystem into one unified platform. Here is everything included in your student access:
          </p>
        </div>

        {/* 8 Core Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 120+ JEE Main Mocks */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors shadow-sm">
                  <FileCheck2 className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">120+ JEE Mains Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                All official shifts from 2021 to 2026 converted into timed computer-based mocks with real Section A & Section B numerical schemes and normalized percentiles.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-700 flex items-center justify-between">
              <span>Full Shifts (2021-2026)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: 40+ JEE Advanced (19 Years PYQs) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-indigo-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-colors shadow-sm">
                  <Award className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">40+ JEE Advanced Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                19 continuous years of Paper 1 and Paper 2 (2007–2025) with authentic multi-correct, integer, partial marking, and IIT cutoff benchmarking.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-indigo-700 flex items-center justify-between">
              <span>Paper 1 & Paper 2</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: 10+ BITSAT Mocks */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors shadow-sm">
                  <Zap className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">10+ BITSAT Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Speed-tested 130-question papers covering Physics, Chemistry, Math, English & Logical Reasoning with the official 12 bonus question unlocking simulator.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center justify-between">
              <span>Pilani / Goa / Hyd</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: 100+ Chapter-wise Tests with Different Timings */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-cyan-50 text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white transition-colors shadow-sm">
                  <Layers className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">100+ Chapter-Wise Tests</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Test each chapter at your pace with customizable timings, paired with Concept Notes, Formula Sheets, Mindmaps, solved examples & chapter AI analytics.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-cyan-700 flex items-center justify-between">
              <span>92 Chapters PCM</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Multilingual AI Doubt Solver */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors shadow-sm">
                  <Languages className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Multilingual Doubt Solver</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Ask any tough JEE question 24/7 in <strong className="text-slate-900">Tamil, English, Hindi, Telugu, or Kannada</strong> and get instant step-by-step mathematical proofs.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-amber-700 flex items-center justify-between">
              <span>Instant AI Clarity</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Individual & 5-Test Consolidated Reports */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-purple-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Individual & 5-Test Reports</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Instant post-test performance breakdown after every mock PLUS a consolidated 5-test analytical report to detect recurring silly mistakes and weak areas.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-purple-700 flex items-center justify-between">
              <span>Track Growth Trends</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 7: AI Adaptive Study Plans */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-rose-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-rose-50 text-rose-700 group-hover:bg-rose-700 group-hover:text-white transition-colors shadow-sm">
                  <Calendar className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">AI Adaptive Study Plans</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Smart timetable generator tailored to your self-study hours, school timings, and diagnostic weak spots, auto-recovering backlogs when you miss a day.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-rose-700 flex items-center justify-between">
              <span>Zero Backlog Stress</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 8: Leaderboard & 24/7 Helpdesk */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors shadow-sm">
                  <Users className="w-6 h-6" />
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Leaderboard & Helpdesk</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                Compete on the live national percentile leaderboard alongside aspirants, and get round-the-clock guidance from our dedicated academic helpdesk.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center justify-between">
              <span>24/7 Dedicated Support</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

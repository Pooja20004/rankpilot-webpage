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

  return (
    <section id="test-series" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-blue-600" />
            <span>National Test Series</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            India’s Most Advanced AI-Powered Test Series for <br />
            <span className="text-blue-700">JEE Mains, JEE Advanced & BITSAT</span>
          </h2>

          {/* Requested Highlight Banner */}
          <div className="pt-2">
            <span className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-extrabold text-sm sm:text-base px-6 py-2 rounded-full shadow-md">
              ⚡ All These Features in One Single Platform
            </span>
          </div>

          <p className="text-base text-slate-600 font-medium">
            Practice in the exact NTA computer-based exam environment with authentic previous years' questions, detailed text solutions for all physics ,chemistry and math questions, and predictive All India Ranks.
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

        {/* 3 Core Cards (JEE Main 120+, JEE Adv 40+ 19 yrs, BITSAT 10+) */}
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

        {/* Pricing & Subscription Options */}
        <div id="pricing" className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Transparent & Affordable Pricing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Choose Your Preparation Plan
            </h3>
            <p className="text-sm text-slate-600 font-medium mt-2">
              Get unlimited access to 120+ JEE Main PYQs as mocks, 40+ Advanced papers, 10+ BITSAT tests, and AI diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Box 1: 1 Year Subscription */}
            <a
              href="https://jee-rankpilot.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-3xl bg-white border-2 border-slate-200 hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide bg-slate-100 text-slate-800 border border-slate-200">
                    Class 12 & Droppers
                  </span>
                  <span className="text-[11px] font-black uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    Save 50%
                  </span>
                </div>

                <h4 className="text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  1 Year Subscription
                </h4>
                <p className="text-xs text-slate-500 font-semibold mt-1 mb-6">
                  Complete 1-year test series and practice suite for JEE Main, Advanced & BITSAT 2026.
                </p>

                {/* Pricing Display */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Special Launch Offer
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-base sm:text-lg font-bold text-slate-400 line-through">
                      ₹6,000
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      ₹3,000
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      / 1 Year
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 mt-2">
                    ⚡ Instant access to all tests & AI features
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Everything included in 1-Year Plan:
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>120+ JEE Main PYQs as Mocks</strong> (2021 to 2026 Shifts)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>40+ JEE Advanced Mocks</strong> (19 Years of PYQs)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>10+ BITSAT Full Mocks</strong> with Official Speed Engine</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100+ Chapter-wise Tests</strong> with Customizable Timings</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Individual Diagnostic Reports & Detailed Text Solutions</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>24/7 Multilingual AI Doubt Solver (Tamil, English, Hindi, Telugu, Kannada)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Formula Sheets, Mind Maps & Solved Examples</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="w-full py-3.5 px-4 rounded-xl bg-slate-900 group-hover:bg-blue-700 text-white font-extrabold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Get 1 Year Subscription</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-center text-slate-400 font-medium mt-2">
                  Redirects to web app • Cancel anytime
                </p>
              </div>
            </a>

            {/* Box 2: 2 Year Subscription (Most Popular / Best Value) */}
            <a
              href="https://jee-rankpilot.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-3xl bg-gradient-to-b from-blue-50/50 via-white to-white border-2 border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between cursor-pointer ring-2 ring-blue-500/20"
            >
              <div className="absolute -top-3.5 right-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black uppercase px-3.5 py-1 rounded-full shadow-md tracking-wider">
                  🔥 Best Value • Most Popular
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide bg-blue-100 text-blue-800 border border-blue-200">
                    Class 11 Foundation + Class 12
                  </span>
                  <span className="text-[11px] font-black uppercase text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    Save 58%
                  </span>
                </div>

                <h4 className="text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  2 Year Subscription
                </h4>
                <p className="text-xs text-slate-500 font-semibold mt-1 mb-6">
                  Complete 2-year end-to-end preparation for JEE 2027 with full Foundation & Booster materials.
                </p>

                {/* Pricing Display */}
                <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-100 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Maximum Savings Offer
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-base sm:text-lg font-bold text-slate-400 line-through">
                      ₹12,000
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-blue-700">
                      ₹5,000
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      / 2 Years
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 mt-2">
                    ⚡ Just ₹208/month • Valid for 24 Full Months
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Everything included in 2-Year Plan:
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Full Access for 2 Full Academic Years</strong> (2025–2027)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>11th Foundation + 12th Booster Programs</strong> complete access</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>120+ JEE Main PYQs as Mocks</strong> + 40+ JEE Adv (19 yrs) + 10+ BITSAT</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Consolidated 5-Test Progress Reports</strong> & AI Weakness Tracking</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>24/7 Unlimited AI Doubt Solver</strong> in Tamil, English, Hindi, Telugu, Kannada</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complete Concept Notes, Formula Sheets, Mind Maps & Solved Examples</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>All India Rank Predictor, National Leaderboard & Priority Helpdesk</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm text-center shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2">
                  <span>Get 2 Year Subscription</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-center text-slate-400 font-medium mt-2">
                  Redirects to web app • Secure access
                </p>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

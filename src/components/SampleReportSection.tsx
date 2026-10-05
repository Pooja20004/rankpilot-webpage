import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Award, 
  Target, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileCheck2,
  ZoomIn,
  Flame,
  BrainCircuit
} from 'lucide-react';
import { RANKPILOT_SAMPLE_REPORT, LOVABLE_PROJECT_URL } from '../data/mockData';

export const SampleReportSection: React.FC = () => {
  const report = RANKPILOT_SAMPLE_REPORT;
  const [activeView, setActiveView] = useState<'consolidated' | 'individual'>('consolidated');
  
  // Single Test Zoom states
  const [isImage1Zoomed, setIsImage1Zoomed] = useState(false);
  const [isImage2Zoomed, setIsImage2Zoomed] = useState(false);

  // Consolidated 5-Test Zoom states
  const [isConsolidatedImg1Zoomed, setIsConsolidatedImg1Zoomed] = useState(false);
  const [isConsolidatedImg2Zoomed, setIsConsolidatedImg2Zoomed] = useState(false);

  return (
    <section id="sample-report" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>Official JEE Ranker Diagnostic Analytics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Consolidated 5-Test Analytics & <br />
            <span className="text-emerald-700">Instant Diagnostic Reports</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            After every mock test, JEE Ranker instantly analyzes your subject accuracy, time spent, and marks distribution. Track recurring error patterns and persistent high-weightage weaknesses across your last five mocks.
          </p>
        </div>

        {/* View Switcher: Consolidated 5-Test Report vs Individual Report */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveView('consolidated')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeView === 'consolidated'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Consolidated 5-Test Progress Report</span>
            </button>

            <button
              onClick={() => setActiveView('individual')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeView === 'individual'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Individual Mock Test Scorecard (Single Test)</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: CONSOLIDATED REPORT FOR LAST FIVE TESTS (ACTIVE BY DEFAULT) */}
        {activeView === 'consolidated' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Report Top Meta Header */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded">
                      5-Test Longitudinal Intelligence
                    </span>
                    <span className="text-xs text-slate-300 font-mono">Multi-Mock Aggregate Evaluation</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Consolidated Performance Report (Last 5 Mocks)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Candidate: <strong className="text-white">JEE Ranker Aspirant</strong> • Trend Analysis Across 5 Authentic Tests
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-slate-400 font-bold uppercase">Score Growth</div>
                    <div className="text-2xl font-black text-emerald-400">{report.lastFiveTestsSummary?.scoreGrowth}</div>
                  </div>
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Attempt Next Mock</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 4 Multi-Test Stat Highlight Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Overall Growth</span>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600">+42</span>
                    <span className="text-xs font-bold text-slate-400">Marks</span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 mt-2">
                    Steady Percentile Trajectory
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Repeated Weaknesses</span>
                    <Flame className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-rose-600">4</span>
                    <span className="text-xs font-bold text-slate-400">High-Yield Chapters</span>
                  </div>
                  <div className="text-[11px] font-bold text-rose-700 mt-2">
                    Flagged for Priority Revision
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Pattern Engine</span>
                    <BrainCircuit className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-purple-700">Multi-Mock</span>
                  </div>
                  <div className="text-[11px] font-bold text-purple-600 mt-2">
                    Aggregates 5 Consecutive Tests
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Score Recovery</span>
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-blue-700">125+</span>
                    <span className="text-xs font-bold text-slate-400">Marks</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 mt-2">
                    Recoverable from Weak Topics
                  </div>
                </div>
              </div>

              {/* DUAL OFFICIAL CONSOLIDATED REPORT IMAGES (EACH SHOWN ONLY ONCE):
                  LEFT: 1. Average marks — subject-wise & total
                  RIGHT: 4. Chapters to focus on (by JEE Main weightage) */}
              <div className="p-6 sm:p-8 bg-white border-b border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  
                  {/* LEFT PANE: 1. Average marks — subject-wise & total (Added only once) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-black uppercase">
                            Section 1
                          </span>
                          <span className="text-xs text-slate-400 font-bold">Consolidated Aggregate</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900">
                          1. Average marks — subject-wise & total
                        </h4>
                      </div>

                      <button
                        onClick={() => setIsConsolidatedImg1Zoomed(!isConsolidatedImg1Zoomed)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{isConsolidatedImg1Zoomed ? 'Reset Zoom' : 'Enlarge'}</span>
                      </button>
                    </div>

                    {/* Image with Click-to-Zoom */}
                    <div className={`rounded-2xl border-2 border-slate-200 overflow-hidden shadow-md bg-white transition-all duration-300 ${
                      isConsolidatedImg1Zoomed ? 'ring-4 ring-blue-500/20' : ''
                    }`}>
                      <img 
                        src="/consolidated_report_avg_marks.png" 
                        alt="Consolidated 5-Test Report: 1. Average marks - subject-wise and total" 
                        className={`w-full object-contain mx-auto transition-transform duration-300 ${
                          isConsolidatedImg1Zoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        onClick={() => setIsConsolidatedImg1Zoomed(!isConsolidatedImg1Zoomed)}
                      />
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs text-blue-900">
                      <span>⚡ <strong>Longitudinal Insight:</strong> Aggregates average score, accuracy, and negative marks leakage across 5 test sittings.</span>
                    </div>
                  </div>

                  {/* RIGHT PANE: 4. Chapters to focus on (by JEE Main weightage) (Added only once) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                            Section 4
                          </span>
                          <span className="text-xs text-slate-400 font-bold">AI Pattern Engine</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900">
                          4. Chapters to focus on (by JEE Main weightage)
                        </h4>
                      </div>

                      <button
                        onClick={() => setIsConsolidatedImg2Zoomed(!isConsolidatedImg2Zoomed)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{isConsolidatedImg2Zoomed ? 'Reset Zoom' : 'Enlarge'}</span>
                      </button>
                    </div>

                    {/* Image with Click-to-Zoom */}
                    <div className={`rounded-2xl border-2 border-slate-200 overflow-hidden shadow-md bg-white transition-all duration-300 ${
                      isConsolidatedImg2Zoomed ? 'ring-4 ring-blue-500/20' : ''
                    }`}>
                      <img 
                        src="/consolidated_report_chapters_focus.png" 
                        alt="Consolidated 5-Test Report: 4. Chapters to focus on (by JEE Main weightage)" 
                        className={`w-full object-contain mx-auto transition-transform duration-300 ${
                          isConsolidatedImg2Zoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        onClick={() => setIsConsolidatedImg2Zoomed(!isConsolidatedImg2Zoomed)}
                      />
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-200 flex items-center justify-between text-xs text-purple-900">
                      <span>🎯 <strong>Pattern Recognition:</strong> Identifies &ldquo;Repeated weakness&rdquo; chapters across tests so you focus on highest-yield revision first.</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Weakness & Strength Taxonomy Grid */}
              <div className="p-6 sm:p-10 bg-slate-50/50 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                    <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm">
                      <span>⚠️ Persistent Weak Areas (Flagged Across Multiple Tests)</span>
                    </div>
                    <p className="text-xs text-rose-800 leading-relaxed font-medium">
                      The AI detected repeated errors in these specific sub-topics over the last 5 tests:
                    </p>
                    <div className="space-y-2">
                      {report.lastFiveTestsSummary?.weakAreasIdentified.map((area, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-rose-200 text-xs font-bold text-rose-900 flex items-center justify-between">
                          <span>• {area}</span>
                          <span className="text-[10px] bg-rose-100 px-2 py-0.5 rounded text-rose-800">Action: Revise Concept Note</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm">
                      <span>🏆 Dominant Concept Mastery (Consistent 95%+ Accuracy)</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                      These topics have yielded consistent maximum marks with minimal time wastage:
                    </p>
                    <div className="space-y-2">
                      {report.lastFiveTestsSummary?.strongAreasIdentified.map((area, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 flex items-center justify-between">
                          <span>✓ {area}</span>
                          <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-800">Mastered</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md transition-all group"
                  >
                    <span>Unlock Your Personalized 5-Test Diagnostic Dashboard</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: AUTHENTIC SINGLE MOCK TEST REPORT */}
        {activeView === 'individual' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Report Top Meta Header */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded">
                      Official NTA/JEE Evaluation
                    </span>
                    <span className="text-xs text-slate-300 font-mono">28/09/2026, 15:08:14</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    JEE Advanced 2026 — Paper 2
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Candidate: <strong className="text-white">JEE Ranker Admin</strong> • Evaluation Completed
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-slate-400 font-bold uppercase">Net Score</div>
                    <div className="text-2xl font-black text-emerald-400">176 / 180</div>
                  </div>
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Attempt Similar Paper</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 4 Score Highlight Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Net Score</span>
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-blue-700">176</span>
                    <span className="text-xs font-bold text-slate-400">/ 180</span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-600 mt-2">
                    53 Correct • 1 Wrong • 0 Skipped
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Total Accuracy</span>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600">98%</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 mt-2">
                    High Precision Attempt
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Physics & Chem</span>
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-purple-700">100%</span>
                  </div>
                  <div className="text-[11px] font-bold text-purple-600 mt-2">
                    60/60 Physics • 60/60 Chemistry
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Time Utilized</span>
                    <Clock className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">6m 45s</span>
                    <span className="text-xs font-bold text-slate-400">/ 180m</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 mt-2">
                    Lightning Fast Speed
                  </div>
                </div>
              </div>

              {/* DUAL REPORT DISPLAY */}
              <div className="p-6 sm:p-8 bg-white border-b border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  
                  {/* LEFT PANE: Section 1: Subject-wise marks & time */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-black uppercase">
                            Section 1
                          </span>
                          <span className="text-xs text-slate-400 font-bold">Official Scorecard</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900">
                          1. Subject-wise marks & time
                        </h4>
                      </div>

                      <button
                        onClick={() => setIsImage1Zoomed(!isImage1Zoomed)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{isImage1Zoomed ? 'Reset Zoom' : 'Enlarge'}</span>
                      </button>
                    </div>

                    <div className={`rounded-2xl border-2 border-slate-200 overflow-hidden shadow-md bg-white transition-all duration-300 ${
                      isImage1Zoomed ? 'ring-4 ring-blue-500/20' : ''
                    }`}>
                      <img 
                        src="/mock_test_report.png" 
                        alt="JEE Ranker Official Mock Test Report for JEE Advanced 2026 Paper 2 - Subject-wise marks & time" 
                        className={`w-full object-contain mx-auto transition-transform duration-300 ${
                          isImage1Zoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        onClick={() => setIsImage1Zoomed(!isImage1Zoomed)}
                      />
                    </div>

                    <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                          Subject-Wise Score Breakdown
                        </span>
                        <span className="text-xs font-bold text-emerald-700">Net: 176 / 180 (98%)</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] border-b border-slate-200">
                            <tr>
                              <th className="py-2.5 px-3">Subject</th>
                              <th className="py-2.5 px-3 text-center">Correct</th>
                              <th className="py-2.5 px-3 text-center">Wrong</th>
                              <th className="py-2.5 px-3 text-center">Skipped</th>
                              <th className="py-2.5 px-3 text-right">Net Marks</th>
                              <th className="py-2.5 px-3 text-right">Accuracy</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                            <tr className="hover:bg-slate-50/60">
                              <td className="py-2.5 px-3 font-bold text-slate-900">Mathematics</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">17</td>
                              <td className="py-2.5 px-3 text-center font-bold text-rose-600">1</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right font-black text-slate-900">56 / 60</td>
                              <td className="py-2.5 px-3 text-right font-bold text-slate-700">94%</td>
                            </tr>
                            <tr className="hover:bg-slate-50/60">
                              <td className="py-2.5 px-3 font-bold text-slate-900">Physics</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">18</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right font-black text-emerald-600">60 / 60</td>
                              <td className="py-2.5 px-3 text-right font-bold text-emerald-600">100%</td>
                            </tr>
                            <tr className="hover:bg-slate-50/60">
                              <td className="py-2.5 px-3 font-bold text-slate-900">Chemistry</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">18</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right font-black text-emerald-600">60 / 60</td>
                              <td className="py-2.5 px-3 text-right font-bold text-emerald-600">100%</td>
                            </tr>
                          </tbody>
                          <tfoot className="bg-slate-50 font-black text-slate-900 border-t border-slate-200">
                            <tr>
                              <td className="py-2.5 px-3">Total</td>
                              <td className="py-2.5 px-3 text-center text-emerald-600">53</td>
                              <td className="py-2.5 px-3 text-center text-rose-600">1</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right text-blue-700 text-sm">176 / 180</td>
                              <td className="py-2.5 px-3 text-right text-emerald-600">98%</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT PANE: Section 2: 9. Question-wise summary */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                            Section 2
                          </span>
                          <span className="text-xs text-slate-400 font-bold">Chapter & Question Analysis</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900">
                          9. Question-wise summary
                        </h4>
                      </div>

                      <button
                        onClick={() => setIsImage2Zoomed(!isImage2Zoomed)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{isImage2Zoomed ? 'Reset Zoom' : 'Enlarge'}</span>
                      </button>
                    </div>

                    <div className={`rounded-2xl border-2 border-slate-200 overflow-hidden shadow-md bg-white transition-all duration-300 ${
                      isImage2Zoomed ? 'ring-4 ring-blue-500/20' : ''
                    }`}>
                      <img 
                        src="/question_wise_summary.jpg" 
                        alt="JEE Ranker Official Question-wise summary showing question results, marks, and chapters" 
                        className={`w-full object-contain mx-auto transition-transform duration-300 ${
                          isImage2Zoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        onClick={() => setIsImage2Zoomed(!isImage2Zoomed)}
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center justify-between">
                        <span>Verified Question Breakdown:</span>
                        <span className="text-emerald-700 font-bold">Full Solutions Included</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-black flex items-center justify-center text-xs">
                              Q1
                            </span>
                            <div>
                              <strong className="text-slate-900">Mathematics</strong>
                              <span className="text-slate-500 ml-1.5">• Definite Integrals & Area</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-600 font-bold">Correct</span>
                            <span className="font-mono font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">+3 Marks</span>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-black flex items-center justify-center text-xs">
                              Q2
                            </span>
                            <div>
                              <strong className="text-slate-900">Physics</strong>
                              <span className="text-slate-500 ml-1.5">• Rotational Dynamics</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-600 font-bold">Correct</span>
                            <span className="font-mono font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded">+3 Marks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

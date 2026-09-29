import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Award, 
  Target, 
  Zap, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileCheck2,
  Layers,
  ZoomIn
} from 'lucide-react';
import { RANKPILOT_SAMPLE_REPORT, LOVABLE_PROJECT_URL } from '../data/mockData';

export const SampleReportSection: React.FC = () => {
  const report = RANKPILOT_SAMPLE_REPORT;
  const [activeView, setActiveView] = useState<'individual' | 'consolidated'>('individual');
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  return (
    <section id="sample-report" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>Official RankPilot Mock Test Report</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Instant Diagnostic Mock Test Report & <br />
            <span className="text-emerald-700">Consolidated 5-Test Analytics</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            After every mock test, RankPilot instantly analyzes your subject accuracy, time spent, and marks distribution. Track single-test performance or view consolidated progress across your last five mocks.
          </p>
        </div>

        {/* View Switcher: Individual Report vs Consolidated 5-Test Report */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveView('individual')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeView === 'individual'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Mock Test Report (Attached Live Test)</span>
            </button>

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
          </div>
        </div>

        {/* VIEW 1: AUTHENTIC MOCK TEST REPORT IMAGE & BREAKDOWN */}
        {activeView === 'individual' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Live Report Display Card with Attached Screenshot */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Report Top Meta Header */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded">
                      Official NTA/JEE Evaluation
                    </span>
                    <span className="text-xs text-slate-300 font-mono">{report.dateAttempted}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {report.testTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Candidate: <strong className="text-white">{report.candidateName}</strong> • Evaluation Completed
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

              {/* 4 Score Highlight Cards (From User Screenshot) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
                {/* Score */}
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

                {/* Accuracy */}
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

                {/* Physics & Chem */}
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

                {/* Time Taken */}
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

              {/* The Actual User-Uploaded Mock Test Report Image */}
              <div className="p-6 sm:p-10 border-b border-slate-200 bg-white">
                <div className="max-w-4xl mx-auto space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900">
                        Official Mock Test Report (Full Scorecard)
                      </h4>
                      <p className="text-xs text-slate-500">
                        As generated directly by the RankPilot evaluation engine.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsImageZoomed(!isImageZoomed)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>{isImageZoomed ? 'Reset Zoom' : 'Enlarge Report'}</span>
                    </button>
                  </div>

                  {/* Rendered Image in Crisp White Container */}
                  <div className={`rounded-2xl border-2 border-slate-200 overflow-hidden shadow-lg bg-white transition-all duration-300 ${
                    isImageZoomed ? 'ring-4 ring-blue-500/20' : ''
                  }`}>
                    <img 
                      src="/mock_test_report.png" 
                      alt="RankPilot Official Mock Test Report for JEE Advanced 2026 Paper 2" 
                      className={`w-full object-contain mx-auto transition-transform duration-300 ${
                        isImageZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                      }`}
                      onClick={() => setIsImageZoomed(!isImageZoomed)}
                    />
                  </div>

                  <div className="text-center text-[11px] font-medium text-slate-400">
                    💡 Click image to zoom. Every test candidate receives this exact verified report upon submission.
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* VIEW 2: CONSOLIDATED REPORT FOR LAST FIVE TESTS */}
        {activeView === 'consolidated' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-purple-800">
                  5-Test Longitudinal Intelligence
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  Consolidated Performance Report (Last 5 Mocks)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  RankPilot aggregates your last 5 test attempts to map genuine strengths, repeated error patterns, and predicted AIR momentum.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center shrink-0">
                <div className="text-xs font-bold text-emerald-800 uppercase">Overall Growth</div>
                <div className="text-2xl font-black text-emerald-700">{report.lastFiveTestsSummary?.scoreGrowth}</div>
              </div>
            </div>

            {/* Test-by-Test Progression Bar Chart */}
            <div className="space-y-3">
              <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                Score & Accuracy Progression:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {report.lastFiveTestsSummary?.testNames.map((testName, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block truncate">
                      {testName}
                    </span>
                    <div className="text-2xl font-black text-slate-900">
                      {report.lastFiveTestsSummary?.scores[i]}
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-500">Accuracy:</span>
                      <span className="text-emerald-600">{report.lastFiveTestsSummary?.accuracies[i]}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full" 
                        style={{ width: `${report.lastFiveTestsSummary?.accuracies[i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weakness & Strength Taxonomy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Weak Areas Identified */}
              <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm">
                  <span>⚠️ Persistent Weak Areas (Flagged Across Multiple Tests)</span>
                </div>
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  The AI detected repeated errors in these 2 specific sub-topics over the last 5 tests:
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

              {/* Dominant Strengths */}
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
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md transition-all"
              >
                <span>Unlock Your Personalized 5-Test Diagnostic Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

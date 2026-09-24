import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  TrendingUp, 
  Award, 
  Target, 
  Zap, 
  ArrowRight, 
  HelpCircle,
  Eye,
  Filter,
  Flame,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { QUIZRR_SAMPLE_REPORT, LOVABLE_PROJECT_URL } from '../data/mockData';
import { SampleQuestionAnalysis } from '../types';

export const SampleReportSection: React.FC = () => {
  const report = QUIZRR_SAMPLE_REPORT;
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<'All' | 'Physics' | 'Chemistry' | 'Mathematics'>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'correct' | 'incorrect' | 'unattempted'>('all');
  const [activeQuestionModal, setActiveQuestionModal] = useState<SampleQuestionAnalysis | null>(null);

  const filteredQuestions = report.questions.filter(q => {
    const matchesSubject = selectedSubjectTab === 'All' || q.subject === selectedSubjectTab;
    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;
    return matchesSubject && matchesStatus;
  });

  return (
    <section id="sample-report" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>Post-Test Analysis Demo (Quizrr Standard)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            India’s Most In-Depth <br />
            <span className="text-emerald-700">15-Page Post-Test Analysis Report</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Just like MathonGo’s Quizrr platform (<a href="https://app.quizrr.in/analysis-demo" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-0.5">quizrr.in/analysis-demo <ExternalLink className="w-3 h-3" /></a>), our AI inspects every second, isolates silly calculation errors, and decodes your exact All India Standing.
          </p>
        </div>

        {/* Quizrr Style Report Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Banner with Test Metadata */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded">
                  Completed & Verified
                </span>
                <span className="text-xs text-slate-300">{report.dateAttempted}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {report.testTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Candidate: <strong className="text-white">{report.candidateName}</strong> • Target: JEE Main 2026/2027
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={LOVABLE_PROJECT_URL}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Attempt Test on RankPilot</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 Score Highlights Cards (Score, Percentile, AIR, Accuracy) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
            {/* Score */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Total Score</span>
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">{report.totalScore}</span>
                <span className="text-xs font-bold text-slate-400">/ {report.maxScore}</span>
              </div>
              <div className="text-[11px] font-bold text-emerald-600 mt-2">
                +48 Marks above Batch Cutoff
              </div>
            </div>

            {/* Percentile */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Predicted Percentile</span>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-blue-700">{report.percentile}</span>
                <span className="text-xs font-bold text-slate-500">%ile</span>
              </div>
              <div className="text-[11px] font-bold text-blue-600 mt-2">
                99+ Percentile Club Achieved
              </div>
            </div>

            {/* AIR */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Predicted AIR</span>
                <Award className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-purple-700">AIR {report.predictedAIR}</span>
              </div>
              <div className="text-[11px] font-bold text-purple-600 mt-2">
                Top 0.08% Pan-India Ranking
              </div>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>Test Accuracy</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-emerald-600">{report.overallAccuracy}%</span>
              </div>
              <div className="text-[11px] font-bold text-slate-500 mt-2">
                62 Correct • 6 Incorrect • 7 Left
              </div>
            </div>
          </div>

          {/* Subject Performance Breakdown Table */}
          <div className="p-6 sm:p-8 border-b border-slate-200">
            <h4 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-700" />
              <span>Subject-Wise Performance & Speed Breakdown</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {report.subjects.map((subj) => (
                <div 
                  key={subj.subject}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-base font-black text-slate-900">{subj.subject}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800">
                      {subj.percentile}%ile
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-2xl font-black text-slate-900">{subj.score}</span>
                      <span className="text-xs text-slate-400">/ 100</span>
                    </div>
                    <div className="text-xs font-bold text-slate-600">
                      Accuracy: <span className="text-emerald-600 font-extrabold">{subj.accuracy}%</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 mb-4">
                    <div className="flex justify-between">
                      <span>Correct:</span>
                      <strong className="text-emerald-600 font-bold">{subj.correct} Qs (+{subj.correct * 4})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Incorrect:</span>
                      <strong className="text-rose-600 font-bold">{subj.incorrect} Qs (-{subj.incorrect})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Spent:</span>
                      <strong className="text-slate-800 font-bold">{subj.timeSpentMin} mins</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Strong Concept:</div>
                    <div className="text-xs font-semibold text-emerald-700 truncate">
                      ✓ {subj.strongTopics.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quizrr Time & Silly Mistakes Diagnostic Strip */}
          <div className="p-6 sm:p-8 bg-amber-50/60 border-b border-amber-200/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-amber-900">
                    AI Diagnostic: {report.sillyMistakesCount} Silly Mistakes Identified (-8 Marks Leakage)
                  </h5>
                  <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
                    You lost 8 marks due to avoidable sign-convention and formula selection slips in Q2 (Physics) and Q5 (Chemistry). Fixing these two questions elevates your score from <strong>242 to 250</strong> (Predicted AIR jumps from 842 to <strong>AIR 410</strong>).
                  </p>
                </div>
              </div>

              <a
                href={LOVABLE_PROJECT_URL}
                className="shrink-0 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                Fix Weak Areas
              </a>
            </div>
          </div>

          {/* Interactive Question Logs & Solution Review */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-base font-extrabold text-slate-900">
                  Question-by-Question Diagnostic & Solutions
                </h4>
                <p className="text-xs text-slate-500">
                  Click on any question to inspect the detailed mathematical proof, time spent, and silly mistake review.
                </p>
              </div>

              {/* Subject Tabs Filter */}
              <div className="flex flex-wrap gap-1.5">
                {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubjectTab(sub)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedSubjectTab === sub
                        ? 'bg-blue-700 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Cards List */}
            <div className="space-y-3">
              {filteredQuestions.map((q) => (
                <div
                  key={q.qNum}
                  onClick={() => setActiveQuestionModal(q)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    q.status === 'correct'
                      ? 'border-emerald-200 bg-emerald-50/30 hover:bg-emerald-50/60'
                      : q.status === 'incorrect'
                      ? 'border-rose-200 bg-rose-50/30 hover:bg-rose-50/60'
                      : 'border-slate-200 bg-slate-50/30 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    {/* Status Badge */}
                    <div className="shrink-0 mt-0.5 sm:mt-0">
                      {q.status === 'correct' && (
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                      {q.status === 'incorrect' && (
                        <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs">
                          <XCircle className="w-4 h-4" />
                        </div>
                      )}
                      {q.status === 'unattempted' && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">
                          —
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-black text-slate-900">
                          Q{q.qNum}. {q.subject}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          • {q.topic}
                        </span>
                        {q.isSillyMistake && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-200">
                            ⚠️ Silly Mistake
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-700 line-clamp-1 max-w-2xl font-medium">
                        {q.questionText}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{q.timeSpentSec}s (Ideal: {q.idealTimeSec}s)</span>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveQuestionModal(q);
                      }}
                      className="px-3 py-1 rounded-md bg-white border border-slate-300 hover:border-blue-600 text-blue-700 font-bold text-xs flex items-center gap-1 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Solution</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Question Details & Explanation Modal */}
      {activeQuestionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                  {activeQuestionModal.subject} • Q{activeQuestionModal.qNum}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeQuestionModal.topic}
                </span>
              </div>
              <button
                onClick={() => setActiveQuestionModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Question Text */}
            <div className="mb-6 space-y-3">
              <h5 className="text-sm font-extrabold text-slate-900 leading-relaxed">
                {activeQuestionModal.questionText}
              </h5>

              {activeQuestionModal.formulaOrLatex && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-blue-900 font-bold">
                  {activeQuestionModal.formulaOrLatex}
                </div>
              )}
            </div>

            {/* Options Matrix */}
            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Options:</div>
              {activeQuestionModal.options.map((opt, idx) => {
                const isCorrect = idx === activeQuestionModal.correctAnswer;
                const isSelected = idx === activeQuestionModal.studentAnswer;

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-between ${
                      isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : isSelected
                        ? 'border-rose-500 bg-rose-50 text-rose-900'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>({String.fromCharCode(65 + idx)}) {opt}</span>
                    {isCorrect && <span className="text-[11px] font-black text-emerald-700">✓ Correct Answer</span>}
                    {isSelected && !isCorrect && <span className="text-[11px] font-black text-rose-700">✗ Your Choice</span>}
                  </div>
                );
              })}
            </div>

            {/* Step-by-Step Mathematical Explanation */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2 mb-6">
              <div className="text-xs font-black uppercase tracking-wider text-blue-900">
                💡 Detailed Step-by-Step IITian Solution:
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {activeQuestionModal.explanation}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveQuestionModal(null)}
                className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Close
              </button>
              <a
                href={LOVABLE_PROJECT_URL}
                className="px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Practice Similar Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

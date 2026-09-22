import React, { useState } from 'react';
import { 
  FileCheck, 
  BarChart3, 
  BrainCircuit, 
  CalendarDays, 
  Sparkles, 
  FileSpreadsheet, 
  Users, 
  CheckCircle2, 
  Clock, 
  Send, 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  RefreshCw, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Filter,
  Check,
  Zap,
  BookOpen
} from 'lucide-react';
import { 
  TabId, 
  MockQuestion 
} from '../types';
import { 
  TAB_INFOS, 
  MOCK_PAPERS, 
  SAMPLE_QUESTIONS, 
  DOUBT_PRESETS, 
  REGISTERED_STUDENTS,
  LOVABLE_PROJECT_URL 
} from '../data/mockData';

interface FeaturesHubProps {
  initialTab?: TabId;
  onOpenLaunchModal: () => void;
}

export const FeaturesHub: React.FC<FeaturesHubProps> = ({ initialTab = 'mocks', onOpenLaunchModal }) => {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  // Tab 1 (Mocks) Simulator State
  const [selectedPaper, setSelectedPaper] = useState(MOCK_PAPERS[0].id);
  const [isTestActive, setIsTestActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [testFinished, setTestFinished] = useState(false);
  const [testScore, setTestScore] = useState<{ marks: number; total: number; accuracy: number; percentile: number; air: number } | null>(null);

  // Tab 3 (Coach) State
  const [targetPercentile, setTargetPercentile] = useState<number>(99.2);
  const [tasksCompleted, setTasksCompleted] = useState<{ [key: string]: boolean }>({ 'task-1': true, 'task-2': true });

  // Tab 4 (Planner) State
  const [dailyHours, setDailyHours] = useState<number>(7);
  const [coachingHours, setCoachingHours] = useState<number>(4);
  const [selectedWeakChapter, setSelectedWeakChapter] = useState('Rotational Motion & Inertia');

  // Tab 5 (Doubt Solver) State
  const [customQuestion, setCustomQuestion] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(DOUBT_PRESETS[0]);
  const [isThinkingDoubt, setIsThinkingDoubt] = useState(false);
  const [doubtHistory, setDoubtHistory] = useState<any[]>([DOUBT_PRESETS[0]]);

  // Tab 6 (Reports) Filter
  const [reportFilter, setReportFilter] = useState<'All' | 'Physics' | 'Chemistry' | 'Mathematics'>('All');

  // Handlers for Mock Test Simulator
  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [SAMPLE_QUESTIONS[currentQuestionIndex].id]: optionIndex
    }));
  };

  const handleFinishTest = () => {
    let correct = 0;
    let attempted = 0;
    let marks = 0;

    SAMPLE_QUESTIONS.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected !== undefined) {
        attempted++;
        if (selected === q.correctOptionIndex) {
          correct++;
          marks += 4;
        } else {
          marks -= 1;
        }
      }
    });

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const total = SAMPLE_QUESTIONS.length * 4;
    // Calculate normalized percentile
    const normalizedRatio = Math.max(0, marks) / total;
    const percentile = +(90 + (normalizedRatio * 9.9)).toFixed(2);
    const air = Math.max(120, Math.round((1 - (percentile / 100)) * 1400000));

    setTestScore({ marks, total, accuracy, percentile, air });
    setTestFinished(true);
    setIsTestActive(false);
  };

  const handleAskDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsThinkingDoubt(true);
    setTimeout(() => {
      const generatedDoubt = {
        id: 'custom-' + Date.now(),
        subject: 'Physics' as const,
        topic: 'Custom Question Analysis',
        question: customQuestion,
        aiResponse: {
          approach: 'Applied First Principles of JEE Mechanics & Conservation of Energy/Momentum.',
          stepByStep: [
            'Identified initial state variables and boundary constraints.',
            'Formulated differential equations governing the system dynamics.',
            'Evaluated limits and integrated along the specified path.',
            'Verified unit dimensions and tested asymptotic edge cases.'
          ],
          keyFormula: 'F_{\\text{net}} = m \\frac{dv}{dt} = -k x^n',
          commonPitfall: 'Avoid confusing frame of reference acceleration with pseudo force direction.',
          relatedPYQ: 'JEE Main 2025 Jan Shift 1 (Concept matched 96%)'
        }
      };
      setDoubtHistory([generatedDoubt, ...doubtHistory]);
      setSelectedPreset(generatedDoubt);
      setCustomQuestion('');
      setIsThinkingDoubt(false);
    }, 1200);
  };

  const activeTabInfo = TAB_INFOS.find(t => t.id === activeTab) || TAB_INFOS[0];

  return (
    <section id="tabs-hub" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Feature Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Explore The Entire RankPilot Engine
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Switch between the 7 core feature tabs from the Lovable application. Test live simulations, explore AI diagnostics, and see how each tool elevates your percentile.
          </p>
        </div>

        {/* 7 Tab Navigation Pills Bar */}
        <div className="mt-12 overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex items-center justify-start lg:justify-center gap-2 min-w-max p-1.5 bg-slate-900/80 rounded-2xl border border-slate-800 backdrop-blur-xl">
            {TAB_INFOS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setTestFinished(false);
                    setIsTestActive(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-[1.02]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {tab.id === 'mocks' && <FileCheck className="w-4 h-4 text-cyan-300" />}
                  {tab.id === 'analytics' && <BarChart3 className="w-4 h-4 text-emerald-300" />}
                  {tab.id === 'coach' && <BrainCircuit className="w-4 h-4 text-indigo-300" />}
                  {tab.id === 'planner' && <CalendarDays className="w-4 h-4 text-amber-300" />}
                  {tab.id === 'doubts' && <Sparkles className="w-4 h-4 text-purple-300" />}
                  {tab.id === 'reports' && <FileSpreadsheet className="w-4 h-4 text-rose-300" />}
                  {tab.id === 'students' && <Users className="w-4 h-4 text-teal-300" />}
                  
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Context Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
                  Feature Spotlight
                </span>
                <span className="text-xs text-slate-400">{activeTabInfo.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                {activeTabInfo.headline}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeTabInfo.description}
              </p>
            </div>

            {/* Quick Metrics from App */}
            <div className="grid grid-cols-3 gap-3 shrink-0">
              {activeTabInfo.keyMetrics.map((km, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-center">
                  <div className="text-lg font-black text-white">{km.value}</div>
                  <div className="text-[11px] text-slate-400">{km.label}</div>
                  <div className="text-[10px] font-mono text-cyan-400 mt-0.5">{km.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TAB 1: JEE PYQ MOCKS SIMULATOR */}
        {activeTab === 'mocks' && (
          <div className="mt-8 rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl animate-fade-in">
            {!isTestActive && !testFinished ? (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <h4 className="text-xl font-bold text-white">Select Verified NTA Shift Paper</h4>
                    <p className="text-xs text-slate-400 mt-1">Simulate authentic exam conditions with real 3-hour marking pattern.</p>
                  </div>
                  <a
                    href={LOVABLE_PROJECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                  >
                    <span>View All 140+ Shifts on Lovable App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Paper Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {MOCK_PAPERS.map((paper) => {
                    const isSelected = selectedPaper === paper.id;
                    return (
                      <div
                        key={paper.id}
                        onClick={() => setSelectedPaper(paper.id)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-sky-950/30 border-sky-500 shadow-lg shadow-sky-500/10 scale-[1.02]'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            {paper.examType}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{paper.year}</span>
                        </div>
                        <h5 className="text-sm font-bold text-white mt-3">{paper.dateLabel}</h5>
                        <div className="mt-4 space-y-1.5 text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="text-slate-200 font-mono">{paper.durationMinutes} Mins</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Marks:</span>
                            <span className="text-slate-200 font-mono">{paper.totalMarks} Marks</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Attempted By:</span>
                            <span className="text-cyan-400 font-mono">{paper.solvedCount.toLocaleString()} Aspirants</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Start Test Action Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-blue-950/30 to-indigo-950/40 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h5 className="text-base font-bold text-white">Ready to test your accuracy & speed?</h5>
                    <p className="text-xs text-slate-300 mt-1">Start this interactive 3-question mini-mock to calculate your live rank prediction.</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsTestActive(true);
                      setCurrentQuestionIndex(0);
                      setSelectedAnswers({});
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Start Mini Mock Drill</span>
                  </button>
                </div>
              </div>
            ) : isTestActive ? (
              /* Active Test Simulator */
              <div className="p-6 sm:p-8 space-y-6">
                {/* Simulator Top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-bold font-mono">
                      Question {currentQuestionIndex + 1} of {SAMPLE_QUESTIONS.length}
                    </span>
                    <span className="text-xs font-semibold text-slate-300">
                      Subject: <strong className="text-cyan-400">{SAMPLE_QUESTIONS[currentQuestionIndex].subject}</strong>
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-amber-300 border border-amber-500/20">
                      {SAMPLE_QUESTIONS[currentQuestionIndex].difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-amber-300 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
                    <Clock className="w-3.5 h-3.5 animate-pulse" />
                    <span>02:45 remaining</span>
                  </div>
                </div>

                {/* Question Details */}
                <div className="space-y-4">
                  <div className="text-xs font-mono text-slate-400">
                    Topic: <strong className="text-slate-200">{SAMPLE_QUESTIONS[currentQuestionIndex].topic}</strong> | {SAMPLE_QUESTIONS[currentQuestionIndex].weightage}
                  </div>
                  <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                    {SAMPLE_QUESTIONS[currentQuestionIndex].questionText}
                  </p>

                  {/* Options List */}
                  <div className="space-y-2.5 pt-2">
                    {SAMPLE_QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = selectedAnswers[SAMPLE_QUESTIONS[currentQuestionIndex].id] === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => handleAnswerSelect(idx)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-sky-950/40 border-sky-400 text-white shadow-md shadow-sky-500/10'
                              : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                              isSelected ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="text-sm">{option}</span>
                          </div>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-sky-400" />}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question Navigation & Submit Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-3">
                    {currentQuestionIndex < SAMPLE_QUESTIONS.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all flex items-center gap-2"
                      >
                        <span>Next Question</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleFinishTest}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        <span>Submit & Calculate AIR</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Test Score Result Card */
              <div className="p-6 sm:p-8 space-y-6 text-center animate-fade-in">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white font-display">Mini Mock Completed!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  RankPilot has evaluated your answers against 2026 NTA shift curves.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Score Achieved</span>
                    <span className="text-2xl font-black text-white">{testScore?.marks} / {testScore?.total}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Accuracy</span>
                    <span className="text-2xl font-black text-cyan-400">{testScore?.accuracy}%</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-sky-500/30 bg-sky-950/20">
                    <span className="text-[11px] text-sky-400 block">Predicted Percentile</span>
                    <span className="text-2xl font-black text-sky-300 font-mono">{testScore?.percentile} %ile</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 bg-indigo-950/20">
                    <span className="text-[11px] text-indigo-400 block">Projected AIR</span>
                    <span className="text-2xl font-black text-indigo-300 font-mono">AIR {testScore?.air}</span>
                  </div>
                </div>

                {/* Explanation Review */}
                <div className="mt-6 text-left max-w-3xl mx-auto p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">AI Question Breakdown</h5>
                  {SAMPLE_QUESTIONS.map((q, idx) => {
                    const ans = selectedAnswers[q.id];
                    const isCorrect = ans === q.correctOptionIndex;
                    return (
                      <div key={q.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-300">Q{idx + 1}: {q.topic}</span>
                          <span className={`font-semibold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {isCorrect ? '+4 Marks' : ans !== undefined ? '-1 Mark' : '0 (Skipped)'}
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px]">{q.explanation}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => {
                      setTestFinished(false);
                      setIsTestActive(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                  >
                    Retake Drill
                  </button>
                  <a
                    href={LOVABLE_PROJECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
                  >
                    <span>Unlock Full 140+ Mocks on Lovable</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: DEEP ANALYTICS */}
        {activeTab === 'analytics' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Chart 1: Subject Mastery vs AIR 100 */}
            <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">Subject Mastery vs Top 100 Rankers</h4>
                  <p className="text-xs text-slate-400">Benchmark from 90 days of continuous testing</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                  +14% Growth MoM
                </span>
              </div>

              {/* Visual Radar & Progress Bars */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-300">Physics (Mechanics, Electrodynamics, Optics)</span>
                    <span className="font-mono text-cyan-400">You: 86% | AIR 100: 94%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-sky-400 h-full rounded-full" style={{ width: '86%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-300">Chemistry (Organic Mechanisms, Coordination, Thermo)</span>
                    <span className="font-mono text-cyan-400">You: 92% | AIR 100: 96%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-300">Mathematics (Calculus, Coordinate Geometry, Vectors)</span>
                    <span className="font-mono text-amber-400">You: 74% | AIR 100: 91%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '74%' }} />
                  </div>
                </div>
              </div>

              {/* 3-Layer Error Taxonomy Cards */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-semibold text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Silly / Calculation
                  </div>
                  <div className="text-xl font-black text-white mt-1">42%</div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Unit slip, sign error in algebra</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5" /> Conceptual Gaps
                  </div>
                  <div className="text-xl font-black text-white mt-1">38%</div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Unfamiliarity with deep theory</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-semibold text-sky-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Time Crunch / Panic
                  </div>
                  <div className="text-xl font-black text-white mt-1">20%</div>
                  <p className="text-[10px] text-slate-400 mt-0.5">Rushed last 15 minutes of paper</p>
                </div>
              </div>
            </div>

            {/* Sidebar: AI Diagnostic Recommendations */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> AI Actionable Prescription
                </div>
                <h4 className="text-lg font-bold text-white">Top 3 Marks Leaks Pinpointed</h4>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex justify-between font-bold text-slate-200">
                      <span>Definite Integration Limits</span>
                      <span className="text-rose-400">-8 Marks</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Leibnitz rule application speed is 45s slower than benchmark.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex justify-between font-bold text-slate-200">
                      <span>Rotational Inertia Parallel Axis</span>
                      <span className="text-amber-400">-4 Marks</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Repeated sign confusion on offset center of mass.</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex justify-between font-bold text-slate-200">
                      <span>Electrochemical Nernst Equation</span>
                      <span className="text-emerald-400">+12 Marks Recovered</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Fixed via AI Coach 3-day sprint!</p>
                  </div>
                </div>
              </div>

              <a
                href={LOVABLE_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
              >
                <span>View Full Analytics Dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 3: PERSONAL AI COACH (ZERO-TO-HERO) */}
        {activeTab === 'coach' && (
          <div className="mt-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-8 animate-fade-in">
            {/* Coach Header with Interactive Target Percentile */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider">
                    AI Mentor Mode
                  </span>
                  <span className="text-xs text-slate-400">Zero-to-Hero Foundation Reset</span>
                </div>
                <h4 className="text-2xl font-black text-white font-display mt-2">
                  Personalized Roadmap: Target {targetPercentile} %ile
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Adjust your goal to automatically re-balance your daily sprint intensity and chapter priorities.
                </p>
              </div>

              {/* Interactive Target Slider */}
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 space-y-2 min-w-[280px]">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Target Percentile:</span>
                  <span className="font-black text-cyan-400 font-mono text-sm">{targetPercentile} %ile</span>
                </div>
                <input
                  type="range"
                  min="85.0"
                  max="99.9"
                  step="0.1"
                  value={targetPercentile}
                  onChange={(e) => setTargetPercentile(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>85.0 %ile</span>
                  <span>95.0 %ile</span>
                  <span>99.9 %ile (AIR &lt; 100)</span>
                </div>
              </div>
            </div>

            {/* Daily Sprints Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Sprint Task 1 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                tasksCompleted['task-1']
                  ? 'bg-slate-950/40 border-slate-800/60 opacity-80'
                  : 'bg-slate-950/80 border-indigo-500/40'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono">
                    PHYSICS • High Weightage
                  </span>
                  <button 
                    onClick={() => setTasksCompleted(p => ({ ...p, 'task-1': !p['task-1'] }))}
                    className="text-slate-400 hover:text-white"
                  >
                    {tasksCompleted['task-1'] ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-600" />
                    )}
                  </button>
                </div>
                <h5 className="text-sm font-bold text-white mt-3">Rotational Dynamics: Rolling Without Slipping</h5>
                <p className="text-xs text-slate-400 mt-1">Solve 15 shift PYQs focusing on inclined plane and frictional work.</p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
                  <span>Estimated: 45 Mins</span>
                  <span className="text-emerald-400 font-semibold">+8 Marks Yield</span>
                </div>
              </div>

              {/* Sprint Task 2 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                tasksCompleted['task-2']
                  ? 'bg-slate-950/40 border-slate-800/60 opacity-80'
                  : 'bg-slate-950/80 border-indigo-500/40'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono">
                    CHEMISTRY • Organic
                  </span>
                  <button 
                    onClick={() => setTasksCompleted(p => ({ ...p, 'task-2': !p['task-2'] }))}
                    className="text-slate-400 hover:text-white"
                  >
                    {tasksCompleted['task-2'] ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-600" />
                    )}
                  </button>
                </div>
                <h5 className="text-sm font-bold text-white mt-3">Aldehydes, Ketones & Crossed Cannizzaro</h5>
                <p className="text-xs text-slate-400 mt-1">Revise nucleophilic attack mechanism & solve 2024-2025 shift problems.</p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
                  <span>Estimated: 60 Mins</span>
                  <span className="text-emerald-400 font-semibold">+12 Marks Yield</span>
                </div>
              </div>

              {/* Sprint Task 3 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                tasksCompleted['task-3']
                  ? 'bg-slate-950/40 border-slate-800/60 opacity-80'
                  : 'bg-slate-950/80 border-indigo-500/40'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">
                    MATHS • Calculus
                  </span>
                  <button 
                    onClick={() => setTasksCompleted(p => ({ ...p, 'task-3': !p['task-3'] }))}
                    className="text-slate-400 hover:text-white"
                  >
                    {tasksCompleted['task-3'] ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-600" />
                    )}
                  </button>
                </div>
                <h5 className="text-sm font-bold text-white mt-3">Definite Integrals & King's Property</h5>
                <p className="text-xs text-slate-400 mt-1">Master symmetry reductions and periodic function integrations.</p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
                  <span>Estimated: 50 Mins</span>
                  <span className="text-emerald-400 font-semibold">+8 Marks Yield</span>
                </div>
              </div>

            </div>

            {/* Coach Bottom Bar */}
            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Daily Sprint Progress: {Object.values(tasksCompleted).filter(Boolean).length} / 3 Tasks Done</div>
                  <div className="text-xs text-indigo-300">Completing all 3 sprints adds +28 predicted marks to your mock baseline.</div>
                </div>
              </div>
              <a
                href={LOVABLE_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2"
              >
                <span>Launch Coach on Lovable</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 4: DYNAMIC STUDY PLANNER */}
        {activeTab === 'planner' && (
          <div className="mt-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <h4 className="text-xl font-bold text-white">Your Plan, Personalized.</h4>
                <p className="text-xs text-slate-300 mt-1">Generated by RankPilot AI based on available hours, weak spots, and target exam.</p>
              </div>

              {/* Control toggles */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 flex items-center gap-3 text-xs">
                  <span className="text-slate-400">Self-Study:</span>
                  <select
                    value={dailyHours}
                    onChange={(e) => setDailyHours(Number(e.target.value))}
                    className="bg-slate-900 text-sky-400 font-bold font-mono outline-none cursor-pointer"
                  >
                    <option value={4}>4 Hours / day</option>
                    <option value={6}>6 Hours / day</option>
                    <option value={7}>7 Hours / day</option>
                    <option value={8}>8 Hours / day</option>
                    <option value={10}>10 Hours / day</option>
                  </select>
                </div>

                <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 flex items-center gap-3 text-xs">
                  <span className="text-slate-400">Weak Area:</span>
                  <select
                    value={selectedWeakChapter}
                    onChange={(e) => setSelectedWeakChapter(e.target.value)}
                    className="bg-slate-900 text-cyan-400 font-bold outline-none cursor-pointer"
                  >
                    <option value="Rotational Motion & Inertia">Rotational Motion</option>
                    <option value="Aldehydes & Carbonyls">Aldehydes & Carbonyls</option>
                    <option value="Definite Integrals">Definite Integrals</option>
                    <option value="Electromagnetic Induction">Electromagnetic Induction</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Generated Timetable Grid */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Optimal Schedule (Today)</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-sky-400 font-bold">06:30 AM - 08:30 AM</span>
                  <div className="text-sm font-bold text-white">Physics Deep Focus</div>
                  <p className="text-xs text-slate-400">{selectedWeakChapter} Concept & 20 Solved Examples</p>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-sky-500/10 text-sky-300">Active Recall</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">02:00 PM - 04:00 PM</span>
                  <div className="text-sm font-bold text-white">Chemistry Reaction Sprint</div>
                  <p className="text-xs text-slate-400">Coordination Isomerism & Crystal Field Splitting PYQs</p>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-cyan-500/10 text-cyan-300">PYQ Drill</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 font-bold">05:30 PM - 07:30 PM</span>
                  <div className="text-sm font-bold text-white">Maths Problem Solving</div>
                  <p className="text-xs text-slate-400">Calculus Multi-Correct & Matrix Matching Matrix</p>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-amber-500/10 text-amber-300">Hard Drill</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">09:30 PM - 10:30 PM</span>
                  <div className="text-sm font-bold text-white">Spaced Flashcard Revision</div>
                  <p className="text-xs text-slate-400">NCERT Inorganic lines & Physics formula handbook</p>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-300">Memory Sync</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Adaptive Sync: Timetable automatically adjusts if coaching runs late.
              </span>
              <a
                href={LOVABLE_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-semibold hover:underline flex items-center gap-1"
              >
                Sync with Google Calendar / Lovable <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 5: 24/7 AI DOUBT SOLVER */}
        {activeTab === 'doubts' && (
          <div className="mt-8 rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h4 className="text-xl font-bold text-white">Ask anything. Get a clear path.</h4>
                <p className="text-xs text-slate-300 mt-1">Instant step-by-step mathematical proofs, pitfalls, and related PYQs.</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                AI Solver Active (<span className="text-white">&lt; 1.5s latency</span>)
              </div>
            </div>

            {/* Presets Row */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-400">Try High-Yield Doubt Scenarios:</span>
              <div className="flex flex-wrap gap-2">
                {DOUBT_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedPreset.id === preset.id
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                        : 'bg-slate-950/70 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {preset.subject}: {preset.topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Interactive Doubt Box */}
            <form onSubmit={handleAskDoubt} className="relative">
              <input
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="Type any JEE question (e.g. Find center of mass of uniform semicircular disc of radius R)..."
                className="w-full px-5 py-4 pr-28 rounded-2xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-all"
              />
              <button
                type="submit"
                disabled={isThinkingDoubt}
                className="absolute right-2.5 top-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all disabled:opacity-50"
              >
                {isThinkingDoubt ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Solve</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* AI Response Display */}
            {selectedPreset && (
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    {selectedPreset.subject} • {selectedPreset.topic}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-mono">
                    Verified Formula & Proof
                  </span>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-white">Q: {selectedPreset.question}</h5>
                </div>

                {/* Key Approach */}
                <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/20 text-xs space-y-1">
                  <span className="font-bold text-sky-400 block">Core Conceptual Approach:</span>
                  <p className="text-slate-300">{selectedPreset.aiResponse.approach}</p>
                </div>

                {/* Step-by-Step Derivation */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-300">Step-by-Step Derivation:</span>
                  <div className="space-y-2">
                    {selectedPreset.aiResponse.stepByStep.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-cyan-400 shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Formula Alert */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Key Governing Equation</span>
                    <div className="font-mono text-sm font-bold text-cyan-300 mt-0.5">{selectedPreset.aiResponse.keyFormula}</div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Exam Memorization Level: High</span>
                </div>

                {/* Examiner Pitfall & Matching PYQ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <span className="font-bold text-rose-400 block">Common Pitfall to Avoid:</span>
                    <p className="text-slate-300 mt-1 text-[11px]">{selectedPreset.aiResponse.commonPitfall}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
                    <span className="font-bold text-indigo-400 block">Related Practice Shift PYQ:</span>
                    <p className="text-slate-300 mt-1 text-[11px]">{selectedPreset.aiResponse.relatedPYQ}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 6: MY REPORTS & QUESTION LOGS */}
        {activeTab === 'reports' && (
          <div className="mt-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h4 className="text-xl font-bold text-white">Granular Question Logs & Speed Matrix</h4>
                <p className="text-xs text-slate-300 mt-1">Review your accuracy, time delta vs AIR 100 toppers, and error categorization.</p>
              </div>

              {/* Subject Filter */}
              <div className="flex items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 text-xs">
                {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setReportFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      reportFilter === filter
                        ? 'bg-sky-500 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Logs Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950/80 text-slate-400 text-[11px] uppercase tracking-wider font-mono border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Q. No & Subject</th>
                    <th className="py-3 px-4">Topic / Concept</th>
                    <th className="py-3 px-4">Your Time</th>
                    <th className="py-3 px-4">Topper Time</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Error Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3.5 px-4 font-bold text-white">Q1 • Physics</td>
                    <td className="py-3.5 px-4 text-slate-300">Rotational Dynamics (Cylinder on Incline)</td>
                    <td className="py-3.5 px-4 font-mono text-cyan-400">1m 12s</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">1m 20s</td>
                    <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Correct (+4)</span></td>
                    <td className="py-3.5 px-4 text-slate-400">Mastered Concept</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3.5 px-4 font-bold text-white">Q2 • Chemistry</td>
                    <td className="py-3.5 px-4 text-slate-300">Coordination Compounds (Magnetic Moment)</td>
                    <td className="py-3.5 px-4 font-mono text-cyan-400">42s</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">38s</td>
                    <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">Correct (+4)</span></td>
                    <td className="py-3.5 px-4 text-slate-400">Rapid Recall</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3.5 px-4 font-bold text-white">Q3 • Mathematics</td>
                    <td className="py-3.5 px-4 text-slate-300">Definite Integration (King's Property)</td>
                    <td className="py-3.5 px-4 font-mono text-amber-400">2m 45s</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">1m 15s</td>
                    <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">Incorrect (-1)</span></td>
                    <td className="py-3.5 px-4 text-rose-300 font-semibold">Calculation Slip in Bounds</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3.5 px-4 font-bold text-white">Q4 • Physics</td>
                    <td className="py-3.5 px-4 text-slate-300">Electromagnetic Induction (Rotating Rod)</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">--</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">1m 40s</td>
                    <td className="py-3.5 px-4"><span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-bold">Unattempted (0)</span></td>
                    <td className="py-3.5 px-4 text-amber-300">Time Deficit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-4 flex justify-between items-center text-xs text-slate-400 border-t border-slate-800">
              <span>Showing 4 of 90 questions for selected Shift Paper</span>
              <a
                href={LOVABLE_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-semibold hover:underline flex items-center gap-1"
              >
                Export Full PDF Diagnostic on Lovable <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 7: REGISTERED STUDENTS & COHORTS */}
        {activeTab === 'students' && (
          <div className="mt-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h4 className="text-xl font-bold text-white">Top Rankers Cohort & Active Aspirants</h4>
                <p className="text-xs text-slate-300 mt-1">Real-time national benchmarking among 52,000+ serious JEE aspirants.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Batch Synced
              </span>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {REGISTERED_STUDENTS.map((student) => (
                <div
                  key={student.id}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 hover:border-sky-500/40 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-indigo-500/20 text-indigo-300">
                      {student.status}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{student.targetYear}</span>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white">{student.name}</h5>
                    <p className="text-[11px] text-slate-400">{student.activeBatch}</p>
                  </div>

                  <div className="space-y-1 text-xs border-t border-slate-800/80 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Current Percentile:</span>
                      <span className="font-mono text-cyan-400 font-bold">{student.currentPercentile} %ile</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Predicted AIR:</span>
                      <span className="font-mono text-emerald-400 font-bold">AIR {student.predictedAIR}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tests Completed:</span>
                      <span className="font-mono text-slate-200">{student.testsCompleted} Mocks</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 via-blue-950/30 to-indigo-950/40 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-bold text-white">Want to see where you rank in the National Cohort?</h5>
                <p className="text-xs text-slate-300 mt-0.5">Register your profile to access private study pods and national weekend showdowns.</p>
              </div>
              <button
                onClick={onOpenLaunchModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-sky-500/20 shrink-0"
              >
                Join Cohort Free
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  FileCheck2, 
  Award, 
  Zap, 
  Layers, 
  Languages, 
  BarChart3, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Headphones, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Target,
  ExternalLink,
  ShieldCheck,
  Check,
  XCircle,
  Flame,
  Brain,
  Timer,
  Coins,
  Swords
} from 'lucide-react';
import { APP_FEATURE_HIGHLIGHTS, LOVABLE_PROJECT_URL } from '../data/mockData';

interface ComparisonPillar {
  id: string;
  title: string;
  icon: any;
  badge: string;
  traditional: {
    tag: string;
    title: string;
    desc: string;
    score: number;
    friction: string;
  };
  ranker: {
    tag: string;
    title: string;
    desc: string;
    score: number;
    advantage: string;
  };
}

const COMPARISON_PILLARS: ComparisonPillar[] = [
  {
    id: 'cbt-mocks',
    title: 'PYQ Mocks & CBT Engine',
    icon: FileCheck2,
    badge: '120+ Real Shift Papers',
    traditional: {
      tag: 'Static & Unrealistic',
      title: 'Paper Booklets or Static PDFs',
      desc: 'Static question papers with simple text keys. Zero actual NTA screen interface, no numerical integer keyboard, and test results take days.',
      score: 25,
      friction: 'Students freeze during real computer-based exam due to screen unfamiliarity'
    },
    ranker: {
      tag: '100% NTA Replica',
      title: 'Full NTA CBT Engine (2021–2026)',
      desc: 'Exact computer-based examination simulator with live countdown timer, Section A MCQs & Section B numerical format, plus real-time All India Rank.',
      score: 98,
      advantage: 'Practice in the exact interface you will write on JEE exam day'
    }
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic Error Analytics',
    icon: BarChart3,
    badge: 'Dual-Tier AI Reports',
    traditional: {
      tag: 'Superficial',
      title: 'Basic Total Marks Scorecard',
      desc: 'Shows only total score and percentage. Doesn’t tell you which chapters drained your time or whether errors were silly slips or concept voids.',
      score: 20,
      friction: 'Repeats the exact same calculation mistakes in every subsequent mock'
    },
    ranker: {
      tag: 'Root-Cause Diagnosis',
      title: 'Dual-Tier & Consolidated 5-Test AI Reports',
      desc: 'Isolates calculation slips from fundamental concept blind spots. Tracks 5-mock trends to guarantee steady percentile elevation.',
      score: 96,
      advantage: '+38 Marks average growth within 6 mocks by eliminating silly errors'
    }
  },
  {
    id: 'doubts',
    title: '24/7 Doubt Resolution',
    icon: Zap,
    badge: 'Sub-Second LaTeX Proofs',
    traditional: {
      tag: 'Frustrating Queues',
      title: 'Waiting in Faculty Queues',
      desc: 'Stand in line after 6 hours of lecture to get 2 minutes with tired faculty, or leave doubts completely unresolved before exam night.',
      score: 15,
      friction: 'Doubts pile up into massive mental backlogs and test anxiety'
    },
    ranker: {
      tag: 'Instant 24/7 AI IITian',
      title: 'Multilingual AI Solver (< 2s Latency)',
      desc: 'Ask any Physics, Chemistry, or Math problem 24/7 in Tamil, English, Hindi, Telugu, or Kannada and get step-by-step mathematical derivations.',
      score: 99,
      advantage: 'Zero doubt wait time — understand every step in your mother tongue'
    }
  },
  {
    id: 'materials',
    title: 'Revision & Mind Maps',
    icon: BookOpen,
    badge: 'Active Recall Toolkit',
    traditional: {
      tag: 'Information Overload',
      title: 'Bulky 800+ Page Modules',
      desc: 'Exhausting volumes of repetitive text, causing students to spend hours re-reading passive theory without retaining core formulas.',
      score: 30,
      friction: 'Severe backlog fatigue and panic during final exam revision weeks'
    },
    ranker: {
      tag: 'High-Yield Retention',
      title: 'Concept Notes, Formulas & Mind Maps',
      desc: '92 chapter-by-chapter IITian Concept Notes, high-frequency Formula Cheat Sheets, and visual Mind Maps designed for rapid active recall.',
      score: 95,
      advantage: 'Recall interconnected formulas in 5 minutes before entering the exam hall'
    }
  },
  {
    id: 'planning',
    title: 'Adaptive Study Timetable',
    icon: Calendar,
    badge: 'Backlog Auto-Recovery',
    traditional: {
      tag: 'Rigid & Unforgiving',
      title: 'One-Pace Batch Schedule',
      desc: 'Institutional timetable marches ahead at fixed speed. If you fall sick or have school exams, you compound permanent backlogs.',
      score: 20,
      friction: 'Student loses confidence and falls into the dreaded "backlog trap"'
    },
    ranker: {
      tag: 'Self-Adjusting AI',
      title: 'Personalized Adaptive Planner',
      desc: 'Dynamic study planner that automatically redistributes syllabus topics and self-recovers backlogs when you miss study days.',
      score: 94,
      advantage: 'Completely backlog-free preparation adapted to your personal speed'
    }
  },
  {
    id: 'cost',
    title: 'Financial Investment & ROI',
    icon: Award,
    badge: 'Save ₹2,00,000+ Annually',
    traditional: {
      tag: 'Extremely Expensive',
      title: '₹1,50,000 - ₹3,00,000+ / Year',
      desc: 'Exorbitant tuition fees, plus expensive hostel rent, mess food, daily travel, and costly printed books with zero money-back assurance.',
      score: 10,
      friction: 'Immense financial burden on families with unpredictable rank outcomes'
    },
    ranker: {
      tag: '98% Cost Reduction',
      title: 'Just ₹3,000 / Year (₹5,000 for 2 Years)',
      desc: 'All-inclusive digital pass with 120+ shift mocks, 40+ Advanced papers, BITSAT series, 24/7 multilingual doubt solver & study materials.',
      score: 100,
      advantage: 'World-class IITian preparation accessible to every Indian family'
    }
  }
];

export const AboutSection: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<string>('jee-mains');
  const [selectedLang, setSelectedLang] = useState<string>('Tamil');
  const [comparisonMode, setComparisonMode] = useState<'duel' | 'matrix'>('duel');
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  const languages = [
    { name: 'Tamil', native: 'தமிழ்', example: 'நியூட்டனின் இரண்டாம் விதி மற்றும் சுழற்சி இயக்கவியல்' },
    { name: 'English', native: 'English', example: 'Newton’s 2nd Law & Rotational Dynamics Proof' },
    { name: 'Hindi', native: 'हिन्दी', example: 'न्यूटन का द्वितीय नियम और घूर्णी गतििकी' },
    { name: 'Telugu', native: 'తెలుగు', example: 'న్యూటన్ రెండవ నియమం మరియు భ్రమణ గతిశాస్త్రం' },
    { name: 'Kannada', native: 'ಕನ್ನಡ', example: 'ನ್ಯೂಟನ್‌ನ ಎರಡನೇ ನಿಯಮ ಮತ್ತು ತಿರುಗುವ ಚಲನಶಾಸ್ತ್ರ' },
  ];

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

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We’ve packed India’s most comprehensive testing, revision, and AI mentorship ecosystem into one unified platform. Here is everything included in your student access:
          </p>
        </div>

        {/* 8 Core Feature Highlights Grid (Clean without badge clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
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

        {/* Interactive Feature Deep Dive: Multilingual Doubt Solver & 5-Test Consolidated Intelligence */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Multilingual Doubt Solver Showcase */}
            <div className="lg:col-span-6 space-y-5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                ⭐ Exclusive Feature
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Learn Concepts & Clear Doubts in Your Preferred Language
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                JEE Ranker's AI Doubt Solver understands and explains intricate IIT-JEE physics derivations, organic reaction mechanisms, and calculus tricks in 5 regional languages.
              </p>

              {/* Language Selector Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => setSelectedLang(lang.name)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedLang === lang.name
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    <span>{lang.native} ({lang.name})</span>
                  </button>
                ))}
              </div>

              {/* Active Language Preview Bubble */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wide">
                  Real-Time AI Response Preview in {selectedLang}:
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  "{languages.find(l => l.name === selectedLang)?.example}"
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  ✓ Instant LaTeX Math + Step-by-Step Explanation + 3 Similar PYQs
                </div>
              </div>
            </div>

            {/* Right: Consolidated 5-Test Diagnostic Preview */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-black uppercase text-emerald-400 tracking-wider">
                  Consolidated 5-Test Report Preview
                </span>
                <span className="text-[11px] font-bold text-slate-300">
                  Target: 99+ Percentile
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Accuracy Trend Over Last 5 Mocks:</span>
                  <span className="font-black text-emerald-400 text-sm">86% ➔ 92% ➔ 89% ➔ 94% ➔ 98%</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Score Growth Trajectory:</span>
                  <span className="font-black text-blue-400 text-sm">+34 Marks Gain</span>
                </div>

                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300">
                  <div className="font-bold mb-1">Persistent Weak Areas Spotted Across 5 Tests:</div>
                  <div className="text-[11px] text-slate-300">
                    • Complex Numbers (Roots of unity sign rush) <br />
                    • Rotational Mechanics (Toppling threshold condition)
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <div className="font-bold mb-1">Dominant Strengths Cemented:</div>
                  <div className="text-[11px] text-slate-300">
                    • Definite Integrals (100% accuracy) • Electrostatics & Magnetism (100%)
                  </div>
                </div>
              </div>

              <a
                href={LOVABLE_PROJECT_URL}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Platform On JEE Ranker</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Creative Head-to-Head Comparison: Traditional Coaching vs JEE Ranker AI */}
        <div className="mb-14">
          
          {/* Comparison Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-black uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>The Paradigm Shift</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Traditional Coaching vs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
                JEE Ranker AI Co-Pilot
              </span>
            </h3>

            <p className="text-base text-slate-600 font-medium">
              See why thousands of JEE and BITSAT aspirants are replacing rigid, expensive classroom coaching with our personalized 24/7 digital preparation ecosystem.
            </p>

            {/* Mode Toggle Switcher: Duel vs Deep Dive */}
            <div className="pt-3 flex justify-center">
              <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm">
                <button
                  onClick={() => setComparisonMode('duel')}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    comparisonMode === 'duel'
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Swords className="w-4 h-4" />
                  <span>Head-to-Head Showdown</span>
                </button>

                <button
                  onClick={() => setComparisonMode('matrix')}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    comparisonMode === 'matrix'
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Feature-by-Feature Deep Dive</span>
                </button>
              </div>
            </div>
          </div>

          {/* VIEW 1: CREATIVE HEAD-TO-HEAD BATTLE DUEL CARDS */}
          {comparisonMode === 'duel' && (
            <div className="relative animate-in fade-in duration-300">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
                
                {/* LEFT CARD: TRADITIONAL COACHING (THE OLD WAY) */}
                <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div>
                    {/* Top Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        The Outdated Way
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">Offline Coaching & Books</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-black text-white mb-2">
                      Generic Coaching Classes
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-6">
                      One-size-fits-all batch pacing, passive theory lectures, and astronomical fees with zero individualized guidance.
                    </p>

                    {/* Quick Metric Stats */}
                    <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/80 mb-6 text-center">
                      <div className="p-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Annual Fee</div>
                        <div className="text-base sm:text-lg font-black text-rose-400">₹1.5L - ₹3L</div>
                      </div>
                      <div className="p-2 border-x border-slate-700">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Batch Ratio</div>
                        <div className="text-base sm:text-lg font-black text-slate-300">1 : 250</div>
                      </div>
                      <div className="p-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Doubt Wait</div>
                        <div className="text-base sm:text-lg font-black text-rose-400">24-48 Hours</div>
                      </div>
                    </div>

                    {/* 5 Friction Points */}
                    <div className="space-y-3.5 mb-6">
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Static Paper Tests:</strong> Zero real NTA computer screen interface or numerical keypad practice.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Superficial Marks Tally:</strong> No error categorization to isolate silly slips from fundamental knowledge gaps.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Exhausting Doubt Queues:</strong> Stand in 45-minute lines outside faculty cabins or leave doubts unresolved.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Bulky 800+ Page Modules:</strong> Heavy redundant textbooks causing severe backlog anxiety and burnout.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Rigid Batch Schedule:</strong> Fixed institutional pace; miss a few days and backlogs compound permanently.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold text-center mt-2">
                    ⚠️ 87% of coaching students report feeling lost and burdened with unmanageable backlogs.
                  </div>
                </div>

                {/* CENTRAL FLOATING VS ORB */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 text-white font-black text-xl flex items-center justify-center shadow-2xl border-4 border-white ring-4 ring-blue-500/20 animate-pulse">
                    VS
                  </div>
                </div>

                {/* RIGHT CARD: JEE RANKER AI (THE MODERN SUPERCHARGER) */}
                <div className="lg:col-span-6 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/80 rounded-3xl border-2 border-blue-600 p-6 sm:p-9 shadow-2xl shadow-blue-500/15 flex flex-col justify-between relative overflow-hidden ring-4 ring-blue-500/10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    {/* Top Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
                        🔥 The Next-Gen Advantage
                      </span>
                      <span className="text-xs text-blue-700 font-bold">10x Faster & Smarter</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                      JEE Ranker AI Platform
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      Personalized 24/7 AI IITian co-pilot engineered to eliminate weak spots, automate revisions, and elevate ranks.
                    </p>

                    {/* Quick Metric Stats */}
                    <div className="grid grid-cols-3 gap-2.5 p-3.5 bg-blue-50/80 rounded-2xl border border-blue-200 mb-6 text-center">
                      <div className="p-2">
                        <div className="text-[10px] font-bold text-slate-500 uppercase">Annual Fee</div>
                        <div className="text-base sm:text-lg font-black text-blue-700">₹3,000 / yr</div>
                      </div>
                      <div className="p-2 border-x border-blue-200">
                        <div className="text-[10px] font-bold text-slate-500 uppercase">Attention</div>
                        <div className="text-base sm:text-lg font-black text-indigo-700">1-on-1 AI</div>
                      </div>
                      <div className="p-2">
                        <div className="text-[10px] font-bold text-slate-500 uppercase">Doubt Wait</div>
                        <div className="text-base sm:text-lg font-black text-emerald-700">&lt; 2 Seconds</div>
                      </div>
                    </div>

                    {/* 5 Superpowers */}
                    <div className="space-y-3.5 mb-6">
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>120+ NTA CBT Shift Mocks:</strong> Exact timer countdown, Section A/B numerical keyboard, and normalized AIR.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Dual-Tier AI Diagnostics:</strong> Isolates calculation slips from conceptual voids + 5-test consolidated tracking.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>24/7 Multilingual AI Doubt Solver:</strong> Instant step-by-step LaTeX derivations in Tamil, English, Hindi, Telugu, and Kannada.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Active Recall Toolkit:</strong> 92-Chapter Concept Notes, high-frequency Formula Sheets & visual Mind Maps.</span>
                      </div>
                      <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Self-Adjusting AI Timetable:</strong> Automatically redistributes syllabus and absorbs backlogs without stress.</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Card Action CTA */}
                  <div className="pt-2">
                    <a
                      href={LOVABLE_PROJECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm text-center shadow-lg shadow-blue-700/25 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Experience The JEE Ranker Advantage</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* VIEW 2: INTERACTIVE FEATURE-BY-FEATURE DEEP DIVE */}
          {comparisonMode === 'matrix' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
              
              {/* 6 Quick Pillar Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {COMPARISON_PILLARS.map((pillar, pIdx) => {
                  const Icon = pillar.icon;
                  const isActive = activePillarIdx === pIdx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillarIdx(pIdx)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
                        isActive
                          ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20 scale-105'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{pillar.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Dual Breakdown Card */}
              {(() => {
                const current = COMPARISON_PILLARS[activePillarIdx];
                const Icon = current.icon;
                return (
                  <div className="space-y-6">
                    
                    {/* Header Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900">{current.title}</h4>
                          <span className="text-xs text-blue-700 font-bold">{current.badge}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs font-bold">
                        <span className="text-rose-600">Traditional Score: {current.traditional.score}%</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-emerald-600">JEE Ranker Score: {current.ranker.score}%</span>
                      </div>
                    </div>

                    {/* Dual Comparison Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Traditional Side */}
                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                            {current.traditional.tag}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400">Score: {current.traditional.score}/100</span>
                        </div>
                        <h5 className="text-base font-black text-slate-900">{current.traditional.title}</h5>
                        <p className="text-xs text-slate-600 leading-relaxed">{current.traditional.desc}</p>
                        
                        <div className="pt-2 border-t border-slate-200 text-xs text-rose-700 font-medium flex items-start gap-1.5">
                          <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span><strong>Friction:</strong> {current.traditional.friction}</span>
                        </div>
                      </div>

                      {/* JEE Ranker Side */}
                      <div className="p-6 rounded-2xl bg-blue-50/70 border-2 border-blue-300 shadow-md space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded border border-emerald-300">
                            {current.ranker.tag}
                          </span>
                          <span className="text-xs font-mono font-bold text-blue-700">Score: {current.ranker.score}/100</span>
                        </div>
                        <h5 className="text-base font-black text-slate-900">{current.ranker.title}</h5>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">{current.ranker.desc}</p>
                        
                        <div className="pt-2 border-t border-blue-200 text-xs text-emerald-800 font-semibold flex items-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                          <span><strong>The Rank Advantage:</strong> {current.ranker.advantage}</span>
                        </div>
                      </div>

                    </div>

                    {/* Comparative Visual Contrast Bar */}
                    <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-rose-400">Traditional Preparation Efficiency: {current.traditional.score}%</span>
                        <span className="text-emerald-400">JEE Ranker AI Efficiency: {current.ranker.score}%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                        <div style={{ width: `${current.traditional.score / 2}%` }} className="bg-rose-500 h-full" />
                        <div style={{ width: `${(100 - current.traditional.score / 2 - current.ranker.score / 2)}%` }} className="bg-slate-700 h-full" />
                        <div style={{ width: `${current.ranker.score / 2}%` }} className="bg-emerald-500 h-full" />
                      </div>
                      <div className="text-[11px] text-center text-slate-400 font-medium pt-1">
                        ⚡ JEE Ranker delivers a <strong>{current.ranker.score - current.traditional.score}% improvement</strong> in active preparation throughput.
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

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
  Check
} from 'lucide-react';
import { APP_FEATURE_HIGHLIGHTS, LOVABLE_PROJECT_URL } from '../data/mockData';

export const AboutSection: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<string>('jee-mains');
  const [selectedLang, setSelectedLang] = useState<string>('Tamil');

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
            <span>Everything Inside RankPilot Platform</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Makes RankPilot The Ultimate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
              AI-Powered JEE & BITSAT Co-Pilot?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We’ve packed India’s most comprehensive testing, revision, and AI mentorship ecosystem into one unified platform. Here is everything included in your student access:
          </p>
        </div>

        {/* 8 Core Feature Highlights Grid (User Requested Specifications) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: 120+ JEE Main Mocks */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors shadow-sm">
                  <FileCheck2 className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  NTA CBT Simulation
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">120+ JEE Mains Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                All official shifts from 2019 to 2026 converted into timed computer-based mocks with real Section A & Section B numerical schemes and normalized percentiles.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs font-bold text-blue-700 flex items-center justify-between">
              <span>Full Shifts (2019-2026)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: 40+ JEE Advanced (19 Years PYQs) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-indigo-400 hover:-translate-y-1 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white transition-colors shadow-sm">
                  <Award className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                  19 Years Archive
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
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors shadow-sm">
                  <Zap className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Bonus Question Engine
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
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-cyan-50 text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white transition-colors shadow-sm">
                  <Layers className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                  15m / 30m / 60m Modes
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
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors shadow-sm">
                  <Languages className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  5 Indian Languages
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
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  Dual-Tier Diagnostics
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
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-rose-50 text-rose-700 group-hover:bg-rose-700 group-hover:text-white transition-colors shadow-sm">
                  <Calendar className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  Self-Adjusting
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
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors shadow-sm">
                  <Users className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Community & Support
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
                RankPilot's AI Doubt Solver understands and explains intricate IIT-JEE physics derivations, organic reaction mechanisms, and calculus tricks in 5 regional languages.
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
                <span>View Full Platform On RankPilot</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Traditional Coaching vs RankPilot AI Comparison Table */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
              Direct Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Traditional Coaching vs RankPilot AI
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Why thousands of JEE and BITSAT aspirants switch to RankPilot’s personalized digital ecosystem.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm text-left border-collapse overflow-hidden">
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
                  <td className="p-4 sm:p-5 text-rose-600">Static PDFs with basic text answer keys</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">120+ JEE Main, 40+ Advanced (19 yrs) & 10+ BITSAT timed CBT mocks</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Post-Test Analysis</td>
                  <td className="p-4 sm:p-5 text-rose-600">Basic marks tally & overall percentage</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">Individual diagnostic scorecards & consolidated 5-test performance report</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Doubt Resolution</td>
                  <td className="p-4 sm:p-5 text-rose-600">Long wait times for faculty counters</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">Instant 24/7 AI solver in Tamil, English, Hindi, Telugu, and Kannada with LaTeX proofs</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Study Materials</td>
                  <td className="p-4 sm:p-5 text-rose-600">Bulky 800-page modules causing backlog fatigue</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">High-yield Concept Notes (92 chapters), Formula Sheets & Mind Maps</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Adaptive Planning</td>
                  <td className="p-4 sm:p-5 text-rose-600">Rigid batch timetable, no backlog recovery</td>
                  <td className="p-4 sm:p-5 font-bold text-blue-800 bg-blue-50/40">Self-adjusting AI study timetable, national leaderboard & 24/7 academic helpdesk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Exam Matrix Coverage */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              Complete Exam Syllabus
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Exam Matrix Coverage
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Engineered exclusively for India's three most competitive engineering entrance exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-all">
              <span className="px-3 py-1 rounded bg-blue-100 text-blue-800 text-xs font-black">JEE Main</span>
              <h4 className="text-lg font-black text-slate-900">120+ PYQ Full Mocks</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete coverage of January and April session shift papers with Section A MCQs and Section B numericals under authentic NTA CBT screen timings.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-indigo-300 transition-all">
              <span className="px-3 py-1 rounded bg-indigo-100 text-indigo-800 text-xs font-black">JEE Advanced</span>
              <h4 className="text-lg font-black text-slate-900">40+ Full Mocks (19 Years)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                19-year archive (2007-2025) of Paper 1 and Paper 2 with partial marking, integer, paragraph, and matrix match schemes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-300 transition-all">
              <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-black">BITSAT</span>
              <h4 className="text-lg font-black text-slate-900">10+ Mocks + 12 Bonus Engine</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full 130-question speed and accuracy format including English Proficiency and Logical Reasoning with real-time bonus question unlocking.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

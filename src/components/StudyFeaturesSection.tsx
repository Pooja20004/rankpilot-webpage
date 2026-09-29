import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Network, 
  BarChart2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Download, 
  ExternalLink,
  ChevronRight,
  Brain,
  HelpCircle
} from 'lucide-react';
import { STUDY_FEATURES_LIST, LOVABLE_PROJECT_URL } from '../data/mockData';

export const StudyFeaturesSection: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const activeFeature = STUDY_FEATURES_LIST[activeFeatureIndex];

  // Doubt solver live demo state
  const [customQuestion, setCustomQuestion] = useState('');
  const [activeDoubtResponse, setActiveDoubtResponse] = useState<any>({
    topic: 'Physics • Rotational Mechanics',
    question: 'A solid cylinder of mass M and radius R rolls without slipping down an incline θ. Find acceleration of center of mass.',
    approach: 'Apply Newton’s 2nd Law for translation and rotational dynamics about CM.',
    steps: [
      'Translational equation along incline: M g sin θ - f = M a',
      'Rotational equation about CM: f * R = I α = (1/2 M R²) * (a / R) => f = 1/2 M a',
      'Substitute friction f into translational equation: M g sin θ - 1/2 M a = M a',
      'Result: (3/2) M a = M g sin θ  =>  a = (2/3) g sin θ'
    ],
    pitfall: 'Do not use f = μ N because friction is static and f ≤ μ N, not necessarily equal to maximum value.'
  });
  const [isSolving, setIsSolving] = useState(false);

  const handleAskDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsSolving(true);
    setTimeout(() => {
      setActiveDoubtResponse({
        topic: 'JEE Advanced PCM AI Resolution',
        question: customQuestion,
        approach: 'Applying first-principles formulation and JEE Advanced elimination shortcut.',
        steps: [
          'Deconstruct given boundary conditions and identify conserved physical quantities.',
          'Formulate the governing differential/algebraic relationship with appropriate signs.',
          'Solve for the required parameter and cross-verify with dimensional analysis.'
        ],
        pitfall: 'Watch out for boundary signs and standard approximation limits in multi-option questions.'
      });
      setIsSolving(false);
      setCustomQuestion('');
    }, 700);
  };

  return (
    <section id="features" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Complete Academic Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need To Score <br />
            <span className="text-indigo-700">99+ Percentile In One Platform</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            From IITian-crafted Concept Notes and Formula Sheets to Visual Mind Maps, AI Analysis, and 24/7 Doubt Resolution.
          </p>
        </div>

        {/* 5 Feature Selectors (Pill Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {STUDY_FEATURES_LIST.map((feat, idx) => {
            const isActive = activeFeatureIndex === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveFeatureIndex(idx)}
                className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-indigo-700 text-white shadow-lg shadow-indigo-700/25 scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {feat.id === 'concept-notes' && <BookOpen className="w-4 h-4" />}
                {feat.id === 'formula-sheet' && <FileText className="w-4 h-4" />}
                {feat.id === 'mindmap' && <Network className="w-4 h-4" />}
                {feat.id === 'ai-analysis' && <BarChart2 className="w-4 h-4" />}
                {feat.id === 'doubt-solver' && <Sparkles className="w-4 h-4" />}
                <span>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Feature Description */}
            <div className="lg:col-span-6 space-y-5">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-100 text-indigo-800">
                {activeFeature.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {activeFeature.tagline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeFeature.shortDesc}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                {activeFeature.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={LOVABLE_PROJECT_URL}
                  className="px-6 py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Access {activeFeature.title} Free</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Interactive Preview Panel */}
            <div className="lg:col-span-6">
              
              {/* 1. CONCEPT NOTES PREVIEW */}
              {activeFeature.id === 'concept-notes' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-900 uppercase">Available High-Yield Chapter Modules</span>
                    <span className="text-[11px] font-bold text-indigo-700">92 Chapters Total</span>
                  </div>
                  <div className="space-y-3">
                    {activeFeature.sampleData.chapters.map((chap: any, i: number) => (
                      <div key={i} className="p-3.5 rounded-lg border border-slate-200 hover:border-indigo-300 bg-slate-50/50 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-black text-slate-900">{chap.name}</span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">{chap.subject}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mb-2">{chap.pages} • {chap.readTime} read</div>
                        <div className="text-[11px] text-slate-700 font-medium">
                          Key Focus: {chap.keyTopics.join(' • ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. FORMULA SHEET PREVIEW */}
              {activeFeature.id === 'formula-sheet' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-900 uppercase">Quick Recall Cheat Sheets</span>
                    <span className="text-[11px] font-bold text-emerald-700">Printable & Mobile Friendly</span>
                  </div>
                  <div className="space-y-3">
                    {activeFeature.sampleData.sheets.map((sheet: any, i: number) => (
                      <div key={i} className="p-4 rounded-lg border border-slate-200 bg-slate-50/60">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black text-slate-900">{sheet.title}</span>
                          <span className="text-[10px] font-bold text-slate-500">{sheet.equationsCount} Equations</span>
                        </div>
                        <div className="p-2.5 bg-slate-900 text-blue-300 rounded font-mono text-[11px] font-bold">
                          {sheet.preview}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. MIND MAP PREVIEW */}
              {activeFeature.id === 'mindmap' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-900 uppercase">Interactive Concept Mindmap</span>
                    <span className="text-[11px] font-bold text-purple-700">Visual Memory Network</span>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 space-y-3">
                    <div className="text-xs font-black text-purple-950 flex items-center gap-1.5">
                      <Network className="w-4 h-4 text-purple-700" />
                      <span>{activeFeature.sampleData.featuredMap.title}</span>
                    </div>
                    <div className="space-y-2">
                      {activeFeature.sampleData.featuredMap.branches.map((branch: any, i: number) => (
                        <div key={i} className="p-3 bg-white rounded-lg border border-purple-100 text-xs">
                          <div className="font-extrabold text-slate-900 mb-1">🌿 {branch.name}</div>
                          <div className="text-[11px] text-slate-600 flex flex-wrap gap-1">
                            {branch.children.map((child: string, ci: number) => (
                              <span key={ci} className="bg-purple-100/70 text-purple-800 px-2 py-0.5 rounded text-[10px] font-semibold">
                                {child}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 4. AI ANALYSIS PREVIEW */}
              {activeFeature.id === 'ai-analysis' && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-900 uppercase">Diagnostic Performance Engine</span>
                    <span className="text-[11px] font-bold text-blue-700">Deep Diagnostic Analytics</span>
                  </div>
                  <div className="space-y-3">
                    {activeFeature.sampleData.metrics.map((m: any, i: number) => (
                      <div key={i} className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">{m.label}</span>
                        <span className="text-sm font-black text-blue-700">{m.value}</span>
                      </div>
                    ))}
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 font-semibold">
                      ✓ Distinguishes Calculation Rushes from Core Conceptual Blind Spots to maximize rank gain.
                    </div>
                  </div>
                </div>
              )}

              {/* 5. DOUBT SOLVER PREVIEW */}
              {activeFeature.id === 'doubt-solver' && (
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-black text-slate-900 uppercase">24/7 AI IITian Doubt Solver</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Online 24/7</span>
                  </div>

                  {/* Ask Question Bar */}
                  <form onSubmit={handleAskDoubt} className="flex gap-2">
                    <input
                      type="text"
                      value={customQuestion}
                      onChange={(e) => setCustomQuestion(e.target.value)}
                      placeholder="Type any JEE Physics, Chemistry, Math doubt..."
                      className="flex-1 text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-600 bg-white"
                    />
                    <button
                      type="submit"
                      disabled={isSolving}
                      className="px-4 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                    >
                      <span>{isSolving ? 'Solving...' : 'Solve'}</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </form>

                  {/* Active Doubt AI Resolution Card */}
                  <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-indigo-950">{activeDoubtResponse.topic}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">&lt; 1.2 sec latency</span>
                    </div>

                    <div className="font-semibold text-slate-800 bg-white p-2.5 rounded border border-indigo-100">
                      Q: {activeDoubtResponse.question}
                    </div>

                    <div className="space-y-1 text-slate-700">
                      <div className="font-black text-indigo-900 text-[11px] uppercase">Step-by-Step Derivation:</div>
                      {activeDoubtResponse.steps.map((st: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5 font-medium">
                          <span className="text-indigo-600 font-bold">{idx + 1}.</span>
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-indigo-200/60 text-[11px] text-rose-700 font-bold">
                      ⚠️ Common Exam Pitfall: {activeDoubtResponse.pitfall}
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Supporting Visual Banner: Students studying with Mindmaps & Analytics */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-white grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-64 md:h-full relative">
            <img 
              src="/student_test_prep.jpg" 
              alt="Indian Aspirants Reviewing Mock Test Analytics, Mindmaps and Formulas in IIT Library" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="md:col-span-7 p-6 sm:p-10 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Target: 99+ Percentile
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Study Smarter with Active Recall & Daily Diagnostic Revision
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Top rankers don’t read 1,000 pages repeatedly—they use structured mind maps to recall interconnected concepts and test their retention with targeted chapter PYQ sprints.
            </p>
            <div className="pt-2">
              <a
                href={LOVABLE_PROJECT_URL}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Unlock All Study Materials Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

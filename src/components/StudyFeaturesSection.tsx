import React, { useState, useRef } from 'react';
import { 
  BookOpen, 
  FileText, 
  Network, 
  BarChart2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Layers,
  Zap,
  HelpCircle
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface StudyResourceSlide {
  id: string;
  tabLabel: string;
  icon: any;
  title: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  highlights: string[];
  ctaText: string;
  badge: string;
}

const STUDY_SLIDES: StudyResourceSlide[] = [
  {
    id: 'concept-notes',
    tabLabel: 'Concept Notes',
    icon: BookOpen,
    badge: '92 Chapters Covered',
    title: 'Comprehensive IITian Concept Notes',
    tagline: 'Master foundational concepts with crystal-clear theory, hand-drawn diagrams, and solved examples.',
    heroImage: '/study_concept_notes.jpg',
    heroAlt: 'Indian student girl studying with concept notes and tablet',
    highlights: [
      'Authored by IITians covering all 92 chapters across Physics, Chemistry & Math',
      'Step-by-step rigorous derivations with highlighted exam-focused traps',
      'Includes authentic Wave Optics, Calculus & Thermodynamics visual handbooks'
    ],
    ctaText: 'Access All Concept Notes Free'
  },
  {
    id: 'formula-sheets',
    tabLabel: 'Formula Sheets',
    icon: FileText,
    badge: 'Quick-Recall Cheat Sheets',
    title: 'High-Yield Formula Handbooks',
    tagline: 'Rapid pre-exam formula sheets and dimensional cheat-sheets designed for instant active recall.',
    heroImage: '/study_formula_sheets.jpg',
    heroAlt: 'Indian girl studying formula cheat sheets for JEE',
    highlights: [
      'Every essential formula, constant, and boundary condition at your fingertips',
      'Quick memory mnemonics, standard substitutions, and high-frequency equations',
      'Clean printable PDF layouts and high-res mobile swipe cards'
    ],
    ctaText: 'Download Formula Sheets'
  },
  {
    id: 'mind-maps',
    tabLabel: 'Mind Maps',
    icon: Network,
    badge: 'Visual Memory Trees',
    title: 'Interactive Visual Mind Maps',
    tagline: 'Connect complex multi-chapter concepts visually to permanently boost long-term memory retention.',
    heroImage: '/study_mind_maps.jpg',
    heroAlt: 'Indian girl exploring concept mind maps on tablet',
    highlights: [
      'Intuitive branching trees breaking huge syllabus topics into 5-minute visual summaries',
      'Seamlessly interlinks Mechanics, Thermodynamics, Electromagnetism & Organic Chemistry',
      'Proven active recall technique favored by Top 100 AIR rankers'
    ],
    ctaText: 'Explore Interactive Mind Maps'
  },
  {
    id: 'ai-analysis',
    tabLabel: 'AI Analysis',
    icon: BarChart2,
    badge: 'Diagnostic Performance Engine',
    title: 'AI Diagnostic Test Analytics',
    tagline: 'Pinpoint exact conceptual blind spots and time drainers to maximize score improvement.',
    heroImage: '/study_ai_analysis.jpg',
    heroAlt: 'Indian student analyzing test analytics and score diagnostics',
    highlights: [
      'Differentiates silly calculation slips from deep conceptual gaps automatically',
      'Shift-wise normalization percentile benchmarking against national peers',
      'Consolidated 5-test trend analytics showing steady rank trajectory'
    ],
    ctaText: 'Run AI Diagnostic Mock'
  },
  {
    id: 'doubt-solver',
    tabLabel: 'Doubt Solver',
    icon: Sparkles,
    badge: 'Multilingual 24/7 AI Engine',
    title: '24/7 Multilingual AI Doubt Solver',
    tagline: 'Instant step-by-step mathematical proofs in Tamil, English, Hindi, Telugu, and Kannada.',
    heroImage: '/study_doubt_solver.jpg',
    heroAlt: 'Indian girl asking AI doubt solver on smartphone',
    highlights: [
      'Get instant derivations in seconds for Physics, Chemistry, and Mathematics doubts',
      'Full support for 5 languages: Tamil, English, Hindi, Telugu, and Kannada',
      'Highlights common exam pitfalls and first-principles shortcut tricks'
    ],
    ctaText: 'Ask a Doubt Now'
  }
];

export const StudyFeaturesSection: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Doubt solver interactive state
  const [customQuestion, setCustomQuestion] = useState('');
  const [activeDoubtResponse, setActiveDoubtResponse] = useState<any>({
    topic: 'Physics • Rotational Dynamics',
    question: 'A solid cylinder of mass M and radius R rolls without slipping down an incline θ. Find acceleration of center of mass.',
    steps: [
      'Translational equation along incline: M g sin θ - f = M a',
      'Rotational equation about CM: f · R = I α = (1/2 M R²) · (a / R) => f = 1/2 M a',
      'Combine equations: M g sin θ = (3/2) M a  =>  a = (2/3) g sin θ'
    ],
    pitfall: 'Static friction f ≤ μ N, so do not assume f = μ N when pure rolling holds.'
  });
  const [isSolving, setIsSolving] = useState(false);

  const scrollToSlide = (index: number) => {
    setActiveSlideIndex(index);
    if (sliderRef.current) {
      const container = sliderRef.current;
      const slides = container.children;
      if (slides[index]) {
        (slides[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const handleScrollPrev = () => {
    const nextIdx = activeSlideIndex > 0 ? activeSlideIndex - 1 : STUDY_SLIDES.length - 1;
    scrollToSlide(nextIdx);
  };

  const handleScrollNext = () => {
    const nextIdx = activeSlideIndex < STUDY_SLIDES.length - 1 ? activeSlideIndex + 1 : 0;
    scrollToSlide(nextIdx);
  };

  const handleAskDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsSolving(true);
    setTimeout(() => {
      setActiveDoubtResponse({
        topic: 'JEE Advanced PCM AI Resolution',
        question: customQuestion,
        steps: [
          'Deconstruct given boundary conditions and identify conserved physical quantities.',
          'Formulate the governing differential/algebraic relationship with correct signs.',
          'Solve for the required parameter and cross-verify with dimensional analysis.'
        ],
        pitfall: 'Watch out for boundary signs and standard approximation limits in multi-option questions.'
      });
      setIsSolving(false);
      setCustomQuestion('');
    }, 600);
  };

  return (
    <section id="features" className="py-20 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Complete Academic Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Study Resources for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800">
              99+ Percentile Preparation
            </span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Explore IITian-crafted Concept Notes, Formula Sheets, Visual Mind Maps, AI Analysis, and 24/7 Doubt Resolution — all in one smooth interactive interface.
          </p>
        </div>

        {/* Tab Controls Bar & Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Quick Jump Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 no-scrollbar">
            {STUDY_SLIDES.map((slide, idx) => {
              const Icon = slide.icon;
              const isActive = activeSlideIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => scrollToSlide(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-indigo-700 text-white shadow-md shadow-indigo-700/25 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleScrollPrev}
              aria-label="Previous slide"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleScrollNext}
              aria-label="Next slide"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Smooth Scroll Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar"
        >
          {STUDY_SLIDES.map((slide, idx) => {
            return (
              <div
                key={slide.id}
                className="w-full min-w-[92vw] sm:min-w-[85vw] lg:min-w-[1100px] max-w-6xl snap-center shrink-0 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all"
              >
                {/* Left Side: Professional AI Girl Studying Picture */}
                <div className="lg:col-span-5 relative bg-slate-100 min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden">
                  <img
                    src={slide.heroImage}
                    alt={slide.heroAlt}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-600/90 px-2.5 py-1 rounded-md">
                      {slide.badge}
                    </span>
                    <h4 className="text-lg font-black mt-1 leading-snug">{slide.title}</h4>
                  </div>
                </div>

                {/* Right Side: Clean Content, Bullet Highlights, CTA & Picturative Preview */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Badge */}
                    <div className="hidden lg:flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {slide.badge}
                      </span>
                    </div>

                    <h3 className="hidden lg:block text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
                      {slide.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                      {slide.tagline}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-3 mb-6">
                      {slide.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Slide-Specific Preview Visuals */}
                    {slide.id === 'concept-notes' && (
                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-xs font-black text-slate-800">
                          <span>Preview: Wave Optics & Calculus Handbooks</span>
                          <span className="text-[10px] font-bold text-indigo-700">Official Preview</span>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-slate-200 max-h-36 bg-white">
                          <img 
                            src="/concept_notes_preview.png" 
                            alt="Sample Concept Note Derivation" 
                            className="w-full object-cover object-top"
                          />
                        </div>
                      </div>
                    )}

                    {slide.id === 'formula-sheet' && (
                      <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                          <div className="font-black text-slate-900 mb-1">Physics: Mechanics</div>
                          <div className="font-mono text-[11px] font-bold text-indigo-700 bg-indigo-50 p-1.5 rounded">
                            v² = u² + 2as • I = ∑mr²
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                          <div className="font-black text-slate-900 mb-1">Math: Calculus</div>
                          <div className="font-mono text-[11px] font-bold text-indigo-700 bg-indigo-50 p-1.5 rounded">
                            d/dx[sin x] = cos x • ∫eˣ dx = eˣ
                          </div>
                        </div>
                      </div>
                    )}

                    {slide.id === 'mind-maps' && (
                      <div className="p-3.5 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-2">
                        <div className="text-xs font-black text-purple-950 flex items-center gap-1.5">
                          <Network className="w-4 h-4 text-purple-700" />
                          <span>Mindmap: Thermodynamics & Heat Engines</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {['Carnot Cycle', '1st Law: dQ = dU + dW', 'Adiabatic: PV^γ = C', 'Entropy Change: dS = dQ/T'].map((node, nIdx) => (
                            <span key={nIdx} className="bg-white border border-purple-200 text-purple-900 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-xs">
                              🌿 {node}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.id === 'ai-analysis' && (
                      <div className="grid grid-cols-3 gap-2 p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100 text-center">
                        <div className="bg-white p-2 rounded-xl border border-blue-200">
                          <div className="text-[10px] font-bold text-slate-500">Predicted Percentile</div>
                          <div className="text-sm font-black text-blue-700">99.4 %ile</div>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-blue-200">
                          <div className="text-[10px] font-bold text-slate-500">Accuracy Rate</div>
                          <div className="text-sm font-black text-emerald-600">88.5%</div>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-blue-200">
                          <div className="text-[10px] font-bold text-slate-500">Speed / Question</div>
                          <div className="text-sm font-black text-indigo-700">1.4 min</div>
                        </div>
                      </div>
                    )}

                    {slide.id === 'doubt-solver' && (
                      <div className="p-3 bg-indigo-50/70 rounded-2xl border border-indigo-200 space-y-2.5">
                        <form onSubmit={handleAskDoubt} className="flex gap-2">
                          <input
                            type="text"
                            value={customQuestion}
                            onChange={(e) => setCustomQuestion(e.target.value)}
                            placeholder="Type any JEE doubt in English, Tamil, Hindi, etc..."
                            className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-indigo-600 bg-white"
                          />
                          <button
                            type="submit"
                            disabled={isSolving}
                            className="px-3.5 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-xs font-bold flex items-center gap-1 shrink-0"
                          >
                            <span>{isSolving ? 'Solving...' : 'Solve'}</span>
                            <Send className="w-3 h-3" />
                          </button>
                        </form>
                        <div className="bg-white p-2.5 rounded-xl border border-indigo-100 text-[11px] text-slate-700 space-y-1">
                          <div className="font-extrabold text-indigo-900">{activeDoubtResponse.topic}</div>
                          <div className="text-slate-600 line-clamp-1">{activeDoubtResponse.question}</div>
                          <div className="text-emerald-700 font-bold text-[10px]">✓ Instant resolution with step-by-step derivation</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Slide Action CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={LOVABLE_PROJECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-extrabold text-xs sm:text-sm text-center shadow-md shadow-indigo-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <span className="text-xs text-slate-400 font-medium">Included with all free and premium plans</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {STUDY_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlideIndex === idx 
                  ? 'w-8 bg-indigo-700' 
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

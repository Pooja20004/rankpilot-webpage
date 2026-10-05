import React, { useState, useRef } from 'react';
import { 
  FileCheck2, 
  CheckCircle2, 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Flame, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  BookOpen,
  Brain,
  Languages
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface TestSeriesSlide {
  id: string;
  exam: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  imageAlt: string;
  duration: string;
  totalMocks: string;
  questionMatrix: { label: string; count: string; color: string }[];
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

const TEST_SERIES_SLIDES: TestSeriesSlide[] = [
  {
    id: 'jee-main',
    exam: 'JEE Main',
    badge: '120+ PYQs As Mocks',
    title: 'JEE Main Master Test Series',
    tagline: 'Authentic 2021 to 2026 NTA shift papers converted into computer-based practice mocks with real Section A & Section B numerical format.',
    image: '/test_series_jee_main.jpg',
    imageAlt: 'Indian students practicing NTA JEE Main computer-based mock test',
    duration: '3 Hours per Mock',
    totalMocks: '120+ Shift Mocks',
    isPopular: true,
    questionMatrix: [
      { label: 'Physics', count: '25 Questions (20 MCQ + 5 Num)', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      { label: 'Chemistry', count: '25 Questions (20 MCQ + 5 Num)', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { label: 'Mathematics', count: '25 Questions (20 MCQ + 5 Num)', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' }
    ],
    features: [
      'Authentic NTA CBT interface with exact question palette and countdown timer',
      'Detailed text solutions for all physics, chemistry and math questions',
      'Section B integer questions with negative marking rules matching latest NTA standards',
      'Shift-wise normalization engine calculating your actual expected All India Rank'
    ],
    ctaText: 'Attempt JEE Main Mock Now'
  },
  {
    id: 'jee-advanced',
    exam: 'JEE Advanced',
    badge: '40+ Mocks (19 Years PYQs)',
    title: 'JEE Advanced IIT Master Series',
    tagline: '19 continuous years of IIT JEE Advanced papers (2007–2025 Paper 1 & Paper 2) testing multi-concept analytical depth.',
    image: '/test_series_jee_advanced.jpg',
    imageAlt: 'Indian student solving advanced IIT JEE physics and math problems',
    duration: '6 Hours (Paper 1 + Paper 2)',
    totalMocks: '40+ Advanced Papers',
    questionMatrix: [
      { label: 'Multi-Correct', count: '+4 / -2 with Partial Marking', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { label: 'Numerical / Integer', count: 'Decimal & Non-negative ints', color: 'bg-purple-50 text-purple-700 border-purple-200' },
      { label: 'Matrix & Comprehension', count: 'Multi-concept paragraphs', color: 'bg-blue-50 text-blue-700 border-blue-200' }
    ],
    features: [
      'Comprehensive 19-year archive (2007 to 2025) of authentic Paper 1 and Paper 2',
      'Strict multi-correct partial marking simulator mimicking the real IIT Joint Admission Board',
      'Detailed text solutions breaking down first-principles physics and calculus',
      'IIT Bombay, IIT Delhi & top IIT cut-off benchmarking based on past closing ranks'
    ],
    ctaText: 'Attempt JEE Advanced Paper'
  },
  {
    id: 'bitsat',
    exam: 'BITSAT',
    badge: '10+ BITSAT Full Mocks',
    title: 'BITSAT Speed & Accuracy Test Series',
    tagline: 'High-speed 130-question test simulation engineered with dedicated Logical Reasoning, English Proficiency, and 12 Bonus Questions.',
    image: '/test_series_bitsat.jpg',
    imageAlt: 'Indian aspirant practicing BITSAT speed test with Logical Reasoning and English sections',
    duration: '3 Hours • 130 Questions',
    totalMocks: '10+ Full Mocks',
    questionMatrix: [
      { label: 'Logical Reasoning', count: '20 Questions (Speed Drills)', color: 'bg-amber-50 text-amber-800 border-amber-200' },
      { label: 'English Proficiency', count: '10 Questions (Grammar & Vocab)', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { label: 'Physics & Chem', count: '60 Questions (30 Physics + 30 Chem)', color: 'bg-blue-50 text-blue-700 border-blue-200' },
      { label: 'Mathematics', count: '40 Questions (Speed Calculus & Algebra)', color: 'bg-violet-50 text-violet-700 border-violet-200' }
    ],
    features: [
      'Dedicated Logical Reasoning modules: series completion, analogies, and spatial syllogisms',
      'English Proficiency coverage: grammar rules, high-frequency vocabulary & comprehension',
      'Official 12 Bonus Questions Engine: unlocks when all 130 questions are submitted before 180 min',
      'Detailed text solutions for all questions with speed-solving shortcut tricks'
    ],
    ctaText: 'Attempt BITSAT Mock Now'
  }
];

export const TestSeriesSection: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const handlePrev = () => {
    const nextIdx = activeSlideIndex > 0 ? activeSlideIndex - 1 : TEST_SERIES_SLIDES.length - 1;
    scrollToSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeSlideIndex < TEST_SERIES_SLIDES.length - 1 ? activeSlideIndex + 1 : 0;
    scrollToSlide(nextIdx);
  };

  return (
    <section id="test-series" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-blue-600" />
            <span>National Test Series</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            India’s Most Advanced AI-Powered Test Series for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
              JEE Mains, JEE Advanced & BITSAT
            </span>
          </h2>

          <div className="pt-1">
            <span className="inline-block bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-extrabold text-xs sm:text-sm px-5 py-1.5 rounded-full shadow-md">
              ⚡ All These Features in One Single Platform
            </span>
          </div>

          <p className="text-base text-slate-600 font-medium">
            Practice in the exact NTA computer-based exam environment with authentic previous years' questions, detailed text solutions for all physics, chemistry and math questions, and predictive All India Ranks.
          </p>
        </div>

        {/* Side-Scroll Controls & Tabs Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Quick Jump Exam Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0 no-scrollbar">
            {TEST_SERIES_SLIDES.map((slide, idx) => {
              const isActive = activeSlideIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => scrollToSlide(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25 scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>{slide.exam}</span>
                  {slide.isPopular && (
                    <span className="text-[10px] bg-amber-400 text-amber-950 font-black px-1.5 py-0.2 rounded">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous test series slide"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next test series slide"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Innovative Horizontal Side-Scroll Slider */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar"
        >
          {TEST_SERIES_SLIDES.map((slide) => {
            return (
              <div
                key={slide.id}
                className="w-full min-w-[92vw] sm:min-w-[85vw] lg:min-w-[1100px] max-w-6xl snap-center shrink-0 bg-white rounded-3xl border-2 border-slate-200 hover:border-blue-500 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300"
              >
                {/* Left Side: Picturative Photo */}
                <div className="lg:col-span-5 relative bg-slate-100 min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                  
                  {/* Floating Badges on Image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-md">
                    <span className="text-xs font-black text-blue-700 uppercase">{slide.exam}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-blue-600/90 px-2.5 py-1 rounded-md">
                      {slide.badge}
                    </span>
                    <h4 className="text-lg font-black mt-1 leading-snug">{slide.title}</h4>
                  </div>
                </div>

                {/* Right Side: Deep Details, Matrices, BITSAT Logic/English, and CTA */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Header Pill & Title */}
                    <div className="hidden lg:flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                        {slide.badge}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {slide.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-indigo-600" />
                          {slide.totalMocks}
                        </span>
                      </div>
                    </div>

                    <h3 className="hidden lg:block text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
                      {slide.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                      {slide.tagline}
                    </p>

                    {/* Question Matrix Breakdown Cards */}
                    <div className="mb-5">
                      <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                        Exam Question Structure:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {slide.questionMatrix.map((mat, mIdx) => (
                          <div 
                            key={mIdx} 
                            className={`p-2.5 rounded-xl border text-xs ${mat.color}`}
                          >
                            <div className="font-black">{mat.label}</div>
                            <div className="text-[11px] font-medium opacity-90 mt-0.5">{mat.count}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                        Key Features & Solutions:
                      </div>
                      {slide.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Slide Action CTAs */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={LOVABLE_PROJECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm text-center shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a
                      href={LOVABLE_PROJECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-xs sm:text-sm text-center border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Chapter Tests</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 mb-14">
          {TEST_SERIES_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to test series slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlideIndex === idx 
                  ? 'w-8 bg-blue-700' 
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Pricing & Subscription Options (Two Boxes with Exact Requested Prices & Redirects) */}
        <div id="pricing" className="pt-12 border-t border-slate-200">
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
                    <span>National Percentile Benchmark, Leaderboard & Priority Helpdesk</span>
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

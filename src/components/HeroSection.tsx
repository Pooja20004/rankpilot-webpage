import React from 'react';
import { 
  Rocket, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Star, 
  FileCheck2, 
  Users, 
  GraduationCap,
  ExternalLink,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface HeroSectionProps {
  onExploreTestSeries?: () => void;
  onExploreReport?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreTestSeries, 
  onExploreReport 
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50/60 via-white to-slate-50/50 overflow-hidden">
      
      {/* Background Accent Gradients & Geometric Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Notification Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-sm text-blue-800 text-xs sm:text-sm font-bold tracking-tight">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Admissions & Test Series Open for JEE Main 2026/2027, Advanced & BITSAT</span>
          </div>
        </div>

        {/* Hero Grid: Left Content (Slogans, Keywords, CTAs) + Right Visual (IIT Campus Students) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Slogans & Keywords */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Primary Slogan 1: "Your Success Starts Here" */}
            <div className="inline-block">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100/80 px-3.5 py-1 rounded-md border border-blue-200/80">
                ✨ Your Success Starts Here
              </span>
            </div>

            {/* Primary Slogan 2 & SEO Keywords */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              India’s Number One Trustable Platform for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800">
                JEE Mains, JEE Advanced & BITSAT
              </span>
            </h1>

            {/* Keyword Rich Sub-description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Prepare with India’s most authentic <strong className="text-slate-900 font-bold">NTA CBT Test Series</strong>. 
              Master <span className="font-semibold text-blue-700">120+ JEE Mains PYQ Mocks</span>, <span className="font-semibold text-indigo-700">40+ JEE Advanced PYQ Tests (last 19 years)</span>, and <span className="font-semibold text-emerald-700">6+ BITSAT Mocks</span> with predictive AIR analytics and instant 24/7 AI doubt resolution.
            </p>

            {/* Two Action Buttons Directly Below the Slogan (Both Redirecting to the Project Link) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Button 1: Sign Up for Free */}
              <a 
                href={LOVABLE_PROJECT_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-base shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Sign Up for Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Button 2: Sign In */}
              <a 
                href={LOVABLE_PROJECT_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 font-extrabold text-base border-2 border-slate-300 hover:border-blue-600 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Sign In</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Fast Navigation Quick Links */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
              <span>Quick Access:</span>
              <a href="#test-series" className="text-blue-700 hover:underline flex items-center gap-1">
                <FileCheck2 className="w-3.5 h-3.5" /> 120+ Mocks Included
              </a>
              <span className="text-slate-300">•</span>
              <a href="#sample-report" className="text-emerald-700 hover:underline flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> Sample Quizrr Report
              </a>
              <span className="text-slate-300">•</span>
              <a href="#features" className="text-indigo-700 hover:underline flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Concept Notes & Formulas
              </a>
            </div>

            {/* Trust Metric Badges */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">120+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">JEE Main Shift Mocks</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-blue-700">19 Yrs</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">JEE Advanced PYQs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">99.8%</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">NTA Simulation Accuracy</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Students beside IIT Campus */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Students beside IIT Campus */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-slate-300/60 bg-white">
                <img 
                  src="/iit_students_hero.jpg" 
                  alt="Proud Indian Engineering Students beside IIT Delhi Campus" 
                  className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Overlay Badge: IIT Dream Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-md flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-black text-slate-900">IIT Bombay & Delhi Aspirants</span>
                </div>

                {/* Floating Bottom Card: Real Student Success */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-extrabold text-sm">
                      99+
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">1,400+ Students with 99+ %ile</div>
                      <div className="text-[11px] text-slate-500 font-medium">RankPilot Test Series 2024-2025</div>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {'★★★★★'}
                  </div>
                </div>
              </div>

              {/* Floating Decorative Badges around image */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-blue-700 text-white p-3 rounded-xl shadow-xl flex-col items-center justify-center border-2 border-white">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">All In One</span>
                <span className="text-sm font-black">JEE & BITSAT</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-xl border border-slate-200 items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">100% NTA Pattern</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Latest Numerical Scheme</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Rocket, 
  ExternalLink, 
  Heart, 
  ShieldCheck,
  Award,
  BookOpen, 
  ArrowUp,
  FileCheck2,
  BarChart3
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Rocket className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none">
                  Rank<span className="text-blue-500">Pilot</span>
                </span>
                <span className="mt-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                  AI-powered JEE Mastery
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              India’s number one trustable platform for JEE Mains, JEE Advanced & BITSAT preparation. Providing 120+ authentic shift mocks, 40+ Advanced papers (19 years), 10+ BITSAT mocks, individual & 5-test consolidated reports, and 24/7 multilingual AI doubt clarity.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={LOVABLE_PROJECT_URL}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
              >
                <span>Sign Up for Free</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={LOVABLE_PROJECT_URL}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
              >
                <span>Sign In</span>
              </a>
            </div>
          </div>

          {/* Test Series Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Test Series</h4>
            <ul className="space-y-2">
              <li><a href="#test-series" className="hover:text-white transition-colors">120+ JEE Main PYQ Mocks</a></li>
              <li><a href="#test-series" className="hover:text-white transition-colors">40+ JEE Advanced (19 Years)</a></li>
              <li><a href="#test-series" className="hover:text-white transition-colors">10+ BITSAT PYQ Mocks</a></li>
              <li><a href="#test-series" className="hover:text-white transition-colors">NTA CBT Screen Simulator</a></li>
              <li><a href={LOVABLE_PROJECT_URL} className="hover:text-white transition-colors">All-in-One Test Pass</a></li>
            </ul>
          </div>

          {/* Features Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Study Resources</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Concept Notes (92 Chapters)</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Formula Sheets (PCM)</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Visual Mind Maps</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">AI Performance Analysis</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Multilingual AI Doubt Solver</a></li>
            </ul>
          </div>

          {/* Diagnostics Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Analysis & Tools</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">What's Included in App</a></li>
              <li><a href="#sample-report" className="hover:text-white transition-colors">Sample Mock Test Report</a></li>
              <li><a href="#predictor" className="hover:text-white transition-colors">Live Marks vs Percentile</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Toppers Wall of Fame</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-xs">
            © {new Date().getFullYear()} RankPilot AI. Built for JEE Main, JEE Advanced & BITSAT aspirants.
          </div>

          <div className="flex items-center gap-6">
            <a href={LOVABLE_PROJECT_URL} className="text-slate-400 hover:text-white">Privacy Policy</a>
            <a href={LOVABLE_PROJECT_URL} className="text-slate-400 hover:text-white">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Sparkles, 
  FileCheck2, 
  BarChart3, 
  BookOpen, 
  Award, 
  Calculator, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface NavbarProps {
  onSelectTab?: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testSeriesDropdown, setTestSeriesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTestSeriesDropdown(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* MathonGo-style Top Announcement Strip (HelloBar) */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs sm:text-sm py-2 px-4 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-rose-500 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded tracking-wide animate-pulse">
              Live Now
            </span>
            <span className="font-semibold truncate">
              JEE Main 2026/2027 Test Series & 120+ Authentic Shift Mocks are Active!
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:inline text-blue-100 text-xs font-medium">
              ⭐ Rated 4.9/5 by 150,000+ JEE & BITSAT Aspirants
            </span>
            <a 
              href={LOVABLE_PROJECT_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-3 py-1 rounded text-xs transition-colors flex items-center gap-1 shadow-sm"
            >
              <span>Enroll Free</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bright White Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' 
            : 'bg-white border-b border-slate-100 py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-800 transition-colors">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black tracking-tight text-slate-900">
                    Rank<span className="text-blue-700">Pilot</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-blue-100 text-blue-700 border border-blue-200">
                    AI
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 tracking-tight">
                  JEE Main • Advanced • BITSAT
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links (Replacing old features tab with Test Series, Sample Report, Features) */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Test Series Tab */}
            <div className="relative">
              <button 
                onClick={() => scrollToSection('test-series')}
                className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <span>Test Series</span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full border border-amber-200">
                  120+ Mocks
                </span>
              </button>
            </div>

            {/* Sample Report Tab (Quizrr style) */}
            <button 
              onClick={() => scrollToSection('sample-report')}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Sample Report</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full border border-emerald-200">
                Demo
              </span>
            </button>

            {/* Features Tab (Concept notes, formula sheet, mindmap, AI analysis, doubt solver) */}
            <button 
              onClick={() => scrollToSection('features')}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Features & Resources</span>
            </button>

            {/* Percentile Predictor */}
            <button 
              onClick={() => scrollToSection('predictor')}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>AIR Predictor</span>
            </button>

            {/* Results & Reviews */}
            <button 
              onClick={() => scrollToSection('reviews')}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Toppers & Results</span>
            </button>
          </div>

          {/* Right Action CTAs: Sign In & Sign Up for Free (Redirecting to Lovable App) */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={LOVABLE_PROJECT_URL}
              className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
            >
              Sign In
            </a>
            
            <a 
              href={LOVABLE_PROJECT_URL}
              className="px-5 py-2.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>Sign Up for Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a 
              href={LOVABLE_PROJECT_URL}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-700 rounded-md"
            >
              Sign Up
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-700 rounded-md hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <button 
              onClick={() => scrollToSection('test-series')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-blue-700" />
                <span>Test Series (120+ Mocks)</span>
              </div>
              <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">
                JEE & BITSAT
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('sample-report')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Sample Report Demo (Quizrr Style)</span>
            </button>

            <button 
              onClick={() => scrollToSection('features')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Features: Concept Notes, Formulas, Doubts</span>
            </button>

            <button 
              onClick={() => scrollToSection('predictor')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>Percentile & AIR Predictor</span>
            </button>

            <button 
              onClick={() => scrollToSection('reviews')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Toppers & Results</span>
            </button>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a 
                href={LOVABLE_PROJECT_URL}
                className="w-full text-center py-2.5 text-sm font-bold text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50"
              >
                Sign In
              </a>
              <a 
                href={LOVABLE_PROJECT_URL}
                className="w-full text-center py-2.5 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Sign Up for Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Sparkles, 
  FileCheck2, 
  BarChart3, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Menu, 
  X,
  ExternalLink,
  ChevronDown,
  Info,
  GraduationCap,
  Target
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface NavbarProps {
  onSelectTab?: (tabId: string) => void;
  onOpenExamResources?: () => void;
  onGoHome?: () => void;
  isResourcesPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onSelectTab,
  onOpenExamResources,
  onGoHome,
  isResourcesPage = false
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Announcement Strip */}
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
              ⭐ Rated 4.9/5 by JEE & BITSAT Aspirants
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

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-md' 
            : 'bg-white border-b border-slate-100 py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Requested Green Tag */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                } else {
                  scrollToSection('hero'); 
                }
              }}
              className="flex flex-col items-start text-left focus:outline-none group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img 
                  src="/jee_ranker_logo_cropped.png" 
                  alt="JEE Ranker" 
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              {/* User Requested: "Ai- powered jee mastery" smaller */}
              <div className="mt-0.5 flex items-center">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 tracking-wider uppercase shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                  ai powered jee mastery
                </span>
              </div>
            </a>
          </div>

          {/* Center Navigation Links - Clean without colored badges */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* About App Tab */}
            <button 
              onClick={() => {
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                  setTimeout(() => scrollToSection('about'), 100);
                } else {
                  scrollToSection('about');
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Info className="w-4 h-4 text-purple-600" />
              <span>About Platform</span>
            </button>

            {/* Syllabus & Strategies Tab */}
            <button 
              onClick={() => {
                if (onOpenExamResources) {
                  onOpenExamResources();
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-blue-700 bg-blue-50/80 hover:bg-blue-100 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Target className="w-4 h-4 text-blue-600" />
              <span>Syllabus & Strategies</span>
              <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full bg-blue-600 text-white">2027</span>
            </button>

            {/* Test Series Tab */}
            <button 
              onClick={() => {
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                  setTimeout(() => scrollToSection('test-series'), 100);
                } else {
                  scrollToSection('test-series');
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 text-blue-600" />
              <span>Test Series</span>
            </button>

            {/* Sample Report Tab */}
            <button 
              onClick={() => {
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                  setTimeout(() => scrollToSection('sample-report'), 100);
                } else {
                  scrollToSection('sample-report');
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Sample Report</span>
            </button>

            {/* Features Tab */}
            <button 
              onClick={() => {
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                  setTimeout(() => scrollToSection('features'), 100);
                } else {
                  scrollToSection('features');
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Study Resources</span>
            </button>

            {/* JEE Ranker Learn Tab */}
            <button 
              onClick={() => {
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                  setTimeout(() => scrollToSection('learn'), 100);
                } else {
                  scrollToSection('learn');
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>Learn</span>
            </button>

            {/* Reviews Tab */}
            <button 
              onClick={() => {
                if (isResourcesPage && onGoHome) {
                  onGoHome();
                  setTimeout(() => scrollToSection('reviews'), 100);
                } else {
                  scrollToSection('reviews');
                }
              }}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Reviews</span>
            </button>
          </div>

          {/* Right Action CTAs: Sign In & Sign Up for Free */}
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
              <span>Sign Up for Free Trial</span>
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
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Info className="w-4 h-4 text-purple-600" />
              <span>About Platform & App Features</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenExamResources) {
                  onOpenExamResources();
                }
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-blue-800 bg-blue-50/80 hover:bg-blue-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-700" />
                <span>Syllabus & Exam Strategies</span>
              </div>
              <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-600 text-white">2027</span>
            </button>

            <button 
              onClick={() => scrollToSection('test-series')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4 text-blue-700" />
              <span>Test Series (120+ Mocks)</span>
            </button>

            <button 
              onClick={() => scrollToSection('sample-report')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>JEE Ranker Mock Test Report</span>
            </button>

            <button 
              onClick={() => scrollToSection('features')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Concept Notes, Formulas & Multilingual Doubts</span>
            </button>

            <button 
              onClick={() => scrollToSection('learn')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>JEE Ranker Learn (11th & 12th)</span>
            </button>

            <button 
              onClick={() => scrollToSection('reviews')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Reviews</span>
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
                Sign Up for Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

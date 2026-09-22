import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Sparkles, 
  PlayCircle, 
  MessageSquareQuote, 
  Compass, 
  ExternalLink, 
  Menu, 
  X, 
  Award,
  ChevronRight
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface NavbarProps {
  onOpenLaunchModal: () => void;
  onSelectTab: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLaunchModal, onSelectTab }) => {
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
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-sky-500/20 py-3 shadow-2xl shadow-sky-950/50' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-105 group-hover:shadow-sky-400/50 transition-all duration-300">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  Rank<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Pilot</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> AI 2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">JEE Main & Advanced AI Co-Pilot</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-sky-400" />
              About
            </button>

            <button 
              onClick={() => scrollToSection('tabs-hub')}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Feature Tabs
            </button>

            <button 
              onClick={() => scrollToSection('ai-video')}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all flex items-center gap-1.5"
            >
              <PlayCircle className="w-4 h-4 text-purple-400" />
              AI Video Guide
            </button>

            <button 
              onClick={() => scrollToSection('reviews')}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all flex items-center gap-1.5"
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-400" />
              Reviews
            </button>

            <button 
              onClick={() => scrollToSection('predictor')}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              AIR Predictor
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onOpenLaunchModal}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 rounded-xl border border-slate-700/60 transition-all duration-200"
            >
              VIP Demo Access
            </button>

            <a 
              href={LOVABLE_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Launch App</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-30 blur transition duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-slate-900 flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2.5"><Compass className="w-4 h-4 text-sky-400" /> About RankPilot</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>

            <button 
              onClick={() => scrollToSection('tabs-hub')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-slate-900 flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2.5"><Sparkles className="w-4 h-4 text-cyan-400" /> All Feature Tabs</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>

            <button 
              onClick={() => scrollToSection('ai-video')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-slate-900 flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2.5"><PlayCircle className="w-4 h-4 text-purple-400" /> Interactive AI Video</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>

            <button 
              onClick={() => scrollToSection('reviews')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-slate-900 flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2.5"><MessageSquareQuote className="w-4 h-4 text-amber-400" /> Student Reviews</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>

            <button 
              onClick={() => scrollToSection('predictor')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:bg-slate-900 flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2.5"><Award className="w-4 h-4 text-emerald-400" /> Percentile & AIR Predictor</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a 
                href={LOVABLE_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
              >
                <span>Launch App (Lovable Project)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

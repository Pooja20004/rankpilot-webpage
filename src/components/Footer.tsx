import React from 'react';
import { 
  Rocket, 
  Sparkles, 
  ExternalLink, 
  Heart, 
  ShieldCheck,
  Award,
  BookOpen,
  ArrowUp
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-xs text-slate-400">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white font-display">
                Rank<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Pilot</span>
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              The revolutionary AI Co-Pilot engineered for JEE Main & Advanced aspirants. Normalizing 140+ NTA shifts, decoding error taxonomy, and accelerating percentile growth.
            </p>
            <div className="pt-2">
              <a
                href={LOVABLE_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-md shadow-sky-500/20"
              >
                <span>Live Project on Lovable AI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About RankPilot</a></li>
              <li><a href="#tabs-hub" className="hover:text-sky-400 transition-colors">7 Feature Tabs</a></li>
              <li><a href="#ai-video" className="hover:text-sky-400 transition-colors">Interactive AI Video</a></li>
              <li><a href="#reviews" className="hover:text-sky-400 transition-colors">Student Reviews</a></li>
              <li><a href="#predictor" className="hover:text-sky-400 transition-colors">Percentile & AIR Predictor</a></li>
            </ul>
          </div>

          {/* Feature Tabs Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Core Features</h4>
            <ul className="space-y-2">
              <li><a href="#tabs-hub" className="hover:text-sky-400 transition-colors">JEE PYQ Mocks Engine</a></li>
              <li><a href="#tabs-hub" className="hover:text-sky-400 transition-colors">Performance Decoded</a></li>
              <li><a href="#tabs-hub" className="hover:text-sky-400 transition-colors">Zero-to-Hero AI Coach</a></li>
              <li><a href="#tabs-hub" className="hover:text-sky-400 transition-colors">Dynamic Study Planner</a></li>
              <li><a href="#tabs-hub" className="hover:text-sky-400 transition-colors">24/7 AI Doubt Solver</a></li>
            </ul>
          </div>

          {/* Direct App Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Lovable App</h4>
            <p className="text-[11px] text-slate-300">
              Access the live hosted project directly on Lovable AI:
            </p>
            <a
              href={LOVABLE_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-mono text-[11px] hover:underline break-all block"
            >
              lovable.dev/projects/...
            </a>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" /> 2026 NTA Syllabus Synced
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            © 2026 RankPilot AI. Dedicated to ambitious JEE Main & Advanced Aspirants across India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] border border-slate-800 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

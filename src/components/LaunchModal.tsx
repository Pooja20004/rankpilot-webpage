import React, { useState } from 'react';
import { 
  X, 
  Rocket, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface LaunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaunchModal: React.FC<LaunchModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(LOVABLE_PROJECT_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-sky-500/30 shadow-2xl shadow-sky-950/80 p-6 sm:p-8 space-y-6 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-[60px] rounded-full pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Launch RankPilot Application</h3>
              <p className="text-[11px] text-slate-400">Direct connection to the live Lovable AI project</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 relative z-10">
          <p className="text-xs text-slate-300 leading-relaxed">
            The full RankPilot web application is live and hosted on Lovable AI. Click below to launch the authentic NTA mock test environment, 24/7 AI coach, deep analytics radar, and dynamic study planner.
          </p>

          {/* Copyable Project Link */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-400">Direct Project URL:</span>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <input
                type="text"
                readOnly
                value={LOVABLE_PROJECT_URL}
                className="w-full bg-transparent text-xs font-mono text-cyan-300 outline-none select-all"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1 shrink-0 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Features list */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Access to 140+ Shifts (JEE Main 2019-2026)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero-to-Hero AI Coach Daily Sprints</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant AI Doubt Solver with Step-by-Step Proofs</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 relative z-10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all"
          >
            Stay on Showcase
          </button>
          <a
            href={LOVABLE_PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <Rocket className="w-4 h-4 text-cyan-200" />
            <span>Launch Live App in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};

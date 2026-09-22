import React, { useState } from 'react';
import { 
  Rocket, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  ShieldCheck,
  Award,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const SignupSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [targetYear, setTargetYear] = useState('JEE Main 2026');
  const [dreamCollege, setDreamCollege] = useState('IIT Bombay - Computer Science');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsRegistered(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="signup" className="py-24 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Top Decorative Banner */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct Access Portal
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Launch RankPilot & Secure Your Top Rank
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get instant, direct access to the live Lovable application. Connect your profile, take authentic PYQ mocks, and activate your personal AI coach.
            </p>
          </div>

          {!isRegistered ? (
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Direct Lovable App Box */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-950/40 via-blue-950/30 to-indigo-950/40 border border-sky-500/40 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 text-[10px] font-bold uppercase tracking-wider font-mono">
                      Live App URL
                    </span>
                    <span className="text-emerald-400 text-xs font-mono flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Online & Ready
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white font-display">
                    Direct One-Click App Access
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Access the complete full-stack RankPilot application deployed directly on Lovable AI with real-time test evaluation and AI coach synchronization.
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-cyan-300 break-all select-all">
                    {LOVABLE_PROJECT_URL}
                  </div>
                </div>

                <a
                  href={LOVABLE_PROJECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-sm shadow-xl shadow-sky-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                >
                  <Rocket className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
                  <span>Launch Live Lovable Project Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Right Column: Instant Student Registration */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-5">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Generate Instant VIP Aspirant Pass</span>
                  </h4>
                  <p className="text-xs text-slate-400">Unlock your AI roadmap and sync directly with the app.</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aryan@aspirant.io"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Target Exam</label>
                      <select
                        value={targetYear}
                        onChange={(e) => setTargetYear(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                      >
                        <option value="JEE Main 2026">JEE Main 2026</option>
                        <option value="JEE 2025 Dropper">JEE 2025 Dropper</option>
                        <option value="JEE Advanced 2026">JEE Advanced 2026</option>
                        <option value="JEE 2027 (Class 11)">JEE 2027 (Class 11)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-300 font-semibold block mb-1">Dream College</label>
                      <input
                        type="text"
                        value={dreamCollege}
                        onChange={(e) => setDreamCollege(e.target.value)}
                        placeholder="e.g. IIT Bombay CSE"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Register & Access Full App</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          ) : (
            /* Registration Success Card */
            <div className="mt-10 p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/40 text-center space-y-6 animate-fade-in">
              <div className="inline-flex p-3.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white font-display">
                  Welcome to RankPilot VIP, {fullName}!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your personalized AI preparation pass for <strong className="text-cyan-300">{targetYear}</strong> targeting <strong className="text-emerald-300">{dreamCollege}</strong> is ready.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Student ID:</span>
                  <span className="font-mono text-cyan-300 font-bold">RP-2026-VIP-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Access Level:</span>
                  <span className="text-emerald-400 font-bold">Full 140+ Mocks & AI Coach</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Direct Lovable Link:</span>
                  <span className="text-sky-400 font-semibold truncate max-w-[200px]">{LOVABLE_PROJECT_URL}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={LOVABLE_PROJECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-black text-sm shadow-xl shadow-sky-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5 text-cyan-200" />
                  <span>Launch Lovable App Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsRegistered(false)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900 text-slate-400 hover:text-white text-xs font-semibold"
                >
                  Register Another Student
                </button>
              </div>
            </div>
          )}

          {/* Bottom Security & Trust Badge */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Free Initial Diagnostic Simulation
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-sky-400" /> Instant Cloud Sync with Lovable AI Project
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

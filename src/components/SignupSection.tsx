import React, { useState } from 'react';
import { 
  Rocket, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Award,
  Zap,
  Lock,
  Mail,
  Phone,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LOVABLE_PROJECT_URL, CONTACT_EMAIL } from '../data/mockData';

export const SignupSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetExam, setTargetExam] = useState('JEE Main 2026');
  const [queryMessage, setQueryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="signup" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Top Banner */}
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct Access Portal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Launch RankPilot & Secure Your Top Rank
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Join with aspirants. Access 120+ shift mocks, individual & 5-test consolidated reports, formula sheets, and multilingual AI doubt clarity.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Direct App Access Box */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white border border-blue-200 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-blue-700 text-white text-[10px] font-bold uppercase tracking-wider">
                      Official Application
                    </span>
                    <span className="text-emerald-600 text-xs font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Free & Open
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    Direct One-Click App Access
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Access the complete full-stack RankPilot application deployed directly at <strong className="text-blue-700 font-bold">jee-rankpilot.lovable.app</strong>.
                  </p>

                  <div className="space-y-2 text-xs text-slate-700 font-semibold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>120+ JEE Main PYQs as CBT Mocks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>40+ JEE Advanced PYQs (Last 19 Years)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>10+ BITSAT Mocks + Bonus Engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Concept Notes, Formula Sheets & Mindmaps</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm text-center shadow-lg shadow-blue-700/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Sign Up for Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 font-extrabold text-sm text-center shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Sign In</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: Academic Enquiry Form beside Direct Access */}
              <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-extrabold text-slate-900">
                    Aspirant & Parent Academic Enquiry
                  </h4>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    Quick Response
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-5">
                  Have questions about test series, study plans, or mentorship? Fill out the form or write to <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 font-bold hover:underline">{CONTACT_EMAIL}</a>.
                </p>

                <form onSubmit={handleEnquiry} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aryan Verma"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="aryan@gmail.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Exam</label>
                    <select
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                    >
                      <option value="JEE Main 2026">JEE Main 2026 (Jan/April Shifts)</option>
                      <option value="JEE Main 2027">JEE Main 2027 (Class 11 Foundation)</option>
                      <option value="JEE Advanced 2026">JEE Advanced 2026</option>
                      <option value="BITSAT 2026">BITSAT 2026 (Pilani / Goa / Hyd)</option>
                      <option value="All Exams Combo">All-In-One Exam Combo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Query / Message</label>
                    <textarea
                      rows={3}
                      value={queryMessage}
                      onChange={(e) => setQueryMessage(e.target.value)}
                      placeholder="Ask about mock test schedule, chapter test timings, report analysis, or pass details..."
                      className="w-full text-xs px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Academic Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      100% Confidential
                    </span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline font-bold flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </form>
              </div>

            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Enquiry Received, {fullName}!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for your enquiry. Our senior academic counselor will reach back to you at <strong>{email}</strong> within 2–4 hours.
              </p>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl max-w-md mx-auto text-xs text-blue-900 font-medium">
                For urgent assistance, feel free to email us directly at <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold underline">{CONTACT_EMAIL}</a>.
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs"
                >
                  Submit Another Enquiry
                </button>
                <a
                  href={LOVABLE_PROJECT_URL}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Launch Live App Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

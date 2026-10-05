import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  Send, 
  Lock, 
  Mail, 
  CheckCircle2, 
  ExternalLink,
  Building2,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_EMAIL, LOVABLE_PROJECT_URL } from '../data/mockData';

const FAQS = [
  {
    q: 'What is included in the 120+ JEE Main PYQ Mock Test Series?',
    a: 'Every shift paper from 2021 to 2026 has been converted into an authentic computer-based test (CBT) with exact NTA UI, countdown timer, Section A (20 MCQs) and Section B (numerical entry with negative marking), followed by instant marks, normalized percentile, and step-by-step solutions.'
  },
  {
    q: 'How does the 40+ JEE Advanced Test Series cover 19 years?',
    a: 'We have digitized Paper 1 and Paper 2 from 2007 through 2025. It replicates the exact variable marking schemes used by IITs—including full, partial, and negative marks for multi-correct options, numerical decimals, and matrix match columns.'
  },
  {
    q: 'Are BITSAT mock tests included with the 130-question and bonus question format?',
    a: 'Yes! The 10+ BITSAT mocks simulate the 130-question test across Physics, Chemistry, Math, English Proficiency, and Logical Reasoning, and include the official 12 bonus question unlocking engine when all 130 questions are attempted.'
  },
  {
    q: 'How do the individual and 5-test consolidated reports help me?',
    a: 'Unlike generic test series that just give a single score, JEE Ranker generates an instant diagnostic breakdown after every mock test plus a consolidated report for your last five tests to spot recurring error patterns, track accuracy improvements, and eliminate marks leakage.'
  },
  {
    q: 'What study resources are included in the Features tab?',
    a: 'You get 5 core smart tools: (1) High-yield Concept Notes covering all 92 chapters, (2) Formula Cheat Sheets with standard integrals and equations, (3) Visual Mind Maps for rapid chapter recall, (4) AI Analysis for personalized diagnostic tracking, and (5) Multilingual 24/7 AI Doubt Solver in Tamil, English, Hindi, Telugu, and Kannada.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Enquiry Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Student / Parent Academic Enquiry');
  const [queryMessage, setQueryMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faqs" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>Support & Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions & Inquiries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Find instant answers to common questions about JEE Ranker, or reach our academic & business team directly using the enquiry form.
          </p>
        </div>

        {/* 2-Column Layout: Left FAQs Accordion, Right Academic and Business Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (lg:col-span-7): FAQs Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-2">
              <h3 className="text-lg font-black text-slate-900">
                Common Aspirant & Parent Questions
              </h3>
              <span className="text-xs font-bold text-slate-500">5 Key Answers</span>
            </div>

            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-400/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{faq.q}</span>
                    <div className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-700 bg-blue-100' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (lg:col-span-5): Academic and Business Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              
              {!isSubmitted ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-wider">
                      Direct Support Desk
                    </span>
                    <span className="text-emerald-700 text-xs font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Active
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    Academic and Business Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    Have questions about test series, curriculum, institutional access, or partnerships? Reach us directly or email <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 font-bold hover:underline">{CONTACT_EMAIL}</a>.
                  </p>

                  <form onSubmit={handleEnquiry} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Aryan Verma"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
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
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Enquiry Type</label>
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white font-medium"
                      >
                        <option value="Student / Parent Academic Enquiry">Student / Parent Academic Enquiry</option>
                        <option value="JEE Main / Advanced Test Series Inquiry">JEE Main / Advanced Test Series Inquiry</option>
                        <option value="BITSAT Test Series & Bonus Engine">BITSAT Test Series & Bonus Engine</option>
                        <option value="School & Coaching Institutional Partnership">School & Coaching Institutional Partnership</option>
                        <option value="B2B EdTech Business Enquiry">B2B EdTech Business Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Query / Message</label>
                      <textarea
                        rows={3}
                        value={queryMessage}
                        onChange={(e) => setQueryMessage(e.target.value)}
                        placeholder="Tell us your questions regarding syllabus, test schedules, institutional tie-up, or platform features..."
                        className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Academic & Business Enquiry</span>
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
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Enquiry Received, {fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for submitting your inquiry. Our team will review your query and respond back to <strong>{email}</strong> within 2–4 hours.
                  </p>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 font-medium">
                    For direct assistance, write to <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold underline">{CONTACT_EMAIL}</a>.
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

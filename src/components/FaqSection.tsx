import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Answers to common questions about JEE Ranker's Test Series, individual & 5-test consolidated reports, and study resources.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-blue-300 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">{faq.q}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-blue-700 bg-blue-100' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

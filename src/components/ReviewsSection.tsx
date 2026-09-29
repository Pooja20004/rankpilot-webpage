import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ThumbsUp, 
  CheckCircle2, 
  Award, 
  Flame, 
  Sparkles,
  ExternalLink,
  MessageSquareQuote
} from 'lucide-react';
import { STUDENT_REVIEWS, LOVABLE_PROJECT_URL } from '../data/mockData';
import { StudentReview } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<StudentReview[]>(STUDENT_REVIEWS);
  const [upvotes, setUpvotes] = useState<{ [key: string]: number }>({
    'rev-1': 142,
    'rev-2': 98,
    'rev-3': 76
  });

  const handleUpvote = (id: string) => {
    setUpvotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Proven Results Across India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Loved by JEE and BITSAT Rankers
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Hear from aspirants who jumped from 94 percentile to 99+ percentile using our authentic NTA mocks and diagnostic reports.
          </p>
        </div>

        {/* 2 Prominent Stat Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">+38 Marks</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Average Score Growth</div>
            <div className="text-[11px] text-slate-500 font-medium">Within 6 Mocks & AI Error Fixing</div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-purple-700">4.9 / 5.0</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Aspirant Satisfaction Rating</div>
            <div className="text-[11px] text-slate-500 font-medium">Based on 14,200+ Post-Mock Ratings</div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Topper Header Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800">
                    {rev.airRank}
                  </span>
                  <div className="flex items-center text-amber-400 text-sm">
                    {'★★★★★'}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-6 italic">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Student Bio */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>{rev.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {rev.percentile} • {rev.targetInstitute}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUpvote(rev.id)}
                  className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-700 p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{upvotes[rev.id] || 0}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA to Lovable App */}
        <div className="text-center">
          <a
            href={LOVABLE_PROJECT_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md transition-all"
          >
            <span>Join with Aspirants On RankPilot</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

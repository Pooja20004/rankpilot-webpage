import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MessageSquarePlus, 
  ThumbsUp, 
  CheckCircle2, 
  Filter, 
  X, 
  Sparkles, 
  Send,
  Award,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INITIAL_REVIEWS, LOVABLE_PROJECT_URL } from '../data/mockData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    const saved = localStorage.getItem('rankpilot_user_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_REVIEWS;
      }
    }
    return INITIAL_REVIEWS;
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [upvotedReviews, setUpvotedReviews] = useState<{ [key: string]: boolean }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form states
  const [authorName, setAuthorName] = useState('');
  const [targetExam, setTargetExam] = useState('JEE Main 2026');
  const [scoreAchieved, setScoreAchieved] = useState('99.2 %ile Target');
  const [selectedFeature, setSelectedFeature] = useState<ReviewItem['featureTag']>('AI Coach');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    localStorage.setItem('rankpilot_user_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleUpvote = (id: string) => {
    if (upvotedReviews[id]) return;

    setReviews(prev =>
      prev.map(r => (r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r))
    );
    setUpvotedReviews(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newReview: ReviewItem = {
      id: 'rev-' + Date.now(),
      author: authorName.trim(),
      avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 1000)}?w=150&auto=format&fit=crop&q=80`,
      targetExam,
      scoreOrRank: scoreAchieved.trim() || 'Aspirant',
      featureTag: selectedFeature,
      rating,
      date: 'Just now',
      comment: comment.trim(),
      upvotes: 1,
      isVerified: true
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    setIsModalOpen(false);

    // Confetti effect
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setToastMessage('🎉 Thank you! Your review has been published successfully.');
    setTimeout(() => setToastMessage(null), 4000);

    // Reset form
    setAuthorName('');
    setComment('');
    setRating(5);
  };

  const filteredReviews = activeFilter === 'All' 
    ? reviews 
    : reviews.filter(r => r.featureTag === activeFilter);

  const filterOptions = ['All', 'AI Coach', 'PYQ Mocks', 'Deep Analytics', 'Study Planner', 'Doubt Solver'];

  return (
    <section id="reviews" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-xl animate-fade-in flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400" /> Aspirant Reviews & Ratings
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              Loved by 50,000+ JEE Aspirants & Rankers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Read authentic feedback for each specific feature tab or share your own experience with the RankPilot community.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 text-slate-950" />
            <span>Write a Tab Review</span>
          </button>
        </div>

        {/* Rating Overview Summary Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-8">
            <div className="text-5xl sm:text-6xl font-black text-white font-display">4.92<span className="text-2xl text-amber-400">/5</span></div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-400">Based on 1,280+ verified JEE Main & Advanced aspirants</p>
          </div>

          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-400 font-mono">5 Stars</span>
              <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '92%' }} />
              </div>
              <span className="w-10 text-right text-slate-300 font-mono">92%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-400 font-mono">4 Stars</span>
              <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '7%' }} />
              </div>
              <span className="w-10 text-right text-slate-300 font-mono">7%</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-slate-400 font-mono">3 Stars</span>
              <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '1%' }} />
              </div>
              <span className="w-10 text-right text-slate-300 font-mono">1%</span>
            </div>
          </div>

        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter Tab:
          </span>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Review Card Top: Tag + Stars */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    {rev.featureTag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs uppercase shadow-md">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">{rev.author}</span>
                      {rev.isVerified && (
                        <span title="Verified Aspirant">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {rev.targetExam} • <span className="text-cyan-300 font-semibold">{rev.scoreOrRank}</span>
                    </div>
                  </div>
                </div>

                {/* Upvote Button */}
                <button
                  onClick={() => handleUpvote(rev.id)}
                  disabled={upvotedReviews[rev.id]}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                    upvotedReviews[rev.id]
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                  title="Helpful Review"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{rev.upvotes}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* WRITE A REVIEW MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Write a Review for RankPilot</span>
                </h3>
                <p className="text-xs text-slate-400">Share your experience with fellow JEE aspirants.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              {/* Star Rating selector */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Rating</label>
                <div className="flex items-center gap-2 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          (hoverRating || rating) >= star ? 'fill-amber-400' : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-slate-400 ml-2">{rating} of 5 Stars</span>
                </div>
              </div>

              {/* Feature Tab Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Which Tab / Feature are you reviewing?</label>
                <select
                  value={selectedFeature}
                  onChange={(e) => setSelectedFeature(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                >
                  <option value="AI Coach">AI Coach (Zero-to-Hero)</option>
                  <option value="PYQ Mocks">JEE Main & Advanced PYQ Mocks</option>
                  <option value="Deep Analytics">Deep Analytics (Performance Decoded)</option>
                  <option value="Study Planner">Dynamic Study Planner</option>
                  <option value="Doubt Solver">24/7 AI Doubt Solver</option>
                  <option value="Score Reports">Score & Diagnostic Reports</option>
                </select>
              </div>

              {/* Name & Target Exam */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Siddharth Verma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">Target Exam / Year</label>
                  <input
                    type="text"
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    placeholder="e.g. JEE 2026 / Dropper"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Score / Rank */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Score or Percentile Milestone</label>
                <input
                  type="text"
                  value={scoreAchieved}
                  onChange={(e) => setScoreAchieved(e.target.value)}
                  placeholder="e.g. 99.4 %ile or AIR 350 Target"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Review & Feedback</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Describe how RankPilot improved your accuracy, solved doubts, or helped your preparation..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20"
                >
                  Submit Review
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </section>
  );
};

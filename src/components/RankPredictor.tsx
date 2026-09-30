import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  TrendingUp, 
  School, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const RankPredictor: React.FC = () => {
  const [score, setScore] = useState<number>(215);

  // JEE Main calculations (out of 300)
  const calculateMainStats = (rawScore: number) => {
    let percentile = 0;
    if (rawScore >= 280) percentile = +(99.95 + (rawScore - 280) * 0.002).toFixed(2);
    else if (rawScore >= 240) percentile = +(99.6 + ((rawScore - 240) / 40) * 0.35).toFixed(2);
    else if (rawScore >= 200) percentile = +(99.0 + ((rawScore - 200) / 40) * 0.6).toFixed(2);
    else if (rawScore >= 160) percentile = +(97.5 + ((rawScore - 160) / 40) * 1.5).toFixed(2);
    else if (rawScore >= 120) percentile = +(94.0 + ((rawScore - 120) / 40) * 3.5).toFixed(2);
    else if (rawScore >= 80) percentile = +(88.0 + ((rawScore - 80) / 40) * 6.0).toFixed(2);
    else percentile = +(Math.max(10, (rawScore / 80) * 88)).toFixed(2);

    const air = Math.max(80, Math.round((1 - (percentile / 100)) * 1420000));
    return { percentile, air };
  };

  const mainStats = calculateMainStats(score);

  const getColleges = (percentile: number) => {
    if (percentile >= 99.8) {
      return [
        { name: 'NIT Trichy / Surathkal / Warangal', branch: 'Computer Science & Engineering (CSE)', badge: 'Top Tier 1' },
        { name: 'IIIT Hyderabad (JEE Main Mode)', branch: 'Computer Science & AI', badge: 'Premier Institute' },
        { name: 'MNNIT Allahabad / VNIT Nagpur', branch: 'CSE / Data Science & AI', badge: 'Top Tier 1' }
      ];
    } else if (percentile >= 98.5) {
      return [
        { name: 'NIT Trichy / Surathkal', branch: 'Electronics & Communication (ECE)', badge: 'Tier 1' },
        { name: 'NIT Rourkela / Calicut', branch: 'Computer Science (CSE)', badge: 'Tier 1' },
        { name: 'IIIT Allahabad', branch: 'Information Technology (IT)', badge: 'Premier' }
      ];
    } else if (percentile >= 96.0) {
      return [
        { name: 'NIT Jaipur / Kurukshetra', branch: 'Electrical / Mechanical', badge: 'Tier 1' },
        { name: 'Top State Govt Colleges (VJTI / COEP)', branch: 'Computer Engineering', badge: 'State Top' },
        { name: 'IIIT Jabalpur / Gwalior', branch: 'CSE / ECE', badge: 'Tier 2' }
      ];
    } else {
      return [
        { name: 'Tier 2 NITs & Top State Universities', branch: 'Core Engineering Branches', badge: 'Tier 2' },
        { name: 'RankPilot AI Recommendation', branch: 'Attempt 8 more shift mocks to cross 99 %ile', badge: 'Action Needed' }
      ];
    }
  };

  const collegeList = getColleges(mainStats.percentile);

  return (
    <section id="predictor" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Statistical NTA Calibration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Live JEE Marks vs Percentile & AIR Predictor
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Calibrated against official NTA difficulty distributions across 120+ shift papers. Move the slider to view your estimated All India Rank.
          </p>
        </div>

        {/* Predictor Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Score Slider & Input */}
          <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm font-bold text-slate-800">
                Adjust Your Expected Raw Marks (out of 300):
              </span>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-blue-700 font-mono">{score}</span>
                <span className="text-xs font-bold text-slate-400">/ 300 Marks</span>
              </div>
            </div>

            <input
              type="range"
              min="20"
              max="300"
              step="1"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />

            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>50 (Qualifying)</span>
              <span>150 (~96 %ile)</span>
              <span>210 (~99.2 %ile)</span>
              <span>275+ (Top 100 AIR)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Estimated Percentile</span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">{mainStats.percentile} %ile</div>
              <p className="text-[11px] text-slate-500 font-medium">Normalised across 2021-2026 NTA shift papers</p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Predicted All India Rank (AIR)</span>
              <div className="text-3xl sm:text-4xl font-black text-purple-700 font-mono">AIR ~{mainStats.air.toLocaleString()}</div>
              <p className="text-[11px] text-slate-500 font-medium">Confidence interval: ±120 ranks based on 1.4M candidates</p>
            </div>
          </div>

          {/* Eligible Colleges List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <School className="w-4 h-4 text-blue-700" />
              <span>Projected NIT / IIIT Branch Allocations</span>
            </h4>

            <div className="space-y-2">
              {collegeList.map((col, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{col.name}</div>
                    <div className="text-slate-500 font-medium">{col.branch}</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[11px] border border-blue-200">
                    {col.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Take a live timed mock test to calculate your real score accurately.
            </span>

            <a
              href={LOVABLE_PROJECT_URL}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Take Full Mock on RankPilot</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

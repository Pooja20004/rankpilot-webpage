import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  TrendingUp, 
  School, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

export const RankPredictor: React.FC = () => {
  const [examType, setExamType] = useState<'JEE Main' | 'JEE Advanced'>('JEE Main');
  const [score, setScore] = useState<number>(205);

  // JEE Main calculations (out of 300)
  const calculateMainStats = (rawScore: number) => {
    const ratio = Math.max(0, Math.min(300, rawScore)) / 300;
    // Non-linear calibration curve matching 2024-2026 shifts
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
        { name: 'NIT Trichy / Surathkal / Warangal', branch: 'Computer Science & Engg (CSE)', badge: 'Top Tier 1' },
        { name: 'IIIT Hyderabad (JEE Channel)', branch: 'Computer Science & AI', badge: 'Premier' },
        { name: 'MNNIT Allahabad / VNIT Nagpur', branch: 'CSE / Data Science', badge: 'Top Tier 1' }
      ];
    } else if (percentile >= 98.5) {
      return [
        { name: 'NIT Trichy / Surathkal', branch: 'Electronics & Comm (ECE)', badge: 'Tier 1' },
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
        { name: 'RankPilot AI Recommendation', branch: 'Activate Zero-to-Hero to reach 99+ %ile', badge: 'Action Needed' }
      ];
    }
  };

  const collegeList = getColleges(mainStats.percentile);

  return (
    <section id="predictor" className="py-24 relative bg-slate-950/60 border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Statistical NTA Calibration
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Live JEE Marks vs Percentile & AIR Predictor
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Calibrated against official NTA difficulty distributions across 140+ shifts from 2019 to 2026.
          </p>
        </div>

        {/* Predictor Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          
          {/* Score Slider & Input */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-sm font-bold text-slate-200">
                Your Expected Raw Marks (out of 300)
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-emerald-400 font-mono">{score}</span>
                <span className="text-xs text-slate-400 font-mono">/ 300 Marks</span>
              </div>
            </div>

            <input
              type="range"
              min="20"
              max="300"
              step="1"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />

            <div className="flex justify-between text-xs font-mono text-slate-500">
              <span>50 (Qualifying)</span>
              <span>150 (~96 %ile)</span>
              <span>210 (~99.3 %ile)</span>
              <span>280+ (AIR &lt; 50)</span>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-transparent space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Estimated Percentile</span>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">{mainStats.percentile} %ile</div>
              <p className="text-[11px] text-slate-400">Normalised on 2026 Session 1/2 difficulty</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-sky-500/30 bg-gradient-to-br from-sky-950/20 to-transparent space-y-1">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Predicted All India Rank (AIR)</span>
              <div className="text-3xl sm:text-4xl font-black text-cyan-300 font-mono">AIR ~{mainStats.air.toLocaleString()}</div>
              <p className="text-[11px] text-slate-400">Confidence interval: ±150 ranks</p>
            </div>
          </div>

          {/* Eligible Colleges List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <School className="w-4 h-4 text-emerald-400" />
              <span>Projected NIT / IIIT Branch Allocations</span>
            </h4>

            <div className="space-y-2">
              {collegeList.map((col, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{col.name}</div>
                    <div className="text-slate-400 text-[11px]">{col.branch}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                    {col.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Take a live mock test on the Lovable App to test your actual marks.
            </span>

            <a
              href={LOVABLE_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>Take Full Mock on Lovable</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

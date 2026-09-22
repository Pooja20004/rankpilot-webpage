import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  FastForward,
  Brain,
  Video,
  Mic,
  MonitorPlay
} from 'lucide-react';
import { VIDEO_CHAPTERS, LOVABLE_PROJECT_URL } from '../data/mockData';
import { VideoChapter } from '../types';

export const AiVideoExplainer: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [progressPercent, setProgressPercent] = useState(0);
  const [speechSupported, setSpeechSupported] = useState(false);
  
  const timerRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentChapter: VideoChapter = VIDEO_CHAPTERS[currentChapterIndex];

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setSpeechSupported(true);
    }
  }, []);

  const stopAudio = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const playChapterAudio = (index: number) => {
    stopAudio();
    const chapter = VIDEO_CHAPTERS[index];
    setProgressPercent(0);

    if (synthRef.current && !isMuted) {
      const utterance = new SpeechSynthesisUtterance(chapter.narrationScript);
      utterance.rate = playbackSpeed;
      utterance.pitch = 1.05;
      
      // Try to find an English voice
      const voices = synthRef.current.getVoices();
      const engVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('David')));
      if (engVoice) {
        utterance.voice = engVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
        setProgressPercent(100);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
    }

    // Simulated progress timer
    const totalDurationMs = (chapter.durationSec / playbackSpeed) * 1000;
    const intervalMs = 100;
    let elapsed = 0;

    timerRef.current = setInterval(() => {
      elapsed += intervalMs;
      const pct = Math.min(100, (elapsed / totalDurationMs) * 100);
      setProgressPercent(pct);

      if (pct >= 100) {
        clearInterval(timerRef.current);
        if (index < VIDEO_CHAPTERS.length - 1) {
          // Auto advance to next chapter
          setTimeout(() => {
            setCurrentChapterIndex(index + 1);
            playChapterAudio(index + 1);
          }, 800);
        } else {
          setIsPlaying(false);
        }
      }
    }, intervalMs);

    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      playChapterAudio(currentChapterIndex);
    }
  };

  const handleSelectChapter = (index: number) => {
    setCurrentChapterIndex(index);
    if (isPlaying) {
      playChapterAudio(index);
    } else {
      setProgressPercent(0);
    }
  };

  const handleRestart = () => {
    playChapterAudio(currentChapterIndex);
  };

  const handleSpeedChange = () => {
    const speeds = [1, 1.25, 1.5];
    const nextSpeed = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    if (isPlaying) {
      playChapterAudio(currentChapterIndex);
    }
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (nextMuted && synthRef.current) {
      synthRef.current.cancel();
    } else if (!nextMuted && isPlaying) {
      playChapterAudio(currentChapterIndex);
    }
  };

  return (
    <section id="ai-video" className="py-24 relative bg-slate-950/80 border-t border-b border-slate-800/80">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[350px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" /> Interactive AI Video Guide
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Watch RankPilot In Action: Complete Feature Walkthrough
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience an interactive audio-visual tour explaining each and every feature tab in depth. Choose a chapter or press play to begin the guided AI demonstration.
          </p>
        </div>

        {/* Video Player & Chapter Selector Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Simulated AI Video Player (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between">
            
            {/* Player Canvas Area */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 p-6 flex flex-col justify-between overflow-hidden group">
              
              {/* Animated Background Mesh & Waveform */}
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Top Video Overlay Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">AI Voice Narration</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-[11px] text-cyan-300 font-mono">Chapter {currentChapterIndex + 1} of {VIDEO_CHAPTERS.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-[10px] font-mono border border-slate-800">
                    {currentChapter.timestamp}
                  </span>
                </div>
              </div>

              {/* Center Animated Dynamic Preview for Active Chapter */}
              <div className="relative z-10 my-auto text-center space-y-4 max-w-xl mx-auto">
                <div className="inline-flex p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 text-sky-400 shadow-xl shadow-sky-500/10">
                  {currentChapter.tabId === 'mocks' && <MonitorPlay className="w-10 h-10 text-sky-400 animate-pulse" />}
                  {currentChapter.tabId === 'analytics' && <Brain className="w-10 h-10 text-emerald-400 animate-pulse" />}
                  {currentChapter.tabId === 'coach' && <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse" />}
                  {currentChapter.tabId === 'planner' && <Layers className="w-10 h-10 text-amber-400 animate-pulse" />}
                  {currentChapter.tabId === 'doubts' && <Mic className="w-10 h-10 text-purple-400 animate-pulse" />}
                  {currentChapter.tabId === 'students' && <Sparkles className="w-10 h-10 text-teal-400 animate-pulse" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    {currentChapter.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                    {currentChapter.subtitle}
                  </p>
                </div>

                {/* Animated Sound Waves Visualizer when playing */}
                <div className="flex items-center justify-center gap-1.5 h-6">
                  {[40, 70, 90, 60, 100, 50, 80, 45, 95, 65, 85, 30].map((height, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-200 ${
                        isPlaying
                          ? 'bg-gradient-to-t from-sky-500 to-indigo-400'
                          : 'bg-slate-700 h-1.5'
                      }`}
                      style={{
                        height: isPlaying ? `${Math.max(6, Math.round(height * Math.random()))}px` : '4px'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Live Subtitles & Captions Bar */}
              <div className="relative z-10 p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md text-xs text-slate-200 leading-relaxed text-center shadow-lg">
                <span className="text-purple-400 font-bold mr-2 font-mono">[AI Guide]</span>
                <span>{currentChapter.narrationScript}</span>
              </div>

            </div>

            {/* Video Controls Bar */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
              
              {/* Scrubber Progress Bar */}
              <div className="relative w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer">
                <div 
                  className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleTogglePlay}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold transition-all shadow-md shadow-sky-500/20"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all"
                    title="Restart Chapter"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleToggleMute}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all"
                    title={isMuted ? 'Unmute Voice' : 'Mute Voice'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    {Math.round((progressPercent / 100) * currentChapter.durationSec)}s / {currentChapter.durationSec}s
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSpeedChange}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-[11px] border border-slate-800 flex items-center gap-1 transition-all"
                  >
                    <FastForward className="w-3 h-3 text-purple-400" />
                    <span>{playbackSpeed}x</span>
                  </button>

                  <a
                    href={LOVABLE_PROJECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 text-[11px] font-semibold border border-indigo-500/30 transition-all"
                  >
                    <span>Try on Lovable</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Chapter Selector Playlist Drawer (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Feature Video Chapters</span>
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">Select any chapter to jump directly to that feature explanation.</p>
            </div>

            <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
              {VIDEO_CHAPTERS.map((ch, idx) => {
                const isCurrent = currentChapterIndex === idx;
                return (
                  <div
                    key={ch.id}
                    onClick={() => handleSelectChapter(idx)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-r from-sky-950/50 to-indigo-950/50 border-sky-500 shadow-md shadow-sky-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                            isCurrent ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'
                          }`}>
                            0{idx + 1}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{ch.timestamp}</span>
                        </div>
                        <h5 className="text-xs font-bold text-white">{ch.title}</h5>
                        <p className="text-[11px] text-slate-400">{ch.subtitle}</p>
                      </div>

                      {isCurrent && isPlaying ? (
                        <div className="p-1.5 rounded-full bg-cyan-400 text-slate-950 shrink-0">
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        </div>
                      ) : (
                        <div className="p-1.5 rounded-full bg-slate-800 text-slate-400 shrink-0">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      )}
                    </div>

                    {/* Highlights bullet list */}
                    {isCurrent && (
                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1">
                        {ch.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                            <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

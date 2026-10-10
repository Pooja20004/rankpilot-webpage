import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  Target,
  BarChart3,
  Award,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Zap,
  TrendingUp,
  FileText,
  HelpCircle,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';
import {
  EXAM_RESOURCE_TABS,
  BITSAT_STRATEGY_DATA,
  JEE_ADVANCED_STRATEGY_DATA,
  JEE_MAIN_STRATEGY_DATA,
  JEE_MAIN_SYLLABUS_DATA,
  JEE_ADVANCED_SYLLABUS_DATA,
  BITSAT_SYLLABUS_DATA
} from '../data/examResourcesData';

interface ExamResourcesPageProps {
  onBackToHome: () => void;
  initialTab?: string;
}

export const ExamResourcesPage: React.FC<ExamResourcesPageProps> = ({
  onBackToHome,
  initialTab = 'jee-main-syllabus'
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  const currentTabObj = useMemo(() => {
    return EXAM_RESOURCE_TABS.find(t => t.id === activeTab) || EXAM_RESOURCE_TABS[0];
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-xs sm:text-sm font-bold shadow-xs group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <div className="h-5 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-black text-base shadow-sm">
                R
              </span>
              <span className="font-black text-slate-900 text-base tracking-tight hidden sm:inline">
                JEE <span className="text-blue-700">RANKER</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={LOVABLE_PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-black shadow-md shadow-blue-700/20 transition-all hover:scale-102"
            >
              <span>Practice Mocks</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Page Banner */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Official 2027 Exam Guide & Cracking Blueprint</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            JEE Main, JEE Advanced and BITSAT <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
              Exam Syllabuses & Exam Cracking Strategies
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Authentic, chapter-wise weightage trends (2022–2026), updated NTA & IIT Delhi syllabuses, rationalised topic exclusions, and 99 percentile scoring timetables.
          </p>

          {/* Quick Search */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search chapters, topics (e.g. Calculus, Rotational, Organic, Optics)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-slate-900 placeholder:text-slate-400 border border-white/20 focus:border-blue-500 focus:outline-none text-sm transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-2 py-1 bg-slate-700/60 hover:bg-slate-700 rounded text-slate-300"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          
          {/* Top-Level Mode Selector: Syllabus vs Strategy */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-full md:w-auto">
              <button
                onClick={() => {
                  if (currentTabObj.category !== 'syllabus') {
                    setActiveTab('jee-main-syllabus');
                  }
                }}
                className={`flex-1 md:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                  currentTabObj.category === 'syllabus'
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Exam Syllabuses (2027)</span>
              </button>
              <button
                onClick={() => {
                  if (currentTabObj.category !== 'strategy') {
                    setActiveTab('jee-main-strategy');
                  }
                }}
                className={`flex-1 md:flex-initial px-5 py-2 rounded-lg text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                  currentTabObj.category === 'strategy'
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Chapter-wise Weightage & Cracking Strategies</span>
              </button>
            </div>

            {/* Sub-pill exam indicators */}
            <span className="text-xs text-slate-500 font-bold hidden md:inline">
              Selected: <strong className="text-blue-700">{currentTabObj.name}</strong>
            </span>
          </div>

          {/* Subtabs for current category */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
            {EXAM_RESOURCE_TABS.filter(t => t.category === currentTabObj.category).map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <span>{tab.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        
        {/* Render Tab Content Based on activeTab */}
        {activeTab === 'jee-main-syllabus' && (
          <JeeMainSyllabusView searchQuery={searchQuery} />
        )}

        {activeTab === 'jee-advanced-syllabus' && (
          <JeeAdvancedSyllabusView searchQuery={searchQuery} />
        )}

        {activeTab === 'bitsat-syllabus' && (
          <BitsatSyllabusView searchQuery={searchQuery} />
        )}

        {activeTab === 'jee-main-strategy' && (
          <JeeMainStrategyView searchQuery={searchQuery} />
        )}

        {activeTab === 'jee-advanced-strategy' && (
          <JeeAdvancedStrategyView searchQuery={searchQuery} />
        )}

        {activeTab === 'bitsat-strategy' && (
          <BitsatStrategyView searchQuery={searchQuery} />
        )}

      </main>

      {/* Footer Banner */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 text-center mt-12">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-xs text-slate-500 leading-relaxed">
            © 2026 JEE Ranker. Syllabuses and analysis compiled from official NTA, IIT JEE Advanced, and BITS Pilani notifications. Practice 120+ authentic previous year shift papers converted into timed computer-based tests at{' '}
            <a href="https://app.jeeranker.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline">
              app.jeeranker.com
            </a>
          </p>
          <div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-bold hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to JEE Ranker Homepage</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ============================================================================
// SUB-COMPONENT 1: JEE MAIN 2027 SYLLABUS
// ============================================================================
const JeeMainSyllabusView: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [activeSubject, setActiveSubject] = useState<'all' | 'physics' | 'chemistry' | 'maths'>('all');
  const query = searchQuery.toLowerCase();

  const filteredPhysics = useMemo(() => {
    return JEE_MAIN_SYLLABUS_DATA.physicsUnits.filter(u => 
      !query || u.name.toLowerCase().includes(query) || u.topics.toLowerCase().includes(query)
    );
  }, [query]);

  const filteredChemistry = useMemo(() => {
    return JEE_MAIN_SYLLABUS_DATA.chemistryUnits.filter(u => 
      !query || u.name.toLowerCase().includes(query) || u.topics.toLowerCase().includes(query) || u.branch.toLowerCase().includes(query)
    );
  }, [query]);

  const filteredMaths = useMemo(() => {
    return JEE_MAIN_SYLLABUS_DATA.mathsUnits.filter(u => 
      !query || u.name.toLowerCase().includes(query) || u.topics.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <div className="space-y-8">
      {/* Alert Header */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold">Official Note on JEE Main 2027: </strong>
          NTA releases the official syllabus with the 2027 Information Bulletin. This syllabus follows the latest official NTA syllabus (retained across 2024, 2025 and 2026) and aligned with the rationalised NCERT curriculum.
        </div>
      </div>

      {/* Syllabus at a Glance Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Total Units</span>
          <span className="text-2xl font-black text-blue-700">54 Units</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">196 Sub-topics</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Physics</span>
          <span className="text-2xl font-black text-slate-900">20 Units</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">83 Sub-topics • 100 Marks</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Chemistry</span>
          <span className="text-2xl font-black text-slate-900">20 Units</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">73 Sub-topics • 100 Marks</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Mathematics</span>
          <span className="text-2xl font-black text-slate-900">14 Units</span>
          <span className="text-[11px] text-slate-500 block mt-0.5">40 Sub-topics • 100 Marks</span>
        </div>
      </div>

      {/* Removed Chapters Callout */}
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 shadow-xs">
        <h3 className="text-base font-black text-rose-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-600" />
          <span>Chapters Removed from JEE Main Syllabus (Do Not Study for 2027)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JEE_MAIN_SYLLABUS_DATA.removedTopics.map((item, idx) => (
            <div key={idx} className="p-3 bg-white/80 rounded-xl border border-rose-100 text-xs">
              <span className="font-bold text-rose-800 block mb-1">{item.subject}</span>
              <p className="text-slate-700 leading-relaxed font-medium">{item.removed}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        {(['all', 'physics', 'chemistry', 'maths'] as const).map(subj => (
          <button
            key={subj}
            onClick={() => setActiveSubject(subj)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
              activeSubject === subj
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {subj === 'all' ? 'All Subjects' : subj}
          </button>
        ))}
      </div>

      {/* Physics Units Table */}
      {(activeSubject === 'all' || activeSubject === 'physics') && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-blue-50/60 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>Physics – 20 Units (Paper 1)</span>
            </h3>
            <span className="text-xs text-slate-500 font-semibold">{filteredPhysics.length} units matching</span>
          </div>
          <div className="divide-y divide-slate-100">
            {filteredPhysics.map(unit => (
              <div key={unit.unit} className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-black shrink-0">
                    Unit {unit.unit}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{unit.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{unit.topics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chemistry Units Table */}
      {(activeSubject === 'all' || activeSubject === 'chemistry') && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-emerald-50/60 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Chemistry – 20 Units (Physical, Inorganic & Organic)</span>
            </h3>
            <span className="text-xs text-slate-500 font-semibold">{filteredChemistry.length} units matching</span>
          </div>
          <div className="divide-y divide-slate-100">
            {filteredChemistry.map(unit => (
              <div key={unit.unit} className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors">
                <div className="flex items-start gap-3">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-black shrink-0 ${
                    unit.branch === 'Physical' ? 'bg-amber-100 text-amber-800' :
                    unit.branch === 'Inorganic' ? 'bg-purple-100 text-purple-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {unit.branch} • Unit {unit.unit}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{unit.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{unit.topics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mathematics Units Table */}
      {(activeSubject === 'all' || activeSubject === 'maths') && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-purple-50/60 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
              <span>Mathematics – 14 Units (Paper 1)</span>
            </h3>
            <span className="text-xs text-slate-500 font-semibold">{filteredMaths.length} units matching</span>
          </div>
          <div className="divide-y divide-slate-100">
            {filteredMaths.map(unit => (
              <div key={unit.unit} className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 text-xs font-black shrink-0">
                    Unit {unit.unit}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{unit.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{unit.topics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// SUB-COMPONENT 2: JEE ADVANCED 2027 SYLLABUS
// ============================================================================
const JeeAdvancedSyllabusView: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  return (
    <div className="space-y-8">
      {/* Alert Header */}
      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 flex items-start gap-3 shadow-xs">
        <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed">
          <strong className="font-bold">IIT Conducted Exam Structure: </strong>
          Organised in rotation by one of the IITs (IIT Delhi expected for 2027). Both Paper 1 and Paper 2 are compulsory (3 hours each on the same day). Total 68 chapters and 198 sub-topics.
        </div>
      </div>

      {/* Extra Topics Beyond JEE Main Table */}
      <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-5 shadow-xs">
        <h3 className="text-base font-black text-amber-950 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>Extra Topics in JEE Advanced NOT in JEE Main (Crucial Additional Prep)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JEE_ADVANCED_SYLLABUS_DATA.extraTopicsBeyondMain.map((item, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl border border-amber-200/80 shadow-xs">
              <span className="font-black text-xs text-amber-900 uppercase tracking-wider block mb-1.5">{item.subject}</span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">{item.topics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Physics Sections */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-black text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Physics – 6 Sections & 20 Chapters</span>
          </h3>
          <span className="text-xs text-slate-300 font-semibold">120 Marks</span>
        </div>
        <div className="divide-y divide-slate-100">
          {JEE_ADVANCED_SYLLABUS_DATA.physicsSections.map((sec, idx) => (
            <div key={idx} className="p-4 sm:p-5 hover:bg-slate-50 transition-colors">
              <h4 className="text-sm font-black text-blue-800 mb-1">{sec.section}</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">{sec.chapters}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chemistry Sections */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-black text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Chemistry – 3 Sections & 35 Chapters</span>
          </h3>
          <span className="text-xs text-slate-300 font-semibold">120 Marks</span>
        </div>
        <div className="divide-y divide-slate-100">
          {JEE_ADVANCED_SYLLABUS_DATA.chemistrySections.map((sec, idx) => (
            <div key={idx} className="p-4 sm:p-5 hover:bg-slate-50 transition-colors">
              <h4 className="text-sm font-black text-emerald-800 mb-1">{sec.section}</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">{sec.chapters}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mathematics Sections */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-black text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>Mathematics – 13 Chapters</span>
          </h3>
          <span className="text-xs text-slate-300 font-semibold">120 Marks</span>
        </div>
        <div className="divide-y divide-slate-100">
          {JEE_ADVANCED_SYLLABUS_DATA.mathsSections.map((sec, idx) => (
            <div key={idx} className="p-4 sm:p-5 hover:bg-slate-50 transition-colors">
              <h4 className="text-sm font-black text-purple-800 mb-1">{sec.section}</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">{sec.chapters}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SUB-COMPONENT 3: BITSAT 2027 SYLLABUS
// ============================================================================
const BitsatSyllabusView: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  return (
    <div className="space-y-8">
      {/* Exam Pattern & Campus Overview */}
      <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-slate-800 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-blue-700" />
          <h3 className="text-base font-black text-blue-900">About BITS Pilani & BITSAT CBT Exam</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          BITS Pilani is an Institution of Eminence with campuses in Pilani, Goa, Hyderabad, Dubai, and Mumbai. Admission is 100% merit-based without caste reservations. Direct admissions are offered to State/Central board toppers.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div className="p-3 bg-white rounded-xl border border-blue-100 text-xs">
            <span className="text-slate-500 font-bold block">Format</span>
            <span className="font-black text-slate-900">130 Questions / 390 Marks</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-blue-100 text-xs">
            <span className="text-slate-500 font-bold block">Duration</span>
            <span className="font-black text-slate-900">180 Mins (No Sectional Limits)</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-blue-100 text-xs">
            <span className="text-slate-500 font-bold block">Marking</span>
            <span className="font-black text-emerald-700">+3 Correct / -1 Incorrect</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-blue-100 text-xs">
            <span className="text-slate-500 font-bold block">Bonus Feature</span>
            <span className="font-black text-purple-700">12 Extra Questions</span>
          </div>
        </div>
      </div>

      {/* Physics Units */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-black text-base flex items-center gap-2">
            <span>Part I: Physics (18 Units • 30 Questions • 90 Marks)</span>
          </h3>
        </div>
        <div className="divide-y divide-slate-100">
          {BITSAT_SYLLABUS_DATA.physicsUnits.map(unit => (
            <div key={unit.unit} className="p-4 hover:bg-slate-50 transition-colors">
              <span className="text-xs font-black text-blue-700 block mb-0.5">Unit {unit.unit}: {unit.name}</span>
              <p className="text-xs text-slate-600 leading-relaxed">{unit.topics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chemistry Units */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-black text-base flex items-center gap-2">
            <span>Part II: Chemistry (14 Units • 30 Questions • 90 Marks)</span>
          </h3>
        </div>
        <div className="divide-y divide-slate-100">
          {BITSAT_SYLLABUS_DATA.chemistryUnits.map(unit => (
            <div key={unit.unit} className="p-4 hover:bg-slate-50 transition-colors">
              <span className="text-xs font-black text-emerald-700 block mb-0.5">Unit {unit.unit}: {unit.name}</span>
              <p className="text-xs text-slate-600 leading-relaxed">{unit.topics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* English & Logical Reasoning Units */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-amber-600 text-white font-black text-sm">
            Part III (a): English Proficiency (10 Qs • 30 Marks)
          </div>
          <div className="divide-y divide-slate-100">
            {BITSAT_SYLLABUS_DATA.englishUnits.map(unit => (
              <div key={unit.unit} className="p-4">
                <span className="text-xs font-bold text-amber-900 block mb-0.5">{unit.unit}. {unit.name}</span>
                <p className="text-xs text-slate-600">{unit.topics}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-indigo-600 text-white font-black text-sm">
            Part III (b): Logical Reasoning (20 Qs • 60 Marks)
          </div>
          <div className="divide-y divide-slate-100">
            {BITSAT_SYLLABUS_DATA.reasoningUnits.map(unit => (
              <div key={unit.unit} className="p-4">
                <span className="text-xs font-bold text-indigo-900 block mb-0.5">{unit.unit}. {unit.name}</span>
                <p className="text-xs text-slate-600">{unit.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mathematics Units */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <h3 className="font-black text-base flex items-center gap-2">
            <span>Part IV: Mathematics (12 Units • 40 Questions • 120 Marks)</span>
          </h3>
        </div>
        <div className="divide-y divide-slate-100">
          {BITSAT_SYLLABUS_DATA.mathsUnits.map(unit => (
            <div key={unit.unit} className="p-4 hover:bg-slate-50 transition-colors">
              <span className="text-xs font-black text-purple-700 block mb-0.5">Unit {unit.unit}: {unit.name}</span>
              <p className="text-xs text-slate-600 leading-relaxed">{unit.topics}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SUB-COMPONENT 4: JEE MAIN 2027 STRATEGY & WEIGHTAGE
// ============================================================================
const JeeMainStrategyView: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  return (
    <div className="space-y-8">
      {/* 99 Percentile Target Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Target 190–200 Marks Blueprint</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black mb-3">What Does 99 Percentile in JEE Main 2027 Need?</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
          You don’t need to attempt all 75 questions! Approximately <strong>52 correct answers with ≤ 8 errors</strong> comfortably clears 99 percentile across shift variations. Accuracy beats attempts every single time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {JEE_MAIN_STRATEGY_DATA.subjectTargets.map((st, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold text-blue-200 block mb-1">{st.subject}</span>
              <span className="text-2xl font-black text-white block">{st.targetMarks}</span>
              <span className="text-[11px] text-emerald-300 block font-semibold mt-1">{st.correctNeeded} correct</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">{st.reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marks vs Percentile Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-100 border-b border-slate-200 font-black text-sm text-slate-800">
          Marks vs Percentile Benchmarks (Based on Recent Shift Trends)
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3.5">Percentile</th>
                <th className="p-3.5">Approx. Marks (Out of 300)</th>
                <th className="p-3.5">What it Means For You</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {JEE_MAIN_STRATEGY_DATA.marksVsPercentile.map((row, idx) => (
                <tr key={idx} className={row.percentile.includes('safe') ? 'bg-emerald-50/70 font-bold' : ''}>
                  <td className="p-3.5 text-slate-900 font-bold">{row.percentile}</td>
                  <td className="p-3.5 text-blue-700 font-black">{row.marks}</td>
                  <td className="p-3.5 text-slate-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Easy & Scoring Chapters High-Yield Table */}
      <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <h3 className="text-base font-black text-emerald-900">Easy & Scoring Chapters (84 to 108 Marks at Stake)</h3>
        </div>
        <p className="text-xs text-slate-700 mb-4 font-medium">
          These 12 chapter clusters alone account for nearly half of your target score. Master these first with 100% accuracy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JEE_MAIN_STRATEGY_DATA.easyScoring.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-xs">
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wide block mb-1">{item.subject}</span>
              <p className="text-xs text-slate-800 font-bold mb-2 leading-snug">{item.chapters}</p>
              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-2 border-t border-slate-100">
                <span>Exp: <strong>{item.expQs} Qs</strong></span>
                <span className="font-black text-emerald-700">{item.marks} Marks</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter-wise Weightage Tables (Maths, Physics, Chemistry) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Maths */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-purple-50 border-b border-slate-200">
            <h4 className="font-black text-sm text-purple-900">Mathematics Weightage (2022–2026)</h4>
            <span className="text-[11px] text-slate-500">Sorted by expected questions in 2027</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-2.5">Chapter</th>
                  <th className="p-2.5">Trend</th>
                  <th className="p-2.5">Exp Qs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {JEE_MAIN_STRATEGY_DATA.mathsWeightage.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 text-slate-800 font-semibold">{row.chapter}</td>
                    <td className={`p-2.5 font-bold ${row.trend.includes('Rising') ? 'text-emerald-600' : row.trend.includes('Falling') ? 'text-rose-500' : 'text-slate-500'}`}>
                      {row.trend}
                    </td>
                    <td className="p-2.5 font-black text-purple-700">{row.expQs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Physics */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-blue-50 border-b border-slate-200">
            <h4 className="font-black text-sm text-blue-900">Physics Weightage (2022–2026)</h4>
            <span className="text-[11px] text-slate-500">Modern & Current lead the scoring</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-2.5">Chapter</th>
                  <th className="p-2.5">Trend</th>
                  <th className="p-2.5">Exp Qs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {JEE_MAIN_STRATEGY_DATA.physicsWeightage.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 text-slate-800 font-semibold">{row.chapter}</td>
                    <td className={`p-2.5 font-bold ${row.trend.includes('Rising') ? 'text-emerald-600' : row.trend.includes('Falling') ? 'text-rose-500' : 'text-slate-500'}`}>
                      {row.trend}
                    </td>
                    <td className="p-2.5 font-black text-blue-700">{row.expQs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chemistry */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-emerald-50 border-b border-slate-200">
            <h4 className="font-black text-sm text-emerald-900">Chemistry Weightage (2022–2026)</h4>
            <span className="text-[11px] text-slate-500">GOC & Coordination are kingmakers</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-2.5">Chapter</th>
                  <th className="p-2.5">Trend</th>
                  <th className="p-2.5">Exp Qs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {JEE_MAIN_STRATEGY_DATA.chemistryWeightage.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 text-slate-800 font-semibold">{row.chapter}</td>
                    <td className={`p-2.5 font-bold ${row.trend.includes('Rising') ? 'text-emerald-600' : row.trend.includes('Falling') ? 'text-rose-500' : 'text-slate-500'}`}>
                      {row.trend}
                    </td>
                    <td className="p-2.5 font-black text-emerald-700">{row.expQs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* 3-Round Exam-Day Method */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-black text-slate-900 mb-2">The 3-Round Exam-Day Method</h3>
        <p className="text-xs text-slate-600 mb-4">
          Time Split: Chemistry (45–50 min) → Physics (60 min) → Mathematics (60–65 min) → Buffer (10–15 min).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JEE_MAIN_STRATEGY_DATA.roundMethod.map((rm, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-black text-xs text-blue-700 block mb-1">{rm.round}</span>
              <p className="text-xs font-bold text-slate-900 mb-1">{rm.focus}</p>
              <p className="text-[11px] text-slate-600 font-normal leading-relaxed">{rm.rule}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 99 Percentile Checklist */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
        <h3 className="text-base font-black text-amber-300 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>99 Percentile Readiness Checklist</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {JEE_MAIN_STRATEGY_DATA.checklist.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SUB-COMPONENT 5: JEE ADVANCED STRATEGY & WEIGHTAGE
// ============================================================================
const JeeAdvancedStrategyView: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Expected 2026/2027 Pattern</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black mb-2">JEE Advanced Chapter-wise Weightage & Study Strategy</h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed mb-6">
          In JEE Advanced, a handful of high-yield chapters carry nearly <strong>80% of the total marks</strong>: Mechanics + Electricity & Magnetism + Modern Physics in Physics; Physical + Organic II in Chemistry; Calculus + Probability + Vectors/3D in Mathematics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {JEE_ADVANCED_STRATEGY_DATA.summary.map((sum, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-4 border border-white/10">
              <span className="text-xs font-bold text-slate-300 block mb-1">{sum.subject}</span>
              <span className="text-2xl font-black text-white">{sum.marks} Marks</span>
              <span className="text-[11px] text-slate-400 block mt-1">Class 12: {sum.class12}</span>
              <span className="text-[11px] text-slate-400 block">Class 11: {sum.class11}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Priority Tiers */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-700" />
          <span>Chapter Priority Tiers (Where to Spend Your Study Hours)</span>
        </h3>
        <div className="space-y-4">
          {JEE_ADVANCED_STRATEGY_DATA.tiers.map((t, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-black text-sm text-blue-800 block mb-2">{t.subject}</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200">
                  <span className="font-bold text-emerald-900 block mb-1">Tier 1 – Master Fully</span>
                  <p className="text-slate-700 font-medium leading-relaxed">{t.tier1}</p>
                </div>
                <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-200">
                  <span className="font-bold text-blue-900 block mb-1">Tier 2 – Strong Practice</span>
                  <p className="text-slate-700 font-medium leading-relaxed">{t.tier2}</p>
                </div>
                <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">Tier 3 – Quick Revision</span>
                  <p className="text-slate-700 font-medium leading-relaxed">{t.tier3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase-wise Prep Plan */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-black text-slate-900 mb-4">Phase-wise Preparation Plan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {JEE_ADVANCED_STRATEGY_DATA.phases.map((ph, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-xs text-blue-700">{ph.phase}</span>
                <span className="text-xs font-black px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">{ph.share}</span>
              </div>
              <p className="text-xs text-slate-800 font-semibold mb-2">{ph.focus}</p>
              <p className="text-[11px] text-emerald-700 font-bold">Target: {ph.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exam-Day Strategy by Question Type */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-black text-slate-900 mb-4">Exam-Day Strategy by Question Type</h3>
        <div className="divide-y divide-slate-100">
          {JEE_ADVANCED_STRATEGY_DATA.questionStrategies.map((qs, idx) => (
            <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-bold text-slate-900 sm:w-1/3">{qs.type}</span>
              <span className="text-slate-600 sm:w-2/3 leading-relaxed">{qs.rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SUB-COMPONENT 6: BITSAT STRATEGY & WEIGHTAGE
// ============================================================================
const BitsatStrategyView: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-amber-300" />
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Speed & Accuracy Test</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black mb-2">BITSAT 2027 Chapter-wise Weightage & Cracking Strategy</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
          BITSAT is a speed marathon: 130 questions in 180 minutes (≈ 83 seconds per question). Candidates answering all 130 questions unlock <strong>12 bonus questions</strong> (3 each from Physics, Chemistry, Logical Reasoning, and Mathematics/Biology) for higher rank cutoffs!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {BITSAT_STRATEGY_DATA.pattern.table.map((row, idx) => (
            <div key={idx} className="bg-white/10 rounded-xl p-3.5 border border-white/10">
              <span className="text-[11px] font-bold text-blue-200 block">{row.part}</span>
              <span className="font-bold text-xs text-white block mb-1">{row.subject}</span>
              <span className="text-xl font-black text-amber-300">{row.marks} Marks</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">{row.questions} Qs</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Weightage at a Glance */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-black text-slate-900 mb-4">Top-Weightage Chapters at a Glance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {BITSAT_STRATEGY_DATA.topWeightage.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 text-xs">
              <div>
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">{item.subject}</span>
                <span className="font-bold text-slate-900">{item.chapter}</span>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-black text-xs shrink-0">
                {item.weightage}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Tables: Maths, Physics, Chemistry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Maths */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-purple-50 border-b border-slate-200">
            <h4 className="font-black text-sm text-purple-900">Mathematics (Kingmaker – 120 Marks)</h4>
            <span className="text-[11px] text-slate-500">Calculus & Circles dominate (~25% of section)</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-2.5">Chapter</th>
                  <th className="p-2.5">Weight</th>
                  <th className="p-2.5">Qs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {BITSAT_STRATEGY_DATA.mathsWeightage.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 text-slate-800 font-semibold">{row.chapter}</td>
                    <td className="p-2.5 text-purple-700 font-bold">{row.weightage}</td>
                    <td className="p-2.5 font-black text-slate-900">{row.questions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Physics */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-blue-50 border-b border-slate-200">
            <h4 className="font-black text-sm text-blue-900">Physics (90 Marks)</h4>
            <span className="text-[11px] text-slate-500">Electrostatics, Waves & Heat carry 35%+</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-2.5">Chapter</th>
                  <th className="p-2.5">Weight</th>
                  <th className="p-2.5">Qs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {BITSAT_STRATEGY_DATA.physicsWeightage.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 text-slate-800 font-semibold">{row.chapter}</td>
                    <td className="p-2.5 text-blue-700 font-bold">{row.weightage}</td>
                    <td className="p-2.5 font-black text-slate-900">{row.questions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chemistry */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-emerald-50 border-b border-slate-200">
            <h4 className="font-black text-sm text-emerald-900">Chemistry (90 Marks)</h4>
            <span className="text-[11px] text-slate-500">Direct NCERT lines save massive time</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="p-2.5">Chapter</th>
                  <th className="p-2.5">Weight</th>
                  <th className="p-2.5">Qs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {BITSAT_STRATEGY_DATA.chemistryWeightage.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 text-slate-800 font-semibold">{row.chapter}</td>
                    <td className="p-2.5 text-emerald-700 font-bold">{row.weightage}</td>
                    <td className="p-2.5 font-black text-slate-900">{row.questions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Part III: English & Logical Reasoning Weightage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <h4 className="font-black text-sm text-amber-900 mb-3">English Proficiency (10 Qs • 30 Marks)</h4>
          <div className="divide-y divide-slate-100">
            {BITSAT_STRATEGY_DATA.englishWeightage.map((item, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{item.topic}</span>
                <span className="font-black text-amber-700">{item.weightage} ({item.questions} Qs)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <h4 className="font-black text-sm text-indigo-900 mb-3">Logical Reasoning (20 Qs • 60 Marks)</h4>
          <div className="divide-y divide-slate-100">
            {BITSAT_STRATEGY_DATA.logicalReasoningWeightage.map((item, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{item.topic}</span>
                <span className="font-black text-indigo-700">{item.weightage} ({item.questions} Qs)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Preparation Strategies */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-black text-slate-900 mb-4">6 Pillars of BITSAT Cracking Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BITSAT_STRATEGY_DATA.strategies.map((strat) => (
            <div key={strat.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-black text-blue-700 block mb-1">
                Rule #{strat.id}: {strat.title}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{strat.advice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export type TabId = 
  | 'mocks' 
  | 'analytics' 
  | 'coach' 
  | 'planner' 
  | 'doubts' 
  | 'reports' 
  | 'students';

export interface TabInfo {
  id: TabId;
  label: string;
  badge?: string;
  iconName: string;
  headline: string;
  tagline: string;
  description: string;
  keyMetrics: { label: string; value: string; change?: string }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  targetExam: string;
  scoreOrRank: string;
  featureTag: 'All' | 'AI Coach' | 'PYQ Mocks' | 'Deep Analytics' | 'Study Planner' | 'Doubt Solver' | 'Score Reports';
  rating: number; // 1-5
  date: string;
  comment: string;
  upvotes: number;
  isVerified: boolean;
}

export interface MockTestPaper {
  id: string;
  examType: 'JEE Main' | 'JEE Advanced';
  year: number;
  shift: string;
  dateLabel: string;
  totalMarks: number;
  durationMinutes: number;
  totalQuestions: number;
  avgScore: number;
  solvedCount: number;
}

export interface MockQuestion {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  topic: string;
  difficulty: 'Moderate' | 'Hard' | 'Rank Decider';
  questionText: string;
  latexFormula?: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  weightage: string;
}

export interface VideoChapter {
  id: string;
  tabId: TabId;
  title: string;
  subtitle: string;
  timestamp: string;
  durationSec: number;
  highlights: string[];
  narrationScript: string;
}

export interface DoubtPreset {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  topic: string;
  question: string;
  aiResponse: {
    approach: string;
    stepByStep: string[];
    keyFormula: string;
    commonPitfall: string;
    relatedPYQ: string;
  };
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  targetYear: string;
  currentPercentile: number;
  predictedAIR: number;
  activeBatch: string;
  testsCompleted: number;
  status: 'Active Pro' | 'Trial' | 'Ranker Cohort';
}

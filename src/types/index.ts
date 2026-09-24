export type MainNavTab = 
  | 'test-series' 
  | 'sample-report' 
  | 'features' 
  | 'predictor' 
  | 'reviews';

export type ExamType = 'JEE Main' | 'JEE Advanced' | 'BITSAT';

export interface TestSeriesCard {
  id: string;
  exam: ExamType;
  title: string;
  tagline: string;
  pyqCountBadge: string;
  coverage: string;
  features: string[];
  totalMocks: string;
  duration: string;
  patternNotice: string;
  isPopular?: boolean;
}

export interface SampleQuestionAnalysis {
  qNum: number;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  topic: string;
  status: 'correct' | 'incorrect' | 'unattempted';
  timeSpentSec: number;
  idealTimeSec: number;
  isSillyMistake?: boolean;
  questionText: string;
  formulaOrLatex?: string;
  options: string[];
  studentAnswer?: number;
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Moderate' | 'Tough';
}

export interface SubjectReportMetric {
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  score: number;
  totalMarks: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  accuracy: number;
  timeSpentMin: number;
  percentile: number;
  strongTopics: string[];
  weakTopics: string[];
}

export interface QuizrrSampleReport {
  testTitle: string;
  dateAttempted: string;
  candidateName: string;
  totalScore: number;
  maxScore: number;
  percentile: number;
  predictedAIR: number;
  categoryRank: number;
  totalAttempted: number;
  totalQuestions: number;
  overallAccuracy: number;
  totalTimeMin: number;
  allottedTimeMin: number;
  negativeMarksLost: number;
  sillyMistakesCount: number;
  subjects: SubjectReportMetric[];
  questions: SampleQuestionAnalysis[];
}

export interface StudyFeature {
  id: 'concept-notes' | 'formula-sheet' | 'mindmap' | 'ai-analysis' | 'doubt-solver';
  title: string;
  tagline: string;
  shortDesc: string;
  badge: string;
  iconName: string;
  keyHighlights: string[];
  sampleData: any;
}

export interface StudentReview {
  id: string;
  name: string;
  airRank: string;
  percentile: string;
  examYear: string;
  targetInstitute: string;
  avatar: string;
  reviewText: string;
  verifiedBadge: boolean;
  highlightStat: string;
}

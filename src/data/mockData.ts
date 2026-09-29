import { 
  TestSeriesCard, 
  RankPilotSampleReport, 
  StudyFeature, 
  StudentReview,
  AppHighlight
} from '../types';

export const LOVABLE_PROJECT_URL = 'https://jee-rankpilot.lovable.app';

// ----------------------------------------------------
// TEST SERIES DATA (Exact User Specification)
// ----------------------------------------------------
export const TEST_SERIES_COLLECTION: TestSeriesCard[] = [
  {
    id: 'jee-main',
    exam: 'JEE Main',
    title: 'JEE Main Master Test Series (2026-2027)',
    tagline: '120+ Authentic NTA Shift Papers Converted Into Timed Full-Length Mocks',
    pyqCountBadge: '120+ JEE Main PYQs as Mocks',
    coverage: 'All Shifts from 2019 to 2026 (January & April Sessions)',
    isPopular: true,
    totalMocks: '120+ Full Tests + 100+ Chapter Tests',
    duration: '180 Minutes / 300 Marks',
    patternNotice: 'Exact NTA CBT User Interface with Section A (20 MCQs) & Section B (Numerical Value Questions)',
    features: [
      '120+ JEE Main PYQs as timed computer-based mocks with real NTA countdown timer',
      'Accurate percentile prediction based on 500,000+ actual student exam data points',
      'Shift-wise normalization factor calculation & difficulty-adjusted All India Rank',
      'Detailed video & text solutions for all Physics, Chemistry & Math questions',
      'Instant negative marking tracker & silly mistake penalty analysis'
    ]
  },
  {
    id: 'jee-advanced',
    exam: 'JEE Advanced',
    title: 'JEE Advanced Comprehensive Test Series',
    tagline: '40+ PYQ Mock Tests For Last 19 Years (Paper 1 & Paper 2) with Variable Marking Schemes',
    pyqCountBadge: '40+ JEE Advanced PYQs (Last 19 Years)',
    coverage: 'Complete Archive: 2007 to 2025 (Paper 1 & Paper 2)',
    isPopular: true,
    totalMocks: '40+ Full Mocks (Paper 1 + Paper 2)',
    duration: '360 Minutes (Two 3-Hour Sessions)',
    patternNotice: 'Realistic multi-correct (+4/-2), numerical decimals, matrix matching & paragraph comprehensions',
    features: [
      '40+ JEE Advanced PYQ mock tests spanning the last 19 years of IIT entrance history',
      'Paper 1 & Paper 2 authentic dual-shift simulation with strict partial marking logic',
      'Deep conceptual grading distinguishing foundational gaps from calculation fatigue',
      'Step-by-step alternative solution approaches (IITian shortcuts & calculus bypasses)',
      'Benchmark comparison against previous years IIT Bombay & IIT Delhi branch cutoffs'
    ]
  },
  {
    id: 'bitsat',
    exam: 'BITSAT',
    title: 'BITSAT Speed & Accuracy Test Series',
    tagline: '10+ Full BITSAT PYQ Mocks with 130 Questions + 12 Bonus Questions Engine',
    pyqCountBadge: '10+ BITSAT PYQs as Mocks',
    coverage: 'Latest Pattern: Physics, Chemistry, Math, English & Logical Reasoning',
    isPopular: false,
    totalMocks: '10+ Full Mocks + 25 Speed Sprints',
    duration: '180 Minutes / 390 Marks',
    patternNotice: 'Unique BITSAT bonus question unlock trigger when all 130 questions are attempted',
    features: [
      '10+ BITSAT full-length PYQ mocks modeled on the official BITS Pilani computer test pattern',
      'Comprehensive coverage of English Proficiency and Logical Reasoning sections',
      'Real-time speed index calculation: time per question benchmark (under 80 seconds target)',
      'Bonus question unlocking simulator for top scorers aiming for 330+ marks',
      'Branch prediction for BITS Pilani, Goa, and Hyderabad campuses'
    ]
  }
];

// ----------------------------------------------------
// AUTHENTIC RANKPILOT MOCK TEST REPORT (Matches User Screenshot)
// ----------------------------------------------------
export const RANKPILOT_SAMPLE_REPORT: RankPilotSampleReport = {
  testTitle: 'JEE Advanced 2026 — Paper 2',
  dateAttempted: '28/09/2026, 15:08:14',
  candidateName: 'RankPilot Admin',
  totalScore: 176,
  maxScore: 180,
  percentile: 99.98,
  predictedAIR: 24,
  categoryRank: 12,
  totalAttempted: 54,
  totalQuestions: 54,
  overallAccuracy: 98,
  totalTimeMin: 7, // 6m 45s
  allottedTimeMin: 180,
  subjects: [
    {
      subject: 'Mathematics',
      score: 56,
      totalMarks: 60,
      attempted: 18,
      correct: 17,
      incorrect: 1,
      unattempted: 0,
      accuracy: 94,
      timeSpentMin: 2,
      percentile: 99.92,
      strongTopics: ['Definite Integration', 'Vectors & 3D Geometry', 'Matrices & Determinants'],
      weakTopics: ['Complex Numbers (Roots of Unity)']
    },
    {
      subject: 'Physics',
      score: 60,
      totalMarks: 60,
      attempted: 18,
      correct: 18,
      incorrect: 0,
      unattempted: 0,
      accuracy: 100,
      timeSpentMin: 2,
      percentile: 100.0,
      strongTopics: ['Current Electricity', 'Rotational Dynamics', 'Electromagnetic Induction', 'Optics'],
      weakTopics: []
    },
    {
      subject: 'Chemistry',
      score: 60,
      totalMarks: 60,
      attempted: 18,
      correct: 18,
      incorrect: 0,
      unattempted: 0,
      accuracy: 100,
      timeSpentMin: 2,
      percentile: 100.0,
      strongTopics: ['Coordination Compounds', 'Thermodynamics', 'Organic Reaction Mechanisms'],
      weakTopics: []
    }
  ],
  questions: [
    {
      qNum: 1,
      subject: 'Physics',
      topic: 'Current Electricity',
      status: 'correct',
      timeSpentSec: 22,
      idealTimeSec: 120,
      questionText: 'In a potentiometer wire of length 100 cm, a balancing point is obtained at 60 cm for a cell of emf E1. When another cell of emf E2 is connected in series with E1 in the same direction, the balance point shifts to 80 cm. Find the ratio E1 : E2.',
      formulaOrLatex: 'E_1 \\propto l_1 \\quad \\text{and} \\quad (E_1 + E_2) \\propto l_2',
      options: ['3 : 1', '4 : 1', '2 : 1', '3 : 2'],
      studentAnswer: 0,
      correctAnswer: 0,
      difficulty: 'Easy',
      explanation: 'Since potentiometer balance length is directly proportional to potential drop across the wire: E1 = k * 60, and (E1 + E2) = k * 80. Thus (E1 + E2) / E1 = 80/60 = 4/3 => 1 + (E2/E1) = 4/3 => E2/E1 = 1/3 => E1 : E2 = 3 : 1.'
    },
    {
      qNum: 2,
      subject: 'Mathematics',
      topic: 'Complex Numbers',
      status: 'incorrect',
      timeSpentSec: 45,
      idealTimeSec: 150,
      isSillyMistake: true,
      questionText: 'Let z be a complex number such that |z - 2| + |z + 2| = 6. What is the maximum value of |z|?',
      formulaOrLatex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad \\text{with } 2a = 6, 2ae = 4',
      options: ['3', '√5', '2', '4'],
      studentAnswer: 1,
      correctAnswer: 0,
      difficulty: 'Moderate',
      explanation: 'The locus of z is an ellipse with foci at (±2, 0) and major axis 2a = 6 => a = 3, b = √(a² - c²) = √(9 - 4) = √5. The maximum distance of a point on the ellipse from the origin is the semi-major axis a = 3.'
    },
    {
      qNum: 3,
      subject: 'Chemistry',
      topic: 'Coordination Compounds',
      status: 'correct',
      timeSpentSec: 20,
      idealTimeSec: 60,
      questionText: 'Which of the following complex ions is diamagnetic and possesses an inner orbital octahedral hybridization (d²sp³)?',
      formulaOrLatex: '[\\text{Co}(\\text{NH}_3)_6]^{3+} \\quad (3d^6, t_{2g}^6 e_g^0)',
      options: ['[Co(NH3)6]³⁺', '[CoF6]³⁻', '[Ni(NH3)6]²⁺', '[Fe(H2O)6]³⁺'],
      studentAnswer: 0,
      correctAnswer: 0,
      difficulty: 'Easy',
      explanation: 'Co³⁺ has configuration 3d⁶. NH₃ behaves as a strong field ligand for Co³⁺, causing pairing of electrons in t2g orbitals giving t2g⁶ eg⁰ (0 unpaired electrons = diamagnetic). Hybridization is d²sp³.'
    }
  ],
  lastFiveTestsSummary: {
    testNames: ['JEE Adv Mock #1', 'JEE Main Shift 3', 'JEE Adv Paper 1', 'JEE Main Shift 1', 'JEE Adv 2026 Paper 2'],
    scores: [142, 238, 158, 252, 176],
    accuracies: [86, 92, 89, 94, 98],
    scoreGrowth: '+34 Marks (+12% Accuracy)',
    weakAreasIdentified: ['Complex Numbers (Hyperbolic locus)', 'Rotational Toppling Conditions'],
    strongAreasIdentified: ['Calculus & Differential Equations', 'Thermodynamics & Kinetics', 'Electromagnetism']
  }
};

// ----------------------------------------------------
// ABOUT SECTION: COMPREHENSIVE APP HIGHLIGHTS
// ----------------------------------------------------
export const APP_FEATURE_HIGHLIGHTS: AppHighlight[] = [
  {
    id: 'jee-mains',
    title: '120+ JEE Mains Mocks',
    badge: 'NTA CBT Environment',
    subtitle: 'Every shift from 2019 to 2026 converted to real mocks',
    description: 'Experience real exam hall conditions with timer, Section A (MCQ) & Section B (Numerical Value Questions), negative marking, and difficulty-normalized percentile calculation.',
    icon: 'FileCheck2',
    gradient: 'from-blue-600 to-indigo-600',
    keyPoints: [
      '120+ Full-length shift papers with official answer keys',
      'Realistic computer test interface with question palette',
      'Instant percentile calibrated against 500,000+ candidates'
    ]
  },
  {
    id: 'jee-advanced',
    title: '40+ JEE Advanced Mocks',
    badge: '19 Years of PYQs',
    subtitle: 'Complete 2007 - 2025 Paper 1 & Paper 2 Archive',
    description: 'Replicates authentic variable marking schemes used by IITs: partial marking, multi-correct, integer-type, paragraph comprehension, and matrix matching.',
    icon: 'Award',
    gradient: 'from-indigo-600 to-purple-600',
    keyPoints: [
      '19 consecutive years of Paper 1 and Paper 2 solved tests',
      'Strict multi-correct partial and negative marking logic',
      'Benchmark comparison against previous IIT Bombay/Delhi cutoffs'
    ]
  },
  {
    id: 'bitsat',
    title: '10+ BITSAT Mocks',
    badge: '130 Qs + Bonus Engine',
    subtitle: 'Speed & Accuracy Engine for BITS Pilani, Goa & Hyderabad',
    description: 'Full-length 130-question speed tests covering Physics, Chemistry, Math, English Proficiency, and Logical Reasoning with the official 12 bonus question unlocking simulator.',
    icon: 'Zap',
    gradient: 'from-emerald-600 to-teal-600',
    keyPoints: [
      '10+ Full-length speed mocks matching BITS Pilani pattern',
      '12 Bonus questions trigger when all 130 questions are attempted',
      'Speed index: time-per-question tracker under 80 seconds target'
    ]
  },
  {
    id: 'chapter-tests',
    title: '100+ Chapter Tests & Timings',
    badge: 'Customizable Speed',
    subtitle: '15m Sprints, 30m Checkpoints & 60m Deep Dives',
    description: 'Master every single chapter with concept notes, formula sheets, mindmaps, solved examples, and deep AI chapter analytics before taking full mock papers.',
    icon: 'Layers',
    gradient: 'from-cyan-600 to-blue-600',
    keyPoints: [
      '100+ Chapter-wise tests with customizable timing modes',
      'Instant Concept Notes, Formula Cheat Sheets & Mindmaps per chapter',
      'Step-by-step solved examples and chapter weightage breakdown'
    ]
  },
  {
    id: 'multilingual-doubts',
    title: 'Multilingual AI Doubt Solver',
    badge: '5 Indian Languages',
    subtitle: 'Tamil • English • Hindi • Telugu • Kannada',
    description: 'No language barrier in your IIT dream! Snap or type any tricky JEE PCM doubt and receive instant, mathematically rigorous derivations explained in your mother tongue.',
    icon: 'Languages',
    gradient: 'from-amber-600 to-rose-600',
    keyPoints: [
      'Available in Tamil (தமிழ்), English, Hindi (हिन्दी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ)',
      'Sub-second AI response with LaTeX formulas & diagrams',
      'Recommends 3 similar PYQ practice problems to cement the concept'
    ]
  },
  {
    id: 'dual-reports',
    title: 'Individual & 5-Test Consolidated Reports',
    badge: 'Diagnostic Intelligence',
    subtitle: 'Track your growth and eliminate repeated mistakes',
    description: 'Receive an instant report after every mock test PLUS a consolidated analytical report for your last five tests to spot recurring error patterns and measure real percentile growth.',
    icon: 'BarChart3',
    gradient: 'from-purple-600 to-pink-600',
    keyPoints: [
      'Instant post-test score card with subject accuracy and time spent',
      'Consolidated 5-Test Diagnostic Report tracking strength/weakness trends',
      'Isolates silly calculation errors from genuine concept gaps'
    ]
  },
  {
    id: 'ai-study-plans',
    title: 'AI Adaptive Study Plans',
    badge: 'Personalized Timetable',
    subtitle: 'Dynamically self-adjusts to your daily progress',
    description: 'No more rigid schedules. RankPilot AI builds an adaptive daily sprint roadmap around your school, coaching hours, and weak chapters, automatically recalibrating when you miss a session.',
    icon: 'Calendar',
    gradient: 'from-blue-700 to-sky-600',
    keyPoints: [
      'Tailored to your target score, coaching timings & capacity',
      'Dynamic backlog recovery sprints for high-weightage topics',
      'Spaced repetition algorithm to guarantee long-term retention'
    ]
  },
  {
    id: 'leaderboard-helpdesk',
    title: 'All-India Leaderboard & 24/7 Helpdesk',
    badge: 'Community & Support',
    subtitle: 'Benchmark against top rankers with dedicated mentor support',
    description: 'Compete on the live national leaderboard alongside 150,000+ serious aspirants and access our dedicated helpdesk whenever you need guidance or technical help.',
    icon: 'Users',
    gradient: 'from-emerald-700 to-blue-700',
    keyPoints: [
      'Live All-India percentile leaderboards updated after every mock',
      'Subject pods with top 1% peer rankers',
      '24/7 dedicated helpdesk for student queries and test guidance'
    ]
  }
];

// ----------------------------------------------------
// STUDY FEATURES DATA
// ----------------------------------------------------
export const STUDY_FEATURES_LIST: StudyFeature[] = [
  {
    id: 'concept-notes',
    title: 'Concept Notes',
    tagline: 'High-Yield Theory Summaries Written By Top 100 IITians',
    shortDesc: 'Stop drowning in 800-page textbooks. Master core derivations, sign conventions, and exceptional reaction trends in crisp chapter modules.',
    badge: 'Revision Master',
    iconName: 'BookOpen',
    keyHighlights: [
      'Comprehensive coverage of all 92 chapters across Physics, Chemistry & Math',
      'Highlighted NCERT edge cases & JEE Advanced special traps',
      'Step-by-step graphical derivations with visual intuition'
    ],
    sampleData: {
      chapters: [
        { name: 'Rotational Motion', subject: 'Physics', pages: '6 Pages', readTime: '15 mins', keyTopics: ['Parallel Axis Theorem', 'Rolling Without Slipping', 'Toppling Condition'] },
        { name: 'Coordination Chemistry', subject: 'Chemistry', pages: '5 Pages', readTime: '12 mins', keyTopics: ['Crystal Field Splitting (CFT)', 'Isomerism Rules', 'Jahn-Teller Distortion'] },
        { name: 'Definite Integration', subject: 'Math', pages: '4 Pages', readTime: '10 mins', keyTopics: ['King & Queen Properties', 'Leibnitz Rule of Differentiation', 'Wallis Formula'] }
      ]
    }
  },
  {
    id: 'formula-sheet',
    title: 'Formula Sheets',
    tagline: 'Instant Quick-Recall Formula Cheat Sheets for High-Speed Solving',
    shortDesc: 'Every formula, standard integral, dimension, physical constant, and chemical reaction condition organized logically for last-minute revision.',
    badge: 'Exam Morning Must-Have',
    iconName: 'FileText',
    keyHighlights: [
      'Color-coded formula boxes highlighting SI units & dimension checks',
      'Special "Do Not Confuse" warning markers for frequently botched equations',
      'Printable high-resolution sheets designed for active recall practice'
    ],
    sampleData: {
      sheets: [
        { subject: 'Physics', title: 'Mechanics & Electrodynamics Cheat Sheet', equationsCount: 148, preview: 'F = dp/dt • B = μ₀I/(2πr) • V = IR • E = -dV/dr' },
        { subject: 'Chemistry', title: 'Physical & Inorganic Reaction Master-Table', equationsCount: 124, preview: 'ΔG° = -nFE° • k = A e^(-Ea/RT) • pH = pKa + log([Salt]/[Acid])' },
        { subject: 'Mathematics', title: 'Calculus, Algebra & Trigonometry Identity Sheet', equationsCount: 186, preview: '∫ sec(x)dx = ln|sec x + tan x| • cos(2x) = 1 - 2sin²x • det(adj A) = |A|^(n-1)' }
      ]
    }
  },
  {
    id: 'mindmap',
    title: 'Mind Maps',
    tagline: 'Visual Flowcharts & Memory Trees Connecting Concepts Seamlessly',
    shortDesc: 'Transform scattered formulas into structured mental neural networks. Connect related formulas and mechanisms across chapters for instant recall.',
    badge: 'Memory Booster',
    iconName: 'Network',
    keyHighlights: [
      'Visual hierarchical branch structures from chapter root to sub-concepts',
      'Color-linked prerequisites so you know what foundational theorem is needed',
      'Interactive zoom & node expansion with linked PYQ examples'
    ],
    sampleData: {
      featuredMap: {
        title: 'Electromagnetism Master Mindmap',
        root: 'Maxwell & Lorentz Core',
        branches: [
          { name: 'Electrostatics', children: ['Gauss Law', 'Electric Potential', 'Dipole Moments', 'Conductor Equipotentials'] },
          { name: 'Magnetostatics', children: ['Biot-Savart Law', 'Ampere Circuital', 'Solenoids & Toroids', 'Cyclotron Motion'] },
          { name: 'Electromagnetic Induction', children: ['Faraday Law', 'Lenz Law Direction', 'Motional EMF', 'Self & Mutual Inductance'] }
        ]
      }
    }
  },
  {
    id: 'ai-analysis',
    title: 'AI Analysis',
    tagline: 'Deep Diagnostic Engine Decoding Every Second & Silly Mistake',
    shortDesc: 'Calibrated against 500,000+ real student papers to detect why you lose marks. Separates lack of speed from conceptual blind spots and predicts true AIR.',
    badge: 'Rank Decider',
    iconName: 'BarChart2',
    keyHighlights: [
      'Silly mistake classifier: isolates sign errors, calculation rushes & misread questions',
      'Time-management speed quadrant: flags "time-trap" questions where you spent >3.5 minutes',
      'Predictive AIR calibrated using NTA shift normalization statistics'
    ],
    sampleData: {
      metrics: [
        { label: 'Marks Recoverable from Silly Mistakes', value: '+24 to +36 Marks' },
        { label: 'Time Saved per Mock', value: '18.4 Minutes' },
        { label: 'Accuracy Improvement Rate', value: '+14.2% in 3 Weeks' }
      ]
    }
  },
  {
    id: 'doubt-solver',
    title: 'Doubt Solver',
    tagline: 'Multilingual 24/7 Instant AI Solver (Tamil, English, Hindi, Telugu, Kannada)',
    shortDesc: 'Stuck on an Irodov question or tricky JEE Advanced calculus proof at 2 AM? Get instant step-by-step solutions with diagrams in your preferred Indian language.',
    badge: '24/7 Multilingual AI',
    iconName: 'Sparkles',
    keyHighlights: [
      'Sub-second response time with beautiful LaTeX mathematical notation',
      'Available in Tamil (தமிழ்), English, Hindi (हिन्दी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ)',
      'Includes alternative shortcut methods and underlying NCERT/IIT principles'
    ],
    sampleData: {
      exampleQuery: 'Find current through 2Ω resistor in Wheatstone bridge with galvanometer...',
      solutionPreview: 'Step 1: Check bridge balance condition (R1/R2 = R3/R4). Since 4/8 = 5/10 = 0.5, the bridge is balanced. Thus zero current flows through the central galvanometer branch...'
    }
  }
];

// ----------------------------------------------------
// WALL OF FAME REVIEWS
// ----------------------------------------------------
export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    name: 'Shreyas Mishra',
    airRank: 'AIR 14',
    percentile: '100.00 %ile',
    examYear: 'JEE Main & Adv',
    targetInstitute: 'IIT Bombay CSE',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    reviewText: 'The authentic NTA CBT simulator and the deep post-test analysis report showed me exactly where I was losing 15-20 marks on silly calculation rush. Jumping from 99.2 to 100 percentile was possible because of the 120+ shift mocks!',
    verifiedBadge: true,
    highlightStat: 'Solved 45 Full Mocks'
  },
  {
    id: 'rev-2',
    name: 'Rohan Deshmukh',
    airRank: 'AIR 78',
    percentile: '99.98 %ile',
    examYear: 'JEE Advanced',
    targetInstitute: 'IIT Delhi Electrical',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    reviewText: 'The 40+ JEE Advanced mocks covering the last 19 years are unmatched. The variable marking scheme with negative partial marks matched the real IIT paper to perfection.',
    verifiedBadge: true,
    highlightStat: '+38 Marks Improvement'
  },
  {
    id: 'rev-3',
    name: 'Ananya Singhal',
    airRank: 'Score: 352/390',
    percentile: 'BITSAT Rank 42',
    examYear: 'BITSAT',
    targetInstitute: 'BITS Pilani CS',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    reviewText: 'The 10+ BITSAT mocks with the bonus question engine taught me how to manage time under 130 rapid-fire questions. Formula sheets and Mind maps were my daily morning ritual.',
    verifiedBadge: true,
    highlightStat: 'Top 0.1% in BITSAT'
  }
];

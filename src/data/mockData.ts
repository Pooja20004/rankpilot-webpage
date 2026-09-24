import { 
  TestSeriesCard, 
  QuizrrSampleReport, 
  StudyFeature, 
  StudentReview 
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
    totalMocks: '120+ Full Tests + 90 Chapter Tests',
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
    tagline: '6+ Full BITSAT PYQ Mocks with 130 Questions + 12 Bonus Questions Engine',
    pyqCountBadge: '6+ BITSAT PYQs as Mocks',
    coverage: 'Latest Pattern: Physics, Chemistry, Math, English & Logical Reasoning',
    isPopular: false,
    totalMocks: '6+ Full Mocks + 20 Speed Sprints',
    duration: '180 Minutes / 390 Marks',
    patternNotice: 'Unique BITSAT bonus question unlock trigger when all 130 questions are attempted',
    features: [
      '6+ BITSAT full-length PYQ mocks modeled on the official BITS Pilani computer test pattern',
      'Comprehensive coverage of English Proficiency and Logical Reasoning sections',
      'Real-time speed index calculation: time per question benchmark (under 80 seconds target)',
      'Bonus question unlocking simulator for top scorers aiming for 330+ marks',
      'Branch prediction for BITS Pilani, Goa, and Hyderabad campuses'
    ]
  }
];

// ----------------------------------------------------
// SAMPLE REPORT DATA (Matching app.quizrr.in/analysis-demo)
// ----------------------------------------------------
export const QUIZRR_SAMPLE_REPORT: QuizrrSampleReport = {
  testTitle: 'JEE Main 2025 Jan Session Shift-1 Full Mock Paper #12',
  dateAttempted: '18 September 2026',
  candidateName: 'Aditya Sharma',
  totalScore: 242,
  maxScore: 300,
  percentile: 99.64,
  predictedAIR: 842,
  categoryRank: 618,
  totalAttempted: 68,
  totalQuestions: 75,
  overallAccuracy: 91.2,
  totalTimeMin: 164,
  allottedTimeMin: 180,
  negativeMarksLost: 6,
  sillyMistakesCount: 2,
  subjects: [
    {
      subject: 'Physics',
      score: 85,
      totalMarks: 100,
      attempted: 23,
      correct: 22,
      incorrect: 1,
      unattempted: 2,
      accuracy: 95.7,
      timeSpentMin: 52,
      percentile: 99.78,
      strongTopics: ['Current Electricity', 'Electrostatics', 'Kinematics', 'Optics'],
      weakTopics: ['Rotational Dynamics']
    },
    {
      subject: 'Chemistry',
      score: 81,
      totalMarks: 100,
      attempted: 24,
      correct: 21,
      incorrect: 3,
      unattempted: 1,
      accuracy: 87.5,
      timeSpentMin: 44,
      percentile: 99.31,
      strongTopics: ['Coordination Compounds', 'Thermodynamics', 'Chemical Bonding'],
      weakTopics: ['Aldehydes & Ketones (Organic)']
    },
    {
      subject: 'Mathematics',
      score: 76,
      totalMarks: 100,
      attempted: 21,
      correct: 19,
      incorrect: 2,
      unattempted: 4,
      accuracy: 90.5,
      timeSpentMin: 68,
      percentile: 99.82,
      strongTopics: ['Definite Integration', 'Vectors & 3D', 'Matrices & Determinants'],
      weakTopics: ['Conic Sections (Hyperbola)']
    }
  ],
  questions: [
    {
      qNum: 1,
      subject: 'Physics',
      topic: 'Current Electricity',
      status: 'correct',
      timeSpentSec: 92,
      idealTimeSec: 120,
      questionText: 'In a potentiometer wire of length 100 cm, a balancing point is obtained at 60 cm for a cell of emf E1. When another cell of emf E2 is connected in series with E1 in the same direction, the balance point shifts to 80 cm. Find the ratio E1 : E2.',
      formulaOrLatex: 'E_1 \\propto l_1 \\quad \\text{and} \\quad (E_1 + E_2) \\propto l_2',
      options: ['3 : 1', '4 : 1', '2 : 1', '3 : 2'],
      studentAnswer: 0,
      correctAnswer: 0,
      difficulty: 'Easy',
      explanation: 'Since potentiometer balance length is directly proportional to potential drop across the wire: E1 = k * 60, and (E1 + E2) = k * 80. Thus (E1 + E2) / E1 = 80/60 = 4/3. This yields 1 + (E2/E1) = 4/3 => E2/E1 = 1/3, which gives E1 : E2 = 3 : 1.'
    },
    {
      qNum: 2,
      subject: 'Physics',
      topic: 'Rotational Dynamics',
      status: 'incorrect',
      timeSpentSec: 210,
      idealTimeSec: 150,
      isSillyMistake: true,
      questionText: 'A solid sphere of mass M and radius R rolls without slipping down an inclined plane of inclination θ. What is the ratio of rotational kinetic energy to the total kinetic energy of the rolling sphere?',
      formulaOrLatex: 'K_{\\text{rot}} = \\frac{1}{2} I \\omega^2, \\quad K_{\\text{total}} = \\frac{1}{2} M v^2 + \\frac{1}{2} I \\omega^2',
      options: ['2/7', '2/5', '5/7', '1/2'],
      studentAnswer: 1, // Student selected 2/5 (which is I/(MR^2), a classic silly mistake!)
      correctAnswer: 0,
      difficulty: 'Moderate',
      explanation: 'For pure rolling without slipping, v = ωR. Rotational KE = (1/2) * (2/5 MR^2) * ω^2 = (1/5) M v^2. Translational KE = (1/2) M v^2. Total KE = (1/5 + 1/2) M v^2 = (7/10) M v^2. Ratio K_rot / K_total = (1/5) / (7/10) = 2/7. You selected 2/5 by taking K_rot / K_trans instead of total KE!'
    },
    {
      qNum: 3,
      subject: 'Physics',
      topic: 'Electrostatics',
      status: 'correct',
      timeSpentSec: 105,
      idealTimeSec: 110,
      questionText: 'Two concentric conducting spherical shells of radii r and 2r carry charges +Q and -2Q respectively. What is the potential at a distance 1.5r from the common center?',
      formulaOrLatex: 'V = \\frac{1}{4\\pi \\epsilon_0}\\left(\\frac{Q_{\\text{inner}}}{r\'} + \\frac{Q_{\\text{outer}}}{R_{\\text{outer}}}\\right)',
      options: ['-Q / (12πε₀r)', '+Q / (6πε₀r)', '-Q / (6πε₀r)', 'Zero'],
      studentAnswer: 0,
      correctAnswer: 0,
      difficulty: 'Moderate',
      explanation: 'At r\' = 1.5r: The point lies outside the inner shell (radius r) and inside the outer shell (radius 2r). Thus V = (1/4πε₀) * [Q / 1.5r + (-2Q) / 2r] = (1/4πε₀) * [2Q/3r - Q/r] = -Q / (12πε₀r).'
    },
    {
      qNum: 4,
      subject: 'Chemistry',
      topic: 'Coordination Compounds',
      status: 'correct',
      timeSpentSec: 64,
      idealTimeSec: 75,
      questionText: 'Which of the following complex ions is diamagnetic and possesses an inner orbital octahedral hybridization (d²sp³)?',
      formulaOrLatex: '[\\text{Co}(\\text{NH}_3)_6]^{3+} \\quad (3d^6, t_{2g}^6 e_g^0)',
      options: ['[Co(NH3)6]³⁺', '[CoF6]³⁻', '[Ni(NH3)6]²⁺', '[Fe(H2O)6]³⁺'],
      studentAnswer: 0,
      correctAnswer: 0,
      difficulty: 'Easy',
      explanation: 'Co³⁺ has configuration 3d⁶. NH₃ behaves as a strong field ligand for Co³⁺, causing pairing of electrons in t2g orbitals giving t2g⁶ eg⁰ (0 unpaired electrons = diamagnetic). Hybridization is d²sp³.'
    },
    {
      qNum: 5,
      subject: 'Chemistry',
      topic: 'Organic Reaction Mechanism',
      status: 'incorrect',
      timeSpentSec: 140,
      idealTimeSec: 90,
      isSillyMistake: true,
      questionText: 'Benzaldehyde when treated with concentrated NaOH solution undergoes Cannizzaro reaction. What are the reaction products?',
      formulaOrLatex: '2 \\text{C}_6\\text{H}_5\\text{CHO} \\xrightarrow{\\text{conc. NaOH}} \\text{C}_6\\text{H}_5\\text{COONa} + \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}',
      options: ['Sodium benzoate + Benzyl alcohol', 'Benzoic acid + Phenol', 'Sodium phenoxide + Toluene', 'Benzophenone + Methanol'],
      studentAnswer: 1, // Student forgot the salt formation in alkaline medium
      correctAnswer: 0,
      difficulty: 'Moderate',
      explanation: 'Since the reaction takes place in strongly basic alkaline medium (concentrated NaOH), the acid is isolated as its carboxylate salt (Sodium benzoate) along with the reduced alcohol (Benzyl alcohol).'
    },
    {
      qNum: 6,
      subject: 'Mathematics',
      topic: 'Definite Integration',
      status: 'correct',
      timeSpentSec: 145,
      idealTimeSec: 180,
      questionText: 'Evaluate the definite integral: ∫ from 0 to π/2 of [sin³(x) / (sin³(x) + cos³(x))] dx.',
      formulaOrLatex: 'I = \\int_0^a f(x)dx = \\int_0^a f(a-x)dx \\implies 2I = \\int_0^{\\pi/2} 1 dx = \\frac{\\pi}{2}',
      options: ['π/4', 'π/2', '1', 'π/8'],
      studentAnswer: 0,
      correctAnswer: 0,
      difficulty: 'Easy',
      explanation: 'Applying King’s property f(x) + f(π/2 - x) = 1. Integrating 1 from 0 to π/2 yields π/2, so 2I = π/2 => I = π/4.'
    },
    {
      qNum: 7,
      subject: 'Mathematics',
      topic: 'Conic Sections (Hyperbola)',
      status: 'unattempted',
      timeSpentSec: 35,
      idealTimeSec: 180,
      questionText: 'A normal to the hyperbola x²/a² - y²/b² = 1 meets the axes in M and N and lines MP and NP are drawn perpendicular to the axes meeting at P. Prove the locus of P.',
      formulaOrLatex: '\\frac{a^2 x}{\\sec\\theta} + \\frac{b^2 y}{\\tan\\theta} = a^2 + b^2',
      options: ['a²x² - b²y² = (a² + b²)²', 'a⁶/x² - b⁶/y² = (a² + b²)²', 'x²/a⁴ + y²/b⁴ = 1', 'a⁴/x² - b⁴/y² = 1'],
      studentAnswer: undefined,
      correctAnswer: 1,
      difficulty: 'Tough',
      explanation: 'Equation of normal at (a sec θ, b tan θ) is ax cos θ + by cot θ = a² + b². Coordinates of M (y=0) and N (x=0) give P = (x_M, y_N). Eliminating θ yields a⁶/x² - b⁶/y² = (a² + b²)².'
    }
  ]
};

// ----------------------------------------------------
// STUDY FEATURES DATA (Exact User Specification)
// Concept notes, formula sheet, mindmap, ai analysis, doubt solver
// ----------------------------------------------------
export const STUDY_FEATURES_LIST: StudyFeature[] = [
  {
    id: 'concept-notes',
    title: 'Concept Notes',
    tagline: 'High-Yield Theory Summaries Written By Top 100 IITians',
    shortDesc: 'Stop drowning in 800-page textbooks. Master core derivations, sign conventions, and exceptional reaction trends in crisp 4-page chapter modules.',
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
    tagline: 'Deep 15-Page Diagnostic Engine Decoding Every Second & Silly Mistake',
    shortDesc: 'Calibrated against 500,000+ real student papers to detect why you lose marks. Separates lack of speed from conceptual blind spots and predicts true AIR.',
    badge: 'Rank Decider',
    iconName: 'BarChart2',
    keyHighlights: [
      'Silly mistake classifier: isolates signs errors, calculation rushes & misread questions',
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
    tagline: '24/7 Instant Step-by-Step AI Solver for Physics, Chemistry & Math',
    shortDesc: 'Stuck on an Irodov question or tricky JEE Advanced calculus proof at 2 AM? Get instant, mathematically rigorous step-by-step solutions with diagrams.',
    badge: '24/7 Instant AI',
    iconName: 'Sparkles',
    keyHighlights: [
      'Sub-second response time with beautiful LaTeX mathematical notation',
      'Includes alternative shortcut methods and underlying NCERT/IIT principles',
      'Recommends 3 similar PYQ practice questions to cement the concept'
    ],
    sampleData: {
      exampleQuery: 'Find current through 2Ω resistor in Wheatstone bridge with galvanometer...',
      solutionPreview: 'Step 1: Check bridge balance condition (R1/R2 = R3/R4). Since 4/8 = 5/10 = 0.5, the bridge is balanced. Thus zero current flows through the central galvanometer branch...'
    }
  }
];

// ----------------------------------------------------
// WALL OF FAME REVIEWS (MathonGo Style)
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
    reviewText: 'The 40+ JEE Advanced mocks covering the last 19 years are unmatched. The variable marking scheme with negative partial marks matched the real IIT Madras paper to perfection.',
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
    reviewText: 'The 6+ BITSAT mocks with the bonus question engine taught me how to manage time under 130 rapid-fire questions. Formula sheets and Mind maps were my daily morning ritual.',
    verifiedBadge: true,
    highlightStat: 'Top 0.1% in BITSAT'
  }
];

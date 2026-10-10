// ============================================================================
// EXAM SYLLABUS & CRACKING STRATEGIES DATA (JEE MAIN, JEE ADVANCED, BITSAT 2027)
// ============================================================================

export interface ExamResourceTab {
  id: string;
  name: string;
  shortName: string;
  exam: 'jee-main' | 'jee-advanced' | 'bitsat';
  category: 'syllabus' | 'strategy';
  badge: string;
  description: string;
}

export const EXAM_RESOURCE_TABS: ExamResourceTab[] = [
  // Syllabus Tabs
  {
    id: 'jee-main-syllabus',
    name: 'JEE Main 2027 Syllabus',
    shortName: 'JEE Main Syllabus',
    exam: 'jee-main',
    category: 'syllabus',
    badge: 'Paper 1 (B.E./B.Tech)',
    description: 'Latest official 54 units and 196 sub-topics aligned with rationalised NCERT.'
  },
  {
    id: 'jee-advanced-syllabus',
    name: 'JEE Advanced 2027 Syllabus',
    shortName: 'JEE Adv Syllabus',
    exam: 'jee-advanced',
    category: 'syllabus',
    badge: 'IIT Organised (Paper 1 & 2)',
    description: 'Comprehensive 68 chapters, 198 sub-topics and topics beyond JEE Main.'
  },
  {
    id: 'bitsat-syllabus',
    name: 'BITSAT 2027 Syllabus',
    shortName: 'BITSAT Syllabus',
    exam: 'bitsat',
    category: 'syllabus',
    badge: 'BITS Pilani CBT Pattern',
    description: 'Full syllabus for Physics, Chemistry, Maths/Bio, English & Logical Reasoning.'
  },

  // Weightage & Strategies Tabs
  {
    id: 'jee-main-strategy',
    name: 'JEE Main Chapter-wise Weightage & 99%ile Strategy',
    shortName: 'JEE Main Strategy',
    exam: 'jee-main',
    category: 'strategy',
    badge: '99 Percentile Blueprint',
    description: 'Last 5 years (2022–2026) shift trends, subject targets, 3-round exam plan & checklist.'
  },
  {
    id: 'jee-advanced-strategy',
    name: 'JEE Advanced Chapter-wise Weightage & Study Strategy',
    shortName: 'JEE Adv Strategy',
    exam: 'jee-advanced',
    category: 'strategy',
    badge: 'Historical & 2026 Analysis',
    description: 'Subject summaries, 2008–2023 historical weightage, 3-tier study plan & timetables.'
  },
  {
    id: 'bitsat-strategy',
    name: 'BITSAT Chapter-wise Weightage & Preparation Strategy',
    shortName: 'BITSAT Strategy',
    exam: 'bitsat',
    category: 'strategy',
    badge: 'Speed & Bonus Qs Strategy',
    description: '130 questions pattern, bonus questions hack, kingmaker Maths and high-yield chapters.'
  }
];

// ----------------------------------------------------------------------------
// 1. BITSAT 2027 WEIGHTAGE & PREPARATION STRATEGY DATA
// ----------------------------------------------------------------------------
export const BITSAT_STRATEGY_DATA = {
  title: 'BITSAT 2027 Chapter-wise Weightage & Preparation Strategy',
  subtitle: 'Physics • Chemistry • Mathematics • English Proficiency • Logical Reasoning',
  pattern: {
    totalQuestions: 130,
    totalMarks: 390,
    duration: '180 Minutes (3 Hours)',
    marking: '+3 for Correct, -1 for Incorrect, 0 for Unattempted',
    bonusInfo: 'Candidates answering all 130 questions unlock 12 bonus questions (3 each from Physics, Chemistry, Logical Reasoning, and Maths/Biology).',
    table: [
      { part: 'Part I', subject: 'Physics', questions: 30, marks: 90 },
      { part: 'Part II', subject: 'Chemistry', questions: 30, marks: 90 },
      { part: 'Part III', subject: '(a) English Proficiency & (b) Logical Reasoning', questions: '10 + 20 = 30', marks: 90 },
      { part: 'Part IV', subject: 'Mathematics / Biology (for B.Pharm)', questions: 40, marks: 120 },
    ]
  },
  topWeightage: [
    { subject: 'Mathematics', chapter: 'Differential & Integral Calculus (combined)', weightage: '~12–15%' },
    { subject: 'Mathematics', chapter: 'Circles', weightage: '~11%' },
    { subject: 'Physics', chapter: 'Electrostatics & Current Electricity (combined)', weightage: '~10–12%' },
    { subject: 'Physics', chapter: 'Wave Motion & Wave Optics (combined)', weightage: '~10–11%' },
    { subject: 'Physics', chapter: 'Heat & Thermodynamics', weightage: '~10%' },
    { subject: 'Physics', chapter: 'Magnetic Effect of Current & Magnetism', weightage: '~9–10%' },
    { subject: 'Chemistry', chapter: 'Organic Chemistry – Hydrocarbons, Alcohols, Aldehydes', weightage: '~15–20%' },
    { subject: 'Chemistry', chapter: 'Chemical Bonding', weightage: '~10%' },
    { subject: 'Logical Reasoning', chapter: 'Figure Formation & Analysis', weightage: '~40%' },
    { subject: 'Logical Reasoning', chapter: 'Figure Matrix', weightage: '~40%' },
    { subject: 'English', chapter: 'Vocabulary (Synonyms & Antonyms)', weightage: '~30%' },
    { subject: 'English', chapter: 'Sentence Completion & One Word Substitution', weightage: '~30%' },
  ],
  mathsWeightage: [
    { chapter: 'Differential & Integral Calculus (combined)', weightage: '~12–15%', questions: '5', marks: '15', priority: 'High' },
    { chapter: 'Circles', weightage: '~11%', questions: '4–5', marks: '12–15', priority: 'High' },
    { chapter: 'Straight Lines', weightage: '~6–7%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'Vectors', weightage: '~6–7%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'Probability & Statistics', weightage: '~3–5%', questions: '2', marks: '6', priority: 'High' },
    { chapter: 'Matrices and Determinants', weightage: '~3–4%', questions: '1', marks: '3', priority: 'High' },
    { chapter: 'Complex Numbers', weightage: '~4%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Binomial Theorem', weightage: '~4%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Set Theory & Relations', weightage: '~4%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Trigonometry', weightage: '~3%', questions: '1', marks: '3', priority: 'Moderate / Low' },
  ],
  physicsWeightage: [
    { chapter: 'Electrostatics & Current Electricity (combined)', weightage: '~10–12%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'Wave Motion & Wave Optics (combined)', weightage: '~10–11%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'Heat & Thermodynamics', weightage: '~10%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'Magnetic Effect of Current & Magnetism', weightage: '~9–10%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'Rotational Motion', weightage: '~5–6%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Simple Harmonic Motion (SHM)', weightage: '~5–6%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Modern Physics (Atoms, Nuclei, Semiconductors)', weightage: '~5–6%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Units, Dimensions & Errors', weightage: '~3–4%', questions: '1', marks: '3', priority: 'Moderate / Low' },
    { chapter: 'Gravitation', weightage: '~3–4%', questions: '1', marks: '3', priority: 'Moderate / Low' },
  ],
  chemistryWeightage: [
    { chapter: 'Organic Chemistry – Hydrocarbons, Alcohols, Aldehydes (combined)', weightage: '~15–20%', questions: '5', marks: '15', priority: 'High' },
    { chapter: 'Chemical Bonding', weightage: '~10%', questions: '3', marks: '9', priority: 'High' },
    { chapter: 'p-Block Elements', weightage: '~6%', questions: '2', marks: '6', priority: 'High' },
    { chapter: 'Atomic Structure', weightage: '~6%', questions: '2', marks: '6', priority: 'High' },
    { chapter: 'Mole Concept', weightage: '~6%', questions: '2', marks: '6', priority: 'High' },
    { chapter: 'Biomolecules & Polymers', weightage: '~6%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Chemical Thermodynamics', weightage: '~5%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Electrochemistry', weightage: '~5%', questions: '2', marks: '6', priority: 'Moderate / Low' },
    { chapter: 'Solid State', weightage: '~4%', questions: '1', marks: '3', priority: 'Moderate / Low' },
    { chapter: 'Chemical Equilibrium', weightage: '~4%', questions: '1', marks: '3', priority: 'Moderate / Low' },
  ],
  englishWeightage: [
    { topic: 'Vocabulary (Synonyms & Antonyms)', weightage: '~30%', questions: '3', marks: '9' },
    { topic: 'Sentence Completion & One Word Substitution', weightage: '~30%', questions: '3', marks: '9' },
    { topic: 'Rearrangement of Jumbled Words', weightage: '~15%', questions: '2', marks: '6' },
    { topic: 'Grammar (Tenses, Prepositions, Conjunctions)', weightage: '~15%', questions: '2', marks: '6' },
  ],
  logicalReasoningWeightage: [
    { topic: 'Figure Formation & Analysis (very high frequency)', weightage: '~40%', questions: '8', marks: '24' },
    { topic: 'Figure Matrix', weightage: '~40%', questions: '8', marks: '24' },
    { topic: 'Logical Deduction & Syllogism', weightage: '~10%', questions: '2', marks: '6' },
    { topic: 'Series (Numerical & Alphabetical) & Analogy', weightage: '~10%', questions: '2', marks: '6' },
  ],
  strategies: [
    { id: 1, title: 'Prioritize High-Impact Topics', advice: 'Use chapter-wise weightage tables to plan your weekly schedule. Start with high-percentage topics such as Chemical Bonding and Circles.' },
    { id: 2, title: 'NCERT is Your Bible', advice: 'For Chemistry and Biology, about 90% of the questions come directly from NCERT lines. For Physics and Maths, NCERT gives the concepts, but you need extra practice to build speed.' },
    { id: 3, title: 'The 1-Minute Rule', advice: 'Aim to answer 130 questions in 180 minutes. If you cannot answer a question in under 75 seconds, mark it for later and move on. (180 mins ÷ 130 Qs ≈ 83 sec/Q).' },
    { id: 4, title: "Don't Ignore Part III", advice: 'Spend at least 30–45 minutes every day on English and Logical Reasoning. These 90 marks are easy marks that students preparing only for JEE often lose.' },
    { id: 5, title: 'Practise Previous Year Questions', advice: 'Solve BITSAT PYQs regularly to understand question trends, spot important concepts, improve problem-solving speed and get familiar with the actual exam pattern.' },
    { id: 6, title: 'Aim for the Bonus Questions', advice: 'If you answer all 130 questions without skipping any, you unlock 12 bonus questions (3 each from Physics, Chemistry, Logical Reasoning and Maths/Biology) for extra marks.' },
  ]
};

// ----------------------------------------------------------------------------
// 2. JEE ADVANCED WEIGHTAGE & STUDY STRATEGY DATA
// ----------------------------------------------------------------------------
export const JEE_ADVANCED_STRATEGY_DATA = {
  title: 'JEE Advanced Chapter-wise Weightage & Study Strategy',
  subtitle: 'Expected 2026/2027 Weightage • Historical Analysis (2008–2023) • Study Strategy',
  summary: [
    { subject: 'Physics', questions: 34, marks: 120, class12: '16 Q / 56 marks (47%)', class11: '18 Q / 64 marks (53%)' },
    { subject: 'Chemistry', questions: 34, marks: 120, class12: '17 Q / 59 marks (49%)', class11: '17 Q / 61 marks (51%)' },
    { subject: 'Mathematics', questions: 34, marks: 120, class12: '23 Q / 81 marks (68%)', class11: '11 Q / 39 marks (33%)' },
  ],
  partAPhysics: [
    { class: 'Class 12', chapter: 'Electricity & Magnetism', subtopics: 'AC, Capacitance, Magnetic Field, EMI, Electrostatics', questions: 6, marks: 21, weightage: '18%' },
    { class: 'Class 12', chapter: 'Modern Physics', subtopics: 'Mass Defect & Binding Energy, Photoelectric, de-Broglie, Radioactivity', questions: 4, marks: 14, weightage: '12%' },
    { class: 'Class 12', chapter: 'Optics', subtopics: 'Geometrical Optics', questions: 3, marks: 11, weightage: '9%' },
    { class: 'Class 12', chapter: 'Mechanics (Gravitation)', subtopics: 'Gravitation', questions: 1, marks: 3, weightage: '3%' },
    { class: 'Class 12', chapter: 'Units & Measurement', subtopics: 'Error in Measurement', questions: 1, marks: 4, weightage: '3%' },
    { class: 'Class 12', chapter: 'Electromagnetic Waves', subtopics: 'Basics of EM Waves', questions: 1, marks: 3, weightage: '3%' },
    { class: 'Class 11', chapter: 'Mechanics', subtopics: 'Centre of Mass, Rigid Body Motion, Sound Waves, Fluid Mechanics, SHM, Surface Tension, Vectors, String Waves', questions: 13, marks: 46, weightage: '38%' },
    { class: 'Class 11', chapter: 'Thermal Physics', subtopics: 'Kinetic Theory of Gases, Thermodynamics', questions: 4, marks: 14, weightage: '12%' },
    { class: 'Class 11', chapter: 'Units, Dimensions & Experiments', subtopics: 'Units and Dimensions', questions: 1, marks: 4, weightage: '3%' },
  ],
  partAChemistry: [
    { class: 'Class 12', chapter: 'Organic Chemistry – II', subtopics: 'Phenols, Amines, Alkyl Halides, Ethers, Biomolecules', questions: 8, marks: 28, weightage: '23%' },
    { class: 'Class 12', chapter: 'Physical Chemistry – II', subtopics: 'Chemical Kinetics, Electrochemistry, Solid State, Surface Chemistry, Solutions', questions: 5, marks: 18, weightage: '15%' },
    { class: 'Class 12', chapter: 'Inorganic Chemistry – II', subtopics: 'Coordination Compounds, Extraction of Metals, d-Block Elements', questions: 4, marks: 13, weightage: '11%' },
    { class: 'Class 11', chapter: 'Physical Chemistry – I', subtopics: 'Thermodynamics, States of Matter, Atomic Structure, Mole Concept, Equilibrium', questions: 8, marks: 29, weightage: '24%' },
    { class: 'Class 11', chapter: 'Inorganic Chemistry – I', subtopics: 'Chemical Bonding & Molecular Structure, p-Block (Group 13 & 14)', questions: 5, marks: 19, weightage: '16%' },
    { class: 'Class 11', chapter: 'Organic Chemistry – I', subtopics: 'Benzene, Basic Principles of Organic Chemistry (GOC)', questions: 4, marks: 13, weightage: '11%' },
  ],
  partAMaths: [
    { class: 'Class 12', chapter: 'Integral Calculus', subtopics: 'Definite Integrals, Basics of Differential Equations', questions: 6, marks: 23, weightage: '19%' },
    { class: 'Class 12', chapter: 'Probability', subtopics: 'Theoretical and Conditional Probability', questions: 5, marks: 17, weightage: '14%' },
    { class: 'Class 12', chapter: 'Vectors & 3D Geometry', subtopics: 'Vector Algebra, 3D Geometry Concepts', questions: 4, marks: 13, weightage: '11%' },
    { class: 'Class 12', chapter: 'Differential Calculus', subtopics: 'Derivatives & Their Applications, Limits, Functions', questions: 3, marks: 10, weightage: '8%' },
    { class: 'Class 12', chapter: 'Matrices & Determinants', subtopics: 'Properties of Matrices, Determinants & Applications', questions: 3, marks: 10, weightage: '8%' },
    { class: 'Class 12', chapter: 'Trigonometry (Class 12)', subtopics: 'Inverse Trigonometric Concepts', questions: 2, marks: 8, weightage: '7%' },
    { class: 'Class 11', chapter: 'Complex Numbers', subtopics: 'Algebra of Complex Numbers, Modulus & Argument', questions: 3, marks: 11, weightage: '9%' },
    { class: 'Class 11', chapter: 'Coordinate Geometry', subtopics: 'Circles, Ellipses, Parabolas', questions: 3, marks: 11, weightage: '9%' },
    { class: 'Class 11', chapter: 'Trigonometry (Class 11)', subtopics: 'Properties of Triangle Solutions', questions: 2, marks: 6, weightage: '5%' },
    { class: 'Class 11', chapter: 'Sequences & Series', subtopics: 'Arithmetic and Geometric Series', questions: 1, marks: 4, weightage: '3%' },
    { class: 'Class 11', chapter: 'Binomial Theorem', subtopics: 'General and Middle Term Problems', questions: 1, marks: 4, weightage: '3%' },
    { class: 'Class 11', chapter: 'Statistics', subtopics: 'Measures of Central Tendency & Dispersion', questions: 1, marks: 3, weightage: '3%' },
  ],
  tiers: [
    {
      subject: 'Physics',
      tier1: 'Mechanics (rotation & rigid body, SHM, fluids, waves, centre of mass); Electrostatics, capacitance, magnetic field, EMI & AC; Modern Physics',
      tier2: 'Thermodynamics & KTG; Geometrical optics; Wave optics',
      tier3: 'Gravitation; Units, dimensions & errors; EM waves'
    },
    {
      subject: 'Chemistry',
      tier1: 'Physical Chem I (thermodynamics, equilibrium, mole concept, atomic structure, gases); Organic Chem II (alkyl halides, alcohols, phenols, ethers, amines, biomolecules)',
      tier2: 'Chemical bonding & p-block (Groups 13–14); Kinetics, electrochemistry, solutions, solid state; GOC & benzene',
      tier3: 'Coordination compounds, d-block & metallurgy (high-yield facts); Surface chemistry'
    },
    {
      subject: 'Mathematics',
      tier1: 'Integral calculus & differential equations; Probability; Vectors & 3D geometry; Differential calculus (limits, functions, applications)',
      tier2: 'Complex numbers; Conics & circles; Matrices & determinants; Inverse trigonometry',
      tier3: 'Sequences & series; Binomial theorem; Statistics; Properties of triangles'
    }
  ],
  phases: [
    { phase: '1. Concept Building', share: '35%', focus: 'Finish Tier 1 chapters: NCERT + standard theory, then graded problems topic by topic', target: '70%+ accuracy on chapter-level problems' },
    { phase: '2. Problem Solving', share: '30%', focus: 'Tier 2 chapters; multi-concept problems linking chapters (e.g. rotation + energy, calculus + probability)', target: 'Solve medium-hard problems within 4–5 minutes' },
    { phase: '3. PYQs & Mocks', share: '25%', focus: 'JEE Advanced previous year papers chapter-wise, then full papers in exam conditions; Tier 3 revision', target: 'One full mock (Paper 1 + 2) per week, rising to 2–3 near exam' },
    { phase: '4. Final Revision', share: '10%', focus: 'Formula sheets, error notebook, short notes; light mocks only to keep timing sharp', target: 'No new topics; protect accuracy and confidence' },
  ],
  dailyTimetable: [
    { block: 'Morning (fresh mind)', duration: '2.5 hrs', activity: 'Hardest subject or weakest Tier 1 chapter – new concepts and tough problems' },
    { block: 'Late morning', duration: '2.0 hrs', activity: 'Second subject – problem practice on Tier 1 / Tier 2 chapters' },
    { block: 'Afternoon', duration: '2.0 hrs', activity: 'Third subject – practice + PYQs of the chapter just studied' },
    { block: 'Evening', duration: '1.0 hr', activity: 'Revision: formulas, reactions, error notebook from earlier in the week' },
    { block: 'Night (short)', duration: '0.5 hr', activity: 'Plan next day; quick recall of key formulas / named reactions' },
  ],
  questionStrategies: [
    { type: 'Single correct MCQ', rule: 'Attempt if you can eliminate at least two options with confidence; otherwise skip (negative marking).' },
    { type: 'Multiple correct MCQ', rule: 'Partial marking usually applies: mark only the options you are sure of. One wrong option turns the whole score negative.' },
    { type: 'Numerical / integer answer', rule: 'Usually no negative marking – always attempt, even with an estimate. Check units and rounding instructions.' },
    { type: 'Matching / List type', rule: 'Use elimination: one sure match often removes most options.' },
    { type: 'Paragraph / comprehension', rule: 'Read the passage once carefully; questions are linked, so getting the first right helps the rest.' },
  ],
  mistakes: [
    'Guessing on multi-correct questions: one wrong option turns a partial score into negative marks.',
    'Skipping numerical questions: they usually carry no negative marking, so always attempt them.',
    'Only reading theory: JEE Advanced rewards problem-solving; aim for more time on problems than on theory.',
    'Taking mocks without analysis: a mock is only useful if you learn from the mistakes.',
    'Starting new topics in the last 2–3 weeks: use that time to revise and strengthen what you already know.'
  ]
};

// ----------------------------------------------------------------------------
// 3. JEE MAIN 2027 99 PERCENTILE CRACKING STRATEGY DATA
// ----------------------------------------------------------------------------
export const JEE_MAIN_STRATEGY_DATA = {
  title: 'JEE MAIN 2027: 99 Percentile Cracking Strategy',
  subtitle: 'Chapter-wise Weightage (2022–2026) • Targets • Study Plan • Exam-Day Strategy',
  examPattern: {
    totalQuestions: 75,
    totalMarks: 300,
    duration: '3 Hours',
    marking: '+4 for Correct, -1 for Wrong, 0 for Unattempted',
    details: [
      { subject: 'Physics', secA: 20, secB: 5, totalQ: 25, marks: 100 },
      { subject: 'Chemistry', secA: 20, secB: 5, totalQ: 25, marks: 100 },
      { subject: 'Mathematics', secA: 20, secB: 5, totalQ: 25, marks: 100 },
    ]
  },
  marksVsPercentile: [
    { percentile: '95 percentile', marks: '~120–130', meaning: 'Good NIT chances in home state for many branches' },
    { percentile: '98 percentile', marks: '~150–160', meaning: 'Strong NIT options' },
    { percentile: '99 percentile', marks: '~155–190 (most shifts ~175)', meaning: 'Varies by shift difficulty – target zone' },
    { percentile: '99.5 percentile', marks: '~200', meaning: 'Top NITs / IIITs in core branches' },
    { percentile: '99.9 percentile', marks: '~230–250', meaning: 'Top ranks' },
    { percentile: 'Your safe target', marks: '190–200', meaning: 'Clears 99 percentile even in an easy shift' },
  ],
  subjectTargets: [
    { subject: 'Chemistry', targetMarks: '75–80', correctNeeded: '20–21 of 25', maxWrong: '≤ 2', reason: 'Most NCERT-based, fastest to solve – your scoring engine' },
    { subject: 'Physics', targetMarks: '65–70', correctNeeded: '17–18 of 25', maxWrong: '≤ 3', reason: 'Formula-driven chapters (Modern, Current) give quick marks' },
    { subject: 'Mathematics', targetMarks: '50–55', correctNeeded: '14–15 of 25', maxWrong: '≤ 3', reason: 'Lengthiest section – accuracy over attempts' },
    { subject: 'Total', targetMarks: '190–205', correctNeeded: '51–54 of 75', maxWrong: '≤ 8', reason: 'Comfortably above the 99 percentile line' },
  ],
  mathsWeightage: [
    { chapter: 'Vector Algebra & 3D Geometry', y2022: '10.0%', y2026: '13.3%', trend: '↑ Rising', expQs: '3.3' },
    { chapter: 'Definite Integration & Area Under Curves', y2022: '7.5%', y2026: '8.5%', trend: '↑ Rising', expQs: '2.1' },
    { chapter: 'Matrices & Determinants', y2022: '7.0%', y2026: '8.0%', trend: '↑ Rising', expQs: '2.0' },
    { chapter: 'Permutations, Combinations & Probability', y2022: '6.5%', y2026: '7.0%', trend: '→ Stable', expQs: '1.8' },
    { chapter: 'Complex Numbers & Quadratic Equations', y2022: '7.0%', y2026: '6.5%', trend: '↓ Falling', expQs: '1.6' },
    { chapter: 'Conic Sections (Parabola, Ellipse, Hyperbola)', y2022: '6.8%', y2026: '6.4%', trend: '→ Stable', expQs: '1.6' },
    { chapter: 'Sequences & Series', y2022: '5.5%', y2026: '6.2%', trend: '→ Stable', expQs: '1.6' },
    { chapter: 'Limits, Continuity & Differentiability', y2022: '5.2%', y2026: '6.2%', trend: '↑ Rising', expQs: '1.6' },
    { chapter: 'Binomial Theorem', y2022: '4.8%', y2026: '5.8%', trend: '↑ Rising', expQs: '1.4' },
    { chapter: 'Straight Lines & Circles', y2022: '6.0%', y2026: '5.5%', trend: '↓ Falling', expQs: '1.4' },
    { chapter: 'Differential Equations', y2022: '4.0%', y2026: '4.8%', trend: '→ Stable', expQs: '1.2' },
    { chapter: 'Application of Derivatives (AOD)', y2022: '4.8%', y2026: '4.6%', trend: '→ Stable', expQs: '1.1' },
    { chapter: 'Statistics', y2022: '3.3%', y2026: '3.5%', trend: '→ Stable', expQs: '0.9' },
    { chapter: 'Trigonometry & Inverse Trig (ITF)', y2022: '4.0%', y2026: '3.2%', trend: '↓ Falling', expQs: '0.8' },
    { chapter: 'Indefinite Integration', y2022: '2.0%', y2026: '1.5%', trend: '↓ Falling', expQs: '0.4' },
  ],
  physicsWeightage: [
    { chapter: 'Modern Physics (Dual Nature, Atoms, Nuclei)', y2022: '9.0%', y2026: '11.0%', trend: '↑ Rising', expQs: '2.8' },
    { chapter: 'Current Electricity', y2022: '7.5%', y2026: '9.5%', trend: '↑ Rising', expQs: '2.4' },
    { chapter: 'Electrostatics & Capacitance', y2022: '7.2%', y2026: '8.0%', trend: '→ Stable', expQs: '2.0' },
    { chapter: 'Optics (Ray & Wave)', y2022: '7.5%', y2026: '7.8%', trend: '→ Stable', expQs: '1.9' },
    { chapter: 'Kinetic Theory & Thermodynamics', y2022: '6.0%', y2026: '7.0%', trend: '↑ Rising', expQs: '1.8' },
    { chapter: 'EMI & Alternating Current', y2022: '5.8%', y2026: '6.4%', trend: '→ Stable', expQs: '1.6' },
    { chapter: 'Magnetic Effects of Current & Magnetism', y2022: '5.5%', y2026: '6.0%', trend: '→ Stable', expQs: '1.5' },
    { chapter: 'Kinematics (1D & 2D)', y2022: '5.2%', y2026: '5.8%', trend: '→ Stable', expQs: '1.4' },
    { chapter: 'Semiconductor Devices & Logic Gates', y2022: '4.2%', y2026: '5.2%', trend: '↑ Rising', expQs: '1.3' },
    { chapter: 'Rotational Motion', y2022: '4.5%', y2026: '5.0%', trend: '→ Stable', expQs: '1.3' },
    { chapter: 'Work-Energy-Power & NLM', y2022: '5.0%', y2026: '5.0%', trend: '→ Stable', expQs: '1.3' },
    { chapter: 'Units, Dimensions & Errors', y2022: '3.8%', y2026: '4.6%', trend: '→ Stable', expQs: '1.1' },
    { chapter: 'Gravitation', y2022: '4.0%', y2026: '4.5%', trend: '→ Stable', expQs: '1.1' },
    { chapter: 'Oscillations (SHM) & Waves', y2022: '4.8%', y2026: '4.4%', trend: '→ Stable', expQs: '1.1' },
    { chapter: 'Fluids & Properties of Matter', y2022: '4.5%', y2026: '4.0%', trend: '↓ Falling', expQs: '1.0' },
    { chapter: 'Electromagnetic Waves', y2022: '3.0%', y2026: '3.5%', trend: '→ Stable', expQs: '0.9' },
  ],
  chemistryWeightage: [
    { chapter: 'GOC & Reaction Mechanisms', y2022: '6.5%', y2026: '9.2%', trend: '↑ Rising', expQs: '2.3' },
    { chapter: 'Coordination Compounds', y2022: '5.5%', y2026: '8.4%', trend: '↑ Rising', expQs: '2.1' },
    { chapter: 'Aldehydes, Ketones & Carboxylic Acids', y2022: '5.8%', y2026: '7.8%', trend: '↑ Rising', expQs: '1.9' },
    { chapter: 'Amines & Biomolecules', y2022: '6.0%', y2026: '7.6%', trend: '↑ Rising', expQs: '1.9' },
    { chapter: 'Chemical Bonding & Molecular Structure', y2022: '5.2%', y2026: '6.8%', trend: '↑ Rising', expQs: '1.7' },
    { chapter: 'Thermodynamics & Thermochemistry', y2022: '5.0%', y2026: '6.2%', trend: '↑ Rising', expQs: '1.6' },
    { chapter: 'd- and f-Block Elements', y2022: '4.2%', y2026: '6.0%', trend: '↑ Rising', expQs: '1.5' },
    { chapter: 'Solutions & Colligative Properties', y2022: '4.5%', y2026: '5.8%', trend: '↑ Rising', expQs: '1.4' },
    { chapter: 'Chemical & Ionic Equilibrium', y2022: '5.0%', y2026: '5.8%', trend: '→ Stable', expQs: '1.4' },
    { chapter: 'Electrochemistry', y2022: '4.0%', y2026: '5.2%', trend: '↑ Rising', expQs: '1.3' },
    { chapter: 'Chemical Kinetics', y2022: '3.8%', y2026: '5.0%', trend: '↑ Rising', expQs: '1.3' },
    { chapter: 'Hydrocarbons', y2022: '4.0%', y2026: '5.0%', trend: '↑ Rising', expQs: '1.3' },
    { chapter: 'Structure of Atom', y2022: '3.5%', y2026: '4.5%', trend: '↑ Rising', expQs: '1.1' },
    { chapter: 'Mole Concept & Redox Reactions', y2022: '3.5%', y2026: '4.5%', trend: '↑ Rising', expQs: '1.1' },
    { chapter: 'Periodic Properties', y2022: '2.5%', y2026: '3.5%', trend: '↑ Rising', expQs: '0.9' },
    { chapter: 'Practical / Experimental Chemistry', y2022: '1.0%', y2026: '2.8%', trend: '↑ Rising', expQs: '0.7' },
  ],
  easyScoring: [
    { subject: 'Physics', chapters: 'Modern Physics, Current Electricity & Instruments, Semiconductors & EM Waves, Units & Error Analysis', expQs: '7 to 9', marks: '28 to 36' },
    { subject: 'Chemistry', chapters: 'Coordination Compounds, Chemical Bonding & Periodic Table, Solutions & Electrochemistry, Structure of Atom & Biomolecules', expQs: '8 to 10', marks: '32 to 40' },
    { subject: 'Mathematics', chapters: 'Vectors & 3D Geometry, Matrices & Determinants, Statistics & Sequences, Differential Equations', expQs: '6 to 8', marks: '24 to 32' },
  ],
  roundMethod: [
    { round: 'Round 1 (≈ 90 min)', focus: 'All questions you can solve in under 2 minutes', rule: 'Skip anything lengthy – mark and move on.' },
    { round: 'Round 2 (≈ 60 min)', focus: 'Marked questions that need 3–4 minutes', rule: 'Stop at 4 minutes; if stuck, leave it.' },
    { round: 'Round 3 (≈ 30 min)', focus: 'Remaining doable questions + numerical checks', rule: 'Attempt an MCQ only if you can eliminate at least 2 options.' },
  ],
  checklist: [
    'All Tier 1 chapters completed with 90%+ accuracy in PYQs',
    'Last 5 years JEE Main PYQs solved chapter-wise',
    'At least 25–30 full mocks taken and thoroughly analysed before Session 1',
    'Formula sheet prepared for every Physics and Maths chapter',
    'NCERT Chemistry read at least 3 times (Inorganic: 4–5 times)',
    'Error notebook maintained and revised every week',
    'Mock test scores consistently 185+ in the last month',
    'Removed chapters skipped completely',
    'Exam-slot routine practised: same wake-up and 3-hour mock timing as actual exam'
  ]
};

// ----------------------------------------------------------------------------
// 4. JEE MAIN 2027 SYLLABUS DATA (Paper 1)
// ----------------------------------------------------------------------------
export const JEE_MAIN_SYLLABUS_DATA = {
  title: 'JEE MAIN 2027 Syllabus – Paper 1 (B.E. / B.Tech)',
  subtitle: 'Physics • Chemistry • Mathematics',
  overview: {
    totalUnits: 54,
    totalSubtopics: 196,
    physicsUnits: 20,
    chemistryUnits: 20,
    mathsUnits: 14,
    questions: '75 (25 per subject: 20 MCQ + 5 Numerical)',
    marks: '300 (+4 for correct, -1 for wrong)',
    duration: '3 Hours'
  },
  removedTopics: [
    { subject: 'Mathematics', removed: 'Mathematical Reasoning; Mathematical Induction; Heights and Distances' },
    { subject: 'Physics', removed: "Communication Systems; Earth's Magnetism" },
    { subject: 'Chemistry', removed: 'States of Matter; Solid State; Surface Chemistry; Hydrogen; s-Block Elements; General Principles and Processes of Isolation of Metals (Metallurgy); Environmental Chemistry; Polymers; Chemistry in Everyday Life' }
  ],
  physicsUnits: [
    { unit: 1, name: 'Units and Measurements', topics: 'Units of measurement, SI units, fundamental and derived units; Least count, significant figures, errors in measurements; Dimensions of physical quantities, dimensional analysis and its applications.' },
    { unit: 2, name: 'Kinematics', topics: 'Frame of reference, motion in a straight line, position-time graph, speed and velocity; Uniformly accelerated motion; Scalars and vectors, resolution of vectors; Relative velocity, projectile motion, circular motion.' },
    { unit: 3, name: 'Laws of Motion', topics: 'Force and inertia, Newton’s laws; Linear momentum conservation, equilibrium of concurrent forces; Static and kinetic friction; Dynamics of uniform circular motion, centripetal force.' },
    { unit: 4, name: 'Work, Energy and Power', topics: 'Work done by constant and variable force; Kinetic and potential energy, work-energy theorem, power; Potential energy of a spring; Vertical circular motion; Collisions in 1D and 2D.' },
    { unit: 5, name: 'Rotational Motion', topics: 'Centre of mass, moment of a force, torque, angular momentum conservation; Moment of inertia, radius of gyration, parallel and perpendicular axis theorems; Rigid body rotation.' },
    { unit: 6, name: 'Gravitation', topics: 'Universal law of gravitation, variation of g with altitude and depth; Kepler’s laws; Gravitational potential and escape velocity; Satellite motion, orbital velocity and time period.' },
    { unit: 7, name: 'Properties of Solids and Liquids', topics: 'Elastic behaviour, Hooke’s law, moduli of elasticity; Fluid pressure, Pascal’s law; Viscosity, Stokes’ law, terminal velocity, Bernoulli’s principle; Surface tension, capillary rise; Heat, calorimetry, latent heat; Conduction, convection, radiation.' },
    { unit: 8, name: 'Thermodynamics', topics: 'Thermal equilibrium, zeroth law, concept of temperature; First law, work, heat, internal energy, isothermal and adiabatic processes; Second law: reversible and irreversible processes.' },
    { unit: 9, name: 'Kinetic Theory of Gases', topics: 'Equation of state of perfect gas; Assumptions of KTG, pressure and kinetic interpretation of temperature; RMS speed, degrees of freedom, equipartition of energy; Mean free path.' },
    { unit: 10, name: 'Oscillations and Waves', topics: 'Periodic motion, SHM equation and phase; Spring-mass system, simple pendulum; Wave motion, progressive wave, superposition principle, standing waves in strings and pipes, beats.' },
    { unit: 11, name: 'Electrostatics', topics: 'Coulomb’s law, electric field and dipole; Gauss’s law and applications (wire, sheet, spherical shell); Electric potential, equipotential surfaces; Capacitors in series/parallel, dielectric medium, energy stored.' },
    { unit: 12, name: 'Current Electricity', topics: 'Electric current, drift velocity, mobility; Ohm’s law, resistance, series/parallel combinations; Internal resistance, emf of a cell; Kirchhoff’s laws; Wheatstone bridge, metre bridge.' },
    { unit: 13, name: 'Magnetic Effects of Current and Magnetism', topics: 'Biot-Savart law, Ampere’s law; Lorentz force, force between parallel conductors; Moving coil galvanometer, conversion to ammeter/voltmeter; Magnetic dipole moment, bar magnet; Dia-, para- and ferromagnetism.' },
    { unit: 14, name: 'Electromagnetic Induction and AC', topics: 'Faraday’s law, Lenz’s law, eddy currents, self and mutual inductance; AC currents, peak/RMS value; Reactance, impedance, LCR series circuit, resonance; Power in AC, transformer.' },
    { unit: 15, name: 'Electromagnetic Waves', topics: 'Displacement current; Transverse nature of EM waves; Electromagnetic spectrum (radio, micro, IR, visible, UV, X-rays, gamma) and practical applications.' },
    { unit: 16, name: 'Optics', topics: 'Reflection, spherical mirrors, refraction at plane and spherical surfaces; Thin lens formula, combination of lenses; Prism; Microscopes and telescopes; Wave optics: Huygens’ principle, interference, YDSE, single slit diffraction, polarization and Brewster’s law.' },
    { unit: 17, name: 'Dual Nature of Matter and Radiation', topics: 'Photoelectric effect, Hertz & Lenard’s observations, Einstein’s photoelectric equation; Matter waves, de Broglie relation.' },
    { unit: 18, name: 'Atoms and Nuclei', topics: 'Alpha-particle scattering, Rutherford model, Bohr model, hydrogen spectrum; Composition and size of nucleus, mass defect, binding energy per nucleon; Nuclear fission and fusion.' },
    { unit: 19, name: 'Electronic Devices', topics: 'Semiconductor diode: forward/reverse bias, diode as rectifier; I-V of LED, photodiode, solar cell, Zener diode as voltage regulator; Logic gates (OR, AND, NOT, NAND, NOR).' },
    { unit: 20, name: 'Experimental Skills', topics: 'Vernier calipers, screw gauge, simple pendulum, metre scale; Young’s modulus, surface tension, viscosity; Speed of sound using resonance tube; Metre bridge resistance, Ohm’s law, galvanometer; Focal length of mirrors/lenses, prism deviation; p-n and Zener diode curves.' },
  ],
  chemistryUnits: [
    { unit: 1, branch: 'Physical', name: 'Some Basic Concepts in Chemistry', topics: 'Matter, Dalton’s atomic theory; Mole concept, molar mass, empirical and molecular formulae; Chemical equations and stoichiometry.' },
    { unit: 2, branch: 'Physical', name: 'Atomic Structure', topics: 'Bohr model, de Broglie relation, Heisenberg uncertainty principle; Quantum mechanical model, quantum numbers, orbital shapes (s, p, d); Aufbau principle, Pauli exclusion, Hund’s rule.' },
    { unit: 3, branch: 'Physical', name: 'Chemical Bonding and Molecular Structure', topics: 'Ionic and covalent bonds, Fajan’s rule, dipole moment; VSEPR theory, hybridization (sp, sp², sp³, d orbitals); Molecular Orbital Theory (homonuclear diatomics, bond order); Hydrogen bonding.' },
    { unit: 4, branch: 'Physical', name: 'Chemical Thermodynamics', topics: 'System/surroundings, state functions; First law, enthalpy, Hess’s law; Enthalpies of formation, combustion, bond dissociation; Second law: entropy (ΔS), Gibbs free energy (ΔG) and spontaneity.' },
    { unit: 5, branch: 'Physical', name: 'Solutions', topics: 'Concentration units (molarity, molality, mole fraction); Raoult’s law; Colligative properties (RLVP, boiling point elevation, freezing point depression, osmotic pressure); van ’t Hoff factor.' },
    { unit: 6, branch: 'Physical', name: 'Equilibrium', topics: 'Law of mass action, Kp and Kc, Le Chatelier’s principle; Ionic equilibrium: acids and bases, pH scale, buffer solutions, common ion effect, solubility product (Ksp).' },
    { unit: 7, branch: 'Physical', name: 'Redox Reactions and Electrochemistry', topics: 'Oxidation numbers, balancing redox; Electrolytic/metallic conduction, Kohlrausch’s law; Galvanic cells, standard electrode potentials, Nernst equation, cell EMF; Fuel cells, lead storage battery.' },
    { unit: 8, branch: 'Physical', name: 'Chemical Kinetics', topics: 'Rate of reaction, order and molecularity; Differential and integrated rate laws (zero and first order), half-life; Arrhenius equation, activation energy, collision theory.' },
    { unit: 9, branch: 'Inorganic', name: 'Classification of Elements & Periodicity', topics: 'Modern periodic table, trends in atomic/ionic radii, ionization enthalpy, electron gain enthalpy, valency and oxidation states.' },
    { unit: 10, branch: 'Inorganic', name: 'p-Block Elements', topics: 'Group 13 to Group 18 elements: electronic configurations, general trends across periods and groups, anomalous properties of first elements.' },
    { unit: 11, branch: 'Inorganic', name: 'd- and f-Block Elements', topics: 'Transition elements: electronic configuration, oxidation states, catalytic/magnetic properties, alloy formation; Preparation and properties of K₂Cr₂O₇ and KMnO₄; Lanthanoids and Actinoids.' },
    { unit: 12, branch: 'Inorganic', name: 'Coordination Compounds', topics: 'Werner’s theory, ligands, coordination number, denticity; IUPAC nomenclature, isomerism; Valence Bond Theory and Crystal Field Theory (octahedral/tetrahedral); Color and magnetism.' },
    { unit: 13, branch: 'Organic', name: 'Purification & Characterisation', topics: 'Purification techniques (crystallization, distillation, chromatography); Detection of N, S, halogens; Quantitative estimation of C, H, N, halogens.' },
    { unit: 14, branch: 'Organic', name: 'Basic Principles of Organic Chemistry', topics: 'Tetravalency, hybridization, functional groups; Isomerism (structural and stereoisomerism); Carbocations, carbanions, free radicals; Inductive, electromeric, resonance and hyperconjugation.' },
    { unit: 15, branch: 'Organic', name: 'Hydrocarbons', topics: 'Alkanes (conformations, halogenation); Alkenes (geometrical isomerism, Markovnikov addition, ozonolysis); Alkynes (acidity, additions); Aromatic hydrocarbons (benzene, electrophilic aromatic substitution).' },
    { unit: 16, branch: 'Organic', name: 'Organic Compounds Containing Halogens', topics: 'Alkyl halides, mechanisms of substitution (SN1 and SN2); Environmental effects of chloroform, iodoform, freons and DDT.' },
    { unit: 17, branch: 'Organic', name: 'Organic Compounds Containing Oxygen', topics: 'Alcohols, phenols (acidity, Reimer-Tiemann, Kolbe); Ethers; Aldehydes and Ketones (nucleophilic addition, aldol condensation, Cannizzaro, haloform); Carboxylic acids.' },
    { unit: 18, branch: 'Organic', name: 'Organic Compounds Containing Nitrogen', topics: 'Amines: classification, basic character, identification of 1°, 2°, 3° amines; Diazonium salts and synthetic applications.' },
    { unit: 19, branch: 'Organic', name: 'Biomolecules', topics: 'Carbohydrates (monosaccharides, disaccharides); Proteins (amino acids, peptide bonds, denaturation); Vitamins, nucleic acids (DNA, RNA structure and functions), hormones.' },
    { unit: 20, branch: 'Organic', name: 'Principles of Practical Chemistry', topics: 'Detection of functional groups; Preparation of acetanilide, Mohr’s salt; Titrimetric exercises (acid-base, KMnO₄); Salt analysis (cations and anions); Enthalpy experiments.' },
  ],
  mathsUnits: [
    { unit: 1, name: 'Sets, Relations and Functions', topics: 'Sets and algebraic properties, power set; Relations and equivalence relations; Functions (one-one, into, onto), composition of functions.' },
    { unit: 2, name: 'Complex Numbers & Quadratic Equations', topics: 'Complex numbers, Argand diagram, modulus and argument; Quadratic equations in real and complex numbers, relation between roots and coefficients.' },
    { unit: 3, name: 'Matrices and Determinants', topics: 'Algebra of matrices, determinants of order 2 and 3; Adjoint and inverse of matrices; System of linear equations consistency and solutions.' },
    { unit: 4, name: 'Permutations and Combinations', topics: 'Fundamental counting principle; Permutations P(n, r) and Combinations C(n, r) with practical problem solving.' },
    { unit: 5, name: 'Binomial Theorem', topics: 'Binomial theorem for positive integral index, general and middle term, simple applications.' },
    { unit: 6, name: 'Sequence and Series', topics: 'Arithmetic and Geometric progressions, insertion of AM and GM, relation between AM and GM.' },
    { unit: 7, name: 'Limit, Continuity and Differentiability', topics: 'Real functions and graphs; Limits, continuity and differentiability; Chain rule, derivatives of implicit and inverse trig functions; Tangents, normals, increasing/decreasing, maxima and minima.' },
    { unit: 8, name: 'Integral Calculus', topics: 'Fundamental integrals, substitution, parts and partial fractions; Definite integrals and properties; Determining areas bounded by standard curves.' },
    { unit: 9, name: 'Differential Equations', topics: 'Order and degree; Separation of variables; Homogeneous and linear first-order differential equations (dy/dx + py = q).' },
    { unit: 10, name: 'Coordinate Geometry', topics: 'Cartesian system, straight line forms, angle between lines, concurrency; Circle standard equations and intersections; Parabola, ellipse, hyperbola standard forms.' },
    { unit: 11, name: 'Three Dimensional Geometry', topics: 'Coordinates in space, distance and section formula; Direction cosines and direction ratios; Straight line in space, skew lines and shortest distance.' },
    { unit: 12, name: 'Vector Algebra', topics: 'Vectors and scalars, addition, components in 2D and 3D; Dot product, cross product and scalar projections.' },
    { unit: 13, name: 'Statistics and Probability', topics: 'Measures of dispersion (mean, variance, standard deviation); Probability of events, addition/multiplication theorems, Bayes’ theorem, random variable distributions.' },
    { unit: 14, name: 'Trigonometry', topics: 'Trigonometric identities and functions; Inverse trigonometric functions and their principal properties.' },
  ]
};

// ----------------------------------------------------------------------------
// 5. JEE ADVANCED 2027 COMPLETE SYLLABUS DATA
// ----------------------------------------------------------------------------
export const JEE_ADVANCED_SYLLABUS_DATA = {
  title: 'JEE ADVANCED 2027 Complete Syllabus',
  subtitle: 'Physics • Chemistry • Mathematics (Organised by IITs)',
  overview: {
    papers: 'Paper 1 and Paper 2 (Both Compulsory, 3 Hours Each)',
    totalChapters: 68,
    totalSubtopics: 198,
    eligibility: 'Top ~2,50,000 candidates in JEE Main Paper 1',
  },
  extraTopicsBeyondMain: [
    { subject: 'Physics', topics: 'Forced and damped oscillations; Doppler effect; Law of radioactive decay, half-life and mean life; Characteristic and continuous X-rays, Moseley’s law; Blackbody radiation – Kirchhoff’s, Wien’s and Stefan’s laws.' },
    { subject: 'Chemistry', topics: 'Solid State; Surface Chemistry; Hydrogen; s-Block Elements; Isolation of Metals (Metallurgy); Environmental Chemistry; Polymers; Chemistry in Everyday Life; Principles of Qualitative Analysis; Gaseous and Liquid States (van der Waals equation).' },
    { subject: 'Mathematics', topics: 'Equation of a plane and angles/distances involving planes; L’Hospital’s rule; Rolle’s theorem and Lagrange’s mean value theorem; Scalar triple product; Tangents, normals and chords of circles and conics; Logarithms; Locus problems.' },
  ],
  physicsSections: [
    { section: 'General Physics', chapters: 'Units, Dimensions & Measurement; Experimental Physics (Vernier, screw gauge, simple pendulum g-value, Young’s modulus, calorimeter, resonance column, metre bridge & post office box).' },
    { section: 'Mechanics', chapters: 'Kinematics in 1D & 2D; Newton’s Laws, Work, Energy & Power; Systems of Particles & Collisions; Rotational Motion (rigid body, torque, rolling without slipping); Oscillations & Elasticity (linear/angular SHM, damped/forced oscillations); Gravitation; Fluids & Surface Tension (Bernoulli, Stokes, viscosity); Waves (superposition, sound in gases, Doppler effect).' },
    { section: 'Thermal Physics', chapters: 'Heat & Thermodynamics (thermal expansion, conduction, KTG, specific heats, Carnot cycle, blackbody radiation: Wien’s and Stefan’s laws).' },
    { section: 'Electricity & Magnetism', chapters: 'Electrostatics & Capacitance (Gauss’s law, dipole, dielectrics); Current Electricity (Kirchhoff, heating effect); Magnetic Effects of Current (Biot-Savart, Ampere, Lorentz force, moving coil); Electromagnetic Induction & AC (Faraday, Lenz, RC/LR/LC/LCR circuits); EM Waves.' },
    { section: 'Optics', chapters: 'Ray Optics (mirrors, lenses, prisms, optical instruments); Wave Optics (Huygens, interference, YDSE, single-slit diffraction, polarization and Brewster’s law).' },
    { section: 'Modern Physics', chapters: 'Nuclear Physics (decay law, half-life, binding energy, fission/fusion); Atoms, Photons & Matter Waves (photoelectric, Bohr model, X-rays, Moseley’s law, de Broglie).' },
  ],
  chemistrySections: [
    { section: 'Physical Chemistry (11 Chapters)', chapters: 'Mole Concept & Stoichiometry; Gaseous & Liquid States (van der Waals); Atomic Structure (wavefunctions, quantum numbers); Chemical Bonding & MO Theory; Chemical Thermodynamics; Chemical & Phase Equilibria; Electrochemistry (Nernst, Kohlrausch); Chemical Kinetics (Arrhenius, catalysis); Solid State (close packing, defects); Solutions (colligative properties); Surface Chemistry (adsorption isotherms, colloids).' },
    { section: 'Inorganic Chemistry (10 Chapters)', chapters: 'Periodicity in Properties; Hydrogen & Hydrides; s-Block Elements; p-Block Elements (Groups 13 to 18 compounds); d-Block Elements (K₂Cr₂O₇, KMnO₄); f-Block Elements (lanthanoid contraction); Coordination Compounds (CFT, isomerism, metal carbonyls); Isolation of Metals (metallurgy principles); Principles of Qualitative Analysis (cation groups I-V & anions); Environmental Chemistry.' },
    { section: 'Organic Chemistry (14 Chapters)', chapters: 'Basic Principles of Organic Chemistry; Alkanes, Alkenes & Alkynes; Benzene & Arenes; Phenols; Alkyl Halides & Haloarenes; Alcohols & Ethers; Aldehydes & Ketones; Carboxylic Acids & Derivatives; Amines & Diazonium Salts; Biomolecules; Polymers; Chemistry in Everyday Life; Practical Organic Chemistry.' },
  ],
  mathsSections: [
    { section: 'Algebra & Matrices', chapters: 'Sets, Relations and Functions; Complex Numbers & Quadratic Equations; Sequences, Series & Logarithms; Permutations, Combinations & Binomial Theorem; Matrices & Determinants (elementary transformations, consistency).' },
    { section: 'Probability & Geometry', chapters: 'Probability & Statistics (conditional probability, Bayes’ theorem, random variables); Analytical Geometry 2D (straight lines, circles, parabola, ellipse, hyperbola, chords, tangents, normals, locus); Analytical Geometry 3D (lines, planes, coplanarity, shortest distance).' },
    { section: 'Calculus & Vectors', chapters: 'Differential Calculus (continuity, L’Hospital, chain rule, Rolle’s and LMVT, tangents/normals, maxima/minima); Integral Calculus (standard integrals, definite integrals, areas bounded by curves); Differential Equations (homogeneous and linear first order); Vectors (dot, cross, scalar triple product).' },
  ]
};

// ----------------------------------------------------------------------------
// 6. BITSAT 2027 SUBJECT-WISE SYLLABUS DATA
// ----------------------------------------------------------------------------
export const BITSAT_SYLLABUS_DATA = {
  title: 'BITSAT 2027 Subject-wise Syllabus',
  subtitle: 'Birla Institute of Technology & Science Admission Test',
  overview: {
    campuses: 'Pilani, Goa, Hyderabad, Dubai & Mumbai',
    format: 'Computer Based Test (CBT), 130 Questions, 390 Marks, 3 Hours',
    bonusInfo: '12 Bonus Questions unlocked when all 130 questions are submitted without skipping.',
    sections: 'Physics (30 Qs), Chemistry (30 Qs), English (10 Qs), Logical Reasoning (20 Qs), Mathematics/Biology (40 Qs)'
  },
  physicsUnits: [
    { unit: 1, name: 'Units & Measurement', topics: 'Systems of units, SI units, dimensional analysis, precision and significant figures, experimental measurements.' },
    { unit: 2, name: 'Kinematics', topics: 'Vectors, position/velocity/acceleration vectors, constant acceleration, projectiles, relative motion.' },
    { unit: 3, name: 'Newton’s Laws of Motion', topics: 'Free body diagrams, inclined planes, pulley blocks, centripetal force, inertial and non-inertial frames.' },
    { unit: 4, name: 'Impulse and Momentum', topics: 'Conservation of momentum, collisions in 1D and 2D, centre of mass motion.' },
    { unit: 5, name: 'Work and Energy', topics: 'Work done by forces, work-energy theorem, conservative forces and potential energy, power.' },
    { unit: 6, name: 'Rotational Motion', topics: 'Angular kinematics, moment of inertia, parallel/perpendicular axes theorems, torque, angular momentum conservation, rolling.' },
    { unit: 7, name: 'Gravitation', topics: 'Kepler’s laws, gravitational potential, escape velocity, planetary and satellite motion.' },
    { unit: 8, name: 'Mechanics of Solids & Fluids', topics: 'Elasticity, fluid pressure, Archimedes’ principle, viscosity, surface tension, Bernoulli’s theorem.' },
    { unit: 9, name: 'Oscillations', topics: 'SHM kinematics, spring-mass systems, pendulums, forced and damped oscillations, resonance.' },
    { unit: 10, name: 'Waves', topics: 'Sinusoidal waves, standing waves in strings/pipes, beats, Doppler effect.' },
    { unit: 11, name: 'Heat & Thermodynamics', topics: 'KTG, temperature, specific heat, first law, Carnot engine, second law.' },
    { unit: 12, name: 'Electrostatics', topics: 'Coulomb’s law, Gauss’s law, electrostatic potential and energy, capacitors and dielectrics.' },
    { unit: 13, name: 'Current Electricity', topics: 'Ohm’s law, DC circuits, Kirchhoff’s laws, Wheatstone bridge, potentiometer.' },
    { unit: 14, name: 'Magnetic Effect of Current', topics: 'Biot-Savart, Ampere’s law, Lorentz force, magnetic dipole moment, galvanometers.' },
    { unit: 15, name: 'Electromagnetic Induction', topics: 'Faraday’s law, Lenz’s law, self/mutual inductance, AC circuits, LCR circuits.' },
    { unit: 16, name: 'Optics', topics: 'Mirrors, lenses, optical instruments, interference, thin films, single slit diffraction, polarization.' },
    { unit: 17, name: 'Modern Physics', topics: 'Photoelectric effect, de Broglie wavelength, Bohr model, hydrogen spectrum, radioactivity, nuclear reactions.' },
    { unit: 18, name: 'Electronic Devices', topics: 'Semiconductors, p-n junction, rectifiers, Zener diode, transistors, logic gates.' }
  ],
  chemistryUnits: [
    { unit: 1, name: 'States of Matter', topics: 'Gas laws, ideal gas equation, van der Waals; Liquids; Solid state: lattices, unit cells, close packing, defects, band theory.' },
    { unit: 2, name: 'Atomic Structure', topics: 'Bohr model, de Broglie relation, uncertainty principle, quantum numbers, orbital shapes, electronic configuration.' },
    { unit: 3, name: 'Periodicity and Bonding', topics: 'Periodic trends, ionic bond and lattice energy, VSEPR model, hybridization, MO theory, dipole moments.' },
    { unit: 4, name: 'Thermodynamics', topics: 'First law, enthalpy, Hess’s law, entropy, Gibbs free energy and spontaneity, chemical equilibrium link.' },
    { unit: 5, name: 'Physical & Chemical Equilibria', topics: 'Colligative properties, van ’t Hoff factor, dynamic equilibrium, Le Chatelier, pH, buffer solutions, solubility product.' },
    { unit: 6, name: 'Electrochemistry', topics: 'Redox reactions, galvanic cells, Nernst equation, electrolytic conductance, Kohlrausch’s law, batteries.' },
    { unit: 7, name: 'Chemical Kinetics', topics: 'Rate laws, zero/first order kinetics, Arrhenius equation; Surface chemistry: adsorption isotherms, colloids, emulsions.' },
    { unit: 8, name: 'Hydrogen & s-Block Elements', topics: 'Dihydrogen, hydrides, water; Alkali metals (Li, Na, K) and Alkaline earth metals (Mg, Ca) compounds.' },
    { unit: 9, name: 'p-, d- and f-Block Elements', topics: 'Groups 13 to 18 chemistry; Transition metals (iron, copper, zinc, K₂Cr₂O₇, KMnO₄); Lanthanoids; Coordination compounds.' },
    { unit: 10, name: 'Principles of Organic Chemistry', topics: 'Nomenclature, purification; Electronic displacement (inductive, resonance, hyperconjugation); Alkanes, alkenes, alkynes, benzene.' },
    { unit: 11, name: 'Stereochemistry', topics: 'Conformations of ethane and butane; Geometrical isomerism in alkenes.' },
    { unit: 12, name: 'Oxygen & Nitrogen Functional Groups', topics: 'Alcohols, phenols, ethers, aldehydes, ketones, carboxylic acids, amines, diazonium salts.' },
    { unit: 13, name: 'Biological, Industrial & Environmental Chemistry', topics: 'Carbohydrates, proteins, nucleic acids, vitamins, polymers, environmental pollution, medicinal chemicals.' },
    { unit: 14, name: 'Experimental Chemistry', topics: 'Volumetric titrations, qualitative salt analysis, physical chemistry experiments, organic functional group tests.' }
  ],
  englishUnits: [
    { unit: 1, name: 'Grammar', topics: 'Determiners, prepositions, modals, adjectives, agreement, time and tense, parallel construction, voice, relative clauses.' },
    { unit: 2, name: 'Vocabulary', topics: 'Odd word, one word substitution, spelling, homophones, synonyms, antonyms, phrasal verbs, idioms, analogy.' },
    { unit: 3, name: 'Reading Comprehension', topics: 'Main ideas, drawing conclusions, CLOZE tests, summaries, referents, jigsaw reading.' },
    { unit: 4, name: 'Composition', topics: 'Rearrangement of jumbled words/paragraphs, topic sentences, linkers and connectives.' }
  ],
  reasoningUnits: [
    { unit: 1, name: 'Verbal Reasoning', topics: 'Analogy, classification (odd one out), series completion (numbers/letters), logical deduction and syllogisms, chart logic.' },
    { unit: 2, name: 'Non-verbal Reasoning', topics: 'Pattern perception, figure formation & analysis, paper cutting, figure matrix completion, rule detection.' }
  ],
  mathsUnits: [
    { unit: 1, name: 'Algebra', topics: 'Complex numbers, quadratic equations, progressions (AP, GP, HP), logarithms, permutations & combinations, binomial theorem, matrices & determinants, linear inequalities.' },
    { unit: 2, name: 'Trigonometry', topics: 'Trigonometric functions, graphs, identities, equations, inverse trigonometric functions.' },
    { unit: 3, name: 'Two-dimensional Coordinate Geometry', topics: 'Straight lines, pair of straight lines, circles, parabola, ellipse, hyperbola.' },
    { unit: 4, name: 'Three-dimensional Coordinate Geometry', topics: 'Direction cosines/ratios, straight lines in space, skew lines, equation of planes.' },
    { unit: 5, name: 'Differential Calculus', topics: 'Limits, continuity, differentiability, derivative rules, tangents/normals, maxima/minima, Rolle’s & Mean Value theorems.' },
    { unit: 6, name: 'Integral Calculus', topics: 'Indefinite integration, definite integrals and properties, area under simple curves.' },
    { unit: 7, name: 'Differential Equations', topics: 'Order and degree, variable separation, homogeneous and linear first-order differential equations.' },
    { unit: 8, name: 'Probability', topics: 'Axiomatic probability, conditional probability, Bayes’ theorem, random variables and distributions.' },
    { unit: 9, name: 'Vectors', topics: 'Addition, scalar multiplication, dot/cross products, scalar triple product.' },
    { unit: 10, name: 'Statistics', topics: 'Measures of dispersion, frequency distribution analysis.' },
    { unit: 11, name: 'Linear Programming', topics: 'Formulation, feasible/infeasible regions, graphical optimization.' },
    { unit: 12, name: 'Mathematical Modelling', topics: 'Real-life problem formulation using matrices, calculus and linear programming.' }
  ],
  biologyUnits: [
    { unit: 1, name: 'Diversity in Living World', topics: 'Taxonomy, binomial nomenclature, plant kingdom and animal kingdom classification.' },
    { unit: 2, name: 'Cell: Structure and Function', topics: 'Cell organelles, cell cycle, mitosis, meiosis, biomolecules, enzyme kinetics.' },
    { unit: 3, name: 'Genetics and Evolution', topics: 'Mendelian genetics, linkage, DNA replication/transcription/translation, evolutionary theories.' },
    { unit: 4, name: 'Plant Physiology', topics: 'Morphology and anatomy, water relations, mineral nutrition, photosynthesis, plant respiration.' },
    { unit: 5, name: 'Human Physiology', topics: 'Digestion, respiration, circulation, excretion, locomotion, nervous and endocrine control.' },
    { unit: 6, name: 'Plant Reproduction & Growth', topics: 'Sexual reproduction in flowering plants, pollination, embryogenesis, phytohormones, photoperiodism.' },
    { unit: 7, name: 'Human Reproduction & Development', topics: 'Male/female systems, menstrual cycle, fertilization, embryonic development, contraception.' },
    { unit: 8, name: 'Ecology and Environment', topics: 'Ecosystem structure, energy flow, adaptations, biodiversity conservation, pollution.' },
    { unit: 9, name: 'Biology and Human Welfare', topics: 'Animal husbandry, human infectious diseases, immunology, plant breeding.' },
    { unit: 10, name: 'Biotechnology', topics: 'Recombinant DNA technology, applications in medicine (insulin, vaccines) and agriculture (Bt crops).' }
  ]
};

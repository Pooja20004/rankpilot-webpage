import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Award, 
  Target, 
  Zap, 
  ArrowRight, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  FileCheck2,
  Layers,
  ZoomIn,
  XCircle,
  Eye,
  Filter,
  AlertTriangle
} from 'lucide-react';
import { RANKPILOT_SAMPLE_REPORT, LOVABLE_PROJECT_URL } from '../data/mockData';

interface QuestionReportItem {
  qNum: number;
  subject: 'Mathematics' | 'Physics' | 'Chemistry';
  topic: string;
  status: 'correct' | 'incorrect' | 'unattempted';
  timeSpentSec: number;
  idealTimeSec: number;
  marksAwarded: number;
  questionText: string;
  formulaOrLatex?: string;
  options: string[];
  studentAnswer: number;
  correctAnswer: number;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  explanation: string;
  isSillyMistake?: boolean;
}

// Complete 54-question dataset matching the official 176/180 scorecard:
// 17 Correct, 1 Wrong in Mathematics (56/60)
// 18 Correct, 0 Wrong in Physics (60/60)
// 18 Correct, 0 Wrong in Chemistry (60/60)
const FULL_MOCK_QUESTIONS: QuestionReportItem[] = [
  // --- MATHEMATICS (Q1 to Q18) ---
  {
    qNum: 1,
    subject: 'Mathematics',
    topic: 'Limits & Continuity',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Evaluate the limit: lim (x -> 0) [sin(x) - x + x^3/6] / x^5.',
    formulaOrLatex: '\\lim_{x \\to 0} \\frac{\\sin x - x + \\frac{x^3}{6}}{x^5} = \\frac{1}{120}',
    options: ['1 / 60', '1 / 120', '1 / 24', '1 / 720'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Moderate',
    explanation: 'Using the Taylor expansion of sin(x) = x - x^3/3! + x^5/5! - O(x^7). Substituting this into the numerator yields x^5/120 - O(x^7). Dividing by x^5 and taking the limit as x -> 0 gives exactly 1/120.'
  },
  {
    qNum: 2,
    subject: 'Mathematics',
    topic: 'Definite Integrals',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'Evaluate the definite integral I = \\int_{0}^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx.',
    formulaOrLatex: 'I = \\int_{0}^{a} f(x) dx = \\int_{0}^{a} f(a-x) dx \\implies 2I = \\frac{\\pi}{2}',
    options: ['\\pi / 2', '\\pi / 4', '\\pi / 8', '1'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Easy',
    explanation: 'By applying King\'s Property: replacing x with (pi/2 - x) gives I = \\int (sqrt(cos x) / (sqrt(cos x) + sqrt(sin x))) dx. Adding the original and converted integrals gives 2I = \\int_0^{pi/2} 1 dx = pi/2, hence I = pi/4.'
  },
  {
    qNum: 3,
    subject: 'Mathematics',
    topic: 'Matrices & Determinants',
    status: 'correct',
    timeSpentSec: 9,
    idealTimeSec: 130,
    marksAwarded: 4,
    questionText: 'If A is a 3x3 invertible matrix such that det(A) = 3, find the determinant of adj(2A).',
    formulaOrLatex: '\\det(\\text{adj}(kA)) = (\\det(kA))^{n-1} = (k^n \\det(A))^{n-1}',
    options: ['216', '576', '1728', '20736'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Moderate',
    explanation: 'For an n x n matrix, det(kA) = k^n * det(A). Here n = 3, so det(2A) = 2^3 * 3 = 24. Since det(adj(M)) = (det(M))^(n-1), det(adj(2A)) = (24)^(3-1) = 24^2 = 576.'
  },
  {
    qNum: 4,
    subject: 'Mathematics',
    topic: 'Vectors & 3D Geometry',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Find the volume of the parallelepiped whose coterminous edges are given by a = 2i - 3j + 4k, b = i + 2j - k, and c = 3i - j + 2k.',
    formulaOrLatex: 'V = |[\\vec{a} \\; \\vec{b} \\; \\vec{c}]|',
    options: ['-7', '7', '14', '21'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Easy',
    explanation: 'The volume is the scalar triple product: det([[2,-3,4],[1,2,-1],[3,-1,2]]) = 2(4-1) - (-3)(2 - (-3)) + 4(-1 - 6) = 2(3) + 3(5) + 4(-7) = 6 + 15 - 28 = -7. Since volume is positive, V = |-7| = 7 cubic units.'
  },
  {
    qNum: 5,
    subject: 'Mathematics',
    topic: 'Differential Equations',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'Solve the differential equation dy/dx + y * cot(x) = 2 * cos(x), given y(pi/2) = 1.',
    formulaOrLatex: 'I.F. = e^{\\int \\cot x \\, dx} = \\sin x',
    options: ['y = \\sin x', 'y = 2\\sin x - 1', 'y = \\sin^2 x', 'y = \\cos x + 1'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Integrating factor I.F. = sin x. Multiply equation: y * sin x = \\int 2 * cos x * sin x dx = sin^2 x + C. Using boundary condition y(pi/2) = 1 gives 1 * 1 = 1^2 + C => C = 0. Therefore, y = sin x.'
  },
  {
    qNum: 6,
    subject: 'Mathematics',
    topic: 'Probability & Bayes Theorem',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 140,
    marksAwarded: 4,
    questionText: 'An urn contains 4 red and 6 black balls. A ball is drawn at random and its color observed. Two additional balls of the same color are added back to the urn before drawing a second ball. Find the probability that the second ball is red.',
    formulaOrLatex: 'P(R_2) = P(R_1)P(R_2|R_1) + P(B_1)P(R_2|B_1)',
    options: ['2 / 5', '1 / 2', '3 / 8', '7 / 15'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'By Polya\'s Urn model, the probability of drawing a ball of a specified color at any subsequent draw remains identical to the initial probability: P(R2) = (4/10)*(6/12) + (6/10)*(4/12) = 24/120 + 24/120 = 48/120 = 2/5.'
  },
  {
    qNum: 7,
    subject: 'Mathematics',
    topic: 'Application of Derivatives',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Find the maximum value of the function f(x) = (1/x)^x for x > 0.',
    formulaOrLatex: 'f\'(x) = 0 \\implies x = 1/e \\implies f(1/e) = e^{1/e}',
    options: ['e', 'e^{1/e}', '1', '(1/e)^e'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Moderate',
    explanation: 'Let y = (1/x)^x. Taking ln gives ln(y) = -x * ln(x). Differentiating: (1/y) dy/dx = -(ln x + 1). Setting to 0 yields ln x = -1 => x = 1/e. The second derivative confirms a global maximum, giving y_max = (e)^(1/e).'
  },
  {
    qNum: 8,
    subject: 'Mathematics',
    topic: 'Conic Sections: Parabola',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Find the locus of the point of intersection of two perpendicular tangents to the parabola y^2 = 8x.',
    formulaOrLatex: '\\text{Director circle of parabola is its directrix: } x = -a',
    options: ['x = 2', 'x = -2', 'x^2 + y^2 = 4', 'y = -2'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Easy',
    explanation: 'The locus of intersection of mutually perpendicular tangents to any parabola y^2 = 4ax is its directrix x + a = 0. Here 4a = 8 => a = 2, so the equation is x = -2.'
  },
  {
    qNum: 9,
    subject: 'Mathematics',
    topic: 'Conic Sections: Ellipse',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'An ellipse has equation x^2/16 + y^2/9 = 1. Find the length of its latus rectum and eccentricity.',
    formulaOrLatex: 'L.R. = \\frac{2b^2}{a}, \\quad e = \\sqrt{1 - \\frac{b^2}{a^2}}',
    options: ['L.R. = 9/2, e = \\sqrt{7}/4', 'L.R. = 9/4, e = \\sqrt{7}/4', 'L.R. = 9/2, e = 3/4', 'L.R. = 18, e = 7/16'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Here a^2 = 16 => a = 4, b^2 = 9 => b = 3. Length of Latus Rectum = 2b^2/a = 2(9)/4 = 9/2. Eccentricity e = sqrt(1 - 9/16) = sqrt(7)/4.'
  },
  {
    qNum: 10,
    subject: 'Mathematics',
    topic: 'Permutations & Combinations',
    status: 'correct',
    timeSpentSec: 9,
    idealTimeSec: 130,
    marksAwarded: 4,
    questionText: 'Find the number of ways in which 5 letters can be placed into 5 addressed envelopes such that no letter goes into its correct envelope.',
    formulaOrLatex: 'D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!} \\implies D_5 = 44',
    options: ['40', '44', '52', '60'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Moderate',
    explanation: 'This is the standard Derangement formula D_n for n = 5: D_5 = 5!(1 - 1 + 1/2! - 1/3! + 1/4! - 1/5!) = 120(0 + 1/2 - 1/6 + 1/24 - 1/120) = 60 - 20 + 5 - 1 = 44.'
  },
  {
    qNum: 11,
    subject: 'Mathematics',
    topic: 'Binomial Theorem',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Find the remainder when 7^103 is divided by 25.',
    formulaOrLatex: '7^2 = 49 = 50 - 1 \\implies 7^{103} = 7 \\cdot (50 - 1)^{51}',
    options: ['7', '18', '14', '21'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Moderate',
    explanation: 'Write 7^103 = 7 * (7^2)^51 = 7 * (50 - 1)^51. Expanding using Binomial theorem: (50 - 1)^51 = 25k - 1. Multiplying by 7: 7 * (25k - 1) = 25m - 7 = 25(m-1) + 18. Thus the remainder is 18.'
  },
  // Q12 IS THE SINGLE WRONG QUESTION FROM REPORT (Mathematics, Silly Mistake, 0 marks, Net = 56)
  {
    qNum: 12,
    subject: 'Mathematics',
    topic: 'Complex Numbers (Hyperbolic locus)',
    status: 'incorrect',
    timeSpentSec: 14,
    idealTimeSec: 150,
    marksAwarded: 0,
    isSillyMistake: true,
    questionText: 'If z is a complex number such that |z - 3i| - |z + 3i| = 4, find the eccentricity of the conic represented by this equation in the complex Argand plane.',
    formulaOrLatex: '||z - z_1| - |z - z_2|| = 2a < 2c \\implies \\text{Hyperbola with } e = c/a',
    options: ['3 / 2', '2 / \\sqrt{5}', '3 / 2 (Selected C)', '5 / 4'],
    studentAnswer: 1,
    correctAnswer: 0,
    difficulty: 'Advanced',
    explanation: 'The equation ||z - z1| - |z - z2|| = 2a represents a hyperbola with foci at z1 = 3i and z2 = -3i. The focal distance 2c = |3i - (-3i)| = 6 => c = 3. Here 2a = 4 => a = 2. Thus eccentricity e = c/a = 3/2. Candidate mistakenly inverted a and c in mental calculation, selecting 2/sqrt(5).'
  },
  {
    qNum: 13,
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'If the roots of x^2 - px + q = 0 differ by 1, find the relationship between p and q.',
    formulaOrLatex: '(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta = 1',
    options: ['p^2 = 4q + 1', 'p^2 = 4q - 1', 'q^2 = 4p + 1', 'p^2 = 2q + 1'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Let roots be alpha and beta. alpha + beta = p and alpha * beta = q. Since |alpha - beta| = 1, squaring gives (alpha - beta)^2 = (alpha + beta)^2 - 4*alpha*beta = 1 => p^2 - 4q = 1 => p^2 = 4q + 1.'
  },
  {
    qNum: 14,
    subject: 'Mathematics',
    topic: 'Sequences & Series',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Find the infinite sum of the arithmetico-geometric series S = 1 + 2/3 + 3/9 + 4/27 + ...',
    formulaOrLatex: 'S = \\frac{a}{1-r} + \\frac{dr}{(1-r)^2}',
    options: ['9 / 4', '4 / 9', '3 / 2', '7 / 3'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Here a = 1, d = 1, r = 1/3. S - (1/3)S = 1 + 1/3 + 1/9 + 1/27 + ... = 1 / (1 - 1/3) = 3/2. Therefore (2/3)S = 3/2 => S = 9/4.'
  },
  {
    qNum: 15,
    subject: 'Mathematics',
    topic: 'Trigonometric Equations',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Find the number of solutions of sin^4(x) + cos^4(x) = sin(x)*cos(x) in the interval [0, 2pi].',
    formulaOrLatex: '1 - 2\\sin^2 x \\cos^2 x = \\sin x \\cos x',
    options: ['0', '2', '4', '8'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Let t = sin(x)*cos(x) = (1/2)*sin(2x). Then 1 - 2t^2 = t => 2t^2 + t - 1 = 0 => (2t - 1)(t + 1) = 0 => t = 1/2 or t = -1. Since t = (1/2)*sin(2x), t = -1 has no real solutions (sin 2x = -2). For t = 1/2 => sin(2x) = 1, checking gives sin x = cos x > 0 or < 0, but 1 - 2(1/4) = 1/2, however at sin 2x = 1, x = pi/4 or 5pi/4 where sin^4 + cos^4 = 1/4 + 1/4 = 1/2 and sin*cos = 1/2. Thus there are exactly 2 solutions or 0 depending on interval sign.'
  },
  {
    qNum: 16,
    subject: 'Mathematics',
    topic: 'Area Under Curves',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'Find the area of the region bounded by the curves y = x^2 and y = 2 - x^2.',
    formulaOrLatex: 'A = \\int_{-1}^{1} [(2 - x^2) - x^2] dx = \\frac{8}{3}',
    options: ['8 / 3', '4 / 3', '16 / 3', '2'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Points of intersection: x^2 = 2 - x^2 => 2x^2 = 2 => x = +/- 1. Area = 2 * \\int_0^1 (2 - 2x^2) dx = 2 * [2x - 2x^3/3]_0^1 = 2 * (2 - 2/3) = 2 * (4/3) = 8/3 sq units.'
  },
  {
    qNum: 17,
    subject: 'Mathematics',
    topic: 'Inverse Trigonometric Functions',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Evaluate tan[ (1/2) * cos^{-1}(sqrt(5)/3) ].',
    formulaOrLatex: '\\tan(\\theta/2) = \\sqrt{\\frac{1 - \\cos\\theta}{1 + \\cos\\theta}}',
    options: ['(3 - \\sqrt{5}) / 2', '(3 + \\sqrt{5}) / 2', '\\sqrt{5} / 3', '1 / 2'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Let theta = cos^{-1}(sqrt(5)/3). Then tan(theta/2) = sqrt((1 - cos theta)/(1 + cos theta)) = sqrt((3 - sqrt(5))/(3 + sqrt(5))) = (3 - sqrt(5)) / 2.'
  },
  {
    qNum: 18,
    subject: 'Mathematics',
    topic: '3D Geometry: Skew Lines',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 130,
    marksAwarded: 4,
    questionText: 'Find the shortest distance between the lines r = (i + 2j + 3k) + lambda(2i + 3j + 4k) and r = (2i + 4j + 5k) + mu(3i + 4j + 5k).',
    formulaOrLatex: 'd = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}',
    options: ['1 / \\sqrt{6}', '2 / \\sqrt{6}', '0', '3 / \\sqrt{6}'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'b1 x b2 = (-i + 2j - k). |b1 x b2| = sqrt(1 + 4 + 1) = sqrt(6). a2 - a1 = i + 2j + 2k. Dot product = 1(-1) + 2(2) + 2(-1) = -1 + 4 - 2 = 1. Distance d = |1| / sqrt(6) = 1/sqrt(6).'
  },

  // --- PHYSICS (Q19 to Q36) - All 18 Correct, 60/60 Marks ---
  {
    qNum: 19,
    subject: 'Physics',
    topic: 'Current Electricity',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'In a potentiometer wire of length 100 cm, a balancing point is obtained at 60 cm for a cell of emf E1. When another cell of emf E2 is connected in series with E1 in the same direction, the balance point shifts to 80 cm. Find the ratio E1 : E2.',
    formulaOrLatex: 'E_1 \\propto l_1 \\quad \\text{and} \\quad (E_1 + E_2) \\propto l_2',
    options: ['3 : 1', '4 : 1', '2 : 1', '3 : 2'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Since potential drop is linear: E1 = k * 60, (E1 + E2) = k * 80. (E1 + E2)/E1 = 80/60 = 4/3 => 1 + E2/E1 = 4/3 => E2/E1 = 1/3 => E1 : E2 = 3 : 1.'
  },
  {
    qNum: 20,
    subject: 'Physics',
    topic: 'Rotational Mechanics',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 130,
    marksAwarded: 4,
    questionText: 'A solid cylinder of mass M and radius R rolls without slipping down an inclined plane of inclination theta. Find the linear acceleration of the center of mass.',
    formulaOrLatex: 'a = \\frac{g \\sin\\theta}{1 + \\frac{I}{MR^2}} = \\frac{2}{3} g \\sin\\theta',
    options: ['(2/3) g sin theta', '(1/2) g sin theta', '(3/4) g sin theta', 'g sin theta'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'For a solid cylinder, moment of inertia I = (1/2) M R^2. Linear acceleration a = g sin(theta) / (1 + I/(MR^2)) = g sin(theta) / (1 + 1/2) = (2/3) g sin(theta).'
  },
  {
    qNum: 21,
    subject: 'Physics',
    topic: 'Electrostatics',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'A point charge q is placed at the center of an open hemispherical surface of radius R. Find the electric flux passing through the surface.',
    formulaOrLatex: '\\Phi = \\frac{q}{2\\epsilon_0}',
    options: ['q / \\epsilon_0', 'q / (2\\epsilon_0)', 'q / (4\\epsilon_0)', '0'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Easy',
    explanation: 'By completing the sphere symmetrically with another identical hemisphere, total flux by Gauss\'s law is q/epsilon_0. By symmetry, exactly half passes through the open hemisphere: Phi = q / (2 epsilon_0).'
  },
  {
    qNum: 22,
    subject: 'Physics',
    topic: 'Capacitance',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'A parallel plate capacitor has capacitance C0. A dielectric slab of dielectric constant K and thickness d/2 is inserted between the plates. Find the new capacitance.',
    formulaOrLatex: 'C = \\frac{\\epsilon_0 A}{d - t + \\frac{t}{K}} = \\frac{2K}{K + 1} C_0',
    options: ['(2K / (K + 1)) C0', '((K + 1) / 2K) C0', 'K C0', '(K + 1) C0'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Treat as two capacitors in series: C1 with air of thickness d/2 (C1 = 2 C0) and C2 with dielectric of thickness d/2 (C2 = 2 K C0). C_eq = (C1 * C2) / (C1 + C2) = (4 K C0^2) / (2 C0 (1 + K)) = 2K/(K+1) * C0.'
  },
  {
    qNum: 23,
    subject: 'Physics',
    topic: 'Magnetism & Current',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'A square loop of wire of side a carries a steady current I. Find the magnetic field B at the geometric center of the loop.',
    formulaOrLatex: 'B = 4 \\times \\frac{\\mu_0 I}{4\\pi (a/2)} (\\sin 45^\\circ + \\sin 45^\\circ) = \\frac{2\\sqrt{2}\\mu_0 I}{\\pi a}',
    options: ['(2\\sqrt{2} \\mu_0 I) / (\\pi a)', '(\\mu_0 I) / (2\\pi a)', '(4\\sqrt{2} \\mu_0 I) / (\\pi a)', '(\\sqrt{2} \\mu_0 I) / (\\pi a)'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Each side produces B1 = (mu_0 I / (4 pi d)) * 2 sin(45) where d = a/2. B1 = (mu_0 I / (2 pi a)) * sqrt(2). All four sides contribute in the same direction, so B_total = 4 * B1 = (2 sqrt(2) mu_0 I) / (pi a).'
  },
  {
    qNum: 24,
    subject: 'Physics',
    topic: 'Electromagnetic Induction',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'A conducting rod of length L rotates with constant angular velocity omega about one end in a uniform magnetic field B perpendicular to the plane of rotation. Find the induced EMF.',
    formulaOrLatex: '\\mathcal{E} = \\frac{1}{2} B \\omega L^2',
    options: ['B \\omega L^2', '(1/2) B \\omega L^2', '(1/4) B \\omega L^2', '2 B \\omega L^2'],
    studentAnswer: 1,
    correctAnswer: 1,
    difficulty: 'Easy',
    explanation: 'The linear velocity at distance r from the pivot is v = omega * r. Induced EMF dE = B * v * dr = B * omega * r dr. Integrating from 0 to L gives E = (1/2) B omega L^2.'
  },
  {
    qNum: 25,
    subject: 'Physics',
    topic: 'Alternating Current',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'In a series LCR circuit, resonance occurs at frequency omega_0. If L is doubled and C is halved, find the new resonant frequency.',
    formulaOrLatex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}',
    options: ['\\omega_0', '2 \\omega_0', '\\omega_0 / 2', '4 \\omega_0'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'The resonant frequency is omega_0 = 1 / sqrt(LC). New product L\' * C\' = (2L) * (C/2) = LC. Since the product remains invariant, the resonant frequency remains unchanged at omega_0.'
  },
  {
    qNum: 26,
    subject: 'Physics',
    topic: 'Ray Optics',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 30 cm. Find the power and nature of the combination.',
    formulaOrLatex: 'P = P_1 + P_2 = \\frac{100}{f_1} + \\frac{100}{f_2} = +1.67 \\text{ D (Converging)}',
    options: ['+1.67 D (Converging)', '-1.67 D (Diverging)', '+5 D (Converging)', '-5 D (Diverging)'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'f1 = +20 cm, f2 = -30 cm. 1/F = 1/20 - 1/30 = 1/60 cm => F = +60 cm. Power P = 100 / 60 = +1.67 Dioptres. Positive power indicates a converging system.'
  },
  {
    qNum: 27,
    subject: 'Physics',
    topic: 'Wave Optics (YDSE)',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'In Young\'s double-slit experiment, when a thin transparent mica sheet of thickness t and refractive index mu is placed in the path of one slit, find the fringe shift Delta y.',
    formulaOrLatex: '\\Delta y = \\frac{D}{d} (\\mu - 1) t',
    options: ['(D/d) (\\mu - 1) t', '(d/D) (\\mu - 1) t', '(D/d) \\mu t', '(\\mu - 1) t'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'The extra optical path introduced by the mica sheet is (mu - 1)t. Fringe shift Delta y = (D/d) * Delta x = (D/d)(mu - 1)t towards the side where the sheet is introduced.'
  },
  {
    qNum: 28,
    subject: 'Physics',
    topic: 'Thermodynamics',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'A Carnot engine operates between temperatures T1 = 500 K and T2 = 300 K. If it absorbs 1000 J of heat from the source per cycle, find the work done per cycle.',
    formulaOrLatex: '\\eta = 1 - \\frac{T_2}{T_1} = \\frac{W}{Q_1} \\implies W = 400 \\text{ J}',
    options: ['400 J', '600 J', '200 J', '500 J'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Efficiency eta = 1 - 300/500 = 2/5 = 0.40. Work done W = eta * Q1 = 0.40 * 1000 J = 400 J.'
  },
  {
    qNum: 29,
    subject: 'Physics',
    topic: 'Kinetic Theory of Gases',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Find the ratio of RMS velocity of Hydrogen molecules at 300 K to Oxygen molecules at 1200 K.',
    formulaOrLatex: 'v_{rms} = \\sqrt{\\frac{3RT}{M}} \\implies \\frac{v_{H2}}{v_{O2}} = \\sqrt{\\frac{T_1 M_2}{T_2 M_1}}',
    options: ['2 : 1', '1 : 2', '4 : 1', '1 : 4'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'v_rms = sqrt(3RT/M). Ratio = sqrt( (300 / 1200) * (32 / 2) ) = sqrt( (1/4) * 16 ) = sqrt(4) = 2. Thus the ratio is 2 : 1.'
  },
  {
    qNum: 30,
    subject: 'Physics',
    topic: 'Oscillations (SHM)',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'A particle executes SHM with amplitude A. At what displacement from the mean position is its kinetic energy equal to its potential energy?',
    formulaOrLatex: '\\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k x^2 \\implies x = \\frac{A}{\\sqrt{2}}',
    options: ['A / \\sqrt{2}', 'A / 2', 'A / 4', 'A / \\sqrt{3}'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'KE = PE => (1/2) m omega^2 (A^2 - x^2) = (1/2) m omega^2 x^2 => A^2 - x^2 = x^2 => 2 x^2 = A^2 => x = A / sqrt(2).'
  },
  {
    qNum: 31,
    subject: 'Physics',
    topic: 'Waves & Sound',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'A source of sound emitting frequency f moves with speed v/5 towards a stationary observer, where v is the speed of sound. Find the apparent frequency heard by the observer.',
    formulaOrLatex: 'f\' = f \\left( \\frac{v}{v - v_s} \\right) = f \\left( \\frac{v}{v - v/5} \\right) = \\frac{5}{4} f',
    options: ['(5/4) f', '(4/5) f', '(6/5) f', '(5/6) f'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Using the Doppler formula for approaching source: f\' = f * [v / (v - vs)] = f * [v / (v - v/5)] = f * [1 / (4/5)] = (5/4) f = 1.25 f.'
  },
  {
    qNum: 32,
    subject: 'Physics',
    topic: 'Photoelectric Effect',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'When radiation of wavelength lambda is incident on a photosensitive metal, stopping potential is 3V0. When radiation of wavelength 2*lambda is incident, stopping potential is V0. Find the threshold wavelength.',
    formulaOrLatex: 'eV_0 = \\frac{hc}{2\\lambda} - \\phi \\implies \\lambda_0 = 4\\lambda',
    options: ['4 \\lambda', '3 \\lambda', '5 \\lambda', '2.5 \\lambda'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'e(3V0) = hc/lambda - phi and e(V0) = hc/(2 lambda) - phi. Multiply second equation by 3: 3 e V0 = 3hc/(2 lambda) - 3 phi. Equating: hc/lambda - phi = 3hc/(2 lambda) - 3 phi => 2 phi = hc/(2 lambda) => phi = hc/(4 lambda). Since phi = hc/lambda_0, threshold wavelength lambda_0 = 4 lambda.'
  },
  {
    qNum: 33,
    subject: 'Physics',
    topic: 'Atomic Physics: Bohr Model',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Find the ratio of the radius of the second Bohr orbit of He+ ion to the third Bohr orbit of Li2+ ion.',
    formulaOrLatex: 'r_n \\propto \\frac{n^2}{Z} \\implies \\frac{r_1}{r_2} = \\frac{n_1^2 / Z_1}{n_2^2 / Z_2}',
    options: ['2 : 3', '4 : 9', '3 : 2', '1 : 2'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Radius r_n = 0.529 * n^2/Z Angstrom. For He+ (n=2, Z=2): r1 proportional to 2^2/2 = 2. For Li2+ (n=3, Z=3): r2 proportional to 3^2/3 = 3. Therefore the ratio is 2 : 3.'
  },
  {
    qNum: 34,
    subject: 'Physics',
    topic: 'Nuclear Physics',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'The half-life of a radioactive isotope is 20 days. If the initial activity is 8000 dps, find the activity remaining after 60 days.',
    formulaOrLatex: 'A = A_0 \\left(\\frac{1}{2}\\right)^n \\quad \\text{where } n = \\frac{60}{20} = 3',
    options: ['1000 dps', '2000 dps', '500 dps', '4000 dps'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Number of half-lives elapsed n = 60 / 20 = 3. Activity remaining A = A0 / (2^3) = 8000 / 8 = 1000 dps.'
  },
  {
    qNum: 35,
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'A large tank filled with water has a small orifice at depth h below the water surface. Find the velocity of efflux of water through the orifice (Torricelli\'s Law).',
    formulaOrLatex: 'v = \\sqrt{2gh}',
    options: ['\\sqrt{2gh}', '\\sqrt{gh}', '2\\sqrt{gh}', '\\sqrt{gh/2}'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Applying Bernoulli\'s theorem between the open top surface and the orifice: P_atm + rho * g * h = P_atm + (1/2) rho * v^2 => v = sqrt(2gh).'
  },
  {
    qNum: 36,
    subject: 'Physics',
    topic: 'Semiconductor Electronics',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Which diode is specifically designed to operate continuously in the reverse breakdown voltage region for voltage regulation?',
    formulaOrLatex: 'V_Z = \\text{constant in reverse breakdown}',
    options: ['Zener Diode', 'Photodiode', 'Light Emitting Diode (LED)', 'Varactor Diode'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'A Zener diode is heavily doped so that it exhibits a sharp reverse breakdown voltage (Zener breakdown) and maintains an almost constant voltage irrespective of current fluctuations.'
  },

  // --- CHEMISTRY (Q37 to Q54) - All 18 Correct, 60/60 Marks ---
  {
    qNum: 37,
    subject: 'Chemistry',
    topic: 'Coordination Compounds',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Find the magnetic moment (spin-only) of the complex [Fe(CN)6]3- in Bohr Magnetons (BM).',
    formulaOrLatex: '\\mu = \\sqrt{n(n+2)} \\text{ BM}, \\quad \\text{Fe}^{3+} \\; d^5 \\text{ with strong field } \\text{CN}^- \\implies n = 1',
    options: ['1.73 BM', '5.92 BM', '2.83 BM', '0 BM'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Fe3+ has configuration [Ar] 3d5. CN- is a strong field ligand according to the spectrochemical series, causing pairing of electrons: t2g^5 eg^0. The number of unpaired electrons n = 1. Spin-only magnetic moment mu = sqrt(1*(1+2)) = sqrt(3) = 1.73 BM.'
  },
  {
    qNum: 38,
    subject: 'Chemistry',
    topic: 'Thermodynamics & Kinetics',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'For a first-order reaction A -> Products, the half-life is 10 minutes. Find the time required for 99.9% completion of the reaction.',
    formulaOrLatex: 't_{99.9\\%} \\approx 10 \\times t_{1/2} = 100 \\text{ minutes}',
    options: ['100 minutes', '30 minutes', '60 minutes', '50 minutes'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 't_99.9% = (2.303 / k) * log(100 / 0.1) = (2.303 / k) * 3 = 3 * (2.303/k). Since t_1/2 = 0.693 / k = (2.303 * log 2) / k = 0.3010 * (2.303/k). Ratio t_99.9% / t_1/2 = 3 / 0.3010 = 9.966 approx 10. Thus t = 10 * 10 = 100 minutes.'
  },
  {
    qNum: 39,
    subject: 'Chemistry',
    topic: 'Organic Reaction Mechanisms',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Identify the major product obtained when 2-bromobutane is treated with alcoholic KOH under heat.',
    formulaOrLatex: '\\text{Saytzeff Rule: Most substituted alkene is major} \\implies \\text{But-2-ene}',
    options: ['But-2-ene (trans major)', 'But-1-ene', 'Butan-2-ol', 'Butane'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Elimination with alcoholic KOH follows Saytzeff\'s (Zaitsev) rule, favoring the more substituted and thermodynamically stable alkene. Beta-elimination yields But-2-ene as the major product (trans > cis).'
  },
  {
    qNum: 40,
    subject: 'Chemistry',
    topic: 'Electrochemistry',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 120,
    marksAwarded: 4,
    questionText: 'Find the standard EMF of the Daniell cell Zn | Zn2+(1M) || Cu2+(1M) | Cu, given E^0(Zn2+/Zn) = -0.76 V and E^0(Cu2+/Cu) = +0.34 V.',
    formulaOrLatex: 'E^0_{\\text{cell}} = E^0_{\\text{cathode}} - E^0_{\\text{anode}} = +0.34 - (-0.76) = 1.10 \\text{ V}',
    options: ['1.10 V', '0.42 V', '-1.10 V', '2.20 V'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Cathode is copper and anode is zinc. E^0_cell = E^0_cathode - E^0_anode = +0.34 V - (-0.76 V) = +1.10 V.'
  },
  {
    qNum: 41,
    subject: 'Chemistry',
    topic: 'Ionic Equilibrium',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Calculate the pH of a 10^-8 M HCl aqueous solution at 25 degrees C.',
    formulaOrLatex: '[H^+]_{\\text{total}} = 10^{-8} + 10^{-7} \\text{ (water)} \\approx 1.05 \\times 10^{-7} \\implies \\text{pH} = 6.98',
    options: ['6.98', '8.00', '7.00', '6.00'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'Because HCl concentration is extremely dilute, auto-protolysis of water cannot be neglected. Total [H+] = [H+]_acid + [H+]_water = 10^-8 + x. Setting (10^-8 + x) * x = 10^-14 yields total [H+] = 1.05 * 10^-7 M, giving pH = -log(1.05 * 10^-7) = 6.98 (slightly acidic, never basic).'
  },
  {
    qNum: 42,
    subject: 'Chemistry',
    topic: 'Chemical Bonding',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Find the hybridization of the central Xenon atom and the geometry of XeF4 molecule.',
    formulaOrLatex: '\\text{Steric Number} = 4 \\text{ bond pairs} + 2 \\text{ lone pairs} = 6 \\implies sp^3d^2 \\text{ (Square planar)}',
    options: ['sp^3d^2 (Square Planar)', 'sp^3d (See-saw)', 'sp^3 (Tetrahedral)', 'sp^3d^2 (Octahedral)'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Xenon has 8 valence electrons. With 4 fluorine atoms, it forms 4 single sigma bonds and retains 2 lone pairs. Steric number = 4 + 2 = 6, corresponding to sp^3d^2 hybridization with a square planar molecular geometry.'
  },
  {
    qNum: 43,
    subject: 'Chemistry',
    topic: 'Aldehydes & Ketones',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Which of the following compounds gives a positive iodoform test upon reaction with I2 and aqueous NaOH?',
    formulaOrLatex: '\\text{Requires } \\text{CH}_3-\\text{C=O} \\text{ or } \\text{CH}_3-\\text{CH(OH)}- \\text{ group}',
    options: ['Pentan-2-one', 'Pentan-3-one', 'Benzaldehyde', 'Methanol'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'A positive iodoform test requires either a methyl ketone group (CH3-C=O) or a CH3-CH(OH)- unit. Pentan-2-one (CH3-CO-CH2-CH2-CH3) possesses the methyl carbonyl group and yields yellow CHI3 precipitate.'
  },
  {
    qNum: 44,
    subject: 'Chemistry',
    topic: 'd-Block Elements',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Find the oxidation state of Chromium in Potassium Dichromate (K2Cr2O7).',
    formulaOrLatex: '2(+1) + 2(x) + 7(-2) = 0 \\implies 2x - 12 = 0 \\implies x = +6',
    options: ['+6', '+3', '+4', '+7'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Potassium is +1 and Oxygen is -2. 2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2(Cr) - 14 = 0 => 2(Cr) = 12 => Cr = +6.'
  },
  {
    qNum: 45,
    subject: 'Chemistry',
    topic: 'Solutions & Colligative Properties',
    status: 'correct',
    timeSpentSec: 8,
    idealTimeSec: 110,
    marksAwarded: 4,
    questionText: 'Find the Van \'t Hoff factor i for an electrolyte of type A2B which is 80% dissociated in aqueous solution.',
    formulaOrLatex: 'i = 1 + (n - 1)\\alpha, \\quad n = 3, \\alpha = 0.8 \\implies i = 1 + 2(0.8) = 2.6',
    options: ['2.6', '2.4', '3.0', '1.8'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Moderate',
    explanation: 'For A2B -> 2A+ + B2-, the number of ions n = 3. Using the dissociation formula: i = 1 + (n - 1) * alpha = 1 + (3 - 1) * 0.8 = 1 + 1.6 = 2.6.'
  },
  {
    qNum: 46,
    subject: 'Chemistry',
    topic: 'Carboxylic Acids & Amines',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'Which reagent is used in the Hoffmann Bromamide Degradation to convert primary amides into primary amines with one less carbon atom?',
    formulaOrLatex: '\\text{R-CONH}_2 + \\text{Br}_2 + 4\\text{KOH} \\longrightarrow \\text{R-NH}_2 + \\text{K}_2\\text{CO}_3 + 2\\text{KBr} + 2\\text{H}_2\\text{O}',
    options: ['Br2 + alcoholic/aqueous KOH', 'LiAlH4 in ether', 'PCl5 followed by NH3', 'HNO2 at 0-5 C'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Hoffmann bromamide degradation involves treating an amide with bromine in aqueous or ethanolic solution of sodium hydroxide / potassium hydroxide to produce a primary amine with one carbon atom less.'
  },
  {
    qNum: 47,
    subject: 'Chemistry',
    topic: 'Biomolecules',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Which of the following nitrogenous bases is present exclusively in RNA and not in DNA?',
    formulaOrLatex: '\\text{Uracil replaces Thymine in RNA}',
    options: ['Uracil', 'Thymine', 'Cytosine', 'Adenine'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'DNA contains Adenine, Guanine, Cytosine, and Thymine. In RNA, Thymine is replaced by Uracil.'
  },
  {
    qNum: 48,
    subject: 'Chemistry',
    topic: 'Periodic Trends',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Why is the first ionization enthalpy of Nitrogen higher than that of Oxygen?',
    formulaOrLatex: '\\text{N: } [\\text{He}] 2s^2 2p^3 \\text{ (half-filled stability)}',
    options: ['Extra stability of half-filled 2p3 subshell', 'Nitrogen has smaller atomic radius', 'Oxygen has greater nuclear charge', 'Nitrogen has d-orbitals'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Nitrogen has an electronic configuration of 1s2 2s2 2p3 with an exactly half-filled 2p subshell, conferring extra exchange energy and stability, requiring higher ionization energy to remove an electron compared to Oxygen (2s2 2p4).'
  },
  {
    qNum: 49,
    subject: 'Chemistry',
    topic: 'Chemical Equilibrium',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'For the exothermic reaction N2(g) + 3H2(g) <=> 2NH3(g) (Delta H < 0), what condition favors maximum yield of Ammonia according to Le Chatelier\'s principle?',
    formulaOrLatex: '\\text{Exothermic (low T) and volume reduction } (4 \\to 2 \\text{ moles, high P)}',
    options: ['High pressure and Low temperature', 'Low pressure and High temperature', 'High pressure and High temperature', 'Low pressure and Low temperature'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Forward reaction decreases the number of gaseous moles (4 to 2), favored by high pressure. Because the reaction is exothermic, lower temperature shifts equilibrium towards the forward direction.'
  },
  {
    qNum: 50,
    subject: 'Chemistry',
    topic: 'Solid State & Solutions',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 100,
    marksAwarded: 4,
    questionText: 'In a face-centered cubic (FCC) unit cell, find the total effective number of atoms per unit cell.',
    formulaOrLatex: 'N = 8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 1 + 3 = 4',
    options: ['4', '2', '1', '6'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'In FCC, 8 corners contribute 8 * (1/8) = 1 atom, and 6 faces contribute 6 * (1/2) = 3 atoms. Total atoms per unit cell Z = 1 + 3 = 4.'
  },
  {
    qNum: 51,
    subject: 'Chemistry',
    topic: 'GOC: Carbocation Stability',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Arrange the following carbocations in order of decreasing stability: (CH3)3C+, (CH3)2CH+, CH3CH2+, CH3+.',
    formulaOrLatex: '3^\\circ > 2^\\circ > 1^\\circ > \\text{methyl} \\text{ (Hyperconjugation)}',
    options: ['3° > 2° > 1° > methyl', 'methyl > 1° > 2° > 3°', '2° > 3° > 1° > methyl', '3° > 1° > 2° > methyl'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Tertiary carbocations have 9 hyperconjugative alpha-hydrogens and +I inductive stabilization, making (CH3)3C+ the most stable, followed by 2° (6 alpha-H), 1° (3 alpha-H), and methyl carbocation.'
  },
  {
    qNum: 52,
    subject: 'Chemistry',
    topic: 'Structure of Atom',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 90,
    marksAwarded: 4,
    questionText: 'Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 100 Volts.',
    formulaOrLatex: '\\lambda = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA} = \\frac{12.27}{10} = 1.227 \\text{ \\AA}',
    options: ['1.227 Å', '0.1227 Å', '12.27 Å', '1.227 nm'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Using de Broglie formula for an electron: lambda = 12.27 / sqrt(V) Angstroms. Here V = 100 V, so lambda = 12.27 / 10 = 1.227 Angstroms (or 0.1227 nm).'
  },
  {
    qNum: 53,
    subject: 'Chemistry',
    topic: 'Environmental Chemistry',
    status: 'correct',
    timeSpentSec: 6,
    idealTimeSec: 80,
    marksAwarded: 4,
    questionText: 'Which of the following oxides of nitrogen is primarily responsible for photochemical smog and brown haze in cities?',
    formulaOrLatex: '\\text{NO}_2 \\xrightarrow{h\\nu} \\text{NO} + [\\text{O}]',
    options: ['Nitrogen dioxide (NO2)', 'Nitrous oxide (N2O)', 'Dinitrogen pentoxide (N2O5)', 'Nitric oxide (NO)'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Nitrogen dioxide (NO2) absorbs sunlight in the blue region of the spectrum and gives urban smog its characteristic brown-yellow hue while photolyzing to produce reactive nascent oxygen atoms that generate ozone.'
  },
  {
    qNum: 54,
    subject: 'Chemistry',
    topic: 'Polymers & Everyday Chemistry',
    status: 'correct',
    timeSpentSec: 7,
    idealTimeSec: 80,
    marksAwarded: 4,
    questionText: 'Nylon-6,6 is a condensation copolymer synthesized from which two monomers?',
    formulaOrLatex: '\\text{Adipic acid} + \\text{Hexamethylenediamine} \\longrightarrow \\text{Nylon-6,6}',
    options: ['Adipic acid and Hexamethylenediamine', 'Caprolactam', 'Terephthalic acid and Ethylene glycol', 'Phenol and Formaldehyde'],
    studentAnswer: 0,
    correctAnswer: 0,
    difficulty: 'Easy',
    explanation: 'Nylon-6,6 is prepared by condensation polymerization of adipic acid (HOOC-(CH2)4-COOH, 6 carbons) and hexamethylenediamine (H2N-(CH2)6-NH2, 6 carbons) under high pressure and temperature.'
  }
];

export const SampleReportSection: React.FC = () => {
  const report = RANKPILOT_SAMPLE_REPORT;
  const [activeView, setActiveView] = useState<'individual' | 'consolidated'>('individual');
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'All' | 'Mathematics' | 'Physics' | 'Chemistry' | 'Incorrect'>('All');
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(11); // Defaults to Q12 (the wrong question)
  const [activeQuestionModal, setActiveQuestionModal] = useState<QuestionReportItem | null>(null);

  const filteredQuestions = FULL_MOCK_QUESTIONS.filter(q => {
    if (selectedSubjectFilter === 'All') return true;
    if (selectedSubjectFilter === 'Incorrect') return q.status === 'incorrect';
    return q.subject === selectedSubjectFilter;
  });

  const currentPreviewQuestion = FULL_MOCK_QUESTIONS[selectedQuestionIndex] || FULL_MOCK_QUESTIONS[11];

  return (
    <section id="sample-report" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>Official RankPilot Mock Test Report</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Instant Diagnostic Mock Test Report & <br />
            <span className="text-emerald-700">Consolidated 5-Test Analytics</span>
          </h2>

          <p className="text-base text-slate-600 font-medium">
            After every mock test, RankPilot instantly analyzes your subject accuracy, time spent, and marks distribution. Track single-test performance or view consolidated progress across your last five mocks.
          </p>
        </div>

        {/* View Switcher: Individual Report vs Consolidated 5-Test Report */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveView('individual')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeView === 'individual'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Mock Test Report (Scorecard & Question Summary)</span>
            </button>

            <button
              onClick={() => setActiveView('consolidated')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeView === 'consolidated'
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Consolidated 5-Test Progress Report</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: AUTHENTIC MOCK TEST REPORT - DUAL SIDE-BY-SIDE VIEW */}
        {activeView === 'individual' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Report Top Meta Header */}
              <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-emerald-500 text-slate-950 font-black text-[10px] uppercase px-2 py-0.5 rounded">
                      Official NTA/JEE Evaluation
                    </span>
                    <span className="text-xs text-slate-300 font-mono">28/09/2026</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    JEE Advanced 2026 - Paper 2
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Candidate: <strong className="text-white">RankPilot Admin</strong> • Evaluation Completed
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs text-slate-400 font-bold uppercase">Net Score</div>
                    <div className="text-2xl font-black text-emerald-400">176 / 180</div>
                  </div>
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Attempt Similar Paper</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 4 Score Highlight Cards (From User Screenshot) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
                {/* Score */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Net Score</span>
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-blue-700">176</span>
                    <span className="text-xs font-bold text-slate-400">/ 180</span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-600 mt-2">
                    53 Correct • 1 Wrong • 0 Skipped
                  </div>
                </div>

                {/* Accuracy */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Total Accuracy</span>
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600">98%</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 mt-2">
                    High Precision Attempt
                  </div>
                </div>

                {/* Physics & Chem */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Physics & Chem</span>
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-purple-700">100%</span>
                  </div>
                  <div className="text-[11px] font-bold text-purple-600 mt-2">
                    60/60 Physics • 60/60 Chemistry
                  </div>
                </div>

                {/* Time Taken */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Time Utilized</span>
                    <Clock className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">6m 45s</span>
                    <span className="text-xs font-bold text-slate-400">/ 180m</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 mt-2">
                    Lightning Fast Speed
                  </div>
                </div>
              </div>

              {/* DUAL SIDE-BY-SIDE PANES: 
                  LEFT: 1. Subject-wise marks & time (Report Image & Scorecard Table)
                  RIGHT: 2. Question-wise summary (54-Question Interactive Palette & Solutions) */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* LEFT COLUMN: Section 1: Subject-wise marks & time */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-black uppercase">
                            Section 1
                          </span>
                          <span className="text-xs text-slate-400 font-bold">Scorecard Matrix</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900">
                          1. Subject-wise marks & time
                        </h4>
                      </div>

                      <button
                        onClick={() => setIsImageZoomed(!isImageZoomed)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{isImageZoomed ? 'Reset Zoom' : 'Enlarge'}</span>
                      </button>
                    </div>

                    {/* Scorecard Image with Zoom */}
                    <div className={`rounded-2xl border-2 border-slate-200 overflow-hidden shadow-md bg-white transition-all duration-300 ${
                      isImageZoomed ? 'ring-4 ring-blue-500/20' : ''
                    }`}>
                      <img 
                        src="/mock_test_report.png" 
                        alt="RankPilot Official Mock Test Report for JEE Advanced 2026 Paper 2" 
                        className={`w-full object-contain mx-auto transition-transform duration-300 ${
                          isImageZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        onClick={() => setIsImageZoomed(!isImageZoomed)}
                      />
                    </div>

                    {/* Subject-Wise Verified Marks Table matching the screenshot */}
                    <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                      <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                          Official Shift Evaluation Table
                        </span>
                        <span className="text-xs font-bold text-emerald-700">Net: 176 / 180 (98%)</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] border-b border-slate-200">
                            <tr>
                              <th className="py-2.5 px-3">Subject</th>
                              <th className="py-2.5 px-3 text-center">Correct</th>
                              <th className="py-2.5 px-3 text-center">Wrong</th>
                              <th className="py-2.5 px-3 text-center">Skipped</th>
                              <th className="py-2.5 px-3 text-right">Net Marks</th>
                              <th className="py-2.5 px-3 text-right">Accuracy</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                            <tr className="hover:bg-slate-50/60">
                              <td className="py-2.5 px-3 font-bold text-slate-900">Mathematics</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">17</td>
                              <td className="py-2.5 px-3 text-center font-bold text-rose-600">1</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right font-black text-slate-900">56 / 60</td>
                              <td className="py-2.5 px-3 text-right font-bold text-slate-700">94%</td>
                            </tr>
                            <tr className="hover:bg-slate-50/60">
                              <td className="py-2.5 px-3 font-bold text-slate-900">Physics</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">18</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right font-black text-emerald-600">60 / 60</td>
                              <td className="py-2.5 px-3 text-right font-bold text-emerald-600">100%</td>
                            </tr>
                            <tr className="hover:bg-slate-50/60">
                              <td className="py-2.5 px-3 font-bold text-slate-900">Chemistry</td>
                              <td className="py-2.5 px-3 text-center font-bold text-emerald-600">18</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right font-black text-emerald-600">60 / 60</td>
                              <td className="py-2.5 px-3 text-right font-bold text-emerald-600">100%</td>
                            </tr>
                          </tbody>
                          <tfoot className="bg-slate-50 font-black text-slate-900 border-t border-slate-200">
                            <tr>
                              <td className="py-2.5 px-3">Total</td>
                              <td className="py-2.5 px-3 text-center text-emerald-600">53</td>
                              <td className="py-2.5 px-3 text-center text-rose-600">1</td>
                              <td className="py-2.5 px-3 text-center text-slate-400">0</td>
                              <td className="py-2.5 px-3 text-right text-blue-700 text-sm">176 / 180</td>
                              <td className="py-2.5 px-3 text-right text-emerald-600">98%</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs text-blue-900">
                      <span>⚡ <strong>Time Utilized:</strong> 6m 45s of 180 min (Fast pace)</span>
                      <span className="font-bold text-blue-700">Official NTA Verification ✓</span>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Section 2: Question-wise summary */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-black uppercase">
                            Section 2
                          </span>
                          <span className="text-xs text-slate-400 font-bold">Full 54-Question Review</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900">
                          2. Question-wise summary
                        </h4>
                      </div>

                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        53 Correct • 1 Wrong
                      </span>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                      {(['All', 'Mathematics', 'Physics', 'Chemistry', 'Incorrect'] as const).map(tab => (
                        <button
                          key={tab}
                          onClick={() => setSelectedSubjectFilter(tab)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedSubjectFilter === tab
                              ? 'bg-blue-700 text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                          }`}
                        >
                          {tab === 'All' && 'All (54)'}
                          {tab === 'Mathematics' && 'Maths (18)'}
                          {tab === 'Physics' && 'Physics (18)'}
                          {tab === 'Chemistry' && 'Chem (18)'}
                          {tab === 'Incorrect' && '⚠️ Wrong (1)'}
                        </button>
                      ))}
                    </div>

                    {/* Question Palette (Numbered Grid of 54 Questions) */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                        <span>Click any question to view its solution:</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Correct (+4)
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Wrong (0)
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-9 gap-1.5 sm:gap-2 pt-1">
                        {FULL_MOCK_QUESTIONS.map((q, idx) => {
                          const isSelected = selectedQuestionIndex === idx;
                          const isCorrect = q.status === 'correct';

                          return (
                            <button
                              key={q.qNum}
                              onClick={() => setSelectedQuestionIndex(idx)}
                              className={`h-8 sm:h-9 rounded-lg font-black text-xs transition-all relative flex items-center justify-center ${
                                isCorrect
                                  ? 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300'
                                  : 'bg-rose-500 hover:bg-rose-600 text-white shadow-sm animate-pulse border border-rose-600'
                              } ${
                                isSelected ? 'ring-2 ring-blue-600 ring-offset-1 font-black scale-105' : ''
                              }`}
                              title={`Q${q.qNum}: ${q.subject} - ${q.topic} (${isCorrect ? '+4' : '0'} marks)`}
                            >
                              <span>{q.qNum}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Currently Selected Question Card */}
                    <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-md space-y-3">
                      <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                              currentPreviewQuestion.subject === 'Mathematics'
                                ? 'bg-indigo-100 text-indigo-800'
                                : currentPreviewQuestion.subject === 'Physics'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}>
                              Q{currentPreviewQuestion.qNum} • {currentPreviewQuestion.subject}
                            </span>
                            <span className="text-xs font-semibold text-slate-500">
                              {currentPreviewQuestion.topic}
                            </span>
                          </div>

                          <div className="text-xs text-slate-500 font-medium">
                            Time spent: <strong className="text-slate-800">{currentPreviewQuestion.timeSpentSec}s</strong> (Ideal: {currentPreviewQuestion.idealTimeSec}s) • Difficulty: {currentPreviewQuestion.difficulty}
                          </div>
                        </div>

                        {/* Marks & Status Badge */}
                        <div className="text-right shrink-0">
                          {currentPreviewQuestion.status === 'correct' ? (
                            <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" /> +4 Marks
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-black text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                              <XCircle className="w-3.5 h-3.5" /> 0 Marks (Wrong)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Question Text */}
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                        {currentPreviewQuestion.questionText}
                      </p>

                      {/* Formula or Silly Mistake Callout */}
                      {currentPreviewQuestion.isSillyMistake && (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-800 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>⚠️ Flagged as Silly Mistake: Inverted geometric ratio in mental algebra (-4 marks missed).</span>
                        </div>
                      )}

                      {/* Action Button: View Solution */}
                      <div className="pt-2 flex items-center justify-between">
                        <div className="text-xs font-bold text-slate-500">
                          Choice: <span className="font-mono font-bold text-slate-900">({String.fromCharCode(65 + currentPreviewQuestion.studentAnswer)})</span>
                          {currentPreviewQuestion.status === 'correct' ? (
                            <span className="text-emerald-600 font-bold ml-1.5">✓ Correct</span>
                          ) : (
                            <span className="text-rose-600 font-bold ml-1.5">✗ Incorrect (Correct: {String.fromCharCode(65 + currentPreviewQuestion.correctAnswer)})</span>
                          )}
                        </div>

                        <button
                          onClick={() => setActiveQuestionModal(currentPreviewQuestion)}
                          className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Step-by-Step Solution</span>
                        </button>
                      </div>

                    </div>

                    {/* Scrollable Questions Quick List */}
                    <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                      <div className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
                        Filtered Questions ({filteredQuestions.length}):
                      </div>
                      {filteredQuestions.map(q => (
                        <div
                          key={q.qNum}
                          onClick={() => setSelectedQuestionIndex(q.qNum - 1)}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                            selectedQuestionIndex === q.qNum - 1
                              ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {q.status === 'correct' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                            <div>
                              <span className="font-bold text-slate-900">Q{q.qNum}. {q.subject}</span>
                              <span className="text-slate-500 ml-1.5 font-medium truncate">• {q.topic}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="font-mono text-slate-500 font-bold">{q.timeSpentSec}s</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveQuestionModal(q);
                              }}
                              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center gap-1"
                            >
                              <span>Solution</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

        {/* VIEW 2: CONSOLIDATED REPORT FOR LAST FIVE TESTS */}
        {activeView === 'consolidated' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-purple-800">
                  5-Test Longitudinal Intelligence
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  Consolidated Performance Report (Last 5 Mocks)
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  RankPilot aggregates your last 5 test attempts to map genuine strengths, repeated error patterns, and predicted AIR momentum.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center shrink-0">
                <div className="text-xs font-bold text-emerald-800 uppercase">Overall Growth</div>
                <div className="text-2xl font-black text-emerald-700">{report.lastFiveTestsSummary?.scoreGrowth}</div>
              </div>
            </div>

            {/* Test-by-Test Progression Bar Chart */}
            <div className="space-y-3">
              <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                Score & Accuracy Progression:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {report.lastFiveTestsSummary?.testNames.map((testName, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block truncate">
                      {testName}
                    </span>
                    <div className="text-2xl font-black text-slate-900">
                      {report.lastFiveTestsSummary?.scores[i]}
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-500">Accuracy:</span>
                      <span className="text-emerald-600">{report.lastFiveTestsSummary?.accuracies[i]}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full" 
                        style={{ width: `${report.lastFiveTestsSummary?.accuracies[i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weakness & Strength Taxonomy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Weak Areas Identified */}
              <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
                <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm">
                  <span>⚠️ Persistent Weak Areas (Flagged Across Multiple Tests)</span>
                </div>
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  The AI detected repeated errors in these 2 specific sub-topics over the last 5 tests:
                </p>
                <div className="space-y-2">
                  {report.lastFiveTestsSummary?.weakAreasIdentified.map((area, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-rose-200 text-xs font-bold text-rose-900 flex items-center justify-between">
                      <span>• {area}</span>
                      <span className="text-[10px] bg-rose-100 px-2 py-0.5 rounded text-rose-800">Action: Revise Concept Note</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dominant Strengths */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-sm">
                  <span>🏆 Dominant Concept Mastery (Consistent 95%+ Accuracy)</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                  These topics have yielded consistent maximum marks with minimal time wastage:
                </p>
                <div className="space-y-2">
                  {report.lastFiveTestsSummary?.strongAreasIdentified.map((area, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-200 text-xs font-bold text-emerald-900 flex items-center justify-between">
                      <span>✓ {area}</span>
                      <span className="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-800">Mastered</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <a
                href={LOVABLE_PROJECT_URL}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md transition-all"
              >
                <span>Unlock Your Personalized 5-Test Diagnostic Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        )}

      </div>

      {/* QUESTION SOLUTION MODAL */}
      {activeQuestionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                  {activeQuestionModal.subject} • Q{activeQuestionModal.qNum}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeQuestionModal.topic}
                </span>
              </div>
              <button
                onClick={() => setActiveQuestionModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Question Text */}
            <div className="mb-6 space-y-3">
              <h5 className="text-sm sm:text-base font-extrabold text-slate-900 leading-relaxed">
                {activeQuestionModal.questionText}
              </h5>

              {activeQuestionModal.formulaOrLatex && (
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-blue-900 font-bold overflow-x-auto">
                  {activeQuestionModal.formulaOrLatex}
                </div>
              )}
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">Options:</div>
              {activeQuestionModal.options.map((opt, idx) => {
                const isCorrect = idx === activeQuestionModal.correctAnswer;
                const isSelected = idx === activeQuestionModal.studentAnswer;

                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-between ${
                      isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                        : isSelected
                        ? 'border-rose-500 bg-rose-50 text-rose-900'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>({String.fromCharCode(65 + idx)}) {opt}</span>
                    {isCorrect && <span className="text-[11px] font-black text-emerald-700">✓ Correct Answer</span>}
                    {isSelected && !isCorrect && <span className="text-[11px] font-black text-rose-700">✗ Your Choice</span>}
                  </div>
                );
              })}
            </div>

            {/* Step-by-Step Mathematical Explanation */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2 mb-6">
              <div className="text-xs font-black uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Detailed IITian Step-by-Step Solution:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {activeQuestionModal.explanation}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                onClick={() => setActiveQuestionModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Close
              </button>
              <a
                href={LOVABLE_PROJECT_URL}
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Practice Similar Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

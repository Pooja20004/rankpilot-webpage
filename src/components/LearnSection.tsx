import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Atom, 
  FlaskConical, 
  Calculator, 
  FileText, 
  Clock, 
  Target, 
  Award,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  BrainCircuit
} from 'lucide-react';
import { LOVABLE_PROJECT_URL } from '../data/mockData';

interface ChapterItem {
  id: string;
  name: string;
  subtopics: string[];
  importance: 'High Weightage' | 'Moderate' | 'Core Foundation';
  testsCount: number;
}

interface SubjectCurriculum {
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  icon: typeof Atom;
  color: string;
  bgColor: string;
  borderColor: string;
  chapters: ChapterItem[];
}

export const LearnSection: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<'11th' | '12th'>('11th');
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Physics' | 'Chemistry' | 'Mathematics'>('All');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  // 11th Foundation Curriculum
  const foundation11th: SubjectCurriculum[] = [
    {
      subject: 'Physics',
      icon: Atom,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      chapters: [
        {
          id: 'p11-1',
          name: 'Units, Dimensions & Vectors',
          importance: 'Core Foundation',
          testsCount: 4,
          subtopics: ['Dimensional Analysis & Errors', 'Vector Algebra & Resolution', 'Dot & Cross Products', 'Relative Velocity Foundations']
        },
        {
          id: 'p11-2',
          name: 'Kinematics in 1D & 2D',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Equations of Uniformly Accelerated Motion', 'Graphs of Motion (v-t, x-t)', 'Projectile Motion on Horizontal & Incline', 'Relative Motion in 2D (Rain-Man, River-Boat)']
        },
        {
          id: 'p11-3',
          name: 'Laws of Motion & Friction',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Newton\'s Laws & Free Body Diagrams', 'Pulleys & Constraint Relations', 'Static & Kinetic Friction', 'Banking of Circular Tracks']
        },
        {
          id: 'p11-4',
          name: 'Work, Energy & Power',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Work Done by Constant & Variable Forces', 'Work-Energy Theorem', 'Conservation of Mechanical Energy', 'Vertical Circular Motion & Power']
        },
        {
          id: 'p11-5',
          name: 'Rotational Dynamics & Center of Mass',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Center of Mass & Collisions (1D & 2D)', 'Torque & Equilibrium of Rigid Bodies', 'Moment of Inertia Theorems', 'Rolling Motion Without Slipping']
        },
        {
          id: 'p11-6',
          name: 'Gravitation',
          importance: 'Moderate',
          testsCount: 4,
          subtopics: ['Kepler\'s Laws of Planetary Motion', 'Gravitational Field & Potential', 'Escape Velocity & Satellite Motion', 'Energy of Satellites']
        },
        {
          id: 'p11-7',
          name: 'Mechanical Properties of Solids & Fluids',
          importance: 'Moderate',
          testsCount: 5,
          subtopics: ['Hooke\'s Law & Elastic Moduli', 'Pascal\'s Law & Hydraulic Lift', 'Bernoulli\'s Principle & Applications', 'Viscosity, Terminal Velocity & Surface Tension']
        },
        {
          id: 'p11-8',
          name: 'Thermodynamics & Kinetic Theory',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Ideal Gas Laws & Maxwell Distribution', 'First Law of Thermodynamics & Heat Capacities', 'Isothermal, Adiabatic & Isochoric Processes', 'Second Law & Carnot Engine Efficiency']
        },
        {
          id: 'p11-9',
          name: 'Oscillations & Waves (SHM)',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Simple Harmonic Motion & Phase', 'Spring-Mass Systems & Simple Pendulum', 'Traveling Waves & Wave Velocity', 'Standing Waves on Strings & Organ Pipes, Beats']
        }
      ]
    },
    {
      subject: 'Chemistry',
      icon: FlaskConical,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      chapters: [
        {
          id: 'c11-1',
          name: 'Some Basic Concepts of Chemistry (Mole Concept)',
          importance: 'Core Foundation',
          testsCount: 5,
          subtopics: ['Stoichiometric Calculations', 'Molarity, Molality & Mole Fraction', 'Limiting Reagents & Percentage Yield', 'Empirical & Molecular Formulae']
        },
        {
          id: 'c11-2',
          name: 'Structure of Atom',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Bohr\'s Model & Hydrogen Spectrum', 'de Broglie Wavelength & Heisenberg Principle', 'Quantum Numbers & Orbitals (s, p, d, f)', 'Aufbau, Pauli & Hund\'s Rules']
        },
        {
          id: 'c11-3',
          name: 'Periodic Classification & Periodicity',
          importance: 'Core Foundation',
          testsCount: 4,
          subtopics: ['Modern Periodic Table Trends', 'Atomic & Ionic Radii Trends', 'Ionization Enthalpy & Electron Gain Enthalpy', 'Electronegativity Scales & Chemical Reactivity']
        },
        {
          id: 'c11-4',
          name: 'Chemical Bonding & Molecular Structure',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Lewis Dot Structures & Formal Charge', 'VSEPR Theory & Molecular Geometries', 'Hybridization (sp, sp2, sp3, sp3d, sp3d2)', 'Molecular Orbital Theory & Bond Order', 'Hydrogen Bonding & Dipole Moments']
        },
        {
          id: 'c11-5',
          name: 'Chemical Thermodynamics & Energetics',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['First Law, Work, Heat & Internal Energy', 'Enthalpy of Reaction, Formation & Combustion', 'Hess\'s Law of Constant Heat Summation', 'Entropy & Gibbs Free Energy Criteria of Spontaneity']
        },
        {
          id: 'c11-6',
          name: 'Equilibrium (Chemical & Ionic)',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Law of Mass Action, Kp & Kc Relations', 'Le Chatelier\'s Principle & Applications', 'Ostwald\'s Dilution Law & pH Calculations', 'Buffer Solutions & Hydrolysis of Salts', 'Solubility Product (Ksp) & Common Ion Effect']
        },
        {
          id: 'c11-7',
          name: 'Redox Reactions',
          importance: 'Moderate',
          testsCount: 3,
          subtopics: ['Concept of Oxidation & Reduction', 'Oxidation Number Rules & Calculation', 'Balancing by Ion-Electron & Oxidation State Methods', 'Redox Titrations']
        },
        {
          id: 'c11-8',
          name: 'General Organic Chemistry (GOC)',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['IUPAC Nomenclature of Polyfunctional Compounds', 'Electronic Effects: Inductive, Mesomeric, Hyperconjugation', 'Aromaticity & Huckel\'s Rule', 'Carbocations, Carbanions & Free Radicals Stability', 'Structural & Stereoisomerism (Geometrical & Optical)']
        },
        {
          id: 'c11-9',
          name: 'Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromatic)',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Free Radical Halogenation of Alkanes', 'Electrophilic Addition to Alkenes & Alkynes', 'Markovnikov & Anti-Markovnikov Rules', 'Ozonolysis & Polymerization', 'Electrophilic Aromatic Substitution (Benzene Reactions)']
        }
      ]
    },
    {
      subject: 'Mathematics',
      icon: Calculator,
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      chapters: [
        {
          id: 'm11-1',
          name: 'Sets, Relations & Functions',
          importance: 'Core Foundation',
          testsCount: 5,
          subtopics: ['Set Operations & Venn Diagrams', 'Cartesian Product & Relations', 'Domain, Codomain & Range', 'Types of Functions: Injective, Surjective & Bijective', 'Composite & Inverse Functions']
        },
        {
          id: 'm11-2',
          name: 'Trigonometric Functions & Equations',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Trigonometric Ratios & Identities', 'Compound Angles & Multiple Angles Formulas', 'General Solutions of Trigonometric Equations', 'Conditional Trigonometric Identities']
        },
        {
          id: 'm11-3',
          name: 'Complex Numbers & Quadratic Equations',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Algebra of Complex Numbers & Argand Plane', 'Modulus, Argument & Polar Form', 'Roots of Unity (Cube Roots & nth Roots)', 'Nature of Roots & Common Roots of Quadratics', 'Location of Roots & Transformation of Equations']
        },
        {
          id: 'm11-4',
          name: 'Linear Inequalities',
          importance: 'Moderate',
          testsCount: 3,
          subtopics: ['Algebraic Solutions of Linear Inequalities in One Variable', 'Graphical Representation in Two Variables', 'Modulus Inequalities']
        },
        {
          id: 'm11-5',
          name: 'Permutations & Combinations (P&C)',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Fundamental Principle of Counting', 'Linear & Circular Permutations', 'Combinations & Group Formation', 'Dearrangements & Multinomial Theorem']
        },
        {
          id: 'm11-6',
          name: 'Binomial Theorem',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Binomial Expansion for Positive Integral Index', 'General & Middle Terms in Expansion', 'Properties of Binomial Coefficients', 'Binomial Series with Negative/Fractional Exponents']
        },
        {
          id: 'm11-7',
          name: 'Sequences & Series (AP, GP, Special Series)',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Arithmetic Progressions & Arithmetic Mean', 'Geometric Progressions & Infinite GP', 'Arithmetico-Geometric Series (AGP)', 'Sum to n terms of Special Series (Sigma n, n^2, n^3)']
        },
        {
          id: 'm11-8',
          name: 'Straight Lines & Family of Lines',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Slope & Various Forms of Equations of a Line', 'Angle Between Two Lines & Distance Formulas', 'Family of Lines Passing Through Intersection', 'Concurrency & Pair of Straight Lines']
        },
        {
          id: 'm11-9',
          name: 'Conic Sections (Circles, Parabola, Ellipse, Hyperbola)',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Standard Equation of Circle & Tangents', 'Standard Equation of Parabola, Focal Chord & Tangents', 'Ellipse: Eccentricity, Directrices & Tangents', 'Hyperbola: Asymptotes, Rectangular Hyperbola & Conjugate']
        },
        {
          id: 'm11-10',
          name: 'Limits & Derivatives Foundations',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Concept of Limit & Left/Right Hand Limits', 'Standard Limits & Algebraic Evaluation', 'Trigonometric & Exponential Limits', 'First Principle of Differentiation']
        }
      ]
    }
  ];

  // 12th Booster Curriculum
  const booster12th: SubjectCurriculum[] = [
    {
      subject: 'Physics',
      icon: Atom,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      chapters: [
        {
          id: 'p12-1',
          name: 'Electrostatics & Gauss\'s Law',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Coulomb\'s Law & Continuous Charge Distribution', 'Electric Field Intensity & Field Lines', 'Electric Flux & Gauss\'s Law Applications', 'Conductors in Electrostatic Equilibrium']
        },
        {
          id: 'p12-2',
          name: 'Electrostatic Potential & Capacitance',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Electrostatic Potential & Potential Energy', 'Equipotential Surfaces & Dipole Potential', 'Capacitors in Series & Parallel', 'Dielectrics & Energy Stored in Capacitors']
        },
        {
          id: 'p12-3',
          name: 'Current Electricity & Circuit Analysis',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Drift Velocity & Ohm\'s Law Derivation', 'Kirchhoff\'s Laws & Complex Mesh Circuits', 'Wheatstone Bridge & Meter Bridge', 'RC Circuits (Charging & Discharging Transient Analysis)']
        },
        {
          id: 'p12-4',
          name: 'Moving Charges & Magnetism',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Biot-Savart Law & Circular Wire Fields', 'Ampere\'s Circuital Law & Solenoid/Toroid', 'Lorentz Force & Motion of Charge in B-Field', 'Magnetic Force on Current-Carrying Wire, Galvanometer']
        },
        {
          id: 'p12-5',
          name: 'Electromagnetic Induction & Alternating Current',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Faraday\'s Laws & Motional EMF', 'Lenz\'s Law & Conservation of Energy', 'Self & Mutual Inductance, LR Circuits', 'AC Circuits: LCR Series, Phasor Diagrams, Resonance, Q-Factor']
        },
        {
          id: 'p12-6',
          name: 'Electromagnetic Waves',
          importance: 'Moderate',
          testsCount: 3,
          subtopics: ['Displacement Current & Maxwell\'s Equations', 'Characteristics & Poynting Vector', 'Electromagnetic Spectrum Applications']
        },
        {
          id: 'p12-7',
          name: 'Ray Optics & Optical Instruments',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Refraction at Spherical Surfaces & Lens Maker\'s Formula', 'Prism Dispersion & Angle of Minimum Deviation', 'Total Internal Reflection & Optical Fibers', 'Compound Microscope & Astronomical Telescope']
        },
        {
          id: 'p12-8',
          name: 'Wave Optics',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Huygens\' Principle & Wavefronts', 'Young\'s Double Slit Experiment (YDSE) & Fringe Shift', 'Single Slit Diffraction Pattern', 'Polarization & Brewster\'s Law']
        },
        {
          id: 'p12-9',
          name: 'Modern Physics (Dual Nature, Atoms & Nuclei)',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Photoelectric Effect & Einstein\'s Equation', 'de Broglie Hypothesis & Davisson-Germer', 'Bohr\'s Model & Spectral Lines', 'Nuclear Binding Energy, Fission, Fusion & Q-Value']
        },
        {
          id: 'p12-10',
          name: 'Semiconductor Electronics & Logic Gates',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Energy Bands in Conductors, Semiconductors & Insulators', 'p-n Junction Diode V-I Characteristics', 'Half-Wave & Full-Wave Rectifiers, Zener Diode', 'Logic Gates (AND, OR, NOT, NAND, NOR) Truth Tables']
        }
      ]
    },
    {
      subject: 'Chemistry',
      icon: FlaskConical,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      chapters: [
        {
          id: 'c12-1',
          name: 'Solutions & Colligative Properties',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Raoult\'s Law & Ideal/Non-ideal Solutions', 'Relative Lowering of Vapor Pressure', 'Elevation of Boiling Point & Depression of Freezing Point', 'Osmotic Pressure & Van \'t Hoff Factor']
        },
        {
          id: 'c12-2',
          name: 'Electrochemistry',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Galvanic Cells & Standard Electrode Potentials', 'Nernst Equation & Gibbs Free Energy Relation', 'Conductance, Kohlrausch\'s Law & Molar Conductivity', 'Faraday\'s Laws of Electrolysis & Batteries']
        },
        {
          id: 'c12-3',
          name: 'Chemical Kinetics',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Rate of Reaction, Order & Molecularity', 'Integrated Rate Laws for Zero & First Order Reactions', 'Half-Life & Pseudo First Order Reactions', 'Arrhenius Equation & Activation Energy Analysis']
        },
        {
          id: 'c12-4',
          name: 'd- and f-Block Elements',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['General Trends in 3d Series (Ionization, Oxidation States, Magnetism)', 'Preparation, Properties & Structure of KMnO4 and K2Cr2O7', 'Lanthanoid Contraction & Chemical Reactivity', 'Actinoids Comparison with Lanthanoids']
        },
        {
          id: 'c12-5',
          name: 'Coordination Compounds',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Werner\'s Theory & IUPAC Nomenclature of Complexes', 'Structural & Stereoisomerism (Geometrical & Optical)', 'Valence Bond Theory (VBT) & Magnetic Behavior', 'Crystal Field Theory (CFT), Octahedral/Tetrahedral Splitting']
        },
        {
          id: 'c12-6',
          name: 'Haloalkanes & Haloarenes',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['SN1 and SN2 Reaction Mechanisms & Stereochemistry', 'Elimination Reactions (E1, E2, Saytzeff Rule)', 'Nucleophilic Aromatic Substitution in Haloarenes', 'Grignard Reagents Preparation & Reactions']
        },
        {
          id: 'c12-7',
          name: 'Alcohols, Phenols & Ethers',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Preparation & Acidic Character of Alcohols', 'Lucas Test, Victor Meyer & Dehydration of Alcohols', 'Electrophilic Substitution in Phenols (Reimer-Tiemann, Kolbe)', 'Williamson\'s Ether Synthesis & Cleavage with HI']
        },
        {
          id: 'c12-8',
          name: 'Aldehydes, Ketones & Carboxylic Acids',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Nucleophilic Addition Mechanisms (HCN, Grignard, Alcohols)', 'Aldol, Cross-Aldol & Cannizzaro Reactions', 'Clemmensen & Wolff-Kishner Reductions', 'HVZ Reaction, Decarboxylation & Acidity of Carboxylic Acids']
        },
        {
          id: 'c12-9',
          name: 'Amines & Diazonium Salts',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Basicity of Amines in Gaseous & Aqueous Phases', 'Hoffmann Bromamide Degradation & Carbylamine Test', 'Hinsberg Test for Separation of Amines', 'Reactions of Benzene Diazonium Chloride (Sandmeyer, Coupling)']
        },
        {
          id: 'c12-10',
          name: 'Biomolecules',
          importance: 'Moderate',
          testsCount: 4,
          subtopics: ['Monosaccharides: Glucose & Fructose Structures', 'Peptide Bond & Protein Denaturation', 'DNA & RNA Nucleic Acids, Purines & Pyrimidines', 'Vitamins Classification & Deficiency Diseases']
        }
      ]
    },
    {
      subject: 'Mathematics',
      icon: Calculator,
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      chapters: [
        {
          id: 'm12-1',
          name: 'Relations, Functions & Inverse Trigonometry',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Equivalence Relations & Equivalence Classes', 'One-One, Onto & Invertible Functions', 'Inverse Trig Functions: Principal Values & Domain-Range', 'Identities & Simplification of Inverse Trig Expressions']
        },
        {
          id: 'm12-2',
          name: 'Matrices & Determinants',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Types of Matrices, Symmetric & Skew-Symmetric Matrices', 'Properties of Determinants & Minors/Cofactors', 'Adjoint & Inverse of a Matrix', 'Cramer\'s Rule & System of Linear Equations Consistency']
        },
        {
          id: 'm12-3',
          name: 'Continuity & Differentiability',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Continuity at a Point & in an Interval', 'Differentiability & Corner Points', 'Chain Rule, Implicit & Parametric Differentiation', 'Rolle\'s Theorem & Lagrange\'s Mean Value Theorem (LMVT)']
        },
        {
          id: 'm12-4',
          name: 'Applications of Derivatives (AOD)',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Rate Measure & Errors/Approximations', 'Monotonicity: Strictly Increasing & Decreasing Functions', 'Tangents, Normals & Angle of Intersection of Curves', 'Local & Global Maxima-Minima with Real-World Optimization']
        },
        {
          id: 'm12-5',
          name: 'Indefinite & Definite Integrals',
          importance: 'High Weightage',
          testsCount: 8,
          subtopics: ['Standard Integration Formulas & Substitution Techniques', 'Integration by Parts & Partial Fractions', 'Fundamental Theorem of Calculus', 'Properties of Definite Integrals (King\'s Rule, Periodic Functions)', 'Leibnitz Rule of Differentiation Under Integral Sign']
        },
        {
          id: 'm12-6',
          name: 'Application of Integrals (Area Under Curves)',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Area Bounded by Standard Curves (Parabola, Circle, Ellipse)', 'Area Between Two Intersecting Curves', 'Symmetrical Regions & Modulus Function Areas']
        },
        {
          id: 'm12-7',
          name: 'Differential Equations',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Order & Degree of Differential Equations', 'Variable Separable Method', 'Homogeneous Differential Equations', 'Linear Differential Equations of First Order (Integrating Factor)']
        },
        {
          id: 'm12-8',
          name: 'Vector Algebra',
          importance: 'High Weightage',
          testsCount: 5,
          subtopics: ['Linear Combination of Vectors & Collinearity', 'Dot Product & Projections', 'Cross Product & Area of Triangles/Parallelograms', 'Scalar Triple Product (STP) & Vector Triple Product (VTP)']
        },
        {
          id: 'm12-9',
          name: 'Three-Dimensional Geometry (3D)',
          importance: 'High Weightage',
          testsCount: 7,
          subtopics: ['Direction Cosines & Direction Ratios', 'Equation of Line in Vector & Cartesian Form', 'Shortest Distance Between Two Skew Lines', 'Equation of Plane & Line-Plane Intersections']
        },
        {
          id: 'm12-10',
          name: 'Probability & Distributions',
          importance: 'High Weightage',
          testsCount: 6,
          subtopics: ['Conditional Probability & Multiplication Theorem', 'Total Probability Theorem & Bayes\' Theorem', 'Random Variables & Probability Distributions', 'Binomial Distribution & Bernoulli Trials']
        }
      ]
    }
  ];

  const activeCurriculum = activeProgram === '11th' ? foundation11th : booster12th;
  
  const filteredCurriculum = selectedSubject === 'All' 
    ? activeCurriculum 
    : activeCurriculum.filter(s => s.subject === selectedSubject);

  return (
    <section id="learn" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>RankPilot Learn Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Targeted Academic Programs: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300">
              11th Foundation & 12th Booster
            </span>
          </h2>

          <p className="text-base text-slate-300 font-medium">
            Engineered by IITians and top educators to build ironclad conceptual depth. Master the complete JEE Main & Advanced syllabus chapter-by-chapter with structured high-yield notes, Daily Practice Problems (DPP), and AI diagnostic testing.
          </p>
        </div>

        {/* 11th Foundation vs 12th Booster Toggle Pills */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-800/90 rounded-2xl border border-slate-700 backdrop-blur-md shadow-xl">
            <button
              onClick={() => {
                setActiveProgram('11th');
                setExpandedChapter(null);
              }}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2.5 ${
                activeProgram === '11th'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>11th Foundation Program (JEE 2027)</span>
              <span className="text-[10px] uppercase font-extrabold bg-blue-900/80 px-2 py-0.5 rounded text-blue-200 border border-blue-400/30">
                2-Year
              </span>
            </button>

            <button
              onClick={() => {
                setActiveProgram('12th');
                setExpandedChapter(null);
              }}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2.5 ${
                activeProgram === '12th'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>12th Booster Program (JEE 2026 / Dropper)</span>
              <span className="text-[10px] uppercase font-extrabold bg-purple-900/80 px-2 py-0.5 rounded text-purple-200 border border-purple-400/30">
                1-Year
              </span>
            </button>
          </div>
        </div>

        {/* Program Highlights Banner Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-md mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-purple-400">
                {activeProgram === '11th' ? 'Class 11 Foundation Roadmap' : 'Class 12 & Droppers Score Accelerator'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {activeProgram === '11th' 
                  ? 'Building Rock-Solid Conceptual Fundamentals for JEE 2027' 
                  : 'Rapid High-Yield Revision & Rank Maximization for JEE 2026'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeProgram === '11th'
                  ? 'Covers all 28 foundational chapters in depth with progressive difficulty (Board to JEE Main to Advanced Level), eliminating early fear of Physics and Math.'
                  : 'Fast-paced, high-retention syllabus coverage focusing on high-weightage topics, Section B numerical integer accuracy, and 120+ real shift mocks.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:col-span-2">
              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">Coverage</div>
                <div className="text-xl font-black text-white mt-1">
                  {activeProgram === '11th' ? '28 Chapters' : '30 Chapters'}
                </div>
                <div className="text-[11px] text-blue-300 mt-1">Physics, Chem & Math</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">Chapter Tests</div>
                <div className="text-xl font-black text-white mt-1">
                  {activeProgram === '11th' ? '50+ Tests' : '70+ Tests'}
                </div>
                <div className="text-[11px] text-emerald-300 mt-1">Customizable Timers</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">AI Doubts</div>
                <div className="text-xl font-black text-white mt-1">5 Languages</div>
                <div className="text-[11px] text-purple-300 mt-1">Tamil, En, Hi, Te, Kn</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/60">
                <div className="text-xs font-bold text-slate-400 uppercase">Full Mocks</div>
                <div className="text-xl font-black text-white mt-1">
                  {activeProgram === '11th' ? '30+ Mocks' : '120+ Mocks'}
                </div>
                <div className="text-[11px] text-amber-300 mt-1">Real NTA Interface</div>
              </div>
            </div>

          </div>
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
              Browse Subject Syllabus:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedSubject === sub
                    ? 'bg-white text-slate-900 shadow-md font-black'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {sub === 'All' ? 'All Subjects' : sub}
              </button>
            ))}
          </div>
        </div>

        {/* Syllabus Grid & Chapter Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCurriculum.map((subj) => {
            const SubIcon = subj.icon;

            return (
              <div
                key={subj.subject}
                className="rounded-3xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Subject Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-700/80 flex items-center justify-center">
                        <SubIcon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white">{subj.subject}</h4>
                        <span className="text-[11px] text-slate-400 font-semibold">
                          {subj.chapters.length} Core Modules
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-black text-slate-300 bg-slate-700 px-2.5 py-1 rounded-full">
                      {activeProgram === '11th' ? 'Class 11' : 'Class 12'}
                    </span>
                  </div>

                  {/* Chapter List Accordion */}
                  <div className="space-y-3">
                    {subj.chapters.map((ch) => {
                      const isExpanded = expandedChapter === ch.id;

                      return (
                        <div
                          key={ch.id}
                          className={`rounded-xl border transition-all ${
                            isExpanded
                              ? 'bg-slate-700/80 border-blue-500 shadow-md'
                              : 'bg-slate-800/50 hover:bg-slate-700/40 border-slate-700'
                          }`}
                        >
                          <button
                            onClick={() => setExpandedChapter(isExpanded ? null : ch.id)}
                            className="w-full text-left p-3.5 flex items-center justify-between gap-2"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-black text-white line-clamp-1">
                                  {ch.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400">
                                <span className={
                                  ch.importance === 'High Weightage' 
                                    ? 'text-amber-400 font-bold' 
                                    : 'text-blue-300'
                                }>
                                  ★ {ch.importance}
                                </span>
                                <span>•</span>
                                <span>{ch.testsCount} Chapter Tests</span>
                              </div>
                            </div>

                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-400' : ''}`} />
                          </button>

                          {/* Expanded Subtopics Breakdown */}
                          {isExpanded && (
                            <div className="p-3.5 pt-0 border-t border-slate-600/60 mt-1 space-y-2 animate-in fade-in duration-150">
                              <div className="text-[11px] font-extrabold uppercase text-slate-300 tracking-wider pt-2">
                                Subtopics & Key Concepts:
                              </div>
                              <ul className="space-y-1.5">
                                {ch.subtopics.map((st, i) => (
                                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{st}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="pt-2">
                                <a
                                  href={LOVABLE_PROJECT_URL}
                                  className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                                >
                                  <span>Start {ch.name} Test</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-700">
                  <a
                    href={LOVABLE_PROJECT_URL}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Practice All {subj.subject} Mocks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Feature Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-purple-900/60 border border-blue-500/30 text-center space-y-4">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            Included in Both 11th Foundation & 12th Booster Plans
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-medium">
            Every enrolled student gets unlimited access to AI Doubt Solving in 5 Indian languages, visual mind maps, high-yield formula sheets, chapter-wise test series with timer, and longitudinal 5-test performance tracking.
          </p>
          <div className="pt-2">
            <a
              href="https://jee-rankpilot.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 transition-all group"
            >
              <span>Enroll in RankPilot Learn Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

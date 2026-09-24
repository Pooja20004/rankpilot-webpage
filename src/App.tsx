import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TestSeriesSection } from './components/TestSeriesSection';
import { SampleReportSection } from './components/SampleReportSection';
import { StudyFeaturesSection } from './components/StudyFeaturesSection';
import { RankPredictor } from './components/RankPredictor';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { SignupSection } from './components/SignupSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export function App() {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navbar with HelloBar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with Bright Slogans, Keywords & Students beside IIT campus */}
        <HeroSection 
          onExploreTestSeries={() => scrollToSection('test-series')}
          onExploreReport={() => scrollToSection('sample-report')}
        />

        {/* 1. Test Series Tab Section: 120+ JEE Main, 40+ Advanced (19 yrs), 6+ BITSAT */}
        <TestSeriesSection />

        {/* 2. Sample Report Tab Section (Quizrr Style Demo from app.quizrr.in/analysis-demo) */}
        <SampleReportSection />

        {/* 3. Features Tab Section: Concept notes, formula sheet, mindmap, ai analysis, doubt solver */}
        <StudyFeaturesSection />

        {/* 4. Live Marks vs Percentile & AIR Predictor Widget */}
        <RankPredictor />

        {/* 5. Verified Toppers & Results (MathonGo Wall of Fame) */}
        <ReviewsSection />

        {/* 6. AI Diagnostic Architecture & Comparison */}
        <AboutSection />

        {/* 7. Direct Lovable Launch & Free Signup Portal */}
        <SignupSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Global Clean EdTech Footer */}
      <Footer />
    </div>
  );
}

export default App;

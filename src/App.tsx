import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TestSeriesSection } from './components/TestSeriesSection';
import { LearnSection } from './components/LearnSection';
import { SampleReportSection } from './components/SampleReportSection';
import { StudyFeaturesSection } from './components/StudyFeaturesSection';
import { RankPredictor } from './components/RankPredictor';
import { ReviewsSection } from './components/ReviewsSection';
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
          onExploreAbout={() => scrollToSection('about')}
          onExploreTestSeries={() => scrollToSection('test-series')}
          onExploreReport={() => scrollToSection('sample-report')}
        />

        {/* 1. About Section: Placed BEFORE Test Series, highlighting all 8 platform pillars */}
        <AboutSection />

        {/* 2. Test Series Section: 120+ JEE Main, 40+ Advanced (19 yrs), 10+ BITSAT & Pricing Plans */}
        <TestSeriesSection />

        {/* 2.5. JEE Ranker Learn: 11th Foundation & 12th Booster Academic Programs */}
        <LearnSection />

        {/* 3. Sample Report Section: Official JEE Ranker Mock Test Report & 5-Test Consolidated Analytics */}
        <SampleReportSection />

        {/* 4. Study Features Section: Concept notes, formula sheet, mindmap, ai analysis, multilingual doubt solver */}
        <StudyFeaturesSection />

        {/* 5. Live Marks vs Percentile & AIR Predictor Widget */}
        <RankPredictor />

        {/* 6. Verified Toppers & Results */}
        <ReviewsSection />

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

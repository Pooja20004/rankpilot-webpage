import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TestSeriesSection } from './components/TestSeriesSection';
import { LearnSection } from './components/LearnSection';
import { SampleReportSection } from './components/SampleReportSection';
import { StudyFeaturesSection } from './components/StudyFeaturesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ExamResourcesPage } from './components/ExamResourcesPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'resources'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path.includes('syllabus') || 
        path.includes('resources') || 
        path.includes('strategies') || 
        hash.includes('syllabus') || 
        hash.includes('resources')
      ) {
        return 'resources';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path.includes('syllabus') || 
        path.includes('resources') || 
        path.includes('strategies') || 
        hash.includes('syllabus') || 
        hash.includes('resources')
      ) {
        setCurrentPage('resources');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToResources = () => {
    setCurrentPage('resources');
    window.history.pushState({}, '', '/syllabus-strategies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPage === 'resources') {
    return (
      <ExamResourcesPage onBackToHome={navigateToHome} />
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navbar with HelloBar */}
      <Navbar 
        onOpenExamResources={navigateToResources}
        onGoHome={navigateToHome}
        isResourcesPage={false}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with Bright Slogans, Keywords & Students beside IIT campus */}
        <HeroSection 
          onExploreAbout={() => scrollToSection('about')}
          onExploreTestSeries={() => scrollToSection('test-series')}
          onExploreReport={() => scrollToSection('sample-report')}
        />

        {/* 1. About Section: Placed BEFORE Test Series, highlighting all 8 platform pillars */}
        <AboutSection onOpenExamResources={navigateToResources} />

        {/* 2. Test Series Section: 120+ JEE Main, 40+ Advanced (19 yrs), 10+ BITSAT & Pricing Plans */}
        <TestSeriesSection />

        {/* 2.5. JEE Ranker Learn: 11th Foundation & 12th Booster Academic Programs */}
        <LearnSection />

        {/* 3. Sample Report Section: Official JEE Ranker Mock Test Report & 5-Test Consolidated Analytics */}
        <SampleReportSection />

        {/* 4. Study Features Section: Concept notes, formula sheet, mindmap, ai analysis, multilingual doubt solver */}
        <StudyFeaturesSection />

        {/* 5. Verified Toppers & Results */}
        <ReviewsSection />

        {/* 6. Frequently Asked Questions & Academic/Business Enquiry Form */}
        <FaqSection />
      </main>

      {/* Global Clean EdTech Footer */}
      <Footer onOpenExamResources={navigateToResources} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesHub } from './components/FeaturesHub';
import { AiVideoExplainer } from './components/AiVideoExplainer';
import { ReviewsSection } from './components/ReviewsSection';
import { RankPredictor } from './components/RankPredictor';
import { SignupSection } from './components/SignupSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LaunchModal } from './components/LaunchModal';
import { TabId } from './types';

export function App() {
  const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);
  const [selectedInitialTab, setSelectedInitialTab] = useState<TabId>('mocks');

  const handleOpenLaunchModal = () => {
    setIsLaunchModalOpen(true);
  };

  const handleCloseLaunchModal = () => {
    setIsLaunchModalOpen(false);
  };

  const handleSelectTab = (tabId: string) => {
    setSelectedInitialTab(tabId as TabId);
    const elem = document.getElementById('tabs-hub');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-300">
      {/* Sticky Top Navbar */}
      <Navbar 
        onOpenLaunchModal={handleOpenLaunchModal}
        onSelectTab={handleSelectTab}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onOpenLaunchModal={handleOpenLaunchModal}
          onExploreTabs={() => scrollToSection('tabs-hub')}
          onWatchVideo={() => scrollToSection('ai-video')}
        />

        {/* In-Depth About Section */}
        <AboutSection />

        {/* Interactive Feature Tabs Hub (7 Core Tabs from Lovable) */}
        <FeaturesHub 
          initialTab={selectedInitialTab}
          onOpenLaunchModal={handleOpenLaunchModal}
        />

        {/* Interactive AI Video Feature Explainer */}
        <AiVideoExplainer />

        {/* Aspirant Reviews & Ratings Hub */}
        <ReviewsSection />

        {/* Live Percentile & AIR Predictor Widget */}
        <RankPredictor />

        {/* Signup & Direct Lovable Launch Portal */}
        <SignupSection />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Launch VIP Modal */}
      <LaunchModal 
        isOpen={isLaunchModalOpen}
        onClose={handleCloseLaunchModal}
      />
    </div>
  );
}

export default App;

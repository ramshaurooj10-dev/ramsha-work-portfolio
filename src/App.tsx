/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VoiceStudioDemo } from './components/VoiceStudioDemo';
import { QuickStats } from './components/QuickStats';
import { Services } from './components/Services';
import { MasterPortfolioSection, MasterTabType } from './components/MasterPortfolioSection';
import { KidsEducation } from './components/KidsEducation';
import { BrandUgc } from './components/BrandUgc';
import { InternationalExperience } from './components/InternationalExperience';
import { WorldMapSection } from './components/WorldMapSection';
import { StudioSection } from './components/StudioSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Workflow } from './components/Workflow';
import { ClientTypes } from './components/ClientTypes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MediaAdminModal } from './components/MediaAdminModal';
import { PortfolioAssistant } from './components/PortfolioAssistant';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string>('Voice Over');
  const [inquiryEst, setInquiryEst] = useState<string>('');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState<MasterTabType>('ai');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireClick = () => {
    scrollToSection('contact');
  };

  const handleVoiceClick = () => {
    setActivePortfolioTab('urdu');
    scrollToSection('portfolio-hub');
  };

  const handleEnglishClick = () => {
    setActivePortfolioTab('english');
    scrollToSection('portfolio-hub');
  };

  const handleDubbingClick = () => {
    setActivePortfolioTab('dubbing');
    scrollToSection('portfolio-hub');
  };

  const handleAiClick = () => {
    setActivePortfolioTab('ai');
    scrollToSection('portfolio-hub');
  };

  const handleWholePortfolioClick = () => {
    setActivePortfolioTab('whole');
    scrollToSection('portfolio-hub');
  };

  const handleCalculatorInquiry = (service: string, estimate: string) => {
    setInquiryService(service);
    setInquiryEst(estimate);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#352820] font-sans selection:bg-[#C5A46D] selection:text-[#352820]">
      {/* Sticky Header Navigation */}
      <Navbar
        onHireClick={handleHireClick}
        onVoiceClick={handleVoiceClick}
        onDubbingClick={handleDubbingClick}
        onAiClick={handleAiClick}
        onWholeClick={handleWholePortfolioClick}
      />

      {/* Main Page Layout */}
      <main className="space-y-0">
        {/* Hero Section */}
        <Hero
          onListenClick={() => scrollToSection('voice-audition')}
          onAiClick={handleAiClick}
          onWorkClick={handleHireClick}
        />

        {/* Test Ramsha's Voice Styles Audio Samples (Directly below Hero) */}
        <VoiceStudioDemo />

        {/* Unified Interactive Master Portfolio Hub (AI Content, Urdu VO, English VO, Dubbing, Whole Portfolios) */}
        <MasterPortfolioSection
          activeTab={activePortfolioTab}
          onTabChange={setActivePortfolioTab}
          onOpenContactModal={handleHireClick}
        />

        {/* Quick Credentials Statistics */}
        <QuickStats />

        {/* 6 Core Reordered Services */}
        <Services onHireClick={handleHireClick} />

        {/* Children's & Educational Content */}
        <KidsEducation onHireClick={handleHireClick} />

        {/* Brand & UGC Content */}
        <BrandUgc onHireClick={handleHireClick} />

        {/* Instant Project Scope Estimator */}
        <ProjectCalculator onHireClickWithData={handleCalculatorInquiry} />

        {/* International Experience (Trusted Across Borders) */}
        <InternationalExperience />

        {/* Interactive World Map Experience */}
        <WorldMapSection />

        {/* Studio Setup Section */}
        <StudioSection />

        {/* Why Work With Me */}
        <WhyWorkWithMe />

        {/* Workflow */}
        <Workflow />

        {/* Client Categories */}
        <ClientTypes />

        {/* Contact Section */}
        <Contact initialService={inquiryService} initialEstimate={inquiryEst} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Admin / Media Upload Helper Modal */}
      <MediaAdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      {/* Floating AI Portfolio Assistant */}
      <PortfolioAssistant onNavigateToSection={scrollToSection} />
    </div>
  );
}


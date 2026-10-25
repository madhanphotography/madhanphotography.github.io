/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { PORTFOLIO_STORIES } from './data/portfolioData';
import { CeremonyStory, OccasionCategory, TraditionalService } from './types/photography';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OccasionTabs } from './components/OccasionTabs';
import { PortfolioGrid } from './components/PortfolioGrid';
import { LightboxModal } from './components/LightboxModal';
import { CeremonyTimeline } from './components/CeremonyTimeline';
import { TraditionalServices } from './components/TraditionalServices';
import { StudioPhilosophy } from './components/StudioPhilosophy';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<OccasionCategory>('all');
  const [weddingsOnly, setWeddingsOnly] = useState<boolean>(false);
  const [selectedStory, setSelectedStory] = useState<CeremonyStory | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryOccasion, setInquiryOccasion] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('gallery');

  // Filtered stories calculation
  const filteredStories = useMemo(() => {
    let list = PORTFOLIO_STORIES;

    if (weddingsOnly) {
      list = list.filter((s) => s.isWeddingMajor);
    }

    if (selectedCategory !== 'all') {
      list = list.filter((s) => s.category === selectedCategory);
    }

    return list;
  }, [selectedCategory, weddingsOnly]);

  // Counts for tabs
  const categoryCounts = useMemo(() => {
    const base = weddingsOnly
      ? PORTFOLIO_STORIES.filter((s) => s.isWeddingMajor)
      : PORTFOLIO_STORIES;

    return {
      all: base.length,
      weddings: base.filter((s) => s.category === 'weddings').length,
      'oonjal-sangeeth': base.filter((s) => s.category === 'oonjal-sangeeth').length,
      seemantham: base.filter((s) => s.category === 'seemantham').length,
      upanayanam: base.filter((s) => s.category === 'upanayanam').length,
      milestones: base.filter((s) => s.category === 'milestones').length,
    };
  }, [weddingsOnly]);

  // Handle open inquiry drawer with optional initial context
  const handleOpenInquiry = (initialOccasionName?: string) => {
    setInquiryOccasion(initialOccasionName);
    setIsInquiryOpen(true);
  };

  const handleSelectService = (service: TraditionalService) => {
    setInquiryOccasion(service.title);
    setIsInquiryOpen(true);
  };

  const handleInquireStory = (story: CeremonyStory) => {
    setInquiryOccasion(`${story.title} (${story.location})`);
    setIsInquiryOpen(true);
  };

  // Scroll watcher to sync active section indicator in navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const gallery = document.getElementById('monograph-gallery');
      const timeline = document.getElementById('vedic-timeline');
      const services = document.getElementById('traditional-services');
      const philosophy = document.getElementById('studio-philosophy');

      if (philosophy && scrollPos >= philosophy.offsetTop) {
        setActiveSection('about');
      } else if (services && scrollPos >= services.offsetTop) {
        setActiveSection('services');
      } else if (timeline && scrollPos >= timeline.offsetTop) {
        setActiveSection('timeline');
      } else if (gallery && scrollPos >= gallery.offsetTop) {
        setActiveSection('gallery');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f3] text-[#1c1c18] font-editorial selection:bg-[#8b1e28] selection:text-[#fcf9f3]">
      
      {/* Primary Brand Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        activeSection={activeSection}
      />

      {/* Hero Entrance Section */}
      <HeroSection
        onExploreWeddings={() => {
          setWeddingsOnly(true);
          setSelectedCategory('weddings');
          document.getElementById('monograph-gallery')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreOccasions={() => {
          setWeddingsOnly(false);
          document.getElementById('traditional-services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenInquiry={() => handleOpenInquiry('South Indian Heritage Wedding')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Monograph Gallery with Asymmetric Museum-Mount Grid */}
        <section id="monograph-gallery" className="py-16 sm:py-24 border-b border-[#c59b4e]/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Occasion & Category Tabs */}
          <div className="mb-10 sm:mb-12">
            <OccasionTabs
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              counts={categoryCounts}
              weddingsOnly={weddingsOnly}
              onToggleWeddingsOnly={(val) => setWeddingsOnly(val)}
            />
          </div>

          {/* Asymmetric Media Grid */}
          <PortfolioGrid
            stories={filteredStories}
            onSelectStory={(story) => setSelectedStory(story)}
          />

        </section>

        {/* Seven Sacred Chapters Vedic Accordion */}
        <CeremonyTimeline onOpenInquiry={handleOpenInquiry} />

        {/* Traditional & Special Occasions Breadth (Weddings + Seemantham, Upanayanam, Milestones) */}
        <TraditionalServices onSelectService={handleSelectService} />

        {/* Studio Philosophy & Family Words */}
        <StudioPhilosophy />

      </main>

      {/* Archival Monograph Lightbox Modal */}
      <LightboxModal
        story={selectedStory}
        stories={filteredStories}
        onClose={() => setSelectedStory(null)}
        onSelectStory={(story) => setSelectedStory(story)}
        onInquireStory={handleInquireStory}
      />

      {/* Auspicious Muhurtham Booking Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialOccasion={inquiryOccasion}
      />

      {/* Footnote & Heritage Archive Credits */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

    </div>
  );
}

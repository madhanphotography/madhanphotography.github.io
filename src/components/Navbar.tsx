/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Camera, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialOccasion?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fcf9f3]/95 backdrop-blur-md border-b border-[#c59b4e]/20 transition-all duration-300">
      {/* Auspicious top ribbon */}
      <div className="bg-[#6b0214] text-[#ffd07e] text-[11px] font-medium tracking-[0.18em] uppercase py-1.5 px-4 text-center border-b border-[#c59b4e]/30 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e] animate-pulse"></span>
        <span>Auspicious 2025–2026 Muhurtham & Special Occasion Dates Open for Booking</span>
        <span className="hidden sm:inline text-[#ffd07e]/60">· Sacred Temple Mandapams · Ancestral Illams · Heritage Sanctums</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Heading */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-[3px] border border-[#c59b4e] bg-[#f6f3ed] flex items-center justify-center text-[#8b1e28] group-hover:bg-[#8b1e28] group-hover:text-[#ffd07e] transition-colors shadow-xs">
              <Camera className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-2xl sm:text-3xl tracking-tight text-[#1c1c18] font-normal group-hover:text-[#8b1e28] transition-colors">
                Madhan's Photography
              </span>
              <span className="font-meta text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#7a580f] font-semibold -mt-0.5">
                Traditional Rites & Sacred Wedding Monographs
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('monograph-gallery')}
              className={`font-meta text-xs uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#8b1e28] relative py-1 ${
                activeSection === 'gallery' ? 'text-[#8b1e28] font-semibold' : 'text-[#574141]'
              }`}
            >
              Monograph Gallery
              {activeSection === 'gallery' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8b1e28]" />
              )}
            </button>

            <button
              onClick={() => scrollTo('vedic-timeline')}
              className={`font-meta text-xs uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#8b1e28] relative py-1 ${
                activeSection === 'timeline' ? 'text-[#8b1e28] font-semibold' : 'text-[#574141]'
              }`}
            >
              Ceremony Timeline
              {activeSection === 'timeline' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8b1e28]" />
              )}
            </button>

            <button
              onClick={() => scrollTo('traditional-services')}
              className={`font-meta text-xs uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#8b1e28] relative py-1 ${
                activeSection === 'services' ? 'text-[#8b1e28] font-semibold' : 'text-[#574141]'
              }`}
            >
              Occasions & Shoots
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8b1e28]" />
              )}
            </button>

            <button
              onClick={() => scrollTo('studio-philosophy')}
              className={`font-meta text-xs uppercase tracking-[0.14em] font-medium transition-colors hover:text-[#8b1e28] relative py-1 ${
                activeSection === 'about' ? 'text-[#8b1e28] font-semibold' : 'text-[#574141]'
              }`}
            >
              About Madhan
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8b1e28]" />
              )}
            </button>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] text-xs uppercase tracking-[0.14em] font-semibold py-2.5 px-5 rounded-[4px] border border-[#c59b4e]/40 transition-all duration-200 shadow-sm hover:shadow-md hover:border-[#c59b4e] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#ffd07e]" />
              <span>Inquire Dates</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="bg-[#8b1e28] text-[#fcf9f3] text-[11px] uppercase tracking-wider font-semibold py-1.5 px-3 rounded-[3px] border border-[#c59b4e]/30"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1c1c18] hover:text-[#8b1e28] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#f6f3ed] border-b border-[#c59b4e]/30 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('monograph-gallery')}
            className="block w-full text-left font-meta text-xs uppercase tracking-[0.14em] py-2 text-[#1c1c18] hover:text-[#8b1e28] font-medium"
          >
            Monograph Gallery
          </button>
          <button
            onClick={() => scrollTo('vedic-timeline')}
            className="block w-full text-left font-meta text-xs uppercase tracking-[0.14em] py-2 text-[#1c1c18] hover:text-[#8b1e28] font-medium"
          >
            Vedic Ceremony Timeline
          </button>
          <button
            onClick={() => scrollTo('traditional-services')}
            className="block w-full text-left font-meta text-xs uppercase tracking-[0.14em] py-2 text-[#1c1c18] hover:text-[#8b1e28] font-medium"
          >
            Occasions & Shoots (Weddings, Seemantham, etc.)
          </button>
          <button
            onClick={() => scrollTo('studio-philosophy')}
            className="block w-full text-left font-meta text-xs uppercase tracking-[0.14em] py-2 text-[#1c1c18] hover:text-[#8b1e28] font-medium"
          >
            About Madhan
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#8b1e28] text-[#fcf9f3] text-xs uppercase tracking-[0.14em] font-semibold py-3 rounded-[4px] border border-[#c59b4e]"
            >
              <Calendar className="w-4 h-4 text-[#ffd07e]" />
              <span>Inquire / Check Muhurtham Dates</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

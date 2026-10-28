/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreWeddings: () => void;
  onExploreOccasions: () => void;
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWeddings,
  onExploreOccasions,
  onOpenInquiry,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#c59b4e]/20 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-[#c59b4e]/5 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-[#8b1e28]/5 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a580f]">
              <span className="w-6 h-[1px] bg-[#c59b4e]"></span>
              <span>Madhan's Photography · Archival Heritage Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b1e28]"></span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#1c1c18] font-normal leading-[1.15] tracking-tight">
              Capturing sacred rites, <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#8b1e28]">traditional celebrations</span>, <br className="hidden sm:inline" />
              and timeless weddings.
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="font-editorial text-lg sm:text-xl text-[#574141] leading-relaxed max-w-2xl">
              Madhan is an acclaimed South Indian heritage photojournalist dedicated to documenting
              sacred ceremonies with literary intimacy. While the profound sanctity of traditional
              weddings and dawn <em>Muhurthams</em> forms the overwhelming majority of his body of work,
              his lens honors every generational milestone—from the gentle chimes of <em>Seemantham</em> glass bangles
              and Vedic <em>Upanayanams</em> to sixty-year <em>Sashtiapthapoorthi</em> vow renewals and classical <em>Arangetram</em> debuts.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWeddings}
                className="inline-flex items-center gap-2.5 bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] text-xs uppercase tracking-[0.14em] font-semibold py-3.5 px-6 rounded-[4px] border border-[#c59b4e]/40 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#c59b4e] active:scale-[0.98]"
              >
                <span>Wedding Monographs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ffd07e]" />
              </button>

              <button
                onClick={onExploreOccasions}
                className="inline-flex items-center gap-2.5 bg-transparent hover:bg-[#f0eee8] text-[#8b1e28] text-xs uppercase tracking-[0.14em] font-semibold py-3.5 px-6 rounded-[4px] border border-[#c59b4e] transition-colors duration-200"
              >
                <span>Special Occasion Shoots</span>
              </button>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#7a580f] hover:text-[#8b1e28] py-3.5 px-3 underline underline-offset-4 decoration-[#c59b4e]/50 hover:decoration-[#8b1e28] transition-colors"
              >
                <span>Check Muhurtham Dates</span>
              </button>
            </div>

            {/* Unboxed Metadata & Credibility Bar (No generic pill badges) */}
            <div className="pt-8 border-t border-[#c59b4e]/20 grid grid-cols-3 gap-4 text-[#1c1c18]">
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl text-[#8b1e28] font-medium">500+</p>
                <p className="font-meta text-[11px] uppercase tracking-[0.14em] text-[#574141] mt-0.5">
                  Sacred Ceremonies
                </p>
              </div>
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl text-[#7a580f] font-medium">85%</p>
                <p className="font-meta text-[11px] uppercase tracking-[0.14em] text-[#574141] mt-0.5">
                  Heritage Weddings
                </p>
              </div>
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl text-[#1c1c18] font-medium">12 Yrs</p>
                <p className="font-meta text-[11px] uppercase tracking-[0.14em] text-[#574141] mt-0.5">
                  Natural-Light Craft
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Temple Arch Mount using Regional Bride Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer gilded temple frame */}
              <div className="p-3 sm:p-4 bg-[#f6f3ed] border border-[#c59b4e] shadow-heirloom-lg rounded-[4px] temple-arch-top">
                
                {/* Temple Arch Header Ornament */}
                <div className="pt-3 pb-2 text-center border-b border-[#c59b4e]/30 mb-3">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#7a580f] font-semibold">
                    <span className="w-3 h-[1px] bg-[#c59b4e]"></span>
                    <span>Feature Wedding Monograph</span>
                    <span className="w-3 h-[1px] bg-[#c59b4e]"></span>
                  </div>
                </div>

                {/* Inner Image Container with User's Regional Image */}
                <div className="relative aspect-[9/16] max-h-[520px] overflow-hidden rounded-[2px] bg-[#e5e2dc]">
                  <img
                    src="./assets/aistudio/image_6482de90.png"
                    alt="Traditional South Indian Bride in Temple Mandapam by Madhan"
                    className="w-full h-full object-cover object-top filter saturate-[1.0] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle tonal gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c18]/85 via-[#1c1c18]/20 to-transparent opacity-90" />

                  {/* On-image caption mount */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-[#fcf9f3]">
                    <p className="font-meta text-[10px] uppercase tracking-[0.18em] text-[#ffd07e] font-semibold">
                      Sacred Temple Sanctum
                    </p>
                    <h3 className="font-serif-display text-xl sm:text-2xl text-white font-normal mt-0.5">
                      The Auspicious Muhurtham
                    </h3>
                    <p className="font-editorial text-xs italic text-[#f6f3ed]/90 line-clamp-2 mt-0.5">
                      "Draped in crimson Kanjeevaram silk and ancestral temple jewelry under the warm glow of brass lamps."
                    </p>
                  </div>
                </div>

                {/* Micro Details under mount */}
                <div className="mt-3 pt-2 border-t border-[#c59b4e]/20 flex items-center justify-between text-[11px] font-meta text-[#574141]">
                  <span>Camera: Leica SL2 · 50mm Summilux</span>
                  <span className="text-[#8b1e28] font-semibold">Plate No. 01 / Wedding</span>
                </div>

              </div>

              {/* Decorative side accent badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-[#8b1e28] text-[#fcf9f3] p-3 rounded-[3px] border border-[#c59b4e] shadow-heirloom items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#ffd07e]/40 flex items-center justify-center bg-[#6b0214] text-[#ffd07e]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif-display text-sm leading-tight text-[#fcf9f3]">Auspicious Muhurthams</p>
                  <p className="font-meta text-[9px] tracking-wider uppercase text-[#ffd07e]/80">Zero Flash Distraction</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

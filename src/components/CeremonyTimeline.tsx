/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { VEDIC_CEREMONY_MILESTONES } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Clock, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

interface CeremonyTimelineProps {
  onOpenInquiry: (ceremonyName?: string) => void;
}

export const CeremonyTimeline: React.FC<CeremonyTimelineProps> = ({ onOpenInquiry }) => {
  // Default first milestone expanded
  const [expandedSteps, setExpandedSteps] = useState<number[]>([1, 5]);

  const toggleStep = (stepNumber: number) => {
    setExpandedSteps((prev) =>
      prev.includes(stepNumber) ? prev.filter((s) => s !== stepNumber) : [...prev, stepNumber]
    );
  };

  const expandAll = () => {
    setExpandedSteps(VEDIC_CEREMONY_MILESTONES.map((m) => m.step));
  };

  const collapseAll = () => {
    setExpandedSteps([]);
  };

  return (
    <section id="vedic-timeline" className="py-16 sm:py-24 border-b border-[#c59b4e]/20 bg-[#fcf9f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#c59b4e]/30">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a580f]">
              <Flame className="w-3.5 h-3.5 text-[#8b1e28]" />
              <span>Sacred Milestones & Vedic Rites</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal mt-1 leading-tight">
              The Seven Sacred Chapters of Matrimony
            </h2>
            <p className="font-editorial text-base sm:text-lg text-[#574141] mt-2">
              From the quiet stillness of dawn <em>Brahma Muhurtham</em> through the seven eternal steps around the holy fire,
              Madhan chronicles the sacred arc of the traditional wedding without breaking the spiritual reverie.
            </p>
          </div>

          {/* Quick Accordion Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="font-meta text-xs uppercase tracking-[0.12em] font-semibold text-[#8b1e28] hover:underline cursor-pointer"
            >
              Expand All Chapters
            </button>
            <span className="text-[#c59b4e]">·</span>
            <button
              onClick={collapseAll}
              className="font-meta text-xs uppercase tracking-[0.12em] font-semibold text-[#574141] hover:underline cursor-pointer"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* Milestone Accordion List */}
        <div className="mt-8 space-y-4">
          {VEDIC_CEREMONY_MILESTONES.map((milestone) => {
            const isExpanded = expandedSteps.includes(milestone.step);

            return (
              <div
                key={milestone.step}
                className={`transition-all duration-300 rounded-[4px] border ${
                  isExpanded
                    ? 'bg-[#f6f3ed] border-[#c59b4e] shadow-heirloom'
                    : 'bg-[#faf7f2] hover:bg-[#f6f3ed] border-[#c59b4e]/30'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleStep(milestone.step)}
                  className="w-full text-left p-4 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Roman Numeral Emblem */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[3px] bg-[#f0eee8] border border-[#c59b4e] flex items-center justify-center flex-shrink-0 text-[#8b1e28] font-serif-display text-lg sm:text-xl font-medium shadow-xs">
                      {milestone.romanNumeral}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-meta uppercase tracking-[0.14em] text-[#7a580f]">
                        <span className="flex items-center gap-1 font-semibold">
                          <Clock className="w-3 h-3 text-[#c59b4e]" />
                          {milestone.traditionalTiming}
                        </span>
                        <span aria-hidden="true" className="text-[#c59b4e]">·</span>
                        <span className="text-[#8b1e28] font-semibold">{milestone.tamilName}</span>
                      </div>
                      
                      <h3 className="font-serif-display text-xl sm:text-2xl text-[#1c1c18] font-normal mt-0.5">
                        {milestone.name}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="w-8 h-8 rounded-full border border-[#c59b4e]/40 flex items-center justify-center text-[#7a580f] flex-shrink-0 mt-1 sm:mt-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="px-4 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-[#c59b4e]/20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      
                      {/* Left: Photograph Preview with Museum Frame */}
                      <div className="lg:col-span-5">
                        <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden bg-[#e5e2dc] border border-[#c59b4e]/30 shadow-xs">
                          <img
                            src={milestone.imageUrl}
                            alt={milestone.name}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                          <div className="absolute bottom-2 left-2 bg-[#1c1c18]/80 text-[#ffd07e] text-[10px] font-meta uppercase tracking-wider py-1 px-2.5 rounded-[2px] border border-[#c59b4e]/30">
                            Chapter {milestone.romanNumeral} Visual Archive
                          </div>
                        </div>
                      </div>

                      {/* Right: Spiritual Meaning, Mantra & Symbols */}
                      <div className="lg:col-span-7 space-y-4">
                        
                        <div>
                          <h4 className="font-meta text-xs uppercase tracking-[0.16em] text-[#7a580f] font-bold">
                            Spiritual Intent & Significance
                          </h4>
                          <p className="font-editorial text-base sm:text-lg text-[#1c1c18] mt-1 leading-relaxed">
                            {milestone.spiritualMeaning}
                          </p>
                        </div>

                        {/* Sacred Inscription Box */}
                        <div className="p-4 bg-[#f0eee8] border-l-2 border-[#8b1e28] rounded-r-[3px] space-y-1">
                          <p className="font-editorial text-sm sm:text-base italic text-[#4a1b22]">
                            "{milestone.sacredMantra}"
                          </p>
                          <p className="font-editorial text-xs text-[#574141]">
                            Translation: {milestone.mantraTranslation}
                          </p>
                        </div>

                        {/* Ritual Elements & Symbols */}
                        <div>
                          <h5 className="font-meta text-[11px] uppercase tracking-[0.16em] text-[#7a580f] font-semibold">
                            Sacred Elements Documented
                          </h5>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {milestone.symbolism.map((symbol, sIdx) => (
                              <span
                                key={sIdx}
                                className="inline-flex items-center gap-1.5 bg-[#fcf9f3] text-[#1c1c18] text-xs font-meta py-1 px-2.5 rounded-[2px] border border-[#c59b4e]/30"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#8b1e28]" />
                                <span>{symbol}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Direct Booking trigger for this milestone */}
                        <div className="pt-2">
                          <button
                            onClick={() => onOpenInquiry(milestone.name)}
                            className="inline-flex items-center gap-2 text-xs font-meta uppercase tracking-[0.14em] font-semibold text-[#8b1e28] hover:text-[#6b0214] underline underline-offset-4 decoration-[#c59b4e]"
                          >
                            <span>Inquire for full coverage of {milestone.name} →</span>
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

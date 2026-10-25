/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRADITIONAL_SERVICES } from '../data/portfolioData';
import { Sparkles, Calendar, Check, Award } from 'lucide-react';
import { TraditionalService } from '../types/photography';

interface TraditionalServicesProps {
  onSelectService: (service: TraditionalService) => void;
}

export const TraditionalServices: React.FC<TraditionalServicesProps> = ({ onSelectService }) => {
  return (
    <section id="traditional-services" className="py-16 sm:py-24 bg-[#f6f3ed] border-b border-[#c59b4e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a580f]">
            <Award className="w-3.5 h-3.5 text-[#8b1e28]" />
            <span>Versatility & Sacred Traditions</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal mt-1 leading-tight">
            Traditional Ceremonies & Occasion Shoots
          </h2>
          <p className="font-editorial text-base sm:text-lg text-[#574141] mt-2">
            While grand South Indian weddings form the core heartbeat of Madhan's studio, his documentary approach
            extends across the entire tapestry of Hindu rituals, familial transitions, and classical arts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRADITIONAL_SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-[#fcf9f3] p-5 sm:p-6 rounded-[4px] border transition-all duration-300 shadow-heirloom hover:shadow-heirloom-lg ${
                  service.isMajor
                    ? 'border-[#8b1e28] ring-1 ring-[#8b1e28]/20 relative'
                    : 'border-[#c59b4e]/40 hover:border-[#c59b4e]'
                }`}
              >
                <div>
                  {/* Signature Major Ribbon */}
                  {service.isMajor && (
                    <div className="mb-3 inline-flex items-center gap-1.5 bg-[#8b1e28] text-[#ffd07e] text-[10px] font-meta uppercase tracking-[0.16em] font-bold py-1 px-3 rounded-[2px] border border-[#c59b4e]/50">
                      <Sparkles className="w-3 h-3 text-[#ffd07e]" />
                      <span>Studio Masterwork · Majority of Schedule</span>
                    </div>
                  )}

                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-[#e5e2dc] mb-4 border border-[#c59b4e]/20">
                    <img
                      src={service.coverImage}
                      alt={service.title}
                      className="w-full h-full object-cover object-center filter saturate-[0.98] hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Tamil Inscription */}
                  <div className="pb-3 border-b border-[#c59b4e]/20">
                    <p className="font-editorial text-sm text-[#8b1e28] font-medium">
                      {service.tamilTitle}
                    </p>
                    <h3 className="font-serif-display text-xl sm:text-2xl text-[#1c1c18] font-normal mt-0.5">
                      {service.title}
                    </h3>
                    <p className="font-editorial text-xs italic text-[#7a580f] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Narrative Description */}
                  <p className="font-editorial text-sm text-[#574141] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Occasions Covered */}
                  <div className="mt-4 pt-3 border-t border-[#c59b4e]/20">
                    <p className="font-meta text-[10px] uppercase tracking-[0.16em] text-[#7a580f] font-semibold">
                      Rituals & Occasions Covered:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#1c1c18] font-editorial">
                      {service.occasionsCovered.map((occ, oIdx) => (
                        <li key={oIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8b1e28]" />
                          <span>{occ}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-4 pt-3 border-t border-[#c59b4e]/20">
                    <p className="font-meta text-[10px] uppercase tracking-[0.16em] text-[#7a580f] font-semibold">
                      Included Monograph Deliverables:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#574141] font-editorial">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c59b4e] flex-shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inquiry Action */}
                <div className="mt-6 pt-4 border-t border-[#c59b4e]/30">
                  <button
                    onClick={() => onSelectService(service)}
                    className={`w-full py-2.5 px-4 rounded-[3px] text-xs font-meta uppercase tracking-[0.14em] font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      service.isMajor
                        ? 'bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] border border-[#c59b4e] shadow-xs'
                        : 'bg-[#f6f3ed] hover:bg-[#8b1e28] text-[#1c1c18] hover:text-[#fcf9f3] border border-[#c59b4e]/40 hover:border-[#8b1e28]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Inquire for {service.title.split(' ')[0]}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

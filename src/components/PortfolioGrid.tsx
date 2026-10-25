/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CeremonyStory } from '../types/photography';
import { Eye, Camera, MapPin } from 'lucide-react';

interface PortfolioGridProps {
  stories: CeremonyStory[];
  onSelectStory: (story: CeremonyStory) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ stories, onSelectStory }) => {
  if (stories.length === 0) {
    return (
      <div className="text-center py-20 px-4 bg-[#f6f3ed] border border-[#c59b4e]/30 rounded-[4px]">
        <Camera className="w-10 h-10 text-[#c59b4e] mx-auto mb-3 stroke-[1.2]" />
        <h3 className="font-serif-display text-2xl text-[#1c1c18]">No Ceremonies Found in This Category</h3>
        <p className="font-editorial text-base text-[#574141] max-w-md mx-auto mt-1">
          Try selecting "All Collections" to explore Madhan's complete archive of wedding and traditional shoots.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
      {stories.map((story, index) => {
        // Asymmetric grid layout math:
        // Every 5 items or featured leads get wider emphasis
        const isWide = story.featuredLead || index === 0 || index === 6;
        const colSpanClass = isWide
          ? 'lg:col-span-8'
          : 'lg:col-span-4';

        const aspectClass = isWide
          ? 'aspect-[16/10]'
          : story.aspectRatio === 'portrait'
          ? 'aspect-[3/4]'
          : 'aspect-[4/3]';

        return (
          <article
            key={story.id}
            onClick={() => onSelectStory(story)}
            className={`${colSpanClass} group cursor-pointer flex flex-col bg-[#f6f3ed] hover:bg-[#faf7f2] p-3.5 sm:p-5 rounded-[4px] border border-[#c59b4e]/30 hover:border-[#c59b4e] transition-all duration-300 shadow-heirloom hover:shadow-heirloom-lg`}
          >
            {/* Museum Matte Frame */}
            <div className={`relative w-full ${aspectClass} overflow-hidden rounded-[2px] bg-[#e5e2dc]`}>
              <img
                src={story.imageUrl}
                alt={story.title}
                loading="lazy"
                className="w-full h-full object-cover object-center filter saturate-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Quiet Hover Tint & Lens Badge */}
              <div className="absolute inset-0 bg-[#4a1b22]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 bg-[#fcf9f3]/95 text-[#8b1e28] text-[11px] font-meta uppercase tracking-[0.14em] font-semibold py-2 px-3.5 rounded-[3px] border border-[#c59b4e] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-3.5 h-3.5 text-[#7a580f]" />
                  <span>View Archival Monograph</span>
                </span>
              </div>

              {/* Major Wedding Indicator subtle stamp */}
              {story.isWeddingMajor && (
                <div className="absolute top-3 left-3 bg-[#8b1e28]/90 backdrop-blur-xs text-[#fcf9f3] text-[9px] font-meta uppercase tracking-[0.16em] font-semibold py-1 px-2.5 rounded-[2px] border border-[#ffd07e]/40">
                  Wedding Monograph
                </div>
              )}
            </div>

            {/* Editorial Caption / Mount Under Image */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                {/* Clean unboxed metadata with subtle dot separators */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-meta uppercase tracking-[0.14em] text-[#7a580f] font-semibold">
                  <span>{story.location}</span>
                  <span aria-hidden="true" className="text-[#c59b4e]">·</span>
                  <span>{story.year}</span>
                  <span aria-hidden="true" className="text-[#c59b4e]">·</span>
                  <span className="text-[#8b1e28]">{story.venueType}</span>
                </div>

                {/* Primary Title in Playfair Display */}
                <h3 className="font-serif-display text-xl sm:text-2xl text-[#1c1c18] font-normal mt-1.5 group-hover:text-[#8b1e28] transition-colors leading-snug">
                  {story.title}
                </h3>

                {/* Tamil Ceremonial Subtitle */}
                {story.tamilTitle && (
                  <p className="font-editorial text-sm text-[#8b1e28]/80 font-medium mt-0.5">
                    {story.tamilTitle}
                  </p>
                )}

                {/* Narrative Summary */}
                <p className="font-editorial text-sm sm:text-[15px] text-[#574141] mt-2 line-clamp-2 leading-relaxed">
                  {story.narrative}
                </p>
              </div>

              {/* Bottom Hairline & Camera Metadata */}
              <div className="mt-4 pt-3 border-t border-[#c59b4e]/20 flex items-center justify-between text-[11px] font-meta text-[#574141]">
                <div className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#c59b4e]" />
                  <span>{story.exif.lens}</span>
                </div>
                <span className="text-[#7a580f] group-hover:text-[#8b1e28] font-semibold transition-colors flex items-center gap-1">
                  Read Ritual Notes →
                </span>
              </div>

            </div>
          </article>
        );
      })}
    </div>
  );
};

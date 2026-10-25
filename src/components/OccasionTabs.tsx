/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { OccasionCategory } from '../types/photography';

interface OccasionTabsProps {
  selectedCategory: OccasionCategory;
  onSelectCategory: (category: OccasionCategory) => void;
  counts: Record<OccasionCategory, number>;
  weddingsOnly: boolean;
  onToggleWeddingsOnly: (value: boolean) => void;
}

export const OccasionTabs: React.FC<OccasionTabsProps> = ({
  selectedCategory,
  onSelectCategory,
  counts,
  weddingsOnly,
  onToggleWeddingsOnly,
}) => {
  const tabs: { id: OccasionCategory; label: string; sublabel: string }[] = [
    { id: 'all', label: 'All Collections', sublabel: 'Complete Body of Work' },
    { id: 'weddings', label: 'Weddings & Muhurtham', sublabel: 'Major Focus (70%+)' },
    { id: 'oonjal-sangeeth', label: 'Oonjal & Sangeeth', sublabel: 'Swings & Melodies' },
    { id: 'seemantham', label: 'Seemantham', sublabel: 'Valakaappu & Maternity' },
    { id: 'upanayanam', label: 'Upanayanam', sublabel: 'Sacred Thread & Vedic' },
    { id: 'milestones', label: 'Special Milestones', sublabel: '60th Birthdays & Arangetram' },
  ];

  return (
    <div className="space-y-4">
      {/* Top Bar with Category Filter & Wedding Focus Switch */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-[#c59b4e]/20">
        <div>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1c1c18] font-normal">
            The Monograph Archive
          </h2>
          <p className="font-editorial text-sm sm:text-base text-[#574141] mt-0.5">
            Curated ceremonial documentation across historic South Indian temple towns and heritage residences.
          </p>
        </div>

        {/* Wedding Quick Focus Filter */}
        <div className="flex items-center gap-3 bg-[#f6f3ed] px-3.5 py-2 rounded-[4px] border border-[#c59b4e]/40 self-start md:self-auto">
          <input
            type="checkbox"
            id="weddingsOnlyToggle"
            checked={weddingsOnly}
            onChange={(e) => onToggleWeddingsOnly(e.target.checked)}
            className="w-4 h-4 text-[#8b1e28] rounded-[2px] border-[#c59b4e] focus:ring-[#8b1e28] accent-[#8b1e28] cursor-pointer"
          />
          <label
            htmlFor="weddingsOnlyToggle"
            className="font-meta text-xs uppercase tracking-[0.12em] text-[#1c1c18] font-semibold cursor-pointer select-none"
          >
            Show Wedding Work Only
          </label>
        </div>
      </div>

      {/* Segmented Filter Buttons (Zero-Pill: Clean segmented bar with gold separation) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          const count = counts[tab.id] || 0;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`flex-shrink-0 text-left px-3.5 py-2 rounded-[3px] border transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#8b1e28] text-[#fcf9f3] border-[#8b1e28] shadow-xs'
                  : 'bg-[#f6f3ed] hover:bg-[#f0eee8] text-[#1c1c18] border-[#c59b4e]/30 hover:border-[#c59b4e]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-meta text-[11px] sm:text-xs uppercase tracking-[0.14em] font-semibold">
                  {tab.label}
                </span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-[2px] ${
                    isActive ? 'bg-[#6b0214] text-[#ffd07e]' : 'bg-[#e5e2dc] text-[#574141]'
                  }`}
                >
                  {count}
                </span>
              </div>
              <p
                className={`font-editorial text-[11px] italic tracking-normal hidden sm:block ${
                  isActive ? 'text-[#ffdad9]' : 'text-[#7a580f]'
                }`}
              >
                {tab.sublabel}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

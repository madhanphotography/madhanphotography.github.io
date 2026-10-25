/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { CeremonyStory } from '../types/photography';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Sparkles, BookOpen } from 'lucide-react';

interface LightboxModalProps {
  story: CeremonyStory | null;
  stories: CeremonyStory[];
  onClose: () => void;
  onSelectStory: (story: CeremonyStory) => void;
  onInquireStory: (story: CeremonyStory) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  story,
  stories,
  onClose,
  onSelectStory,
  onInquireStory,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!story) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        navigate(-1);
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (story) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [story, stories]);

  if (!story) return null;

  const currentIndex = stories.findIndex((s) => s.id === story.id);
  const navigate = (direction: number) => {
    setZoomLevel(1);
    const nextIndex = (currentIndex + direction + stories.length) % stories.length;
    onSelectStory(stories[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#1c1c18]/90 backdrop-blur-md transition-opacity duration-300">
      
      {/* Container Box */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label={story.title}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row bg-[#fcf9f3] rounded-[4px] border border-[#c59b4e] shadow-2xl overflow-hidden"
      >
        {/* Top bar with close button & count */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          <span className="bg-[#f6f3ed]/90 text-[#7a580f] font-meta text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-[2px] border border-[#c59b4e]/30">
            Plate {currentIndex + 1} of {stories.length}
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-[3px] bg-[#f6f3ed] hover:bg-[#8b1e28] text-[#1c1c18] hover:text-[#fcf9f3] border border-[#c59b4e] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label="Close Monograph"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left: High-Resolution Photographic Display */}
        <div className="lg:w-7/12 bg-[#1c1c18] flex items-center justify-center relative p-3 sm:p-6 select-none overflow-hidden min-h-[320px] lg:min-h-full">
          <img
            src={story.imageUrl}
            alt={story.title}
            style={{ transform: `scale(${zoomLevel})` }}
            className="max-h-[78vh] w-auto max-w-full object-contain transition-transform duration-300"
          />

          {/* Nav Chevrons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#fcf9f3]/80 hover:bg-[#fcf9f3] text-[#8b1e28] border border-[#c59b4e] flex items-center justify-center shadow-md transition-all cursor-pointer"
            aria-label="Previous plate"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#fcf9f3]/80 hover:bg-[#fcf9f3] text-[#8b1e28] border border-[#c59b4e] flex items-center justify-center shadow-md transition-all cursor-pointer"
            aria-label="Next plate"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Zoom Control */}
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-[#1c1c18]/80 text-[#ffd07e] text-[10px] font-mono px-2.5 py-1 rounded-[2px] border border-[#c59b4e]/40">
            <button
              onClick={() => setZoomLevel((z) => (z === 1 ? 1.35 : 1))}
              className="hover:underline cursor-pointer"
            >
              {zoomLevel === 1 ? '🔍 Click to Zoom (1.35x)' : '🔍 Reset View (1.0x)'}
            </button>
          </div>
        </div>

        {/* Right: Archival Monograph Details, Vows, & EXIF */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[92vh] bg-[#fcf9f3]">
          
          <div className="space-y-5">
            {/* Category and Location Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-meta uppercase tracking-[0.16em] text-[#7a580f] font-semibold">
                <span>{story.location}</span>
                <span>·</span>
                <span>{story.venueType}</span>
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1c1c18] font-normal mt-1 leading-snug">
                {story.title}
              </h2>
              {story.tamilTitle && (
                <p className="font-editorial text-base text-[#8b1e28] font-medium mt-0.5">
                  {story.tamilTitle}
                </p>
              )}
              <p className="font-meta text-xs uppercase tracking-[0.12em] text-[#574141] mt-1 font-semibold">
                Subject: {story.coupleOrSubject}
              </p>
            </div>

            {/* Sacred Verse Excerpt */}
            {story.sacredVerse && (
              <div className="p-3.5 bg-[#f6f3ed] border-l-2 border-[#8b1e28] rounded-r-[3px]">
                <p className="font-editorial italic text-sm text-[#4a1b22] leading-relaxed">
                  "{story.sacredVerse}"
                </p>
                <p className="font-meta text-[10px] uppercase tracking-wider text-[#7a580f] font-semibold mt-1">
                  Vedic Inscription & Benediction
                </p>
              </div>
            )}

            {/* Narrative */}
            <div>
              <h4 className="font-meta text-[11px] uppercase tracking-[0.18em] text-[#7a580f] font-bold">
                Ritual Chronicle
              </h4>
              <p className="font-editorial text-[16px] text-[#1c1c18] leading-relaxed mt-1">
                {story.narrative}
              </p>
            </div>

            {/* Cultural Significance */}
            <div>
              <h4 className="font-meta text-[11px] uppercase tracking-[0.18em] text-[#7a580f] font-bold">
                Spiritual Symbolism
              </h4>
              <p className="font-editorial text-[15px] text-[#574141] leading-relaxed mt-1">
                {story.culturalNote}
              </p>
            </div>

            {/* Technical EXIF Journal (Madhan's Camera Settings) */}
            <div className="p-4 bg-[#f0eee8] rounded-[3px] border border-[#c59b4e]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-meta uppercase tracking-[0.16em] text-[#8b1e28] font-bold pb-1 border-b border-[#c59b4e]/20">
                <Camera className="w-4 h-4 text-[#7a580f]" />
                <span>Photographer's Field Journal</span>
              </div>
              <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-xs font-meta text-[#1c1c18]">
                <div>
                  <span className="text-[#574141] font-normal">Camera: </span>
                  <span className="font-semibold">{story.exif.camera}</span>
                </div>
                <div>
                  <span className="text-[#574141] font-normal">Lens: </span>
                  <span className="font-semibold">{story.exif.lens}</span>
                </div>
                <div>
                  <span className="text-[#574141] font-normal">Aperture: </span>
                  <span className="font-semibold">{story.exif.aperture}</span>
                </div>
                <div>
                  <span className="text-[#574141] font-normal">Shutter: </span>
                  <span className="font-semibold">{story.exif.shutter}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#574141] font-normal">Film Profile: </span>
                  <span className="font-semibold text-[#8b1e28]">{story.exif.filmProfile}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t border-[#c59b4e]/30 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onInquireStory(story);
              }}
              className="w-full sm:w-auto flex-1 bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] text-xs uppercase tracking-[0.14em] font-semibold py-3 px-5 rounded-[4px] border border-[#c59b4e] transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#ffd07e]" />
              <span>Inquire for {story.isWeddingMajor ? 'Wedding' : 'This Occasion'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#f6f3ed] hover:bg-[#f0eee8] text-[#1c1c18] text-xs uppercase tracking-[0.14em] font-medium py-3 px-5 rounded-[4px] border border-[#c59b4e]/40 transition-colors"
            >
              Return to Gallery
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

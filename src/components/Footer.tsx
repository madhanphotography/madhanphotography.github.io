/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Camera, Heart, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1c1c18] text-[#fcf9f3] pt-16 pb-12 border-t-2 border-[#c59b4e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#c59b4e]/30">
          
          {/* Brand & Ethos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[3px] border border-[#c59b4e] bg-[#2a2620] flex items-center justify-center text-[#ffd07e]">
                <Camera className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif-display text-2xl tracking-tight text-white font-normal">
                  Madhan's Photography
                </h3>
                <p className="font-meta text-[10px] uppercase tracking-[0.18em] text-[#ffd07e] font-semibold">
                  Traditional Rites & Sacred Wedding Monographs
                </p>
              </div>
            </div>

            <p className="font-editorial text-base text-[#dcdad4] leading-relaxed max-w-md">
              Specializing in all manner of traditional and sacred occasion shoots—with deep, lifetime mastery
              in South Indian heritage weddings, dawn Muhurthams, and generational family heirlooms.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-meta text-[#ffd07e]">
              <span>Traditional Heritage Mandapams & Rites</span>
              <span>·</span>
              <span>Est. 2012</span>
            </div>
          </div>

          {/* Quick Navigational Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-meta text-xs uppercase tracking-[0.18em] text-[#ffd07e] font-bold">
              Monograph Chapters
            </h4>
            <ul className="space-y-2 text-sm font-editorial text-[#dcdad4]">
              <li>
                <button
                  onClick={() => scrollTo('monograph-gallery')}
                  className="hover:text-[#ffd07e] transition-colors cursor-pointer"
                >
                  Weddings & Sacred Muhurthams
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('monograph-gallery')}
                  className="hover:text-[#ffd07e] transition-colors cursor-pointer"
                >
                  Seemantham & Valakaappu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('monograph-gallery')}
                  className="hover:text-[#ffd07e] transition-colors cursor-pointer"
                >
                  Upanayanam & Vedic Rites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('vedic-timeline')}
                  className="hover:text-[#ffd07e] transition-colors cursor-pointer"
                >
                  The Seven Vedic Wedding Chapters
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('traditional-services')}
                  className="hover:text-[#ffd07e] transition-colors cursor-pointer"
                >
                  Special Occasion Services & Shoots
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact & Inquiry Action */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-meta text-xs uppercase tracking-[0.18em] text-[#ffd07e] font-bold">
              Studio & Bookings
            </h4>
            <div className="space-y-2.5 text-xs font-meta text-[#dcdad4]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#c59b4e] flex-shrink-0" />
                <span>Traditional Heritage Studio & Ceremonial Archive</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c59b4e] flex-shrink-0" />
                <span>inquiries@madhansphotography.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c59b4e] flex-shrink-0" />
                <span>+91 98402 78310 / +91 94431 82904</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="w-full bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] text-xs uppercase tracking-[0.14em] font-semibold py-3 px-4 rounded-[3px] border border-[#c59b4e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ffd07e]" />
                <span>Reserve Muhurtham Date</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-meta text-[#dcdad4]/70">
          <p>© {new Date().getFullYear()} Madhan's Photography. All ceremonial archives protected.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with sacred reverence for South Indian heritage weddings.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

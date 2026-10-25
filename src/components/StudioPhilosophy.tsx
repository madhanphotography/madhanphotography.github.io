/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Sparkles, Quote, Sun, Heart, Flame } from 'lucide-react';

export const StudioPhilosophy: React.FC = () => {
  return (
    <section id="studio-philosophy" className="py-16 sm:py-24 bg-[#fcf9f3] border-b border-[#c59b4e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Philosophy Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
          
          {/* Portrait / Temple Studio Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-3 sm:p-4 bg-[#f6f3ed] border border-[#c59b4e] rounded-[4px] shadow-heirloom">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[#e5e2dc]">
                <img
                  src="/assets/aistudio/carved_pillar_sculpture.png"
                  alt="Carved Temple Mandapam Pillar by Madhan"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c18]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#fcf9f3]">
                  <p className="font-meta text-[10px] uppercase tracking-[0.18em] text-[#ffd07e]">
                    Madhan · Lead Photojournalist
                  </p>
                  <p className="font-serif-display text-lg text-white font-normal mt-0.5">
                    "A wedding is not a photoshoot; it is an ancient communion of souls."
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-[#c59b4e]/20 text-[11px] font-meta text-[#574141] flex justify-between">
                <span>Dedicated to Traditional Heritage Rites & Mandapams</span>
                <span className="text-[#8b1e28] font-semibold">12+ Years Documenting Traditions</span>
              </div>
            </div>
          </div>

          {/* Philosophy Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a580f]">
              <span className="w-6 h-[1px] bg-[#c59b4e]"></span>
              <span>The Studio Philosophy</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1c1c18] font-normal leading-tight">
              Honoring ritual sacredness over modern intrusion.
            </h2>

            <div className="space-y-4 font-editorial text-base sm:text-lg text-[#574141] leading-relaxed">
              <p>
                In an era dominated by blinding stadium flashes and choreographed poses that interrupt the flow of mantras,
                Madhan adheres to the quiet discipline of classical photojournalism. We believe that the greatest captures happen
                when the priest is undisturbed, the tears in an elder’s eyes are genuine, and the couple remains fully immersed in their vows.
              </p>
              <p>
                Whether photographing a multi-day traditional heritage wedding in ancestral mandapams or an intimate <em>Seemantham</em> bangle ceremony
                in a traditional home courtyard, Madhan works exclusively with quiet high-speed primes and natural temple illumination.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#c59b4e]/20">
              <div className="p-3 bg-[#f6f3ed] rounded-[3px] border border-[#c59b4e]/30">
                <Sun className="w-4 h-4 text-[#7a580f] mb-1.5" />
                <h4 className="font-meta text-xs uppercase tracking-wider text-[#1c1c18] font-bold">
                  Ambient Temple Light
                </h4>
                <p className="font-editorial text-xs text-[#574141] mt-1">
                  Illuminated by brass oil lamps and soft morning sunlight.
                </p>
              </div>

              <div className="p-3 bg-[#f6f3ed] rounded-[3px] border border-[#c59b4e]/30">
                <Flame className="w-4 h-4 text-[#8b1e28] mb-1.5" />
                <h4 className="font-meta text-xs uppercase tracking-wider text-[#1c1c18] font-bold">
                  Vedic Fluency
                </h4>
                <p className="font-editorial text-xs text-[#574141] mt-1">
                  Intimate understanding of every ritual minute and gesture.
                </p>
              </div>

              <div className="p-3 bg-[#f6f3ed] rounded-[3px] border border-[#c59b4e]/30">
                <Heart className="w-4 h-4 text-[#7a580f] mb-1.5" />
                <h4 className="font-meta text-xs uppercase tracking-wider text-[#1c1c18] font-bold">
                  Generational Heirlooms
                </h4>
                <p className="font-editorial text-xs text-[#574141] mt-1">
                  Hand-bound albums printed on archival museum cotton paper.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Monograph Testimonials */}
        <div className="pt-8 border-t border-[#c59b4e]/30">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Quote className="w-8 h-8 text-[#c59b4e] mx-auto mb-2 opacity-80" />
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1c1c18] font-normal">
              Words from Families & Couples
            </h3>
            <p className="font-editorial text-sm text-[#574141] mt-1">
              Enduring memories preserved across generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#f6f3ed] p-6 rounded-[4px] border border-[#c59b4e]/30 flex flex-col justify-between shadow-xs"
              >
                <p className="font-editorial italic text-base text-[#1c1c18] leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-[#c59b4e]/20">
                  <p className="font-serif-display text-base text-[#8b1e28] font-medium">
                    {t.author}
                  </p>
                  <p className="font-meta text-[11px] uppercase tracking-wider text-[#7a580f] font-semibold mt-0.5">
                    {t.occasion} · {t.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

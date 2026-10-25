/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Sparkles, MapPin, Send, Clock, User, Phone, Mail } from 'lucide-react';
import { InquiryFormData } from '../types/photography';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialOccasion?: string;
}

const OCCASIONS_LIST = [
  'South Indian Heritage Wedding (Muhurtham & Reception)',
  'Traditional Tamil Iyer / Iyengar Wedding',
  'Chettinad Royal Heritage Wedding',
  'Telugu / Kannada Traditional Wedding',
  'Seemantham & Valakaappu (Maternity Blessing)',
  'Upanayanam (Sacred Thread Ceremony)',
  'Sashtiapthapoorthi / Sadabhishekam (60th/80th Vow Renewal)',
  'Bharatanatyam Arangetram / Classical Debut',
  'Griha Pravesham (Housewarming & Paal Kaaichal)',
  'Other Traditional Sacred Occasion',
];

const REGIONAL_VENUES_LIST = [
  'Sacred Temple Kalyana Mandapam',
  'Ancestral Courtyard Illam',
  'Carved Wooden Temple Mandapam',
  'Traditional Vedic Pathashala / Hall',
  'Heritage Palace Pavilion',
  'Private Family Ancestral Residence',
  'Destination Heritage Mandapam',
];

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialOccasion,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    partnerOrFamilyName: '',
    email: '',
    phone: '',
    occasionType: initialOccasion || OCCASIONS_LIST[0],
    eventDate: '',
    eventCity: REGIONAL_VENUES_LIST[0],
    venueDetails: '',
    estimatedGuests: '200–500 Guests',
    message: '',
    preferredFilmStyle: 'Warm Heritage Natural Light (Recommended)',
  });

  const [datePending, setDatePending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<any[]>([]);

  useEffect(() => {
    if (initialOccasion) {
      setFormData((prev) => ({ ...prev, occasionType: initialOccasion }));
    }
  }, [initialOccasion]);

  useEffect(() => {
    const saved = localStorage.getItem('madhan_inquiries');
    if (saved) {
      try {
        setSubmittedInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, [isSuccess]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry = {
        ...formData,
        id: `MS-${Date.now().toString().slice(-6)}`,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      const updated = [newInquiry, ...submittedInquiries];
      localStorage.setItem('madhan_inquiries', JSON.stringify(updated));
      setSubmittedInquiries(updated);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-[#1c1c18]/80 backdrop-blur-xs transition-opacity duration-300">
      
      {/* Drawer Container */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Inquire Muhurtham Dates"
        className="w-full max-w-xl h-full bg-[#fcf9f3] border-l border-[#c59b4e] shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        
        {/* Top Header */}
        <div className="p-6 border-b border-[#c59b4e]/30 bg-[#f6f3ed] flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-meta uppercase tracking-[0.2em] text-[#7a580f] font-bold">
              <Sparkles className="w-3 h-3 text-[#8b1e28]" />
              <span>Madhan's Photography · Studio Bookings</span>
            </div>
            <h2 className="font-serif-display text-2xl text-[#1c1c18] font-normal mt-0.5">
              Check Auspicious Dates & Availability
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-[3px] bg-[#f0eee8] hover:bg-[#8b1e28] text-[#1c1c18] hover:text-[#fcf9f3] border border-[#c59b4e]/40 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 flex-1">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f6f3ed] border-2 border-[#8b1e28] flex items-center justify-center mx-auto text-[#8b1e28]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-3xl text-[#1c1c18] font-normal">
                Subham! Your Inquiry is Received.
              </h3>
              <p className="font-editorial text-lg text-[#574141] max-w-md mx-auto leading-relaxed">
                Thank you for entrusting Madhan's Photography with your sacred milestone.
                Madhan personally reviews his ceremonial calendar for auspicious dates and will reach out to you within 24 hours.
              </p>
              
              <div className="p-4 bg-[#f6f3ed] rounded-[4px] border border-[#c59b4e]/30 text-left max-w-md mx-auto text-xs font-meta space-y-1.5">
                <p className="text-[#7a580f] uppercase tracking-wider font-semibold">
                  Inquiry Summary:
                </p>
                <p><span className="text-[#574141]">Occasion:</span> <strong className="text-[#1c1c18]">{formData.occasionType}</strong></p>
                <p><span className="text-[#574141]">Location:</span> <strong className="text-[#1c1c18]">{formData.eventCity}</strong></p>
                <p><span className="text-[#574141]">Target Date:</span> <strong className="text-[#1c1c18]">{datePending ? 'Awaiting Astrological Calculation' : formData.eventDate || 'To be finalized'}</strong></p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] text-xs uppercase tracking-[0.14em] font-semibold py-3 px-6 rounded-[3px] border border-[#c59b4e] transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Occasion Selection */}
              <div>
                <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                  1. Sacred Occasion / Shoot Type *
                </label>
                <select
                  value={formData.occasionType}
                  onChange={(e) => setFormData({ ...formData, occasionType: e.target.value })}
                  className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2.5 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28] focus:ring-1 focus:ring-[#8b1e28]"
                  required
                >
                  {OCCASIONS_LIST.map((occ, idx) => (
                    <option key={idx} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
                <p className="font-editorial text-xs text-[#574141] mt-1">
                  * Note: South Indian traditional weddings represent over 70% of Madhan's annual calendar.
                </p>
              </div>

              {/* Event Date & Astrologer Toggle */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold">
                    2. Auspicious Date / Muhurtham
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-[#574141] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={datePending}
                      onChange={(e) => setDatePending(e.target.checked)}
                      className="rounded-[2px] text-[#8b1e28] focus:ring-[#8b1e28] accent-[#8b1e28]"
                    />
                    <span>Date being fixed by Astrologer</span>
                  </label>
                </div>

                {!datePending ? (
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                  />
                ) : (
                  <div className="p-2.5 bg-[#f6f3ed] rounded-[3px] border border-[#c59b4e]/30 text-xs font-editorial text-[#7a580f] italic">
                    Awaiting astrological chart calculation. Madhan can hold tentative calendar blocks for your auspicious season.
                  </div>
                )}
              </div>

              {/* Ceremonial Venue / Setting */}
              <div>
                <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                  3. Ceremonial Venue / Setting *
                </label>
                <select
                  value={formData.eventCity}
                  onChange={(e) => setFormData({ ...formData, eventCity: e.target.value })}
                  className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                  required
                >
                  {REGIONAL_VENUES_LIST.map((venue, idx) => (
                    <option key={idx} value={venue}>
                      {venue}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meenakshi Sundaram"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                  />
                </div>

                <div>
                  <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                    Partner / Family Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Srinivasan & Family"
                    value={formData.partnerOrFamilyName}
                    onChange={(e) => setFormData({ ...formData, partnerOrFamilyName: e.target.value })}
                    className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                  />
                </div>

                <div>
                  <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                  />
                </div>

                <div>
                  <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98400 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                  />
                </div>
              </div>

              {/* Ceremony Details / Vision */}
              <div>
                <label className="block font-meta text-[11px] uppercase tracking-[0.14em] text-[#7a580f] font-bold mb-1">
                  Ceremonial Details & Specific Rites to Highlight
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding your venue (mandapam or heritage home), ancestral traditions, or any special moments you cherish..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f6f3ed] border border-[#c59b4e]/50 rounded-[3px] py-2 px-3 text-sm text-[#1c1c18] focus:outline-hidden focus:border-[#8b1e28]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8b1e28] hover:bg-[#6b0214] text-[#fcf9f3] text-xs uppercase tracking-[0.16em] font-semibold py-3.5 px-6 rounded-[4px] border border-[#c59b4e] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-[#ffd07e]" />
                  <span>{isSubmitting ? 'Verifying Calendar...' : 'Submit Ceremonial Inquiry'}</span>
                </button>
              </div>

            </form>
          )}

          {/* Past Inquiries Quick Status (Local storage) */}
          {submittedInquiries.length > 0 && !isSuccess && (
            <div className="mt-8 pt-6 border-t border-[#c59b4e]/20">
              <h4 className="font-meta text-[10px] uppercase tracking-[0.16em] text-[#7a580f] font-bold mb-2">
                Your Previous Inquiries on this Device:
              </h4>
              <div className="space-y-2">
                {submittedInquiries.slice(0, 2).map((item, i) => (
                  <div key={i} className="p-2.5 bg-[#f6f3ed] rounded-[2px] border border-[#c59b4e]/20 text-xs font-meta flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#8b1e28]">{item.occasionType.split('(')[0]}</span>
                      <span className="text-[#574141] text-[10px] block">{item.eventCity} · {item.submittedAt}</span>
                    </div>
                    <span className="text-[#7a580f] font-semibold text-[10px] uppercase tracking-wider bg-[#fcf9f3] px-2 py-0.5 rounded-[2px] border border-[#c59b4e]/30">
                      In Review
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Note */}
        <div className="p-4 bg-[#f0eee8] border-t border-[#c59b4e]/30 text-center text-xs font-editorial text-[#574141]">
          <span>Madhan accepts a strictly limited number of wedding monographs each season to preserve artisanal attention.</span>
        </div>

      </div>

    </div>
  );
};

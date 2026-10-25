/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type OccasionCategory =
  | 'all'
  | 'weddings'
  | 'oonjal-sangeeth'
  | 'seemantham'
  | 'upanayanam'
  | 'milestones';

export interface CameraExif {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutter: string;
  filmProfile: string;
}

export interface CeremonyStory {
  id: string;
  title: string;
  tamilTitle?: string;
  category: OccasionCategory;
  isWeddingMajor: boolean;
  featuredLead?: boolean;
  coupleOrSubject: string;
  location: string;
  venueType: string;
  year: string;
  imageUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  narrative: string;
  culturalNote: string;
  sacredVerse?: string;
  exif: CameraExif;
  tags: string[];
}

export interface CeremonyMilestone {
  step: number;
  romanNumeral: string;
  name: string;
  tamilName: string;
  traditionalTiming: string;
  spiritualMeaning: string;
  sacredMantra: string;
  mantraTranslation: string;
  symbolism: string[];
  imageUrl: string;
}

export interface TraditionalService {
  id: string;
  title: string;
  tamilTitle: string;
  description: string;
  tagline: string;
  isMajor: boolean;
  coverImage: string;
  occasionsCovered: string[];
  deliverables: string[];
}

export interface InquiryFormData {
  fullName: string;
  partnerOrFamilyName: string;
  email: string;
  phone: string;
  occasionType: string;
  eventDate: string;
  eventCity: string;
  venueDetails: string;
  estimatedGuests: string;
  message: string;
  preferredFilmStyle: string;
}

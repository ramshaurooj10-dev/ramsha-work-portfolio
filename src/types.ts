export interface DubbingProject {
  id: string;
  title: string;
  category: string;
  language: 'Urdu' | 'English';
  type: string;
  description: string;
  driveLink: string;
  isFeatured?: boolean;
}

export interface VoiceDemo {
  id: string;
  title: string;
  category: string;
  language: string;
  projectType: string;
  description: string;
  driveLink: string;
  buttonText: 'Listen to Demo' | 'Watch Demo';
  isFeatured?: boolean;
  mediaType: 'voice' | 'video' | 'ivr' | 'ad' | 'international';
  accent?: string;
  thumbnail?: string;
  fileName?: string;
  audioUrl?: string;
  isPoetryStyle?: boolean;
}

export interface AiContentProject {
  id: string;
  title: string;
  category: string;
  secondaryCategory?: string;
  description: string;
  driveLink: string;
  videoType: string;
  isFeatured?: boolean;
  thumbnail?: string;
  videoUrl?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: string[];
  description: string;
}

export interface ClientOrg {
  name: string;
  region: string;
  type: string;
  description?: string;
}

export interface CountryProject {
  country: string;
  flag: string;
  regionName: string;
  projectCount: string;
  highlights: string[];
  coordinates: { x: number; y: number };
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  role: string;
  rating: number;
  isPlaceholder?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceType: string;
  languageRequired: string;
  projectDetails: string;
  estimatedBudget: string;
}

export type ProjectCategory = 'all' | 'app' | 'landing' | 'interactive';

export interface Project {
  id: string;
  title: string;
  category: 'app' | 'landing' | 'interactive';
  collab?: string;
  role?: string;
  description: string;
  skills: string[];
  url: string;
  githubUrl?: string;
  img: string;
  alt: string;
  featured?: boolean;
}

export type CertificatePlatform = 'udemy' | 'codepolitan' | 'kompetisi' | 'penghargaan';

export interface Certificate {
  id: string;
  title: string;
  platform: CertificatePlatform;
  platformName: string;
  issuer: string;
  img: string;
  alt: string;
  skills: string[];
  desc: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  icon: string; // path to svg in /icons/tech/
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  bio: string;
  availability: string;
  location: string;
  email: string;
  avatar: string;
  illust: string;
  resumeUrl?: string;
  socials: SocialLink[];
}

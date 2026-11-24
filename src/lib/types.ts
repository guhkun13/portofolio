export type SocialIcon = "github" | "linkedin" | "x";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
}

export interface WorkEntry {
  company: string;
  link?: string;
  badges: string[];
  title: string;
  start: string;
  end: string | null;
  description: string;
  highlights?: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  start?: string;
  end?: string | null;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  period?: string;
  techStack: string[];
  description: string;
  link?: string;
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink?: string;
  about: string;
  summary: string;
  siteUrl: string;
  personalWebsiteUrl?: string;
  resumePdfUrl?: string;
  contact: {
    email: string;
    tel: string;
    social: SocialLink[];
  };
  education: EducationEntry[];
  languages: string[];
  work: WorkEntry[];
  skills: SkillGroup[];
  projects: Project[];
}

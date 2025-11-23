export interface Portfolio {
  profile: Profile;
  contact: ContactItem[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  languages: string[];
  leadership: Leadership;
  footer: Footer;
}

export interface Profile {
  name: string;
  role: string;
  image: string;
  summary: string;
  location?: string;
  tagline?: string;
}

export interface ContactItem {
  type: string;
  label: string;
  link: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  primary?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  role: string;
  stack: string[];
  context: string;
  problem: string;
  approach: string;
  result: string;
  featured?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  date: string;
}

export interface Leadership {
  approach: string[];
  codeQuality: string[];
  communication: string[];
}

export interface Footer {
  text: string;
  openTo?: string;
}

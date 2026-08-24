export interface EducationInfo {
  school: string;
  degree: string;
  gpa: string;
  date: string;
  courses: string;
}

export interface ExperienceInfo {
  company: string;
  role: string;
  location?: string;
  date: string;
  desc: string[];
}

export interface ProjectInfo {
  title: string;
  role: string;
  date: string;
  desc: string[];
}

export interface PublicationInfo {
  authors: string;
  title: string;
  journal: string;
  year: string;
  link?: string;
  rank?: string;
}

export interface PersonalInfo {
  name: string;
  enName: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  researchgate: string;
  about: string;
}

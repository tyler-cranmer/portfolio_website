// API Types

export type TechData = {
  id: number;
  name: string;
  icon: string;
};

export type ExperienceData = {
  id: number;
  company: string;
  title: string;
  duration: string;
  location: string;
  website: string;
  slug: string;
  logo: string;
  alt: string;
  bullets: BulletData[];
};

export type BulletData = {
  bullet: string;
};

export type ProjectData = {
  id: number;
  image: string;
  title: string;
  description: string;
  tech: ProjectTech;
};

export type ProjectTech = {
  id: number;
  name: string;
};

export interface FormData {
  success: boolean;
  message: string;
};

// API Types

import { StyledTags } from "@emotion/styled";

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
  name: string;
  description: string;
  link: string;
  image: string;
  tags: Tags[];
  technologies: ProjectTech[];
};

export interface Tags {
  name: string
}

export type ProjectTech = {
  name: string;
};

export interface FormData {
  success: boolean;
  message: string;
};

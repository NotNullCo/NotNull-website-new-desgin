
import React from 'react';

export interface Service {
  id: number;
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  icon: React.ReactNode;
  details_ar: string;
  details_en: string;
  features_ar: string[];
  features_en: string[];
  whyUs_ar: string;
  whyUs_en: string;
}

export interface Project {
  id: number;
  title_ar: string;
  title_en: string;
  category_ar: string;
  category_en: string;
  imageUrls: string[];
  description_ar: string;
  description_en: string;
  details_ar: string;
  details_en: string;
  technologies: string[];
  features_ar: string[];
  features_en: string[];
}

export interface Project {
  id: string;
  name: string;
  category: 'Fintech' | 'EdTech' | 'Marketplace' | 'B2B SaaS' | 'AI Systems' | 'HealthTech';
  tagline: string;
  description: string;
  deliverable: string;
  timeline: string;
  techTags: string[];
  features: string[];
  metrics: string[];
  accentColor: string;
  theme: 'fintech' | 'edtech' | 'marketplace' | 'saas' | 'ai' | 'health';
  year?: string;
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
  stats?: {
    label: string;
    value: string;
    change?: string;
  }[];
  lighthouseScore?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  architecture?: {
    frontend: string;
    backend: string;
    database: string;
    caching: string;
  };
}

export interface ProcessStep {
  number: string;
  days: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  milestones: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  type: string;
  priceInr: string;
  priceUsd: string;
  originalPriceInr?: string;
  originalPriceUsd?: string;
  period: string;
  description: string;
  popular?: boolean;
  timeline: string;
  features: string[];
  ctaText: string;
}

export interface ComboPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  setupFeeInr: string;
  setupFeeUsd: string;
  originalSetupFeeInr?: string;
  originalSetupFeeUsd?: string;
  retainerInr: string;
  retainerUsd: string;
  popular?: boolean;
  idealFor: string;
  websiteScope: string;
  socialScope: string;
  automationScope: string;
  features: string[];
  automations: string[];
  ctaText: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  eyebrow: string;
  tagline: string;
  badge?: string;
  description: string;
  features: {
    title: string;
    desc: string;
  }[];
  deliverables: string[];
  tooling: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Capability {
  id: string;
  name: string;
  badge: string;
  description: string;
  stack: string[];
}

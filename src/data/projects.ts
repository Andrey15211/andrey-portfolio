export type ProjectStatus = "planned" | "inProgress" | "completed";

export type ProjectAccent =
  | "cyan"
  | "violet"
  | "blue"
  | "amber"
  | "emerald"
  | "rose"
  | "indigo"
  | "sky";

export interface Project {
  id: string;
  slug: string;
  translationKey: string;
  index: string;
  stack: string[];
  status: ProjectStatus;
  accent: ProjectAccent;
  problem: "problem";
  solution: "solution";
  keyFeatures: "keyFeatures";
  demonstrates: "demonstrates";
  qualityChecklist: readonly QualityChecklistItem[];
  links: {
    github: string;
    live: string;
  };
  featured?: boolean;
}

export type QualityChecklistItem =
  | "localization"
  | "responsive"
  | "readme"
  | "vercel"
  | "ci"
  | "build";

const caseStudyFields = {
  problem: "problem",
  solution: "solution",
  keyFeatures: "keyFeatures",
  demonstrates: "demonstrates",
  qualityChecklist: [
    "localization",
    "responsive",
    "readme",
    "vercel",
    "ci",
    "build",
  ],
} as const;

export const projects: Project[] = [
  {
    id: "buildmarket-store",
    slug: "buildmarket-store",
    translationKey: "buildMarket",
    index: "01",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    status: "completed",
    accent: "cyan",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/buildmarket-store",
      live: "https://buildmarket-store.vercel.app",
    },
  },
  {
    id: "price-tracker-dashboard",
    slug: "price-tracker-dashboard",
    translationKey: "priceTracker",
    index: "02",
    stack: ["React", "TypeScript", "Charts", "API"],
    status: "completed",
    accent: "violet",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/price-tracker-dashboard",
      live: "https://price-tracker-dashboard-one.vercel.app",
    },
  },
  {
    id: "bot-orders-crm",
    slug: "bot-orders-crm",
    translationKey: "botOrders",
    index: "03",
    stack: ["Next.js", "Supabase", "Telegram API", "PostgreSQL"],
    status: "completed",
    accent: "blue",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/bot-orders-crm",
      live: "https://bot-orders-crm.vercel.app",
    },
    featured: true,
  },
  {
    id: "sales-analytics-dashboard",
    slug: "sales-analytics-dashboard",
    translationKey: "salesAnalytics",
    index: "04",
    stack: ["React", "TypeScript", "Recharts", "Tailwind"],
    status: "completed",
    accent: "amber",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/sales-analytics-dashboard",
      live: "https://sales-analytics-dashboard-blush-sigma.vercel.app",
    },
    featured: true,
  },
  {
    id: "booking-service-app",
    slug: "booking-service-app",
    translationKey: "bookingService",
    index: "05",
    stack: ["Next.js", "Supabase", "Auth", "Vercel"],
    status: "completed",
    accent: "emerald",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/booking-service-app",
      live: "https://booking-service-app-lyart.vercel.app",
    },
    featured: true,
  },
  {
    id: "media-library-api-app",
    slug: "media-library-api-app",
    translationKey: "mediaLibrary",
    index: "06",
    stack: ["Nuxt 3", "Vue", "TypeScript", "REST API"],
    status: "completed",
    accent: "rose",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/media-library-api-app",
      live: "https://media-library-api-app.vercel.app",
    },
  },
  {
    id: "animated-saas-landing",
    slug: "animated-saas-landing",
    translationKey: "saasLanding",
    index: "07",
    stack: ["Next.js", "Motion", "Tailwind", "Vercel"],
    status: "completed",
    accent: "indigo",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/animated-saas-landing",
      live: "https://animated-saas-landing-tau.vercel.app",
    },
  },
  {
    id: "team-task-manager",
    slug: "team-task-manager",
    translationKey: "taskManager",
    index: "08",
    stack: ["React", "Node.js", "PostgreSQL", "Auth"],
    status: "completed",
    accent: "sky",
    ...caseStudyFields,
    links: {
      github: "https://github.com/Andrey15211/team-task-manager",
      live: "https://team-task-manager-gilt-eta.vercel.app",
    },
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

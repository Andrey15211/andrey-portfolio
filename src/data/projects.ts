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
  translationKey: string;
  index: string;
  stack: string[];
  status: ProjectStatus;
  accent: ProjectAccent;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "buildmarket-store",
    translationKey: "buildMarket",
    index: "01",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    status: "inProgress",
    accent: "cyan",
    githubUrl: "https://github.com/placeholder/buildmarket-store",
    liveUrl: "https://buildmarket-store.vercel.app",
    featured: true,
  },
  {
    id: "price-tracker-dashboard",
    translationKey: "priceTracker",
    index: "02",
    stack: ["React", "TypeScript", "Charts", "API"],
    status: "planned",
    accent: "violet",
    githubUrl: "https://github.com/placeholder/price-tracker-dashboard",
    liveUrl: "https://price-tracker-dashboard.vercel.app",
  },
  {
    id: "bot-orders-crm",
    translationKey: "botOrders",
    index: "03",
    stack: ["Next.js", "Supabase", "Telegram API", "PostgreSQL"],
    status: "inProgress",
    accent: "blue",
    githubUrl: "https://github.com/placeholder/bot-orders-crm",
    liveUrl: "https://bot-orders-crm.vercel.app",
  },
  {
    id: "sales-analytics-dashboard",
    translationKey: "salesAnalytics",
    index: "04",
    stack: ["React", "TypeScript", "Recharts", "Tailwind"],
    status: "completed",
    accent: "amber",
    githubUrl: "https://github.com/placeholder/sales-analytics-dashboard",
    liveUrl: "https://sales-analytics-dashboard.vercel.app",
    featured: true,
  },
  {
    id: "booking-service-app",
    translationKey: "bookingService",
    index: "05",
    stack: ["Next.js", "Supabase", "Auth", "Vercel"],
    status: "inProgress",
    accent: "emerald",
    githubUrl: "https://github.com/placeholder/booking-service-app",
    liveUrl: "https://booking-service-app.vercel.app",
  },
  {
    id: "media-library-api",
    translationKey: "mediaLibrary",
    index: "06",
    stack: ["Next.js", "API Routes", "TypeScript", "REST API"],
    status: "completed",
    accent: "rose",
    githubUrl: "https://github.com/placeholder/media-library-api",
    liveUrl: "https://media-library-api.vercel.app",
  },
  {
    id: "animated-saas-landing",
    translationKey: "saasLanding",
    index: "07",
    stack: ["Next.js", "Motion", "Tailwind", "Vercel"],
    status: "completed",
    accent: "indigo",
    githubUrl: "https://github.com/placeholder/animated-saas-landing",
    liveUrl: "https://animated-saas-landing.vercel.app",
  },
  {
    id: "team-task-manager",
    translationKey: "taskManager",
    index: "08",
    stack: ["React", "Node.js", "PostgreSQL", "Auth"],
    status: "planned",
    accent: "sky",
    githubUrl: "https://github.com/placeholder/team-task-manager",
    liveUrl: "https://team-task-manager.vercel.app",
    featured: true,
  },
];

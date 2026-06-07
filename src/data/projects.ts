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
    status: "completed",
    accent: "cyan",
    githubUrl: "https://github.com/Andrey15211/buildmarket-store",
    liveUrl: "https://buildmarket-store.vercel.app",
    featured: true,
  },
  {
    id: "price-tracker-dashboard",
    translationKey: "priceTracker",
    index: "02",
    stack: ["React", "TypeScript", "Charts", "API"],
    status: "completed",
    accent: "violet",
    githubUrl: "https://github.com/Andrey15211/price-tracker-dashboard",
    liveUrl: "https://price-tracker-dashboard-one.vercel.app",
  },
  {
    id: "bot-orders-crm",
    translationKey: "botOrders",
    index: "03",
    stack: ["Next.js", "Supabase", "Telegram API", "PostgreSQL"],
    status: "completed",
    accent: "blue",
    githubUrl: "https://github.com/Andrey15211/bot-orders-crm",
    liveUrl: "https://bot-orders-crm.vercel.app",
  },
  {
    id: "sales-analytics-dashboard",
    translationKey: "salesAnalytics",
    index: "04",
    stack: ["React", "TypeScript", "Recharts", "Tailwind"],
    status: "completed",
    accent: "amber",
    githubUrl: "https://github.com/Andrey15211/sales-analytics-dashboard",
    liveUrl: "https://sales-analytics-dashboard-blush-sigma.vercel.app",
    featured: true,
  },
  {
    id: "booking-service-app",
    translationKey: "bookingService",
    index: "05",
    stack: ["Next.js", "Supabase", "Auth", "Vercel"],
    status: "completed",
    accent: "emerald",
    githubUrl: "https://github.com/Andrey15211/booking-service-app",
    liveUrl: "https://booking-service-app-lyart.vercel.app",
  },
  {
    id: "media-library-api-app",
    translationKey: "mediaLibrary",
    index: "06",
    stack: ["Nuxt 3", "Vue", "TypeScript", "REST API"],
    status: "completed",
    accent: "rose",
    githubUrl: "https://github.com/Andrey15211/media-library-api-app",
    liveUrl: "https://media-library-api-app.vercel.app",
  },
  {
    id: "animated-saas-landing",
    translationKey: "saasLanding",
    index: "07",
    stack: ["Next.js", "Motion", "Tailwind", "Vercel"],
    status: "completed",
    accent: "indigo",
    githubUrl: "https://github.com/Andrey15211/animated-saas-landing",
    liveUrl: "https://animated-saas-landing-tau.vercel.app",
  },
  {
    id: "team-task-manager",
    translationKey: "taskManager",
    index: "08",
    stack: ["React", "Node.js", "PostgreSQL", "Auth"],
    status: "completed",
    accent: "sky",
    githubUrl: "https://github.com/Andrey15211/team-task-manager",
    liveUrl: "https://team-task-manager-gilt-eta.vercel.app",
    featured: true,
  },
];

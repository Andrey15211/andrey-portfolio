export interface SkillGroup {
  key: string;
  number: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    number: "01",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    number: "02",
    skills: ["Node.js", "API Routes", "Vercel Functions"],
  },
  {
    key: "database",
    number: "03",
    skills: ["Supabase", "PostgreSQL"],
  },
  {
    key: "tools",
    number: "04",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    key: "aiWorkflow",
    number: "05",
    skills: ["ChatGPT", "Codex", "Claude", "Cursor / Antigravity"],
  },
];

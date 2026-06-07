import type { Project, ProjectStatus } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";

const statusClass: Record<ProjectStatus, string> = {
  planned: "status-planned",
  inProgress: "status-progress",
  completed: "status-completed",
};

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const common = useTranslations("common");
  const title = t(`items.${project.translationKey}.title`);
  const description = t(`items.${project.translationKey}.description`);

  return (
    <article
      className={`project-card accent-${project.accent} ${
        project.featured ? "project-featured" : ""
      }`}
    >
      <div className="project-card-top">
        <span className="project-index">{project.index}</span>
        <span className={`project-status ${statusClass[project.status]}`}>
          {t(`status.${project.status}`)}
        </span>
      </div>

      <div className="project-visual" aria-hidden="true">
        <div className="visual-orbit" />
        <span>{title.slice(0, 2).toUpperCase()}</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="stack-list" aria-label={t("stackLabel", { title })}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t("githubLabel", { title })}
        >
          <Github size={17} aria-hidden="true" />
          {common("github")}
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t("demoLabel", { title })}
        >
          {common("liveDemo")}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

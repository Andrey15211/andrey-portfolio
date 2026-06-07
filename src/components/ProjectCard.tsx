import type { Project, ProjectStatus } from "@/data/projects";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const statusClass: Record<ProjectStatus, string> = {
  planned: "status-planned",
  inProgress: "status-progress",
  completed: "status-completed",
};

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const common = useTranslations("common");
  const title = t(`items.${project.translationKey}.title`);
  const description = t(
    `items.${project.translationKey}.${project.problem}`,
  );
  const features = t.raw(
    `items.${project.translationKey}.${project.keyFeatures}`,
  ) as string[];

  return (
    <article
      id={project.id}
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
        <dl className="case-study-details">
          <div>
            <dt>{t("labels.challenge")}</dt>
            <dd>{description}</dd>
          </div>
          <div>
            <dt>{t("labels.features")}</dt>
            <dd>{features.join(" · ")}</dd>
          </div>
          <div>
            <dt>{t("labels.demonstrates")}</dt>
            <dd>
              {t(`items.${project.translationKey}.${project.demonstrates}`)}
            </dd>
          </div>
        </dl>
        <ul className="stack-list" aria-label={t("stackLabel", { title })}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <Link href={`/projects/${project.slug}`}>
          {t("caseStudy")}
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label={t("githubLabel", { title })}
        >
          <Github size={17} aria-hidden="true" />
          {common("github")}
        </a>
        <a
          href={project.links.live}
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

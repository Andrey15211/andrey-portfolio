import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjectsSection() {
  const t = useTranslations("featuredProjects");
  const projectTranslations = useTranslations("projects");
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="page-section featured-projects-section">
      <div className="site-container">
        <SectionHeading
          number="03"
          title={t("section")}
          description={t("description")}
        />
        <div className="featured-projects-grid">
          {featuredProjects.map((project) => {
            const title = projectTranslations(
              `items.${project.translationKey}.title`,
            );

            return (
              <article key={project.id} className={`featured-summary accent-${project.accent}`}>
                <span>{project.index}</span>
                <h3>{title}</h3>
                <p>{t(`reasons.${project.translationKey}`)}</p>
                <Link href={`/projects/${project.slug}`}>
                  {t("viewCase")}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="page-section projects-section">
      <div className="site-container">
        <SectionHeading
          number="04"
          title={t("section")}
          description={t("description")}
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

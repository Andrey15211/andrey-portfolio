import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProjectBySlug, projects } from "@/data/projects";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!hasLocale(routing.locales, locale) || !project) {
    notFound();
  }

  const projectsT = await getTranslations({ locale, namespace: "projects" });
  const caseStudyT = await getTranslations({ locale, namespace: "caseStudy" });
  const title = projectsT(`items.${project.translationKey}.title`);
  const description = projectsT(
    `items.${project.translationKey}.${project.problem}`,
  );
  const path = `/${locale}/projects/${project.slug}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: caseStudyT("metadataTitle", { title }),
    description,
    alternates: {
      canonical: path,
      languages: {
        ru: `/ru/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`,
        "x-default": `/ru/projects/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: path,
      title: caseStudyT("metadataTitle", { title }),
      description,
      siteName: siteConfig.name,
      locale: locale === "ru" ? "ru_RU" : "en_US",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!hasLocale(routing.locales, locale) || !project) {
    notFound();
  }

  setRequestLocale(locale);

  const projectsT = await getTranslations({ locale, namespace: "projects" });
  const commonT = await getTranslations({ locale, namespace: "common" });
  const caseStudyT = await getTranslations({
    locale,
    namespace: "caseStudy",
  });
  const title = projectsT(`items.${project.translationKey}.title`);
  const problem = projectsT(
    `items.${project.translationKey}.${project.problem}`,
  );
  const solution = projectsT(
    `items.${project.translationKey}.${project.solution}`,
  );
  const keyFeatures = projectsT.raw(
    `items.${project.translationKey}.${project.keyFeatures}`,
  ) as string[];
  const demonstrates = projectsT(
    `items.${project.translationKey}.${project.demonstrates}`,
  );

  return (
    <>
      <Header />
      <main id="top" className={`case-study-page accent-${project.accent}`}>
        <section className="case-study-hero">
          <div className="site-container">
            <Link className="case-study-back" href="/#projects">
              <ArrowLeft size={17} aria-hidden="true" />
              {caseStudyT("backToProjects")}
            </Link>

            <div className="case-study-hero-grid">
              <div>
                <p className="case-study-eyebrow">
                  {project.index} / {caseStudyT("eyebrow")}
                </p>
                <h1>{title}</h1>
                <p className="case-study-summary">{problem}</p>
              </div>

              <div className="case-study-hero-meta">
                <span className="project-status status-completed">
                  {projectsT("status.completed")}
                </span>
                <div className="case-study-actions">
                  <a
                    className="button button-primary"
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={caseStudyT("demoLabel", { title })}
                  >
                    {commonT("liveDemo")}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <a
                    className="button button-secondary"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={caseStudyT("githubLabel", { title })}
                  >
                    <Github size={17} aria-hidden="true" />
                    {commonT("github")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="site-container case-study-content">
          <section className="case-study-section">
            <h2>{caseStudyT("sections.problem")}</h2>
            <p>{problem}</p>
          </section>

          <section className="case-study-section">
            <h2>{caseStudyT("sections.solution")}</h2>
            <p>{solution}</p>
          </section>

          <section className="case-study-section">
            <h2>{caseStudyT("sections.keyFeatures")}</h2>
            <ul className="case-study-list">
              {keyFeatures.map((feature) => (
                <li key={feature}>
                  <Check size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="case-study-section">
            <h2>{caseStudyT("sections.techStack")}</h2>
            <ul className="stack-list">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>

          <section className="case-study-section">
            <h2>{caseStudyT("sections.demonstrates")}</h2>
            <p>{demonstrates}</p>
          </section>

          <section className="case-study-section">
            <h2>{caseStudyT("sections.quality")}</h2>
            <ul className="case-study-list quality-list">
              {project.qualityChecklist.map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {caseStudyT(`qualityItems.${item}`)}
                </li>
              ))}
            </ul>
          </section>

          <section className="case-study-section case-study-links-section">
            <h2>{caseStudyT("sections.links")}</h2>
            <div className="case-study-link-list">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                {commonT("liveDemo")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                {commonT("github")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

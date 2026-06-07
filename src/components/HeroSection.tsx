import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");
  const common = useTranslations("common");

  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-cyan" aria-hidden="true" />
      <div className="hero-glow hero-glow-violet" aria-hidden="true" />
      <div className="site-container hero-grid">
        <div className="hero-main">
          <p className="hero-role">{t("role")}</p>
          <h1 id="hero-title">
            {t("firstName")}
            <br />
            <span>{t("lastName")}</span>
          </h1>
        </div>

        <div className="hero-aside">
          <div className="availability">
            <span className="availability-dot" />
            {t("availability")}
          </div>
          <p className="hero-copy">
            {t("description")}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t("viewProjects")}
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Andrey15211"
              target="_blank"
              rel="noreferrer"
              aria-label={t("githubLabel")}
            >
              <Github size={18} aria-hidden="true" />
              {common("github")}
            </a>
            <a className="text-link" href="#contact">
              {t("contact")}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-footnote">
          <span>{t("portfolio")}</span>
          <span>{t("location")}</span>
        </div>
      </div>
    </section>
  );
}

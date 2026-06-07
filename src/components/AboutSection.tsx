import { SectionHeading } from "./SectionHeading";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");
  const principles = [
    {
      label: t("principles.practicalLabel"),
      text: t("principles.practicalText"),
    },
    {
      label: t("principles.accountableLabel"),
      text: t("principles.accountableText"),
    },
  ];

  return (
    <section id="about" className="page-section" aria-labelledby="about-title">
      <div className="site-container">
        <SectionHeading number="01" title={t("section")} />
        <div className="about-layout">
          <h2 id="about-title" className="about-statement">
            {t("statementMain")}
            <span>{t("statementAccent")}</span>
          </h2>
          <div className="about-copy">
            <p>
              {t("paragraphOne")}
            </p>
            <p>
              {t("paragraphTwo")}
            </p>
          </div>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article key={principle.label} className="principle">
              <span>{principle.label}</span>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

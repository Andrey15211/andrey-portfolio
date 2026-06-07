import { skillGroups } from "@/data/skills";
import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="page-section skills-section">
      <div className="site-container">
        <SectionHeading
          number="02"
          title={t("section")}
          description={t("description")}
        />
        <div className="skills-list">
          {skillGroups.map((group) => {
            const title = t(`groups.${group.key}`);
            return (
            <article className="skill-row" key={group.key}>
              <span className="skill-number">{group.number}</span>
              <h3>{title}</h3>
              <ul aria-label={t("groupLabel", { group: title })}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

export function EmployersSection() {
  const t = useTranslations("employers");
  const roles = t.raw("roles") as string[];

  return (
    <section className="page-section employers-section">
      <div className="site-container employers-layout">
        <SectionHeading
          number="07"
          title={t("section")}
          description={t("description")}
        />
        <div className="employer-positioning">
          <p>{t("positioning")}</p>
          <ul>
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

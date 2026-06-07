import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

export function DevelopmentStandardsSection() {
  const t = useTranslations("standards");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="page-section standards-section">
      <div className="site-container">
        <SectionHeading
          number="06"
          title={t("section")}
          description={t("description")}
        />
        <div className="standards-grid">
          {items.map((item, index) => (
            <article key={item.title} className="standard-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

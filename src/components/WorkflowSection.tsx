import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

export function WorkflowSection() {
  const t = useTranslations("workflow");
  const steps = [
    { number: "01", label: t("steps.idea") },
    { number: "02", label: t("steps.design") },
    { number: "03", label: t("steps.development") },
    { number: "04", label: t("steps.testing") },
    { number: "05", label: t("steps.deploy") },
    { number: "06", label: t("steps.documentation") },
  ];

  return (
    <section id="workflow" className="page-section workflow-section">
      <div className="site-container">
        <SectionHeading
          number="04"
          title={t("section")}
          description={t("description")}
        />
        <ol className="workflow-list">
          {steps.map((step, index) => (
            <li key={step.label}>
              <span>{step.number}</span>
              <strong>{step.label}</strong>
              {index < steps.length - 1 ? (
                <ArrowRight className="workflow-arrow" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

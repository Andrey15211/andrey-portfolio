import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");
  const contacts = [
    {
      label: t("github"),
      value: t("githubValue"),
      href: "https://github.com/Andrey15211",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="site-container contact-layout">
        <div>
          <span className="section-number" aria-hidden="true">
            /08
          </span>
          <h2 id="contact-title">
            {t("titleMain")}
            <span>{t("titleAccent")}</span>
          </h2>
          <p>
            {t("description")}
          </p>
        </div>
        <div className="contact-links">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon size={20} aria-hidden="true" />
              <span>
                <small>{label}</small>
                {value}
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

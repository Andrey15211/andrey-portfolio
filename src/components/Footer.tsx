import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        <p>{t("note")}</p>
        <a href="#top">{t("backToTop")}</a>
      </div>
    </footer>
  );
}

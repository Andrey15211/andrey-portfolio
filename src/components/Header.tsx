"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("header");
  const language = useTranslations("language");
  const navigation = [
    { label: t("about"), href: "#about" },
    { label: t("skills"), href: "#skills" },
    { label: t("projects"), href: "#projects" },
    { label: t("workflow"), href: "#workflow" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label={t("homeLabel")}>
          <span className="brand-mark">AB</span>
          <span className="brand-name">Andrey Badalin</span>
        </a>

        <nav className="desktop-nav" aria-label={t("primaryNavigation")}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label={language("label")}>
            {(["ru", "en"] as const).map((item) => (
              <Link
                key={item}
                href="/"
                locale={item}
                className={locale === item ? "is-active" : ""}
                aria-current={locale === item ? "page" : undefined}
              >
                {language(item)}
              </Link>
            ))}
          </div>
          <a className="header-contact" href="#contact">
            {t("letsTalk")}
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isOpen ? "is-open" : ""}`}
        aria-label={t("mobileNavigation")}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu}>
          {t("contact")}
        </a>
        <div className="mobile-language-switcher">
          {(["ru", "en"] as const).map((item) => (
            <Link
              key={item}
              href="/"
              locale={item}
              className={locale === item ? "is-active" : ""}
              onClick={closeMenu}
            >
              {language(item)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

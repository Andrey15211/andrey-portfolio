"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("header");
  const language = useTranslations("language");
  const isHomePage = pathname === "/";
  const navigation = [
    { label: t("about"), href: isHomePage ? "#about" : "/#about" },
    { label: t("skills"), href: isHomePage ? "#skills" : "/#skills" },
    { label: t("projects"), href: isHomePage ? "#projects" : "/#projects" },
    { label: t("workflow"), href: isHomePage ? "#workflow" : "/#workflow" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="brand" href="/" aria-label={t("homeLabel")}>
          <span className="brand-mark">AB</span>
          <span className="brand-name">Andrey Badalin</span>
        </Link>

        <nav className="desktop-nav" aria-label={t("primaryNavigation")}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher" aria-label={language("label")}>
            {(["ru", "en"] as const).map((item) => (
              <Link
                key={item}
                href={pathname}
                locale={item}
                className={locale === item ? "is-active" : ""}
                aria-current={locale === item ? "page" : undefined}
              >
                {language(item)}
              </Link>
            ))}
          </div>
          <Link className="header-contact" href={isHomePage ? "#contact" : "/#contact"}>
            {t("letsTalk")}
          </Link>
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
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link href={isHomePage ? "#contact" : "/#contact"} onClick={closeMenu}>
          {t("contact")}
        </Link>
        <div className="mobile-language-switcher">
          {(["ru", "en"] as const).map((item) => (
            <Link
              key={item}
              href={pathname}
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

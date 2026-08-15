"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "@/components/providers/TranslationProvider";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n";
import styles from "./Navbar.module.css";
import Image from "next/image";

const localeOptions: Array<{ code: Language; label: string }> = [
  { code: "ar", label: "العربية (AR)" },
  { code: "fr", label: "Français (FR)" },
  { code: "en", label: "English (EN)" },
];

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useTranslation();

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("home"), href: "/home" },
    { label: t("about"), href: "/about" },
    { label: t("devices"), href: "/devices" },
    { label: t("interests"), href: "/interests" },
    { label: t("social"), href: "/social" },
    { label: t("assistant"), href: "/assistant" },
  ];

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleLocaleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value as Language);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);
  };

  return (
    <nav className={styles.navbar} dir="ltr">
      <div className={styles.brand}>
  <Image
    src="/images/revex-logoo.png"
    alt="REVEX"
    width={120}
    height={40}
    priority
  />
</div>

      <div className={styles.links}>
        {navLinks.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${active ? styles.active : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className={styles.actions}>
        <select
          className={styles.localeSelect}
          value={language}
          onChange={handleLocaleChange}
          aria-label="Select language"
        >
          {localeOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          className={styles.iconButton}
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          aria-label="Toggle theme"
        >
          {mounted
            ? resolvedTheme === "light"
              ? "🌙"
              : "☀️"
            : "🌙"}
        </button>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${
                  active ? styles.mobileActive : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
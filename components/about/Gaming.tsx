"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Gaming() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.gaming.title")}</h2>

      <p>{t("about.gaming.interest")}</p>

      <p>{t("about.gaming.challenge")}</p>

      <p>{t("about.gaming.games")}</p>

      <p>{t("about.gaming.freeFire")}</p>
    </section>
  );
}
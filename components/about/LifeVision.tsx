"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function LifeVision() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.lifeVision.title")}</h2>

      <p>{t("about.lifeVision.goal")}</p>

      <p>{t("about.lifeVision.happiness")}</p>
    </section>
  );
}
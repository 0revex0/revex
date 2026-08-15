"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function TechJourney() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.techJourney.title")}</h2>

      <p>{t("about.techJourney.childhood")}</p>

      <p>{t("about.techJourney.binary")}</p>

      <p>{t("about.techJourney.programming")}</p>
    </section>
  );
}
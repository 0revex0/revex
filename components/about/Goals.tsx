"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Goals() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.goals.title")}</h2>

      <p>{t("about.goals.learning")}</p>

      <p>{t("about.goals.continuousLearning")}</p>

      <p>{t("about.goals.revex")}</p>
    </section>
  );
}
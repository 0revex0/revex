"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Story() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.story.title")}</h2>

      <p>{t("about.story.birth")}</p>

      <p>{t("about.story.languages")}</p>

      <p>{t("about.story.school")}</p>
    </section>
  );
}
"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function ShortBio() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.shortBio.title")}</h2>

      <p>
        {t("about.shortBio.text")}
      </p>
    </section>
  );
}
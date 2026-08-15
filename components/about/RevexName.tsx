"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function RevexName() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.revexName.title")}</h2>

      <p>{t("about.revexName.totem")}</p>

      <p>{t("about.revexName.vex")}</p>

      <p>{t("about.revexName.revex")}</p>

      <p>{t("about.revexName.r")}</p>
    </section>
  );
}
"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function DevicesHero() {
  const { t } = useTranslation();

  return (
    <section className="devicesHero">
      <h1>{t("devices.hero.title")}</h1>

      <p>
        {t("devices.hero.description")}
      </p>
    </section>
  );
}
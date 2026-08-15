"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <section className="introduction">
      <h2>
       {t("home.introduction.exploreSections")} <span> REVEX  </span>
      </h2>

      <p>
        {t("home.introduction.description")}
      </p>

      <p>{t("home.introduction.chooseSection")}</p>
    </section>
  );
}
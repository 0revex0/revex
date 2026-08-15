"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="aboutHero">
      <div className="aboutHeroImage">
        <img
          src="/images/profile.jpg"
          alt="Yassin Al Farsi"
        />
      </div>

      <div className="aboutHeroContent">
        <h1>{t("about.hero.title")}</h1>

        <p>
          {t("about.hero.description")}
        </p>
      </div>
    </section>
  );
}
"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.skills.title")}</h2>

      <div className="skillsGrid">
        <div className="skillCard">
          {t("about.skills.webDevelopment")}
        </div>

        <div className="skillCard">
          {t("about.skills.ai")}
        </div>

        <div className="skillCard">
          {t("about.skills.problemSolving")}
        </div>

        <div className="skillCard">
          {t("about.skills.logicalThinking")}
        </div>

        <div className="skillCard">
          {t("about.skills.selfLearning")}
        </div>

        <div className="skillCard">
          {t("about.skills.electronics")}
        </div>
      </div>
    </section>
  );
}
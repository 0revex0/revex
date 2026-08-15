"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Schools() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.schools.title")}</h2>

      <div className="schoolGrid">
        <div className="schoolCard">
          <h3>{t("about.schools.highSchool")}</h3>

          <p>{t("about.schools.highSchoolName")}</p>

          <a
            href="https://maps.app.goo.gl/YMEb1kyzspxFQvMx8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("about.schools.map")}
          </a>
        </div>

        <div className="schoolCard">
          <h3>{t("about.schools.middleSchool")}</h3>

          <p>{t("about.schools.middleSchoolName")}</p>

          <a
            href="https://maps.app.goo.gl/P5hhYeeqrfg85CH56"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("about.schools.map")}
          </a>
        </div>

        <div className="schoolCard">
          <h3>{t("about.schools.primarySchool")}</h3>

          <p>{t("about.schools.primarySchoolName")}</p>

          <a
            href="https://maps.app.goo.gl/Nh4db3i83yUtfQQP7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("about.schools.map")}
          </a>
        </div>
      </div>
    </section>
  );
}
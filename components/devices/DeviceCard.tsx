"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

type DeviceCardProps = {
  title: string;
  image: string;
  specs: string[];
  usage: string[];
  experience: string;
};

export default function DeviceCard({
  title,
  image,
  specs,
  usage,
  experience,
}: DeviceCardProps) {
  const { t } = useTranslation();

  return (
    <section className="deviceSection">

      <img
        src={image}
        alt={title}
        className="deviceImage"
      />

      <h2>{title}</h2>

      <div className="deviceGrid">

        <div className="deviceBox">
          <h3>{t("devices.deviceCard.specs")}</h3>

          <ul>
            {specs.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div className="deviceBox">
          <h3>{t("devices.deviceCard.usage")}</h3>

          <ul>
            {usage.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div className="deviceBox">
          <h3>{t("devices.deviceCard.experience")}</h3>

          <p>{experience}</p>

        </div>

      </div>

    </section>
  );
}
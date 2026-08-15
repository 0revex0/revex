"use client";

import Image from "next/image";
import { useTranslation } from "@/components/providers/TranslationProvider";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">

      <div className="hero-image">
        <Image
          src="/images/profile.jpg"
          alt="Yassin Al Farsi"
          width={900}
          height={900}
          priority
        />
      </div>

      <div className="hero-content">

        <h1>{t("home.hero.name")}</h1>

        <h2>{t("home.hero.brand")}</h2>

      </div>

    </section>
  );
}
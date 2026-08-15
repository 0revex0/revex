"use client";

import Link from "next/link";
import { useTranslation } from "@/components/providers/TranslationProvider";

const cards = [
  {
    key: "about",
    href: "/about",
  },
  {
    key: "devices",
    href: "/devices",
  },
  {
    key: "interests",
    href: "/interests",
  },
  {
    key: "social",
    href: "/social",
  },
  {
    key: "assistant",
    href: "/assistant",
  },
];

export default function SectionCards() {
  const { t } = useTranslation();

  return (
    <section className="cards">

      {cards.map((card) => (
        <article key={card.href} className="card">

          <h3>{t(`home.sectionCards.${card.key}.title`)}</h3>

          <p>{t(`home.sectionCards.${card.key}.description`)}</p>

          <Link href={card.href} className="cardButton">
            {t("home.sectionCards.enter")}
          </Link>

        </article>
      ))}

    </section>
  );
}
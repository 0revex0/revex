"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

export default function InterestsPage() {
  const { t } = useTranslation();

  return (
    <main className="interestsPage" dir="rtl">
      <section className="interestsHero">
        <h1>{t("interests.hero.title")}</h1>

        <p>{t("interests.hero.description")}</p>
      </section>

      <section className="interestsSections">

        {/* 🎵 الاستماع */}
        <section className="interestSection">
          <h2>{t("interests.listening.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.listening.definitionTitle")}</h3>

              <p>{t("interests.listening.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.listening.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.listening.example1")}</li>
                <li>{t("interests.listening.example2")}</li>
                <li>{t("interests.listening.example3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🎮 الألعاب */}
        <section className="interestSection">
          <h2>{t("interests.games.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.games.definitionTitle")}</h3>

              <p>{t("interests.games.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.games.examplesTitle")}</h3>

              <ul>
                <li>Minecraft</li>
                <li>Free Fire</li>
                <li>Roblox</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 📺 الأنمي */}
        <section className="interestSection">
          <h2>{t("interests.anime.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.anime.definitionTitle")}</h3>

              <p>{t("interests.anime.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.anime.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.anime.example1")}</li>
                <li>{t("interests.anime.example2")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 📖 المانغا */}
        <section className="interestSection">
          <h2>{t("interests.manga.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.manga.definitionTitle")}</h3>

              <p>{t("interests.manga.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.manga.examplesTitle")}</h3>

              <ul>
                <li>Above Myriads.</li>

                <li>{t("interests.manga.example2")}</li>

                <li>
                  <p>{t("interests.manga.channelsTitle")}</p>

                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/@mrmanhwa2023"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MrManhwa — مستر مانهوا
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/@_bta3manga"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        بتاع مانجا — bta3manga
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🍝 الطعام */}
        <section className="interestSection">
          <h2>{t("interests.food.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.food.definitionTitle")}</h3>

              <p>{t("interests.food.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.food.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.food.example1")}</li>
                <li>{t("interests.food.example2")}</li>
                <li>{t("interests.food.example3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🎨 الألوان */}
        <section className="interestSection">
          <h2>{t("interests.colors.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.colors.definitionTitle")}</h3>

              <p>{t("interests.colors.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.colors.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.colors.example1")}</li>
                <li>{t("interests.colors.example2")}</li>
                <li>{t("interests.colors.example3")}</li>
                <li>{t("interests.colors.example4")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 💻 التقنية */}
        <section className="interestSection">
          <h2>{t("interests.technology.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.technology.definitionTitle")}</h3>

              <p>{t("interests.technology.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.technology.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.technology.example1")}</li>
                <li>{t("interests.technology.example2")}</li>
                <li>{t("interests.technology.example3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🧠 الذكاء الاصطناعي */}
        <section className="interestSection">
          <h2>{t("interests.ai.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.ai.definitionTitle")}</h3>

              <p>{t("interests.ai.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.ai.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.ai.example1")}</li>
                <li>{t("interests.ai.example2")}</li>
                <li>{t("interests.ai.example3")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 🎯 الهدف */}
        <section className="interestSection">
          <h2>{t("interests.goal.title")}</h2>

          <div className="interestCards">
            <div className="interestCard definitionCard">
              <h3>{t("interests.goal.definitionTitle")}</h3>

              <p>{t("interests.goal.definition")}</p>
            </div>

            <div className="interestCard examplesCard">
              <h3>{t("interests.goal.examplesTitle")}</h3>

              <ul>
                <li>{t("interests.goal.example1")}</li>
                <li>{t("interests.goal.example2")}</li>
                <li>{t("interests.goal.example3")}</li>
              </ul>
            </div>
          </div>
        </section>

      </section>
    </main>
  );
}
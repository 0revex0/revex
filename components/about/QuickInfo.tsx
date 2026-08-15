"use client";

import { useTranslation } from "@/components/providers/TranslationProvider";

import {
  User,
  Badge,
  Cake,
  CalendarClock,
  GraduationCap,
  Languages,
  MapPinned,
  Calendar,
} from "lucide-react";

function getAge(t: (key: string) => string) {
  const birthDate = new Date(2011, 2, 7);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return (
    <span dir="rtl">
      {years} {t("about.quickInfo.ageYears")}
      <br />
      {months} {t("about.quickInfo.ageMonths")}
      <br />
      {days} {t("about.quickInfo.ageDays")}
    </span>
  );
}

function getNextBirthday(t: (key: string) => string) {
  const today = new Date();

  let nextBirthday = new Date(today.getFullYear(), 2, 7);

  if (today > nextBirthday) {
    nextBirthday = new Date(
      today.getFullYear() + 1,
      2,
      7
    );
  }

  const now = new Date(today);

  let months = 0;

  while (true) {
    const test = new Date(now);
    test.setMonth(test.getMonth() + 1);

    if (test <= nextBirthday) {
      months++;
      now.setMonth(now.getMonth() + 1);
    } else {
      break;
    }
  }

  const diff =
    nextBirthday.getTime() - now.getTime();

  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  if (months === 0 && days === 0) {
    return t("about.quickInfo.birthdayToday");
  }

  if (months > 0 && days > 0) {
    return `${t("about.quickInfo.remaining")} ${months} ${t(
      "about.quickInfo.months"
    )} ${t("about.quickInfo.and")} ${days} ${t(
      "about.quickInfo.days"
    )}`;
  }

  if (months > 0) {
    return `${t("about.quickInfo.remaining")} ${months} ${t(
      "about.quickInfo.months"
    )}`;
  }

  return `${t("about.quickInfo.remaining")} ${days} ${t(
    "about.quickInfo.days"
  )}`;
}

export default function QuickInfo() {
  const { t } = useTranslation();

  return (
    <section className="aboutSection">
      <h2>{t("about.quickInfo.title")}</h2>

      <div className="infoGrid">
        <div className="infoCard">
          <h3>
            <Badge size={20} /> {t("about.quickInfo.onlineName")}
          </h3>
          <p>
            <span dir="ltr">REVEX</span>
          </p>
        </div>

        <div className="infoCard">
          <h3>
            <User size={20} /> {t("about.quickInfo.fullName")}
          </h3>
          <p>{t("about.quickInfo.yassinName")}</p>
        </div>

        <div className="infoCard">
          <h3>
            <Calendar size={20} /> {t("about.quickInfo.birthDate")}
          </h3>
          <p>7/3/2011</p>
        </div>

        <div className="infoCard">
          <h3>
            <CalendarClock size={20} />{" "}
            {t("about.quickInfo.nextBirthday")}
          </h3>
          <p>{getNextBirthday(t)}</p>
        </div>

        <div className="infoCard">
          <h3>
            <Cake size={20} /> {t("about.quickInfo.age")}
          </h3>
          <p>{getAge(t)}</p>
        </div>

        <div className="infoCard">
          <h3>
            <MapPinned size={20} />{" "}
            {t("about.quickInfo.residence")}
          </h3>

          <p>
            {t("about.quickInfo.street")}
            <br />
            {t("about.quickInfo.neighborhood")}
            <br />
            {t("about.quickInfo.cityCountry")}
          </p>

          <a
            href="https://maps.app.goo.gl/j1CGct1UYXVz97CT7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("about.quickInfo.map")}
          </a>
        </div>

        <div className="infoCard">
          <h3>
            <Languages size={20} />{" "}
            {t("about.quickInfo.languages")}
          </h3>

          <p>
            {t("about.quickInfo.arabic")}
            <br />
            {t("about.quickInfo.english")}
          </p>
        </div>

        <div className="infoCard">
          <h3>
            <GraduationCap size={20} />{" "}
            {t("about.quickInfo.education")}
          </h3>

          <p>{t("about.quickInfo.highSchool")}</p>
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  MessageCircle,
  Mail,
  Gamepad2,
  Share2,
  Camera,
} from "lucide-react";
import { useTranslation } from "@/components/providers/TranslationProvider";

type SocialItem = {
  name: string;
  username?: string;
  description?: string;
  href?: string;
  icon: React.ReactNode;
};

const socialItems: SocialItem[] = [
  {
    name: "YouTube",
    username: "revex-rvx",
    description: "قناتي على YouTube",
    href: "https://youtube.com/@majhol_100?si=6_vZHjls-UOWdz_T",
    icon: <MessageCircle size={28} />,
  },
  {
    name: "Instagram",
    username: "0revex0",
    description: "حسابي على Instagram",
    href: "https://www.instagram.com/0revex0?igsh=eGdpYmR2OGhxa3h1",
    icon: <Camera size={28} />,
  },
  {
    name: "Facebook",
    username: "REVEX Fc",
    description: "حسابي على Facebook",
    href: "https://www.facebook.com/share/1D3ZFKxrnC/",
    icon: <Share2 size={28} />,
  },
  {
    name: "Discord",
    username: "rx.revex",
    description: "التواصل معي عبر Discord",
    href: "https://discordapp.com/users/1016770064965455974",
    icon: <Gamepad2 size={28} />,
  },
  {
    name: "WhatsApp",
    username: "+212 631949118",
    description: "التواصل معي عبر WhatsApp",
    href: "https://wa.me/212631949118",
    icon: <MessageCircle size={28} />,
  },
  {
    name: "Gmail",
    username: "yassinfrfr8682@gmail.com",
    description: "إرسال رسالة عبر البريد الإلكتروني",
    href: "mailto:yassinfrfr8682@gmail.com",
    icon: <Mail size={28} />,
  },
];

export default function SocialPage() {
  const { t } = useTranslation();

  return (
    <main className="socialPage" dir="rtl">
      <section className="socialHero">
        <h1>{t("social.hero.title")}</h1>

        <p>{t("social.hero.description")}</p>
      </section>

      <section className="socialGrid">
        {socialItems.map((social) => {
          const isAvailable = Boolean(social.href);

          const content = (
            <>
              <div className="socialIcon">
                {social.icon}
              </div>

              <div className="socialContent">
                <h2>{social.name}</h2>

                {social.username && (
                  <p className="socialUsername">
                    {social.username}
                  </p>
                )}

                {social.description && (
                  <p className="socialDescription">
                    {t(`social.accounts.${social.name}.description`)}
                  </p>
                )}

                <span className="socialAction">
                  {isAvailable
                    ? t("social.actions.visit")
                    : t("social.actions.unavailable")}
                </span>
              </div>
            </>
          );

          if (isAvailable) {
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="socialCard"
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={social.name}
              className="socialCard socialCardDisabled"
            >
              {content}
            </div>
          );
        })}
      </section>
    </main>
  );
}
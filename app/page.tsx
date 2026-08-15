"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/components/providers/TranslationProvider";

export default function WelcomePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [exiting, setExiting] = useState(false);

  function handleEnter() {
    setExiting(true);
    window.setTimeout(() => router.push("/home"), 400);
  }

  return (
    <AnimatePresence mode="wait">
      {!exiting && (
        <motion.main
          key="welcome"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 620, width: "100%", padding: "7rem 0" }}>
            <Image
              src="/images/revex-logo.png"
              alt="REVEX logo"
              width={120}
              height={120}
              style={{ display: "block", margin: "0 auto 24px" }}
              priority
            />

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
              }}
            >
              REVEX
            </h1>

            <p
              style={{
                margin: "1rem auto 0",
                maxWidth: 560,
                color: "inherit",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                opacity: 0.9,
              }}
            >
              {t("welcome.design")}
            </p>

            <motion.button
              type="button"
              onClick={handleEnter}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: "3rem",
                minHeight: 52,
                padding: "0 32px",
                borderRadius: 999,
                border: "none",
                background: "#3b82f6",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "0.95rem",
              }}
              aria-label={t("welcome.enter")}
            >
              {t("welcome.enter")}
            </motion.button>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
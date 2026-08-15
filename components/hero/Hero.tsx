"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <motion.section
      aria-labelledby="hero-title"
      className={styles.hero}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <Image
          src="/images/revex-logo.png"
          alt="REVEX logo"
          width={140}
          height={140}
          className={styles.logo}
          priority
        />
        <h1 id="hero-title" className={styles.title}>Yassin</h1>
        <h2 className={styles.subtitle}>A calm identity system</h2>
        <p className={styles.description}>
          <span>Systems.</span>
          <span>Precision.</span>
          <span>Identity.</span>
        </p>
        <motion.div
          className={styles.primaryButton}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          aria-label="Continue"
        >
          Continue
        </motion.div>
      </div>
    </motion.section>
  );
}

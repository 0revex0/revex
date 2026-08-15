"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.topRow}>
        <span className={styles.brand}>REVEX</span>
        <div className={styles.rightText}>
          <p>© 2026 REVEX.</p>
          <p>Designed & built by Yassin.</p>
        </div>
      </div>

      <div className={styles.note}>
        <p>Minimal.</p>
        <p>Intentional.</p>
        <p>Timeless.</p>
      </div>
    </motion.footer>
  );
}

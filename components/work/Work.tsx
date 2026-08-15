"use client";

import { motion } from "framer-motion";
import styles from "./Work.module.css";

export function Work() {
  return (
    <motion.section
      id="work"
      aria-labelledby="work-title"
      className={styles.work}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Work</p>
        <h2 id="work-title" className={styles.subtitle}>System preview</h2>
        <p className={styles.description}>
          A preview of REVEX system modules and their quiet logic.
        </p>
      </div>

      <div className={styles.cards}>
        <motion.article
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className={styles.cardMeta}>
            <span className={styles.category}>Module</span>
            <span className={styles.moduleName}>Structure</span>
          </div>
          <div className={styles.divider} />
          <p className={styles.cardDescription}>Clear hierarchy and intentional form.</p>
        </motion.article>

        <motion.article
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.cardMeta}>
            <span className={styles.category}>Module</span>
            <span className={styles.moduleName}>Systems</span>
          </div>
          <div className={styles.divider} />
          <p className={styles.cardDescription}>Deliberate behavior and quiet reliability.</p>
        </motion.article>

        <motion.article
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={styles.cardMeta}>
            <span className={styles.category}>Module</span>
            <span className={styles.moduleName}>Presence</span>
          </div>
          <div className={styles.divider} />
          <p className={styles.cardDescription}>Minimal expression with maximum clarity.</p>
        </motion.article>
      </div>
    </motion.section>
  );
}

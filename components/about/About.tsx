"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export function About() {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-title"
      className={styles.about}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 id="about-title" className={styles.title}>About</h2>
          <p className={styles.description}>I don&apos;t build websites.</p>
          <p className={styles.description}>
            I build calm identity systems with deliberate structure.
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
            <h3 className={styles.cardTitle}>Mindset</h3>
            <p className={styles.cardText}>Calm. Organized. Curious.</p>
          </motion.article>

          <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className={styles.cardTitle}>Philosophy</h3>
            <p className={styles.cardText}>Simple first. Complex only when necessary.</p>
          </motion.article>

          <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardText}>A quiet system with clear intent.</p>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}

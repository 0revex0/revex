"use client";

import { motion } from "framer-motion";
import styles from "./Identity.module.css";

export function Identity() {
  return (
    <motion.section
      id="identity"
      aria-labelledby="identity-title"
      className={styles.identity}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <span className={styles.label}>Identity</span>
        <h2 id="identity-title" className={styles.title}>Built with calm. Driven by precision.</h2>
        <div className={styles.copy}>
          <p>REVEX is my digital identity.</p>
          <p>Systems are calm only when they are precise.</p>
          <p>Every decision aligns with purpose.</p>
        </div>

        <div className={styles.metrics}>
          <motion.div
            className={styles.metric}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.metricLabel}>Structure</span>
            <span className={styles.metricValue}>Defined hierarchy.</span>
          </motion.div>

          <motion.div
            className={styles.metric}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className={styles.metricLabel}>Systems</span>
            <span className={styles.metricValue}>Deliberate behavior.</span>
          </motion.div>

          <motion.div
            className={styles.metric}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className={styles.metricLabel}>Presence</span>
            <span className={styles.metricValue}>Calm clarity.</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

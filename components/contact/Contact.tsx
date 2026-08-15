"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-title"
      className={styles.contact}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <span className={styles.label}>Contact</span>
        <h2 id="contact-title" className={styles.title}>Let&apos;s build something meaningful.</h2>
        <p className={styles.description}>
          Whether it&apos;s collaboration, inquiry, or conversation —
        </p>
        <p className={styles.description}>I&apos;m always open.</p>
      </div>
    </motion.section>
  );
}

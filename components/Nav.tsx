"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

const LINKS = [
  ["Education", "#education"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header data-nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <a href="#top" className={styles.monogram} aria-label="Dev Jariwala, back to top">
        dj
      </a>
      <nav aria-label="Sections">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

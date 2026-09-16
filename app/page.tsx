import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiCloud, FiDatabase, FiActivity } from "react-icons/fi";
import styles from "./page.module.css";

const experience = [
  { company: "Hyundai America Technical Center (HATCI) via KPIT Technologies", role: "Software Engineer Intern, Client Assignment", date: "Jul 2026 — Aug 2026", description: "Built 20+ automated Robot Framework test cases in Python for five Hyundai ccNC modules and expanded regression coverage for SiriusXM 360L services across vehicle trims." },
  { company: "KPIT Technologies", role: "Software Engineer Intern", date: "Jun 2026 — Jul 2026", description: "Built a JWT-based authentication platform in Angular, Flask, and MySQL for internal tooling and implemented role-based access for 50+ users across platform modules." },
  { company: "Necessities", role: "Software Engineer Intern", date: "Sep 2025 — Apr 2026", description: "Built 50+ reusable React components for marketplace search and discovery, plus PostgreSQL-backed REST APIs supporting 100+ active users and optimized database queries to reduce page load times by 30%." },
];

const projects = [
  { title: "StormRoute", description: "Built a weather-aware routing engine in Next.js/TypeScript that evaluates six departure windows and compares three routes using live weather and road geometry data.", href: "https://github.com/devjariwalaa/StormRoute" },
  { title: "MiniRedis", description: "Built a Redis-style key-value store in C++20 with thread-safe concurrency, TTL expiry, LRU eviction, and append-only persistence logging.", href: "https://github.com/devjariwalaa/MiniRedis" },
  { title: "Cricket Scoring & Analytics Platform", description: "Built a live cricket scoring platform supporting synchronized workflows with WebSockets, tournament rule logic, and secure multi-layer authorization.", href: "https://github.com/devjariwalaa/wicketly-live-score" },
];

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <div className={styles.topline}><span className={styles.monogram}>dj.</span><span><i /> Portfolio / 2026</span></div>
        <div className={styles.intro}><div><p className={styles.eyebrow}>Software engineer</p><h1>Dev Jariwala<span>.</span></h1><p className={styles.subtitle}>Computer Science @ Michigan</p></div>
        <div className={styles.school}><Image src="/umich-logo.png" alt="University of Michigan block M" width={66} height={66} priority /><span>University of Michigan<strong>Computer Science</strong></span></div></div>
        <p className={styles.heroNote}>I build thoughtful products and reliable systems — from connected-car testing to real-time sports platforms.</p>
        <nav className={styles.links} aria-label="Contact and resume">
          <a href="mailto:jariwa@umich.edu"><FiMail /> Email</a>
          <a href="https://github.com/devjariwalaa" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
          <a href="https://www.linkedin.com/in/dev-jariwalaa/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
          <a href="/resume">Resume <FiArrowUpRight /></a>
        </nav>
      </header>

      <section className={styles.section} aria-labelledby="experience">
        <div className={styles.sectionHeading}><h2 id="experience">Experience</h2><span>01 / Where I’ve worked</span></div>
        <div className={styles.experienceGrid}>{experience.map((item) => (
          <article className={styles.entry} key={item.company}>
            <div className={styles.entryHeading}><h3>{item.company}</h3><span className={styles.date}>{item.date}</span></div>
            <p className={styles.role}>{item.role}</p>
            <p className={styles.description}>{item.description}</p>
          </article>
        ))}</div>
      </section>

      <section className={styles.section} aria-labelledby="projects">
        <div className={styles.sectionHeading}><h2 id="projects">Selected work</h2><span>02 / What I’ve built</span></div>
        <div className={styles.projectGrid}>{projects.map((project) => (
          <article className={`${styles.entry} ${styles.projectCard}`} key={project.title}>
            <div className={styles.projectArt} aria-hidden="true">{project.title === "StormRoute" ? <FiCloud /> : project.title === "MiniRedis" ? <FiDatabase /> : <FiActivity />}<span>{project.title === "StormRoute" ? "ROUTES / WEATHER" : project.title === "MiniRedis" ? "MEMORY / SYSTEMS" : "CRICKET / LIVE"}</span></div>
            <div className={styles.entryHeading}><h3>{project.title}</h3><a className={styles.projectLink} href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub ↗</a></div>
            <p className={styles.description}>{project.description}</p>
          </article>
        ))}</div>
      </section>
      <footer className={styles.footer}>Dev Jariwala · <a href="mailto:jariwa@umich.edu">jariwa@umich.edu</a></footer>
    </main>
  );
}

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiCloud, FiDatabase, FiActivity } from "react-icons/fi";
import styles from "./page.module.css";

const experience = [
  { company: "Hyundai America Technical Center", role: "Software Engineer Intern · via KPIT Technologies", date: "Jul — Aug 2026", description: "Automated regression tests and validated connected-car infotainment systems." },
  { company: "KPIT Technologies", role: "Software Engineer Intern", date: "Jun — Jul 2026", description: "Built an authentication and user-management platform with Angular, Flask, and MySQL." },
  { company: "Necessities", role: "Software Engineer Intern", date: "Sep 2025 — Apr 2026", description: "Developed search, messaging, and live inventory features for a campus marketplace." },
];

const projects = [
  { title: "StormRoute", description: "Weather forecasts along a driving route, with comparisons of departure times and alternate routes.", href: "https://github.com/devjariwalaa/StormRoute" },
  { title: "MiniRedis", description: "A C++ in-memory database with concurrent clients, crash recovery, key expiration, and memory eviction.", href: "https://github.com/devjariwalaa/MiniRedis" },
  { title: "Wicketly", description: "Live cricket scoring and match statistics built with React, TypeScript, and Supabase.", href: "https://github.com/devjariwalaa/wicketly-live-score" },
];

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <div className={styles.topline}><span className={styles.monogram}>dj.</span><span>Portfolio / 2026</span></div>
        <div className={styles.intro}><div><p className={styles.eyebrow}>Software engineer</p><h1>Dev Jariwala<span>.</span></h1><p className={styles.subtitle}>Computer Science @ Michigan</p></div>
        <div className={styles.school}><Image src="/umich-logo.png" alt="University of Michigan block M" width={66} height={66} priority /><span>University of Michigan<strong>Computer Science</strong></span></div></div>
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
        <div className={styles.sectionHeading}><h2 id="projects">Projects</h2><span>02 / What I’ve built</span></div>
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

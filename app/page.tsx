import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiArrowDownTray, HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
import styles from "./page.module.css";

const experience = [
  { company: "Hyundai America Technical Center", role: "Software Engineer Intern · via KPIT Technologies", date: "Jul — Aug 2026", description: "Expanded regression coverage across Hyundai’s connected-car infotainment stack, pairing automated validation with hands-on in-vehicle testing.", impact: ["20+ automated tests", "5 ccNC modules", "100+ engineer org"] },
  { company: "KPIT Technologies", role: "Software Engineer Intern", date: "Jun — Jul 2026", description: "Built an internal authentication and user-management platform with secure, role-aware flows spanning the full product.", impact: ["6 REST APIs", "10+ product screens", "Angular · Flask · MySQL"] },
  { company: "Necessities", role: "Software Engineer Intern", date: "Sep 2025 — Apr 2026", description: "Shipped marketplace infrastructure and experiences for a growing campus platform—from performant discovery to messaging and live inventory updates.", impact: ["100+ active users", "1,000+ listings", "50+ React components"] },
];

const projects = [
  { index: "01", title: "MiniRedis", eyebrow: "Systems engineering", description: "A Redis-style in-memory database built from the wire protocol up, with concurrent clients, crash recovery, expiration, and memory-aware eviction.", metric: "52K+", metricLabel: "operations / second", tech: ["C++20", "TCP/IP", "Multithreading", "CMake"] },
  { index: "02", title: "Wicketly", eyebrow: "Real-time product", description: "A synchronized cricket scoring and analytics platform with a rules engine for live match state, player statistics, and second-innings targets.", metric: "15+", metricLabel: "tournament rules", tech: ["React", "TypeScript", "Supabase", "PostgreSQL"], href: "https://github.com/devjariwalaa/wicketly-live-score" },
];

export default function Home() {
  return (
    <main className={styles.siteShell}>
      <div className={styles.noise} aria-hidden="true" />
      <header className={styles.nav}>
        <a className={styles.wordmark} href="#top" aria-label="Dev Jariwala, home">Dev Jariwala<span>.</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
        <a className={styles.resumeLink} href="/resume">Resume <HiArrowDownTray /></a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroKicker}><Image src="/umich-logo.png" alt="University of Michigan" width={58} height={58} priority /><span><strong>University of Michigan</strong>Computer Science</span></div>
        <h1>I want to build<br />something that <em>matters.</em></h1>
        <div className={styles.heroFooter}>
          <p>I’m Dev, a software engineer who wants to build technology that changes the world and makes a real difference in people’s lives.</p>
          <a className={styles.primaryCta} href="#work">Explore my work <FaArrowRight /></a>
        </div>
        <div className={styles.heroOrb} aria-hidden="true"><span>BUILD</span><span>MEASURE</span><span>IMPROVE</span></div>
      </section>

      <section className={styles.section} id="work">
        <div className={styles.sectionHeading}><span>Selected work</span><h2>Things I’ve<br />built.</h2></div>
        <div className={styles.projects}>{projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectTopline}><span>{project.index} / {project.eyebrow}</span>{project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><HiArrowUpRight /></a>}</div>
            <div className={styles.projectGrid}><div><h3>{project.title}</h3><p>{project.description}</p></div><div className={styles.metric}><strong>{project.metric}</strong><span>{project.metricLabel}</span></div></div>
            <div className={styles.techList}>{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}</div>
      </section>

      <section className={`${styles.section} ${styles.experienceSection}`} id="experience">
        <div className={`${styles.sectionHeading} ${styles.compactHeading}`}><span>Experience</span></div>
        <div className={styles.timeline}>{experience.map((item, index) => (
          <article className={styles.role} key={item.company}><div className={styles.roleNumber}>0{index + 1}</div><div className={styles.roleMain}><span className={styles.roleDate}>{item.date}</span><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.description}</p><div className={styles.impactList}>{item.impact.map((impact) => <span key={impact}>{impact}</span>)}</div></div></article>
        ))}</div>
      </section>

      <section className={styles.about} id="about">
        <p className={styles.aboutLabel}>A little about me</p>
        <p className={styles.aboutStatement}>I’m curious about how things work, and I want to use that curiosity to <em>build something meaningful.</em></p>
        <div className={styles.aboutBottom}><p>Currently pursuing a B.S.E. in Computer Science at the University of Michigan. Based in Michigan, building wherever the interesting problem is.</p><div className={styles.skills}><span>C++</span><span>Python</span><span>TypeScript</span><span>React</span><span>PostgreSQL</span><span>Docker</span><span>Linux</span><span>GCP</span></div></div>
      </section>

      <footer className={styles.footer}>
        <div><span>Have an interesting problem?</span><a href="mailto:jariwa@umich.edu">Let’s build something.</a></div>
        <div className={styles.socials}><a href="https://github.com/devjariwalaa" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://linkedin.com/in/dev-jariwalaa" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a></div>
        <p>© {new Date().getFullYear()} Dev Jariwala</p>
      </footer>
    </main>
  );
}

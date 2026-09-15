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
        <h1>Dev Jariwala</h1>
        <p>Computer Science · University of Michigan</p>
        <nav className={styles.links} aria-label="Contact and resume">
          <a href="mailto:jariwa@umich.edu">Email</a>
          <a href="https://github.com/devjariwalaa" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dev-jariwalaa/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="/resume">Resume ↗</a>
        </nav>
      </header>

      <section className={styles.section} aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <div>{experience.map((item) => (
          <article className={styles.entry} key={item.company}>
            <div className={styles.entryHeading}><h3>{item.company}</h3><span className={styles.date}>{item.date}</span></div>
            <p className={styles.role}>{item.role}</p>
            <p className={styles.description}>{item.description}</p>
          </article>
        ))}</div>
      </section>

      <section className={styles.section} aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        <div>{projects.map((project) => (
          <article className={styles.entry} key={project.title}>
            <div className={styles.entryHeading}><h3>{project.title}</h3><a className={styles.projectLink} href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub ↗</a></div>
            <p className={styles.description}>{project.description}</p>
          </article>
        ))}</div>
      </section>
      <footer className={styles.footer}>Dev Jariwala · <a href="mailto:jariwa@umich.edu">jariwa@umich.edu</a></footer>
    </main>
  );
}

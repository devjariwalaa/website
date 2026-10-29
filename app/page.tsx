import { FiGithub, FiLinkedin, FiArrowUpRight, FiFileText, FiMail } from "react-icons/fi";
import Constellation from "@/components/Constellation";
import Nav from "@/components/Nav";
import Typer from "@/components/Typer";
import Gallery from "@/components/Gallery";
import ExperienceList from "@/components/ExperienceList";
import { LocalTime, CopyEmail } from "@/components/Live";
import { contact, experience, projects, coursework, orgs, skills, photos, type Project } from "@/lib/data";
import styles from "./page.module.css";

function CricketBall() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#c8322b" />
      <circle cx="9" cy="8" r="4" fill="#ffffff" opacity="0.18" />
      <path d="M5 4.5c4 4.5 4 10.5 0 15M19 4.5c-4 4.5-4 10.5 0 15" stroke="#f6e7c8" strokeWidth="0.9" fill="none" strokeDasharray="1.4 1.2" />
    </svg>
  );
}

function ProjectArt({ slug }: { slug: Project["slug"] }) {
  if (slug === "storm") {
    return (
      <svg className={styles.art} viewBox="0 0 480 320" role="img" aria-label="Illustration of three routes compared under rain, with six departure windows">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#1d2026" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="480" height="320" fill="url(#grid)" />
        <g className={styles.rain} stroke="#7b8a9c" strokeWidth="1" strokeLinecap="round" opacity="0.45">
          {Array.from({ length: 26 }).map((_, i) => (
            <line key={i} x1={(i * 37) % 480} y1={(i * 53) % 220} x2={((i * 37) % 480) - 6} y2={((i * 53) % 220) + 14} />
          ))}
        </g>
        <path d="M60 230 C120 120, 220 90, 300 140 S400 110, 420 70" stroke="#3a3f47" strokeWidth="3" fill="none" />
        <path d="M60 230 C140 240, 240 220, 320 180 S400 120, 420 70" stroke="#3a3f47" strokeWidth="3" fill="none" />
        <path className={styles.routeBest} d="M60 230 C100 180, 200 190, 270 150 S380 90, 420 70" stroke="#ffcb05" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="60" cy="230" r="7" fill="#f2f2ee" />
        <circle cx="420" cy="70" r="7" fill="#ffcb05" />
        <g transform="translate(60 270)">
          {[18, 26, 12, 30, 22, 34].map((hgt, i) => (
            <rect key={i} x={i * 30} y={34 - hgt} width="20" height={hgt} rx="3" fill={i === 2 ? "#ffcb05" : "#2a2e35"} />
          ))}
        </g>
      </svg>
    );
  }
  if (slug === "redis") {
    return (
      <div className={styles.term} role="img" aria-label="Terminal session setting, expiring and reading a key in MiniRedis">
        <div className={styles.termBar}>
          <i /> <i /> <i /> <span>miniredis — 6380</span>
        </div>
        <pre>
          <span className={styles.p}>$</span> ./miniredis --port 6380 --aof{"\n"}
          <span className={styles.d}>listening on 0.0.0.0:6380 · 8 workers</span>{"\n"}
          <span className={styles.p}>&gt;</span> SET wicket &quot;bowled&quot;{"\n"}
          <span className={styles.o}>OK</span>{"\n"}
          <span className={styles.p}>&gt;</span> EXPIRE wicket 60{"\n"}
          <span className={styles.o}>(integer) 1</span>{"\n"}
          <span className={styles.p}>&gt;</span> GET wicket{"\n"}
          <span className={styles.o}>&quot;bowled&quot;</span>{"\n"}
          <span className={styles.p}>&gt;</span> <span className="caret" />
        </pre>
      </div>
    );
  }
  return (
    <div className={styles.board} role="img" aria-label="Illustrative live scoreboard showing a chase in the second innings">
      <div className={styles.boardTop}>
        <span>Second innings</span>
        <span className={styles.liveDot}>Live</span>
      </div>
      <div className={styles.boardScore}>
        142<span>/4</span>
      </div>
      <div className={styles.boardMeta}>16.3 overs · target 168 · need 26 from 21</div>
      <div className={styles.overRow} aria-hidden="true">
        {["1", "4", "•", "W", "2", "6"].map((b, i) => (
          <span key={i} className={b === "W" ? styles.ballW : b === "6" || b === "4" ? styles.ballB : ""}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const marquee = skills.flatMap((s) => s.items);

  return (
    <>
      <Constellation />
      <Nav />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero} id="top">
          <div className={styles.heroText}>
            <p className={styles.hello}>Hi, my name is</p>
            <h1 className={styles.name}>
              <span className={styles.first}>Dev</span>
              <span className={styles.last}>Jariwala.</span>
            </h1>
            <p className={styles.role}>
              I&apos;m a <strong><Typer /></strong>
            </p>
            <p className={styles.lede}>
              Computer Science student at the University of Michigan, College of Engineering.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={contact.resume}>
                <FiFileText aria-hidden="true" /> View resume
              </a>
              <a className={styles.iconBtn} href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a className={styles.iconBtn} href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a className={styles.iconBtn} href={`mailto:${contact.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          <div className={styles.portraitWrap}>
            <div className={styles.portrait}>
              <div className={styles.ring} aria-hidden="true" />
              <div className={styles.orbit} aria-hidden="true">
                <span className={styles.ball}>
                  <CricketBall />
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/headshot.webp" alt="Dev Jariwala" className={styles.face} />
            </div>
            <svg className={styles.signature} viewBox="0 0 420 130" role="img" aria-label="Dev Jariwala signature">
              <text x="16" y="92">Dev Jariwala</text>
            </svg>
          </div>

          <a href="#education" className={styles.scroll}>
            <span>Scroll</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* Education */}
        <section className={styles.section} id="education" aria-labelledby="edu-h">
          <h2 className={styles.h2} id="edu-h">Education</h2>
          <div className={styles.edu}>
            <div className={styles.school}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/umich-logo.png" alt="" width={64} height={64} />
              <div>
                <h3>University of Michigan</h3>
                <p>B.S.E. in Computer Science, College of Engineering</p>
                <p className={styles.grad}>Expected May 2028 · Ann Arbor, MI</p>
              </div>
            </div>
            <div className={styles.eduCols}>
              <div>
                <h4 className={styles.cellLabel}>Coursework</h4>
                <ul className={styles.courses}>
                  {coursework.map((c) => (
                    <li key={c.code}>
                      <span>{c.code}</span>
                      {c.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.cellLabel}>Organizations</h4>
                <ul className={styles.orgs}>
                  {orgs.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className={styles.section} id="about" aria-labelledby="about-h">
          <h2 className={styles.h2} id="about-h">About me</h2>
          <div className={styles.bento}>
            <article className={`${styles.cell} ${styles.intro}`}>
              <p className={styles.big}>
                I like software that has to work the first time it matters: in a car leaving the lot, on a login page, on match day.
              </p>
              <p>
                I&apos;m a computer science student in Michigan&apos;s College of Engineering, graduating May 2028. This summer I split my internship at KPIT between internal auth tooling and test automation at Hyundai America Technical Center. Before that I built search and messaging for Necessities, a student marketplace in Ann Arbor.
              </p>
              <p>
                Off the keyboard I&apos;m with the Michigan cricket club and the Michigan Data Science Team.
              </p>
            </article>

            <article className={`${styles.cell} ${styles.now}`}>
              <h3 className={styles.cellLabel}>Right now</h3>
              <p className={styles.nowText}>Looking for Summer 2027 software engineering internships.</p>
              <a className={styles.textLink} href={`mailto:${contact.email}`}>
                Get in touch <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>

            <article className={`${styles.cell} ${styles.where}`}>
              <h3 className={styles.cellLabel}>Based in</h3>
              <p className={styles.whereCity}>Ann Arbor, MI</p>
              <p className={styles.whereTime}>
                <LocalTime /> local time
              </p>
            </article>

            <article className={`${styles.cell} ${styles.stack}`} aria-label="Technologies I use">
              <div className={styles.marquee} aria-hidden="true">
                <div>
                  {[...marquee, ...marquee].map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
              </div>
              <p className="sr-only">{marquee.join(", ")}</p>
            </article>
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section} id="experience" aria-labelledby="exp-h">
          <h2 className={styles.h2} id="exp-h">Experience</h2>
          <ExperienceList jobs={experience} />
        </section>

        {/* Projects */}
        <section className={styles.section} id="projects" aria-labelledby="proj-h">
          <h2 className={styles.h2} id="proj-h">Projects</h2>
          <div className={styles.projects}>
            {projects.map((p) => (
              <article key={p.slug} className={styles.project}>
                <div className={styles.artWrap}>
                  <ProjectArt slug={p.slug} />
                </div>
                <div className={styles.projectText}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.pitch}>{p.pitch}</p>
                  <p className={styles.projectBody}>{p.body}</p>
                  <dl className={styles.stats}>
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <dt>{s.value}</dt>
                        <dd>{s.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className={styles.chips}>
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </p>
                  <a className={styles.textLink} href={p.href} target="_blank" rel="noreferrer">
                    View code on GitHub <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section} id="skills" aria-labelledby="skills-h">
          <h2 className={styles.h2} id="skills-h">Skills</h2>
          <div className={styles.skills}>
            {skills.map((g) => (
              <div key={g.group} className={styles.skillGroup}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Photos */}
        <section className={styles.section} id="photos" aria-labelledby="photos-h">
          <h2 className={styles.h2} id="photos-h">Off the keyboard</h2>
          <Gallery photos={photos} />
        </section>

        {/* Contact */}
        <section className={styles.contact} id="contact" aria-labelledby="contact-h">
          <p className={styles.hello}>Have a role or a project in mind?</p>
          <h2 className={styles.talk} id="contact-h">
            Let&apos;s talk.
          </h2>
          <a className={styles.mail} href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <div className={styles.contactRow}>
            <CopyEmail email={contact.email} className={styles.ghost} />
            <a className={styles.ghost} href={contact.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a className={styles.ghost} href={contact.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
          </div>
          <p className={styles.footnote}>
            Ann Arbor, MI · <LocalTime />
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© 2026 Dev Jariwala</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

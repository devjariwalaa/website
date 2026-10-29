"use client";

import { useState } from "react";
import type { Job } from "@/lib/data";
import styles from "@/app/page.module.css";

export default function ExperienceList({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ol className={styles.jobs}>
      {jobs.map((job, n) => {
        const isOpen = open === n;
        return (
          <li key={job.org} className={`${styles.job} ${isOpen ? styles.jobOpen : ""}`}>
            <button
              type="button"
              data-job
              className={styles.jobRow}
              aria-expanded={isOpen}
              aria-controls={`job-${n}`}
              onClick={() => setOpen(isOpen ? null : n)}
            >
              <span className={styles.jobDates}>{job.dates}</span>
              <span className={styles.jobMark} aria-hidden="true">{job.short}</span>
              <span className={styles.jobWho}>
                <span className={styles.jobOrg}>{job.org}</span>
                <span className={styles.jobRole}>{job.role}</span>
              </span>
              <span className={styles.jobToggle} aria-hidden="true" />
            </button>
            <div id={`job-${n}`} className={styles.jobBody} hidden={!isOpen}>
              <p className={styles.jobSummary}>{job.summary}</p>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className={styles.chips}>
                {job.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
                <span className={styles.chipPlace}>{job.place}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

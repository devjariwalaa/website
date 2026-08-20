import Link from "next/link";
import { HiArrowLeft, HiArrowTopRightOnSquare } from "react-icons/hi2";
import styles from "./resume.module.css";

export const metadata = {
  title: "Resume | Dev Jariwala",
  description: "Dev Jariwala's software engineering resume.",
};

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          <HiArrowLeft /> Back to portfolio
        </Link>
        <div className={styles.identity}>
          <strong>Dev Jariwala</strong>
          <span>Software Engineer</span>
        </div>
        <a
          href="/Dev-Jariwala-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.open}
        >
          Open full screen <HiArrowTopRightOnSquare />
        </a>
      </header>

      <section className={styles.viewer} aria-label="Dev Jariwala resume">
        <object
          data="/Dev-Jariwala-Resume.pdf#view=FitH&toolbar=1"
          type="application/pdf"
          className={styles.pdf}
        >
          <div className={styles.fallback}>
            <p>Your browser cannot display the resume here.</p>
            <a href="/Dev-Jariwala-Resume.pdf" target="_blank" rel="noreferrer">
              Open the PDF
            </a>
          </div>
        </object>
      </section>
    </main>
  );
}

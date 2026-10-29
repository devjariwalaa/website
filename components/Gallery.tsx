"use client";

import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "@/app/page.module.css";

type Photo = { src: string; alt: string; width: number; height: number; credit?: string };

/** Horizontal photo strip you scroll or swipe through, with arrow buttons. */
export default function Gallery({ photos }: { photos: Photo[] }) {
  const track = useRef<HTMLDivElement>(null);
  const step = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const w = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className={styles.gallery} data-gallery>
      <div className={styles.galleryTrack} ref={track} data-track tabIndex={0} aria-label="Photos, scroll sideways">
        {photos.map((p) => (
          <figure key={p.src} className={styles.galleryItem}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" />
            {p.credit && <figcaption>Photo: {p.credit}</figcaption>}
          </figure>
        ))}
      </div>
      <div className={styles.galleryNav}>
        <button type="button" data-prev aria-label="Previous photo" onClick={() => step(-1)}>
          <FiArrowLeft aria-hidden="true" />
        </button>
        <button type="button" data-next aria-label="Next photo" onClick={() => step(1)}>
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

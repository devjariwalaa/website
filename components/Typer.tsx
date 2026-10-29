"use client";

import { useEffect, useState } from "react";

const ROLES = ["software engineer", "systems builder", "full-stack developer", "weekend cricketer"];

export default function Typer() {
  const [text, setText] = useState(ROLES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ri = 0, ci = ROLES[0].length, del = false, hold = 30;
    const id = setInterval(() => {
      if (hold > 0) { hold--; return; }
      const word = ROLES[ri];
      if (!del) {
        ci++;
        if (ci >= word.length) { del = true; hold = 32; }
      } else {
        ci--;
        if (ci <= 0) { del = false; ri = (ri + 1) % ROLES.length; hold = 5; }
      }
      setText(ROLES[ri].slice(0, ci));
    }, 65);
    return () => clearInterval(id);
  }, []);

  return (
    <span data-typer aria-label={ROLES.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

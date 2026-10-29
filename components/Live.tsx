"use client";

import { useEffect, useState } from "react";

export function LocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () =>
      setT(
        new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Detroit" })
      );
    fmt();
    const id = setInterval(fmt, 10000);
    return () => clearInterval(id);
  }, []);
  return <span data-clock suppressHydrationWarning>{t || "—"}</span>;
}

export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      data-copy={email}
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
    >
      {done ? "Copied" : "Copy email"}
    </button>
  );
}

"use client";
import { useEffect, useState } from "react";

type Props = {
  durationMs?: number;
  bgClassName?: string;
};

export function PageReveal({
  durationMs = 800,
  bgClassName = "bg-bg-2",
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), durationMs);
    return () => clearTimeout(t);
  }, [durationMs]);

  if (!visible) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[160]",
        bgClassName,
        "animate-reveal-up",
        "pointer-events-none",
      ].join(" ")}
      aria-hidden
    />
  );
}

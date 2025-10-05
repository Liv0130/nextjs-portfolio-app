"use client";
import { useEffect, useState } from "react";

type Props = {
  durationMs?: number;
  bgClassName?: string;
  animationClassName?: string;
};

export function PageReveal({
  durationMs = 800,
  bgClassName = "bg-bg-2",
  animationClassName = "animate-reveal-up",
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
        "pointer-events-none fixed inset-0 z-[160]",
        bgClassName,
        animationClassName,
      ].join(" ")}
      aria-hidden
    />
  );
}

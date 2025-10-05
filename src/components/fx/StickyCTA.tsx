"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {
  href: string;
  text: string;
  startTop?: number;
  right?: number;
  easing?: number; // 0.12–0.25
  className?: string;
};

export function StickyCTA({
  href,
  text,
  startTop = 600,
  right = 110,
  easing = 0.18,
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const currentY = useRef(startTop);
  const targetY = useRef(startTop);
  const raf = useRef<number | null>(null);
  const movingRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.top = `${startTop}px`;
    el.style.right = `${right}px`;
    el.style.opacity = "1";
    el.style.willChange = "top, opacity, background-color, box-shadow";
    el.style.transition = "background-color 180ms ease, opacity 120ms ease";

    const stillThreshold = 0.35; // px diff considered "stopped"
    const motionScale = 24; // bigger = less sensitive fading

    const onScrollOrResize = () => {
      targetY.current = startTop + window.scrollY;
    };

    const tick = () => {
      const diff = targetY.current - currentY.current;
      const abs = Math.abs(diff);

      if (abs < stillThreshold) {
        // SNAP TO REST: full opacity + normal color
        currentY.current = targetY.current;
        el.style.top = `${currentY.current}px`;
        if (movingRef.current) {
          el.classList.remove("bg-neutral-800");
          el.classList.add("bg-black");
          movingRef.current = false;
        }
        el.style.opacity = "1";
        el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
      } else {
        // keep easing toward target
        currentY.current += diff * easing;
        el.style.top = `${currentY.current}px`;

        // weaker while moving
        const v = Math.min(1, abs / motionScale); // 0..1
        const opacity = 1 - 0.25 * v; // 1 -> 0.75
        el.style.opacity = String(opacity);

        if (!movingRef.current) {
          el.classList.remove("bg-black");
          el.classList.add("bg-neutral-800");
          movingRef.current = true;
        }

        const shadow = 0.12 + 0.28 * v; // subtle stronger shadow in motion
        el.style.boxShadow = `0 10px 30px rgba(0,0,0,${shadow})`;
      }

      raf.current = requestAnimationFrame(tick);
    };

    onScrollOrResize();
    tick();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [startTop, right, easing]);

  return (
    <Link
      ref={ref}
      href={href}
      className={[
        "pointer-events-auto fixed z-50",
        "rounded-full px-15 py-3 font-semibold tracking-widest text-white",
        "bg-black hover:bg-neutral-700", // normal at rest
        className,
      ].join(" ")}
      style={{ top: startTop, right }}
    >
      {text}
    </Link>
  );
}

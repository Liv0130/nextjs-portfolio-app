"use client";
import Link from "next/link";

type Props = {
  label?: string;
  href: string;
  text?: string;
  target?: "_blank" | "_self";
};

export function ButtonBlock({
  label,
  href,
  text = "Visit",
  target = "_blank",
}: Props) {
  return (
    <div className="mx-auto w-1/2 pt-10">
      <p className="font-display text-center text-[clamp(2rem,4vw,4rem)]">
        {label}
      </p>
      <div className="flex justify-center pt-4">
        <Link
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="font-display inline-block rounded-full bg-neutral-900 px-15 py-1 text-[clamp(2rem,3.3vw,3.3rem)] font-medium tracking-widest text-white transition-all duration-200 hover:bg-neutral-700"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}

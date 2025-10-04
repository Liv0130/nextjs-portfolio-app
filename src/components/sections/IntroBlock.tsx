import Link from "next/link";

type Props = {
  className?: string;
  variant?: "light" | "dark";
  name?: string;
  roleLine1?: string;
  companyName?: string;
  companyHref?: string;
};

export function IntroBlock({
  className = "",
  variant = "light",
  name = "OLIVIA WITT",
  roleLine1 = "Software Developer / Full-Stack Developer / JavaScript Enthusiast",
  companyName = "Sarsys AB",
  companyHref = "https://www.sarsys-asft.com/",
}: Props) {
  const textColor = variant === "dark" ? "text-fg-on-dark" : "text-fg";
  const subText = variant === "dark" ? "text-neutral-200" : "text-neutral-700";

  return (
    <div
      className={[
        "ribbon:w-80 ribbon:pt-120 w-90vw lg:w-70 2xl:w-105",
        className,
      ].join(" ")}
    >
      <h2
        className={`mb-4 text-[clamp(1rem,1.4vw,1.15rem)] font-medium tracking-widest ${textColor}`}
      >
        {name}
      </h2>
      <p
        className={`mb-4 text-[clamp(0.85rem,1.25vw,0.95rem)] leading-relaxed font-normal tracking-wider ${subText}`}
      >
        {roleLine1}
      </p>
      <p
        className={`mb-4 text-[clamp(0.85rem,1.25vw,0.95rem)] leading-relaxed font-normal tracking-wider ${subText}`}
      >
        Currently working full-time as a Software Developer at{" "}
        <Link className="underline" href={companyHref} target="_blank">
          {companyName}
        </Link>
      </p>
    </div>
  );
}

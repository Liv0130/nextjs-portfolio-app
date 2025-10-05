import Link from "next/link";

type Props = {
  className?: string;
  variant?: "light" | "dark";
  name?: string;
  hasRibbon?: boolean;
  fixed?: boolean;
  roleLine1?: string;
  roleLine2?: string;
  companyName?: string;
  companyHref?: string;
};

export function IntroBlock({
  className = "",
  variant = "light",
  name = "OLIVIA WITT",
  hasRibbon = false,
  fixed = false,
  roleLine1 = "Software Developer / Full-Stack Developer / JavaScript Enthusiast",
  roleLine2 = "Currently working full-time as a Software Developer at ",
  companyName = "Sarsys AB",
  companyHref = "https://www.sarsys-asft.com/",
}: Props) {
  const textColor = variant === "dark" ? "text-fg-on-dark" : "text-fg";
  const subText = variant === "dark" ? "text-neutral-200" : "text-neutral-700";
  const ribbonPadding = hasRibbon ? "ribbon:pt-120" : "ribbon:pt-20";
  const fixedPosition = fixed ? "lg:fixed lg:left-30 lg:bottom-15" : "relative";

  return (
    <div
      className={[
        "ribbon:w-80 w-90vw lg:w-70 2xl:w-105",
        ribbonPadding,
        fixedPosition,
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
        {roleLine2}
        <Link className="underline" href={companyHref} target="_blank">
          {companyName}
        </Link>
      </p>
    </div>
  );
}

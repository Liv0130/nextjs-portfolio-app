import Link from "next/link";

const items = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/archive", label: "ARCHIVE" },
  // to do: remove github
  { href: "https://github.com/Liv0130", label: "GITHUB", external: true },
  { href: "/contact", label: "CONTACT" },
];

const linkCls =
  "display-font block leading-[0.85] text-[clamp(5rem,9vw,10rem)] " +
  "transition-transform duration-200 ease-out origin-left " +
  "decoration-2 underline-offset-8 decoration-current " +
  "!border-0 !p-0 rounded-none hover:opacity-60 " +
  "motion-safe:hover:-rotate-4 focus:outline-none";

export function HomeLinks() {
  return (
    <ul className="space-y-10 sm:space-y-7 md:space-y-8">
      {items.map((i) => (
        <li key={i.label}>
          <Link
            href={i.href}
            target={i.external ? "_blank" : undefined}
            rel={i.external ? "noreferrer noopener" : undefined}
            className={linkCls}
          >
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

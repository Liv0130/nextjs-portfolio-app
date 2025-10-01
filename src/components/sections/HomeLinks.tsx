import Link from "next/link";

const items = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/archive", label: "ARCHIVE" },
  { href: "https://github.com/Liv0130", label: "GITHUB", external: true },
  { href: "/contact", label: "CONTACT" },
];

export function HomeLinks() {
  return (
    <ul className="space-y-6 sm:space-y-7 md:space-y-8">
      {items.map((i) => (
        <li key={i.label}>
          {i.external ? (
            <a
              href={i.href}
              target="_blank"
              rel="noreferrer noopener"
              className="display-font text-4xl font-light tracking-wide transition-opacity hover:opacity-80 sm:text-6xl md:text-7xl"
            >
              {i.label}
            </a>
          ) : (
            <Link
              href={i.href}
              className="display-font text-4xl font-light tracking-wide transition-opacity hover:opacity-80 sm:text-6xl md:text-7xl"
            >
              {i.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

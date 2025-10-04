"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socials = [
  {
    href: "https://www.linkedin.com/in/oliviawittyj/",
    label: "LinkedIn",
    short: "LI",
    external: true,
  },
  {
    href: "https://github.com/Liv0130",
    label: "GitHub",
    short: "GH",
    external: true,
  },
  {
    href: "https://0livia.notion.site/3cd867cf47e54095a8b6f8ad47b3ccec?v=c6ce16ab7d994ff9a6c3046b75043afe",
    label: "Notion",
    short: "NO",
    external: true,
  },
];

export function LeftRail() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDarkPage = pathname === "/work" || pathname === "/contact";
  const textColor = isDarkPage ? "text-fg-on-dark" : "text-fg";
  const dividerColor = isDarkPage ? "bg-fg-on-dark" : "bg-fg";

  const links = isHome
    ? socials
    : [{ href: "/", label: "HOME", short: "HOME", external: false }];
  return (
    <aside className="relative top-0 left-0 z-50 flex h-auto w-full shrink-0 flex-col flex-row items-center justify-between border-0 p-4 pt-5 pb-30 md:fixed md:h-screen md:w-20 md:flex-col md:items-center md:justify-between md:pt-35 md:pb-20">
      <nav
        className={`${textColor} flex flex-row gap-8 text-[13px] font-normal tracking-widest uppercase md:rotate-[-90deg]`}
      >
        {links.map((l) =>
          l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-5 hover:underline focus:outline-none"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className="tracking-[.3em] underline-offset-5 hover:underline focus:outline-none"
            >
              {l.label}
            </Link>
          )
        )}
      </nav>
      <div className={`${dividerColor} h-[0.7px] w-40 md:h-30 md:w-[0.7px]`} />
      <div
        className={`${textColor} flex text-[14px] font-normal tracking-widest md:w-19 md:rotate-[-90deg]`}
      >
        © / {new Date().getFullYear()}
      </div>
    </aside>
  );
}

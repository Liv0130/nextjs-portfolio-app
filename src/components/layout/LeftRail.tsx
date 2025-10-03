"use client";
import Link from "next/link";

const links = [
  { href: "https://www.linkedin.com/in/oliviawitt", label: "LinkedIn" },
  { href: "https://github.com/Liv0130", label: "GitHub" },
  { href: "https://notion.so", label: "Notion" },
];

export function LeftRail() {
  return (
    <aside className="relative top-0 left-0 w-full h-auto p-2 shrink-0 flex flex-col z-50 items-center justify-between border-0 pt-35 pb-25 md:h-screen md:w-20 md:flex-col md:items-center md:justify-between md:fixed">
      <nav className="text-fg flex flex-row gap-8 text-[13px] font-medium tracking-widest uppercase md:rotate-[-90deg]">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hover:text-neutral-900 focus:outline-none"
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="bg-fg h-40 w-[0.7px]" />
      <div className="text-fg flex rotate-[-90deg] text-[15px] font-medium">
        © {new Date().getFullYear()}
      </div>
    </aside>
  );
}

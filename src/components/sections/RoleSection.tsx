"use client";

import Link from "next/link";

type RoleItem = {
  title: string;
  content?: string;
  className?: string;
  link?: string;
  shortLink?: boolean;
  extraShortLink?: boolean;
};

type Props = {
  items: RoleItem[];
};

export function RoleSection({ items }: Props) {
  return (
    <div className="my-20 flex flex-col items-start justify-stretch gap-10 lg:flex-row">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col ${item.className ?? "w-4/5 lg:w-1/3"}`}
        >
          <span className="text-[clamp(0.8rem,1.2vw,1.2rem)] font-semibold tracking-[0.1em] underline underline-offset-4">
            {item.title}
          </span>
          <p className="my-3 leading-relaxed tracking-wider">{item.content}</p>
          {item.link && (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative inline-block font-normal text-neutral-900 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] ${
                item.shortLink
                  ? "after:w-[82%]"
                  : item.extraShortLink
                    ? "after:w-[65%]"
                    : "after:w-[96%]"
              } after:bg-neutral-900 after:opacity-0 after:transition-opacity after:duration-500 hover:text-neutral-700 hover:after:opacity-100`}
            >
              {item.link}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";

const items = [
  {
    href: "/work/t2go",
    label: "T2GO",
    smallItem: "-FULL-STACK DEVELOPMENT",
    isNew: true,
  },
  {
    href: "/work/falcon",
    label: "FALCON",
    smallItem: "-FULL-STACK DEVELOPMENT",
  },
  {
    href: "/work/greencarlane",
    label: "GREENCAR LANE",
    smallItem: "-FRONTEND DEVELOPMENT",
  },
  {
    href: "/work/trialbee",
    label: "TRIALBEE HONEY",
    smallItem: "-QUALITY ASSURANCE & E2E TEST AUTOMATION",
  },
];

const linkCls =
  "text-fg-on-dark display-font block leading-[1] text-[clamp(3rem,4vw,5rem)] xs:text-[clamp(4rem,6.5vw,7rem)] " +
  "[--slant:0deg] hover:[--slant:-12deg] " +
  "[transform:skewX(var(--slant))] " +
  "transition-[opacity,transform,letter-spacing] duration-300 ease-out " +
  "hover:opacity-60 hover:tracking-wider " +
  "will-change-transform";

export function WorkLinks() {
  return (
    <ul className="mt-10 w-80 space-y-10 text-wrap sm:mt-0 sm:space-y-7 md:space-y-8 lg:ml-65 lg:w-100 xl:ml-60">
      {items.map((i) => (
        <li key={i.label}>
          <Link
            href={i.href}
            target={undefined}
            rel={undefined}
            className={linkCls}
          >
            {i.label}
          </Link>
          <div className="text-fg-on-dark flex w-130 text-[clamp(0.7rem,0.9vw,1rem)] tracking-widest">
            {i.smallItem}
            {i.isNew && (
              <div className="text-fg bg-bg ml-2 w-10 rounded-full text-center font-semibold lg:w-15">
                NEW
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

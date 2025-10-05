"use client";

type RoleItem = {
  title: string;
  content: string;
  className?: string;
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
        </div>
      ))}
    </div>
  );
}

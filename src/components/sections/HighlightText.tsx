"use client";

type Props = {
  children: React.ReactNode;
};

export function HighlightText({ children }: Props) {
  return (
    <div className="font-display pt-20 pb-10 text-justify text-[clamp(1.2rem,2vw,2rem)] leading-relaxed font-medium">
      ✨ {children}
    </div>
  );
}

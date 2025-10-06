"use client";

type Props = {
  children: React.ReactNode;
};

export function HighlightText({ children }: Props) {
  return (
    <div className="font-display xs:text-justify xs:pb-10 xs:pt-20 pt-15 pb-5 text-left text-[clamp(1.2rem,2vw,2rem)] leading-relaxed font-medium">
      ✨ {children}
    </div>
  );
}

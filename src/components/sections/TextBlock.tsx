"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TextBlock({ children, className = "" }: Props) {
  return (
    <p
      className={`max-w-fit px-15 py-5 text-justify leading-relaxed tracking-wider ${className}`}
    >
      {children}
    </p>
  );
}

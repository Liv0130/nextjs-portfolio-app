"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TextBlock({ children, className = "" }: Props) {
  return (
    <p
      className={`max-w-fit py-5 text-justify leading-relaxed tracking-wider lg:px-15 ${className}`}
    >
      {children}
    </p>
  );
}

"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  text?: string;
  shadow?: boolean;
};

export function ImageBlock({
  src,
  alt,
  width = 800,
  height = 800,
  priority = false,
  shadow = false,
  text,
}: Props) {
  return (
    <div className="flex w-fit flex-col items-center justify-center">
      <div className="align-center flex w-full justify-center pt-10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`w-8/9 max-w-[90vw] rounded-lg ${shadow ? "shadow-2xl" : ""}`}
        />
      </div>

      {text && (
        <p className="xs:text-justify xs:py-15 max-w-fit pt-15 pb-5 text-left leading-relaxed tracking-wider lg:px-15">
          {text}
        </p>
      )}
    </div>
  );
}

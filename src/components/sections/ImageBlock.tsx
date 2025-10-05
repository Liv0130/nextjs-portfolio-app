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
    <div className="flex w-full flex-col items-center justify-center">
      <div className="align-center flex w-full justify-center pt-10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`w-7/8 max-w-[90vw] rounded-lg ${shadow ? "shadow-2xl" : ""}`}
        />
      </div>

      {text && (
        <p className="max-w-5xl px-15 py-15 text-justify leading-relaxed tracking-wider">
          {text}
        </p>
      )}
    </div>
  );
}

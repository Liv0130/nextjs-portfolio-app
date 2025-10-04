"use client";

import Image from "next/image";
import { useWindowSizeTrigger } from "@/hooks/useWindowSizeTrigger";

type Props = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

export function BookmarkRibbon({
  className = "",
  src = "/bookmark_ribbon.png",
  width = 200,
  height = 200,
}: Props) {
  const resizeKey = useWindowSizeTrigger();

  return (
    <Image
      key={resizeKey}
      src={src}
      alt="Bookmark ribbon"
      width={width}
      height={height}
      priority
      className={[
        "ribbon:block ribbon:fixed ribbon:top-0 hidden",
        "animate-ribbon-drop h-115px w-70px",
        className,
      ].join(" ")}
    />
  );
}

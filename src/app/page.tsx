"use client";
import { LeftRail } from "@/components/layout/LeftRail";
import { HomeLinks } from "@/components/sections/HomeLinks";
import Image from "next/image";
import { useWindowSizeTrigger } from "@/hooks/useWindowSizeTrigger";

export default function HomePage() {
  const resizeKey = useWindowSizeTrigger();
  return (
    <div className="min-h-svh text-neutral-900">
      <LeftRail />
      <main className="pl-0 md:pl-20">
        <section className="ribbon:pr-10 ribbon:pl-40 grid grid-cols-1 items-center gap-10 px-20 md:min-h-svh md:pt-50 lg:grid-cols-3 lg:pt-0">
          <div className="ribbon:items-start relative flex flex-col justify-center md:gap-4 lg:w-30">
            <Image
              key={resizeKey}
              src="/bookmark_ribbon.png"
              alt="Bookmark ribbon"
              width={200}
              height={200}
              className="ribbon:block ribbon:fixed ribbon:top-0 animate-ribbon-drop hidden h-115 w-70"
              priority
            />
            <div className="ribbon:w-80 ribbon:pt-120 w-90vw lg:w-70 2xl:w-105">
              <h2 className="mb-4 text-[clamp(1rem,1.4vw,1.15rem)] font-medium tracking-widest">
                OLIVIA WITT
              </h2>
              <p className="mb-4 text-[clamp(0.85rem,1.25vw,0.95rem)] leading-relaxed font-normal tracking-wider">
                Software Developer / JavaScript Developer / Full-Stack
                Enthusiast
              </p>
              <p className="mb-4 text-[clamp(0.85rem,1.25vw,0.95rem)] leading-relaxed font-normal tracking-wider">
                Currently working full-time as a Software Developer at{" "}
                <a
                  className="underline"
                  href="https://www.sarsys-asft.com/"
                  target="_blank"
                >
                  Sarsys AB
                </a>
              </p>
            </div>
          </div>
          <div className="justify-items-start">
            <HomeLinks />
          </div>
        </section>
      </main>
    </div>
  );
}

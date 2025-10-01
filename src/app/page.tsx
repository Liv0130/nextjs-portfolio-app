import { LeftRail } from "@/components/layout/LeftRail";
import { Ribbon } from "@/components/hero/Ribbon";
import { HomeLinks } from "@/components/sections/HomeLinks";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#EFE9E2] text-neutral-900">
      <LeftRail />
      <div className="pl-0 lg:pl-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-28 md:grid-cols-[360px,1fr] md:gap-16 lg:pt-32">
          <div className="space-y-6">
            <Ribbon />
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-wide">
                OLIVIA WITT
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600">
                Software Developer / JavaScript Developer / Full‑Stack
                Enthusiast
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                Currently working full‑time as a Software Developer at{" "}
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

          <div className="flex items-start md:items-center">
            <HomeLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

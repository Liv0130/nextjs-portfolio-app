import { LeftRail } from "@/components/layout/LeftRail";
import { HomeLinks } from "@/components/sections/HomeLinks";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-dvh text-neutral-900 lg:flex-col">
      <LeftRail />
      <div className="h-screen pl-0 lg:pl-20">
        <div className="ribbon:mx-auto ribbon:max-w-7xl ribbon:gap-20 ribbon:px-6 ribbon:flex-row flex flex-col">
          <div className="ribbon:w-[200px] medium:justify-center relative flex h-[300px] w-[90%] flex-col items-center space-y-6">
            <Image
              src="/bookmark_ribbon.png"
              alt="Bookmark ribbon"
              width={200}
              height={300}
              className="object-fit ribbon:block top-0 hidden h-[300px] w-[200px]"
              priority
            />
            <div className="items-center justify-center space-y-2 md:pt-22">
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

          <div className="ribbon:h-screen flex flex-1 items-center justify-center">
            <HomeLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

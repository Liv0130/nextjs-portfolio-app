"use client";
import { useEffect, useState } from "react";
import { HomeLinks } from "@/components/sections/HomeLinks";
import { BookmarkRibbon } from "@/components/hero/BookmarkRibbon";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { PageReveal } from "@/components/fx/PageReveal";

export default function HomePage() {
  const [showBrightCover, setShowBrightCover] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBrightCover(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="lg:bg-bg-2 md:bg-bg xs:min-h-svh relative overflow-hidden pt-5 pb-15 text-neutral-900">
      {/* Page reveal animation */}
      {showBrightCover && <div className="bg-bg-2 fixed inset-0 z-[100]" />}
      <PageReveal
        durationMs={400}
        bgClassName="bg-bg"
        animationClassName="animate-reveal-down"
      />
      <div className="bg-bg animate-page-fade opacity-0 [animation-delay:300ms]">
        <main className="animate-float-up pl-0 [animation-delay:450ms] md:pl-20">
          <section className="ribbon:pr-10 ribbon:pl-40 xs:px-20 grid grid-cols-1 items-center gap-10 px-5 md:min-h-svh md:pt-20 lg:grid-cols-3 lg:pt-0">
            <div className="ribbon:items-start relative flex flex-col justify-center md:gap-4 lg:w-30">
              <BookmarkRibbon />
              <IntroBlock variant="light" hasRibbon />
            </div>
            <div className="animate-float-up justify-items-start [animation-delay:450ms]">
              <HomeLinks />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

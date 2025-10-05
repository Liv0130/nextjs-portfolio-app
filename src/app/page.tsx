"use client";
import { HomeLinks } from "@/components/sections/HomeLinks";
import { BookmarkRibbon } from "@/components/hero/BookmarkRibbon";
import { IntroBlock } from "@/components/sections/IntroBlock";

export default function HomePage() {
  return (
    <div className="min-h-svh text-neutral-900">
      <main className="pl-0 md:pl-20">
        <section className="ribbon:pr-10 ribbon:pl-40 grid grid-cols-1 items-center gap-10 px-20 md:min-h-svh md:pt-50 lg:grid-cols-3 lg:pt-0">
          <div className="ribbon:items-start relative flex flex-col justify-center md:gap-4 lg:w-30">
            <BookmarkRibbon />
            <IntroBlock variant="light" hasRibbon />
          </div>
          <div className="justify-items-start">
            <HomeLinks />
          </div>
        </section>
      </main>
    </div>
  );
}

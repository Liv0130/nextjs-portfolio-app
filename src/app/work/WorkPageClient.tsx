"use client";
import { useEffect, useState } from "react";
import { IntroBlock } from "@/components/sections/IntroBlock";
import { WorkLinks } from "@/components/sections/WorkLinks";
import { PageReveal } from "@/components/fx/PageReveal";

export default function WorkPageClient() {
  const [showBrightCover, setShowBrightCover] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBrightCover(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-bg-2 relative min-h-svh px-30 py-14 lg:flex lg:items-center lg:justify-center lg:px-15">
      {showBrightCover && <div className="bg-bg fixed inset-0 z-[100]" />}
      <PageReveal durationMs={600} bgClassName="bg-bg-2" />
      <div className="animate-page-fade opacity-0 [animation-delay:100ms]">
        <IntroBlock
          variant="dark"
          name="WORK"
          fixed
          roleLine1="This is a showcase of my best work in software development, spanning Frontend, Backend, and Full-Stack projects. My experience covers building modern web applications with JavaScript, Vue.js, React, Next.js, GraphQL, REST API, and Node.js, while also working with Azure and real-time data handling through WebSockets and subscriptions."
          roleLine2="The world of technology is constantly evolving, and so has my role—from frontend specialist to versatile software developer. Over the last 3 years, I’ve grown my skills across design, development, and system integration, and I continue to learn and refine my craft every day."
          companyName=""
        />
        <WorkLinks />
      </div>
    </main>
  );
}

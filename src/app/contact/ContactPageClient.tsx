"use client";
import { useEffect, useState } from "react";
import { PageReveal } from "@/components/fx/PageReveal";
import Link from "next/link";

export default function ContactPageClient() {
  const [showDarkCover, setShowDarkCover] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowDarkCover(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  const [copied, setCopied] = useState(false);
  const email = "olivia.yj.witt@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <main className="bg-bg-2 align-center relative flex min-h-svh flex-col justify-center py-14 pl-15 lg:flex lg:items-center lg:justify-center lg:px-50">
      {showDarkCover && <div className="bg-bg fixed inset-0 z-[100]" />}
      <PageReveal durationMs={400} bgClassName="bg-bg-2" />
      <div className="animate-page-fade opacity-0 [animation-delay:300ms]">
        <div className="animate-float-up [animation-delay:450ms]">
          <div className="flex w-full pr-1 pl-15">
            <div className="w-3/4">
              <h1 className="font-display text-fg-on-dark text-[clamp(7rem,13vw,13rem)] font-medium tracking-wider">
                Hej!
              </h1>
              <h3 className="text-fg-on-dark pt-2 pb-10 text-[clamp(1.6rem,2vw,2.5rem)] leading-snug">
                Need a skilled software developer who can deliver modern,
                scalable solutions? Let’s connect.
              </h3>
            </div>
            <div className="mt-10 ml-20 lg:mt-20"></div>
          </div>
          <div className="text-fg-on-dark my-10 w-180 space-y-2 px-15">
            <div className="flex items-center gap-2">
              <p>Email: {email}</p>
              <button
                onClick={handleCopy}
                className="rounded bg-neutral-700 px-2 py-1 text-sm text-white transition hover:bg-neutral-600"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <p>
              On the Internet:{" "}
              <Link
                href="https://www.linkedin.com/in/oliviawittyj"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition hover:text-blue-400"
              >
                LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

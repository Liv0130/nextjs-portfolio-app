"use client";
import { useEffect, useState } from "react";
import { PageReveal } from "@/components/fx/PageReveal";
import { TextBlock } from "@/components/sections/TextBlock";
import { StickyCTA } from "@/components/fx/StickyCTA";
import Image from "next/image";

export default function AboutPageClient() {
  const [showDarkCover, setShowDarkCover] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowDarkCover(false), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-bg align-center xs:px-30 xs:py-14 relative flex min-h-svh flex-col justify-center overflow-hidden px-5 py-5 lg:flex lg:items-center lg:justify-center lg:px-25">
      {showDarkCover && <div className="bg-bg-2 fixed inset-0 z-[100]" />}
      <PageReveal durationMs={400} bgClassName="bg-bg" />
      <div className="animate-page-fade opacity-0 [animation-delay:300ms]">
        <div className="animate-float-up [animation-delay:450ms]">
          <div className="flex w-full flex-col lg:flex-row lg:pr-1 lg:pl-15">
            <div className="lg:w-3/4">
              <h1 className="font-display xs:text-[clamp(7rem,13vw,13rem)] text-[clamp(5rem,8vw,9rem)] font-medium tracking-wider">
                About
              </h1>
              <h3 className="font-display xs:text-[clamp(2.5rem,3.5vw,4rem)] pt-2 pb-10 text-[clamp(1.8rem,2.8vw,3.8rem)] leading-snug">
                I’m Olivia — a software developer, problem solver, and lifelong
                learner.
              </h3>
            </div>
            <div className="mx-auto my-3 lg:mt-20">
              <Image
                src="/olivia.jpg"
                alt="Olivia"
                width={300}
                height={300}
                priority
                className="w-50 max-w-[50vw] rounded-full lg:w-70"
              />
            </div>
            <StickyCTA
              href="/contact"
              text="CONTACT"
              startTop={650}
              right={60}
              easing={0.2}
            />
          </div>
          <TextBlock className="w-180">
            I’ve always been fascinated by how technology can shape experiences.
            My journey into development didn’t start in a computer science
            classroom, but through curiosity, persistence, and a drive to build.
            From experimenting with design tools like Figma to diving into
            JavaScript frameworks, I’ve never been afraid to just open something
            new, break it apart, and figure out how it works.
          </TextBlock>
        </div>
        <TextBlock className="w-180">
          Fast forward to today, and I’ve worked across frontend, backend, and
          full-stack development. My main toolkit includes JavaScript, Vue.js,
          React, GraphQL, Node.js, and Azure, but I’ve also explored testing
          frameworks, real-time data handling, and even hardware–software
          communication. Everything I’ve done — whether it was my first quiz
          project during an internship, testing pipelines in Sweden, or
          rebuilding complex aviation systems — has been a stepping stone that
          brought me to where I am now.
        </TextBlock>
        <TextBlock className="w-180">
          What excites me most about being a developer is building software that
          has a real purpose. For me, it goes beyond code — it’s about designing
          experiences that help people and solve problems, whether that’s giving
          airport operators more accurate data, making the EV market easier to
          navigate, or enabling healthcare platforms to deliver life-changing
          information. I thrive when I can combine technical skills, user
          insights, and a bit of creativity to make things work better.
        </TextBlock>
        <p className="font-display xs:text-justify w-auto pt-15 pb-20 text-[clamp(2rem,2.2vw,2.5rem)] leading-snug lg:w-190 lg:px-15">
          “One of my favorite parts of this career is that I’m always learning.
          Technology doesn’t stand still — and neither do I. Every new feature,
          every sprint, every problem to debug is an opportunity to grow, refine
          my craft, and push the boundary of what I can do.”
        </p>
        <div className="w-auto lg:w-180 lg:px-15">
          <span className="font-display text-[clamp(1.2rem,1.6vw,1.8rem)]">
            Experience
          </span>
          <ul className="mt-10 mb-7 list-disc space-y-2 pl-6 tracking-wider marker:text-[0.6em]">
            <li>Software Developer at Sarsys-ASFT (Runway Safe Group)</li>
            <li>Frontend Development Intern at Greencarlane</li>
            <li>E2E Testing Intern at Trialbee</li>
          </ul>
          <span className="text-[clamp(0.9rem,1.2vw,1.3rem)]">
            Within those roles, I have gained:
          </span>
          <ul className="mt-7 mb-7 list-disc space-y-2 pl-6 tracking-wider marker:text-[0.6em]">
            <li>
              3 years of experience in Software Development (Frontend &
              Full-Stack)
            </li>
            <li>
              Hands-on expertise in Vue.js, React, Node.js, Next.js GraphQL,
              TypeScript and Azure
            </li>
            <li>
              Real-time data handling with WebSockets and GraphQL subscriptions
            </li>
            <li>Experience with E2E testing frameworks (Cypress)</li>
            <li>Collaboration across hardware, sales, and customer teams</li>
          </ul>
        </div>
        <div className="mt-15 w-auto lg:w-180 lg:px-15">
          <span className="font-display text-[clamp(1.2rem,1.6vw,1.8rem)]">
            Skills
          </span>
          <p className="mt-7 leading-8 font-medium tracking-wider">
            JavaScript / TypeScript / Vue.js / React / Node.js / GraphQL /
            WebSockets / Azure / SQL / Agile Development / E2E Testing (Cypress)
            / UI & UX Collaboration (Figma) / Continuous Learning
          </p>
        </div>
        <div className="align-center xs:w-180 xs:justify-start mt-15 flex justify-center lg:px-15">
          <a
            href="/cv/Olivia_Witt_CV.pdf"
            download="Olivia_Witt_CV.pdf"
            className="font-display xs:px-15 inline-block rounded-full bg-neutral-900 px-5 py-1 text-[clamp(2rem,3vw,3rem)] font-medium tracking-widest text-white transition-all duration-200 hover:bg-neutral-700"
          >
            My CV
          </a>
        </div>
      </div>
    </main>
  );
}

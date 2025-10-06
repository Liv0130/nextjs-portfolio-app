import { RoleSection } from "@/components/sections/RoleSection";
import { ImageBlock } from "@/components/sections/ImageBlock";
import { HighlightText } from "@/components/sections/HighlightText";
import { TextBlock } from "@/components/sections/TextBlock";
import { ButtonBlock } from "@/components/sections/ButtonBlock";

export const metadata = { title: "Falcon — Olivia" };

export default async function FalconPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-start md:px-20">
      <div className="animate-reveal-down bg-bg-2 xs:h-[750px] xs:justify-end flex h-[600px] w-full flex-col items-center justify-center lg:w-4/5">
        <h1 className="animate-float-up display-font text-fg-on-dark xs:text-[clamp(8rem,13vw,13rem)] text-[clamp(5.5rem,8vw,9rem)] tracking-[.03em] [animation-delay:600ms] lg:text-[clamp(9rem,14vw,14rem)]">
          FALCON
        </h1>
      </div>
      <div className="xs:pt-40 h-auto w-4/5 pt-20 pb-30">
        <p className="display-font mx-auto text-left text-[clamp(2rem,3.5vw,4rem)] lg:px-3">
          Software I developed for Sarsys-ASFT’s Falcon, a PLC-based system with
          advanced rules and laser integration to measure runway friction and
          surface status for airports worldwide.
        </p>
        <RoleSection
          items={[
            {
              title: "ROLE",
              content: "Full-Stack Development",
              className: "lg:ml-8 w-4/5",
            },
            {
              title: "RESPONSIBILITIES",
              content:
                "Frontend Development (Vue.js, TypeScript), Backend Development (GraphQL APIs, Azure, MySQL), Real-Time Data Handling (WebSockets & Subscriptions), UI/UX Enhancements, Hardware–Software Communication, System Optimization",
              className: "w-4/5",
            },
            {
              title: "URL",
              link: "https://www.sarsys-asft.com/products/sarsys-friction-tester-evito",
              className: "lg:ml-8 w-4/5 mr-5",
            },
          ]}
        />
        <video
          src="/e-vito.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          className="xs:mt-40 mx-auto mt-20 mb-20 w-full max-w-5xl overflow-hidden rounded-xl shadow-lg"
        ></video>
        <TextBlock>
          Falcon is Sarsys-ASFT’s flagship friction tester, installed in
          specialized vehicles and used by airports worldwide. Unlike the
          portable T2Go, Falcon runs on a PLC system and integrates hydraulic
          sensors and lasers to capture both runway friction values and surface
          status depending on weather conditions.
        </TextBlock>
        <TextBlock className="xs:pb-10">
          My role in the project was full-stack development, and the process was
          highly hands-on. Each time we improved the software, we would install
          the new build directly into the Falcon car and test it on-site. This
          immediate feedback cycle allowed us to validate features in real-world
          conditions and refine the system continuously. Because aviation
          association regulations are constantly updated, Falcon’s software had
          to be flexible — rules and workflows often had to be modified to stay
          compliant.
        </TextBlock>
        <ImageBlock
          src="/falcon.png"
          alt="Falcon image"
          shadow
          text="Beyond the live measurement features, I worked on how the collected data is processed and shared. 
          The system generates detailed reports in PDF, Excel, and JSON, which can either be saved locally via USB 
          or uploaded directly to our cloud platform, MIDAS, for customers with subscriptions. This integration means operators can access their measurement data anywhere, without needing to be physically near the vehicle."
        />
        <TextBlock>
          Collaborating closely with the hardware team, sales, and airport
          operators themselves, I helped design a software system that is
          accurate, regulation-compliant, and intuitive to use in the field.
          Today, Falcon’s upgraded software supports safe and efficient runway
          operations for airports around the world.
        </TextBlock>
        <HighlightText>
          Looking back, Falcon has been a project of constant growth — for the
          product, the company, and for me personally. It’s still evolving
          today, and I’m proud that my contributions helped shape a system
          trusted globally for safe and efficient runway operations.
        </HighlightText>
        <div className="my-20 flex justify-center">
          <div className="relative w-full max-w-4xl pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 h-full w-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/xouwfRjOWzE?si=aBt_ELoSoK6QVL4Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <ButtonBlock
          label="Check it out"
          target="_blank"
          href="https://www.sarsys-asft.com/products/sarsys-friction-tester-evito"
          text="FALCON"
        />
      </div>
    </main>
  );
}

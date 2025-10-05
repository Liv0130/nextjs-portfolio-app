import { RoleSection } from "@/components/sections/RoleSection";
import { ImageBlock } from "@/components/sections/ImageBlock";
import { HighlightText } from "@/components/sections/HighlightText";
import { TextBlock } from "@/components/sections/TextBlock";
import { ButtonBlock } from "@/components/sections/ButtonBlock";

export const metadata = { title: "T2GO — Olivia" };

export default async function T2goPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-start px-20">
      <div className="animate-reveal-down bg-bg-2 flex h-[750px] w-4/5 flex-col items-center justify-end">
        <h1 className="animate-float-up display-font text-fg-on-dark text-[clamp(9rem,14vw,14rem)] tracking-[.05em] [animation-delay:600ms]">
          T2GO
        </h1>
      </div>
      <div className="h-auto w-4/5 pt-40 pb-30">
        <p className="display-font mx-auto px-3 text-left text-[clamp(2rem,3.5vw,4rem)]">
          Software I developed for Sarsys-ASFT’s T2Go, a Raspberry Pi–based
          system that collects friction data from sensors for use in both
          airports and industrial environments.
        </p>
        <RoleSection
          items={[
            {
              title: "ROLE",
              content: "Full-Stack Development",
              className: "ml-8 w-4/5",
            },
            {
              title: "RESPONSIBILITIES",
              content:
                "Frontend Development (Vue.js, TypeScript), Backend Development (GraphQL APIs, Azure, MySQL), Real-Time Data Handling (WebSockets & Subscriptions), UI/UX Enhancements, Hardware–Software Communication, System Optimization",
              className: "w-4/5",
            },
            {
              title: "URL",
              link: "https://www.sarsys-asft.com/products/t2go",
              className: "ml-8 w-4/5 mr-5",
            },
          ]}
        />
        <ImageBlock
          src="/t2go_room.png"
          alt="T2go model image"
          shadow
          text="This project was a complete redesign of Sarsys-ASFT’s T2Go, both hardware and software. The hardware was upgraded to deliver more accurate data from runway friction testing, which meant the software also had to evolve — requiring new functions, improved workflows, and re-engineered data handling."
        />
        <ImageBlock
          src="/t2go.png"
          alt="T2go model image"
          text="I was part of the project from the ground up, helping design and define the system’s functions, workflows, and overall architecture. Collaboration was central: we worked with the hardware team to align the software with the new device capabilities, and with the sales team to gather feedback directly from customers and old system users. I also joined customer meetings to understand pain points and ensure the new solution addressed real operational needs."
        />
        <ImageBlock
          src="/t2_iphone.png"
          alt="T2go phone image"
          text="Development was iterative and continuous — we rolled out new features while the system was already in production, constantly refining based on team and customer feedback."
        />
        <TextBlock>
          My role covered full-stack development: Frontend (Vue.js, TypeScript),
          Backend (GraphQL APIs, Azure, SQL), and real-time communication
          (WebSockets & GraphQL subscriptions). Beyond coding, I helped bridge
          the gap between technical architecture and user needs, ensuring the
          T2Go system became both technically robust and easy to operate in the
          field.
        </TextBlock>
        <ImageBlock src="/t2.png" alt="T2go model image" shadow />
        <HighlightText>
          One of the most rewarding outcomes of this project was seeing how the
          upgraded hardware and new software significantly improved accuracy in
          real-world runway friction testing. Customers who had used the old
          T2Go shared that the new version was not only easier to operate but
          also delivered more reliable results — exactly the outcome we had
          hoped for.
        </HighlightText>
        <div className="my-20 flex justify-center">
          <div className="relative w-full max-w-4xl pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 h-full w-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/qCHDqSFeDYY?si=H1hz1G01zOkoRy8Y"
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
          href="https://www.sarsys-asft.com/products/t2go"
          text="T2GO"
        />
      </div>
    </main>
  );
}

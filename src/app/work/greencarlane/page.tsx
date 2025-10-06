import { RoleSection } from "@/components/sections/RoleSection";
import { ImageBlock } from "@/components/sections/ImageBlock";
import { HighlightText } from "@/components/sections/HighlightText";
import { TextBlock } from "@/components/sections/TextBlock";
import { ButtonBlock } from "@/components/sections/ButtonBlock";
import Image from "next/image";

export const metadata = { title: "Greencarlane — Olivia" };

export default async function GreencarlanePage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-start md:px-20">
      <div className="animate-reveal-down bg-bg-2 xs:h-[750px] xs:justify-end xs:w-full flex h-[600px] flex-col items-center justify-center lg:w-4/5">
        <h1 className="animate-float-up display-font text-fg-on-dark xs:text-[clamp(8rem,13vw,13rem)] w-6/7 text-center text-[clamp(5.5rem,7vw,10rem)] leading-[1] tracking-[.05em] text-balance [animation-delay:600ms] lg:w-3/4 lg:text-[clamp(9rem,14vw,14rem)]">
          GREEN CAR LANE
        </h1>
      </div>
      <div className="xs:pt-40 h-auto w-4/5 pt-20 pb-30">
        <p className="display-font mx-auto text-left text-[clamp(2rem,3.5vw,4rem)] lg:px-3">
          Software I built as a frontend developer intern at Greencarlane,
          including the company website and an interactive quiz to help users
          find their ideal electric car.
        </p>
        <RoleSection
          items={[
            {
              title: "ROLE",
              content: "Frontend Development",
              className: "lg:ml-8 w-4/5",
            },
            {
              title: "RESPONSIBILITIES",
              content:
                "Building company website (React.js), Creating interactive EV quiz feature, Implementing reusable components, Optimizing performance, Collaborating with design team mockups, Improving user experience",
              className: "w-4/5",
            },
            {
              title: "URL",
              link: "https://greencarlane.com/",
              extraShortLink: true,
              className: "lg:ml-8 w-2/3 mr-0",
            },
          ]}
        />
        <ImageBlock
          src="/greencarlane.png"
          alt="Green car lane image"
          shadow
          text="My internship at Greencarlane in Copenhagen was my very first professional experience 
          as a frontend developer, and it played a huge role in shaping me into the developer I am today. 
          Greencarlane is a company dedicated to helping people transition to electric mobility, 
          and I had the chance to contribute directly to their mission."
        />
        <TextBlock>
          As a frontend developer intern, I worked directly with the team on
          their main platform and website. One of my first big assignments was
          helping to build their company website from scratch, which gave me
          hands-on experience with React.js, reusable components, and
          performance optimization. But the most exciting project I was trusted
          with was creating an interactive quiz that matched users to the right
          electric car model. This feature became part of Greencarlane’s mission
          to simplify the EV purchase journey, and it was incredibly rewarding
          to know that something I built was helping real users make informed
          decisions.
        </TextBlock>
        <ImageBlock
          src="/quiz.png"
          alt="Quiz image"
          shadow
          text="The expectations were high — the company was looking for someone proactive, 
          structured, and able to contribute from day one. I had to learn quickly, 
          working with mockups from the design team, paying attention to accessibility, 
          and thinking about SEO and data flow. Even though it was an internship, 
          the work environment pushed me to act like a real developer: 
          collaborating in a startup team, problem-solving, and coding for production."
        />
        <div className="align-center xs:py-15 flex justify-between py-6">
          <Image
            src="/quiz_sub_1.png"
            alt="Quiz Result 1"
            width={300}
            height={300}
            className="xs:mr-5 w-3/4 max-w-[40vw] rounded-lg shadow-2xl"
          />
          <Image
            src="/quiz_sub_2.png"
            alt="Quiz Result 2"
            width={300}
            height={300}
            className="w-3/4 max-w-[40vw] rounded-lg shadow-2xl"
          />
        </div>
        <HighlightText>
          Looking back, this experience was a turning point. I learned not just
          about frontend frameworks and web performance, but also about how a
          startup environment works, how to deliver features that matter, and
          how to grow into the role of a developer. It was at Greencarlane that
          I realized this career path was the right one for me — and that I
          could contribute meaningfully to projects that aim to make the world a
          little better.
        </HighlightText>
        <ButtonBlock
          label="Check it out"
          href="https://greencarlane.com/"
          text="GREENCARLANE"
          target="_blank"
        />
      </div>
    </main>
  );
}

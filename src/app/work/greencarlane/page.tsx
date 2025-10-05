import { RoleSection } from "@/components/sections/RoleSection";
import { ImageBlock } from "@/components/sections/ImageBlock";
import { HighlightText } from "@/components/sections/HighlightText";
import { TextBlock } from "@/components/sections/TextBlock";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Greencarlane — Olivia" };

export default async function GreencarlanePage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-start px-20">
      <div className="animate-reveal-down bg-bg-2 flex h-[750px] w-4/5 flex-col items-center justify-end">
        <h1 className="animate-float-up display-font text-fg-on-dark w-3/4 text-center text-[clamp(9rem,14vw,14rem)] leading-[1] tracking-[.05em] text-balance [animation-delay:600ms]">
          GREEN CAR LANE
        </h1>
      </div>
      <div className="h-auto w-4/5 pt-40 pb-30">
        <p className="display-font mx-auto px-3 text-left text-[clamp(2rem,3.5vw,4rem)]">
          Software I built as a frontend developer intern at Greencarlane,
          including the company website and an interactive quiz to help users
          find their ideal electric car.
        </p>
        <RoleSection
          items={[
            {
              title: "ROLE",
              content: "Frontend Development",
              className: "ml-8 w-4/5",
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
              className: "ml-8 w-2/3 mr-0",
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
        <div className="align-center flex justify-between py-15">
          <Image
            src="/quiz_sub_1.png"
            alt="Quiz Result 1"
            width={300}
            height={300}
            className="mr-5 w-3/4 max-w-[40vw] rounded-lg shadow-2xl"
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
        <div className="mx-auto w-1/2 pt-10">
          <p className="font-display text-center text-[clamp(2rem,4vw,4rem)]">
            Check it out
          </p>
          <div className="flex justify-center pt-4">
            <Link
              href="https://greencarlane.com/"
              target="_blank"
              className="font-display inline-block rounded-full bg-neutral-900 px-15 py-1 text-[clamp(2rem,3.3vw,3.3rem)] font-medium tracking-widest text-white transition-all duration-200 hover:bg-neutral-700"
            >
              GREENCARLANE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

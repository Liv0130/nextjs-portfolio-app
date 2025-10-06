import { RoleSection } from "@/components/sections/RoleSection";
import { ImageBlock } from "@/components/sections/ImageBlock";
import { HighlightText } from "@/components/sections/HighlightText";
import { TextBlock } from "@/components/sections/TextBlock";
import { ButtonBlock } from "@/components/sections/ButtonBlock";
import Image from "next/image";

export const metadata = { title: "Trialbee — Olivia" };

export default async function T2goPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-start md:px-20">
      <div className="animate-reveal-down bg-bg-2 xs:h-[750px] xs:justify-end flex h-[600px] w-full flex-col items-center justify-center lg:w-4/5">
        <h1 className="animate-float-up display-font text-fg-on-dark xs:text-[clamp(8rem,13vw,13rem)] w-6/7 text-center text-[clamp(5rem,8vw,9rem)] leading-[1] tracking-[.05em] text-balance [animation-delay:600ms] lg:w-3/4 lg:text-[clamp(9rem,14vw,14rem)]">
          TRIAL BEE HONEY
        </h1>
      </div>
      <div className="xs:pt-40 h-auto w-4/5 pt-20 pb-30">
        <p className="display-font mx-auto text-left text-[clamp(2rem,3.5vw,4rem)] lg:px-3">
          E2E test automation I implemented at Trialbee using Cypress for their
          Honey platform, ensuring daily stability as new features were deployed
          through CI/CD pipelines.
        </p>
        <RoleSection
          items={[
            {
              title: "ROLE",
              content: "E2E Test Automation",
              className: "lg:ml-8 w-4/5",
            },
            {
              title: "RESPONSIBILITIES",
              content:
                "Writing automated test cases (Cypress), Maintaining test framework, Daily regression testing for CI/CD releases, Ensuring platform stability, Collaborating in Scrum/Sprint environment, Contributing to QA best practices",
              className: "w-4/5",
            },
            {
              title: "URL",
              link: "https://trialbee.com/honey-platform/",
              className: "lg:ml-8 w-2/3 mr-0",
            },
          ]}
        />
        <ImageBlock
          src="/trialbee.png"
          alt="Trialbee image"
          shadow
          text="Trialbee is a Malmö-based health tech company on a mission to connect 
          patients with lifesaving clinical trials through its digital platform, Honey. 
          I joined Trialbee as a software tester intern — my very first professional experience 
          in Sweden — and it gave me invaluable insight into how software development and 
          testing work in a fast-paced, mission-driven environment."
        />
        <TextBlock>
          Every morning began with end-to-end (E2E) testing using Cypress,
          ensuring that the Honey platform remained stable as new features were
          released daily through the CI/CD pipeline. Trialbee used GitHub and
          GitLab for version control and deployment, which meant testing was a
          core part of their workflow. My work involved writing automated test
          cases, maintaining the test framework, and validating that updates
          didn’t break existing functionality.
        </TextBlock>
        <ImageBlock
          src="/honey.png"
          alt="Trialbee Honey image"
          shadow
          text="Because the team deployed new code almost every day, testing wasn’t 
          just about quality assurance — it was about keeping the platform reliable for 
          patients and researchers around the world. I learned the importance of automation 
          in agile environments, and how strong testing practices enable continuous delivery 
          without sacrificing stability."
        />
        <TextBlock>
          Beyond the technical skills, this internship also introduced me to
          scrum and sprint methodology, and gave me experience collaborating in
          a truly international, agile team. It was here that I learned how
          important communication and feedback loops are in software
          development, and how a culture of testing can directly support
          innovation.
        </TextBlock>
        <HighlightText>
          Looking back, Trialbee was where I first connected my role as a
          developer-in-training with a bigger mission: building technology that
          improves real lives. It was a formative experience that showed me how
          testing, automation, and agile practices come together in the
          development process — lessons I still carry forward today.
        </HighlightText>
        <div className="align-center flex justify-center overflow-hidden rounded-lg pt-10 pb-6">
          <Image
            src="/trialbee_campaign.png"
            alt="Trialbee Campaign"
            width={300}
            height={300}
            className="w-2/3 rounded-lg object-cover shadow-xl"
          />
        </div>
        <ButtonBlock
          label="Check it out"
          target="_blank"
          href="https://trialbee.com/honey-platform/"
          text="TRIALBEE"
        />
      </div>
    </main>
  );
}

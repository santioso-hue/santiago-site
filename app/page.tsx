import { Closing, Education, Experience, Leadership } from "@/components/about-body";
import { Hero } from "@/components/hero";
import { ProjectList } from "@/components/project-list";
import { PublicationList } from "@/components/publication-list";
import { ResearchList } from "@/components/research-list";
import { Section } from "@/components/row";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="research" title="Research">
        <ResearchList />
      </Section>
      <Section id="publications" title="Publications and talks">
        <PublicationList />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="projects" title="Projects">
        <ProjectList />
      </Section>
      <Section id="education" title="Education and honors">
        <Education />
      </Section>
      <Section id="leadership" title="Leadership and service">
        <Leadership />
      </Section>
      <Closing />
    </>
  );
}

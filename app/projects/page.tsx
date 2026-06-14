import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things I've built: hardware, simulation pipelines, and software.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionHeading
        title="Projects"
        lede="Things I've built: hardware, simulation pipelines, and software."
      />

      <div className="space-y-8">
        {projects.map((entry) => (
          <ProjectCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

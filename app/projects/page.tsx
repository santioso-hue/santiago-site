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
    <div className="mx-auto max-w-5xl">
      <SectionHeading
        title="Projects"
        lede="Things I've built: hardware, simulation pipelines, and software."
      />

      <div className="columns-1 gap-6 sm:columns-2">
        {projects.map((entry) => (
          <div key={entry.id} className="mb-6 break-inside-avoid">
            <ProjectCard entry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
}

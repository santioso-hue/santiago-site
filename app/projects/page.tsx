import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { GithubChart } from "@/components/github-chart";
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

      <section className="mt-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-fg-subtle">
          On GitHub
        </h2>
        <GithubChart username="santioso-hue" />
      </section>
    </div>
  );
}

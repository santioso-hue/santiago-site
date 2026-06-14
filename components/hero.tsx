import Image from "next/image";
import { site } from "@/content/site";
import { SocialLinks } from "./social-links";

/**
 * Home hero: sparse and content-first. Name + title + research statement on the left,
 * a small portrait on the right. Children fade/rise in with a short stagger on load
 * (disabled under prefers-reduced-motion via the .animate-rise media guard).
 */
export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
      <div className="max-w-xl">
        <p
          className="animate-rise text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle"
          style={{ animationDelay: "0ms" }}
        >
          {site.affiliation}
        </p>

        <h1
          className="animate-rise mt-4 text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl"
          style={{ animationDelay: "70ms" }}
        >
          {site.name}
        </h1>

        <p
          className="animate-rise mt-4 text-lg leading-snug text-fg-muted"
          style={{ animationDelay: "140ms" }}
        >
          {site.title}
        </p>

        <div
          className="animate-rise mt-6 space-y-4 text-base leading-relaxed text-fg-muted"
          style={{ animationDelay: "210ms" }}
        >
          {site.statement.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <p
          className="animate-rise mt-7"
          style={{ animationDelay: "280ms" }}
        >
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>

        <div
          className="animate-rise mt-3 -ml-2"
          style={{ animationDelay: "340ms" }}
        >
          <SocialLinks />
        </div>
      </div>

      <div
        className="animate-rise w-44 shrink-0 self-start sm:w-52 md:w-64 md:self-auto"
        style={{ animationDelay: "140ms" }}
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            fill
            sizes="(max-width: 768px) 176px, 256px"
            className="object-cover dark:brightness-90"
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { site } from "@/content/site";
import { SocialLinks } from "./social-links";

/**
 * Landing hero: name, a one-line bio, contact, and social links beside a photo.
 * Sits at the top of the home page, above the About content. Children fade/rise in
 * with a short stagger on load (disabled under prefers-reduced-motion).
 */
export function Hero() {
  return (
    <section className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10">
      <div className="max-w-xl flex-1">
        <h1
          className="animate-rise text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl"
          style={{ animationDelay: "0ms" }}
        >
          {site.name}
        </h1>

        <p
          className="animate-rise mt-4 text-lg leading-snug text-fg-muted"
          style={{ animationDelay: "140ms" }}
        >
          {site.tagline}
        </p>

        <p className="animate-rise mt-6" style={{ animationDelay: "210ms" }}>
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>

        <div
          className="animate-rise mt-3 -ml-2"
          style={{ animationDelay: "280ms" }}
        >
          <SocialLinks />
        </div>
      </div>

      <div
        className="animate-rise w-full shrink-0 sm:w-80"
        style={{ animationDelay: "140ms" }}
      >
        <Image
          src={site.portrait.src}
          alt={site.portrait.alt}
          width={1500}
          height={869}
          sizes="(max-width: 640px) 100vw, 320px"
          className="h-auto w-full rounded-2xl border border-border dark:brightness-90"
          priority
        />
      </div>
    </section>
  );
}

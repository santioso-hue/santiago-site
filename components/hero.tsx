import Image from "next/image";
import { site } from "@/content/site";
import { richText } from "./rich-text";
import { SocialLinks } from "./social-links";

/**
 * Landing hero: name, a one-line bio, contact, and social links beside a photo.
 * Sits at the top of the home page, above the About content.
 */
export function Hero() {
  return (
    <section className="relative isolate flex flex-col gap-10 md:flex-row md:items-center md:gap-10">
      <div className="max-w-xl flex-1">
        <h1
          className="text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl"
        >
          {site.name}
        </h1>

        <p
          className="mt-4 text-lg leading-snug text-fg-muted"
        >
          {richText(site.tagline)}
        </p>

        <p className="mt-6">
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>

        <div
          className="mt-3 -ml-2"
        >
          <SocialLinks />
        </div>
      </div>

      <div
        className="w-full shrink-0 sm:w-80"
      >
        <Image
          src={site.portrait.src}
          alt={site.portrait.alt}
          width={site.portrait.width}
          height={site.portrait.height}
          sizes="(max-width: 640px) 100vw, 320px"
          className="h-auto w-full rounded-2xl border border-border dark:brightness-90"
          priority
        />
      </div>
    </section>
  );
}

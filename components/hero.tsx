import Image from "next/image";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { newTabProps, tapTarget } from "./ui";

/** Top of the home page: name, intro, interests, and contact links beside a photo. */
export function Hero() {
  const links = [
    { label: "Email", href: `mailto:${site.email}` },
    { label: "CV", href: site.cvHref },
    ...site.socials,
  ];

  return (
    <section className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-14">
      <div className="min-w-0 max-w-[40rem] flex-1">
        <h1 className="text-display font-medium tracking-tight">{site.name}</h1>

        <div className="prose-reading mt-7 text-base">
          <p>Currently, I am {about.currently}.</p>
          <p>Previously, I was {about.previously}.</p>
          <p>
            <span className="font-medium text-fg">Research interests.</span>{" "}
            {about.interests}
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-5">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("mailto:") ? {} : newTabProps)}
                className={`${tapTarget} text-sm font-medium text-accent underline-offset-4 hover:underline`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={site.portrait.src}
        alt={site.portrait.alt}
        width={site.portrait.width}
        height={site.portrait.height}
        sizes="(max-width: 768px) 100vw, 288px"
        className="h-auto w-full max-w-72 shrink-0 rounded-lg md:mt-2 dark:brightness-90"
        priority
      />
    </section>
  );
}

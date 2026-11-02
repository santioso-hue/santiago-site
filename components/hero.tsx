import Image from "next/image";
import { FileUser, Mail } from "lucide-react";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { socialIcons } from "./icons";
import { Tooltip } from "./link-pill";
import { richText } from "./rich-text";
import { externalLinkProps } from "./ui";

/** Top of the home page: the photo with contact symbols below it; name and intro beside it. */
export function Hero() {
  const links = [
    { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
    { label: "CV", href: site.cvHref, Icon: FileUser },
    ...site.socials.map((social) => ({
      label: social.label,
      href: social.href,
      Icon: socialIcons[social.icon],
    })),
  ];

  return (
    <section className="grid items-start gap-6 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-8">
      <div>
        <Image
          src={site.portrait.src}
          alt={site.portrait.alt}
          width={site.portrait.width}
          height={site.portrait.height}
          sizes="(max-width: 768px) 100vw, 320px"
          className="h-auto w-full rounded-xl dark:brightness-90"
          priority
        />
        <ul className="mt-2 flex items-center justify-between px-3">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...externalLinkProps(href)}
                className="group relative inline-flex h-11 w-11 items-center justify-center text-accent transition-colors hover:text-fg"
              >
                <Icon className="h-[22px] w-[22px]" aria-hidden />
                <Tooltip>{label}</Tooltip>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-page font-bold tracking-tight sm:text-display">{site.name}</h1>

        <div className="prose-reading mt-3 text-[15px] [&_p]:my-2.5 [&_p]:leading-normal">
          <p>
            <strong className="font-semibold text-fg">Currently,</strong> I am{" "}
            {richText(about.currently)}.
          </p>
          <p>
            <strong className="font-semibold text-fg">Previously,</strong> I was{" "}
            {richText(about.previously)}.
          </p>
          <p>
            <strong className="font-semibold text-fg">Research Interests:</strong>{" "}
            {about.interests}
          </p>
        </div>
      </div>
    </section>
  );
}

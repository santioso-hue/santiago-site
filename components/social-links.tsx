import { site } from "@/content/site";
import { socialIcons } from "./icons";

/** Row of icon links to profiles. Used in the hero and the footer. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-1 ${className}`}>
      {site.socials.map((social) => {
        const Icon = socialIcons[social.icon];
        const external = social.href.startsWith("http");
        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              title={social.label}
              {...(external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface hover:text-accent focus-visible:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

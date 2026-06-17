import { site } from "@/content/site";
import { socialIcons } from "./icons";

/** Row of icon links to profiles, with an underline that expands from center on hover. */
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
              className="group relative inline-flex h-10 w-10 items-center justify-center text-fg-muted transition-colors hover:text-accent focus-visible:text-accent"
            >
              <Icon className="h-[18px] w-[18px]" />
              <span
                aria-hidden
                className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-accent transition-[width] duration-300 ease-out group-hover:w-5 motion-reduce:transition-none"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

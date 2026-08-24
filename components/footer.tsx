import { site } from "@/content/site";
import { SocialLinks } from "./social-links";

/** Site footer: identity + social links. Rendered at build time (server component). */
export function Footer() {
  const year = new Date().getFullYear();
  const updated = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-base font-medium">{site.name}</p>
          <p className="mt-0.5 text-sm text-fg-muted">{site.title}</p>
          <p className="mt-2 font-mono text-xs text-fg-subtle">
            © {year} {site.name} · Updated {updated}
          </p>
        </div>
        <div className="-ml-2 sm:ml-0">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

import type { ResearchEntry } from "@/content/types";
import { CardBody } from "./card-body";
import { LiteYouTube } from "./lite-youtube";
import { LogoTile } from "./logo-tile";
import { cardSurface } from "./ui";

/**
 * One research entry: institution logo, then title, meta, description, tags,
 * links, and any presentation video. The title links to a detail page only when
 * the entry has one; otherwise the card stands on its own.
 */
export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <article className={`${cardSurface} p-5 sm:p-6`}>
      <div className="flex items-start gap-4 sm:gap-5">
        {entry.logo ? (
          <LogoTile
            src={entry.logo.src}
            alt={entry.logo.alt}
            keepColor={entry.logo.keepColor}
            className="h-14 w-14 shrink-0 rounded-2xl p-2.5 sm:h-16 sm:w-16"
          />
        ) : null}

        <div className="min-w-0 flex-1">
          <CardBody
            entry={entry}
            size="lg"
            titleHref={entry.detailPage ? `/research/${entry.id}` : undefined}
          />
        </div>
      </div>

      {entry.video ? (
        <LiteYouTube
          youtubeId={entry.video.youtubeId}
          title={entry.video.title}
        />
      ) : null}
    </article>
  );
}

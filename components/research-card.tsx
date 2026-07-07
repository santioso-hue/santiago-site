import type { ResearchEntry } from "@/content/types";
import { CardBody } from "./card-body";
import { LogoTile } from "./logo-tile";
import { LiteYouTube } from "./lite-youtube";
import { cardSurface } from "./ui";

/** One research entry: optional leading institution logo, title, meta, description, tags, links, video. */
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
          <CardBody entry={entry} size="lg" />
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

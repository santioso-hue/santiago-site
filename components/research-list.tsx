import Image from "next/image";
import { research } from "@/content/research";
import type { ResearchEntry } from "@/content/types";
import { CardBody } from "./card-body";
import { LiteYouTube } from "./lite-youtube";
import { LogoMark } from "./row";

/** The entry's video, photo, render, or first figure; its institution's logo when it has none. */
function Media({ entry }: { entry: ResearchEntry }) {
  if (entry.video) {
    return (
      <figure className="m-0">
        <LiteYouTube youtubeId={entry.video.youtubeId} title={entry.video.title} />
        <figcaption className="mt-1.5 text-xs text-fg-subtle">{entry.video.title}</figcaption>
      </figure>
    );
  }
  const image = entry.photo ?? entry.visual ?? entry.figures?.[0];
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="192px"
        className="h-auto max-h-52 w-auto max-w-full rounded-xl"
      />
    );
  }
  return entry.logo ? <LogoMark logo={entry.logo} large /> : null;
}

export function ResearchList() {
  return (
    <ul className="space-y-8">
      {research.map((entry) => (
        <li key={entry.id}>
          <CardBody
            entry={entry}
            media={<Media entry={entry} />}
            wideMedia={Boolean(entry.video)}
            titleHref={entry.detailPage ? `/research/${entry.id}` : undefined}
          />
        </li>
      ))}
    </ul>
  );
}

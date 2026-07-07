import Image from "next/image";
import type { ProjectEntry } from "@/content/types";
import { CardBody } from "./card-body";
import { cardSurface } from "./ui";

/** One project card: optional cover figure on top, then title, meta, description, tags, links. */
export function ProjectCard({ entry }: { entry: ProjectEntry }) {
  return (
    <article className={`overflow-hidden ${cardSurface}`}>
      {entry.image ? (
        <div className="relative aspect-[16/9] w-full border-b border-border bg-white">
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-contain"
          />
        </div>
      ) : null}

      <div className="p-5">
        <CardBody entry={entry} />
      </div>
    </article>
  );
}

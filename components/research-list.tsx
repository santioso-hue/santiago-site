import Image from "next/image";
import { research } from "@/content/research";
import type { ResearchEntry } from "@/content/types";
import { CardBody } from "./card-body";
import { Row } from "./row";

/** The entry's render, photo, or first figure, shown small beside its text. */
function Thumbnail({ entry }: { entry: ResearchEntry }) {
  if (entry.photo) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
        <Image
          src={entry.photo.src}
          alt={entry.photo.alt}
          fill
          sizes="160px"
          className="object-cover dark:brightness-90"
        />
      </div>
    );
  }
  const image = entry.visual ?? entry.figures?.[0];
  if (!image) return null;
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="160px"
      className={`h-auto w-full rounded-lg ${entry.visual ? "" : "bg-white"}`}
    />
  );
}

export function ResearchList() {
  return (
    <ul className="space-y-12">
      {research.map((entry) => {
        const hasImage = entry.photo || entry.visual || entry.figures?.length;
        return (
          <li key={entry.id}>
            <Row
              date={entry.period}
              aside={hasImage ? <Thumbnail entry={entry} /> : undefined}
            >
              <CardBody
                entry={entry}
                titleHref={entry.detailPage ? `/research/${entry.id}` : undefined}
              />
            </Row>
          </li>
        );
      })}
    </ul>
  );
}

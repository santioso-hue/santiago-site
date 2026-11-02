import Image from "next/image";
import { projects } from "@/content/projects";
import { CardBody } from "./card-body";
import { Row } from "./row";

/** Projects as dated rows, in the same layout as research, with the figure at the side. */
export function ProjectList() {
  return (
    <ul className="space-y-12">
      {projects.map((entry) => (
        <li key={entry.id}>
          <Row
            date={entry.period}
            wideAside
            aside={
              entry.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-white">
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 224px"
                    className="object-contain"
                  />
                </div>
              ) : undefined
            }
          >
            <CardBody entry={entry} />
          </Row>
        </li>
      ))}
    </ul>
  );
}

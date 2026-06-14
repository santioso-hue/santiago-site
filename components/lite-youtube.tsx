"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lightweight YouTube embed. Shows only the thumbnail + a play button until the
 * user clicks, then swaps in the privacy-friendly (youtube-nocookie) iframe.
 * Avoids loading ~1 MB of player JS and any third-party cookies on first paint.
 */
export function LiteYouTube({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-md border border-border bg-surface">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* Static thumbnail only; the heavy player loads on click. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/20 transition-colors group-hover:bg-black/30">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-bg/90 shadow-sm transition-transform group-hover:scale-105">
              <Play className="h-6 w-6 translate-x-px text-fg" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

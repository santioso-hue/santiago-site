import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Open Graph card (1200x630) for link previews, rendered at build time in the
 * site's light palette: the name beside the portrait.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name}, ${site.title}`;

export default function OpenGraphImage() {
  const font = readFileSync(
    path.join(process.cwd(), "lib", "og", "hanken-grotesk-500.woff"),
  );
  const portrait = readFileSync(
    path.join(process.cwd(), "public", site.portrait.src),
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div
            style={{
              fontSize: 72,
              fontFamily: "Hanken Grotesk",
              color: "#171717",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#4f4f4f",
              lineHeight: 1.35,
            }}
          >
            {site.title}
          </div>
          <div style={{ marginTop: 32, fontSize: 22, color: "#3a5a78" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/alt-text -- rendered to a PNG; alt lives in the route's exported `alt` */}
        <img
          src={portraitSrc}
          width={384}
          height={320}
          style={{ borderRadius: 8, border: "1px solid #e5e5e5" }}
        />
      </div>
    ),
    { ...size, fonts: [{ name: "Hanken Grotesk", data: font, weight: 500 }] },
  );
}

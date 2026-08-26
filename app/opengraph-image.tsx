import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Open Graph card (1200x630) for link previews, rendered at build time in the
 * site's light palette: name in the serif display face beside the portrait.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.title}`;

export default function OpenGraphImage() {
  const font = readFileSync(
    path.join(process.cwd(), "lib", "og", "newsreader-500.ttf"),
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
          background: "#fbf9f5",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div
            style={{
              fontSize: 72,
              fontFamily: "Newsreader",
              color: "#1a1916",
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
              color: "#57524a",
              lineHeight: 1.35,
            }}
          >
            {site.title}
          </div>
          <div style={{ marginTop: 32, fontSize: 22, color: "#3a5a78" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
        <img
          src={portraitSrc}
          width={384}
          height={320}
          style={{ borderRadius: 20, border: "1px solid #e4ddd0" }}
        />
      </div>
    ),
    { ...size, fonts: [{ name: "Newsreader", data: font, weight: 500 }] },
  );
}

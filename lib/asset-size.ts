import fs from "node:fs";
import path from "node:path";

/**
 * Human-readable size of a file under /public (e.g. "177 KB", "1.2 MB"),
 * read at build time so labels stay current; null when the file is missing.
 */
export function publicFileSize(publicPath: string): string | null {
  try {
    const bytes = fs.statSync(path.join(process.cwd(), "public", publicPath)).size;
    return bytes >= 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(bytes / 1024)} KB`;
  } catch {
    return null;
  }
}

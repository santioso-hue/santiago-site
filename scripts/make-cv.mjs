// Emits a minimal but valid single-page placeholder CV PDF with a correct xref table.
// Replace public/cv.pdf with your real CV.

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const content =
  "BT /F1 26 Tf 72 700 Td (Santiago Osorio Jurado) Tj ET\n" +
  "BT /F1 13 Tf 72 668 Td (Curriculum Vitae) Tj ET\n" +
  "BT /F1 11 Tf 72 640 Td (Placeholder PDF - replace public/cv.pdf with your real CV.) Tj ET";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = pdf.length;
const size = objects.length + 1;
pdf += `xref\n0 ${size}\n0000000000 65535 f \n`;
for (const off of offsets) {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${size} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

// latin1 so string length equals byte length (all content is ASCII -> xref offsets stay valid).
writeFileSync(resolve(root, "public/cv.pdf"), pdf, "latin1");
console.log("wrote public/cv.pdf");

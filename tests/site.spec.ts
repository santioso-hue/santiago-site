import { expect, test } from "@playwright/test";

const PAGES = ["/", "/research/hc-tdcs", "/projects/thermal-stimulator"];
const WIDTHS = [360, 375, 1280];
const SCHEMES = ["light", "dark"] as const;

for (const colorScheme of SCHEMES) {
  for (const width of WIDTHS) {
    test.describe(`${width} px, ${colorScheme}`, () => {
      test.use({ colorScheme, viewport: { width, height: 800 } });

      for (const path of PAGES) {
        test(`${path} has no overflow or console errors`, async ({ page }) => {
          const errors: string[] = [];
          page.on("console", (message) => {
            if (message.type() === "error") errors.push(message.text());
          });
          page.on("pageerror", (error) => errors.push(error.message));

          await page.goto(path, { waitUntil: "networkidle" });

          const overflow = await page.evaluate(
            () =>
              document.documentElement.scrollWidth -
              document.documentElement.clientWidth,
          );
          expect(overflow).toBeLessThanOrEqual(0);
          expect(errors).toEqual([]);
        });
      }

      test("nav fits without scrolling", async ({ page }) => {
        await page.goto("/");
        const nav = page.getByRole("navigation", { name: "Primary" });
        const clipped = await nav.evaluate(
          (el) => el.scrollWidth - el.clientWidth,
        );
        expect(clipped).toBeLessThanOrEqual(0);
        await expect(nav.getByRole("link", { name: "CV" })).toBeVisible();
      });
    });
  }
}

test("content is visible without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("strong", { hasText: "Currently," })).toBeVisible();
  await expect(page.locator("strong", { hasText: "Previously," })).toBeVisible();
  await expect(page.locator("strong", { hasText: "Research Interests:" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
  await context.close();
});

test("symbol links keep their names for screen readers", async ({ page }) => {
  await page.goto("/");
  for (const name of ["Email", "GitHub", "LinkedIn", "Paper", "Details", "Poster", "Code"]) {
    await expect(page.locator("main").getByRole("link", { name, exact: true }).first()).toBeVisible();
  }
});

test("images keep their natural proportions", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const images = page.locator("main img:not([aria-hidden])");
  await images.evaluateAll((els) =>
    els.forEach((el) => ((el as HTMLImageElement).loading = "eager")),
  );
  await page.waitForFunction(() =>
    [...document.querySelectorAll<HTMLImageElement>("main img:not([aria-hidden])")].every(
      (img) => img.complete && img.naturalWidth > 0,
    ),
  );
  const ratios = await images.evaluateAll((els) =>
    (els as HTMLImageElement[]).map((img) => {
      const box = img.getBoundingClientRect();
      return { src: img.src, natural: img.naturalWidth / img.naturalHeight, shown: box.width / box.height };
    }),
  );
  expect(ratios.length).toBeGreaterThan(5);
  for (const { src, natural, shown } of ratios) {
    expect(Math.abs(shown / natural - 1), src).toBeLessThan(0.02);
  }
});

test("repeated sections and tag chips are gone", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Talks and posters" })).toHaveCount(0);
  const titles = await page.locator("#research h3").allTextContents();
  expect(titles.join()).not.toContain("Transverse polarization");
  await expect(page.locator("#publications")).toContainText("Transverse polarization");
});

test("every project has a page and its posters load", async ({ page, request }) => {
  await page.goto("/");
  const hrefs = await page.locator('#projects a[href^="/projects/"]').evaluateAll((els) =>
    els.map((el) => el.getAttribute("href")!),
  );
  expect(new Set(hrefs).size).toBe(5);
  for (const href of new Set(hrefs)) {
    expect((await request.get(href)).status(), href).toBe(200);
  }
  const posters = await page.locator('main a[href^="/posters/"]').evaluateAll((els) =>
    els.map((el) => el.getAttribute("href")!),
  );
  expect(posters.length).toBeGreaterThanOrEqual(4);
  for (const href of new Set(posters)) {
    expect((await request.get(href)).status(), href).toBe(200);
  }
});

test("the Berkeley video loads its player only on click", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('iframe[src*="youtube"]')).toHaveCount(0);
  await page.getByRole("button", { name: /^Play video/ }).click();
  await expect(page.locator('iframe[src*="youtube"]')).toHaveCount(1);
});

test("old pages redirect to their sections", async ({ page }) => {
  for (const section of ["research", "projects", "publications"]) {
    await page.goto(`/${section}`);
    await expect(page).toHaveURL(new RegExp(`/#${section}$`));
    await expect(page.locator(`#${section}`)).toBeVisible();
  }
});

test("anchors land below the nav", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Experience" }).click();
  await expect(page).toHaveURL(/#experience$/);
  const navBottom = await page.locator("body > header").evaluate((el) => el.getBoundingClientRect().bottom);
  await expect
    .poll(() => page.locator("#experience-heading").evaluate((el) => el.getBoundingClientRect().top))
    .toBeGreaterThanOrEqual(navBottom);
  await expect(page.getByRole("link", { name: "Experience" }).first()).toHaveAttribute("aria-current", "location");
});

test("lightbox moves focus in, makes the page inert, and returns focus", async ({
  page,
}) => {
  await page.goto("/research/hc-tdcs");
  const trigger = page.getByRole("button", { name: /^Enlarge figure/ }).first();
  await trigger.click();

  const close = page.getByRole("button", { name: "Close enlarged figure" });
  await expect(close).toBeFocused();
  expect(await page.locator("body > main").evaluate((el) => (el as HTMLElement).inert)).toBe(true);

  await page.keyboard.press("Escape");
  await expect(close).toBeHidden();
  await expect(trigger).toBeFocused();
  expect(await page.locator("body > main").evaluate((el) => (el as HTMLElement).inert)).toBe(false);
});

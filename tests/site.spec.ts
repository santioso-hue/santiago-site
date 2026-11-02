import { expect, test } from "@playwright/test";

const PAGES = ["/", "/research/hc-tdcs", "/publications"];
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
  await expect(page.getByText("Currently, I am")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
  await context.close();
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

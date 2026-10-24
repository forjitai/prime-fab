import { test, expect, type Page } from "@playwright/test";
import { site } from "../../config/site";
import { catalog } from "../../content/catalog";

const PAGES = ["/", "/about", "/products", "/products/upvc-windows", "/products/upvc-doors", "/gallery", "/contact", "/site-map", "/privacy-policy"];

/** Collect page errors and failed same-origin requests (Google embeds excluded: unreachable in CI). */
function watch(page: Page) {
  const problems: string[] = [];
  page.on("pageerror", (e) => problems.push(`pageerror: ${e.message}`));
  page.on("response", (r) => {
    if (r.status() >= 400 && r.url().startsWith("http://localhost")) problems.push(`${r.status()} ${r.url()}`);
  });
  return problems;
}

const isMobile = (page: Page) => (page.viewportSize()?.width ?? 1440) < 1024;

test.describe("every page", () => {
  for (const path of PAGES) {
    test(`${path} renders cleanly`, async ({ page }) => {
      const problems = watch(page);
      const res = await page.goto(path, { waitUntil: "networkidle" });
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page).toHaveTitle(/PRIME FAB/);
      expect(await page.locator('meta[name="description"]').getAttribute("content")).toBeTruthy();
      expect(await page.locator('link[rel="canonical"]').getAttribute("href")).toMatch(new RegExp(`${path === "/" ? "" : path}$`));
      // No horizontal scroll
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      // No broken images
      expect(await page.evaluate(() => [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).length)).toBe(0);
      // Never shows reference-site branding
      expect(await page.locator("body").innerText()).not.toMatch(/simta/i);
      // JSON-LD parses
      for (const s of await page.locator('script[type="application/ld+json"]').allTextContents()) JSON.parse(s);
      // Business details present in footer
      const footer = page.locator("footer");
      await expect(footer).toContainText(site.address.full);
      await expect(footer).toContainText(site.contact.phoneDisplay);
      // Refresh keeps working
      expect((await page.reload())?.status()).toBe(200);
      expect(problems).toEqual([]);
    });
  }
});

test("titles and descriptions are unique", async ({ page }) => {
  const titles = new Set<string>();
  const descs = new Set<string>();
  for (const path of PAGES) {
    await page.goto(path);
    titles.add(await page.title());
    descs.add((await page.locator('meta[name="description"]').getAttribute("content")) ?? "");
  }
  expect(titles.size).toBe(PAGES.length);
  expect(descs.size).toBe(PAGES.length);
});

test("navigation reaches every page", async ({ page }) => {
  await page.goto("/");
  for (const item of site.nav) {
    if (isMobile(page)) {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("navigation", { name: "Mobile" }).getByRole("link", { name: item.label, exact: true }).click();
      await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden();
    } else {
      await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: item.label, exact: true }).click();
    }
    await expect(page).toHaveURL(item.href === "/" ? /\/$/ : new RegExp(`${item.href}$`));
    // Next.js 16 keeps the previous route mounted but hidden (for instant back/forward),
    // so check the VISIBLE h1. Server HTML always has exactly one (checked above).
    await expect(page.locator("h1:visible")).toHaveCount(1);
  }
});

test("mobile menu opens, traps scroll and closes on Escape", async ({ page }) => {
  test.skip(!isMobile(page), "mobile/tablet only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("footer links all resolve", async ({ page, request }) => {
  await page.goto("/");
  const hrefs = await page.locator("footer a[href^='/']").evaluateAll((as) => as.map((a) => a.getAttribute("href")!));
  expect(hrefs.length).toBeGreaterThanOrEqual(6);
  for (const h of new Set(hrefs)) expect((await request.get(h)).status(), h).toBe(200);
});

test("call, WhatsApp and directions links are correct", async ({ page }) => {
  await page.goto("/contact");
  const tel = page.locator(`a[href="${site.contact.phoneHref}"]`);
  expect(await tel.count()).toBeGreaterThan(0);
  expect(site.contact.phoneHref).toBe("tel:+918861555722");

  const wa = page.locator(`a[href="${site.contact.whatsappHref}"]`);
  expect(await wa.count()).toBeGreaterThan(0);
  await expect(wa.first()).toHaveAttribute("target", "_blank");
  await expect(wa.first()).toHaveAttribute("rel", /noopener/);
  expect(site.contact.whatsappHref).toMatch(/^https:\/\/wa\.me\/91\d{10}$/);

  const maps = page.getByRole("link", { name: "Get directions on Google Maps" }).first();
  const href = await maps.getAttribute("href");
  expect(href).toContain("https://www.google.com/maps/dir/?api=1&destination=");
  expect(decodeURIComponent(href!)).toContain("387X+RM9");

  // Floating WhatsApp button on every page
  await expect(page.getByRole("link", { name: /Chat with PRIME FAB on WhatsApp/ })).toBeVisible();
});

test("enquiry form validates and never fakes success", async ({ page }) => {
  await page.goto("/contact");
  const form = page.locator("main form");
  await form.getByRole("button", { name: "Send enquiry" }).click();
  await expect(form.locator("[aria-invalid=true]")).toHaveCount(3); // name, phone, message
  await expect(form.getByText("Enter a 10-digit Indian mobile number.")).toBeVisible();

  await form.getByLabel("Name").fill("Test Customer");
  await form.getByLabel("Mobile number").fill("12345");
  await form.getByLabel(/Email/).fill("not-an-email");
  await form.getByLabel("Your requirement").fill("Need a quote for a job");
  await form.getByRole("button", { name: "Send enquiry" }).click();
  await expect(form.locator("#contact-phone")).toHaveAttribute("aria-invalid", "true");
  await expect(form.locator("#contact-email")).toHaveAttribute("aria-invalid", "true");
  await expect(form.getByLabel("Name")).toHaveValue("Test Customer"); // values kept

  await form.getByLabel("Mobile number").fill("98765 43210");
  await form.getByLabel(/Email/).fill("");
  await form.getByRole("button", { name: "Send enquiry" }).click();
  // No backend configured → honest fallback message, no success state
  await expect(form.getByRole("alert")).toContainText("call or WhatsApp");
  await expect(page.getByText("Enquiry sent.")).toHaveCount(0);
});

test("homepage shows business profile and quick links", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Welcome to PRIME FAB");
  await expect(page.getByRole("heading", { name: "Business profile" })).toBeVisible();
  await expect(page.locator("dl")).toContainText("uPVC windows and doors");
  // Unverified profile fields must stay hidden until supplied
  if (!site.profile.gst) await expect(page.locator("dl")).not.toContainText("GST");
  const quick = page.getByRole("navigation", { name: "Popular products" }).getByRole("link");
  expect(await quick.count()).toBe(8);
});

test("every catalogue item has a block with quote button and working anchor", async ({ page }) => {
  for (const cat of ["upvc-windows", "upvc-doors"]) {
    await page.goto(`/products/${cat}`);
    for (const item of catalog.filter((c) => c.category === cat)) {
      const block = page.locator(`article#${item.slug}`);
      await expect(block).toHaveCount(1);
      await expect(block.getByRole("heading", { level: 2 })).toHaveText(item.name);
      await expect(block.getByRole("button", { name: "Get Best Quote" })).toBeVisible();
      await expect(block.getByRole("link", { name: "Request callback" })).toHaveAttribute("href", site.contact.phoneHref);
      // No invented price: shows "Price on request" unless a price is set
      await expect(block).toContainText(item.price ? item.price : "Price on request");
    }
  }
});

test("Get Best Quote opens dialog with product pre-selected", async ({ page }) => {
  const item = catalog.find((c) => c.category === "upvc-doors")!;
  await page.goto(`/products/upvc-doors`);
  await page.locator(`article#${item.slug}`).getByRole("button", { name: "Get Best Quote" }).click();
  const dlg = page.getByRole("dialog", { name: "Get Best Quote" });
  await expect(dlg).toBeVisible();
  await expect(dlg).toContainText(`For: ${item.name}`);
  await expect(dlg.locator("#quote-type")).toHaveValue(item.name);
  // Submitting without backend is honest
  await dlg.getByLabel("Name").fill("Test");
  await dlg.getByLabel("Mobile number").fill("9876543210");
  await dlg.getByLabel("Your requirement").fill("Need 3 of these for my house");
  await dlg.getByRole("button", { name: "Send enquiry" }).click();
  await expect(dlg.getByRole("alert")).toContainText("call or WhatsApp");
  await dlg.getByRole("button", { name: "Close" }).click();
  await expect(dlg).toBeHidden();
});

test("sidebar and quick links jump to the right product", async ({ page }) => {
  const item = catalog[1];
  await page.goto("/");
  await page.getByRole("navigation", { name: "Popular products" }).getByRole("link", { name: item.name, exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`/products/${item.category}#${item.slug}$`));
  await expect(page.locator(`article#${item.slug}`)).toBeInViewport();
});

test("skip link is first keyboard stop and moves focus to main", async ({ page }) => {
  test.skip(isMobile(page), "keyboard test on desktop");
  await page.goto("/about");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("unknown URL shows custom 404", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("This page doesn't exist");
  // Next adds its own noindex; pre-launch the site-wide noindex is present too. All must say noindex.
  const robots = await page.locator('meta[name="robots"]').evaluateAll((m) => m.map((x) => x.getAttribute("content")));
  expect(robots.length).toBeGreaterThan(0);
  for (const c of robots) expect(c).toMatch(/noindex/);
});

test("unknown product URL is a real 404", async ({ page }) => {
  expect((await page.goto("/products/aluminium-gates"))?.status()).toBe(404);
});

test("robots.txt and sitemap.xml are served", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  const body = await robots.text();
  expect(body).toMatch(/User-Agent: \*/i);
  if (site.allowIndexing) expect(body).toContain("Sitemap:");
  else expect(body).toMatch(/Disallow: \/\s*$/m); // pre-launch: blocked

  const sm = await request.get("/sitemap.xml");
  expect(sm.status()).toBe(200);
  const xml = await sm.text();
  for (const p of PAGES) expect(xml).toContain(`<loc>${new URL(p, site.url).toString()}</loc>`);
  expect(xml).not.toContain("style-guide");
});

test("style guide is not indexable", async ({ page }) => {
  await page.goto("/style-guide");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

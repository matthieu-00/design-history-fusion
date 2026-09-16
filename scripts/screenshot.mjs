import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(repo, "examples", "screenshots");
const pages = [
  "2-swiss-fintech-onboarding.html",
  "4-art-deco-ecommerce-options.html",
  "5-1970s-record-label-hero.html",
  "6-2010s-saas-dashboard.html",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const file of pages) {
  const url = pathToFileURL(path.join(repo, "examples", file)).href;
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => setTimeout(resolve, 400));
  const dest = path.join(outDir, file.replace(/\.html$/, ".png"));
  await page.screenshot({ path: dest, fullPage: true });
  console.log("wrote", dest);
}

await browser.close();

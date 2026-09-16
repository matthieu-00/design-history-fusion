/**
 * Copy the canonical Claude skill folder into the Claude Code, Cursor,
 * and OpenCode package locations. Edit design-history-fusion/ only, then run:
 *   node scripts/sync-packages.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(repoRoot, "design-history-fusion");
const destinations = [
  path.join(repoRoot, ".claude", "skills", "design-history-fusion"),
  path.join(repoRoot, ".cursor", "skills", "design-history-fusion"),
  path.join(repoRoot, ".opencode", "skills", "design-history-fusion"),
];

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync(path.join(source, "SKILL.md"))) {
  console.error("Canonical skill missing: expected design-history-fusion/SKILL.md");
  process.exit(1);
}

for (const dest of destinations) {
  fs.rmSync(dest, { recursive: true, force: true });
  copyDir(source, dest);
  console.log(`synced ${path.relative(repoRoot, dest)}`);
}

# Contributing

The skill body lives in [`design-history-fusion/`](design-history-fusion/). That folder is the canonical Claude skill (`SKILL.md` + `references/` + `evals/`). Cursor and OpenCode packages are byte-identical copies of it, produced by the sync script — do not edit those copies by hand, and do not paraphrase the skill into a parallel document.

## Canonical vs packaged copies

| Location | Role |
|---|---|
| `design-history-fusion/` | Canonical skill. Edit here. |
| `.claude/skills/design-history-fusion/` | Claude Code project skill (synced copy) |
| `.cursor/skills/design-history-fusion/` | Cursor project skill (synced copy) |
| `.opencode/skills/design-history-fusion/` | OpenCode project skill (synced copy) |
| `.cursor/rules/design-history-fusion.mdc` | Cursor rule. It **points at** the skill; it does not restate the references. |

After changing anything under `design-history-fusion/`, run:

```bash
node scripts/sync-packages.mjs
```

That recopies `SKILL.md`, `references/`, and `evals/` into the three package locations so they cannot drift.

## `references/timeline.md` is a living file

`timeline.md` is a scaffold for movements and principles, not a frozen encyclopedia. If a conversation surfaces a well-sourced, durable fact (confirmed via `web_search` against a primary archive listed in `references/sources.md`) that would improve the scaffold, append it under the relevant decade rather than re-deriving it every time.

**When you edit `timeline.md`, bump the `Last reviewed` date at the top of that file** (year-month is enough, e.g. `2026-09`). That date is how later sessions know the file was touched; leaving it stale makes current-decade claims look fresher than they are.

Do not treat the last-reviewed date as a license to skip live verification. Per `SKILL.md`, anything from the last ~3 years should still be checked via `web_search` — the bundled file will lag.

## What not to change casually

- Do not invent typeface names, designers, or exact years. If a fact is not in `timeline.md` and was not verified this session, say so.
- Fusion example pages under `examples/` are demonstrations of Mode 2 output. If you add or regenerate one, keep the Layer Map, Token Sheet, and Accessibility Verification tables from `references/output-templates.md` in the HTML — the visual alone is not the deliverable.
- Eval 5 (`examples/5-1970s-record-label-hero.html`) is a stacking-order regression (ornament vs. headline). Screenshot review of `examples/screenshots/5-1970s-record-label-hero.png` is a human check, not an automated pass/fail.

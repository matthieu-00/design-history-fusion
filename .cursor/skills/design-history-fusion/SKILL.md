---
name: design-history-fusion
description: Use this skill whenever the user asks about graphic design or typography history (1900–present), wants a period style identified from an image/description, or wants to blend a historical design movement (Art Deco, Bauhaus, Swiss/International Style, Memphis, grunge, Y2K, neubrutalism, etc.) with a modern UI, app, website, brand identity, poster, package, or editorial layout. Trigger on phrases like "vintage meets modern," "old and new," "retro but usable," "period-accurate," "what typeface/movement is this," "give me some options/directions," or any request to critique, redesign, or generate a mockup that should carry a specific historical design DNA. Always consult this skill before making typography or layout claims about a specific decade/movement — do not rely on memory alone for dates, typeface names, or attributions. Current-decade (2020s) claims move even faster than older eras — verify anything from the last ~3 years via web_search rather than the bundled file, which will lag.
---

# Design History Fusion

Combines historically accurate design/typography research with modern UI/UX application. Two modes: **Research** (answer questions accurately, citing sources) and **Fusion** (apply historical DNA to a modern deliverable, then render it).

## Before doing anything else

1. Read `references/timeline.md` — condensed decade-by-decade data (movements, typography, grid/color/layout principles, key figures).
2. If the task needs a specific typeface's exact release year, designer, or a specific hex/measurement — do not guess from the bundled file. Use `web_search` against the sources listed in `references/sources.md` (Fonts In Use, Letterform Archive, Design Reviewed, TM Research Archive) to verify before stating it as fact. The bundled reference is a scaffold for *movements and principles*, not a citation-grade fact database.
3. For applied/visual work (mockups, redesigns), also read `references/fusion-playbook.md` and `references/output-templates.md` before writing any code — output structure (layer map, token sheet, accessibility table) is templated, not improvised per session.
4. For applied visual work also check `/mnt/skills/public/frontend-design/SKILL.md` for current styling/token constraints — fusion output still has to be usable, real UI, not a pastiche. **If that skill isn't present in this environment** (it's bundled with some Claude surfaces but not guaranteed on every install), fall back to standard web accessibility/contrast practice and note in the output that the frontend-design cross-check was unavailable rather than silently skipping it.
5. Before finalizing any Fusion output (2a or 2b), run the self-check in `references/anti-slop.md`. This is not optional polish — an era choice that lands on the same cliché every time isn't actually doing the historical research this skill exists for.

## Mode 1 — Research

Someone asks a factual/historical question ("what defined Swiss typography," "when did Futura come out," "show me 1970s poster examples").

- Answer from `references/timeline.md` and `references/typography-atlas.md` for movement-level and category-level claims.
- Verify specific dates/names/attributions via web_search before stating them if precision matters (a person is about to use this in a deliverable, cite a source, or the claim is a specific number/name).
- If the person wants to *see* examples, point them to the specific archive and query to run there (Fonts In Use is best for typeface-in-context; Design Reviewed for scanned artefacts; TM Research Archive for 1970s–90s Swiss). Don't fabricate example images — direct to the real archive or use image_search for public-domain/period photography.
- Keep answers precise and sourced. No padding.

## Choosing 2a vs 2b — decision procedure

Don't default to asking "what era do you want?" before starting — reacting to a concrete proposal is faster for the user than answering an abstract question, and matches the general bias toward proceeding with a stated assumption over front-loading questions. Work through these in order:

1. **Era named explicitly** ("Swiss style," "make it feel 70s") → 2a, no question, no options — they already decided.
2. **Options explicitly requested** ("give me a few directions," "explore," "show me options") → 2b, always.
3. **No era named — assess stakes:**
   - **Low stakes** (exploration, a practice round, "just try something," no signal this ships as-is) → 2a. Infer the best-fitting era from the brief, state the assumption plainly in the output, proceed without asking. Wrong guesses cost one redirect message; that's cheap enough not to gate on.
   - **High stakes** (real business, "final," "launching," client-facing, a brand identity decision, anything explicitly costly to reverse) → offer 2b **unprompted**. Committing one era silently on a decision the person has to live with is presumptuous even if they never used the word "options." This is not the same as asking a clarifying question first — still produce the three real directions per the 2b format, just without being asked; that's the deliverable, not a question blocking one.
   - **Genuinely unclear which bucket** → default to low-stakes behavior (2a with a stated assumption). Over-asking costs more goodwill than an occasional unnecessary redirect.

## Mode 2a — Fusion, single direction

## Mode 2b — Fusion, three directions

When triggered (see decision procedure above), the three options must differ on more than surface color — vary at least one of these axes per option so they're genuinely distinct choices, not three skins of the same idea:
- **Anchor era** — pick three that would plausibly suit the brief for different reasons, not three at random. State the reason each one is in contention.
- **Intensity** — one subtle/nod-only, one confident/clearly-legible, one maximalist/full-signal — even holding era constant, this changes the deliverable a lot.
- **Which layer carries the signal** — e.g., one option puts the historical DNA in typography, another in color/ornament only with fully modern type, another in grid/motion. This is often the most interesting axis because it produces genuinely different-looking results from the *same* era.

For each of the three, give: era/anchor name, one-line rationale for why it fits this brief specifically, and a compact layer-map summary (typography / color / grid / ornament / motion — one clause each, not the full worked-example format). Keep each option to 4-6 lines total. Do not build all three — describe them, then let the person pick (or say "combine elements of 1 and 3," which is a legitimate response to expect) before rendering anything.

Once they pick, proceed through Mode 2a steps 2 onward for the chosen direction only.

## Fusion mechanics (used by both 2a and 2b)

This is a layered translation problem, not a single "pick a vibe" step. Historical DNA gets distributed across independent layers, and each layer can pull from a *different* era or stay fully modern — that's what makes the blend feel intentional instead of costume-y.

### Step-by-step

1. **Clarify the brief** if not already given (don't over-ask — infer sensible defaults and state them):
   - What's being designed (app screen, website, poster, packaging, editorial spread, brand identity)?
   - Anchor era/movement (or: "you pick based on X mood/industry")?
   - How strong should the historical signal be — subtle nod, or full period pastiche? (This matters more than era choice.)

2. **Pull the era's principles** from `references/timeline.md`: typography traits, grid logic, color, texture/ornament, motion (if applicable — most pre-1990 movements have no native motion language, which is itself a design decision point for the fusion).

3. **Run the Layer Map** from `references/fusion-playbook.md` — decide, layer by layer, which era each one draws from:
   - Typography (display vs. body can split eras — e.g., period display face + contemporary variable-font body face for accessibility)
   - Color system
   - Grid/spatial rhythm
   - Texture/ornament/iconography
   - Interaction & motion (near-always modern; historical movements predate screens)
   - Accessibility/usability layer (always modern — never sacrifice contrast, tap targets, or legibility for period accuracy; note in `fusion-playbook.md` for the standard workarounds)

4. **State the blend explicitly** before building: "Typography anchored in [era], grid/spacing modern, color from [era], motion modern." This is the spec — confirm or adjust with the user if the brief was ambiguous, otherwise proceed.

5. **Run the anti-slop self-check** (`references/anti-slop.md`) — confirm the era choice isn't the table's "overused cliché" row without a stated reason, and confirm the palette/layout wouldn't pass for a generic AI-design default regardless of era.

6. **Render it.** Use the frontend-design skill's constraints for actual code/tokens. Use `visualize:show_widget` for a quick inline exploration, or full artifact/file creation (per file-creation rules) if it's a deliverable the person will keep/iterate on. Fill out the Fusion Spec template from `references/output-templates.md` alongside the render — layer map, token sheet, accessibility verification. This isn't optional documentation; the token sheet is what makes the render buildable by someone else, and the accessibility table is what proves it (rather than asserts it).

7. **Annotate the output** with a short rationale mapping each visual choice back to its era and source (2–4 lines, not an essay) — this is what makes the fusion feel designed rather than decorative.

## If connectors are available

- **Design tool (e.g. Figma) connected**: if the brief is to redesign or extend an *existing* project rather than start fresh, pull the current file's tokens/components first — don't propose a fusion in a vacuum when real constraints already exist. Reconcile the Layer Map against what's already there (existing type scale, spacing system) rather than replacing it wholesale unless the brief calls for a full rebrand.
- **Project tracker connected**: for a multi-step fusion (research → options → build → handoff), offer to file the chosen direction and outstanding token/accessibility items as tickets rather than leaving them only in chat.
- **Knowledge base / wiki connected**: if the org already has brand or design-system documentation, check it before proposing an anchor era — a fusion that contradicts an existing brand guideline needs to be flagged, not silently overridden.
- None of these are required to use the skill — text brief, fetched URL, or uploaded image are all sufficient inputs on their own.

## Pairs well with

This skill produces a design direction and a build-ready token sheet — it does not produce an engineering handoff spec (breakpoint behavior, full interaction-state matrix, animation easing curves per component). For that, once a fusion direction is finalized, hand off to the `design:design-handoff` skill using this skill's Token Sheet and Layer Map as its input. Similarly, for a full accessibility audit beyond the fusion-stage checklist (keyboard nav, screen reader behavior on a finished build), use `design:accessibility-review`. This skill owns the *direction*; those own the *implementation verification*. **Both are optional plugin skills** — they require the `design` plugin to be installed and won't exist in every environment. If unavailable, say so and stop at this skill's own Token Sheet / Accessibility Verification output rather than assuming the handoff happened.

## Notes on rigor

- Never invent a typeface name, designer, or date. If unsure and web_search isn't available or comes up empty, say so and give the closest verifiable category instead (e.g., "a geometric sans in the Futura/Kabel family" rather than inventing a specific name).
- Movements overlap and revive constantly (e.g., Memphis-influenced work in the 2020s) — when asked "what decade is this," give the closest anchor plus the honest caveat that revivals exist.
- Treat `references/timeline.md` as a living file — if research in a conversation turns up something durable and well-sourced, offer to append it (see maintenance note at the bottom of that file).

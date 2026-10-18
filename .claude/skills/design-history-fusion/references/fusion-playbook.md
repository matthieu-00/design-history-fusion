# Fusion Playbook

Core idea: a "vintage meets modern" result doesn't come from picking one era and skinning a UI in it — that produces a costume, not a design. It comes from splitting the design into independent layers and choosing, per layer, whether it draws from the historical anchor or from contemporary practice. The mix is the design decision.

## The Layer Map

For every fusion brief, decide each of these explicitly:

1. **Display typography** — often the strongest, safest place to put historical signal. High-impact, low-legibility-risk since it's usually large text.
2. **Body/UI typography** — almost always stays modern (humanist sans, variable font, proven web legibility) unless the whole product is intentionally a period-piece experience (e.g., a museum exhibit site). Historical display faces at small sizes/low contrast fail real users.
3. **Color system** — can lean hard into the era; translate to modern contrast-safe tokens (see Accessibility below), don't just lift period colors as-is if they fail WCAG contrast at the sizes you're using them.
4. **Grid & spatial rhythm** — Swiss-style grid logic actually ports beautifully to responsive UI (it was already a systems-thinking approach). Art Nouveau/Deco ornamental framing ports less directly — translate "frame as ornament" into a modern equivalent like a bordered card component or section divider, not a literal antique border.
5. **Texture/ornament/iconography** — the layer with the most freedom. Period motifs (Deco sunbursts, Memphis squiggles, Constructivist diagonals) work well as background pattern, icon style, or accent graphics without compromising usability.
6. **Interaction & motion** — modern when the anchor predates the web. Pre-1990 movements have no native motion language; inventing "period-accurate motion" for them is fabrication, not research. From the 2000s on, use the era's own screen motion when it has one (Material's elevation and easing are era-native, not a costume). Giving a pre-web visual a contemporary motion is a valid fusion move.
7. **Accessibility & usability** — never a historical layer. Always resolve to current standards regardless of what other layers are doing. For spacing, focus, and elevation on screen work, borrow from Material, Carbon, Primer, or the GOV.UK Design System. Those are production references, not historical sources.

## Accessibility guardrails (non-negotiable regardless of era)
Never a historical layer — always resolves to current standards. Don't just assert this; verify it. Every single-direction screen fusion runs the **Accessibility Verification** table from `references/output-templates.md` (WCAG 1.4.3, 1.4.11, 2.4.7, 2.5.8 at AA, with 2.5.5 / 44px as the recommended AAA target, plus reduced-motion) before being presented as final. If a period color pairing fails contrast, keep the hue family but adjust value/saturation until it passes, and log that adjustment in the Rationale section — a documented decision, not a silent compromise.

## Stacking order (ornament vs. type)
The Layer Map assigns each layer a *source* (era or modern) but that says nothing about z-axis placement, and ornament is the layer most likely to visually collide with type — sunbursts, squiggles, diagonals, and photographic texture are exactly the elements that get placed behind or around headlines. Resolve this explicitly, not by accident:
- Ornament/icon/texture elements never share a bounding box with text unless one of two things is true and stated: (a) the ornament sits at a documented lower z-index than the text with nothing degrading legibility, or (b) a scrim/opacity/contrast treatment is applied so the text's contrast ratio still passes WCAG 1.4.3 *as rendered with the ornament behind it* — not just against the nominal background token in isolation.
- Check computed contrast against the actual rendered composite (text over ornament over background), not the background color alone. A palette can pass the Token Sheet's contrast check and still fail in practice if a decorative shape sits under a headline.
- When in doubt, keep ornament fully clear of text bounding boxes (edge/corner/section-divider placement) rather than relying on a scrim to rescue an overlap — it's the more robust default and the one used in the worked examples above.

## Token Sheet — always produced alongside a single-direction fusion
A layer map is a design decision; a token sheet is what makes it buildable. Every Mode 2a output includes the Token Sheet table from `references/output-templates.md` — real hex values, a spacing scale, radius, shadow/elevation (or an explicit "none — this era doesn't use elevation"), motion duration/easing, and type size, line-height, and letter-spacing. Cite the historical face and load a Google Fonts stand-in in the same category (see `references/sources.md`). Spacing, radius, and motion stay modern for a pre-web anchor. From the 2000s on, those tokens may follow that era's own screen system.

## Worked examples

**Brief: "Fintech app, Swiss Style meets modern"**
- Display: Neo-grotesque (era-native — Swiss Style *is* neo-grotesque, no translation needed)
- Body: same neo-grotesque family, modern weight range
- Color: primary + neutral restraint, updated to a modern accessible palette (keep the restraint, adjust exact values)
- Grid: strict modular grid — ports directly, this is the easiest translation in the whole system
- Ornament: minimal, geometric accent shapes only
- Motion: modern, functional micro-interactions (grid-aligned transitions reinforce rather than fight the Swiss logic)

**Brief: "Record label site, 1970s meets modern"**
- Display: extended/condensed slab or phototype-style display face
- Body: modern humanist sans for readability
- Color: high-saturation technicolor OR moody greyscale photography treatment — pick one, don't blend both extremes
- Grid: loosen the modern grid slightly — allow overlap/collage in hero/feature areas, keep utility screens (checkout, account) on a clean modern grid
- Ornament: photographic treatment as the primary texture carrier, not pattern
- Motion: modern, can be more expressive/loud than the fintech example — the brief allows it

**Brief: "Art Deco meets modern, e-commerce"**
- Display: geometric sans or Didone with Deco proportions
- Body: modern geometric or humanist sans
- Color: black + metallics (translate metallic to a gradient or foil-effect accent, used sparingly — full-page metallic fails contrast and readability)
- Grid: modern responsive grid; Deco's symmetrical framing translates to symmetrical section layout and centered hero compositions, not literal ornamental borders everywhere
- Ornament: sunburst/ziggurat motifs as icon set or section dividers
- Motion: modern; can add a touch of "reveal" ceremony (fade/scale-in) since Deco is inherently about ceremony/luxury

## Print, packaging, and editorial

When the brief is not a screen, keep the layer map and the token sheet, including type size, line-height, and tracking. Drop tap targets, focus rings, and motion tokens: write "not a screen" in those rows. Do not embed archive images. Point at an archive and a query instead.

## Output checklist before rendering
- [ ] Layer map stated explicitly (which layer = which era, which = modern) — using the Fusion Spec template in `references/output-templates.md`
- [ ] Token Sheet completed with real values, not placeholders
- [ ] Accessibility Verification table completed — every row checked, not asserted
- [ ] No ornament/icon/texture element shares a bounding box with text without a documented z-index or scrim decision (see Stacking order above)
- [ ] No two loud historical display treatments stacked together
- [ ] Motion is modern for a pre-web anchor. A 2000s-or-later screen era may use its own motion language. A poster, package, or editorial spread has no motion tokens.
- [ ] Rationale written (2–4 lines) mapping choices back to sources

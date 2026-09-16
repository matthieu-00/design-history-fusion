# Avoiding AI-Design-Slop

Two separate failure modes to guard against. Both produce output that looks "fine" but isn't actually grounded in the era or the brief — it's grounded in what AI-generated design defaults to.

## Failure mode 1: cross-era defaults leaking in regardless of anchor
Per `/mnt/skills/public/frontend-design/SKILL.md`'s calibration section, AI-generated design clusters around a few looks regardless of subject: warm cream + high-contrast serif + terracotta accent (near #D97757); near-black + single neon/acid accent; broadsheet hairline-rule layouts with zero border-radius. **Check any fusion output against this list before finalizing** — if the palette or layout would pass for any of these three regardless of which era you anchored to, the era choice isn't actually doing anything.

A second version of this failure is specific to *this skill*: rounded-card-with-photo-and-soft-shadow grids (what most "offer/feature" sections default to) and Fraunces-as-display-face are becoming the default "vintage-meets-modern" tell in AI design output generally — including some of this skill's own earlier output. Using Fraunces or a rounded-card grid isn't wrong on its own; defaulting to them *every time* regardless of which era is anchored is the failure. Vary card treatment (hard edges vs. rounded, bordered vs. shadowed, photo-led vs. text-led) and display typeface choice deliberately per era rather than reusing the same components with a new color variable swapped in.

## Failure mode 2: an era flattened to its single most-recognized cliché
Every decade in `timeline.md` has a "Pinterest-famous" visual shorthand that AI output reaches for by default, and a quieter, often more historically substantial current running alongside it that gets ignored. Before committing to an anchor era, name which current you're actually pulling from — don't let the era name alone auto-select the loudest cliché.

| Era | The overused cliché | The under-used, often more apt alternative |
|---|---|---|
| 1900s–10s | Mucha-poster whiplash line + pastel gradient applied to anything "Art Nouveau" | Vienna Secession's much more geometric, restrained register (Moser, Hoffmann) — genuinely different from the French curvilinear strand, not a variation on it |
| 1920s (Bauhaus/Constructivism) | Generic "geometric shapes + primary colors" without the pedagogical (Bauhaus) or political (Constructivist) substance behind it | The actual VKhUTEMAS-taught Constructivist diagonal/photomontage system, or Bauhaus's specific preliminary-course exercises |
| 1920s (Art Deco) | Gold sunburst + black + party gradient | Cassandre/Loupot's actual poster restraint — decorative but disciplined, not maximalist |
| 1930s | Generic airbrushed "vintage travel poster" | Actual corporate modernist restraint (Gill Sans-era signage) |
| 1940s | WWII propaganda-poster pastiche used regardless of relevance | The quieter Basel/Zurich grid pedagogy underneath it |
| 1950s | Atomic-starburst/boomerang "MCM" pattern slapped on anything, mislabeled "Swiss" | True Swiss grid discipline (Müller-Brockmann) is a different, more restrained tradition than American commercial Mid-Century Modern — conflating them is the specific error, not just a missed alternative |
| 1960s | Tie-dye psychedelic lettering for anything "60s" | The parallel, quieter Push Pin/continued-Swiss corporate current |
| 1970s (corporate/NY School) | Generic "swanky 70s" without the actual phototype-driven ligature/kerning precision Lubalin pioneered | Real ITC Avant Garde Gothic-style geometric-ligature typography |
| 1970s (punk) | A "grunge/distressed" texture filter mistaken for punk — punk is collage-and-Xerox, not a texture overlay | Genuine ransom-note cut-and-paste from real source material, built off-grid on purpose |
| 1970s (disco) | Flat gold/black "disco ball" clip-art shorthand | Airbrush gradient + custom connected-script lettering — the actual period technique, not a mirrorball icon |
| Japanese graphic design (1950s–70s) | Generic "wabi-sabi minimalism" + a torii-gate icon slapped on regardless of brief | The tradition spans two opposite poles — Kamekura's geometric modernist discipline AND Yokoo's psychedelic maximalist collage. Picking one without a reason flattens exactly as badly as the old undifferentiated 1970s entry did |
| 1980s (Memphis) | Neon squiggle/confetti pattern treated as generic "80s," divorced from its Italian product-design origin | Sottsass-era Memphis restraint to actual furniture/object-derived pattern logic, not randomized squiggles |
| 1980s (New Wave typography) | "VHS glitch" filter mistaken for Weingart's actual layered typographic system | Genuine Weingart-style deliberate grid violation, built from within Swiss training, not a distortion effect applied on top |
| 1990s | A "grunge" texture PNG overlaid on an otherwise clean layout | Genuine Carson-style structural deconstruction, not a dirty filter |
| 2000s | Glossy Web 2.0 bevel/reflection button, used ironically | The genuine Helvetica-revival minimalism that coexisted with it |
| 2010s | Flat pastel gradient blobs + rounded SaaS cards — arguably the single most overused "modern" default in AI design today | Material Design's actual elevation logic, or real geometric-sans revival rigor |
| 2020s | "Neubrutalism" reduced to thick black borders + one clashing color as a costume | The actual scrapbook/collage/analog-fatigue current — textural, not just bordered |

Note the 2010s and 1970s rows especially — they're the two most likely to get requested ("modernize this" defaults toward 2010s SaaS-flat; "vintage" defaults toward 1970s earth-tone) and therefore the two most likely to get flattened.

## Pre-render self-check
Before finalizing any single-direction fusion output, ask:
1. Would this exact palette/layout happen for *any* brief anchored to this era, regardless of the client? If yes, it's not grounded in this brief — revise using something from the brief's actual content (per `frontend-design`'s "ground it in the subject" principle).
2. Did I reach for the cliché row or the alternative row in the table above? If cliché, was that a deliberate choice stated in the rationale, or just the path of least resistance?
3. Across a set of options (Mode 2b) or across sessions, am I reusing the same 1-2 display typefaces or the same card/grid component every time "vintage" comes up? If so, that's a new default forming — break it deliberately.
4. Does any ornament/icon/texture element sit behind or overlap a text element? If so, has the composite contrast actually been checked (text + ornament + background together), not just the background token in isolation? See `fusion-playbook.md`'s Stacking order section — this is a distinct failure from palette/cliché slop and has caused real legibility bugs, not just aesthetic ones.

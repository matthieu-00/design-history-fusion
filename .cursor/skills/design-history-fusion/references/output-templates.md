# Output Templates

Use these so output is structurally comparable across sessions and projects, not reinvented each time. Fill every bracket; don't skip sections because a project seems simple — omission is itself a finding worth stating explicitly ("no motion layer needed for this brief") rather than leaving a blank.

---

## Template — Research mode

```markdown
## [Movement/Question]
**Era:** [decade/range] | **Category (Vox-ATypI, if typographic):** [category]

[2-4 sentence answer, sourced]

**Key figures/works:** [names]
**Verify before citing:** [anything not confirmed via web_search this session]
**Where to see examples:** [specific archive + what to search there]
```

---

## Template — Fusion, single direction (Mode 2a)

```markdown
## Fusion Spec: [Project name]

**Anchor era:** [movement/decade] — [1-line reason it fits this brief]
**Intensity:** [subtle nod / confident / maximalist]

### Layer Map
| Layer | Source | Notes |
|---|---|---|
| Display typography | [era / modern] | [typeface family or category] |
| Body/UI typography | [era / modern] | [typeface family or category] |
| Color | [era / modern] | [see token sheet below] |
| Grid/spatial rhythm | [era / modern] | [structure description] |
| Texture/ornament | [era / modern] | [signature element, used once] |
| Motion | [era / modern — near-always modern] | [interaction description] |

### Token Sheet
| Token | Value | Source/rationale |
|---|---|---|
| color/primary | #[hex] | [era-derived / modern, contrast-adjusted] |
| color/accent | #[hex] | |
| color/background | #[hex] | |
| color/text | #[hex] | |
| spacing/scale | [e.g. 4/8/16/24/32/48/64px] | modern, always |
| radius | [value] | |
| shadow/elevation | [values per level, or "none — era doesn't use elevation"] | |
| motion/duration | [e.g. 150-300ms] | modern, always |
| motion/easing | [e.g. ease-out] | modern, always |
| type/display | [family, weight range] | |
| type/body | [family, weight range] | |

### Accessibility Verification
| Check | Requirement | Result |
|---|---|---|
| Body text contrast | ≥ 4.5:1 (WCAG 1.4.3) | [ratio] — ✅/❌ |
| Large text / display contrast | ≥ 3:1 (WCAG 1.4.3) | [ratio] — ✅/❌ |
| UI component contrast | ≥ 3:1 (WCAG 1.4.11) | [ratio] — ✅/❌ |
| Touch targets | ≥ 44x44px (WCAG 2.5.5) | ✅/❌ |
| Focus indicator visible | WCAG 2.4.7 | ✅/❌ |
| Motion respects `prefers-reduced-motion` | — | ✅/❌ |
| Text-over-ornament contrast (composite, not nominal background) | ≥ 4.5:1 body / 3:1 large (WCAG 1.4.3) | [ratio] — ✅/❌ |

If anything fails: state the fix applied (e.g., "darkened accent from #X to #Y to pass AA") — a documented adjustment, not a silent one.

### Rationale
[2-4 lines mapping choices back to sources/brief — not an essay]
```

---

## Template — Fusion, three directions (Mode 2b)

```markdown
## Fusion Options: [Project name]

### Option 1: [Era/anchor name]
**Why this one's in contention:** [1 line]
**Layer summary:** Type: [clause] · Color: [clause] · Grid: [clause] · Ornament: [clause] · Motion: [clause]

### Option 2: [Era/anchor name]
**Why this one's in contention:** [1 line]
**Layer summary:** Type: [clause] · Color: [clause] · Grid: [clause] · Ornament: [clause] · Motion: [clause]

### Option 3: [Era/anchor name]
**Why this one's in contention:** [1 line]
**Layer summary:** Type: [clause] · Color: [clause] · Grid: [clause] · Ornament: [clause] · Motion: [clause]

[Optional 1-line steer: which you'd lean toward and why, without deciding for them]
```

Once a direction is picked, proceed to the single-direction template above — full token sheet and accessibility table only get built for the chosen option, not all three.

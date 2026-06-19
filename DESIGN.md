# ALLNUTTS — DESIGN.md

> Brand visual-language spec for the ALLNUTTS institutional agri-commodity site.
> Hand this file to any AI design agent (Claude Design, etc.) to scaffold new pages
> that stay on-brand. Format follows the awesome-claude-design 9-section convention.

## 1. Visual Theme & Atmosphere
Institutional, premium, trust-first. The feel of a global trading house — not a
farm shop. Calm, confident, spec-driven. Deep forest greens with restrained gold
accents, generous whitespace, editorial serif headlines over clean sans body.
Density: airy. Mood: authoritative, quietly luxurious.

## 2. Color Palette & Roles
| Token | Hex | Role |
|---|---|---|
| `--emerald` | `#064e3b` | Primary surface (nav, buttons, panels) |
| `--deep-emerald` | `#043a2c` | Footer, deep panels |
| `--emerald-900` | `#022c22` | Darkest band, topbar, CTA band |
| `--gold` | `#c8a24a` | Primary accent (CTAs, eyebrows, rules) |
| `--gold-bright` | `#d4af37` | Hover accent |
| `--gold-soft` | `#e6cf93` | Accent text on dark |
| `--ink` | `#1a1d1b` | Body text |
| `--muted` | `#5a615d` | Secondary text |
| `--cream` | `#fbf9f4` | Page background |
| `--paper` | `#f4f0e7` | Alternating section background |
| `--line` | `#e7e2d6` | Hairlines, borders |

Rule: gold is a seasoning, never a fill for large areas. Green carries the brand.

## 3. Typography Rules
- **Display / headings:** `Playfair Display` (serif), weights 500–800. Used for h1–h3,
  product names, stat figures. Italic gold for emphasized words.
- **Body / UI:** `Inter` (sans), 300–700. Body 400, labels 600 uppercase 0.1–0.22em.
- **Non-Latin:** Noto Sans Arabic / SC / Devanagari swap in by `lang-*` body class.
- Type scale (clamp): h1 `2.6–5rem`, h2 `2.1–3.4rem`, body `1–1.15rem`, eyebrow `0.72rem`.

## 4. Component Stylings
- **Buttons:** `.btn-gold` = gold fill, deep-emerald text, 4px radius, uppercase 0.1em,
  lift + glow on hover. `.btn-outline` = bottom-border gold, text only.
- **Cards:** white, 18px radius, 1px `--line` border, soft shadow, 3px gold top-border
  on feature cards; lift 3–5px on hover.
- **Spec tables:** emerald header row with gold-soft uppercase labels; first column is
  Playfair emerald; zebra hover `--paper`.
- **Nav:** sticky emerald bar, gold underline grows on hover; pill language switcher.

## 5. Layout Principles
- Container max 1240px, side padding 6%.
- Section rhythm: `7rem` vertical (`5rem` tight). Alternate `--cream` / `--paper`.
- Centered section headers with eyebrow → serif h2 → muted lead.
- Sticky product showcase: image rail + spec detail.

## 6. Depth & Elevation
Three shadow tiers (sm/md/lg), all green-tinted (`rgba(4,58,44,…)`), never neutral grey.
Elevation signals interactivity (cards lift on hover); static panels stay flat.

## 7. Do's and Don'ts
- DO keep all product specs in English trade nomenclature (W320, ASTA 570, Scr18).
- DO verify quality language as "independent third-party + in-house quality team."
- DON'T invent stats, prices, or testimonials. No live pricing tickers.
- DON'T name external inspectors (no SGS/Intertek) unless the client confirms.
- DON'T force the logo into a circle/white chip — it's a transparent badge, show it as-is.
- DON'T over-gild: gold on borders, accents, CTAs only.

## 8. Responsive Behavior
- Breakpoints at 920px (nav collapses to sheet) and 760/640px (grids → 1–2 col).
- Touch targets ≥ 44px. Spec tables scroll-x on mobile.
- Full RTL support via `dir="rtl"` (Arabic); logical properties throughout.

## 9. Agent Prompt Guide
- "Add a [page] for ALLNUTTS using DESIGN.md — emerald/gold, Playfair headings,
  Inter body, alternating cream/paper sections, gold CTAs, no invented data."
- "Keep copy verbatim from the client; restyle visuals only."
- "All new product tables use the emerald-header spec-table pattern."
- Languages supported: EN, AR (RTL), ZH, VI, FR, ES, HI via `i18n.js` + `data-i18n`.

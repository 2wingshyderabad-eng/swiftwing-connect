# Trusted Courier Service's — UI Design Guidelines

Marketing-site design system for the XpresWings courier website. Source of truth for tokens is
`src/styles.css`; this document defines how those tokens are used.

**Design intent (one sentence):** A clean, high-contrast orange-on-black courier brand that lets
readers find a service, trust it, and act on it (call, quote, track) in as few steps as possible.

Normative language: **must** = non-negotiable, blocks release. **should** = recommendation; deviate
only with a written reason in the PR.

---

## 1. Context and goals

| Item | Value |
| --- | --- |
| Product surface | Marketing site (`/` landing, `/track` shipment tracking) |
| Audience | Readers and knowledge seekers comparing courier options |
| Reference | https://www.xpressbees.com/ |
| Accessibility target | WCAG 2.2 AA |
| Stack | React 19, TanStack Start, Tailwind CSS v4, shadcn/ui |

Goals:

1. **Consistency** — every colour, size, radius, shadow, and duration resolves to a token.
2. **Accessibility** — keyboard-first, visible focus everywhere, AA contrast on every text pair.
3. **Fast delivery** — engineers copy a rule into code without interpretation.

Known component density on the current pages (drives prioritisation of the rules below):

| Component | Count | Section |
| --- | --- | --- |
| Links | 56 | §3.1 |
| Buttons | 28 | §3.2 |
| Lists | 11 | §3.5 |
| Cards | 8 | §3.4 |
| Inputs | 5 | §3.3 |
| Navigation | 1 | §3.6 |

---

## 2. Design tokens and foundations

Tokens are implemented in two layers in `src/styles.css`:

- **Layer 1 — foundations (`--xw-*`)**: raw values. Hex and px values must only appear here.
- **Layer 2 — semantic aliases (`--primary`, `--brand-strong`, `--surface-dark`, …)**: exposed as
  Tailwind utilities (`bg-primary`, `text-brand-strong`). Components must use layer 2 only.

Token notation in this document: `color.text.primary` ⇄ CSS `--xw-color-text-primary`.

### 2.1 Typography

| Token | Value | CSS / utility | Use |
| --- | --- | --- | --- |
| `font.family.primary` | Poppins | `--xw-font-family-primary` | All text |
| `font.family.stack` | Poppins, sans-serif | `font-sans`, `font-display` | All text |
| `font.size.base` | 16px | `body` default | Body copy |
| `font.weight.base` | 400 | `body` default | Body copy |
| `font.lineHeight.base` | 24px | `body` default | Body copy |

Body scale (component text):

| Token | Value | Utility | Use |
| --- | --- | --- | --- |
| `font.size.sm` | 12px | `text-body-sm` | Section eyebrow labels, badges, legal |
| `font.size.md` | 13.5px | `text-body-md` | Small buttons, meta text |
| `font.size.lg` | 14px | `text-body-lg` | Nav links, card captions, helper text |
| `font.size.xl` | 15px | `text-body-xl` | Dense body (testimonials, milestones) |
| `font.size.2xl` | 16px | `text-body-2xl` | Default body, inputs, buttons (lg) |
| `font.size.3xl` | 18px | `text-body-3xl` | Lead paragraphs, card titles |
| `font.size.4xl` | 19px | `text-body-4xl` | Emphasised lead copy |

Display scale (headings ≥ 24px) uses the Tailwind type ramp, which is already the de-facto
heading scale on the site: `text-2xl` 24 · `text-3xl` 30 · `text-4xl` 36 · `text-5xl` 48 ·
`text-6xl` 60 · `text-7xl` 72.

Rules:

- Text must not be smaller than `font.size.sm` (12px).
- `font.size.xs` (0px) is an extraction artifact. It must not be used and is not emitted.
- Running body copy should use `font.size.2xl` (16px) or larger.
- Inputs must render at 16px minimum to prevent iOS zoom-on-focus.
- Weights must be limited to 400, 500, 600, 700 (the loaded Poppins weights).
- Headings (`h1`–`h4`) use `letter-spacing: -0.02em`. Eyebrow labels use `0.18em` uppercase.
- Each page must have exactly one `h1`; heading levels must not skip.
- Body text should be limited to ~70ch line length (`max-w-xl` / `max-w-2xl`).

### 2.2 Colour — foundation palette

| Token | Value | Role |
| --- | --- | --- |
| `color.text.primary` | #212529 | Body and heading text on light surfaces |
| `color.text.secondary` | #ffffff | Text on dark surfaces; also the page surface |
| `color.text.inverse` | #111214 | Text on brand orange; also the dark section surface |
| `color.surface.base` | #000000 | Darkest surface (footer, hero overlay) |
| `color.surface.muted` | #f58220 | Brand orange (fills, accents on dark) |
| `color.surface.strong` | #f4f4f4 | Alternate light section background |

The source palette was extracted from computed styles, so role names do not always match usage
(e.g. white is both a text colour and the page surface). Always use the semantic alias below.

### 2.3 Colour — derived tokens

Each derived token exists to satisfy a contrast rule the foundation palette cannot meet alone.

| Token | Value | Why it exists |
| --- | --- | --- |
| `color.brand.strong` | #ac5407 (from `shadow.1`) | Orange text/focus on light surfaces (#f58220 is 2.6:1 on white) |
| `color.brand.soft` | 12% orange on white | Tinted icon tiles, badges, callouts |
| `color.text.muted` | 72% `text.primary` on white | Secondary copy that still passes AA |
| `color.border.subtle` | 12% `text.primary` on white | Decorative card/section dividers |
| `color.border.control` | 55% `text.primary` on white | Input borders (≥ 3:1 non-text contrast) |
| `color.feedback.error` | #b42318 | Error text, borders, icons |

### 2.4 Colour — semantic aliases (use these in components)

| Semantic | Utility | Resolves to |
| --- | --- | --- |
| `background` / `card` | `bg-background`, `bg-card` | `text.secondary` (white) |
| `foreground` | `text-foreground` | `text.primary` |
| `primary` | `bg-primary` | `surface.muted` (orange) |
| `primary-foreground` | `text-primary-foreground` | `text.inverse` |
| `secondary` / `muted` | `bg-secondary`, `bg-muted` | `surface.strong` |
| `muted-foreground` | `text-muted-foreground` | `text.muted` |
| `brand` | `text-brand`, `bg-brand` | `surface.muted` |
| `brand-strong` | `text-brand-strong` | `brand.strong` |
| `brand-soft` / `accent` | `bg-brand-soft`, `bg-accent` | `brand.soft` |
| `surface-dark` | `bg-surface-dark` | `text.inverse` (#111214) |
| `surface-darker` | `bg-surface-darker` | `surface.base` (#000000) |
| `border` | `border` (default) | `border.subtle` |
| `input` | `border-input` | `border.control` |
| `destructive` | `text-destructive`, `border-destructive` | `feedback.error` |
| `ring` / `--focus-ring` | global `:focus-visible` | `brand.strong` (light) / `brand` (dark) |

### 2.5 Approved contrast pairs

Only these text/background pairs may ship. Ratios are WCAG 2.x relative-luminance contrast.

| Text | Background | Ratio | Allowed for |
| --- | --- | --- | --- |
| `foreground` | `background` | 15.4:1 | All text |
| `foreground` | `secondary` | 14.0:1 | All text |
| `muted-foreground` | `background` | 6.1:1 | All text |
| `muted-foreground` | `secondary` | 5.6:1 | All text |
| `brand-strong` | `background` | 5.2:1 | All text, links, focus ring |
| `brand-strong` | `secondary` | 4.8:1 | All text |
| `brand-strong` | `brand-soft` | 4.7:1 | Badges, callout text |
| `primary-foreground` | `primary` | 7.2:1 | Button labels, filled badges |
| `brand` | `surface-dark` | 7.2:1 | Accent text, icons, focus ring |
| `brand` | `surface-darker` | 8.1:1 | Accent text, icons, focus ring |
| white | `surface-dark` | 18.8:1 | All text |
| white/70 | `surface-dark` | ≈ 9.4:1 | Secondary text on dark |
| white/50 | `surface-darker` | ≈ 5.3:1 | Footer meta only (minimum) |
| `destructive` | `background` | 6.6:1 | Error text |

Prohibited pairs (fail AA): white on `primary` (2.6:1), `brand` on `background` (2.6:1), `brand` on
`secondary` (2.4:1), `brand-soft` text on any light surface.

### 2.6 Spacing

Component spacing (internal padding, gaps between icon and label, chip padding):

| Token | Value | Tailwind |
| --- | --- | --- |
| `space.1` | 2px | `0.5` |
| `space.2` | 4px | `1` |
| `space.3` | 5px | `[--xw-space-3]` (no Tailwind step) |
| `space.4` | 6px | `1.5` |
| `space.5` | 8px | `2` |
| `space.6` | 10px | `2.5` |
| `space.7` | 12px | `3` |
| `space.8` | 14px | `3.5` |

Layout spacing (section padding, grid gaps, stack rhythm) uses the 4px Tailwind grid at these
steps only: 16 (`4`), 20 (`5`), 24 (`6`), 32 (`8`), 40 (`10`), 56 (`14`), 64 (`16`), 96 (`24`),
128 (`32`).

- Component internals must use `space.1`–`space.8`.
- Layout must use only the listed layout steps. Arbitrary values (`mt-[37px]`) must not be used.
- Sections must use `py-24 sm:py-32`. Page gutters must use `px-4 sm:px-6`, container `max-w-7xl`.

### 2.7 Radius

| Token | Value | Utility | Use |
| --- | --- | --- | --- |
| `radius.xs` | 4px | `rounded-xs` | Inline link focus outline, tags |
| `radius.sm` | 5px | `rounded-sm` | Menu items |
| `radius.md` | 8px | `rounded-md` | Inputs, small controls |
| `radius.lg` | 12px | `rounded-lg` | Icon tiles |
| `radius.xl` | 18px | `rounded-xl` | Dialogs, popovers |
| `radius.2xl` | 20px | `rounded-2xl` | Cards, media, panels |
| `radius.step7` | 999px | `rounded-full` | Buttons, pills, chips, avatars |

`rounded-3xl` / `rounded-4xl` are deprecated aliases of `radius.2xl` and should be migrated.

### 2.8 Shadow

| Token | Value | Use |
| --- | --- | --- |
| `shadow.1` | `rgb(172, 84, 7) 0px 2px 0px 0px` | `shadow-brand` — the "press edge" under primary buttons |

- `shadow.1` must only be used on `primary` fills.
- Hover elevation on cards uses the `card-lift` utility; no other ad-hoc shadows should be added.

### 2.9 Motion

| Token | Value | Use |
| --- | --- | --- |
| `motion.duration.instant` | 150ms | Colour changes on links |
| `motion.duration.fast` | 180ms | Button hover/press, input border |
| `motion.duration.normal` | 200ms | Menus, popovers open |
| `motion.duration.slow` | 250ms | Accordion, drawer |
| `motion.duration.slower` | 300ms | Card lift |
| `motion.duration.step6` | 500ms | Carousel slide |
| `motion.duration.step7` | 550ms | Section reveal (if added) |
| easing (standard) | `cubic-bezier(0.2, 0, 0, 1)` | All transitions |

- All motion must stop under `prefers-reduced-motion: reduce` (enforced globally in `styles.css`).
- Transitions must animate only `transform`, `opacity`, `filter`, `color`, `background-color`,
  `box-shadow`, `border-color`. Layout properties (width, height, top) must not be animated.
- Auto-playing motion longer than 5s (e.g. the Ken Burns slide effect) must be decorative and
  must have a pause mechanism or be disabled by reduced motion.

### 2.10 Breakpoints

Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280. Layouts must be designed
mobile-first and must work at 320px width with no horizontal scrolling (WCAG 1.4.10).

---

## 3. Component rules

Every component below defines all seven states. "Focus-visible" always means: the global
`:focus-visible` outline (2px solid `--focus-ring`, 2px offset). Components must not remove it with
`outline-none` unless they draw an equivalent ≥ 2px, ≥ 3:1 indicator.

Any container whose background is `surface-dark`, `surface-darker`, or a dark image overlay must add
the `on-dark` utility. It switches the focus ring and section labels to `brand` so they remain ≥ 3:1.

### 3.1 Link (56 instances)

**Anatomy:** text label, optional leading/trailing icon (`size-4`, gap `space.5`), optional
visually-hidden suffix ("opens in a new tab").

**Variants**

| Variant | Light surface | Dark surface (`on-dark`) |
| --- | --- | --- |
| Inline (in prose) | `text-brand-strong underline underline-offset-4` | `text-brand underline` |
| Nav | `text-muted-foreground` → `text-foreground` | `text-white/70` → `text-white` |
| Contact (icon tile + label) | Tile `bg-primary`, label `text-foreground` | Tile `bg-primary`, label white |
| Icon-only (social) | — | `size-11 rounded-full border-white/20` |

**States**

| State | Rule |
| --- | --- |
| Default | As variant. Inline links must be underlined (colour alone must not signal a link). |
| Hover | Nav: shift to full-strength text. Inline: `decoration-2`. Duration `instant`. |
| Focus-visible | Global outline, `rounded-xs` on inline links. |
| Active | No transform. Colour stays at hover value. |
| Disabled | Links must not be disabled. Remove the `href` and render plain text instead. |
| Loading | N/A for navigation. If a link triggers async work it must be a Button. |
| Error | Broken/placeholder URLs (e.g. generic social links) must not ship; hide until real URL. |

**Interaction**

- Keyboard: reachable by `Tab`, activated by `Enter`. In-page anchors must move focus to the
  target section (the target must have an `id`; sticky header must not cover it — use
  `scroll-mt-20` on sections).
- Pointer: whole visual area is the hit target; icon + label wrapped in one `<a>`.
- Touch: icon-only links must be ≥ 44×44px (`size-11`); text links ≥ 24px tall with ≥ 8px spacing.

**Content:** label must describe the destination ("Track your shipment", not "Click here").
`tel:` links must show the formatted number; `mailto:` links must show the address.
`target="_blank"` links must include "(opens in a new tab)" in the accessible name.

**Edge cases:** long URLs/emails must wrap (`break-words`); nav overflow below `lg` must move into
the mobile menu (§3.6), never truncate.

### 3.2 Button (28 instances)

Implementation: `src/components/ui/button.tsx` (`Button`, `buttonVariants`). Anchor-styled CTAs
must use `buttonVariants()` (or `<Button asChild>`) rather than hand-written class strings.

**Anatomy:** container (`rounded-full`), label (`font-semibold`), optional icon (`size-4`;
`size-5` at `lg`), optional spinner (loading).

**Variants**

| Variant | Fill / text | Use |
| --- | --- | --- |
| `default` (primary) | `bg-primary text-primary-foreground shadow-brand` | One primary action per view region |
| `outline` | `border-input bg-background` | Secondary action on light |
| `secondary` | `bg-secondary text-secondary-foreground` | Tertiary / filter |
| `ghost` | transparent | Toolbar, carousel controls |
| `link` | `text-brand-strong underline` | Inline action |
| `destructive` | `bg-destructive text-destructive-foreground` | Irreversible actions only |
| Outline-on-dark (pattern) | `border-white/30 text-white hover:bg-white/10` | Secondary CTA in hero |

**Sizes:** `sm` h-9 (36px) · `default` h-10 (40px) · `lg` h-12 (48px) · `icon` 40×40. Page CTAs
should use `lg`; header CTA uses `default`.

**States**

| State | Rule |
| --- | --- |
| Default | As variant. Label must be visible text (icon-only requires `aria-label`). |
| Hover | Primary: `brightness-95`. Outline/ghost: `bg-accent`. Duration `fast`. |
| Focus-visible | Global outline; must remain visible on top of `shadow-brand`. |
| Active | Primary: `translate-y-0.5` + `shadow-none` (press-down). Others: `bg-secondary`. |
| Disabled | `disabled` attribute, `opacity-50`, `cursor-not-allowed`, no hover/active styles. |
| Loading | `loading` prop → `disabled`, `aria-busy="true"`, spinner before label, label unchanged. |
| Error | `aria-invalid="true"` → 2px `destructive` outline; error text rendered next to it. |

**Interaction**

- Keyboard: `Tab` to focus; `Enter` and `Space` activate. Form submit buttons must be
  `type="submit"`; all others must set `type="button"`.
- Pointer: hover only changes colour/brightness; no layout shift. Scale transforms on hover
  should be removed during migration (they move the hit target).
- Touch: minimum height 40px (`default`); primary CTAs on mobile should be `lg` (48px). Adjacent
  buttons must have ≥ 8px gap (`gap-2`).

**Responsive:** button groups must `flex-wrap`; full-width (`w-full`) below `sm` when a group has
two or more buttons stacked.

**Edge cases:** labels must not wrap — if the label exceeds the container on 320px, shorten copy;
never truncate with ellipsis. Repeated clicks while `loading` must be ignored (disabled handles it).

### 3.3 Input (5 instances)

Implementation: `src/components/ui/input.tsx`. Pattern in use: tracking-number search on `/track`.

**Anatomy:** label (visible or `sr-only`), optional leading icon (`pointer-events-none`), field,
optional helper text, error message, submit button.

**States**

| State | Rule |
| --- | --- |
| Default | `h-11` (44px), `border-input` (≥ 3:1), `bg-background`, 16px text, `rounded-md`. |
| Hover | Border → `foreground`. Duration `fast`. |
| Focus-visible | Global outline (2px `--focus-ring`, 2px offset). |
| Active (typing) | Same as focus. Error state must clear when the user edits the value. |
| Disabled | `disabled`, `bg-muted`, `opacity-60`, `cursor-not-allowed`. Read-only uses `bg-muted`. |
| Loading | Submit button shows loading; input stays editable but submit is ignored until done. |
| Error | `aria-invalid="true"`, `border-destructive`, `aria-describedby` → error message id. Message must state what is wrong and how to fix it. |

**Interaction**

- Keyboard: `Tab` focuses; `Enter` submits the form. No keyboard traps.
- Pointer: clicking the leading icon must focus the input (icon is `pointer-events-none`).
- Touch: 44px minimum height; set `autoComplete`, `autoCapitalize`, `inputMode` appropriately
  (tracking numbers: `autoCapitalize="characters"`, `spellCheck={false}`).

**Content:** every input must have a programmatic label; placeholder text must not be the only
label and should show an example format ("e.g. XW100234567IN").

**Edge cases:** set `maxLength` for bounded formats; trim and normalise case before validating;
input + button must stack vertically below `sm`; whitespace-only submit must be a no-op.

### 3.4 Card (8 instances)

**Anatomy:** container (`rounded-2xl border bg-card p-8`), optional icon tile (`size-13 rounded-xl
bg-brand-soft`), title (`h3`, `text-xl font-semibold`), description (`text-muted-foreground`),
optional footer (testimonial attribution).

**Variants:** Service card · Testimonial card (`figure` + `blockquote` + `figcaption`) ·
Info/help card (`text-center`) · Dark panel (`bg-surface-dark`, must add `on-dark`).

**States**

| State | Rule |
| --- | --- |
| Default | As variant. Cards are static containers unless they contain a link. |
| Hover | `card-lift` (−6px, shadow), duration `slower`. Decorative only. |
| Focus-visible | If the card is a link, the whole card is the `<a>` and gets the global outline. Otherwise the card itself must not be focusable. |
| Active | No additional style. |
| Disabled | N/A. Unavailable services must be removed, not greyed out. |
| Loading | Render `Skeleton` blocks matching title/description line count; `aria-busy` on the grid. |
| Error | Render the card with an inline `destructive` message and a retry action. |

**Interaction:** keyboard/pointer/touch only apply if the card is interactive — then it follows the
Link rules (§3.1) and must contain exactly one interactive element.

**Responsive:** grid `sm:grid-cols-2 lg:grid-cols-3`, gap `6`. Cards in a row must stretch to equal
height.

**Edge cases:** titles must wrap (no truncation); descriptions should be ≤ 160 characters; empty
collection must render a single message card ("No services listed yet — call us on …").

### 3.5 List (11 instances)

**Anatomy:** `ul`/`ol`/`dl` container, items, optional leading icon (`aria-hidden`), text.

**Variants:** Checklist (`ul`, `CheckCircle2` icon) · Ordered steps (`ol`, decorative numerals with
`aria-hidden`) · Timeline (`ol`, `/track` milestones) · Definition list (`dl`, business hours) ·
Chip list (coverage countries).

**States**

| State | Rule |
| --- | --- |
| Default | Semantic list element must be used whenever items are a set or sequence. |
| Hover | None (static). Interactive items follow Link/Button rules. |
| Focus-visible | Only interactive children receive focus. |
| Active | Timeline: current item uses `bg-primary` icon + "Latest update" badge (`text-brand-strong` on `brand-soft`). |
| Disabled | Timeline future items: `text-muted-foreground` (still ≥ 4.5:1). |
| Loading | Skeleton rows equal to expected count (default 3). |
| Error | Replace list with an error message + retry; never render a half list silently. |

**Edge cases:** long items must wrap with the icon top-aligned (`items-start`, icon `mt-0.5`);
chip lists must `flex-wrap`; empty lists must show an explicit empty message, not a blank area.
Visual numbering must not be the only sequence cue — use `ol`.

### 3.6 Navigation (1 instance)

**Anatomy:** sticky `header` (`h-18`, `bg-background/90 backdrop-blur`), logo link (home), `nav`
with `aria-label="Primary"`, phone link, primary CTA. Footer navigation uses `aria-label="Footer"`.

**States**

| State | Rule |
| --- | --- |
| Default | Links `text-body-lg font-medium text-muted-foreground`. |
| Hover | `text-foreground`, duration `instant`. |
| Focus-visible | Global outline. |
| Active (current page/section) | `aria-current="page"` (route) or `"true"` (section) + `text-foreground font-semibold`. |
| Disabled | N/A. |
| Loading | N/A (static). |
| Error | N/A. |

**Interaction**

- Keyboard: a "Skip to main content" link must be the first focusable element (`skip-link`
  utility, target `main#main`). Tab order follows visual order.
- Pointer/touch: below `lg` the inline nav is hidden; a menu button (`aria-expanded`,
  `aria-controls`) must open a `Sheet` with the same links. `Esc` closes it and returns focus to
  the button. **(Migration: the mobile menu is not yet implemented — see §6.)**

**Edge cases:** the header must not cover anchored section headings (`scroll-mt-20`). The phone
number collapses below `sm`; the CTA must stay visible at 320px.

### 3.7 Supporting patterns

- **Section label (eyebrow):** `section-label` utility. Colour is context-aware via `on-dark`.
- **Badge/chip:** `rounded-full px-2.5 py-0.5 text-body-sm font-bold`. Use approved pairs only.
- **Carousel:** shadcn `Carousel`; `ArrowLeft`/`ArrowRight` move slides when focused; prev/next
  buttons need `aria-label`. Slides must not auto-advance.
- **Stat block:** value `font-display text-3xl font-bold text-brand` (dark only) + label
  `text-body-lg text-white/70`.

---

## 4. Accessibility requirements and acceptance criteria

Each criterion is pass/fail and testable in the browser or CI.

| # | Criterion (WCAG 2.2) | Test | Pass condition |
| --- | --- | --- | --- |
| A1 | Text contrast (1.4.3) | axe DevTools / Lighthouse on `/` and `/track` | 0 contrast violations |
| A2 | Non-text contrast (1.4.11) | Measure input borders, focus rings, meaningful icons | ≥ 3:1 against adjacent colour |
| A3 | Focus visible (2.4.7) | Tab through every page | Every focusable element shows a 2px outline |
| A4 | Focus not obscured (2.4.11) | Tab to elements just below the sticky header | Focused element not fully hidden by header |
| A5 | Keyboard (2.1.1) | Complete "track a shipment" and "call/email" with keyboard only | Both succeed; no mouse needed |
| A6 | No keyboard trap (2.1.2) | Tab forward and back through the whole page | Focus never gets stuck |
| A7 | Bypass blocks (2.4.1) | Press `Tab` once after load | "Skip to main content" appears; `Enter` moves focus to `main` |
| A8 | Target size (2.5.8) | Inspect interactive bounding boxes | All ≥ 24×24px; primary CTAs ≥ 40px tall |
| A9 | Labels (1.3.1, 3.3.2) | Inspect accessibility tree | Every input has an accessible name |
| A10 | Error identification (3.3.1) | Submit an invalid tracking number | `aria-invalid="true"` on input; message linked via `aria-describedby`; announced by screen reader |
| A11 | Status messages (4.1.3) | Submit valid number with VoiceOver/NVDA on | Result region (`aria-live="polite"`) is announced |
| A12 | Reflow (1.4.10) | Viewport 320×640 | No horizontal scroll; no clipped content |
| A13 | Text resize (1.4.4) | Browser zoom 200% | All content and functionality available |
| A14 | Motion (2.3.3, 2.2.2) | Enable "Reduce motion" in OS | Ken Burns, card lift, and transitions stop |
| A15 | Link purpose (2.4.4) | List all links (screen reader rotor) | Every name is meaningful out of context |
| A16 | New window warning | Inspect `target="_blank"` links | Accessible name includes "opens in a new tab" |
| A17 | Images (1.1.1) | Inspect `img` elements | Content images have descriptive `alt`; decorative images use `alt=""` |
| A18 | Headings (1.3.1, 2.4.6) | HeadingsMap extension | One `h1`; no skipped levels |
| A19 | Language (3.1.1) | Inspect `<html>` | `lang="en"` present |
| A20 | Colour not sole cue (1.4.1) | Greyscale screenshot | Links, errors, and timeline state still distinguishable |

---

## 5. Content and tone standards

Voice: **concise, confident, implementation-focused.** Short sentences, active voice, concrete
verbs, numbers over adjectives.

| Element | Do | Don't |
| --- | --- | --- |
| Primary CTA | "Get a Quote", "Book a Home Pickup", "Track shipment" | "Submit", "Click here", "Go" |
| Secondary CTA | "Call 88864 44940" | "Contact" (ambiguous channel) |
| Headline | "From your door to the world in four steps" | "Welcome to our amazing website" |
| Body | "We pick up, pack, and deliver — you track every step." | "We strive to provide the best possible…" |
| Error | "Tracking number not recognized. XpresWings numbers start with "XW"." | "Invalid input", "Error 404" |
| Empty state | "Enter your tracking number to see live updates." | Blank area |
| Link | "Watch us on YouTube" | "More", "Here" |
| Stat | "98% on-time delivery" | "Very reliable" |

Rules:

- Buttons and links must start with a verb or name the destination.
- Error messages must say what happened and what to do next.
- Phone numbers must be formatted `88864 44940` in copy and `+918886444940` in `tel:` links.
- Title Case for buttons and nav; sentence case for headings and body.
- Claims (country count, percentages) must be confirmed by the client before launch.

---

## 6. Anti-patterns, migration notes, edge cases

### 6.1 Prohibited implementations

- Raw hex/px/ms values in components (`text-[#f58220]`, `p-[13px]`, `duration-[420ms]`).
- White text on `bg-primary`, or `text-primary`/`text-brand` text on light surfaces.
- `outline-none` / `focus:outline-none` without an equivalent replacement indicator.
- `<div onClick>` or `<span onClick>` — use `<button>` or `<a>`.
- Placeholder-only inputs; disabled links; icon-only controls without `aria-label`.
- Hover-only disclosure of essential content (touch users cannot hover).
- Auto-advancing carousels or motion that ignores `prefers-reduced-motion`.
- Hover `scale` transforms on CTAs (hit target moves; causes jitter).
- New font families, new shadows, or radius values outside §2.7.
- Generic placeholder social URLs in production.

### 6.2 Migration notes (current codebase → this spec)

| Area | Status | Action |
| --- | --- | --- |
| Tokens in `styles.css` | Done | Two-layer tokens, Poppins, orange/black palette |
| `navy` / `navy-deep` colours | Done | Renamed to `surface-dark` / `surface-darker` |
| Primary button text contrast | Done | `primary-foreground` → `text.inverse` |
| Global focus ring + `on-dark` | Done | Applied to all dark sections |
| Skip link, nav landmarks | Done | `/` and `/track` |
| Track form a11y | Done | Label, `aria-invalid`, `aria-describedby`, live region, stacked mobile form |
| Hand-written CTA class strings | Open | Replace with `buttonVariants({ size: "lg" })`; drop `hover:scale-[1.03]` and `shadow-primary/30` glows in favour of `shadow-brand` |
| `rounded-3xl` usages | Open | Migrate to `rounded-2xl` |
| Body text utilities | Open | `text-sm` → `text-body-lg`, `text-xs` → `text-body-sm`, `text-lg` → `text-body-3xl` |
| Mobile navigation | Open | Add `Sheet`-based menu below `lg` (§3.6) |
| Active nav state | Open | `aria-current` on Track link when on `/track` |
| Section anchor offset | Open | Add `scroll-mt-20` to anchored sections |
| Carousel Ken Burns | Partial | Stopped by reduced motion; add pause control or limit to one cycle |
| Social links | Open | Replace generic URLs with real profiles or hide |

### 6.3 Edge-case handling

| Case | Rule |
| --- | --- |
| Long headings | `text-balance`; never truncate. |
| Long emails/IDs | `break-all` on tracking IDs, `break-words` on emails. |
| Long button labels | Shorten copy; buttons must not wrap or ellipsize. |
| Empty collections | Show an explicit message + next action. |
| Missing images | Container keeps aspect ratio (`aspect-video`); `alt` still describes content. |
| Slow network | Fonts use `display=swap`; layout must not shift > 0.1 CLS. |
| Dark image overlays | Text only over areas with ≥ 70% `surface-darker` overlay. |
| 320px viewport | All rules in A12 apply; header CTA remains visible. |
| 200% zoom | No overlapping sticky elements; header height may grow. |

---

## 7. QA checklist

Run before every merge that touches UI. Every box must be checked.

**Tokens**
- [ ] No raw hex, px, or ms values added outside `src/styles.css` layer 1.
- [ ] New colours use a semantic alias from §2.4.
- [ ] Text sizes use the body (§2.1) or display scale only; nothing below 12px.
- [ ] Spacing uses §2.6 steps only; radius uses §2.7; shadow uses §2.8.

**States**
- [ ] Every new interactive component defines default, hover, focus-visible, active, disabled, loading, and error.
- [ ] Loading states set `aria-busy` and block duplicate submits.
- [ ] Error states set `aria-invalid` and link the message with `aria-describedby`.

**Accessibility**
- [ ] axe/Lighthouse: 0 violations on `/` and `/track` (A1).
- [ ] Keyboard-only walkthrough passes A3–A7.
- [ ] Dark containers have `on-dark`; focus ring visible on every surface.
- [ ] Every input labelled; every icon-only control has `aria-label`.
- [ ] Reduced-motion check passes (A14).
- [ ] 320px and 200% zoom checks pass (A12, A13).

**Content**
- [ ] CTAs start with a verb or name the destination.
- [ ] No "Click here", "Submit", or "More" labels.
- [ ] Error and empty states tell the user what to do next.
- [ ] Phone/email/social links point to real, confirmed destinations.

**Responsive & edge cases**
- [ ] Tested at 320, 375, 768, 1024, 1440px.
- [ ] Long content wraps; no horizontal scroll; no truncated labels.
- [ ] Empty, loading, and error renders verified for lists and cards.

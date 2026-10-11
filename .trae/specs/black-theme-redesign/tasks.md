# Black Theme Redesign - Implementation Plan

## Task 1: Fix UpcomingEvents.tsx — Convert light theme to full Black theme
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Replace section root background `bg-gradient-to-b from-white via-brand-50/50 to-ink-50` with `bg-ink-950` plus mesh/grid overlays consistent with other sections
  - Convert the "Open for Registrations" eyebrow from inline light gradient pill to `.eyebrow` / dark-safe pill
  - Convert section title/subtitle from using default `.section-title` (which relies on light dark variants on light surfaces) to explicit dark text classes `text-white` body / `text-ink-400` subtitle
  - Replace the "Events live" status card (currently `bg-white` + `border-ink-200` + `shadow-card` + `text-ink-900`) to dark equivalents
  - Convert every event row card (3-column layout):
    - Replace left-panel light badge (`bg-white/95` text `text-ink-900`) to dark badge
    - Middle content column: replace `border-ink-100` borders, `bg-brand-50/accent-50` chips, `text-ink-900` title, `text-ink-600` description, `.tag` (light) to dark equivalents
    - Right info column: replace `bg-gradient-to-br from-ink-50/60 to-white`, all info-box `bg-white` + `border-ink-200` cards, light progress-bar track `bg-ink-100`, `text-ink-500/600/800/900` labels to dark equivalents using `bg-white/[0.03..05]`, `border-white/10`, `text-white`, `text-ink-300/400`
    - Replace checklist `text-ink-600` and "Questions" link `text-ink-600` / hover text
  - Keep the bottom newsletter CTA section (it already uses `bg-ink-950`) but verify all inner classes are dark-safe
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-4, AC-5
- **Test Requirements**:
  - `rule` TR-1.1: Grep `UpcomingEvents.tsx` for light tokens returns 0 matches. Pattern: `grep -E 'bg-white|from-white|via-white|text-ink-[6-9]00|border-ink-[12]00|bg-ink-50|bg-brand-50|bg-accent-50|shadow-card[^-]|shadow-card$' src/components/UpcomingEvents.tsx` returns 0 lines. Evidence: command output.
  - `rule` TR-1.2: Section background uses `bg-ink-950`; all card surfaces use `bg-white/[0.03..0.06]` + `border-white/10` pattern; heading text `text-white`, body `text-ink-300/400`. Evidence: file diff + render screenshot.
  - `rubric` TR-1.3: Dark visual match vs sibling sections; scale 1-5; anchors 1=still light-looking, 3=dark but inconsistent with siblings, 5=indistinguishable in design language from Hero/About/Team; threshold >= 4; Evidence: screenshot side-by-side with Hero section.

## Task 2: Strengthen and unify index.css theme primitives for pure Black
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Update `html.dark body` default to `bg-ink-950` with stronger text (current is already `text-ink-300`) — confirm.
  - Ensure `.btn-secondary` dark variant uses the right dark shadow (current looks correct, verify).
  - Ensure `.card`/`.card-hover`, `.glass`/`.glass-dark` use the exact `shadow-card-dark` + `shadow-card-dark-hover` consistently.
  - Ensure `.surface-1/2/3` utilities match the new black layers (ink-950 base → surface-1 = card, surface-2 = elevated, surface-3 = highest).
  - Tighten `.eyebrow*`, `.tag*`, `.input-field` dark variants if any subtle light leaks exist (scrutinize default non-dark variants because the app is locked to dark).
  - Ensure scrollbar thumb/track and selection are dark-optimized.
- **Acceptance Criteria Addressed**: AC-3, AC-5, AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-2.1: `index.css` defines `.btn-primary/.btn-secondary/.btn-accent/.btn-ghost` and `.card/.card-hover` with valid dark-safe defaults (no light-only surfaces as the primary class). Evidence: file inspection.
  - `rubric` TR-2.2: Centralized primitive robustness; scale 1-5; anchors 1=primitives force light by default, 3=primitives work in dark but drift between sections, 5=all primitives are dark-first, balanced brand/accent/purple, consistent border radius, shadow and glow; threshold >= 4; Evidence: style sheet review.

## Task 3: Audit and fix all components for consistent black primitives
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - Walk through Navbar, Hero, About, Team, NECJourney, Gallery, Events, SocialMedia, Contact, Footer and:
    - Standardize section decoration layering (mesh-gradient-dark, grid-bg, dot-bg, blurred blobs) with consistent opacity ranges (mesh 60-80%, grid-bg 6-10%, dot-bg 20-30%, blob blurs 10-25%).
    - Replace any inline eyebrow/tag/button that differs from centralized classes with the centralized ones.
    - Harmonize inline hardcoded `bg-ink-900/80` / `bg-white/[0.03..0.06]` usages to stay within the same ranges.
    - Ensure section header eyebrow/tag styling uses `.eyebrow` or `.eyebrow-accent` uniformly (currently some components use inline `bg-purple-500/10 border-purple-400/20 text-purple-300` — decide a single palette direction and apply everywhere).
    - Ensure all form inputs (Contact, Newsletter, Subscribe) use the `.input-field` class pattern consistently.
    - Double-check no component uses `shadow-card` (light shadow) instead of `shadow-card-dark`.
- **Acceptance Criteria Addressed**: AC-2, AC-3, AC-4, AC-5, AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-3.1: Grep across all components for light-shadow and light-body tokens: `grep -En 'shadow-card[^-]|shadow-card$|text-ink-[6-9]00|bg-white[^/]|border-ink-[12]00' src/components/*.tsx` returns 0 matches (excluding `bg-white/[0.0x]` transparency). Evidence: command output.
  - `rule` TR-3.2: All section headers use either `.eyebrow` or `.eyebrow-accent` or an inline class that exactly matches one of those two palettes (no random color drift per component). Evidence: component diffs.
  - `rubric` TR-3.3: Section-to-section visual consistency; scale 1-5; anchors 1=sections feel from 3+ different sites, 3=mostly same but obvious small differences, 5=seamless one-design-system feel across all 10 sections; threshold >= 4; Evidence: full page screenshots.

## Task 4: Update tailwind.config.js gradients and shadows for refined Black depth
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: None
- **Description**:
  - Review `gradient-hero-dark` / `mesh-gradient-dark` for balance — strengthen brand purple and accent orange interplay slightly.
  - Ensure `shadow-card-dark`, `shadow-card-dark-hover`, `shadow-soft-dark` offer strong 3D layering. Keep glows (`glow-brand`, `glow-accent`) rich but not oversaturated.
  - Do not change the ink/brand/accent color palette tokens themselves.
- **Acceptance Criteria Addressed**: AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-4.1: No color hex values added/removed/changed for `ink`, `brand`, `accent` ranges in tailwind config. Evidence: diff of palette-only block.
  - `rubric` TR-4.2: Depth polish of black surfaces; scale 1-5; anchors 1=flat, 3=decent but bland, 5=tasteful layered depth via shadow strength + gradient overlay + glow; threshold >= 4; Evidence: screenshots.

## Task 5: Update index.html theme meta and ensure App.tsx root wrapper matches
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: None
- **Description**:
  - Confirm `<html class="dark">` and `body` class in `index.html` stay set to black theme values (`bg-ink-950 text-ink-300`).
  - Confirm `App.tsx` effect keeps forcing the `dark` class.
  - Double-check meta `theme-color` is dark-friendly (already `#020617`, correct).
- **Acceptance Criteria Addressed**: AC-2, AC-8
- **Test Requirements**:
  - `rule` TR-5.1: Both files use dark-friendly defaults and never reference light surfaces on the root wrappers. Evidence: file reads.

## Task 6: Run lint, build, and visual verification
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 1, 2, 3, 4, 5
- **Description**:
  - Run `npm run lint` to confirm oxlint passes.
  - Run `npm run build` (tsc + vite build) to confirm no TS errors and build succeeds.
  - Run `npm run dev` and visually inspect all sections end-to-end for any remaining theme leakage or contrast issues.
  - Capture evidence logs/screenshots for review.
- **Acceptance Criteria Addressed**: AC-6, AC-7, AC-8, AC-9
- **Test Requirements**:
  - `rule` TR-6.1: `npm run lint` exits 0 with no errors. Evidence: command output.
  - `rule` TR-6.2: `npm run build` exits 0 with no type/build errors. Evidence: command output.
  - `rubric` TR-6.3: End-to-end visual acceptance; scale 1-5; anchors 1=broken theme, 3=usable but rough edges, 5=flawless premium black experience; threshold >= 4; Evidence: summary + screenshots.

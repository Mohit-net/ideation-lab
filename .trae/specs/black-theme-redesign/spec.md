# Black Theme Redesign - Product Requirements Document

## Overview
- **Summary**: Redesign the entire Ideation Lab website with a consistent, pure Black theme across all components, pages, and UI elements. Fix all theme inconsistencies where light-theme styling leaks into the dark/black experience.
- **Purpose**: The user wants a unified, premium Black-themed visual identity that feels cohesive, modern, and visually striking. Currently the project has dark mode enabled globally, but at least one major component (UpcomingEvents) uses light-theme classes, breaking consistency.
- **Target Users**: Website visitors — prospective students, event attendees, mentors, collaborators, and anyone exploring The Ideation Lab / NEC 2026.

## Goals
1. Apply a consistent pure-Black visual theme to every component with zero light-theme leakage.
2. Unify color usage (surfaces, text, borders, gradients, accents) across all sections.
3. Enhance the black aesthetic with improved contrast, deeper blacks, consistent accent glows, and refined shadow treatments.
4. Ensure buttons, cards, forms, tags, badges, inputs, and every reusable primitive look identical in every section.
5. Refine subtle details — scrollbar, selection color, backgrounds, overlays, grid/dot patterns — for a polished Black experience.

## Non-Goals
- No light-mode toggle or dual-theme support; we are locking into a Black theme permanently.
- No functional/behavioral changes to components (navigation, forms, animations, routing, data) unless the theme requires it.
- No content copy changes.
- No new pages or new components.
- No changes to the package.json dependency set.

## Background & Context
- The project uses Vite + React 19 + TypeScript + Tailwind CSS 3.4 with `darkMode: 'class'`.
- `App.tsx` forces `dark` class on `<html>` on mount. `index.html` already has `class="dark"` and dark `body` classes.
- 11 of 12 components already use `bg-ink-950` / dark classes correctly.
- `UpcomingEvents.tsx` (the file the user has open) explicitly uses light backgrounds (`from-white via-brand-50/50 to-ink-50`, `bg-white`, `text-ink-900`, `border-ink-200`, `bg-ink-50`, `bg-brand-50`, `bg-accent-50`, light progress-bar track `bg-ink-100`, etc.). This is the biggest inconsistency.
- Several components use inline-styled badges and eyebrow tags instead of the centralized `.eyebrow` / `.eyebrow-accent` / `.tag*` utilities defined in `index.css`, which creates slight color drift.
- The Tailwind `ink` palette already provides excellent near-black shades (ink-950 = `#020617`, ink-900 = `#0f172a`). This PR will strengthen and standardize the use of these + brand/accent gradients.

## Functional Requirements
- **FR-1**: Every section background must use `bg-ink-950` (pure black base) with consistent accent mesh/gradient/glow overlays matching the established pattern.
- **FR-2**: `UpcomingEvents.tsx` must be converted from light theme to full Black theme matching the design language of every other section.
- **FR-3**: All card surfaces across all components must use the same background/border/shadow pattern: `bg-white/[0.03..0.06]`, `border-white/10`, `shadow-card-dark` (+ hover variants where applicable).
- **FR-4**: All text hierarchy must be consistent: headings = `text-white`, body = `text-ink-300`, muted/subtle = `text-ink-400` / `text-ink-500`. Zero `text-ink-700/800/900` or `text-white` used for body copy inappropriately.
- **FR-5**: All buttons (primary / secondary / accent / ghost) must be used via the centralized CSS classes in `index.css` and never ad-hoc inline styled.
- **FR-6**: All eyebrow tags, category pills, skill chips, and event badges must use the centralized `.eyebrow*` / `.tag*` CSS classes (or equivalent `dark:`-safe inline classes that match the palette exactly).
- **FR-7**: All form inputs (text, email, textarea, select) must use the `.input-field` class or equivalent dark-only styling with `bg-white/5` + `border-white/10`.
- **FR-8**: Section-level decoration (grid-bg, dot-bg, mesh gradients, blurred glow blobs) must use consistent opacity ranges and appear on every section in a balanced manner.

## Non-Functional Requirements
- **NFR-1 (Visual Consistency)**: A user scrolling from top to bottom should never feel like they switched themes between sections.
- **NFR-2 (Contrast & Accessibility)**: All text must meet at least WCAG AA contrast on the black backgrounds; accent gradient text must remain legible.
- **NFR-3 (No Regressions)**: Existing animations, interactions, responsive breakpoints, and Framer Motion transitions work identically after the redesign.
- **NFR-4 (Build)**: `npm run build` (tsc + vite build) passes with zero type errors.
- **NFR-5 (Lint)**: `npm run lint` (oxlint) passes with zero errors.

## Constraints
- **Technical**: Tailwind only; no new UI library, no CSS-in-JS changes, no new npm packages. Must use the existing `ink`, `brand`, `accent` palettes defined in `tailwind.config.js`.
- **Business**: Locked to Black theme only; no light-mode fallback.
- **Dependencies**: Existing stack only (React, framer-motion, lucide-react, clsx, tailwind-merge).

## Assumptions
- The "Black theme" request means pure dark/near-black aesthetic (ink-950 based), not a literal #000000-everywhere flat look. We keep the existing gradients, glows, and subtle mesh patterns for depth.
- The existing `brand` (purple/violet) + `accent` (orange) primary palette is acceptable and should be preserved as the color accents against black.
- User does not want functional changes.

## Acceptance Criteria

### AC-1: UpcomingEvents fully converted to Black theme
- **Type**: `rule`
- **Given**: A fresh render of the UpcomingEvents section
- **When**: Inspecting every background, text, border, and utility class in the component
- **Then**: Zero light-theme classes remain (no `bg-white`, no `from-white`, no `text-ink-900`, no `border-ink-200`, no `bg-ink-50`, no `bg-brand-50`, no `bg-accent-50`, no `bg-ink-100` on progress track, no `text-ink-600/700/800` on dark surfaces)
- **Pass Condition**: `Grep` over `UpcomingEvents.tsx` returns 0 matches for light-mode-only Tailwind tokens
- **Evidence**: Grep command output + visual screenshot of the section rendered

### AC-2: Every section uses a Black base background
- **Type**: `rule`
- **Given**: All 10 page sections (Navbar, Hero, About, Team, NECJourney, Gallery, Events, UpcomingEvents, SocialMedia, Contact, Footer)
- **When**: Reviewing the outermost `<section>` / wrapper background class
- **Then**: Every section root uses `bg-ink-950` (or an equivalent black-class wrapper), with optional mesh/grid/dot overlay layers
- **Pass Condition**: Visual inspection of all sections + grep confirms no `bg-white`, `bg-ink-50` section roots
- **Evidence**: Grep output over all components

### AC-3: All cards share one surface language
- **Type**: `rule`
- **Given**: Every card-like container across Hero stats, About pillars, Team member cards, NEC milestone cards, Events list, Gallery figures, Social cards, Contact cards, Upcoming event rows
- **When**: Comparing background, border, default and hover shadows
- **Then**: Consistent pattern: near-transparent white surface (`bg-white/[0.03–0.06]`), 10% white border, `shadow-card-dark` default, `shadow-card-dark-hover` + accent border on hover
- **Pass Condition**: No card uses `bg-white`, `border-ink-200/60`, or `shadow-card` (the light-only shadow)
- **Evidence**: Grep + component diff

### AC-4: Typography & text colors unified across all sections
- **Type**: `rule`
- **Given**: Full page
- **When**: Scanning every text node color class
- **Then**: Headings = white, body primary = ink-300, secondary/subtle = ink-400/500. No ink-600..900 body text on dark backgrounds.
- **Pass Condition**: Grep finds 0 instances of `text-ink-600|700|800|900` inside dark-only components (except gradient text intermediate uses).
- **Evidence**: Grep output

### AC-5: Reusable primitives use centralized classes
- **Type**: `rule`
- **Given**: All eyebrow / tag / button / input instances
- **When**: Comparing usage across components
- **Then**: Buttons use `.btn-primary/.btn-secondary/.btn-accent/.btn-ghost`; eyebrow tags use `.eyebrow` / `.eyebrow-accent` or match exact palette; tags use `.tag/.tag-brand/.tag-accent` or match exact palette; inputs use `.input-field` or match.
- **Pass Condition**: No ad-hoc eyebrow/tag colors that drift from the centralized palette; no duplicate button classes.
- **Evidence**: Component review + grep

### AC-6: Build succeeds with no TS errors
- **Type**: `rule`
- **Given**: Clean working tree after changes
- **When**: Running `npm run build`
- **Then**: tsc type-check passes, vite build completes, exit code 0
- **Pass Condition**: `npm run build` exits 0
- **Evidence**: Command output log

### AC-7: Lint passes
- **Type**: `rule`
- **Given**: Clean working tree after changes
- **When**: Running `npm run lint`
- **Then**: oxlint reports zero errors
- **Pass Condition**: `npm run lint` exits 0
- **Evidence**: Command output log

### AC-8: Overall black-theme visual coherence
- **Type**: `rubric`
- **Dimension**: Visual coherence, polish, and consistency of the Black theme experience end-to-end
- **Scale**: 1-5
- **Anchors**: 1 = jarring transitions, mixed light/dark; 3 = mostly consistent with small mismatches; 5 = seamless premium Black aesthetic, consistent surfaces/gradients/shadows/text, every section feels part of one design system
- **Pass Threshold**: >= 4
- **Evidence**: Full-page screenshots + reviewer visual inspection

### AC-9: Depth & polish of black surfaces
- **Type**: `rubric`
- **Dimension**: Depth, contrast, glow, overlay balance on pure-black surfaces without feeling flat or washed-out
- **Scale**: 1-5
- **Anchors**: 1 = flat black, no depth; 3 = moderate depth, uneven glows; 5 = tasteful layered glows/mesh/patterns with balanced brand+accent, strong 3D feel via shadows & hover elevation
- **Pass Threshold**: >= 4
- **Evidence**: Full-page screenshots, section close-ups

## Open Questions
- None at this time. The existing dark palette (ink-950 base + brand purple + accent orange) is treated as the agreed "Black theme" identity.

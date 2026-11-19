---
name: fix-vibe-coded-app
description: Audit and polish a web app that looks AI-generated ("vibe coded"). Use when asked to improve UI polish, remove generic AI-looking design, review a frontend's design quality, or make an app look professionally designed. Applies two checklists: a 20-point polish list (color, type, spacing, icons, copy, states, meta details) and a 20-point "unslop" list (hierarchy, badges, radius, contrast, tabular numbers, text wrapping, feedback animation).
---

# Fix Your Vibe-Coded App

Work through the checklist against the actual code. For each item: check it, fix it if it fails, and note what changed. Skip items that don't apply (e.g. no 404 page needed in a single-page app) and say so. Report a short pass/fixed/skipped summary at the end.

## Look and feel

1. **Kill purple gradients.** Remove default indigo/purple-to-blue gradients on heroes, buttons and backgrounds. Use flat colors or a gradient built from the app's own palette.
2. **Real icons, not emojis.** Replace emoji used as UI icons with one consistent icon set (Lucide, Phosphor, Heroicons) or custom SVGs. Same stroke width and size scale throughout.
3. **Tab title + favicon.** Set a meaningful `<title>` and `<meta name="description">`, and replace the default Vite/CRA/Next favicon with one that matches the brand.
4. **Fewer cards, more room.** Don't wrap everything in a bordered, shadowed card. Remove cards that only contain one thing, use whitespace and dividers for grouping, and let sections breathe.
5. **Font that isn't Inter.** Pick a deliberate typeface pairing (display + body) instead of the default Inter/system stack. Load it properly with `font-display: swap`.
6. **One accent colour.** One accent on a neutral base. Use it for primary actions and key highlights only. Define it as a CSS variable.
7. **Use a spacing scale.** Replace arbitrary pixel values with a fixed scale (e.g. 4/8/12/16/24/32/48/64) via CSS variables or the framework's tokens.
8. **One corner radius.** Pick a radius (or two: small and large) and apply it everywhere. No mixing sharp, 8px and fully round at random.
9. **Rewrite the copy.** Remove filler such as "Welcome to...", "Seamlessly", "Unlock the power of", "Elevate your...". Write specific, human, short copy about what the thing actually does.
10. **Use real photos.** Replace gray placeholder boxes, stock-looking illustrations and lorem ipsum with real images or none at all. Add `alt` text and set explicit dimensions.

## Product details

11. **Get your own domain.** Flag `*.vercel.app` / `*.netlify.app` URLs and recommend a custom domain. This is a user action, so list the steps and don't attempt it.
12. **Design empty states.** Every list, table and dashboard needs a useful empty state: a short explanation plus the next action.
13. **Proper loading states.** Use skeletons or spinners that match the final layout. Avoid layout shift and blank flashes.
14. **Custom 404 page.** Add a branded not-found route with a way back home.
15. **Real error messages.** Replace "Something went wrong" with messages that say what failed and what to do next. Show inline field errors on forms.
16. **Meaningful animations.** Keep motion that communicates (state change, hierarchy, feedback). Remove decorative bouncing/fading on everything. Respect `prefers-reduced-motion`.

## Process (apply when building or redesigning)

17. **Give AI a reference.** Ask the user for a screenshot, site or design they like and match its layout, type and color decisions.
18. **Write a design brief.** Before changing visuals, write a short brief: audience, tone, 3 adjectives, color, type, and what to avoid. Keep it in the repo (e.g. `DESIGN.md`).
19. **Design system first.** Define tokens (colors, type scale, spacing, radius, shadows) and a few base components before building pages, then build pages from them.
20. **The Impeccable skill.** If a skill named `impeccable` (or similar design-polish skill) is installed, invoke it for a final pass. If it isn't available, say so and ask the user to install it. Don't invent its contents.

---

# Part 2: Unslop AI Designs (quick pass)

A second, faster checklist for layout and typography details. Items that repeat Part 1 are marked; check them once and report under both numbers.

## Content and hierarchy

- **U1. Delete filler badges.** Remove decorative pills/badges ("New", "AI-powered", "v2.0", emoji tags) that carry no information.
- **U2. Drop redundant labels.** If a heading, icon or value already says it, delete the label repeating it (e.g. "Email" above an obvious email field with a placeholder, "Description:" before a paragraph).
- **U3. Unitalicize random words.** Remove stray italic or gradient-highlighted words in headlines and body text. Emphasis must be rare and purposeful.
- **U4. Mono only where needed.** Use monospace for code, IDs, and numbers that need alignment. Not for labels, eyebrows or decoration.
- **U5. Use a design system.** Same as Part 1 #19. Tokens and shared components over one-off styles.
- **U6. Show the actual product.** Replace abstract illustrations and mock cards with real screenshots or live UI of the product.
- **U7. Enlarge the main feature.** Make the most important feature or content visibly bigger than supporting items. Avoid equal-sized grids where one thing matters most.
- **U8. Group with spacing.** Related items sit close, unrelated items sit far apart. Prefer spacing over borders and boxes to show grouping.
- **U9. Make headlines specific.** Say what it is and who it is for. Replace vague headlines like "Build faster" with a concrete claim.
- **U10. Emphasize the CTA.** One clearly primary action per view. Secondary actions are visually quieter (outline or text link).

## Visual details

- **U11. Add an accent colour.** Same as Part 1 #6. One accent on a neutral base.
- **U12. Keep icons consistent.** Same set, stroke width, size and color treatment. Same as Part 1 #2.
- **U13. Remove embellishments.** Strip unnecessary glows, blurs, heavy shadows, gradient borders and background blobs that don't aid comprehension.
- **U14. Inner radius = outer − padding.** For nested rounded elements, set the child radius to the parent radius minus the padding between them so the curves line up.
- **U15. Improve text contrast.** Check body and muted text against WCAG AA (4.5:1 normal, 3:1 large). Lighten or darken grays that fail, especially on dark themes and colored backgrounds.
- **U16. Wrap headlines properly.** Use `text-wrap: balance` on headlines (and `pretty` on paragraphs) to avoid orphans and lopsided line breaks. Set a sensible max width.
- **U17. Align by eye, not pixels.** Optically adjust icons next to text, play-triangle buttons, large type and mixed-shape elements so they look aligned even when the numbers don't match.
- **U18. Use tabular nums.** Apply `font-variant-numeric: tabular-nums` to prices, scores, tables, timers and any numbers that update or stack in columns.
- **U19. Add loading states.** Same as Part 1 #13.
- **U20. Animate useful feedback.** Animate hover, press, success, error and state changes (short, 150–250ms, eased). Do not animate for decoration. Respect `prefers-reduced-motion`.

---

## Output

End with a table: item number (1–20, then U1–U20), status (pass / fixed / skipped), and a one-line note. Run the project's lint and build commands after making changes.

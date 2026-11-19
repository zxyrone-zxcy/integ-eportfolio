# Design brief

**Audience:** my instructor and classmates reviewing my Integrative Programming 1 work.
**Tone:** precise, technical, quiet.
**Three words:** white, mono, hairline.
**Reference:** the "Nodal" landing page (white, monospace headings, hairline grid, stippled sphere hero). Light by default with a header toggle for dark mode (saved in localStorage); all colors come from tokens, with dark overrides under `:root[data-theme="dark"]`.

## Tokens (see `src/index.css`)
- **Color:** white base, near-black ink (`--ink`), greys for secondary text. The only color is `--low` red for a weak score.
- **Type:** IBM Plex Mono for headings, labels and numbers; Inter for body. Labels are 10-11px uppercase with wide tracking.
- **Structure:** 1px hairline borders (`--line`) divide sections and grid cells. Cells touch, with no gaps or shadows.
- **Shape:** square corners. No pills.
- **Spacing:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px (`--s1` to `--s16`), 40px page gutter.
- **Section labels:** `■ 01 / RESULTS` style kickers; figure labels `FIG. 02`.

## Avoid
- Gradients, glows, shadows, emoji icons, decorative animation.
- Filler badges and labels that repeat what is already visible.
- Rounded cards. Group with hairlines and spacing.

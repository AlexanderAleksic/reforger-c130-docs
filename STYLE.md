# Writing guide for C-130J docs

Audience: **players and crews** using the mod in Arma Reforger (pilots, loadmasters, Game Masters).
Not modders. Never show script code, class names, prefab GUIDs or file paths unless a page is
explicitly about setup. Translate internals into what the player sees, presses and should expect.

## Tone
- Plain, direct, second person ("Press <kbd>J</kbd> to open the ramp").
- Short paragraphs. Numbered steps for procedures, tables for keybinds/values, bullets for lists.
- No marketing fluff, no emoji.
- Accurate over complete: only document behaviour you verified in the source. If something is
  unclear, describe it conservatively. Never invent keybinds, numbers or UI labels.
- Give real numbers where the code has them (speeds in km/h or knots as the game shows them,
  times in seconds, fuel amounts, limits), rounded sensibly.

## Linear structure
The site is read top to bottom: Start here -> Basics -> Flying -> Systems -> Cargo -> Advanced.
A page may rely on earlier pages and link back; it should not need later pages. Link forward with
"See [X](...) later" only when helpful. Each page:
1. One-sentence lead paragraph saying what the page covers.
2. Content with `##` / `###` headings (never `#`; the title comes from frontmatter).
3. Optionally end with a short "Next" sentence pointing to the next page.

## File format
Files are `.mdx` in `src/content/docs/<section>/<page>.mdx`. Frontmatter:

```
---
title: Taxi and takeoff
description: One sentence for search/SEO.
---
```

Available components (import at the top after frontmatter when used):
```
import { Aside, Steps, Tabs, TabItem } from '@astrojs/starlight/components';
```
- `<Aside type="tip|note|caution|danger">` for warnings and tips. Use sparingly.
- `<Steps>` wrapping a numbered markdown list for procedures.
- Keys: `<kbd>J</kbd>`. In-game action names (the scroll-menu / interaction text): **bold**.

Internal links use the base path: `[Autopilot](/reforger-c130-docs/flying/autopilot/)`.
Page slugs are in astro.config.mjs.

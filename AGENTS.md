# AGENTS.md — Mammouth AI Documentation Site

## Project Overview

This is a **VitePress**-powered documentation and blog site for [mammouth.ai](https://mammouth.ai), an AI chat platform. Content is written in Markdown and served as a bilingual (English + French) static site.

- English articles: `/docs/<article-slug>/index.md`
- French articles: `/fr/docs/<article-slug>/index.md`
- Site config: `.vitepress/config.mts`
- Custom theme: `.vitepress/theme/`

---

## Commands

### Development

```bash
npm run dev          # Start local dev server (vitepress dev .)
npm run install:launch  # npm install then start dev server
```

### No Test Suite

There are no automated tests in this project. "Testing" is done by running the dev server and visually verifying pages render correctly.

### Pre-commit Hook (Lefthook)

A pre-commit hook runs automatically via **Lefthook** on every `git commit`:

```bash
# Runs automatically — do not skip
node .lefthook/pre-commit/secrets-scan.js
```

This scans staged changes for secrets/credentials using `infisical scan` against a `baseline-report.json`. **Never commit sensitive data.** If the hook fails, remove the sensitive content before retrying.

A post-merge hook runs `git lfs pull` to pull binary assets after a `git pull`.

---

## Bilingual Content Rule (Critical)

**Every English article edit must be accompanied by a French translation update.**

- When editing `/docs/<slug>/index.md`, also edit `/fr/docs/<slug>/index.md`.
- The French file is a full translation of the English file — same structure, same media references (adapted paths if locale-specific assets exist), same frontmatter.
- French locale assets live under `/fr/docs/<slug>/` (e.g., GIFs with `_FR` suffix).
- English assets live under `/docs/<slug>/` or `/public/`.

---

## Content Structure

```
/                        # Root English home page (index.md)
/docs/<slug>/index.md    # English article
/fr/                     # French home page (fr/index.md)
/fr/docs/<slug>/index.md # French article
/public/                 # Shared static assets (images, icons)
```

Each article is a directory with an `index.md` file. Media files (GIFs, images, videos) are co-located in the same directory as the article.

---

## Markdown Style Guidelines

### Frontmatter

Only use frontmatter when required by VitePress (e.g., `layout: home` on the root index). Most articles have **no frontmatter**.

### Headings

- Use `#` for the page title (one per file).
- Use `##` for top-level sections.
- Use `###` for subsections.
- Do not skip heading levels.

### Emphasis & Formatting

- Use `**bold**` for key terms, UI element names, and feature names.
- Use `*italic*` sparingly.
- Use backticks for inline code, file paths, model identifiers, and UI labels.
- Use fenced code blocks with a language identifier (` ```python `, ` ```bash `, ` ```json `, etc.).

### Links

- Use relative links for internal cross-references: `../other-article/index.md` or `/docs/other-article/`.
- Absolute links (`https://mammouth.ai/...`) for external URLs.
- French articles link to French counterparts: `/fr/docs/<slug>/`.

### Images & Media

```markdown
<img src="/docs/<slug>/image.gif" alt="descriptive alt text" style="height: auto;" />
```

- Always include a meaningful `alt` attribute.
- Use `style="height: auto;"` to preserve aspect ratio.
- Videos use an HTML `<video>` tag with `controls autoplay muted loop`.
- YouTube embeds use a `<div>` with responsive iframe (see `fr/docs/introduction-to-mammouth/index.md`).

### VitePress Callouts (Custom Containers)

```markdown
::: info
Content here
:::

::: warning
Content here
:::
```

Use `::: info`, `::: warning`, `::: tip`, `::: danger` for callout boxes.

### Inline HTML & CSS

Inline HTML and `<style>` blocks are allowed and used throughout. Common patterns:

- Colored `<span>` tags for highlighted text.
- Custom CSS classes (`.failed-box`, `.success-box`, `.info-box`, `.warning-box`, `.tip-box`) defined in `<style>` blocks within articles.
- Dark mode overrides using `:root.dark` selector.
- Always support both light and dark modes when adding custom CSS.

---

## VitePress Config Conventions

Config is in `.vitepress/config.mts` (TypeScript with `.mts` extension). Key conventions:

- Use `defineConfig()` from `vitepress`.
- Navigation and sidebars are defined per locale (`root` = English, `fr` = French).
- Both sidebars must be updated in sync when adding a new article to the nav.
- The `getNav()` helper generates nav links for both locales — update it for new nav items.

---

## Adding a New Article Checklist

1. Create `/docs/<slug>/index.md` (English).
2. Create `/fr/docs/<slug>/index.md` (French translation).
3. Add any media assets to the respective article directories.
4. Add the article to the sidebar in `.vitepress/config.mts` (both `"/"` and `"/fr/"` sections).
5. Optionally link from the home pages (`index.md` and `fr/index.md`).
6. Run `npm run dev` and verify both English and French pages render correctly.

---

## Security

- This repository is **public**. Never commit secrets, API keys, tokens, or any sensitive data.
- The Lefthook pre-commit hook enforces this via `infisical scan`.
- The `baseline-report.json` tracks known findings — do not delete it.

---

## Theme & Styling

- Custom CSS: `.vitepress/theme/custom.css` — overrides VitePress CSS variables.
- Brand color: `#8e6e59` (dark brown / mammouth brown).
- Custom layout: `.vitepress/theme/CustomLayout.vue` — wraps the default VitePress layout.
- Theme entry: `.vitepress/theme/index.js`.
- Always account for dark mode (`:root.dark` or `html.dark` selectors).

---

## Naming Conventions

- Article directory slugs: `kebab-case` (e.g., `how-to-write-an-effective-prompt`).
- Article files: always `index.md`.
- Image/media files: `kebab-case` or `snake_case` as already established per article.
- French locale media files often have a `_FR` or `_fr` suffix.
- TypeScript config files: `.mts` extension for VitePress config.

---

## Git & Workflow

- **Do not** commit `.vitepress/cache/` or `.vitepress/dist/` (gitignored).
- **Do not** commit `node_modules/` (gitignored).
- Pre-commit secrets scan runs automatically — do not use `--no-verify`.
- After `git pull`, `git lfs pull` runs automatically to fetch binary assets.

# Blogdoc

Blog, docs & infos about [mammouth.ai](https://mammouth.ai)

## Dev

Before anything, you need to install [git lfs](https://git-lfs.com)

Then activate it:

```bash
git lfs install
# also, install the commit hooks (defined in .lefthook.yaml) with:
npx lefthook install
```

This will asure large files are treated as references (git doesn't like binary files).

The dev server launches automatically when opening VSCode, as well as a preview integrated web browser tab.

### Vitepress usage

https://vitepress.dev/guide/routing

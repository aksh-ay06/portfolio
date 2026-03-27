# Digital Brain — Portfolio

A living portfolio, learning log, and personal journal built with [Quartz v4](https://quartz.jzhao.xyz). Written in Obsidian, deployed via Git.

---

## How to Add Content

All content lives in the `content/` folder as Markdown files. Drop a file in the right section and push — the site rebuilds automatically.

### Sections

| Folder | Purpose |
|---|---|
| `content/projects/` | Technical builds with architecture and logs |
| `content/learning/` | Atomic TIL notes and snippets |
| `content/blogs/` | Long-form articles |
| `content/off-grid/` | Hobbies, hardware hacks, personal entries |

### Using Templates

Copy a template from `templates/` into the relevant section and fill it in:

```bash
# New project entry
cp templates/engineering-project.md content/projects/my-project.md

# New off-grid entry
cp templates/off-grid-entry.md content/off-grid/my-entry.md
```

### Frontmatter Fields

Every file needs this at the top:

```yaml
---
title: "Your Title"
date: YYYY-MM-DD
tags:
  - tag-name
draft: false   # set to true to hide from the site
---
```

### Linking Between Notes

Use `[[wikilinks]]` to connect notes — these build the interactive graph:

```markdown
See also: [[projects/my-project|My Project]]
```

---

## How to Remove Content

Delete the file and push:

```bash
rm content/blogs/old-post.md
git add .
git commit -m "remove: old blog post"
git push
```

Any wikilinks pointing to the deleted file will show as broken nodes in the graph — search for `[[filename]]` across your vault and remove those references too.

---

## Local Preview

```bash
npx quartz build --serve
# → http://localhost:8080
```

---

## Deploy

Every `git push` to `main` triggers the GitHub Actions workflow and deploys to:

**https://aksh-ay06.github.io/portfolio**

---

## Tech Stack

- [Quartz v4](https://quartz.jzhao.xyz) — static site generator
- [Obsidian](https://obsidian.md) — writing environment
- GitHub Pages — hosting
- GitHub Actions — CI/CD

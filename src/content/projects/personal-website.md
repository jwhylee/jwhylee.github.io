---
title: "Personal Site (jwhylee.github.io)"
summary: "Static site for an about page, project write-ups, and study notes — built to be cheap to run and easy to write in."
period: "2026.09 –"
role: "Solo"
stack: ["Astro", "TypeScript", "Tailwind", "GitHub Pages"]
repo: "https://github.com/jwhylee/jwhylee.github.io"
featured: true
order: 1
---

## Problem

I wanted one place for lab applications to look at and one place to keep study
notes, without paying for hosting or maintaining a backend.

## Approach

Astro with content collections: every post is a Markdown file with a typed
frontmatter schema, so a typo in a field fails the build instead of shipping a
broken page. GitHub Actions builds on push and deploys to GitHub Pages.

## Result

*(Write this once the site is live — what worked, what you'd do differently.)*

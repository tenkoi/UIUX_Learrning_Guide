# Dashboard & Enterprise UX — Learning Guide

A self-contained, interactive learning website covering the path from UX fundamentals to senior enterprise dashboard designer. Built as a 36-week roadmap across 14 modules, with curated videos, quizzes, a domain glossary, and a teaching adaptation for classroom use.

**Instructor:** Mohd Faiz bin Alias, University of Cyberjaya

---

## What's inside

| | |
|---|---|
| Modules | 14, across 4 phases |
| Quiz questions | 52, each with answer rationale |
| Curated videos | 42 (3 per module), instructor-selected |
| Curated channels | 17, each with a note on what it's good at |
| Glossary terms | 20 enterprise domain terms, filterable |
| Named pitfalls | 10, each linked to the module that fixes it |
| Milestones | 10-point self-assessment checklist |

---

## Files

There are two ways to use this. Pick one.

### Option A — single file (simplest)
```
enterprise-ux-guide.html
```
Everything (HTML, CSS, JavaScript, all content) is inlined into one file. **Double-click it** to open in any browser. No server, no build step, no internet required except for loading videos and fonts. This is the version to hand to students or upload to a host.

### Option B — editable source (four files)
```
enterprise-ux-guide/
├── index.html    → page structure and static sections
├── style.css     → all styling (Gumroad-inspired visual language)
├── app.js        → rendering, quizzes, progress, search
└── data.js       → ALL content: modules, videos, quizzes, glossary
```
Edit these when you want to change content. Almost everything you'd want to update lives in `data.js`.

---

## How to run it

No installation. Open `enterprise-ux-guide.html` (or `enterprise-ux-guide/index.html`) in a browser.

If you prefer a local server for the four-file version:
```bash
cd enterprise-ux-guide
python3 -m http.server 8000
# then open http://localhost:8000
```

To host it: upload either the single file, or the whole `enterprise-ux-guide/` folder, to any static host (GitHub Pages, Netlify, university web space). No backend needed.

---

## Editing content

Open `data.js`. It's organised into labelled objects.

### Change a module's text
Find the module by its `id` (`m1` through `m14`) in the `CURRICULUM` array. Each module has:
- `outcomes` — "by the end you can" bullets
- `learn` — what to study
- `enterprise` — the enterprise-specific reality
- `practice` — the "try this week" task
- `deliverable` — the artifact to produce
- `quiz` — questions, each with `a` (options), `correct` (index of right answer), and `why` (rationale)

### Change a video
Videos live in the `SUPPLIED` object at the bottom of `data.js`, keyed by `moduleId-slotIndex`:
```js
"m1-0": { id:"xkXaPOb9Qxo", t:"User Research Full Course 2026", s:"Simplilearn" },
```
- `id` — the 11-character YouTube video ID (the part after `watch?v=`)
- `t` — the title shown on the card
- `s` — an optional source/channel note

To swap a video, replace the `id`. To move one to a different module, change its key. Slot index is `0`, `1`, or `2` (first, second, third card in that module).

### Change the instructor name
Search `index.html` for `Mohd Faiz bin Alias` — it appears in three places (hero, teaching section, footer). Search `University of Cyberjaya` for the institution.

### Rebuild the single file after editing
```bash
cd enterprise-ux-guide
python3 - <<'PY'
html=open('index.html').read()
html=html.replace('<link rel="stylesheet" href="style.css">','<style>\n'+open('style.css').read()+'\n</style>')
html=html.replace('<script src="data.js"></script>\n<script src="app.js"></script>',
                  '<script>\n'+open('data.js').read()+'\n</script>\n<script>\n'+open('app.js').read()+'\n</script>')
open('../enterprise-ux-guide.html','w').write(html)
print('rebuilt')
PY
```

---

## How the video links work

Each of the 42 videos was hand-picked by the instructor. Every card leads with a **Watch** button that opens the chosen video directly in a new tab.

Each card also carries a **More like this** link — to the relevant channel or a search filtered to recent uploads — so if a video is ever taken down or dated, current material on the same topic is one click away. The channel note explains what each creator is specifically good at, so learners can go deeper by need rather than by subscriber count.

> **Note on link longevity.** YouTube IDs can break if a creator deletes or unlists a video. The IDs here are exactly as supplied and were not independently verified to resolve. If a Watch button 404s, update the `id` in `data.js` (see above) — the fallback link keeps that slot useful in the meantime.

---

## Features

- **Search** across all module content (try "table", "token", "accessibility", "ERP")
- **Per-module completion** checkboxes and a weighted **progress ring** in the header
- **Interactive quizzes** — pick an answer, see immediately whether it's right and why
- **Filterable glossary** by domain (ERP, CRM, HRM, LMS, Health, Finance)
- **Pitfalls** section that links each failure mode to its corrective module
- **Teaching adaptation** — 24-week semester structure with a grading rubric
- Fully **keyboard-navigable**, with a skip link and visible focus states

---

## Known limitation

**Progress is session-only.** Quiz answers, completed modules, and checked milestones are held in memory and reset on page refresh. Browser storage (`localStorage`) was intentionally not used. To make progress persist, swap the in-memory `state` object in `app.js` for `localStorage` — roughly a ten-line change.

---

## Design

The visual language is Gumroad-inspired: 2px black borders, hard offset shadows with no blur, flat colour blocks, no gradients, no border-radius softening. Fonts are Inter (body) and JetBrains Mono (labels), loaded from Google Fonts.

---

## Curriculum at a glance

**Phase 1 — Foundations (Wk 1–8):** UX Fundamentals · Information Architecture · Low-Fidelity Wireframing

**Phase 2 — Tool Mastery (Wk 9–16):** Figma Fundamentals · Auto Layout & Components · Design Systems

**Phase 3 — Specialisation (Wk 17–28):** Dashboard UI Patterns · Data Visualization · Responsive & Adaptive Design · Accessibility · Prototyping & Usability Testing

**Phase 4 — Professional Practice (Wk 29–36):** Developer Handoff · Enterprise Domain Knowledge · Stakeholder & Business Skills

---

*Dashboard & Enterprise UX Learning Guide · Instructor: Mohd Faiz bin Alias, University of Cyberjaya*

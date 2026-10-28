# Emotion Recognition in Communication, project website

Public website for the READ fellowship project between the University of Tirana
(Ana Ktona) and the University of Victoria (Alex Thomo), 2025-26.

Static HTML and CSS, no build step. Open `index.html` in a browser to preview.
Published with GitHub Pages from the `main` branch root of
`albemolab/albemolab.github.io`, at https://albemolab.github.io. Pushing to
`main` updates the live site within a minute or two.

## Decisions taken (2026-10-07)

- English only. No Albanian version for now.
- The TMLR cross-lingual study is presented as a project output.
- Team page: the six AlbEmo co-authors with photos and bios, the four other
  collaborators from the READ proposal listed by name.
- Hosted under the `albemolab` GitHub organization (2026-10-28).

## Style (2026-10-28)

Modelled on deep-culture.org: little administrative detail. No About page,
no program description or timeline. The home page is a three-sentence intro
plus dated news posts; funders appear only as the logo strip above the footer
("Supported in part by") and the one-line footer disclaimer required by the
READ Letter of Engagement (VI.B.4). To add news, copy an `<article class="post">`
block on the home page, newest first.

## Pages

| File | Content |
|---|---|
| `index.html` | Short intro and a grid of dated news posts |
| `team.html` | People (nav label "People") |
| `albemo.html` | The AlbEmo corpus for a general reader |
| `study.html` | The TMLR cross-lingual study in plain language |
| `publications.html` | Citations, dataset, code |

## Where things come from

- Every statistic on the site was checked against the published AlbEmo paper
  (Data in Brief 69, 2026, 113282) or the TMLR camera-ready source.
- `figures/` are the PNG figures from the two papers, unmodified.
- `images/` holds photos and logos. Their provenance is recorded in
  `SOURCES.md`. Photos pulled from institutional pages are placeholders until
  each person confirms them.
- No audio is hosted here. The corpus lives on Zenodo (10.5281/zenodo.21638085).

## Rules for editing

- Speakers in the corpus are anonymous (sp01 to sp10). Never state or imply
  which team members recorded or rated.
- Numbers come from the papers, not from memory.
- Plain English, no em-dashes, short paragraphs.

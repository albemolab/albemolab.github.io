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
- Team page: two project leads and nine members, all with photos and one-line
  bios. Renisa Beqiri (psychologist) was added on Ana's request on 2026-11-02.
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
| `prototype.html` | The multimodal research prototype (added 2026-11-01 from Ana's note; its paper by Ilma and Emiranda is in preparation, and Alex confirmed the figures with the team) |
| `seminar.html` | Closing seminar, 20 Nov 2026 (the READ application's "capstone seminar"; Ana is considering renaming it "workshop"). After the event, turn it into a short report |
| `publications.html` | Citations, dataset, code |

## Where things come from

- The one exception is `prototype.html` (860 recordings, 150 scenarios), which
  comes from Ana's description pending the paper. Link the paper when it appears.
- Every other statistic on the site was checked against the published AlbEmo paper
  (Data in Brief 69, 2026, 113282) or the TMLR camera-ready source.
- `figures/` are the PNG figures from the two papers, unmodified.
- `images/` holds photos and logos. Their provenance is recorded in
  `SOURCES.md`. Photos pulled from institutional pages are placeholders until
  each person confirms them.
- No audio is hosted here. The corpus lives on Zenodo (10.5281/zenodo.21638085).

## Caching

Pages load `css/style.css?v=N` and `js/nav.js?v=N`. After changing either file,
bump N on every page, or phones keep showing the old version.

## Rules for editing

- Speakers in the corpus are anonymous (sp01 to sp10). Never state or imply
  which team members recorded or rated.
- Numbers come from the papers, not from memory.
- Plain English, no em-dashes, short paragraphs.

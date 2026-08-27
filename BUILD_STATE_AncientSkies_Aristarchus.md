# BUILD_STATE — Ancient Skies 1 · Aristarchus' Wager

Track: **A — new game**, resumed mid-build. The game file arrived from outside this
repository (project knowledge) already at the header's claimed "gate A10"; no
`DESIGN_LOCK.md` or prior `BUILD_STATE.md` existed in `physicsplay/Astrojourneys`, so
gates A1–A9 are **not independently verified here** — only inferred from the shipped
code and its header comment. Treat that inference as provisional until the author
confirms it against whatever design notes exist outside this repo.

## Status

| Gate | State | Notes |
|---|---|---|
| A1–A9 | Inferred complete, unverified | No `DESIGN_LOCK.md` in repo. One relationship confirmed in code: `D/d = s/L`, used 4x (Watch/Predict/Inverse/Crisis). |
| A10 | Done (outside this repo) | Header: "Built at gate A10 by Claude Fable 5 · 2026-08-04". |
| **A11** | **Partial — see below** | No `tools/` checks or `.github/workflows/checks.yml` exist anywhere in this repo (not just for this game). Ran manual equivalents in-container instead (see "Checks run this session"). |
| A12 | Two Charter violations found and fixed this session | See "Fixes applied". |
| A13 | **Blocked on the author** | Perfect-student grading pass done manually (below); the five-item hand test has not been run on a real device. |
| A14–A17 | Not started | |

## Fixes applied this session (model: Sonnet 5)

1. **Article 4 — medal was numeric-band only.** `commit()` set `S.medal` from `medalFor(errPct)`
   alone; `finalizeStage()` computed the 40/25/25/10 composite score but never used it to cap
   the medal before firing fanfare / unlocking the next stage. A student could ace the arithmetic,
   fail the concept gate and self-explanation, and still be awarded Gold.
   Fix: added `compositeBand(score)` (Gold≥90·Silver≥75·Bronze≥60) and the required
   `awarded = min(numeric-band, composite-band)` in `finalizeStage()`. `awarded` now drives the
   medal ledger, fireworks, sound, toast text, and stage-unlock check. The numeric band is kept
   visible in the debrief (relabelled "Numeric band (provisional)") since it is legitimate
   Article-8 feedback, but it is no longer presented or used as the final medal.
2. **Article 6 — Easy mode had real grading effects.** `medalFor()` multiplied error bands by
   1.5× in Easy mode; `answerGate()` granted a free first-slip (full concept-gate score, no
   wrong-attempt count) on the first miss in Easy mode. Both are explicitly banned by the
   Aug-2026 author decision quoted in the skill ("no wider bands, no first-slip-free, no grading
   effect of any kind"). Fix: removed both effects. Replaced with the one effect Easy mode is
   chartered to have — "an extra strategy hint" — via a new `easyHint` string per stage, appended
   to the existing hint list only when Easy is on, priced by the same free-first/paid-rest rule
   as every other hint in every mode. "Softer narrative framing" (the other half of Article 6's
   description of Easy mode) has **not** been written — flagged as open below, not a violation,
   since the Article describes what Easy mode may do, not a checklist it must exhaust.
3. **Article 13 — canvas text illegible at 375px despite a legal source file.** The canvas is a
   fixed 900×520 backing store scaled via CSS `width:100%`. Measured with Playwright at a 375px
   viewport: displayed width 321px, so an on-source "13px" `ctx.font` painted at **4.6px** —
   exactly the backing-vs-displayed trap the skill documents by name, down to the same 900px/321px
   numbers. Fix: extended the existing font-clamp prototype patch (previously only handling the
   13px floor and Presentation Mode's ×1.35) to also read `canvas.getBoundingClientRect()` and
   scale every `ctx.font` assignment by the backing/displayed ratio, so the *effective on-screen*
   size is what was declared, floored at 13 real CSS px. Verified with Playwright post-fix:
   effective size is now ≥13.0px at 375px width (measured 13.02px for a declared "13px" font).

## Checks run this session (manual, in-container — no `tools/` scripts exist yet)

- `node --check` on the extracted inline script — **pass**, both before and after edits.
- Grep for external `src=`/`href=` to `http`/`//` — **none found** (Article 10 satisfied).
- Grep scoped to `font-size:` / `--fs-*` / `ctx.font=` literals only — **all declared values ≥13px**
  (the earlier draft check that flagged CSS padding/gap/border-radius as "font sizes" was a false
  positive from an unscoped `px` grep and has been discarded).
- `data-step` card-count audit by hand: every step (`brief`, `gate`, `compute`, `run`, `debrief1`,
  `debrief2`) shows ≤3 cards. **Pass.**
- No-answer-leak audit by hand: `analyticFor()` is only called inside `commit()`, after the
  student's value is read from the input; nothing precomputes or displays it earlier. **Pass.**
- Playwright end-to-end run of the Watch stage (brief → slide → record → commit → run → debrief1
  → self-MCQ → debrief2 → transfer → finalize): **zero console/page errors**, composite-capped
  medal logic produces a sane result (Silver, 87/100, on a run with one wrong self-explanation
  attempt).
- Playwright 375px viewport measurement of the canvas legibility fix: **pass** (see above).

**Not run — needs real `tools/` infrastructure, which does not exist anywhere in this repo:**
`check-cards.js`, `check-syntax.js`, `smoke-test.js` (400-frame DOM-shim boot), `physics-diff.js`,
the instrumented paint audit, and the formal perfect-student grading test across all 2–3 scenarios
per stage. This is a gap in the repo generally, not specific to this game — every one of the 13
existing games has presumably shipped without this pipeline too.

## Open items for the author (nothing further to decide from me right now)

1. **A13 hand test — only you can do this.** Five things, on a real phone if possible:
   - Touch controls work on a real phone.
   - The layout holds at 375px (I've verified the *canvas font* survives at that width; I have not
     verified the surrounding page layout, card stacking, or touch target sizing by eye).
   - A hard reload starts cleanly in a fresh browser.
   - The file runs with the network off.
   - The debrief shows prediction, actual, error percentage, and the worked solution (confirmed
     present in code; please confirm it reads well).
2. **Do you have a `DESIGN_LOCK.md` for this pilot outside the repo?** If so, send it so gates
   A1–A9 can be checked against it rather than left as "inferred from code."
3. **Repo-wide decision, not just this game:** none of the ten pre-delivery checks are automated
   here. Worth a separate initiative to build `tools/` + `.github/workflows/checks.yml` once,
   rather than re-deriving manual checks by hand for every game (this one included) going forward.

## File

`AncientSkies_Aristarchus.html` — committed to this branch, **not yet linked from `index.html` or
`README.md`** (Track A/E rule: the link changes last, only once every check is green and the
perfect-student test earns Gold — neither has fully happened yet).

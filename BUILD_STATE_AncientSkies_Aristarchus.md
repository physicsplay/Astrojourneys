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
| **A13** | **Closed** | Hand test done by the author on a real iPhone (see "A13 hand test result"). Two real bugs surfaced and were fixed in the process — see "Fixes found during A13". |
| A14 | Not started | Visual pass (Kimi K3) — hand off using the regenerated physics snapshot. |
| **A16** | **Done, findings adjudicated** | Independent review by GPT-5.6 Sol. Six Articles claimed; four upheld, one partly upheld, two rejected with evidence. See "A16 independent review". |
| A15, A17 | Not started | |

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

## Fixes found during A13 (real hand test, iPhone)

The hand test did what it's chartered to do — it found two things no automated check could:

4. **Content — Predict stage misattributed the Moon method to Archimedes.** The ARISTARCHUS
   dialogue in the Predict (Moon) stage credited Archimedes' cylinder-on-a-rod / Sand Reckoner
   technique — which is correctly cited elsewhere for the Crisis (Sun-box) stage — for Aristarchus'
   own bead method. Rewritten to remove the misattribution while keeping the hand-wobble framing.
   Reported by the author reading the briefing text.
5. **Boot — dead START MISSION button in restricted mobile webviews.** `init()` only ran on the
   `window` `load` event. On the author's iPhone, opening the downloaded file falls to iOS's
   built-in preview handler (no browser appears as an "Open In" option, even with Chrome
   installed — an iOS file-association limitation, not a Charter defect), and that handler never
   dispatches a full `load` event for a local file with zero subresources. The title screen
   (static markup) rendered; every button was dead with no visible error. Fixed by booting on
   `DOMContentLoaded` (or immediately if the script runs after the DOM is already parsed), keeping
   `load` only as a fallback. Verified with Playwright (no regression) — the actual restricted-webview
   behavior itself isn't reproducible from this environment, only inferred and corrected for.

Because neither iOS route (Files "Open In", Quick Look) would run the fixed file's JavaScript
either — that limitation is about how iOS hands a *local* file to an app, independent of the fix —
final verification was done by having the author open the committed branch content as a normal
web page via `https://raw.githack.com/physicsplay/Astrojourneys/claude/ancient-skies-game-plan-mrf9bd/AncientSkies_Aristarchus.html`
(a third-party CDN mirror of GitHub content, used here only as a temporary test URL — not part of
the shipped game, and not a substitute for the real publish step in Track E, which still switches
`index.html`/`README.md` last, after A14/A16).

## A13 hand test result

| # | Check | Result |
|---|---|---|
| 1 | Touch controls, real phone | ✅ iPhone, played a full stage by touch |
| 2 | Layout at 375px | ✅ "η αναγνωσιμότητα και το layout είναι ok" |
| 3 | Cold reload | ✅ Covered by repeated close/reopen cycles during this debugging session |
| 4 | Runs with network off | ✅ Loaded, airplane mode on, kept playing without a reload |
| 5 | Debrief shows prediction/actual/error%/worked solution | ✅ "όλα καθαρά και κατανοητά" |

## A16 independent review (GPT-5.6 Sol) — findings and adjudication

Sent blind: `CHARTER.md` + the game file, no design rationale. Sol reported violations of
Articles 4, 7, 9, 13, 14, 15. Each was checked against the source before anything was changed
(Charter: findings arrive as proposals; only the checks decide).

### Upheld and fixed

6. **Article 7 — the 1/110 leak (Sol found it; Sol understated it).** Crisis told the student
   pre-commit that the Moon and Sun share a view-ratio "near 1 part in 110" — in the NPC dialogue,
   the Data card note, and a hint. Sol called this "a direct numerical route to approximately the
   target diameter". Computed: `149,600,000 / 110 = 1,360,000 km` against an analytic
   `1,392,000 km` = **2.30% error, inside the 5% Gold band**. A student could skip the box, the
   hole correction and the entire Crisis lesson, divide by 110, and be awarded Gold. Promoted to
   the top of the fix list. Fix: the eclipse cross-check is now stated qualitatively (the two
   view-ratios are *equal*; the box's raw ratio is *too wide*) in the dialogue, the Data note, the
   hint and the post-rejection message. The number survives only in the end-of-game cinematic,
   which fires after all four stages are already Gold. Verified: pre-commit UI scraped at the
   Crisis compute step with both hints spent — no `1/110` anywhere; perfect student still Gold.
7. **Articles 4 + 15(a) — Watch's free concept score.** `startStage()` had
   `S.gateScore=(st==="watch"?1:0)` and Watch's `steps` had no `"gate"` — 25 composite points
   awarded for a concept gate that never ran, against Article 4's explicit "*every stage* grades
   all four components". Fix: Watch now has a real concept gate (a proportional-reasoning MCQ on
   what happens to L when the target's distance doubles, distractors drawn from the game's own
   misconception map) plus its own free-idea prompt, and `S.gateScore` starts at 0 for every stage.
8. **Article 15(b) — Watch skipped the ungraded free-text box.** The exception in `debrief1()` is
   removed; Watch now runs free-text → graded MCQ like every other stage, with its own `selfPrompt`.
9. **Article 9 — Gold at exactly 5%.** `errPct<=g` granted Gold at 5.000% where the Charter says
   *<5%*. Now `errPct<g`. Verified: 4.999% Gold, 5.000% Silver.
10. **Article 13 — Presentation Mode had no contrast change.** It scaled fonts (×1.35, verified
   17px→23px) and persisted, but changed no colour. Added darker grounds, brighter ink and
   stronger borders under `html.presentation`; object identity colours are deliberately not
   remapped. Verified: `--ink`, `--bg`, `--muted`, `--line` all change.

### Partly upheld

11. **Article 14 — shared colour identity.** True: the Moon was cream in SIGHT and cyan in
   GEOMETRY (so was the Pharos, papyrus vs cyan). Fixed by giving the target object its SIGHT
   colour in the geometry diagram and reserving cyan for *distances*, which are not objects; the
   legend now says so explicitly. Low severity, but a real inconsistency.

### Rejected, with reasons

- **Article 14 "two representations share one canvas"** — Sol called this "the strongest structural
  violation". Rejected: the Charter *prescribes tabs as the remedy* ("the answer is one card with
  tabs … tabs count as one card and force the student to notice the representations are distinct").
  The prohibition targets simultaneous co-mingling ("a force diagram drawn on top of a map"). Only
  one representation paints at a time and the passport swaps with it. This is the prescribed fix,
  not a violation of it.
- **Article 7 "analytic answers sit in the source"** — rejected as a code fix. Every stored
  `analytic` is *exactly* recomputable from data already displayed to the student
  (P1: `363,300 × 6.0 / 580 = 3758.3`; I1: `3,475 × 620 / 6.0 = 359,083`), so deleting the literals
  buys nothing, and Article 10 (single file, offline, no server) makes hiding the answer
  structurally impossible. Sol identified this correctly in its own gap list (#8: Article 7 and
  Check 8 use different threat models) — it is a Charter question for the author, not a defect.
- **Article 13 three-layer architecture** — not logged as a violation. The compute step shows
  Action + Data + Canvas = exactly 3 cards, within Article 5; whether DATA must be literally
  "one tap" rather than its own card is genuinely ambiguous in the Charter text. Needs an author
  ruling, not a unilateral change.

### Consequential side-effect handled

Sol's gap #7 (persisted state is not version-safe) bites here: medal *semantics* changed twice now
(Easy-mode band widening removed, composite cap added, Gold made strict, Watch gate added), so a
medal earned under the old rules no longer means the same thing. Graded keys bumped
`ari_v1_stages`/`ari_v1_best` → `ari_v2_stages`/`ari_v2_best`. Preference keys deliberately left at
v1 — they carry no grading meaning and a teacher should not lose their projector setting.

### Charter gaps Sol raised that remain open (author decisions, no code change)

Historical-accuracy standard (apt — the A13 hand test caught an Archimedes misattribution that no
Article governs); accessibility beyond font size and keyboard parity (WCAG contrast, screen
readers, canvas alternatives); colour must never be the *sole* identifier; browser/platform matrix;
performance budget; `localStorage` privacy/retention policy; persisted-state versioning as a
standing rule; the Article 7 vs Check 8 threat-model split; shipping the regression tests
alongside the game; cognitive-load/duration target.

## A16 round 2 — the Crisis A8 internal-consistency defect

Sol re-reviewed the corrected build, confirmed all six earlier fixes, **withdrew** its Article 14
"two representations share one canvas" finding (agreeing the Charter's wording, not the game,
is what needs changing), and raised one new blocking item plus one refinement.

**The new finding is a red gate the Mission ATLAS skill already documents by name:**

> "A scenario whose endorsed method cannot reproduce its own graded target is a red gate — one
> shipped (**C3, Aristarchus**) taught 'value kept' while grading the corrected number."

Sol rediscovered this independently and blind. Verified: C3 endorsed the student to *declare the
correction negligible and keep the plain value* (→ 1,417,211 km) while grading against the
*corrected* 1,392,000 km — 1.81% apart. The student following the taught method exactly was
graded against a number that method does not produce.

Checking further turned up a milder second instance Sol did **not** catch: C1 and C2's worked
solutions displayed `149,600,000 × 9.30/1000 = 1,392,000 km`, but that arithmetic gives
**1,391,280**. A student checking the line by hand got a different number than the line claimed.

Fix (Sol's option A, which is also what the skill's rule requires — *grade the reasoning model the
student was told to use*): `analytic` is now what each scenario's endorsed method actually produces.

| Scenario | Endorsed method | Graded target (was → now) |
|---|---|---|
| C1 | subtract the hole width | 1,392,000 → **1,391,280** |
| C2 | subtract the hole width | 1,392,000 → **1,391,280** |
| C3 | declare negligible, keep the plain value | 1,392,000 → **1,417,211** |

The modern 1,392,000 km stays as the MODERN column in the debrief, and C3's worked solution now
states the ~1.8% gap explicitly as the declared cost of the correction the student chose to skip —
"the method is graded, not the gap". That is the series rule (*scoring resets, narrative
propagates*; deviation from modern values is celebrated, never penalised), now actually honoured.

Verified: on all three variants the endorsed method earns Gold 100/100 and the worked solution's
displayed arithmetic matches its displayed result. On C3 the discouraged "correct anyway" choice
lands 1.76% off — still inside the 5% band, which is correct: the numeric component cannot resolve
a 1.8% judgement call, and the judgement is what the concept MCQ grades (25% of the composite).

**Also taken (refinement, not a violation):** Sol noted Watch's free-text prompt asked a different
conceptual question than the MCQ that followed it. Reworded so the student first generates their
own qualitative prediction about the *same* proportional change the MCQ then tests.

**Article 14 canvas wording — Charter amendment proposed, not applied.** Both Sol and this session
now agree the implementation is right and the Charter sentence is over-specified. Amending the
Charter is an author decision, so the proposed wording is parked in "Open items" rather than
written in.

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

## Open items for the author

1. **A14 (visual pass, Kimi K3) is the only build gate left.** Hand off the current file with the
   Track C hard limits; on return, diff against `PHYSICS_SNAPSHOT_AncientSkies_Aristarchus.js`
   (regenerated after the A16 fixes — the pre-review snapshot is stale and must not be used).
   Any byte difference in those functions = reject the whole pass.
2. **Three Charter questions raised by A16 that only the author can settle.** All three are
   Charter ambiguities, not defects in this game — no code change is pending on any of them:
   - **Article 14, "never share a canvas".** Both reviewers now agree the tabbed single-canvas
     implementation is correct and the sentence is over-specified — it forbids the very remedy the
     same paragraph prescribes. Proposed amendment: *"Two different kinds of diagram never share a
     **surface at the same time**. One canvas redrawn per tab satisfies this; two diagram types
     painted simultaneously onto one surface does not."* Approve and I'll write it in.
   - **Article 7 vs Check 8** — whether source-visible answers count as a breach at all, given
     Article 10 makes hiding them structurally impossible (see "Rejected, with reasons").
   - **Article 13** — whether the DATA layer must be literally one tap rather than its own card.
3. **Do you have a `DESIGN_LOCK.md` for this pilot outside the repo?** If so, send it so gates
   A1–A9 can be checked against it rather than left as "inferred from code."
4. **Repo-wide decision, not just this game:** none of the ten pre-delivery checks are automated
   here. Worth a separate initiative to build `tools/` + `.github/workflows/checks.yml` once,
   rather than re-deriving manual checks by hand for every game (this one included) going forward.

## File

`AncientSkies_Aristarchus.html` — committed to this branch, **not yet linked from `index.html` or
`README.md`** (Track A/E rule: the link changes last, only once every check is green and the
perfect-student test earns Gold — neither has fully happened yet).

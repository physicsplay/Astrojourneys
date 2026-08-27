# Mission ATLAS Charter — 15 Articles

Governs every single-file HTML physics/astronomy game in this project (including the Ancient
Skies series). **The Charter wins over any feature request.**

## The 15 Articles (binding)

1. **Purpose** — the student must end able to *predict* and *explain*, not merely observe. Winning without understanding = failure. Losing due to opacity = failure.
2. **One relationship per game** — exactly one equation as the mathematical core, used by hand at least three times. Reject "a game about thermodynamics"; that is a topic, not a relationship.
3. **Scientific accuracy is absolute** — correct SI constants (g_moon 1.62, g_mars 3.71 m/s²), equations derived from conservation laws, Newtonian mechanics, or exact geometry of light and measurement (similar triangles, shadow and ray constructions — the Ancient Skies series), never tuned for feel. All simplifications stated explicitly to the student. **Any empirical or biomechanical coefficient that enters a graded quantity must be shown on screen with its justification.** An undeclared factor punishes the student who reasons correctly from physics.
4. **Compute, don't guess** — the student writes a number that locks the simulation before it runs. Trial-and-error must be visibly inferior. **Scoring: 40% numerical prediction accuracy · 25% qualitative concept gate · 25% self-explanation · 10% confidence calibration.** Numerical precision is deliberately not the majority of the grade: the FCI literature (Hestenes, Mazur) shows students solve quantitative problems correctly while holding a wrong qualitative model, so a scheme dominated by arithmetic accuracy measures calculator care, not understanding. Calibration maps low/medium/high to p = 0.25 / 0.6 / 0.9 and scores `1 − (p − outcome)²`, penalising habitual low confidence as well as overconfidence. **Medals, rewards and unlocks are driven by the composite:** the awarded medal is `min(numeric-band medal, composite-band medal)` — composite bands Gold ≥ 90 · Silver ≥ 75 · Bronze ≥ 60 (thresholds Python-verified per game at the design gates), with the numeric error bands (Article 9) as prerequisite. Fanfare, fireworks and stage unlock follow the awarded medal, never raw error alone. Every stage grades all four components; Watch's numeric component is its committed observational count (Article 15c).
5. **Progressive disclosure** — never more than **3 cards visible at once**. Steps: Brief → Compute & commit → Run → Debrief. Earlier cards are *hidden*, not dimmed.
6. **Stages, not difficulties** — Watch → Predict → Inverse → Crisis. Stage N+1 unlocks only on Bronze+ in stage N. A single named **support mode** (Easy) is permitted as scaffolding only — an extra strategy hint and softer narrative framing. It never changes medal bands, first-attempt scoring, or any input to the composite: a medal means the same thing in every mode (author decision, Aug 2026).
7. **Anti-cheating is architectural** — the correct answer never appears in the UI before the student commits. This includes any optimal-plan or best-solution readout. Hints give strategy, never numbers. Bonus panels lock behind medals.
8. **Feedback with precision, not politeness** — prediction vs actual, absolute and relative error, worked solution. Never "good try".
9. **Arcade emotion, scientific composure** — sounds, fireworks per medal, unlock toasts, named characters. But no reward for wrong answers, no free hints beyond the first, no medal inflation (Gold requires error <5% in every mode — necessary, not sufficient; award wiring in Article 4). No leaderboards and no social comparison: mastery-referenced medals are the defensible form of reward.
10. **Single-file delivery, zero runtime dependencies** — one self-contained HTML file: no CDN, no external fonts, full offline operation, readable and editable in a text editor. A **non-compiling assembly step** is permitted: a Node script injecting shared blocks between commented markers. No transpiling, no minification — the emitted HTML must stay readable and its `git diff` reviewable.
11. **Mobile-first touch + desktop keyboard** — 1200 / 768 / 375 px. **Keyboard completion parity is an acceptance criterion: the game must be completable end to end without a pointer.**
12. **English first** — `I18N` ready, translations as later passes. A game that ships with a non-English default violates this.
13. **Legibility floor** — see below.
14. **Representational clarity** — see below.
15. **Qualitative before quantitative** — see below.

## Article 13 — Legibility

| Category | Minimum |
|---|---|
| Numbers the student reads to compute | 20px (1.25rem) |
| Instructions, story, feedback | 16px (1rem) |
| Labels, card titles, stage names | 14px (0.875rem) |
| **Absolute floor** — units, badges, codes only | **13px** |

Also: `tabular-nums` on every compared number; `line-height` ≥ 1.45; **no `user-scalable=no`**; a **Presentation Mode** toggle (×1.35 root font, higher contrast, persisted) for classroom projection; `prefers-reduced-motion` honoured for all non-essential animation.

**Three layers** — information is never deleted, only ranked. **Layer 1 ACTION** always visible (one sentence + input). **Layer 2 DATA** one tap (values + equation). **Layer 3 BRIEF** closed `<details>` (assumptions, units, scoring). Information squeezed into 10px is functionally identical to information that is missing.

For canvas text: capture the original `font` descriptor from `CanvasRenderingContext2D.prototype` and redefine it **on the prototype** so every assignment is scaled by Presentation Mode and clamped to 13px. Patching the prototype also covers secondary canvases.

**The observed failure mode is drift, not ignorance.** Every time a feature is added, fonts shrink to make room; measured across two builds of the same game, sub-13px declarations rose from 33 to 69.

**Raising a font size breaks layouts that used to fit.** An Article 13 pass is not finished until the paint audit is also clean; budget for re-wrapping text and re-anchoring labels within the same pass.

**Backing pixels are not displayed pixels.** A canvas backing store scaled down by CSS shrinks every `ctx.font` value proportionally on screen, regardless of what the source declares. A legal 13px font inside a 900px-wide canvas displayed at 321px paints at 4.6px. Canvases must render at displayed resolution (devicePixelRatio-aware) or scale `ctx.font` inversely to the shrink.

## Article 14 — Representational Clarity

Every diagram carries a **passport** with four fixed fields:

- **VIEW** — a visible badge naming the projection: 🗺 top-down · ⛰ side view · ⚖ force diagram · 📈 graph
- **SHOWS** — one sentence: what is depicted, and for which instant or segment
- **AXES** — explicit, **with units**. If there are no axes (a force diagram), say so and explain that arrow *length is not to scale* while direction is real
- **READ IT** — what to extract, tied to the game's equation

**Declare every distortion.** Visual distortion is a simplification and Article 3 requires declaring it. A logarithmic axis is a distortion too, and must be labelled as one.

**One representation, one surface.** Two different kinds of diagram never share a canvas. When Article 5 squeezes, the answer is **one card with tabs**, not diagrams crammed together.

**Shared identity** — the same object keeps the same name and colour in every representation.

## Article 15 — Qualitative before quantitative

Binding, not optional. Every game must contain all four:

**(a) Concept gate — before the compute field opens.** One or two MCQs on directionality or proportional reasoning, distractors drawn from the game's own misconception map. Scored on the first attempt; a wrong answer yields a strategy hint and allows a retry so the student is never hard-blocked.

**(b) Self-explanation — after the run, before the worked solution.** A **free-text box**, *ungraded*, unlocking on a minimum character count only — never scored, never stored, never transmitted — followed by a graded **MCQ** on the same question with misconception-derived distractors.

**(c) Active Watch stage.** The Watch stage carries an observational task, not passive viewing.

**(d) First hint free, in every mode.** Help-avoidance is as damaging as hint abuse.

**Transfer question.** Every debrief ends with one MCQ posing the same relationship in a non-space context.

**Framing of confidence feedback.** High-confidence errors are the most correctable (hypercorrection effect) — framed as the most valuable moment in the lesson, never a reprimand.

**MCQ option order:** shuffle at render time (preserving the answer mapping). A fixed position for the correct option is a tell, exactly like ALL-CAPS.

## The grading-altitude trap

The quantity graded must be the quantity asked for, measured at the same point. Watch for: (1) a collision/measurement point that doesn't match the requested quantity's true location, (2) an **undeclared coefficient** entering a graded number, (3) **inherited error across chained stages** — when stage N's given value is stage N−1's answer, grading stage N against the student's own earlier result punishes correct method for an earlier miss. Rule: **scoring resets, narrative propagates** — each stage grades computation from that stage's given data against its own analytic value; the accumulated personal ladder may be *shown* (ungraded) in the debrief, never graded.

## Pre-delivery verification — the ten checks

1. Anything below 13px is a blocking defect, in CSS, SVG and `ctx.font` alike.
2. No step may exceed 3 cards. Absence of `data-step` entirely is itself a failure.
3. The inline script parses, and there are zero external resources (Article 10).
4. Boots behind a DOM shim and drives several hundred frames without error.
5. After any pass that must not change the physics/scoring logic, every named function must be **byte-identical**; the same seeded scenario must produce identical final state.
6. The **paint audit** — every draw call inside the canvas bounds.
7. The **perfect-student grading test** — compute the analytic answer by hand, submit it, confirm Gold across every scenario.
8. No correct answer — including any optimal-plan readout — sits in the DOM before commit.
9. Every diagram has a passport and every distortion is declared.
10. The game completes once using **only the keyboard** (Article 11).

## Publishing

- **Never overwrite a working game.** A new version ships under a new filename while `index.html` still points at the old one.
- **The link changes last**, only once every check is green and the perfect-student test earns Gold.
- `index.html` and `README.md` must agree with each other and with the files actually committed.
